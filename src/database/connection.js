import Sequelize from "sequelize";
import config from "./config";

/**
 * Create connection with database.
 */
export const connection = new Sequelize(
    config.database,
    config.user,
    config.password,{
    host: config.host,
    dialect: config.dialect,
    define:{
        timestamps:false
    }
});

const conn = connection.authenticate()
    .then(()=>{
        console.log("Connection with Mysql Database");
    })
    .catch(()=>{    
        console.log("Don't Work.");
    })
    .done();
