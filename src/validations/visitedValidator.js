const {check, body} = require ("express-validator");
const {visiteds} = require ("../database");
/* const bcrypt = require ('bcryptjs'); */

module.exports = [
    check("name")
    .notEmpty()
    .withMessage("nombre requerido"),

    check("color")
    .notEmpty()
    .withMessage("color requerido"),

    check("email")
    .notEmpty()
    .withMessage("email requerido").bail()
    .isEmail()
    .withMessage("Email inválido"),
/* el email no tiene que estar registrado previamente */
    /*  body('email')
    .custom((value) => {
        let visited = visiteds.find(visited => visited.email === value);
        return visited !== undefined;
    })
    .withMessage('email ya registrado'),  */

    check("edad")
    .isInt({min:1}).withMessage("debe ser un numero mayor a 1")
]