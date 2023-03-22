const { response } = require("express");
const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))

const storage = multer.diskStorage({
    destination: function(response, file, directory){
        directory(null, "uploads/");
    },
    filename: function(require, file, directory){
        directory(null, file.originalname + path.extname(file.originalname) );
    }
});

const upload = multer({storage});


app.get("/", (_require, response) => {
    response.render("server");
})

app.post("/upload", upload.single("file"),(_require, response) => {
    /* return response.send("Arquivo adicionado com sucesso!"); */
    response.render("sucess");
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server running or port ${PORT}`);
});
