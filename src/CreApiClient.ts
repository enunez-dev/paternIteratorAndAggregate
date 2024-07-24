import { UserData } from './CreUser';

export class CreApiClient {
  public getCreUsers(): Map<number, UserData> {
    const data = new Map<number, UserData>([
      [1, new UserData('Google User 1', 'Google Address 1', 100.0)],
      [2, new UserData('Google User 2', 'Google Address 2', 200.0)],
      [3, new UserData('Google User 3', 'Google Address 3', 300.0)],
    ]);
    return data;
  }
}
