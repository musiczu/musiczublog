# Proxmox Installation

## Step 1 Download iso image of proxmox
Download iso image of proxmox [proxmox](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso)

## Step 2 Using Rufus to burn iso image to a Usb drive

using [rufus](https://rufus.ie/en/) to burn it to usb flash drive. this method use to make usb flash drive as a boot driver

## Step 3 Plug and turn on target machine

plug usb to target machine and turn on the machine 

following the instruction [Installation guide](https://www.proxmox.com/en/products/proxmox-virtual-environment/get-started) → choose the main storage for installing proxmox 
if you don’t see your target storage, let see you just bought  a  new ssd you have to clean the disk before hand, otherwise it cannot detect the storage

after successfully installing proxmox on target storage reboot the machine

some time you have to open a bios , boot loader and modify boot option to use your target disk to manually boot using your target proxmox storage


## My tips

- using UEFI storage for Proxmox os boot loader
- If you want to using a GPU in your VMs don't forget to Enable VT-d for Intel CPU  , IOMMU for AMD cpu in the Bios setup