﻿
# Root/JB Detection Bypass and SSL Pinning Bypass Script

This repository contains a batch scripts (`run_bypass_scripts.bat`) that automates the process of running multiple Root/JB Detection Bypass scripts or SSL Certificate Pinning Bypass Scripts on a specified app package on a connected device. The script allows you to execute all `.js` Frida scripts in a specified folder sequentially, prompting between each to observe output before moving on.

## Requirements

-   **Frida**: Ensure that [Frida](https://frida.re/) is installed and accessible from your command line.
-   **Connected Device**: The target device must be connected via USB and should have **Frida server** running if needed (e.g., for Android devices).
-   **Batch File**: This script is designed for Windows using a `.bat` file.

## Usage

1.  **Update the scripts if it is not updated**:
    
    - Go to https://github.com/zengfr/frida-codeshare-scripts
    - Under `frida-codeshare-scripts`  , search for `root`, `jailbreak` and `ssl` and download those scripts
    - Place all scripts in the correct respective folder (`iOS` or `Android`)

2.  **Run the Batch File**:

    -   Open a Command Prompt window.
    -   Navigate to the directory containing `run_bypass_scripts.bat`

4.  **Follow Prompts**:
    
    -   Enter the app package name for the target app (e.g., `com.example.app`).
    -   Enter the platform that is being used
    -   The batch script will also ask if the device is a remote device (connect to frida-server using network) or not (connect to frida-server using USB)
    -   The batch script will also ask if the scripts being used is for Root/JB Detection Bypass or SSL Certificate Pinning Bypass
    -   The script will automatically find all the bypass scripts for each specific platform

5.  **Script Execution**:
    
    -   Each Frida script will be executed one at a time on the specified app.
    -   After each script runs, the batch file will pause, allowing you to view the output and press `Enter` to proceed to the next script.
    -   When all scripts have been executed, the batch file will display a completion message.

## Example
Powershell

```powershell
PS C:\Users\user\Desktop\Root-JB Detection Bypass Script Automation> .\run_bypass_scripts.bat
Enter the target app package name (e.g., com.example.app): com.example.app
Which Platform it is: Android
Is this a remote device? (yes/y or no/n): no
Testing for SSL Pinning or Root/JB Detection? (S/s or D/d): D
Running 1/24
Running Frida script: .\Android\0xsaudi-root-detection-bypass__dmaral3noz.js on app: com.example.app
     ____
    / _  |   Frida 16.5.6 - A world-class dynamic instrumentation toolkit
   | (_| |
    > _  |   Commands:
   /_/ |_|       help      -> Displays the help system
   . . . .       object?   -> Display information about 'object'
   . . . .       exit/quit -> Exit
   . . . .
   . . . .   More info at https://frida.re/docs/home/
   . . . .
``` 

## Script Details

### `run_bypass_scripts.bat`

This batch file does the following:

-   Prompts for the target app package name and the platform the Application is running on.
-   Checks if the folder exists and contains `.js` files.
-   Iterates through each `.js` file found, prefixes `./` to the script path, and runs it with Frida.
-   Pauses between each script execution, allowing you to view the output and continue manually.

### Example Frida Command Used in the Script

The batch file uses the following command to execute each Frida script:

For USB
cmd
```cmd
frida -U -f <app_package_name> -l "./<script_path>"
``` 

-   `-U` specifies a USB-connected device.
-   `-f` spawns the app in a suspended state.
-   `-l` loads the specified Frida script.

For Network
cmd
```cmd
frida -H <IP Address of Device> -f <app_package_name> -l "./<script_path>"
```

-   `-H` specifies a host to be connected to.
-   `-f` spawns the app in a suspended state.
-   `-l` loads the specified Frida script.

## Troubleshooting

-   **Device Not Detected**: Ensure that the device is connected, USB debugging is enabled (for Android), and the Frida server is running.
-   **Script Errors**: If a script fails, check the Frida output in the console for specific errors related to the script.
-   **Incorrect Package Name**: Make sure the package name matches the target app. You can list installed packages using:
    -   For Android: `adb shell pm list packages | findstr <app_name>`.
