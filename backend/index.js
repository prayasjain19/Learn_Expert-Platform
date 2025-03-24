const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");
const contactUsRoute = require("./routes/Contact");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const path = require("path")



dotenv.config();
const PORT = process.env.PORT || 5000;

const _dirname = path.resolve();

//database connect
database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "http://studynotion-platform.onrender.com ",
		credentials: true,
	})
)

app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp",
	})
)
//cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

app.use(express.static(path.join(_dirname, "/frontend/build")))
app.get('*',(_, res)=>{
	res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
});
//def route



app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

app.get("/", (res, req) => {
	req.send("hi")
})