import { Router } from 'express';
import telemetry from './telemetry';
import status from './status';

export default () => {
	let api = Router();

	// mount the facets resource
	api.use('/telemetry', telemetry());
	api.use('/status', status());
	
	return api;
}
