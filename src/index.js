import http from 'http';
import https from 'https';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
// import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config.json';
import {options} from './encryption/certificate';


let app = express();

///Server Http
// app.server = http.createServer(app);
///Server Https
app.server = https.createServer(options,app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// connect to db
const server = () => {

	// internal middleware
	app.use(middleware({ config }));

	// api router
	app.use('/api', api({ config }));
	// api status;
	app.get('/status',function(req,res){

		let data = {
			date: Date(),
			status:"Everything Right!"
		}
		res.json(data);

	});

	app.server.listen(config.port_https, () => {
		console.log(`Started on port ${app.server.address().port}`);
	});
};

server();

export default app;
