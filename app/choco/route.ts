export function GET() {
  return new Response(`
Set-ExecutionPolicy Unrestrict
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
choco install firefox git vscode gh github-desktop nvm python figma discord -y --ignore-checksums
`);
}
