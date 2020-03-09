"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoType = /** @class */ (function () {
    function TodoType(data) {
        this.userId = data.userId;
        this.postId = data.postId;
        this.title = data.title;
        this.star = data.star;
        this.completed = data.completed;
    }
    return TodoType;
}());
exports.TodoType = TodoType;
