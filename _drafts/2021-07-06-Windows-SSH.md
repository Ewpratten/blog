---
layout: page
title:  "Configuring a native SSH server on Windows 10"
description: "A tutorial for future me"
date:   2021-07-06 
written: 2021-07-06 
tags: reference
excerpt: >-
    I commonly need to configure SSH servers on remote Windows 10 boxes. This post covers the whole process.
redirect_from: 
 - /post/eb09dHd9/
 - /eb09dHd9/
---

```powershell
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
Start-Service sshd

# Start on boot
Set-Service -Name sshd -StartupType 'Automatic'

# Check firewall
Get-NetFirewallRule -Name *ssh*

# If needed, add a firewall rule
New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22

```

https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement

Install Git + Git Bash...

```
Host hostname
	HostName hostname.example.com
	RequestTTY force
	User epratten
	RemoteCommand powershell "& 'C:\Program Files\Git\bin\sh.exe' --login"

```

Gen SSH keys on server:

```sh
ssh-keygen.exe
cat ~/.ssh/id_rsa.pub
```

Uninstall:

```powershell
Remove-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
```
