const { isLoggedIn } = require("../middleware/auth");

const express = require("express"), 
 router = express.Router(),
 { createInf,showInf , showAllInf,editInf,deleteInf} = require("../middleware/infirmier");


 router.route("/").post(createInf);
 router.route("/all").get(showAllInf);
 router.route("/:id").get(showInf).put(isLoggedIn, editInf).delete(isLoggedIn, deleteInf)


 module.exports = router;