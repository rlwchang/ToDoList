const express = require('express');
const app = express();
const path = require('path');

const helper = require('./helpers');
helper.seedDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, "client/dist")));

const routes = require("./routes");

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "client/dist/index.html")));
app.use("/api/todos", routes.todosApiRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started!"));
