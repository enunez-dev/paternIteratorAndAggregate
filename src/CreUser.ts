export class UserData {
  constructor(
    public name: string,
    public address: string,
    public payment: number,
  ) {}
}
export class GoogleUser {
  constructor(public id: number, public userData: UserData) {}
}
