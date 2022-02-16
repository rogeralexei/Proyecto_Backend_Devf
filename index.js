const express=require('express')
const sequelize=require('./models/connection')
const moviesRoutes = require('./routes/routes')
const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// SETUP MOVIES ROUTES
app.use("/", moviesRoutes);

// INITIALIZE TABLES
sequelize.sync()


app.listen(process.env.PORT ||3000, () =>{
    console.log("Listening on port 3000")
})
