# make sure nvm can be called, see http://unix.stackexchange.com/questions/184508/nvm-command-not-available-in-bash-script
. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc

rm -rf node_modules 
git checkout node_modules/execfile 
nvm install 6 
#setting variables for highcharts export module, see https://github.com/highcharts/node-export-server
echo 'export ACCEPT_HIGHCHARTS_LICENSE=YES' >> ~/.bashrc
#setting bash locale to fix error 'Fontconfig warning: ignoring C.UTF-8: not a valid language tag', see https://github.com/giakki/uncss/issues/166
echo 'LC_ALL=C' >> ~/.bashrc
#get Microsoft fonts like Arial and Arial Black
sudo apt-get update
echo ttf-mscorefonts-installer msttcorefonts/accepted-mscorefonts-eula select true | sudo debconf-set-selections
sudo apt-get install ttf-mscorefonts-installer

npm install 
#npm run build