const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const multer = require("multer");

const app = express();

//config
dotenv.config();
const PORT = process.env.PORT || 7000

//multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
       return cb(null, "upload/");
    },
    filename: function(req, file, cb) {
        return cb(null, Date.now()+file.originalname);
    }
});
const uploads = multer({ storage });
//ejs
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routers
app.get("/",(req,res)=>{
    return res.render("home")
});

app.post("/profile", uploads.single("file"),(req,res)=>{
    console.log("File: ", req.file);
    console.log("successfully image")
    return res.redirect("/");
});

//server start
app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`);
});



























































































// const express = require("express");
// const dotenv = require("dotenv");
// const path = require("path");
// const multer = require("multer");

// const app = express();

// //config
// dotenv.config();

// //multer

// const storage= multer.diskStorage({
//     destination:function(req,file,cb){
//           return cb(null,"./upload");
//     },
//     filename:function(req,file,cb){
//      return  cb(null, Date.now() + '-' + file.originalname)
//     }
// });
// const upload = multer({ storage });

// //middleware
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// //ejs
// app.set("view engine","ejs");
// app.set("views",path.resolve("./views"));

// const PORT = process.env.PORT || 7000
// //routers
// app.get("/",(req,res)=>{
//     return res.render("home")
// });

// app.post("/profile", upload.single("file"),(req,res)=>{
//     console.log("Body: ", req.body);
//     console.log("File: ", req.file);
//     return res.redirect("/");
// })
// //server start
// app.listen(PORT,()=>{
//     console.log(`server is running on port number ${PORT}`);
// });