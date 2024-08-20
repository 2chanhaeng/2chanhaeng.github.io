import ClickToCopy from "@/components/ClickToCopy";

const commands = [
  "Set-ExecutionPolicy Unrestrict",
  "[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))",
  "choco install firefox git vscode gh github-desktop nvm python figma discord -y --ignore-checksums",
];
export default async function ChocoPage() {
  return (
    <main className="p-2 flex flex-col gap-2">
      {commands.map((command) => (
        <ClickToCopy key={command}>{command}</ClickToCopy>
      ))}
    </main>
  );
}
