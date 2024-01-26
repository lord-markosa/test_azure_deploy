import express from "express";

const server = express();

server.use("/", (_, res, __) => {
    res.send("Hello dear!");
});

server.listen(process.env.PORT || 3000);
