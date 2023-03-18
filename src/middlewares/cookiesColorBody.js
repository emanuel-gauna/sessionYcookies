module.exports = (req, res, next) => {
    if(req.cookies.sessionCookies && !req.session.visited) {
        req.session.visited = req.cookies.sessionCookies;
        res.locals.visited = req.session.visited;
    }
    next();
}