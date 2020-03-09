/**
 * 定义/posts/:id接口访问时的处理函数
 */
import DataCenter from "../../data/data";
import { RequestHandler } from "express";
import { postDetailType } from "../../model/shared/postDetailType";

export const apiGetPostDetail: RequestHandler = (req, res, next) => {
  const selectedPostData: any = DataCenter.posts.find((item: any) => {
    return item.id == req.params.id;
  });
  if (selectedPostData) {
    const selectedTodos = DataCenter.todos.filter((item: any) => {
      return item.postId == req.params.id;
    });
    res.json(new postDetailType(selectedPostData, selectedTodos)); // 返回详细的数据，且数据依照postDetailType定义的类
  } else {
    res.status(404).json({ code: 404, errMsg: "cannot find your post" });
  }
};
