
module.exports = (sequelize,DataTypes) =>{

    const Reservations = sequelize.define("Reservations",{
        nomComplet:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        numero:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateRes:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        timeRes:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        nbperson:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        msg:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
    return Reservations;
}