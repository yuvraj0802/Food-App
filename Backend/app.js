const express = require("express");
const app = express();
var cors = require('cors');
const cookieParser = require('cookie-parser');

const corsOptions = {
    origin: true,
    credentials: true // Enable CORS with credentials
};

app.use(cors(corsOptions));
app.use(express.static('public/build'));


//middleware func-> post, front-> json
app.use(express.json()); //global middleware 
app.use(cookieParser());

const port = process.env.PORT || 4500;
app.listen(port, function () {
    console.log(`server listening on port ${port}`);
});



//mini app
const userRouter = require('./Routers/userRouter');
const planRouter = require('./Routers/planRouter');
const reviewRouter = require('./Routers/reviewRouter');
const bookingRouter = require('./Routers/bookingRouter');
//base route , router to use
app.use("/user", userRouter);
app.use("/plans", planRouter);
app.use("/review", reviewRouter);
app.use('/booking', bookingRouter);
// app.use("/auth", authRouter);


// if ( process.env.NODE_ENV == "production"){

//     app.use(express.static("foodApp_frontend-main/build"));

//     // const path = require("path");

//     // app.get("*", (req, res) => {

//     //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

//     // })

// }


