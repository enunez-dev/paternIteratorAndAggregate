import { Aggregate } from './Aggregate';
import { MyIterator } from './Iterator';
import { CreUserIterator } from './CreUserIterator';
import { CreApiClient } from './CreApiClient';
import { UserData } from './CreUser';

export class CreAggregate implements Aggregate<[number, UserData]> {
  private items: Map<number, UserData>;
  constructor() {
    this.items = new CreApiClient().getCreUsers();
  }

  public createIterator(): MyIterator<[number, UserData]> {
    return new CreUserIterator(this.items);
  }
}
