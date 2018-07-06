import {connection} from '../connection';
import Sequelize from "sequelize";

/**
 * Schema of table;
 */
export const telemetriadriverseniors = connection.define('telemetriadriverseniors', {

    hardwareId:Sequelize.INTEGER,
    externalIP: Sequelize.STRING,
    driverType: Sequelize.STRING,
    numDevices:Sequelize.INTEGER,
    numManagerDevices:Sequelize.INTEGER,
    countSinceAppStart:Sequelize.INTEGER,
    reason:Sequelize.INTEGER,
    aditionalInfo: Sequelize.STRING,
    dateTime:Sequelize.DATE,
    version: Sequelize.STRING,
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
});