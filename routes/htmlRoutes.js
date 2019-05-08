var path = require("path");

module.exports = function(app) {
  // Loads index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  // Loads Artist page and pass in an example by id
  app.get("/artists", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/artist.html"));
  });

  // Loads Gigs ("shows") page and pass in an example by id
  app.get("/gigs", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/show.html"));
  });

  // Loads Venues page and pass in an example by id
  app.get("/venues", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/venue.html"));
  });

  // Render homepage for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });
};
