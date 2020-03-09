"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 定义/posts/:id接口访问时的处理函数
 */
var data_1 = __importDefault(require("../../data/data"));
var postDetailType_1 = require("../../model/shared/postDetailType");
exports.apiGetPostDetail = function (req, res, next) {
    var selectedPostData = data_1.default.posts.find(function (item) {
        return item.id == req.params.id;
    });
    if (selectedPostData) {
        var selectedTodos = data_1.default.todos.filter(function (item) {
            return item.postId == req.params.id;
        });
        res.json(new postDetailType_1.postDetailType(selectedPostData, selectedTodos)); // 返回详细的数据，且数据依照postDetailType定义的类
    }
    else {
        res.status(404).json({ code: 404, errMsg: "cannot find your post" });
    }
};
