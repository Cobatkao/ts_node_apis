import express from "express";
const app = express();
const PORT = 8091;

import { apiGetPost } from "./api/post/apiGetPosts";
import { apiGetPostDetail } from "./api/post/apiGetPostDetail";

app.get("/posts", apiGetPost);

app.get("/posts/:id", apiGetPostDetail);

app.post("/posts", apiCreatePost);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running at port ${PORT}......`);
});
