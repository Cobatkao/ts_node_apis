"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 定义/posts接口访问时的处理函数
 */
var data_1 = __importDefault(require("../../data/data"));
var postType_1 = require("../../model/shared/postType");
exports.apiGetPost = function (req, res, next) {
    res.json(data_1.default.posts.map(function (item) {
        return new postType_1.postType(item);
    }));
};
