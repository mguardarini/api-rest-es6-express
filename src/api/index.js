import { Router } from 'express';
import telemetry from './telemetry';
import status from './status';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/telemetry', telemetry({ config, db }));
	api.use('/status', status({ config, db }));
	
	return api;
}
