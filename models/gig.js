module.exports = function(sequelize, DataTypes) {
    var Gig = sequelize.define("Venues", {
        name: DataTypes.STRING,
        date: DataTypes.STRING,
        time: DataTypes.STRING,
    });

    Gig.assoicate = function(models){
    Gig.belongsTo(models.Artist, {
        foreignKey: {
            allowNull:false
        }}),
    Gig.belongsTo(models.Venue, {
        foreignKey: {
            allowNull:false
        }
        })
    }

  return Gig;
};