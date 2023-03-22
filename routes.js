const express = require('express');

const router = express.Router();

app.get("/", (_require, response) => {
    response.render("server");
})

/* app.post("/upload", upload.single("file"),(_require, response) => {
    return response.send("Arquivo recebido");
}); */

router.post('/upload', upload.single("file"),(_require, response) =>{
    return response.send("Arquivo recebido");
} )