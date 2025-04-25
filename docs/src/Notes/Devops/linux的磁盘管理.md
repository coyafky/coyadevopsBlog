---
title: "linux的磁盘管理"
outline: deep
desc: "linux的磁盘管理"
tags: "Devops"
updateTime: "2025-04-24 16:11"
---

```mermaid
mindmap
  root((Linux磁盘管理))
    查看信息
      df -h: "查看磁盘空间使用情况"
      du -sh: "统计目录大小"
      lsblk: "查看块设备列表"
      blkid: "查看块设备UUID"
    分区管理
      fdisk: "MBR分区工具"
        fdisk -l: "列出分区表"
      parted: "GPT分区工具"
        parted -l: "显示磁盘布局"
    格式化挂载
      mkfs
        mkfs.ext4: "创建ext4文件系统"
        mkfs.xfs: "创建XFS文件系统"
      mount/umount
        mount -a: "挂载/etc/fstab所有条目"
        mount -t: "指定文件系统类型"
        umount -l: "延迟卸载"
    其他工具
      fsck: "文件系统检查修复"
      mkswap/swapon: "创建/启用swap分区"
      resize2fs: "调整ext文件系统大小"
```

### 常用指令示例
```bash
# 查看磁盘空间（人类可读格式）
df -h

# 查看/home目录大小
du -sh /home

# 创建新分区（需要root权限）
sudo fdisk /dev/sdb

# 格式化分区为ext4
sudo mkfs.ext4 /dev/sdb1

# 永久挂载（需编辑/etc/fstab）
UUID=xxxx-xxxx /mnt/data ext4 defaults 0 2
```
