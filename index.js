
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const envelopeRoutes = require('./routes/envelope.js');

app.use(bodyparser.json());


app.use('/envelope', envelopeRoutes);

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

app.get('/', (res, req)=>{
    res.send("Welcome to Personal Budget API")
});


app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
