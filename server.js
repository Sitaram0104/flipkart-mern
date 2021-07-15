import express from "express";
import Routes from "./routes/routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(`../client/build`));
}

app.use("/", Routes);

// app.get("/", (req, res) => {
//   res.json("server is running");
// });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
