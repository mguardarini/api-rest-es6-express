 &middot;[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]() ![npm version](https://img.shields.io/npm/v/react.svg?style=flat)


Express & ES6 REST API Boilerplate
================================== 
This is a straightforward boilerplate for building REST APIs with ES6 and Express.

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)
- [Sequelize](https://github.com/sequelize/sequelize)
- [MySQL](https://github.com/mysqljs/mysql)
- [Crypto](https://nodejs.org/api/crypto.html)
- [HTTPS](https://nodejs.org/api/https.html)

> Tip: If you are using [Mongoose](https://github.com/Automattic/mongoose), you can automatically expose your Models as REST resources using [restful-mongoose](https://git.io/restful-mongoose).

```sh
# clone it
git clone git@github.com:mguardarini/api-rest-es6-express.git
cd express-es6-rest-api

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start

```

# Getting Started

Now, the most important part of all. Get an SSL certificate. A standard SSL certificate comes with two important files, Primary certificate and Intermediate certificate. To get an SSL, you will have to generate a CSR from your server for validation. Also we need to generate a key (private key) to maintain an HTTPS connection with the server. Running the following command in a linux environment will get us our desired mydomain.csr and private.key files.

``
openssl req -new -newkey rsa:2048 -nodes -out mydomain.csr -keyout private.key
``
### Generate a Self-Signed Certificate from an Existing Private Key and CSR

Use this method if you already have a private key and CSR, and you want to generate a self-signed certificate with them.

This command creates a self-signed certificate (domain.crt) from an existing private key (domain.key) and (domain.csr):

Primary Certificate

``
openssl x509 \
       -signkey private.key \
       -in mydomain.csr \
       -req -days 365 -out primary.crt
The -days 365 
``

Intermediate Certificate

``
openssl x509 \
       -signkey private.key \
       -in mydomain.csr \
       -req -days 365 -out intermediate.crt
The -days 365 
``

The option(-days) specifies that the certificate will be valid for 365 days

### Create Test Database

For this example i using MySQL database, so, to test you need to create a database with the name "Test" and create one table with the name "Telemetry".

 1. CREATE DATABASE Test; 
 2. use Test;
 3. CREATE TABLE Telemetry (hardwareId varchar(30), date dateTime, id int auto_increment primary key);

# References:

* [Creating an HTTPS Server with Node.js](https://medium.com/@nileshsingh/everything-about-creating-an-https-server-using-node-js-2fc5c48a8d4e)
* [Generate a Self-Signed Certificate from an Existing Private Key and CSR](https://www.digitalocean.com/community/tutorials/openssl-essentials-working-with-ssl-certificates-private-keys-and-csrs)

### License

* MIT
