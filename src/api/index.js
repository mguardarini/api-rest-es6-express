import { Router } from 'express';
import telemetry from './telemetry';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/telemetry', telemetry({ config, db }));

	return api;
}
