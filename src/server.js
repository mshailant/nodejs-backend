import bodyParser from "body-parser";
import express from "express";

const server = express();

const puerto = "222";

server.use(bodyParser.json());

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.log(err);
  res.status(status).send(message);
});

server.use("/", (req, res) => {
  res.status(200).json({ message: "Welcome to NodeJs Challenge!!!" });
});

export { server };
