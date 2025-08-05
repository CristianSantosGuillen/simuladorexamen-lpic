const preguntas = [
  // Pregunta 1
  {
    pregunta: "Which SysV init configuration file should be modified to disable the ctrl-alt-delete key combination?",
    opciones: ["/etc/keys", "/proc/keys", "/etc/inittab", "/proc/inittab", "/etc/reboot"],
    respuestaCorrecta: 2
  },
  // Pregunta 2
  {
    pregunta: "During a system boot cycle, what program is executed after the BIOS completes its tasks?",
    opciones: ["The bootloader", "The inetd program", "The init program", "The kernel"],
    respuestaCorrecta: 0
  },
  // Pregunta 3
  {
    pregunta: "Which run levels should never be declared as the default run level when using SysV init? (Choose TWO correct answers.)",
    opciones: ["0", "1", "3", "5", "6"],
    respuestaCorrecta: [0, 4]
  },
  // Pregunta 4
  {
    pregunta: "Which of the following statements is correct when talking about /proc/?",
    opciones: [
      "All changes to files in /proc/ are stored in /etc/proc.d/ and restored on reboot.",
      "All files within /proc/ are read-only and their contents cannot be changed.",
      "All changes to files in /proc/ are immediately recognized by the kernel.",
      "All files within /proc/ are only readable by the root user."
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 5
  {
    pregunta: "What of the following statements are true regarding /dev/ when using udev? (Choose TWO correct answers.)",
    opciones: [
      "Entries for all possible devices get created on boot even if those devices are not connected.",
      "Additional rules for udev can be created by adding them to /etc/udev/rules.d/.",
      "When using udev, it is not possible to create block or character devices in /dev/ using mknod.",
      "The /dev/ directory is a filesystem of type tmpfs and is mounted by udev during system startup.",
      "The content of /dev/ is stored in /etc/udev/dev and is restored during system startup."
    ],
    respuestaCorrecta: [1, 3]
  },
  // Pregunta 6
  {
    pregunta: "Which of the following information is stored within the BIOS? (Choose TWO correct answers.)",
    opciones: [
      "Boot device order",
      "Linux kernel version",
      "Timezone",
      "Hardware configuration",
      "The system's hostname"
    ],
    respuestaCorrecta: [0, 3]
  },
  // Pregunta 7
  {
    pregunta: "Which of the following commands reboots the system when using SysV init? (Choose TWO correct answers.)",
    opciones: [
      "shutdown -r now",
      "shutdown -r 'rebooting'",
      "telinit 6",
      "telinit 0",
      "shutdown -k now 'rebooting'"
    ],
    respuestaCorrecta: [0, 2]
  },
  // Pregunta 8
  {
    pregunta: "Which of the following are init systems used within Linux systems? (Choose THREE correct answers.)",
    opciones: ["startd", "systemd", "Upstart", "SysInit", "SysV init"],
    respuestaCorrecta: [1, 2, 4]
  },
  // Pregunta 9
  {
    pregunta: "Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the file name only without any path.)",
    tipo: "texto",
    respuestaCorrecta: "cmdline",
    placeholder: "Escribe el nombre del archivo..."
  },
  // Pregunta 10
  {
    pregunta: "What information can the lspci command display about the system hardware? (Choose THREE correct answers.)",
    opciones: [
      "Device IRQ settings",
      "PCI bus speed",
      "System battery type",
      "Device vendor identification",
      "Ethernet MAC address"
    ],
    respuestaCorrecta: [0, 1, 3]
  },
  // Pregunta 11
  {
    pregunta: "Which of the following commands brings a system running SysV init into a state in which it is safe to perform maintenance tasks? (Choose TWO correct answers.)",
    opciones: [
      "shutdown -R 1 now",
      "shutdown -single now",
      "init 1",
      "telinit 1",
      "runlevel 1"
    ],
    respuestaCorrecta: [2, 3]
  },
  // Pregunta 12
  {
    pregunta: "What is the first program that is usually started, at boot time, by the Linux kernel when using SysV init?",
    opciones: [
      "/lib/init.so",
      "/sbin/init",
      "/etc/rc.d/rcinit",
      "/proc/sys/kernel/init",
      "/boot/init"
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 13
  {
    pregunta: "Which command will display messages from the kernel that were output during the normal boot sequence?",
    tipo: "texto",
    respuestaCorrecta: "dmesg",
    placeholder: "Escribe el comando..."
  },
  // Pregunta 14
  {
    pregunta: "Which of the following commands will write a message to the terminals of all logged in users?",
    opciones: ["beast", "mesg", "print", "wall", "yell"],
    respuestaCorrecta: 3
  },
  // Pregunta 15
  {
    pregunta: "Which of the following kernel parameters instructs the kernel to suppress most boot messages?",
    opciones: ["silent", "verbose-0", "nonesg", "quiet"],
    respuestaCorrecta: 3
  },
  // Pregunta 16
  {
    pregunta: "Which of the following options for the kernel's command line changes the systemd boot target to rescue.target instead of the default target?",
    opciones: [
      "systemd.target=rescue.target",
      "systemd.runlevel=rescue.target",
      "systemd.service=rescue.target",
      "systemd.default=rescue.target",
      "systemd.unit=rescue.target"
    ],
    respuestaCorrecta: 4
  },
  // Pregunta 17
  {
    pregunta: "After modifying GNU GRUB's configuration file, which command must be run for the changes to take effect?",
    opciones: [
      "kill -HUP $(pidof grub)",
      "grub-install",
      "grub",
      "No action is required"
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 18
  {
    pregunta: "Which of the following commands is used to update the list of available packages when using dpkg based package management?",
    opciones: [
      "apt-get update",
      "apt-get upgrade",
      "apt-cache update",
      "apt-get refresh",
      "apt-cache upgrade"
    ],
    respuestaCorrecta: 0
  },
  // Pregunta 19
  {
    pregunta: "Which of the following commands lists the dependencies of a given dpkg package?",
    opciones: [
      "apt-cache depends on package",
      "apt-cache dependencies package",
      "apt-cache depends package",
      "apt-cache requires package"
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 20
  {
    pregunta: "Which of the following options is used in a GRUB Legacy configuration file to define the amount of time that the GRUB menu will be shown to the user?",
    opciones: ["hidemenu", "splash", "timeout", "showmenu"],
    respuestaCorrecta: 2
  },
  // Pregunta 21
  {
    pregunta: "What can the Logical Volume Manager (LVM) be used for? (Choose THREE correct answers.)",
    opciones: [
      "To create RAID 9 arrays.",
      "To dynamically change the size of logical volumes.",
      "To encrypt logical volumes.",
      "To create snapshots.",
      "To dynamically create or delete logical volumes."
    ],
    respuestaCorrecta: [1, 3, 4]
  },
  // Pregunta 22
  {
    pregunta: "Which of the following commands updates the linker cache of shared libraries?",
    opciones: ["mkcache", "socconfig", "mkldconfig", "lddconfig", "ldconfig"],
    respuestaCorrecta: 4
  },
  // Pregunta 23
  {
    pregunta: "Which of the following commands lists all currently installed packages when using RPM package management?",
    opciones: [
      "yum --query --all",
      "yum --list --installed",
      "rpm --query --all",
      "rpm --list installed"
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 24
  {
    pregunta: "Which of the following commands can be used to download the RPM package kernel without installing it?",
    opciones: [
      "yum download --no-install kernel",
      "yumdownloader kernel",
      "rpm --download --package kernel",
      "rpmdownload kernel"
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 25
  {
    pregunta: "When using rpm --verify to check files created during the installation of RPM packages, which of the following information is taken into consideration? (Choose THREE correct answers.)",
    opciones: [
      "Timestamps",
      "MD5 checksums",
      "Inodes",
      "File sizes",
      "GnuPG signatures"
    ],
    respuestaCorrecta: [0, 1, 3]
  },
  // Pregunta 26
  {
    pregunta: "Which of the following is correct when talking about mount points?",
    opciones: [
      "Every existing directory can be used as a mount point.",
      "Only empty directories can be used as a mount point.",
      "Directories need to have the SetUID flag set to be used as a mount point.",
      "Files within a directory are deleted when the directory is used as a mount point."
    ],
    respuestaCorrecta: 0
  },
  // Pregunta 27
  {
    pregunta: "Which of the following environment variables overrides or extends the list of directories holding shared libraries?",
    opciones: [
      "LD_LOAD_PATH",
      "LD_LIB_PATH",
      "LD_LIBRARY_PATH",
      "LD_SHARE_PATH",
      "LD_RUN_PATH"
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 28
  {
    pregunta: "Which world-writable directory should be placed on a separate partition in order to prevent users from being able to fill up the / filesystem?",
    tipo: "texto",
    respuestaCorrecta: "/var/tmp",
    placeholder: "Escribe la ruta completa..."
  },
  // Pregunta 29
  {
    pregunta: "Which RPM command will output the name of the package which supplied the file /etc/exports?",
    opciones: [
      "rpm -F /etc/exports",
      "rpm -qf /etc/exports",
      "rpm -KJ /etc/exports",
      "rpm -qp /etc/exports",
      "rpm -qj /etc/exports"
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 30
  {
    pregunta: "In which directory must definition files be placed to add additional repositories to yum?",
    tipo: "texto",
    respuestaCorrecta: "/etc/yum.repos.d",
    placeholder: "Escribe la ruta completa..."
  },
  // Pregunta 31
  {
    pregunta: "What is the name of the main configuration file for GNU GRUB?",
    tipo: "texto",
    respuestaCorrecta: "grub.cfg",
    placeholder: "Escribe el nombre del archivo..."
  },
  // Pregunta 32
  {
    pregunta: "When removing a package, which of the following dpkg options will completely remove the files including configuration files?",
    opciones: ["--clean", "--delete", "--purge", "remove"],
    respuestaCorrecta: 2
  },
  // Pregunta 33
  {
    pregunta: "Which file should be edited to select the network locations from which Debian installation package files are loaded?",
    opciones: [
      "/etc/dpkg/dpkg.cfg",
      "/etc/apt/apt.conf",
      "/etc/apt/apt.conf.d",
      "/etc/apt/sources.list",
      "/etc/dpkg/dselect.cfg"
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 34
  {
    pregunta: "Which option to the yum command will update the entire system?",
    tipo: "texto",
    respuestaCorrecta: "update",
    placeholder: "Escribe solo el nombre de la opción..."
  },
  // Pregunta 35
  {
    pregunta: "Which command will disable swapping on a device?",
    tipo: "texto",
    respuestaCorrecta: "swapoff",
    placeholder: "Escribe solo el comando..."
  },
  // Pregunta 36
  {
    pregunta: "Which Debian package management tool asks the configuration questions for a specific already installed package just as if the package were being installed for the first time?",
    tipo: "texto",
    respuestaCorrecta: "dpkg-reconfigure",
    placeholder: "Escribe solo el comando..."
  },
  // Pregunta 37
  {
    pregunta: "Which of the following commands overwrites the bootloader located on /dev/sda without overwriting the partition table or any data following it?",
    opciones: [
      "dd if=/dev/zero of=/dev/sda bs=512",
      "dd if=/dev/zero of=/dev/sda bs=512 count=1",
      "dd if=/dev/zero of=/dev/sda bs=440 count=1",
      "dd if=/dev/zero of=/dev/sda bs=440"
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 38
  {
    pregunta: "Which of the following commands can be used to create a USB storage media from a disk image?",
    opciones: ["gdisk", "dd", "cc", "fdisk", "mount"],
    respuestaCorrecta: 1
  },
  // Pregunta 39
  {
    pregunta: "In Bash, inserting 1>&2 after a command redirects",
    opciones: [
      "standard error to standard input.",
      "standard input to standard error.",
      "standard output to standard error.",
      "standard error to standard output.",
      "standard output to standard input."
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 40
  {
    pregunta: "What command will generate a list of user names from /etc/passwd along with their login shell?",
    opciones: [
      "column -s : 1,7 /etc/passwd",
      "chop -c 1,7 /etc/passwd",
      "colrm 1,7 /etc/passwd",
      "cut -d: -f1,7 /etc/passwd"
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 41
  {
    pregunta: "In a nested directory structure, which find command line option would be used to restrict the command to searching down a particular number of subdirectories?",
    opciones: ["-dirmax", "-maxdepth", "-maxlevels", "-n", "-s"],
    respuestaCorrecta: 1
  },
  // Pregunta 42
  {
    pregunta: "Which of the following statements is correct regarding the command foo 1> bar?",
    opciones: [
      "The stdout from the command foo is appended to the file bar.",
      "The stdout from the command foo overwrites the file bar.",
      "The command foo receives its stdin from the file bar.",
      "The command foo receives its stdin from the stdout of the command bar.",
      "The stderr from the command foo is saved to the file bar."
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 43
  {
    pregunta: "Which of the following commands kills the process with the PID 123 but allows the process to 'clean up' before exiting?",
    opciones: ["kill -PIPE 123", "kill -KILL 123", "kill -STOP 123", "kill -TERM 123"],
    respuestaCorrecta: 3
  },
  // Pregunta 44
  {
    pregunta: "Which signal is missing from the following command that is commonly used to instruct a daemon to reinitialize itself, including reading configuration files? killall -s ______ daemon",
    tipo: "texto",
    respuestaCorrecta: "SIGHUP",
    placeholder: "Escribe el nombre de la señal..."
  },
  // Pregunta 45
  {
    pregunta: "What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?",
    opciones: ["9", "19", "49", "99"],
    respuestaCorrecta: 1
  },
  // Pregunta 46
  {
    pregunta: "Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single character command will insert the deleted content below the current line?",
    opciones: ["i (lowercase)", "P (uppercase)", "p (lowercase)", "U (uppercase)", "u (lowercase)"],
    respuestaCorrecta: 2
  },
  // Pregunta 47
  {
    pregunta: "A user accidentally created the subdirectory \\dir in his home directory. Which of the following commands will remove that directory?",
    opciones: [
      "rmdir ~/\\dir'",
      "rmdir ~/\\dir'",
      "rmdir ~/\\dir'",
      "rmdir ~/\\dir",
      "rmdir ~/\\dir"
    ],
    respuestaCorrecta: 4
  },
  // Pregunta 48
  {
    pregunta: "In compliance with the FHS, in which of the directories are man pages found?",
    opciones: [
      "/usr/share/man",
      "/opt/man",
      "/usr/doc/",
      "/var/pkg/man",
      "/var/man"
    ],
    respuestaCorrecta: 0
  },
  // Pregunta 49
  {
    pregunta: "Which of the following commands will send output from the program myapp to both standard output (stdout) and the file file1.log?",
    opciones: [
      "cat < myapp | cat > file1.log",
      "myapp 0>&1 | cat > file1.log",
      "myapp | cat > file1.log",
      "myapp | tee file1.log",
      "tee myapp file1.log"
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 50
  {
    pregunta: "What is the purpose of the Bash built-in export command?",
    opciones: [
      "It allows disks to be mounted remotely.",
      "It runs a command as a process in a subshell.",
      "It makes the command history available to subshells.",
      "It sets up environment variables for applications.",
      "It shares NFS partitions for use by other systems on the network."
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 51
  {
    pregunta: "What is the output of the following command? echo 'Hello World' | tr -d 'aeiou'",
    opciones: ["Hello World", "eoo", "Hll Wrld", "eoo Hll Wrld"],
    respuestaCorrecta: 2
  },
  // Pregunta 52
  {
    pregunta: "Which of the following characters can be combined with a separator string in order to read from the current input source until the separator string, which is on a separate line and without any trailing spaces, is reached?",
    opciones: ["<<", "<|", "|<", "&<"],
    respuestaCorrecta: 0
  },
  // Pregunta 53
  {
    pregunta: "Which of the following commands will NOT update the modify timestamp on the file /tmp/myfile.txt?",
    opciones: [
      "file /tmp/myfile.txt",
      "echo 'Hello' >/tmp/myfile.txt",
      "sed -ie 's/1/2/' /tmp/myfile.txt",
      "echo -n 'Hello' >>/tmp/myfile.txt",
      "touch /tmp/myfile.txt"
    ],
    respuestaCorrecta: 0
  },
  // Pregunta 54
  {
    pregunta: "What is the default nice level when a process is started using the nice command?",
    opciones: ["-10", "10", "20", "0"],
    respuestaCorrecta: 1
  },
  // Pregunta 55
  {
    pregunta: "What is the default action of the split command on an input file?",
    opciones: [
      "It will break the file into new files of 1,024 byte pieces each.",
      "It will break the file into new files of 1,000 line pieces each.",
      "It will break the file into new files of 1,024 kilobyte pieces each.",
      "It will break the file into new files that are no more than 5% of the size of the original file."
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 56
  {
    pregunta: "What is the difference between the i and a commands of the vi editor?",
    opciones: [
      "i (interactive) requires the user to explicitly switch between vi modes whereas a (automatic) switches modes automatically.",
      "i (insert) inserts text before the current cursor position whereas a (append) inserts text after the cursor.",
      "i (independent rows) starts every new line at the first character whereas a (aligned rows) keeps the indentation of the previous line.",
      "i (interrupt) temporarily suspends editing of a file to the background whereas a (abort) terminates editing."
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 57
  {
    pregunta: "Which command displays a list of all background tasks running in the current shell?",
    tipo: "texto",
    respuestaCorrecta: "jobs",
    placeholder: "Escribe solo el comando..."
  },
  // Pregunta 58
  {
    pregunta: "Which of the following commands moves and resumes in the background the last stopped shell job?",
    opciones: ["run", "bg", "fg", "back"],
    respuestaCorrecta: 1
  },
  // Pregunta 59
  {
    pregunta: "What is the effect of the egrep command when the -v option is used?",
    opciones: [
      "It enables color to highlight matching parts.",
      "It only outputs non-matching lines.",
      "It shows the command's version information.",
      "It changes the output order showing the last matching line first."
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 60
  {
    pregunta: "What does the ? symbol within regular expressions represent?",
    opciones: [
      "Match the preceding qualifier one or more times.",
      "Match the preceding qualifier zero or more times.",
      "Match the preceding qualifier zero or one times.",
      "Match a literal ? character."
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 61
  {
    pregunta: "In the vi editor, how can commands such as moving the cursor or copying lines into the buffer be issued multiple times or applied to multiple rows?",
    opciones: [
      "By using the command :repeat followed by the number and the command.",
      "By specifying the number right in front of a command such as 4l or 2yj.",
      "By selecting all affected lines using the shift and cursor keys before applying the command.",
      "By issuing a command such as :set repetition=4 which repeats every subsequent command 4 times."
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 62
  {
    pregunta: "Which of the following files, located in the user home directory, is used to store the Bash history?",
    opciones: [
      ".bash_history",
      ".bash_histfile",
      ".history",
      ".bashrc_history",
      ".history_bash"
    ],
    respuestaCorrecta: 0
  },
  // Pregunta 63
  {
    pregunta: "Which Bash environment variable defines in which file the user history is stored when exiting a Bash process?",
    tipo: "texto",
    respuestaCorrecta: "HISTFILE",
    placeholder: "Escribe solo el nombre de la variable..."
  },
  // Pregunta 64
  {
    pregunta: "Which of the following commands displays the contents of a gzip compressed tar archive?",
    opciones: [
      "gzip archive.tgz | tar xvf -",
      "tar ztf archive.tgz",
      "gzip -d archive.tgz | tar tvf -",
      "tar cf archive.tgz"
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 65
  {
    pregunta: "Which grep command will print only the lines that do not end with a / in the file foo?",
    opciones: ["grep '/$' foo", "grep '/#' foo", "grep -v '/$' foo", "grep -v '/#' foo"],
    respuestaCorrecta: 2
  },
  // Pregunta 66
  {
    pregunta: "Which of the following commands is used to change options and positional parameters for a running Bash?",
    opciones: ["history", "set", "bashconf", "setsh", "envsetup"],
    respuestaCorrecta: 1
  },
  // Pregunta 67
  {
    pregunta: "Which of the following commands replaces each occurrence of 'bob' in the file letter with 'Bob' and writes the result to the file newletter?",
    opciones: [
      "sed '/Bob/Bob' letter > newletter",
      "sed s/bob/Bob/ letter < newletter",
      "sed 's/bob/Bob' letter > newletter",
      "sed 's/bob/Bob/g' letter > newletter",
      "sed 's/bob, Bob/' letter > newletter"
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 68
  {
    pregunta: "From a bash shell, which of the following commands directly executes the instruction from the file /usr/local/bin/runme.sh without starting a subshell? (Please select TWO answers.)",
    opciones: [
      "source /usr/local/bin/runme.sh",
      "./usr/local/bin/runme.sh",
      "/bin/bash /usr/local/bin/runme.sh",
      "/usr/local/bin/runme.sh",
      "run /usr/local/bin/runme.sh"
    ],
    respuestaCorrecta: [0, 3]
  },
  // Pregunta 69
  {
    pregunta: "Regarding the command: nice -5 /usr/bin/prog Which of the following statements is correct?",
    opciones: [
      "/usr/bin/prog is executed with a nice level of -5.",
      "/usr/bin/prog is executed with a nice level of 5.",
      "/usr/bin/prog is executed with a priority of -5.",
      "/usr/bin/prog is executed with a priority of 5."
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 70
  {
    pregunta: "Which shell command is used to continue background execution of a suspended command?",
    opciones: ["&", "bg", "cont", "exec", ".&"],
    respuestaCorrecta: 1
  },
  // Pregunta 71
  {
    pregunta: "Which of the following shell redirections will write standard output and standard error output to a file named filename?",
    opciones: [
      "2>&1 >filename",
      ">filename 2>&1",
      "1>&2>filename",
      ">filename",
      "1&2>filename"
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 72
  {
    pregunta: "In the vi editor, which of the following commands will copy the current line into the vi buffer?",
    opciones: ["c", "cc", "1c", "yy", "1y"],
    respuestaCorrecta: 3
  },
  // Pregunta 73
  {
    pregunta: "Which of the following sequences in the vi editor saves the opened document and exits the editor? (Choose TWO correct answers.)",
    opciones: ["esc ZZ", "crtl :wq", "esc zz", "esc :wq", "crtl XX"],
    respuestaCorrecta: [0, 3]
  },
  // Pregunta 74
  {
    pregunta: "When starting a program with the nice command without any additional parameters, which nice level is set for the resulting process?",
    opciones: ["-10", "0", "10", "20"],
    respuestaCorrecta: 2
  },
  // Pregunta 75
  {
    pregunta: "Which of the following commands will reduce all consecutive spaces down to a single space?",
    opciones: [
      "tr 's' ' ' < a.txt > b.txt",
      "tr -c ' ' ' ' < a.txt > b.txt",
      "tr -d ' ' < a.txt > b.txt",
      "tr -s ' ' ' ' < a.txt > b.txt",
      "tr s ' ' < a.txt > b.txt"
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 76
  {
    pregunta: "Which character, added to the end of a command, runs that command in the background as a child process of the current shell?",
    opciones: ["!", "+", "&", "%", "#"],
    respuestaCorrecta: 2
  },
  // Pregunta 77
  {
    pregunta: "Which of the following commands will print the last 10 lines of a text file to the standard output?",
    opciones: [
      "cat -n 10 filename",
      "dump -n 10 filename",
      "head -n 10 filename",
      "tail -n 10 filename"
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 78
  {
    pregunta: "Which of the following commands prints a list of usernames (first column) and their primary group (fourth column) from the /etc/passwd file?",
    opciones: [
      "fmt -f 1,4 /etc/passwd",
      "split -c 1,4 /etc/passwd",
      "cut -d : -f 1,4 /etc/passwd",
      "paste -f 1,4 /etc/passwd"
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 79
  {
    pregunta: "Which of the following signals is sent to a process when the key combination CTRL+C is pressed on the keyboard?",
    opciones: ["SIGTERM", "SIGINT", "SIGSTOP", "SIGKILL"],
    respuestaCorrecta: 1
  },
  // Pregunta 80
  {
    pregunta: "What happens after issuing the command vi without any additional parameters?",
    opciones: [
      "vi starts and loads the last file used and moves the cursor to the position where vi was when it last exited.",
      "vi starts and requires the user to explicitly either create a new or load an existing file.",
      "vi exits with an error message as it cannot be invoked without a file name to operate on.",
      "vi starts in command mode and opens a new empty file.",
      "vi starts and opens a new file which is filled with the content of the vi buffer if the buffer contains text."
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 81
  {
    pregunta: "Which of the following command sets the Bash variable named TEST with the content FOO?",
    opciones: [
      'set TEST="FOO"',
      'TEST = "FOO"',
      'var TEST="FOO"',
      'TEST="FOO"'
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 82
  {
    pregunta: "Which variable defines the directories in which a Bash shell searches for executable commands?",
    opciones: ["BASHEXEC", "BASHRC", "PATH", "EXECPATH", "PATHRC"],
    respuestaCorrecta: 2
  },
  // Pregunta 83
  {
    pregunta: "Which of the following commands determines the type of a file by using a definition database file which contains information about all common file types?",
    opciones: ["magic", "type", "file", "pmagic", "hash"],
    respuestaCorrecta: 2
  },
  // Pregunta 84
  {
    pregunta: "Which command is used in a Linux environment to create a new directory?",
    tipo: "texto",
    respuestaCorrecta: "mkdir",
    placeholder: "Escribe solo el comando..."
  },
  // Pregunta 85
  {
    pregunta: "Which of the following commands prints all files and directories within the /tmp directory or its subdirectories which are also owned by the user root? (Choose TWO correct answers.)",
    opciones: [
      "find /tmp -uid root -print",
      "find -path /tmp -uid root",
      "find /tmp -user root -print",
      "find /tmp -user root",
      "find -path /tmp -user root -print"
    ],
    respuestaCorrecta: [2, 3]
  },
  // Pregunta 86
  {
    pregunta: "When running the command sed -e 's/a/b/' /tmp/file >/tmp/file While /tmp/file contains data, why is /tmp/file empty afterwards?",
    opciones: [
      "The file order is incorrect. The destination file must be mentioned before the command to ensure redirection.",
      "The command sed did not match anything in that file therefore the output is empty.",
      "When the shell establishes the redirection it overwrites the target file before the redirected command starts and opens it for reading.",
      "Redirection for shell commands do not work using the > character. It only works using the | character instead."
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 87
  {
    pregunta: "When given the following command line. echo 'foo bar' | tee bar | cat Which of the following output is created?",
    opciones: ["cat", "foo bar", "tee bar", "bar", "foo"],
    respuestaCorrecta: 1
  },
  // Pregunta 88
  {
    pregunta: "Which of the following commands can be used to determine how long the system has been running? (Choose TWO correct answers.)",
    opciones: ["uptime", "up", "top", "uname -u", "time up"],
    respuestaCorrecta: [0, 2]
  },
  // Pregunta 89
  {
    pregunta: "Which of the following are valid stream redirection operators within Bash? (Choose THREE correct answers.)",
    opciones: ["<", "<<<", ">", ">>>", "%>"],
    respuestaCorrecta: [0, 1, 2]
  },
  // Pregunta 90
  {
    pregunta: "After successfully creating a hard link called bar to the ordinary file foo, foo is deleted from the filesystem. Which of the following describes the resulting situation?",
    opciones: [
      "foo and bar would both be removed.",
      "foo would be removed while bar would remain accessible.",
      "foo would be removed. bar would still exist but would be unusable.",
      "Both foo and bar would remain accessible.",
      "The user is prompted whether bar should be removed, too."
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 91
  {
    pregunta: "After moving data to a new filesystem, how can the former path of the data be kept intact in order to avoid reconfiguration of existing applications? (Choose TWO correct answers.)",
    opciones: [
      "By creating an ACL redirection from the old to the new path of the data.",
      "By creating a hard link from the old to the new path of the data.",
      "By creating a symbolic link from the old to the new path of the data.",
      "By running the command touch on the old path.",
      "By mounting the new filesystem on the original path of the data."
    ],
    respuestaCorrecta: [2, 4]
  },
  // Pregunta 92
  {
    pregunta: "Which of the following commands changes the ownership of file.txt to the user dan and the group staff?",
    opciones: [
      "chown dan/staff file.txt",
      "chown dan:staff file.txt",
      "chown -u dan -g staff file.txt",
      "chown dan -g staff file.txt"
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 93
  {
    pregunta: "Which of the following commands makes /bin/foo executable by everyone but writable only by its owner?",
    opciones: [
      "chmod u=rwx,go=rx /bin/foo",
      "chmod o+rwx,a+rx /bin/foo",
      "chmod 577 /bin/foo",
      "chmod 775 /bin/foo"
    ],
    respuestaCorrecta: 0
  },
  // Pregunta 94
  {
    pregunta: "Which of the following commands can be used to search for the executable file foo when it has been placed in a directory not included in $PATH?",
    opciones: ["apropos", "which", "find", "query", "whereis"],
    respuestaCorrecta: 2
  },
  // Pregunta 95
  {
    pregunta: "What does the command mount -a do?",
    opciones: [
      "It ensures that all file systems listed with the option noauto in /etc/fstab are mounted.",
      "It shows all mounted file systems that have been automatically mounted.",
      "It opens an editor with root privileges and loads /etc/fstab for editing.",
      "It ensures that all file systems listed with the option auto in /etc/fstab are mounted.",
      "It ensures that all file systems listed in /etc/fstab are mounted regardless of their options."
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 96
  {
    pregunta: "Which of the following settings for umask ensures that new files have the default permissions -rw-r-----?",
    opciones: ["0017", "0640", "0038", "0027"],
    respuestaCorrecta: 3
  },
  // Pregunta 97
  {
    pregunta: "Which of the following is the device file name for the second partition on the only SCSI drive?",
    opciones: ["/dev/hda1", "/dev/sda2", "/dev/sd0a2", "/dev/sd1p2"],
    respuestaCorrecta: 1
  },
  // Pregunta 98
  {
    pregunta: "In order to display all currently mounted filesystems, which of the following commands could be used? (Choose TWO correct answers.)",
    opciones: [
      "cat /proc/self/mounts",
      "free",
      "mount",
      "lsmounts",
      "cat /proc/filesystems"
    ],
    respuestaCorrecta: [0, 2]
  },
  // Pregunta 99
  {
    pregunta: "Which of the following commands can be used to locate programs and their corresponding man pages and configuration files?",
    opciones: ["dirname", "which", "basename", "query", "whereis"],
    respuestaCorrecta: 4
  },
  // Pregunta 100
  {
    pregunta: "Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?",
    opciones: [
      "tune2fs -d 200 /dev/sda1",
      "tune2fs -c 200 /dev/sda1",
      "tune2fs -i 200 /dev/sda1",
      "tune2fs -n 200 /dev/sda1",
      "tune2fs -days 200 /dev/sda1"
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 101
  {
    pregunta: "Which type of filesystem is created by mkfs when it is executed with the block device name only and without any additional parameters?",
    opciones: ["ext2", "ext3", "ext4", "XFS", "VFAT"],
    respuestaCorrecta: 0
  },
  // Pregunta 102
  {
    pregunta: "How many fields are in a syntactically correct line of /etc/fstab?",
    opciones: ["3", "4", "5", "6", "7"],
    respuestaCorrecta: 3
  },
  // Pregunta 103
  {
    pregunta: "Which command is used to create and initialize the files used to store quota information?",
    tipo: "texto",
    respuestaCorrecta: "quotacheck",
    placeholder: "Escribe solo el comando..."
  },
  // Pregunta 104
  {
    pregunta: "Which of the following file permissions belong to a symbolic link?",
    opciones: [
      "-rwxrwxrwx",
      "brwxrwxrwx",
      "lrwxrwxrwx",
      "srwxrwxrwx"
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 105
  {
    pregunta: "Creating a hard link to an ordinary file returns an error. What could be the reason for this?",
    opciones: [
      "The source file is hidden.",
      "The source file is read-only.",
      "The source file is a shell script.",
      "The source file is already a hard link.",
      "The source and the target are on different filesystems."
    ],
    respuestaCorrecta: 4
  },
  // Pregunta 106
  {
    pregunta: "Which of the following commands creates an ext3 filesystem on /dev/sdb1? (Choose TWO correct answers.)",
    opciones: [
      "/sbin/mke2fs -j /dev/sdb1",
      "/sbin/mkfs -t ext3 /dev/sdb1",
      "/sbin/mkfs -c ext3 /dev/sdb1",
      "/sbin/mke3fs -j /dev/sdb1"
    ],
    respuestaCorrecta: [0, 1]
  },
  // Pregunta 107
  {
    pregunta: "Which of the following commands will change the quota for a specific user?",
    opciones: ["edquota", "repquota", "quota -e", "quota"],
    respuestaCorrecta: 0
  },
  // Pregunta 108
  {
    pregunta: "Which utility would be used to change how often a filesystem check is performed on an ext2 filesystem without losing any data stored on that filesystem?",
    opciones: ["mod2fs", "fsck", "tune2fs", "mke2fs", "fixe2fs"],
    respuestaCorrecta: 2
  },
  // Pregunta 109
  {
    pregunta: "Which of the following Linux filesystems preallocates a fixed number of inodes at the filesystem's make/creation time and does NOT generate them as needed? (Choose TWO correct answers.)",
    opciones: ["ext3", "JFS", "ext2", "XFS", "procfs"],
    respuestaCorrecta: [0, 2]
  },
  // Pregunta 110
  {
    pregunta: "What is the purpose of the Filesystem Hierarchy Standard?",
    opciones: [
      "It is a security model used to ensure files are organized according to their permissions and accessibility.",
      "It provides unified tools to create, maintain and manage multiple filesystems in a common way.",
      "It defines a common internal structure of inodes for all compliant filesystems.",
      "It is a distribution neutral description of locations of files and directories."
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 111
  {
    pregunta: "Which umask value will result in the default access permissions of 600 (rw-------) for files and 700 (rwx------) for directories?",
    tipo: "texto",
    respuestaCorrecta: "077",
    placeholder: "Escribe solo el valor numérico..."
  },
  // Pregunta 112
  {
    pregunta: "Instead of supplying an explicit device in /etc/fstab for mounting, what other options may be used to identify the intended partition? (Choose TWO correct answers.)",
    opciones: ["FIND", "ID", "LABEL", "NAME", "UUID"],
    respuestaCorrecta: [2, 4]
  },
  // Pregunta 113
  {
    pregunta: "After running the command umount /mnt, the following error message is displayed: umount: /mnt: device is busy. What is a common reason for this message?",
    opciones: [
      "The kernel has not finished flushing disk writes to the mounted device.",
      "A user has a file open in the /mnt directory.",
      "Another file system still contains a symlink to a file inside /mnt.",
      "The files in /mnt have been scanned and added to the locate database.",
      "The kernel thinks that a process is about to open a file in /mnt for reading."
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 114
  {
    pregunta: "Which of the following commands set the sticky bit for the directory /tmp? (Choose TWO correct answers.)",
    opciones: [
      "chmod +s /tmp",
      "chmod +t /tmp",
      "chmod 1775 /tmp",
      "chmod 4775 /tmp",
      "chmod 2775 /tmp"
    ],
    respuestaCorrecta: [1, 2]
  },
  // Pregunta 115
  {
    pregunta: "Which of the following commands can be used to display the inode number of a given file?",
    opciones: ["inode", "ls", "ln", "cp"],
    respuestaCorrecta: 1
  },
  // Pregunta 116
  {
    pregunta: "Which of the following commands shows the definition of a given shell command?",
    opciones: ["where", "stat", "type", "case"],
    respuestaCorrecta: 2
  },
  // Pregunta 117
  {
    pregunta: "What do the permissions -rwSr-xr-x mean for a binary file when it is executed as a command?",
    opciones: [
      "The command is SetUID and it will be executed with the effective rights of the owner.",
      "The command will be executed with the effective rights of the group instead of the owner.",
      "The execute flag is not set for the owner. Therefore the SetUID flag is ignored.",
      "The command will be executed with the effective rights of the owner and group."
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 118
  {
    pregunta: "Which of the following pieces of information of an existing file is changed when a hard link pointing to that file is created?",
    opciones: [
      "File size",
      "Modify timestamp",
      "Link count",
      "Inode number",
      "Permissions"
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 119
  {
    pregunta: "Which of the following commands are common Linux commands for file management? (Choose three correct answers.)",
    opciones: ["copy", "mv", "move", "cp", "mkdir"],
    respuestaCorrecta: [1, 3, 4]
  },
  // Pregunta 120
  {
    pregunta: "Which of the following examples for Bash file globbing matches a file named root-can-do-this.txt when used in the directory holding that file? (Choose three correct answers.)",
    opciones: [
      "root*can?do-this.{txt,odt}",
      "r??t-can-do*.txt",
      "{root,user,admin}-can-??-this.txt",
      "root*can*do??this.txt",
      "root***{can,may}-do-this.[tT]{x,t}T"
    ],
    respuestaCorrecta: [0, 1, 3]
  },
  // Pregunta 121
  {
    pregunta: "What command changes the nice level of a running process?",
    tipo: "texto",
    respuestaCorrecta: "renice",
    placeholder: "Escribe solo el comando..."
  },
  // Pregunta 122
  {
    pregunta: "Which option to the tee command will cause the output to be concatenated on the end of the output file instead of overwriting the existing file contents?",
    opciones: ["-a", "-c", "--no-clobber", "--continue"],
    respuestaCorrecta: 0
  },
  // Pregunta 123
  {
    pregunta: "What is the purpose of the xargs command?",
    opciones: [
      "It passes arguments to an X server.",
      "It reads standard input (STDIN) and builds up command lines to execute.",
      "It helps shell scripts take variable argument lists.",
      "It asks a question, graphically, and returns the answer to the shell.",
      "It allows users to specify long options for commands that normally only accept short options."
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 124
  {
    pregunta: "Which of the following commands can be used to create a new file that is 100KB in size?",
    opciones: ["dd", "file", "mkfile", "touch"],
    respuestaCorrecta: 0
  },
  // Pregunta 125
  {
    pregunta: "When using regular expressions, which of the following characters match the beginning of a line?",
    opciones: ["^", "?", "*", "+", "$"],
    respuestaCorrecta: 0
  },
  // Pregunta 126
  {
    pregunta: "Which of the following statements is correct for a command line ending with a & character?",
    opciones: [
      "The command's output is redirected to /dev/null.",
      "The result of the command defines if the next command will be run.",
      "The command is run in background of the current shell.",
      "The command is run as a direct child of the init process."
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 127
  {
    pregunta: "Which of the following commands will produce the following output? USER PID %CPU %MEM VSZ RSS TTY STAT START TIME COMMAND",
    opciones: ["jobs", "proclist", "netstat", "ps"],
    respuestaCorrecta: 3
  },
  // Pregunta 128
  {
    pregunta: "Which of the following commands print the current working directory when using a Bash shell? (Choose two.)",
    opciones: [
      'echo "${PWD}"',
      'echo "${WD}"',
      "pwd",
      "printwd",
      'echo "$(pwd)"'
    ],
    respuestaCorrecta: [2, 4]
  },
  // Pregunta 129
  {
    pregunta: "Which signal is sent by the kill command by default?",
    opciones: ["SIGHUP(1)", "SIGQUIT(3)", "SIGKILL(9)", "SIGTERM(15)"],
    respuestaCorrecta: 3
  },
  // Pregunta 130
  {
    pregunta: "Which of the following command lines creates or, in case it already exists, overwrites a file called data with the output of ls?",
    opciones: ["ls 3> data", "ls >& data", "ls >> data", "ls > data"],
    respuestaCorrecta: 3
  },
  // Pregunta 131
  {
    pregunta: "Which of the following commands will print important system information such as the kernel version and machine hardware architecture?",
    opciones: ["sysinfo", "uname", "lspci", "arch", "info"],
    respuestaCorrecta: 1
  },
  // Pregunta 132
  {
    pregunta: "In Bash, inserting 2>&1 after a command redirects:",
    opciones: [
      "standard error to standard input.",
      "standard input to standard error.",
      "standard output to standard error.",
      "standard error to standard output.",
      "standard output to standard input."
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 133
  {
    pregunta: "When piping the output of find to the xargs command, what option to find is useful if the filenames have spaces in them?",
    opciones: ["-rep-space", "-print0", "-nospace", "-ignore-space"],
    respuestaCorrecta: 1
  },
  // Pregunta 134
  {
    pregunta: "Pressing the Ctrl+C combination on the keyboard while a command is executing in the foreground sends which of the following signal codes?",
    opciones: ["1(SIGHUP)", "2(SIGINT)", "3(SIGQUIT)", "9(SIGKILL)", "15(SIGTERM)"],
    respuestaCorrecta: 1
  },
  // Pregunta 135
  {
    pregunta: "Which of the following are modes of the vi editor? (Choose two.)",
    opciones: [
      "edit mode",
      "insert mode",
      "change mode",
      "review mode",
      "command mode"
    ],
    respuestaCorrecta: [1, 4]
  },
  // Pregunta 136
  {
    pregunta: "Which of the following shell commands makes the already defined variable TEST visible to new child processes? (Choose two.)",
    opciones: [
      "visible TEST",
      "declare +x TEST",
      "declare -x TEST",
      "export TEST",
      "export -v TEST"
    ],
    respuestaCorrecta: [2, 3]
  },
  // Pregunta 137
  {
    pregunta: "Which command is used to start another command with a given nice level?",
    tipo: "texto",
    respuestaCorrecta: "nice",
    placeholder: "Escribe solo el comando..."
  },
  // Pregunta 138
  {
    pregunta: "In the vi editor, what vi command will copy (but not paste) from the current line at the cursor and the following 16 lines (17 lines total)?",
    tipo: "texto",
    respuestaCorrecta: "17yy",
    placeholder: "Escribe el comando vi sin espacios..."
  },
  // Pregunta 139
  {
    pregunta: "Which of the following commands changes all occurrences of the word 'bob' in file data to 'Bob' and prints the result to standard output?",
    opciones: [
      "sed/bob/Bob/ data",
      "sed's/bob/Bob/g' data",
      "sed's/bob/Bob/' data",
      "sed's/bob/Bob/g' data",
      "sed's/bob, Bob/' data"
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 140
  {
    pregunta: "Which of the following is a limitation of the cut command?",
    opciones: [
      "The cut command can only select output by field position.",
      "The cut command cannot reorder fields.",
      "The cut command only works on ASCII text.",
      "The cut command cannot use different input and output delimiters."
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 141
  {
    pregunta: "Which of the following commands will change all CR-LF pairs in an imported text file, userlist.txt, to Linux standard LF characters and store it as newlist.txt",
    opciones: [
      'tr "\t\n" "\n" < userlist.txt > newlist.txt',
      'tr -c "\n\r" "\n" < newlist.txt > userlist.txt',
      'tr -d "\r" < userlist.txt > newlist.txt',
      "tr '\r' '\n' userlist.txt newlist.txt",
      'tr -s "\r" "\n" userlist.txt newlist.txt'
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 142
  {
    pregunta: "When in Normal mode in vi, which character can be used to begin a reverse search of the text?",
    opciones: ["?", "/", "F", "r"],
    respuestaCorrecta: 0
  },
  // Pregunta 143
  {
    pregunta: "In compliance with the FHS, in which of the following directories are documentation files found?",
    opciones: [
      "/usr/share/documentation",
      "/usr/local/share/documentation",
      "/var/share/doc",
      "/usr/share/doc",
      "/etc/share/doc"
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 144
  {
    pregunta: "Which of the following commands converts spaces in a file to tab characters and prints the result to standard output?",
    opciones: ["iconv", "expand", "unexpand", "tab"],
    respuestaCorrecta: 2
  },
  // Pregunta 145
  {
    pregunta: "What does the command grub-install /dev/sda do?",
    opciones: [
      "GRUB creates partitions on the device /dev/sda to be used with Linux.",
      "GRUB sets the default BIOS boot device to /dev/sda.",
      "GRUB installs all required files and configures the boot loader on device /dev/sda.",
      "GRUB recompiles the Linux Kernel and installs it on the Master Boot Record of device /dev/sda."
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 146
  {
    pregunta: "Which of the following statements describes a difference between GNU GRUB Legacy and GRUB 2?",
    opciones: [
      "GRUB 2 no longer requires a configuration file.",
      "Partition numbers start at 0 in GRUB Legacy and 1 in GRUB 2.",
      "grub-mkconfig only works with GRUB Legacy if the --version 1 option is used.",
      "The configuration file menu.lst (and grub.conf) have been replaced with grub.config."
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 147
  {
    pregunta: "Which of the following commands updates the already installed RPM package rpmname?",
    opciones: [
      "rpm --update rpmname",
      "rpm --U rpmname",
      "rpm -q rpmname",
      "rpm --force rpmname",
      "rpm -u rpmname"
    ],
    respuestaCorrecta: 4
  },
  // Pregunta 148
  {
    pregunta: "Which of the following partition types is used for Linux swap spaces when partitioning hard disk drives?",
    opciones: ["82", "83", "8e", "fd", "7"],
    respuestaCorrecta: 0
  },
  // Pregunta 149
  {
    pregunta: "Which of the following commands prints a list of available package updates when using RPM-based package management?",
    opciones: [
      "dpkg list",
      "yum list",
      "dpkg check-update",
      "yum check-update",
      "yum list-update"
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 150
  {
    pregunta: "When planning a partition scheme, which of the following directories could be considered for separate partitions? (Choose three.)",
    opciones: ["/etc", "/home", "/var", "/lib", "/opt"],
    respuestaCorrecta: [1, 2, 4]
  },
  // Pregunta 151
  {
    pregunta: "How can the list of files that would be installed by the RPM package file apache-xml.rpm be previewed?",
    opciones: [
      "rpm -qp apache-xml.rpm",
      "rpm -qv apache-xml.rpm",
      "rpm -ql apache-xml.rpm",
      "rpm -qpl apache-xml.rpm"
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 152
  {
    pregunta: "Which command will uninstall a package but leave its configuration files in case the package is re-installed?",
    opciones: ["dpkg -s pkgname", "dpkg -L pkgname", "dpkg -P pkgname", "dpkg -r pkgname"],
    respuestaCorrecta: 3
  },
  // Pregunta 153
  {
    pregunta: "Which command is used to query information about the available packages on a Debian system?",
    opciones: ["apt-cache", "apt-get", "apt-search", "dpkg", "dpkg-search"],
    respuestaCorrecta: 0
  },
  // Pregunta 154
  {
    pregunta: "Which command shows all shared libraries required by a binary executable or another shared library?",
    tipo: "texto",
    respuestaCorrecta: "ldd",
    placeholder: "Escribe solo el comando..."
  },
  // Pregunta 155
  {
    pregunta: "Which of the following apt-get commands will install the newest versions of all currently installed packages?",
    opciones: [
      "auto-update",
      "full-upgrade",
      "dist-upgrade",
      "install",
      "update"
    ],
    respuestaCorrecta: 2
  },
  // Pregunta 156
  {
    pregunta: "Which file from the /proc file system contains a list of all currently mounted devices?",
    tipo: "texto",
    respuestaCorrecta: "mounts",
    placeholder: "Escribe solo el nombre del archivo..."
  },
  // Pregunta 157
  {
    pregunta: "Which of the following commands will display the inode usage of each mounted filesystem?",
    opciones: ["du -i", "df -i", "lsfs -i", "printf -i"],
    respuestaCorrecta: 1
  },
  // Pregunta 158
  {
    pregunta: "Following the Filesystem Hierarchy Standard (FHS), where should binaries that have been compiled by the system administrator be placed in order to be made available to all users on the system?",
    tipo: "texto",
    respuestaCorrecta: "/usr/local/bin",
    placeholder: "Escribe la ruta completa..."
  },
  // Pregunta 159
  {
    pregunta: "Which of the following commands is used to change metadata and options for ext3 filesystems?",
    opciones: ["mod3fs", "tune3fs", "mod2fs", "tune2fs", "dump2fs"],
    respuestaCorrecta: 3
  },
  // Pregunta 160
  {
    pregunta: "Which of the following are filesystems which can be used on Linux root partitions? (Choose two.)",
    opciones: ["NTFS", "ext3", "XFS", "VFAT", "swap"],
    respuestaCorrecta: [1, 2]
  },
  // Pregunta 161
  {
    pregunta: "How is a symbolic link called bar.conf pointing to foo.conf created?",
    opciones: [
      "ln -s foo.conf bar.conf",
      "ln foo.conf bar.conf",
      "ln -s bar.conf foo.conf",
      "ln bar.conf foo.conf"
    ],
    respuestaCorrecta: 0
  },
  // Pregunta 162
  {
    pregunta: "Which of the following is true for hard linked files? (Choose three.)",
    opciones: [
      "The output of stat will report hard instead of regular file.",
      "The hard linked files have the same permissions and owner.",
      "The hard linked files share the same inode.",
      "The hard linked files are indicated by a > when listed with ls -l.",
      "The hard linked files must be on the same filesystem."
    ],
    respuestaCorrecta: [1, 2, 4]
  },
  // Pregunta 163
  {
    pregunta: "Which of the following commands will mount an already inserted CD-ROM in /dev/sr0 onto an existing directory /mnt/cdrom when issued with root privileges?",
    opciones: [
      "mount /dev/cdrom /mnt/cdrom",
      "mount /dev/sr0 /mnt/cdrom",
      "mount -t cdrom /dev/sr0 /mnt/cdrom",
      "mount -l cdrom /dev/sr0 /mnt/cdrom",
      "mount -f /dev/sr0 /mnt/cdrom"
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 164
  {
    pregunta: "Which chown command will change the ownership to dave and the group to staff on a file named data.txt?",
    opciones: [
      "chown dave/staff data.txt",
      "chown -u dave -g staff data.txt",
      "chown --user dave --group staff data.txt",
      "chown dave:staff data.txt"
    ],
    respuestaCorrecta: 3
  },
  // Pregunta 165
  {
    pregunta: "Which command creates a swap space on a block device or a file?",
    tipo: "texto",
    respuestaCorrecta: "mkswap",
    placeholder: "Escribe solo el comando..."
  },
  // Pregunta 166
  {
    pregunta: "Which of the following commands is used to modify quota settings? (Choose two.)",
    opciones: [
      "ediquota",
      "setquota",
      "edquota",
      "quotaedit",
      "quotaset"
    ],
    respuestaCorrecta: [1, 2]
  },
  // Pregunta 167
  {
    pregunta: "Which program updates the database that is used by the locate command?",
    tipo: "texto",
    respuestaCorrecta: "updatedb",
    placeholder: "Escribe solo el nombre del programa..."
  },
  // Pregunta 168
  {
    pregunta: "Which of the following commands enables the setuid (suid) permission on the executable /bin/foo?",
    opciones: [
      "chmod 1755 /bin/foo",
      "chmod 4755 /bin/foo",
      "chmod u-s /bin/foo",
      "chmod 755*s /bin/foo"
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 169
  {
    pregunta: "Which of the following options must be passed to a filesystem's entry in /etc/fstab in order to mount the file system without root privileges?",
    opciones: ["auto", "norestrict", "noauto", "user"],
    respuestaCorrecta: 3
  },
  // Pregunta 170
  {
    pregunta: "Which permissions and ownership should the file /etc/passwd have?",
    opciones: [
      "-rw------- 1 root root 531 Jun 5 22:45 /etc/passwd",
      "-rw-r--r-- 1 root root 531 Jun 5 22:45 /etc/passwd",
      "-rw-r--r-- 1 1 531 Jun 5 22:45 /etc/passwd",
      "-rw------- 1 1 531 Jun 5 22:45 /etc/passwd"
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 171
  {
    pregunta: "Which of the following commands will load a kernel module along with any required dependency modules?",
    opciones: ["depend", "insmod", "modprobe", "module_install", "loadmod"],
    respuestaCorrecta: 2
  },
  // Pregunta 172
  {
    pregunta: "Which of the following commands instructs SysVinit to reload its configuration file?",
    opciones: ["reinit", "init reload", "telinit 7", "telinit q", "init reinit"],
    respuestaCorrecta: 3
  },
  // Pregunta 173
  {
    pregunta: "Which of the following describes the correct order in which the components of the system boot process are started?",
    opciones: [
      "BIOS, kernel, bootloader, init system",
      "BIOS, bootloader, kernel, init system",
      "Bootloader, BIOS, kernel, init system",
      "BIOS, bootloader, init system, kernel",
      "Bootloader, BIOS, init system, kernel"
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 174
  {
    pregunta: "Where does the BIOS search for a bootloader?",
    opciones: [
      "On all connected storage media regardless of the boot device order.",
      "On all connected storage media in the defined boot device order.",
      "Only on hard disk drives in the defined boot device order.",
      "Only on the last added storage media.",
      "The BIOS is not responsible to search for a valid bootloader."
    ],
    respuestaCorrecta: 1
  },
  // Pregunta 175
  {
    pregunta: "Which command reads and displays the current contents of the Kernel Ring Buffer on the command line?",
    tipo: "texto",
    respuestaCorrecta: "dmesg",
    placeholder: "Escribe solo el comando..."
  },
  // Pregunta 176
  {
    pregunta: "Which file in /proc describes the IRQs that are used by various kernel drivers?",
    tipo: "texto",
    respuestaCorrecta: "interrupts",
    placeholder: "Escribe solo el nombre del archivo..."
  },
  // Pregunta 177
  {
    pregunta: "Which SysV init configuration file is commonly used to set the default run level?",
    tipo: "texto",
    respuestaCorrecta: "/etc/inittab",
    placeholder: "Escribe el nombre completo del archivo, incluyendo ruta..."
  },
  // Pregunta 178
  {
    pregunta: "What is the process ID number of the init process on a SysV init based system?",
    opciones: ["-1", "0", "1", "It is different with each reboot.", "It is set to the current run level."],
    respuestaCorrecta: 2
  }
];

let preguntasAleatorias = [];
let preguntaActual = 0;
let yaComprobada = false;
let respuestasCorrectas = 0;
let preguntasFalladas = [];

function mezclar(array) {
  return array.sort(() => Math.random() - 0.5);
}

function mostrarPregunta() {
  const form = document.getElementById("quiz-form");
  form.innerHTML = "";

  const p = preguntasAleatorias[preguntaActual];
  const esMultiple = Array.isArray(p.respuestaCorrecta);
  const esTexto = p.tipo === "texto"; // Verificar si es pregunta de texto

  const div = document.createElement("div");
  div.className = "question-card";

  let opcionesHTML = "";
  
  if (esTexto) {
    // Renderizar input de texto para preguntas de tipo texto
    opcionesHTML = `
      <div class="opcion-texto">
        <input type="text" id="respuesta-texto" placeholder="${p.placeholder || 'Escribe tu respuesta...'}" />
      </div>
    `;
  } else {
    // Renderizar opciones múltiples como antes
    opcionesHTML = p.opciones.map((opcion, i) => {
      const letra = String.fromCharCode(97 + i);
      return `
        <label class="opcion-label">
          <input type="${esMultiple ? "checkbox" : "radio"}" name="opcion" value="${i}" />
          <strong>${letra}.</strong> ${opcion}
        </label>
      `;
    }).join("");
  }

  div.innerHTML = `
    <div class="pregunta-header">
      <span class="pregunta-numero">Pregunta ${preguntaActual + 1}</span>
    </div>
    <p class="pregunta-texto"><strong>${p.pregunta}</strong></p>
    <div class="opciones">
      ${opcionesHTML}
    </div>
  `;

  form.appendChild(div);
}

function comprobarRespuesta() {
  if (yaComprobada) return;

  const p = preguntasAleatorias[preguntaActual];
  const esTexto = p.tipo === "texto";
  const esMultiple = Array.isArray(p.respuestaCorrecta);

  let seleccionadas = [];
  let correcta = false;

  if (esTexto) {
    const respuestaUsuario = document.getElementById("respuesta-texto").value.trim();
    if (!respuestaUsuario) {
      alert("Por favor escribe una respuesta.");
      return;
    }
    
    correcta = respuestaUsuario === p.respuestaCorrecta;
    seleccionadas = [respuestaUsuario];
    
    const input = document.getElementById("respuesta-texto");
    input.disabled = true;
    
    const feedback = document.createElement("span");
    feedback.style.marginLeft = "10px";
    feedback.style.fontWeight = "bold";
    feedback.textContent = correcta ? "✅ Correcto!" : `❌ Incorrecto (Respuesta: "${p.respuestaCorrecta}")`;
    feedback.style.color = correcta ? "green" : "red";
    
    input.parentNode.appendChild(feedback);
  } 
  else {
    if (esMultiple) {
      seleccionadas = Array.from(document.querySelectorAll('input[name="opcion"]:checked')).map(i => parseInt(i.value));
      if (seleccionadas.length === 0) {
        alert("Selecciona al menos una opción antes de comprobar.");
        return;
      }
    } else {
      const seleccion = document.querySelector('input[name="opcion"]:checked');
      if (!seleccion) {
        alert("Selecciona una opción antes de comprobar.");
        return;
      }
      seleccionadas = [parseInt(seleccion.value)];
    }

    const opciones = document.getElementsByName("opcion");

    opciones.forEach((op, i) => {
      const label = op.parentElement;
      const iconoExistente = label.querySelector(".icono-respuesta");
      if (iconoExistente) iconoExistente.remove();

      const esCorrecta = esMultiple
        ? p.respuestaCorrecta.includes(i)
        : i === p.respuestaCorrecta;

      if (esCorrecta) {
        label.style.color = "green";
        label.style.fontWeight = "bold";
      }

      if (op.checked && !esCorrecta) {
        label.style.color = "red";
      }

      if (op.checked) {
        const iconoSpan = document.createElement("span");
        iconoSpan.className = "icono-respuesta";
        iconoSpan.style.marginLeft = "8px";
        iconoSpan.style.fontWeight = "bold";
        iconoSpan.textContent = esCorrecta ? "✅" : "❌";
        label.appendChild(iconoSpan);
      }

      op.disabled = true;
    });

    correcta = esMultiple
      ? (seleccionadas.length === p.respuestaCorrecta.length && 
         seleccionadas.every(val => p.respuestaCorrecta.includes(val)))
      : (seleccionadas[0] === p.respuestaCorrecta);
  }

  if (correcta) {
    respuestasCorrectas++;
  } else {
    preguntasFalladas.push({
      pregunta: p.pregunta,
      opciones: p.opciones,
      respuestaCorrecta: p.respuestaCorrecta,
      seleccionUsuario: seleccionadas,
      tipo: p.tipo
    });
  }

  yaComprobada = true;
}

function siguientePregunta() {
  if (!yaComprobada) {
    alert("Debes comprobar la respuesta primero.");
    return;
  }

  preguntaActual++;
  yaComprobada = false;

  if (preguntaActual < preguntasAleatorias.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

// Modificar mostrarResultado para manejar preguntas de texto
function mostrarResultado() {
  const total = preguntasAleatorias.length;
  const falladas = total - respuestasCorrectas;
  const porcentaje = Math.round((respuestasCorrectas / total) * 100);

  let resultadoHTML = `
    <h2>¡Examen finalizado!</h2>
    <p><strong>✅ Preguntas correctas:</strong> ${respuestasCorrectas}</p>
    <p><strong>❌ Preguntas incorrectas:</strong> ${falladas}</p>
    <p><strong>💯 Porcentaje de acierto:</strong> ${porcentaje}%</p>
  `;

  if (preguntasFalladas.length > 0) {
    resultadoHTML += `<h3 style="margin-top: 30px;">📋 Resumen de preguntas falladas:</h3>`;

    preguntasFalladas.forEach((f) => {
      let correctas, seleccionadas;
      
      if (f.tipo === "texto") {
        // Formateo para preguntas de texto
        correctas = `<span class="respuesta-correcta">✅ ${f.respuestaCorrecta}</span>`;
        seleccionadas = `<span class="respuesta-usuario">❌ ${f.seleccionUsuario[0]}</span>`;
      } else {
        // Formateo para preguntas de opción múltiple
        correctas = Array.isArray(f.respuestaCorrecta)
          ? f.respuestaCorrecta.map(i => `<span class="respuesta-correcta">✅ <strong>${String.fromCharCode(97 + i)}.</strong> ${f.opciones[i]}</span>`).join("<br>")
          : `<span class="respuesta-correcta">✅ <strong>${String.fromCharCode(97 + f.respuestaCorrecta)}.</strong> ${f.opciones[f.respuestaCorrecta]}</span>`;

        seleccionadas = f.seleccionUsuario.map(i => {
          const esCorrecta = Array.isArray(f.respuestaCorrecta)
            ? f.respuestaCorrecta.includes(i)
            : i === f.respuestaCorrecta;

          const icono = esCorrecta ? "✅" : "❌";
          const clase = esCorrecta ? "respuesta-correcta" : "respuesta-usuario";

          return `<span class="${clase}">${icono} <strong>${String.fromCharCode(97 + i)}.</strong> ${f.opciones[i]}</span>`;
        }).join("<br>");
      }

      resultadoHTML += `
        <div class="tarjeta-fallada">
          <p><strong>${f.pregunta}</strong></p>
          <p><em>Tu respuesta:</em><br>${seleccionadas}</p>
          <p><em>Respuesta correcta:</em><br>${correctas}</p>
        </div>
      `;
    });
  }

  document.getElementById("quiz-form").innerHTML = resultadoHTML;
  document.getElementById("botones").style.display = "none";
  document.getElementById("boton-reiniciar").style.display = "block";
}

function reiniciarExamen() {
  preguntaActual = 0;
  respuestasCorrectas = 0;
  yaComprobada = false;
  preguntasFalladas = [];

  preguntasAleatorias = mezclar([...preguntas]);

  document.getElementById("boton-reiniciar").style.display = "none";
  document.getElementById("botones").style.display = "block";

  mostrarPregunta();
}

window.onload = () => {
  preguntasAleatorias = mezclar([...preguntas]);
  mostrarPregunta();
};



