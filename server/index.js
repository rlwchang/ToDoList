const express = require('express');
const app = express();
const path = require('path');

const helper = require('./helpers');
helper.seedDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routes = require("./routes");

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "../index.html")));
app.use("/api/todos", routes.todosApiRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started!"));
