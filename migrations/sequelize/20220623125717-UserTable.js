'use strict';
const { USER } = require('../typeorm-tables');

module.exports = {
    async up(queryInterface, Sequelize) {
        const { DataTypes } = Sequelize;
        return queryInterface.createTable(USER, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unsigned: true
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        });
    },

    async down(queryInterface) {
        return queryInterface.dropTable(USER);
    },
};
