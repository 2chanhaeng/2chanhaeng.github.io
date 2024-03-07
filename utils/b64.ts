export const encodeB64 = (str: string) =>
  Buffer.from(str, "utf8")
    .toString("base64")
    .replace(/\//g, "_")
    .replace(/\+/g, "-");
export const decodeB64 = (str: string) =>
  Buffer.from(str, "base64")
    .toString("utf8")
    .replace(/_/g, "/")
    .replace(/-/g, "+");
