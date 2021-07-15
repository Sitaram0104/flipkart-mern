import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./server/database/database.js";
import Routes from "./server/routes/routes.js";

// import DefaultData from "./default.js";

dotenv.config();

const app = express();

Connection(process.env.MONGODB_URI);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(`./client/build`));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", Routes);

// DefaultData();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
