import fs from 'fs';
const  key = fs.readFileSync('./src/encryption/certificates/private.key');
const  cert = fs.readFileSync( './src/encryption/certificates/primary.crt' );
const ca = fs.readFileSync( './src/encryption/certificates/intermediate.crt' );

export const options = {
	key: key,
	cert: cert,
	ca: ca
 };
