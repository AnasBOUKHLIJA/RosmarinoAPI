module.exports = (sequelize, DataTypes) => {

        const Plates = sequelize.define("Plates",{
            namePlate : {
                 type: DataTypes.STRING,
                 allowNull: false,
            },
            descPlate : {
                type: DataTypes.STRING,
                allowNull: false,
            },
            pricePlate : {
                type: DataTypes.STRING,
                allowNull: false,
            },
            imgPlate : {
                type: DataTypes.STRING,
                allowNull: false,
            },
        });
        Plates.associate = (models) =>{
            Plates.belongsToMany(models.Commandes,{
                onDelete: "cascade",
                through: models.Quantities
            });
        }
        return Plates;
}