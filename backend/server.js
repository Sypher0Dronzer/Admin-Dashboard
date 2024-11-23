import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import "./config/passport.js";
import passport from "passport";

//Import routes
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

const mongoStore = MongoStore.create({
  mongoUrl: process.env.MONGO_URI, // Use the same database name
  collectionName: "sessions", // Optional: Customize session collection name
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoStore, // Use MongoDB store
    cookie: {
      secure: process.env.NODE_ENV !== "development", // Set to `true` if using HTTPS
      httpOnly: false,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 day
      // sameSite: "None",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB

// Routes
app.use("/api/auth", authRoutes);

// Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
