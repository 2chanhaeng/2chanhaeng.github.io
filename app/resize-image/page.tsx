"use client";

import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResizeImagePage() {
  const [src, setSrc] = useState("");
  const [originalName, setOriginalName] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [lockRatio, setLockRatio] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      const img = new Image();
      img.onload = () => {
        setWidth(img.width);
        setHeight(img.height);
        setSrc(result);
        setOriginalName(file.name);
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  };

  const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const curr = Number(e.target.value);
    if (curr <= 0) return;
    const ratio = curr / width;
    setWidth(curr);
    if (lockRatio) {
      setHeight((p) => Math.round(ratio * p));
    }
  };
  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const curr = Number(e.target.value);
    if (curr <= 0) return;
    const ratio = curr / height;
    setHeight(curr);
    if (lockRatio) {
      setWidth((p) => Math.round(ratio * p));
    }
  };
  const handleLockChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLockRatio(e.target.checked);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">이미지 사이즈 변경기</h1>
      <ImageForm
        width={width}
        height={height}
        src={src}
        onFileChange={handleFileChange}
        onWidthChange={handleWidthChange}
        onHeightChange={handleHeightChange}
        lockRatio={lockRatio}
        onLockChange={handleLockChange}
      />
      <SaveButtons origin={originalName} canvasRef={canvasRef} src={src} />
      <ImageCanvas
        src={src}
        width={width}
        height={height}
        canvasRef={canvasRef}
      />
    </main>
  );
}

// ImageForm 컴포넌트
function ImageForm({
  width,
  height,
  src,
  onFileChange,
  onWidthChange,
  onHeightChange,
  lockRatio,
  onLockChange,
}: {
  width: number;
  height: number;
  src: string;
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onWidthChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onHeightChange: (e: ChangeEvent<HTMLInputElement>) => void;
  lockRatio: boolean;
  onLockChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <form className="flex flex-col items-stretch gap-4 mb-8 max-w-md">
      <Input type="file" accept="image/*" onChange={onFileChange} />
      {src && (
        <>
          <label>
            가로(px):
            <Input type="number" value={width} onChange={onWidthChange} />
          </label>
          <label>
            세로(px):
            <Input type="number" value={height} onChange={onHeightChange} />
          </label>
          <label>
            가로세로비 고정:
            <input
              type="checkbox"
              checked={lockRatio}
              onChange={onLockChange}
              className="ml-2"
            />
          </label>
        </>
      )}
    </form>
  );
}

// ImageCanvas 컴포넌트
function ImageCanvas({
  src,
  width,
  height,
  canvasRef,
}: {
  src: string;
  width: number;
  height: number;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}) {
  useEffect(() => {
    if (!src || !width || !height) return;
    const img = new Image();
    img.onload = () => {
      if (!canvasRef.current) {
        console.error("Canvas ref is not set");
        throw new Error("Canvas ref is not set");
      }
      const canvas = canvasRef.current;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d")!;
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
    };
    img.src = src;
  }, [src, width, height, canvasRef]);

  return <canvas ref={canvasRef} />;
}

// SaveButtons 컴포넌트
function SaveButtons({
  src,
  origin,
  canvasRef,
}: {
  src: string;
  origin: string;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}) {
  if (!src) return null;
  const formats = ["png", "jpg", "webp"];

  return (
    <div className="flex gap-2 mb-4">
      {formats.map((format) => (
        <Button
          key={`save-${format}`}
          onClick={async () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const blob = await extractBlob(canvas, format);
            if (!blob) {
              console.error("Failed to convert canvas to blob");
              return;
            }
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = nameImage(origin, canvas, format);
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
          }}
        >
          {format.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}

const nameImage = (
  origin: string,
  canvas: HTMLCanvasElement,
  ext: string
): string => {
  const originParts = origin.split(".").slice(0, -1).join(".");
  const originName = originParts.slice(0, 15);

  const width = canvas.width;
  const height = canvas.height;
  const size = `${width}x${height}`;

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}${month}${day}_${hours}${minutes}${seconds}`;

  return `${originName} ${size} ${formattedDate}.${ext}`;
};

const extractBlob = (
  canvas: HTMLCanvasElement,
  ext: string
): Promise<Blob | null> =>
  new Promise((resolve) =>
    canvas.toBlob((b) => resolve(b), `image/${ext === "jpg" ? "jpeg" : ext}`)
  );
