# Termux Commands Collection

Kumpulan perintah Termux lengkap untuk berbagai keperluan.

> **Catatan:** Gunakan semua perintah/tool di bawah ini dengan bijak dan hanya untuk keperluan edukasi/pembelajaran.

---

## 1. Persiapan Awal Termux

Sebelum menjalankan tool, selalu update dan upgrade package Termux:

```bash
pkg update && pkg upgrade -y
```

Install dependensi umum yang sering dibutuhkan:

```bash
pkg install python python2 php git curl wget ruby nano -y
```

---

## 2. Koleksi Tool & Script Termux

### Onex (Package Installer & Tool Library)
```bash
apt update && apt upgrade -y
apt install git python -y
git clone https://github.com/Rajkumrdusad/onex
cd onex
chmod +x install.sh
./install.sh
```

### Prank WhatsApp
```bash
pkg install python2 php git -y
git clone https://github.com/siputra12/prank.git
cd prank
ls
php wa.php
```

### Phising Game (Mobile Legends & Clash of Clans)
```bash
apt update && apt upgrade -y
pkg install python2 apache2 php git -y
git clone https://github.com/Senitopeng/PhisingGame
cd PhisingGame
python2 phising.py
```

### OSIF (Open Source Information Facebook)
```bash
pkg install python2 git -y
git clone https://github.com/ciku370/OSIF
cd OSIF
pip2 install -r requirements.txt
python2 osif.py
```

### Whatshack
```bash
pkg update && pkg upgrade -y
pkg install git curl -y
git clone https://github.com/AndriGanz/whatshack
cd whatshack
ls
sh whatshack.sh
```

### D-TECT Tool
```bash
apt install git python2 -y
git clone https://github.com/shawarkhanethicalhacker/D-TECT
cd D-TECT
chmod +x d-tect.py
python2 d-tect.py
```

### DDOS Tools

#### 1. Hammer
```bash
pkg update && pkg upgrade -y
pkg install python git -y
git clone https://github.com/cyweb/hammer
cd hammer
python hammer.py
python hammer.py -s [IP target] -p [port] -t 135
```

#### 2. Xerxes
```bash
apt install git clang -y
git clone https://github.com/zanyarjamal/xerxes
cd xerxes
clang xerxes.c -o xerxes
./xerxes [nama_website] 80
```

#### 3. Torshammer
```bash
pkg update && pkg upgrade -y
pkg install git tor python2 -y
git clone https://github.com/dotfighter/torshammer.git
cd torshammer
python2 torshammer.py
```

#### 4. LiteDDOS
```bash
apt update && apt upgrade -y
pkg install git python2 -y
git clone https://github.com/4L13199/LITEDDOS
cd LITEDDOS
python2 liteDDOS.py
```

### Auto Bot Facebook
```bash
git clone https://github.com/Senitopeng/BotFbBangDjon.git
cd BotFbBangDjon
python2 bangdjon.py
```

### Auto Reaction Facebook
```bash
git clone https://github.com/tomiashari/fb-autoreaction.git
cd fb-autoreaction
python2 fb-autoreaction
```

### SQLMap
```bash
apt update && apt upgrade -y
apt install python python2 git -y
git clone https://github.com/sqlmapproject/sqlmap
cd sqlmap
python2 sqlmap.py
```

### Weeman (Phising Instagram)
```bash
pkg update && pkg upgrade -y
pkg install python2 git -y
git clone https://github.com/evait-security/weeman.git
cd weeman
python2 weeman.py
```

### Instabot (Followers & Like Instagram)
```bash
pkg update && pkg upgrade -y
pkg install python2 ruby git -y
gem install lolcat
git clone https://github.com/Hanzelnutt/instabot
cd instabot
pip2 install -r requirements.txt
bash instabot
```

### WiFi Hacker (Khusus Root)
```bash
apt update && apt upgrade -y
apt install git -y
git clone https://github.com/esc0rtd3w/wifi-hacker
cd wifi-hacker
chmod +x wifi-hacker.sh
./wifi-hacker.sh
```

### xNot_Found
```bash
apt update && apt upgrade -y
pkg install git gem figlet -y
gem install lolcat
git clone https://github.com/hatakecnk/xNot_Found
cd xNot_Found
sh xNot_Found.sh
```

### MBF (Multi Brute Force Facebook)
```bash
pkg update && pkg upgrade -y
pkg install python2 git -y
pip2 install mechanize requests
git clone https://github.com/pirmansx/mbf
cd mbf
python2 MBF.py
```

### Wifiphisher / Hack Gmail Setup
```bash
apt-get update && apt-get upgrade -y
apt-get install git python python-pip python-setuptools -y
pip install scapy
git clone https://github.com/wifiphisher/wifiphisher.git
cd wifiphisher
python setup.py install
python wifiphisher
```

### Instahack
```bash
apt update && apt upgrade -y
pkg install python git nano -y
git clone https://github.com/avramit/instahack.git
cd instahack
pip install requests
python hackinsta.py
```

### IP GeoLocation
```bash
apt install python git -y
git clone https://github.com/maldevel/IPGeoLocation.git
cd IPGeoLocation
chmod +x ipgeolocation.py
pip install -r requirements.txt
python ipgeolocation.py -m
python ipgeolocation.py -t http://www.google.com
```

