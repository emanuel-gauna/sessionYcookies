module.exports = (req, res, next) =>  req.session.visited ? res.redirect("/") : next();