import resource from 'resource-router-middleware';
import telemetry from '../models/telemetry';
import {Insert,Select} from '../database/queries.js';
import {match} from '../encryption/hash/encrypt_decrypt';

export default () => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'telemetry',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let companies = telemetry.find( facet => facet.id===id ),
			err = companies ? null : 'Not found';
		callback(err, companies);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		Select("telemetriadriverseniors").then(properties => {
			res.json(properties);
    	})	
	},

	/** POST / - Create a new entity */
	create({ body }, res) {

		let key = body.session;

		try {
			if(match(key)==200){
				let data = {
					
					hardwareId: body.hardwareId,
					externalIP: body.externalIP,
					driverType: body.numDevices,
					numManagerDevices: body.numManagerDevices,
					countSinceAppStart: body.countSinceAppStart,
					reason: body.reason,
					aditionalInfo: body.aditionalInfo,
					version: body.version 
				}
				if(typeof(data.hardwareId)!='undefined'){
					Insert(data);
					res.json(body);
				}
				else{
					res.sendStatus(400)
				}
			}	
		} catch (error) {
			res.sendStatus(511);	
		}	
	},

	/** GET /:id - Return a given entity */
	read({ companies }, res) {
		res.json(companies);
	},

	/** PUT /:id - Update a given entity */
	update({ company, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				company[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ company }, res) {
		telemetry.splice(telemetry.indexOf(company), 1);
		res.sendStatus(204);
	}
});
