"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = 8091;
var apiGetPosts_1 = require("./api/post/apiGetPosts");
var apiGetPostDetail_1 = require("./api/post/apiGetPostDetail");
app.get("/posts", apiGetPosts_1.apiGetPost);
app.get("/posts/:id", apiGetPostDetail_1.apiGetPostDetail);
app.post("/posts", apiCreatePost);
app.listen(process.env.PORT || PORT, function () {
    console.log("Server is running at port " + PORT + "......");
});
