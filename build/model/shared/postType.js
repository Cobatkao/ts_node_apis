"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var postType = /** @class */ (function () {
    function postType(data) {
        this.userId = data.userId;
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
    }
    return postType;
}());
exports.postType = postType;
