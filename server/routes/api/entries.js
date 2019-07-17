const router = require("express").Router();
const entryController = require("../../controllers/entryController");
require('dotenv').config();
const jwt = require("jsonwebtoken");

router.use((req, res, next) => {
     // check header for the token
     var token = req.headers['access-token'];
     // decode token
     if (token) {
 
       // verifies secret and checks if the token is expired
       jwt.verify(token, process.env.SECRET, (err, decoded) =>{      
         if (err) {
           return res.json({ message: '401' });    
         } else {
           // if everything is good, save to request for use in other routes
           req.decoded = decoded;    
           next();
         }
       });
 
     } else {
 
       // if there is no token  
 
       res.send({ 
 
           message: '401' 
       });
 
     }
});


router.route("/entries")
    .get(entryController.findAll)
    .post(entryController.create)
    .put(entryController.update)
    .delete(entryController.delete);

router
    .route("/:id")
    .get(entryController.findById)
    // .put(entryController.update)
    // .delete(entryController.remove);
    ;

module.exports = router;