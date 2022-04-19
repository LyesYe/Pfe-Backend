const 
    express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    user = require("./models/user"),
    userRouter = require("./routes/user"),
    authRouter = require("./routes/auth"),
    medRouter = require("./routes/medecin"),
    port=3001;

const cors = require('cors');
    app.use(cors());


//for .env file to work
require('dotenv').config({ path: '../.env' });

app.use(express.json());
app.use("/auth",authRouter);
app.use("/user", userRouter);
app.use("/med", medRouter);


mongoose.set("debug", true); // in devolpment process
mongoose
    .connect(
        process.env.mongoURL,
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "pfeAPI",
    })
    .then((con) => {
        console.log("Database is connected");
        app.listen(port, () => {
            console.log(`Server started on ${port}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });