$ErrorActionPreference = 'Stop'
$zip = Read-Host 'Drag the main-port.zip file onto THIS window, then press Enter'
$zip = $zip.Trim().Trim('"')
if (-not (Test-Path -LiteralPath $zip)) { Write-Host "NOT FOUND: $zip" -ForegroundColor Red; exit 1 }

$temp = Join-Path $env:TEMP 'mpmerge'
if (Test-Path $temp) { Remove-Item $temp -Recurse -Force }
Expand-Archive -LiteralPath $zip -DestinationPath $temp -Force
$src = if (Test-Path (Join-Path $temp 'main-port\package.json')) { Join-Path $temp 'main-port' } else { $temp }

Get-ChildItem -LiteralPath $src -Force |
  Where-Object { $_.Name -notin '.git','node_modules','.next' } |
  ForEach-Object { Copy-Item -LiteralPath $_.FullName -Destination . -Recurse -Force }

# placeholders ONLY for any project screenshot that is missing (keeps the build green)
$b64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
foreach ($n in 'fincash1','fincash2','fincash3','land1','land2','land3') {
  $p = "src\data\$n.png"
  if (-not (Test-Path $p)) { [IO.File]::WriteAllBytes((Join-Path $PWD $p), [Convert]::FromBase64String($b64)); Write-Host "  placeholder -> $p" }
}
Remove-Item src\data\portfolioProjects.ts -ErrorAction SilentlyContinue
Remove-Item $temp -Recurse -Force

Write-Host "`nname now: $((Get-Content package.json -Raw | Select-String '"name"\s*:\s*"([^"]+)"').Matches.Groups[1].Value)" -ForegroundColor Cyan
Write-Host ("projects.ts / DEPLOY.md / .editorconfig present: " + ((Test-Path src\data\projects.ts) -and (Test-Path DEPLOY.md) -and (Test-Path .editorconfig))) -ForegroundColor Cyan