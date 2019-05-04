module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: {
      type: DataTypes,
      validate: 
      {isEmail: true}
    },
    genre: DataTypes.STRING,
    socialMedia: DataTypes.TEXT
  });
  Artist.associate = function(models){
    Artist.hasMany(models.Gig, {
      onDelete: "cascade"
    })
  }
  return Artist;
};
