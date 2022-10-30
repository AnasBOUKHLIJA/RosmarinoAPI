
module.exports = (sequelize,DataTypes) =>{

    const Mails = sequelize.define("Mails",{
        senderMail:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        msg:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Mails;

}