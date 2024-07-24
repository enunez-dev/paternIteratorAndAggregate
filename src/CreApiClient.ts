import { UserData } from './CreUser';

export class CreApiClient {
  public getCreUsers(): Map<number, UserData> {
    const data = new Map<number, UserData>([
      [1, new UserData('CRE User 1', 'CRE Address 1', 100.0)],
      [2, new UserData('CRE User 2', 'CRE Address 2', 200.0)],
      [3, new UserData('CRE User 3', 'CRE Address 3', 300.0)],
    ]);
    return data;
  }
}
