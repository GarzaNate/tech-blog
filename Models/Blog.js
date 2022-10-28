const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Connection');

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_posted: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [200]
            }     
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        // tableName: "blog",
        underscored: true,
        modelName: 'blog',
    }
);

module.exports = Blog;