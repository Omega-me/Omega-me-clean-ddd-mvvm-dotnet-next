using System.Diagnostics;

namespace CompanyName.AppName.WebApp;

public abstract class Program
{
    static void Main(string[] args)
    {
        StartTerminal();
    }

    static void StartTerminal()
    {
        ProcessStartInfo startInfo = new ProcessStartInfo
        {
            Arguments = GetNpmCommand(),
            WorkingDirectory = GetUiPath(),
            FileName = GetTerminalExecutable(),
            UseShellExecute = true // Important for opening a terminal window
        };

        try
        {
            Process.Start(startInfo);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error starting terminal: {ex.Message}");
        }
    }

    static string GetTerminalExecutable()
    {
        // Check the operating system and return the appropriate terminal executable
        if (Environment.OSVersion.Platform == PlatformID.Win32NT)
        {
            return "cmd.exe"; // Windows
        }
        else if (Environment.OSVersion.Platform == PlatformID.Unix)
        {
            return "gnome-terminal"; // Adjust as needed (e.g., xterm, gnome-terminal, etc.)
        }
        else if (Environment.OSVersion.Platform == PlatformID.MacOSX)
        {
            return "Terminal.app"; // For macOS
        }
        else
        {
            throw new NotSupportedException("Unsupported OS");
        }
    }
    
    static string GetNpmCommand()
    {
        // Prepare the command to run `npm run dev`
        if (Environment.OSVersion.Platform == PlatformID.Win32NT)
        {
            return "/C npm run dev"; // Windows
        }
        else if (Environment.OSVersion.Platform == PlatformID.Unix || Environment.OSVersion.Platform == PlatformID.MacOSX)
        {
            return "-e 'cd path/to/your/next-app && npm run dev'"; // Replace with your path
        }
        else
        {
            throw new NotSupportedException("Unsupported OS");
        }
    }

    static string GetUiPath()
    {
        // Get the current working directory
        string path = Directory.GetCurrentDirectory();
        
        // Get the project directory
        string dirPath = Path.Combine(Directory.GetParent(path)?.Parent?.Parent?.FullName ?? string.Empty, "Common", "ui");
        return dirPath;
    }
}