# GPU Passthrough Guide

reference : [reddit](ref : https://www.reddit.com/r/homelab/comments/b5xpua/the_ultimate_beginners_guide_to_gpu_passthrough/)

## **1. Enable IOMMU in BIOS**
- Reboot your system and enter BIOS/UEFI settings.
- Look for options related to **VT-d** (Intel) or **AMD-Vi** (AMD).
- Enable **IOMMU** or **VT-d**.
- Save and exit the BIOS.

---

## **2. Enable IOMMU in Proxmox GRUB Configuration**

Edit the GRUB configuration:
```sh
nano /etc/default/grub
```

Change this line:
```sh
GRUB_CMDLINE_LINUX_DEFAULT="quiet"
```
to:

- **For Intel CPUs**:
  ```sh
  GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on iommu=pt"
  ```
- **For AMD CPUs**:
  ```sh
  GRUB_CMDLINE_LINUX_DEFAULT="quiet amd_iommu=on iommu=pt"
  ```

Save and update GRUB:
```sh
update-grub
```

---

## **3. Load IOMMU Kernel Modules**
Edit the modules file:
```sh
nano /etc/modules
```
Add the following lines at the bottom:
```sh
vfio
vfio_pci
vfio_iommu_type1
vfio_virqfd
```
Save and exit.

Update the initramfs:
```sh
update-initramfs -u
```

---

## **4. Verify IOMMU is Enabled**
### **Step 1: Reboot**
```sh
reboot
```

### **Step 2: Check IOMMU Status**
```sh
dmesg | grep -i iommu
```
Expected output:
```
DMAR: IOMMU enabled
AMD-Vi: Enabling IOMMU at 0000:00:00.2 
```

### **Step 3: Verify PCI Devices**
```sh
lspci -nnk | grep -i -A3 "vga\|gpu"
```
If your **GPU or PCI device appears**, IOMMU is successfully enabled.

---

