const router =  require("express").Router();
const { colorVisited , registerVisited , postRegisterVisited, close } = require("../controllers/visitedController");
/* const bcrypt = require("bcryptjs"); */
const visitedValidator = require("../validations/visitedValidator");
const sessionVisiter = require("../middlewares/sessionVisited");
const cookiesColorBody = require("../middlewares/cookiesColorBody");

/* su indice es: "/" */
router.get("/" , cookiesColorBody , registerVisited);
/* su indice es: "/" */
router.post("/" , visitedValidator , cookiesColorBody , postRegisterVisited);

router.get("/colorVisited", cookiesColorBody, colorVisited  );

router.get('/close',cookiesColorBody, close);


module.exports = router;