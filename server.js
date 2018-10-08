const mongoose = require("mongoose"),
      express  = require("express"),
      next     = require("next"),
      Contact  = require("./models/contact")

const dev = process.env.NODE_ENV !== "production"
const app = next({dev})
const handle = app.getRequestHandler()

mongoose.connect("mongodb://localhost:27017/contact-example", {useNewUrlParser: true}).then(
    () => console.log("Database is connected"),
    err => console.log("Can not connect to the database" + err)
)

app.prepare()
   .then(() => {
       const server = express()
    
       server.get("/contact/:id", (req, res) => {
           const actualPage = "/contact"
           const queryParams = {id: req.params.id}
           app.render(req, res, actualPage, queryParams)
       })
    
       // api routes
       server.get("/api/contact/:id", (req, res) => {
           Contact.findOne({first_name: req.params.id}, (error, contact) => {
               if (error) return next(error)
               res.status(200).json(contact)
           })
       })
    
       server.get("*", (req, res) => handle(req, res))
    
       server.listen(3000, (err) => {
           if (err) throw err
           console.log("> Ready on http://localhost:3000")
       })
   })
   .catch((ex) => {
       console.error(ex.stack)
       process.exit(1)
   })
