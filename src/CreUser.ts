export class UserData {
  constructor(
    public name: string,
    public address: string,
    public payment: number,
  ) {}
}
export class CreUser {
  constructor(public id: number, public userData: UserData) {}
}
