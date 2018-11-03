(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{151:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"各目录作用介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#各目录作用介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 各目录作用介绍")]),t._v(" "),e("h2",{attrs:{id:"dev"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dev","aria-hidden":"true"}},[t._v("#")]),t._v(" /dev")]),t._v(" "),e("p",[t._v("目录保存着外部设备代码的文件，这些文件比较特殊，实际上它们都指向所代表的外围设备，如终端、磁盘驱动器、光驱、打印机等。你可以访问这些外部设备，与访问一个文件或一个目录没有区别。如该目录下的子目录/dev/cdrom 表示光驱目录；子目录/dev/console 表示控制台；子目录 /dev/fd 表示软驱；子目录/dev/hd 表示硬盘上的一个分区；lp0 表示打印机；ttyS0 表示系统的串口设备；dsp 表示系统的音箱设备。例如在系统中键入“cd /dev/cdrom”，就可以看到光驱中的文件；键入“cd /dev/mouse”即可看鼠标的相关文件。")]),t._v(" "),e("p",[t._v("/cdrom 该目录在刚安装系统时是空的，你可以将光驱文件系统挂在这个目录下， 例如“mount /dev/cdrom /cdrom”。")]),t._v(" "),e("h2",{attrs:{id:"etc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc")]),t._v(" "),e("p",[t._v("目录是整个 Linux 系统的中心，其中包含所有系统管理和维护方面的配置文件，如 dhcpd.conf、host.conf、logrotate.conf、man.config、mke2fs.conf、modprobe.conf、resolv.conf、sysctl.conf、syslog.conf（或 rsyslog.conf）、xinetd.conf 和 yum.conf 等，其他的配置文件分别位于单独的子目录中。通常应注意备份这个目录中的重要配置文件，以便需要是能够快速的恢复系统。用于存放系统的配置文件和特定主机的相关文件。例如，记录用户帐号名称的 password 文件、投影密码的 shadow 文件等。该目录不包含任何二进制文件，并且该目录下的所有文件主要由管理员使用，普通用户只对其具有阅读权限。该目录还包含一些网络配置文件、文件系统、 x 系统配置文件、设备配置信息、设置用户信息等。")]),t._v(" "),e("h3",{attrs:{id:"etc-cron-d"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-cron-d","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/cron.d")]),t._v(" "),e("p",[t._v("用于存储 cron 进程调度运行后台进程所用的配置和控制文件。其他目录包括/etc/crontab 文件定义的 cron.hourly、cron.daily、cron.weekly 和 cron.monthly 等四个目录。")]),t._v(" "),e("h3",{attrs:{id:"etc-cups"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-cups","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/cups")]),t._v(" "),e("p",[t._v("用于存储通用 UNIX 打印系统（Commom UNIX Printing System，CUPS）使用的各种配置文件。")]),t._v(" "),e("h3",{attrs:{id:"etc-default"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-default","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/default")]),t._v(" "),e("p",[t._v("其中的文件用于提供部分工具软件（如 useradd 程序）使用的变量及其默认值。")]),t._v(" "),e("h3",{attrs:{id:"etc-httpd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-httpd","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/httpd")]),t._v(" "),e("p",[t._v("Apache 配置文件的根目录。Apache 是一个通用的、高性能的 HTTP 服务器，也是世界上最流行的 Web 服务器。Apache 采用模块化的设计方式，支持运行时的动态模块选择、虚拟主机，以及服务进程数量的动态调整等。")]),t._v(" "),e("h3",{attrs:{id:"etc-init-d"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-init-d","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/init.d")]),t._v(" "),e("p",[t._v("用于存储进入相应运行级时需要由 init 调度执行的脚本文件。在 Fedora Linux 系统中，这只是一个符号链接文件，实际的目录应为/etc/rc.d/init.d。")]),t._v(" "),e("h3",{attrs:{id:"etc-ipsec-d"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-ipsec-d","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/ipsec.d")]),t._v(" "),e("p",[t._v("用于存储 IPSee 使用的配置文件等。")]),t._v(" "),e("h3",{attrs:{id:"etc-kde"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-kde","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/kde")]),t._v(" "),e("p",[t._v("其中含有部分 KDE 初始化文件和 KDM 配置文件。")]),t._v(" "),e("h3",{attrs:{id:"etc-pki"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-pki","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/pki")]),t._v(" "),e("p",[t._v("用于存储各种密匙，如用于安装软件包的密匙等。")]),t._v(" "),e("h3",{attrs:{id:"etc-ppp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-ppp","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/ppp")]),t._v(" "),e("p",[t._v("用于存储 PPP 的脚本和配置文件。")]),t._v(" "),e("h3",{attrs:{id:"etc-profile-d"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-profile-d","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/profile.d")]),t._v(" "),e("p",[t._v("用于存储/etc/profile 等使用的辅助初始化文件，如 lang.sh 脚本文件等。")]),t._v(" "),e("h3",{attrs:{id:"etc-rc-d"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-rc-d","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/rc.d")]),t._v(" "),e("p",[t._v("用于存储进入相应运行级是由 init 进程调度执行的脚本文件。其中含有 init.d 和 rcN.d 等子目录（其中的 N 为 0、1、2、3、4、5 和 6，表示系统的运行级）。")]),t._v(" "),e("h3",{attrs:{id:"etc-samba-samba"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-samba-samba","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/samba Samba")]),t._v(" "),e("p",[t._v("配置文件的根目录。Samba 是一个网络共享软件的总称，Linux 系统中实现的 SMB 协议，允许 Linux 系统为 Windows 系统提供文件和打印共享服务。")]),t._v(" "),e("h3",{attrs:{id:"etc-security"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-security","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/security")]),t._v(" "),e("p",[t._v("用户存储的基本安全控制文件，包括注册控制文件、控制访问控制文件，以及资源限制控制文件等。")]),t._v(" "),e("h3",{attrs:{id:"etc-selinux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-selinux","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/selinux")]),t._v(" "),e("p",[t._v("SElinux(Security Enhanced Linux，由美国国家安全部(National Security Agency)领导开发的 GPL 项目，它拥有一个灵活而强制性的访问控制结构，旨在提高 Linux 系统的安全性，提供强健的安全保证，可防御未知攻击，据称相当于 B1 级的军事安全性能。比 MSNT 所谓的 C2 等高得多。应用 SELinux 后，可以减轻恶意攻击或恶意软件带来的灾难，并提供对机密性和完整性有很高要求的信息很高的安全保障。)配置文件的根目录。")]),t._v(" "),e("h3",{attrs:{id:"etc-skel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-skel","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/skel")]),t._v(" "),e("p",[t._v("其中存有默认的初始化文件，如.bash_logout、.bash_profile、.bashrc、.emacs、.kde 和.zshrc 等。每当新增一个新用户时，系统将会把其中的部分初始化文件复制到用户的主目录中。注意：上述文件均为隐藏文件。(即以“.“开头的文件名)")]),t._v(" "),e("h3",{attrs:{id:"etc-ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-ssh","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/ssh")]),t._v(" "),e("p",[t._v("这个目录含有系统配置过程，以及系统引导过程中需要用到的各种配置文件，也是 chkconfig 维护的各种后台服务进程配置文件的根目录。例如，其中的 clock 文件包含系统的时区设置，keyboard 文件包含键盘的类型定义，init 文件包含系统引导过程使用的参数定义等。")]),t._v(" "),e("h3",{attrs:{id:"etc-tomcat5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-tomcat5","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/tomcat5")]),t._v(" "),e("p",[t._v("tomcat 的根目录")]),t._v(" "),e("h3",{attrs:{id:"etc-vsftpd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-vsftpd","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/vsftpd")]),t._v(" "),e("p",[t._v("包含 FTP 服务器的配置文件，其中包括 vsftpd.conf、ftpusers 和 user_list 等重要文件。")]),t._v(" "),e("h3",{attrs:{id:"etc-xinetd-d"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-xinetd-d","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/xinetd.d")]),t._v(" "),e("p",[t._v("其中包含 xinetd 服务进程控制的所有传统网络服务使用的配置文件，尤其包含 telnet 等网络应用的配置文件。在 Linux 系统中，原有的 inetd 已由功能更强的 xinetd 服务进程取代，原有的 inetd.conf 配置文件也由 xinetd.d 目录中的一系列单独的配置文件取代。")]),t._v(" "),e("h3",{attrs:{id:"etc-yum"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-yum","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/yum")]),t._v(" "),e("p",[t._v("其中包含 yum 软件更新工具使用的配置文件。")]),t._v(" "),e("h3",{attrs:{id:"etc-yum-repos-d"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etc-yum-repos-d","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/yum.repos.d")]),t._v(" "),e("p",[t._v("其中包含每个软件仓库的配置文件。")]),t._v(" "),e("h2",{attrs:{id:"lib"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lib","aria-hidden":"true"}},[t._v("#")]),t._v(" /lib")]),t._v(" "),e("p",[t._v("目录下存放必要的运行库，主要是编程语言的库。典型的 Linux 操作系统中包含了 C、C++和 Fortran 的库文件。用这些语言开发的应用程序可以使用这些编程语言库文件。这使软件开发者能够利用那些预先写好并通过测试的函数。库文件包含了标准的 C 库/lib/libc.so."),e("em",[t._v("，数学库 libm.so.")]),t._v("，共享的动态链接库/lib/ld/so 以及目录/bin 和/sbin 下用到的其他共享库。/lib/modules 目录存放系统的核心模块，某些可被模块化的部分并不需要在编译系统核心时放入核心本体，避免本体过于庞大而导致效率降低。")]),t._v(" "),e("h2",{attrs:{id:"lost-found"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lost-found","aria-hidden":"true"}},[t._v("#")]),t._v(" /lost+found")]),t._v(" "),e("p",[t._v("该目录存放所有和其它目录都没有关联的文件。系统出现错误或发生问题时，Fedora 会自动扫描磁盘驱动器，修正错误，如果找到遗失或错误的片段，将这些片段转化成文件存放于此，等待管理员的进一步处理。")]),t._v(" "),e("h2",{attrs:{id:"mnt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mnt","aria-hidden":"true"}},[t._v("#")]),t._v(" /mnt")]),t._v(" "),e("p",[t._v("该目录是默认的文件系统临时装载点，这是一个通用的安装点，可以临时安装任何文件系统或远程资源。系统管理员执行 mount\n命令完成装载工作。在系统中，该目录包含了光驱、磁盘和软驱的挂载点。")]),t._v(" "),e("h2",{attrs:{id:"proc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proc","aria-hidden":"true"}},[t._v("#")]),t._v(" /proc")]),t._v(" "),e("p",[t._v("进程文件系统 proc 的根目录，其中的部分文件分别对应正在运行的进程，可用于访问当前进程的地址空间。它是一个非常特殊的虚拟文件系统，其中并不包含“实际的”文件，而是可用以引用当前运行系统的系统信息，如 CPU、内存、运行时间、软件配置以及硬件配置的信息，这些信息是在内存中由系统自己产生的。")]),t._v(" "),e("h3",{attrs:{id:"proc-net"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proc-net","aria-hidden":"true"}},[t._v("#")]),t._v(" /proc/net")]),t._v(" "),e("p",[t._v("其中的文件分别表示各种网络协议（如 TCP、UDP 以及 ARP 等）的状态与统计信息。")]),t._v(" "),e("h3",{attrs:{id:"proc-sys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proc-sys","aria-hidden":"true"}},[t._v("#")]),t._v(" /proc/sys")]),t._v(" "),e("p",[t._v("这个目录不仅存有各种系统信息，而且也包含系统内核与 TCP/IP 网络的可调参数。其中的 kernel 子目录含有共享内存和消息队列的可调参数，net 子目录中含有 TCP/IP 的各种可调参数。例如，shmmax 文件中含有系统的最大共享内存定义，如果使用“echo somevalue > /proc/sys/kernel/shmmax”命令，可以直接修改运行系统的内核参数，而无需重新引导系统。这一做法要谨慎，有的文件可能包含多个数值，或不同类型的数值，因此，在修改以前一定要弄清参数的意义和实际的数值。为了在每次启动系统时都能使用定制的系统可调参数，可以设置 sysctl.conf 配置文件，或编写自己的 Shell 启动脚本。")]),t._v(" "),e("h2",{attrs:{id:"opt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opt","aria-hidden":"true"}},[t._v("#")]),t._v(" /opt")]),t._v(" "),e("p",[t._v("目录用来安装附加软件包，用户调用软件包程序放在目录/opt/package_name/bin 下，package_name 是安装软件包的名称。")]),t._v(" "),e("h2",{attrs:{id:"root"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#root","aria-hidden":"true"}},[t._v("#")]),t._v(" /root")]),t._v(" "),e("p",[t._v("超级用户 root 的主目录（在 Linux 系统中，斜杠字符“/”是整个系统的根目录，而非超级用户的主目录。）")]),t._v(" "),e("h2",{attrs:{id:"sbin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sbin","aria-hidden":"true"}},[t._v("#")]),t._v(" /sbin")]),t._v(" "),e("p",[t._v("目录/sbin、/usr/sbin 和/usr/local/sbin 存放了该目录启动系统时需执行的程序，如管理工具、应用软件和通用的根用户权限命令等内容。如包含 getty、init、update")])])}],!1,null,null,null);s.options.__file="base.md";a.default=s.exports}}]);