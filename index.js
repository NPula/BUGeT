const express = require('Express');
const app = express();
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render("home");
})

app.listen(port, () => {
    console.log("Running app");
})