### RED_HAWK
```bash
apt update && apt upgrade -y
apt install git php -y
git clone https://github.com/Tuhinshubhra/RED_HAWK
cd RED_HAWK
chmod +x rhawk.php
php rhawk.php
```

### B4J1N64Nv5
```bash
pkg install update git toilet figlet -y
pip2 install lolcat
git clone https://github.com/DarknessCyberTeam/B4J1N64Nv5
cd B4J1N64Nv5
sh B4J1N64N.sh
```

### Termux Ubuntu (Proot)
```bash
apt update && apt upgrade -y
pkg install git proot wget -y
git clone https://github.com/Neo-Oli/termux-ubuntu
cd termux-ubuntu
chmod +x ubuntu.sh
./ubuntu.sh
./start.sh
```

### Tembak Paket XL
```bash
pkg update && pkg upgrade -y
pkg install git python -y
git clone https://github.com/albertoanggi/xl-py
cd xl-py
pip install -r requirements.txt
chmod +x app.py
python app.py
```

### Admin Finder
```bash
apt update && apt upgrade -y
pkg install python2 git -y
git clone https://github.com/AdheBolo/AdminFinder
cd AdminFinder
chmod 777 AdminFinder.py
python2 AdminFinder.py
```

### Mr.Rv1.1
```bash
apt update && apt upgrade -y
pkg install git gem figlet -y
gem install lolcat
git clone https://github.com/Mr-R225/Mr.Rv1.1
cd Mr.Rv1.1
sh Mr.Rv1.1.sh
```

### 4wsectools
```bash
apt update && apt upgrade -y
apt install git -y
git clone https://github.com/aryanrtm/4wsectools
cd 4wsectools
chmod 777 tools
./tools
```

### Fsociety Framework
```bash
git clone https://github.com/manisso/fsociety
cd fsociety
chmod +x install.sh
./install.sh
python2 fsociety.py
```

### Admin Panel Finder
```bash
pkg install git -y
git clone https://github.com/Techzindia/admin_penal
cd admin_penal
chmod +x admin_panel_finder.py
python2 admin_panel_finder.py
```

### Hakku Framework
```bash
apt install python git -y
git clone https://github.com/4shadoww/hakkuframework
cd hakkuframework
chmod +x hakku
python hakku
```

### viSQL
```bash
apt update && apt upgrade -y
apt install python2 git -y
git clone https://github.com/blackvkng/viSQL
cd viSQL
python2 -m pip install -r requirements.txt
python2 viSQL.py -t http://www.example.com
```

### Hash Buster
```bash
apt update && apt upgrade -y
apt install python2 git -y
git clone https://github.com/UltimateHackers/Hash-Buster
cd Hash-Buster
python2 hash.py
```

### Hunner Framework
```bash
apt update && apt upgrade -y
apt install python git -y
git clone https://github.com/b3-v3r/Hunner
cd Hunner
chmod 777 hunner.py
python hunner.py
```

### Lazymux
```bash
pkg update && pkg upgrade -y
pkg install python2 git -y
git clone https://github.com/Gameye98/Lazymux
cd Lazymux
chmod +x lazymux.py
python2 lazymux.py
```

### Diejoubu
```bash
apt update && apt upgrade -y
apt install php git -y
git clone https://github.com/alintamvanz/diejoubu
cd diejoubu/v1.2
php diejoubu.php
```

### ReconDog
```bash
apt update && apt upgrade -y
apt install python python2 git -y
git clone https://github.com/UltimateHackers/ReconDog
cd ReconDog
chmod +x dog.py
python2 dog.py
```

### Script Deface Creator
```bash
apt update && apt upgrade -y
apt install git python2 -y
git clone https://github.com/Ubaii/script-deface-creator
cd script-deface-creator
chmod +x create.py
python2 create.py
```

---

## 3. Hiburan & Utility Ringan di Termux

### Game Moon-Buggy
```bash
pkg install moon-buggy
moon-buggy
```

### Memutar Musik (mpv)
```bash
pkg install mpv
mpv /sdcard/lagu.mp3
```

### Browsing Web (w3m)
```bash
pkg install w3m
w3m www.google.com
```

### Menampilkan Informasi Perkiraan Cuaca
```bash
curl http://wttr.in/Jakarta
```

### Telepon via Termux API
```bash
pkg install termux-api
termux-telephony-call 081234567890
```

### Animasi Kereta (sl)
```bash
pkg install sl
sl
```

### Informasi Sistem (Neofetch)
```bash
pkg install neofetch
neofetch
```

### Teks ASCII (Figlet)
```bash
pkg install figlet
figlet "Halo Termux"
```

### YouTube CLI (mps-youtube)
```bash
pip install mps_youtube youtube_dl
apt install mpv -y
mpsyt
```

---

## 4. Kustomisasi Tampilan Termux (bash.bashrc)

Untuk mempercantik tampilan awal Termux saat dibuka:

```bash
pkg update && pkg upgrade -y
pkg install ruby cowsay toilet figlet neofetch nano -y
gem install lolcat

# Edit file konfigurasi bash:
cd $PREFIX/etc
nano bash.bashrc
```

Tambahkan baris berikut di bagian bawah file `bash.bashrc`:
```bash
cowsay -f eyes Cyber | lolcat
toilet -f standard Indonesia -F gay
neofetch
date | lolcat
```
