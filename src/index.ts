import cors from "cors";
import express from "express";

import {} from "./config";
import {} from "./routes/index";


const PORT = 3000;
const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(express.json());


// app.use(router);

app.listen(PORT, async () => {
  console.log(`Server listen on ${PORT}`);
});

module.exports = app;