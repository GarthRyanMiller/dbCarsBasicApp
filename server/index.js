const app = require("./server")

const mongoose = require("mongoose");




const PORT = process.env.PORT || 3200
const DB_URI = "mongodb://127.0.0.1:27017/"

const mongodbInit = () => {
    mongoose.connect(
    `mongodb+srv://garthryan123:qwe123@carsdbcluster.13c8hs6.mongodb.net/test?retryWrites=true&w=majority`
,
{   dbName: 'Cars',
    useNewUrlParser: true,
    useUnifiedTopology: true

});
}
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function (){
    console.log("connected to db successfully")

    app.listen(PORT, () =>{
        console.log(`Server is runing on port ${PORT}`)
    })
})

//app.use(Router);


mongodbInit()


