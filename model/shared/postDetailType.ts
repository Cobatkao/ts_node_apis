/**
 * 返回较为复杂的数据
 */
import { postType } from "./postType";
import { TodoType } from "./todoType";

export class postDetailType extends postType {
  public price: number;
  public currency: string;
  public todos: TodoType;

  constructor(postData: any, todoData: any) {
    super(postData);
    this.price = postData.price;
    this.currency = postData.currency;
    this.todos = todoData.map((item: any) => {
      return new TodoType(item);
    });
  }
}
