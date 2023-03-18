const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator");
const { visiteds , writeJSON, readJSON } = require("../database/index");



module.exports = {
    registerVisited : (req,res) =>{
        res.render("registerVisited", {
            session: req.session,
            old: req.body
        });
    },
    postRegisterVisited: (req,res) =>{
        const errors = validationResult(req);  
          /* si no hay errores */
            if(errors.isEmpty()){

                let visited = req.body;

                req.session.visited = {
                    name: visited.name,
                    color: visited.color,
                    email: visited.email,
                    edad: visited.edad
                }

                let tiempoDeVidaCookie = new Date(Date.now() + 60000);

            if(req.body.rememberColor) {
                res.cookie(
                    "sessionCookies", 
                    req.session.visited, 
                    {
                        expires: tiempoDeVidaCookie,
                        httpOnly: true
                    })
            }

            res.locals.visited = req.session.visited;

                    // creando un nuevo usuario 
               let lastId = 0;
               visiteds.forEach(visited => {
                   if(visited.id > lastId){
                    lastId = visited.id;
                   }
               });
               //creando nuevo registro de visita 
                    let newVisited = {
                    //dale el id del ultimo usuario + 1 
                 id: lastId + 1,
                 name: req.body.name,
                 email: req.body.email,
                 color: req.body.color,
                 edad: req.body.edad
                };
         
                visiteds.push(newVisited);
         
                writeJSON("index.json", visiteds);

                res.render("loginVisited", {
                    ...newVisited
                }
                    
                );
            } else {
                res.render("registerVisited" , {
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session,
                    
                    
                })
            }  
        },

    colorVisited: (req,res) =>{
        let color = req.session.visited.color;
        let name = req.session.visited.name;
        res.render("colorVisited", {
            color,
            name,
            session: req.session
            
        });
    },
    close: (req, res) => {
        req.session.destroy();
    if(req.cookies.sessionCookies){
        res.cookie("sessionCookies", "", {maxAge: -1})
    }

    res.redirect("/");
}
}