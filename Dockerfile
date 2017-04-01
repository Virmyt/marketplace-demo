FROM php:7.1-fpm

# PHP extension
RUN requirements="git curl vim" \
    && apt-get update && apt-get install -y $requirements


RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && apt-get install -y nodejs
RUN npm install -g @angular/cli

RUN rm -rf /var/lib/apt/lists/* && apt-get purge --auto-remove -y

EXPOSE 8060

WORKDIR /var/www/project/


#docker run --name market -v /vagrant/marketplace:/var/www/project -p 8060:8060 marketplace-front && docker start market
# ng serve --host 0.0.0.0 --port 8060 --live-reload-port 49153

