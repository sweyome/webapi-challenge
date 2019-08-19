require('dotenv').config();
const express = require('express');
const port = process.env.PORT
const server = express();

const projectModel = require('./projects/projectRoutes.js');
const actionModel = require("./actions/actionRoutes.js");

server.use(express.json());
server.use("/projects", projectModel);
server.use("/actions", actionModel);

server.listen( port, () => {
    console.log(`====== Server listening on port ** ${port} ****`);
});