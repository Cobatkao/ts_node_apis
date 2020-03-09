/**
 * 定义/posts接口访问时的处理函数
 */
import DataCenter from "../../data/data";
import { RequestHandler } from "express";
import { postType } from "../../model/shared/postType";

export const apiGetPost: RequestHandler = (req, res, next) => {
  res.json(
    DataCenter.posts.map((item: any) => {
      return new postType(item);
    })
  );
};
