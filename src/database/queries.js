import {connection} from './connection';
import {telemetry} from './model/telemetry'
import Sequelize from "sequelize";

export function Insert(data){

    // console.log(data);
    try {
        var data_ = telemetry.build({

            hardwareId: data.hardwareId,
            dateTime: data.dateTime 
    
        });
        //Inserting Data into database
        data_.save();
         
    } catch (error) {
        
        console.log(error);
        return(500);
    }   
    
}

export function Select(params){

   try {
      return connection.query("SELECT * FROM "+params, { 
          type:Sequelize.QueryTypes.SELECT
      });    
   } catch (error) {
      return (500); 
   } 
   
}

