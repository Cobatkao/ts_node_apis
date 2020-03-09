export class TodoType {
  public userId: number;
  public postId: number;
  public title: string;
  public star: number;
  public completed: boolean;

  constructor(data: any) {
    this.userId = data.userId;
    this.postId = data.postId;
    this.title = data.title;
    this.star = data.star;
    this.completed = data.completed;
  }
}
