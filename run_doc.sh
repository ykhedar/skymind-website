#!/bin/bash
git clone https://github.com/ykhedar/skymind-website.git

# Install Nodejs
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Yarn
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn


# Install all dependencies
yarn install

# Build the project
yarn run build

#Deploy the Project
#yarn run start
# Serve the documentation using nginx
cd build/ && sudo apt install -y nginx && sudo mkdir -p /var/www/skydoc
sudo cp -r * /var/www/skydoc/

# add the  nginx config file.
nano /etc/nginx/sites-available/skydoc

sudo ln -s /etc/nginx/sites-available/skydoc /etc/nginx/sites-enabled/skydoc

# Install the Lets encrpyt certificate system.
sudo snap install core; sudo snap refresh core
sudo apt-get remove certbot
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot

# Generate and setup the SSL certificate automatically.
sudo certbot --nginx
