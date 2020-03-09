"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 返回较为复杂的数据
 */
var postType_1 = require("./postType");
var todoType_1 = require("./todoType");
var postDetailType = /** @class */ (function (_super) {
    __extends(postDetailType, _super);
    function postDetailType(postData, todoData) {
        var _this = _super.call(this, postData) || this;
        _this.price = postData.price;
        _this.currency = postData.currency;
        _this.todos = todoData.map(function (item) {
            return new todoType_1.TodoType(item);
        });
        return _this;
    }
    return postDetailType;
}(postType_1.postType));
exports.postDetailType = postDetailType;
