const { Sequelize,Model,DataTypes } = require('sequelize');

const sequelize = new Sequelize('Employee', 'postgres', 'Esoft123', {
  logging:false,
    host: 'http://44.221.1.243/',
    dialect:"postgres"/* one of 'mysql' |  | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.user=require("./user")(sequelize,DataTypes,Model);
db.contact=require("./contact")(sequelize,DataTypes);
db.sequelize.sync({force:false});

module.exports=db;