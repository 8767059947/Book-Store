import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
const app = express();

app.use(cors(
    {
        origin:[],
        methods:["POST", "GET"],
        credentials:true,
    }
));
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URL = process.env.mongoDBURL;

//Connect to mongodb 
main().then(() =>
    {
        console.log("Connection successfull");
    })
    .catch(err => console.log(err));
    
    async function main() {
      await mongoose.connect(URL);
    
      // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    }

    app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () =>
{
    console.log(`Server is listening on ${PORT}`);
})
