Express & ES6 REST API Boilerplate
==================================

This is a straightforward boilerplate for building REST APIs with ES6 and Express.

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)
- Sequelize [link](https://github.com/sequelize/sequelize)
- MySQL [link](https://github.com/mysqljs/mysql)

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

License
-------

MIT

Getting Started
---------------
Now, the most important part of all. Get an SSL certificate. A standard SSL certificate comes with two important files, Primary certificate and Intermediate certificate. To get an SSL, you will have to generate a CSR from your server for validation. Also we need to generate a key (private key) to maintain an HTTPS connection with the server. Running the following command in a linux environment will get us our desired mydomain.csr and private.key files.

openssl req -new -newkey rsa:2048 -nodes -out mydomain.csr -keyout private.key

### Generate a Self-Signed Certificate from an Existing Private Key and CSR

Use this method if you already have a private key and CSR, and you want to generate a self-signed certificate with them.

This command creates a self-signed certificate (domain.crt) from an existing private key (domain.key) and (domain.csr):

openssl x509 \
       -signkey domain.key \
       -in domain.csr \
       -req -days 365 -out domain.crt
The -days 365 option specifies that the certificate will be valid for 365 days.


# References:

* [Creating an HTTPS Server with Node.js](https://medium.com/@nileshsingh/everything-about-creating-an-https-server-using-node-js-2fc5c48a8d4e)
* [Generate a Self-Signed Certificate from an Existing Private Key and CSR](https://www.digitalocean.com/community/tutorials/openssl-essentials-working-with-ssl-certificates-private-keys-and-csrs)