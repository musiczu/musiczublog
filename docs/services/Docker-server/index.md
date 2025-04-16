# Docker-server (Lxc)

### Why i choose Lxc over VMs

To answer this question for me, i have a clear goal that i would like to build this Lxc as a docker server which most of the services will be running on docker engine.

Lxc is a lightweight Linux container that don't use much resource

Here are the comparisons

| Feature                     | LXC Container                         | Virtual Machine (VM)                     |
|----------------------------|----------------------------------------|------------------------------------------|
|  Performance              | ✅ Near-native, very fast               | ❌ Slightly lower due to virtualization   |
|  Resource Usage           | ✅ Very low (shares host kernel)        | ❌ High (full OS + kernel per VM)         |
|  Boot Speed               | ✅ Instant (~2–3s)                      | ❌ Slower (~30s or more)                  |
|  Setup Complexity         | ✅ Simple just create CT Then ssh into         | ❌ More steps (OS install, config, etc.)  |
|  Disk Usage               | ✅ Minimal (shares base image)          | ❌ Larger (full OS image)                 |
|  Backup & Snapshot       | ✅ Fast, small snapshots                | ❌ Larger snapshots, slower to back up    |
|  Network Flexibility      | ✅ Good (bridge, NAT)                   | ✅ Excellent (full virtual NIC support)   |
|  Security Isolation       | ⚠️ Shared kernel (less isolated)  but for personal usage it acceptable      | ✅ Full isolation (separate OS + kernel)  |
|  Live Migration           | ✅ Supported (with shared storage)      | ✅ Supported (more mature)                |
|  Scalability              | ✅ Lightweight, scale easily            | ❌ Heavier scaling                        |

Like i said if you want server to do something specifically i recommend going for Lxc but if you plan to do something more general that you want full customization over server such as Active directory , some AI,GPU stuff , Gaming , reverse engineer labs etc. you should go for VMs

Since you read this far services which are running inside my docker server is <br>

1. [Portainer](https://www.portainer.io/) - Exactly to manage all docker stuff <br>
2. [kivata](https://wiki.kavitareader.com/) - self-hosted ebook reader <br>
3. [File-browser](https://github.com/filebrowser/filebrowser) - easily upload file to docker server and also to uploads my book <br>