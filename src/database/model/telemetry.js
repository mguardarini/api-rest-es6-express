import {connection} from '../connection';
import Sequelize from "sequelize";

/**
 * Schema of table;
 */
export const telemetry = connection.define('telemetry', {

    hardwareId:Sequelize.INTEGER,
    dateTime:Sequelize.DATE,
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
});