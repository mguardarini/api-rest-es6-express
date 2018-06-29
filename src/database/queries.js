import {connection} from './connection';
import {telemetriadriverseniors} from './model/telemetriadriverseniors'
import Sequelize from "sequelize";

export function Insert(data){

    // console.log(data);
    try {
        var data_ = telemetriadriverseniors.build({

            hardwareId: data.hardwareId,
            externalIP: data.externalIP,
            driverType: data.numDevices,
            numManagerDevices: data.numManagerDevices,
            countSinceAppStart: data.countSinceAppStart,
            reason: data.reason,
            aditionalInfo: data.aditionalInfo,
            version: data.version 
    
        });
        //Inserting Data into database
        data_.save();
         
    } catch (error) {
        console.log(error)
    }   
    
}

