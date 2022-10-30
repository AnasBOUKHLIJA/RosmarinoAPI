module.exports = (sequelize,DataTypes) =>{
    const Quantities = sequelize.define("Quantities",{
        nbplate:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Quantities;
}