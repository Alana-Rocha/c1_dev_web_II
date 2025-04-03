import express from "express";
import router from "./routes/routes.js";

const PORT = 3100;
const app = express();

app.use(express.static("public"));
app.use(router);

app.listen(PORT, () =>
  console.log(`server is running in http://localhost:${PORT}/login`)
);
