"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var posts_json_1 = __importDefault(require("./posts.json"));
var todos_json_1 = __importDefault(require("./todos.json"));
var DataStore = /** @class */ (function () {
    function DataStore() {
    }
    DataStore.posts = posts_json_1.default;
    DataStore.todos = todos_json_1.default;
    return DataStore;
}());
exports.default = DataStore;
