
module.exports = (sequelize,DataTypes) =>{
    const Commandes = sequelize.define("Commandes", {
        date:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        fullName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        numero:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Commandes.associate = (models) =>{
        Commandes.belongsToMany(models.Plates,{
            onDelete: "cascade",
            through: models.Quantities
        });
    }
    return Commandes;

}