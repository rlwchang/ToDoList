const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routes = require("./routes");

app.use("/api/todos", routes.todosApiRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started!"));
