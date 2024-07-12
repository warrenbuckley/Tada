# Define the project file and configuration
$projectFile = "./Tada/Tada.csproj"
$configuration = "Release"
$outputDirectory = "./build.out"
$version = "1.0.0"
$packageJsonPath = "./Tada/wwwroot/umbraco-package.json"

# Delete all files in the output directory
if (Test-Path $outputDirectory) {
    Remove-Item "$outputDirectory/*"
}

# Update the version in umbraco.package.json
if (Test-Path $packageJsonPath) {
    $packageJson = Get-Content $packageJsonPath | ConvertFrom-Json
    $packageJson.version = $version
    $packageJson | ConvertTo-Json -Depth 32 | Set-Content $packageJsonPath
} else {
    Write-Output "The file $packageJsonPath does not exist."
}

# Pack the project into a NuGet package
dotnet pack $projectFile --configuration $configuration --output $outputDirectory /p:Version=$version

# Check if the pack was successful
if ($LASTEXITCODE -eq 0) {
    Write-Output "Pack successful."
} else {
    Write-Output "Pack failed."
    exit $LASTEXITCODE
}