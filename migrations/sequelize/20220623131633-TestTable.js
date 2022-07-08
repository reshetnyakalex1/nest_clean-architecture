'use strict';
const { TEST, USER } = require("../typeorm-tables");

module.exports = {
    async up(queryInterface, Sequelize) {
        const { DataTypes } = Sequelize;
        return queryInterface.createTable(TEST, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unsigned: true
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            ownerID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                unsigned: true,
                references: {
                    model: USER,
                    key: "id",
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                default: true
            }
        });
    },

    async down(queryInterface) {
        return queryInterface.dropTable(TEST);
    },
};
