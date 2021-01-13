const express       = require('express');
const mongoose = require("mongoose");
const db = require("./models");
/** Middlewares */
const bodyParser    = require('body-parser');

const UsersRoute     = require('./routers/users');
const BusinessRoute = require('./routers/business');
// const ProductsRoute = require('./routers/products');



require('dotenv/config');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


try {
mongoose.connect(
    process.env.ATLAS_URI,
    { useNewUrlParser : true , useUnifiedTopology : true},
    () => {console.log('----- connected with DB -----')}   
);
} catch (error) {
console.log('----- unable to connect with DB ----')
}

const check_connection = mongoose.connection

check_connection.on('error' ,  (err) => {
    console.log(err);
});

check_connection.once('open', ()=>{
    console.log('Database Connection Established!');
});


const app = express();

// Middlewares
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    
});


// parent routes
app.use('/api/v1/users', UsersRoute);
app.use('/api/v1/users/business', BusinessRoute);
// app.use('/api/v1/users/products', ProductsRoute);


