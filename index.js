const express = require('express');
const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    //res.sendFile(__dirname +'/templates_express/index.html');
    res.render('index');
})

app.get('/about', (req, res) => {
    //res.send('About us');
    res.render('about');
})

app.get('/user/:username/:id', (req, res) => {
    //res.send(`User ID: ${req.params.id}. Username: ${req.params.username}`);
    let data = 
    {
    username: req.params.username,
    id: req.params.id,
    hobbies: ['Football','Skate','Basketball']
    };
    res.render('user',data);
})

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});