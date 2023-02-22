const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname, '/public');

app.use( express.static(publicPath) );
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`); // se usan comillas invertidas porque es una manera de concatenar 
});                                                            // Server started on http://localhost: con port, agregandole & y {} 

