/* requires */
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const methodOverride = require('method-override');
/* requerir mudulo global de app session*/
const session = require("express-session");
/* instalar cookie-parser */
const cookieParser = require("cookie-parser");
/* requerir chequeo de cookies a nivel global de app */


/* Template engine Config. */
app.set("view engine", "ejs");
app.set("views", "./src/views");

/* Middlewares Global */
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
/* aplicar de forma global session con su prop secret */
app.use(session({
    secret: "sessionCookies",
    resave: false,
    saveUninitialized: true
}));
app.use(cookieParser());
/* aplicar cookie parser de manera global de app */






/* Routers */
const visitedRouter = require("./routes/visited");

/* Routes Middlewares *

/* Todos los productos */;
app.use("/", visitedRouter);



/* error 404 */
/* app.use((req,res,next)=>{
    res.status(404).render("not-found")
})
 */


app.listen( PORT, ()=>console.log(`server listen in port ${PORT}\n http://localhost:${PORT}` ));