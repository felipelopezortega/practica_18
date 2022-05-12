let express = require("express"); //inyectamos la dependencia de express
let router = express.Router(); //instalación del "router" al que se le asociará todas las rutas

router.get("/person", (req, res) => {
    res.send("Has solicitado el listado de las personas");
});

module.exports = router;