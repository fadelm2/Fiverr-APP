import  express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongoDB")

    }catch(error) {
        console.log(error)
    }
};


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(8800, ()=>{
    connect();
    console.log("Backend server is running!");
});






