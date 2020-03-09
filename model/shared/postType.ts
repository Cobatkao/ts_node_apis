export class postType {
  public userId: number;
  public id: number;
  public title: string;
  public body: string;

  constructor(data: any) {
    this.userId = data.userId;
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
  }
}
