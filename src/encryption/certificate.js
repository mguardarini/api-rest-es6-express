import fs from 'fs';
const  key = fs.readFileSync('./src/encryption/private.key');
const  cert = fs.readFileSync( './src/encryption/primary.crt' );
const ca = fs.readFileSync( './src/encryption/intermediate.crt' );

export const options = {
	key: key,
	cert: cert,
	ca: ca
 };
