var path = require("path");

module.exports = function(app) {
  // Loads index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/floe.html"));
  });

  //The input-gig route loads cms.html
  app.get("/input-gig", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/cms.html"));
  });

  // floe route loads floe.html
  app.get("/floe", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/floe.html"));
  });

  // artists route loads artist-manager.html
  app.get("/artists", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/artist-manager.html"));
  });

  // artist input route loads add-artist.html
  app.get("/add-artist", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/add-artist.html"));
  });

  // venues route load venues.html
  app.get("/venues", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/venue-manager.html"));
  });

  //  venue input rou page
  app.get("/add-venue", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/add-venue.html"));
  });
};
