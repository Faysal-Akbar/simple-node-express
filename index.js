const express = require("express");
const app = express();
var cors = require('cors');
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('wow I am excited to my first ever ever and ever node server');
})

const users = [
    {id: 0, name : "Faysal", email: "faysal@gmail.com", phone: "01787870723"},
    {id: 1, name : "Saily", email: "saily@gmail.com", phone: "01613726045"},
    {id: 2, name : "Jarin", email: "jarin@gmail.com", phone: "01787254361"},
    {id: 3, name : "Ruja", email: "ruja@gmail.com", phone: "01787870723"},
    {id: 4, name : "Sinan", email: "sinan@gmail.com", phone: "01787870723"},
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body);
    res.send(JSON.stringify(newUser));
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, ()=> {
    console.log('Listening from', port);
})