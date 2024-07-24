import { Aggregate } from './Aggregate';
import { MyIterator } from './Iterator';

export class UsersPanel<T> {
  private aggregates: Aggregate<T>[];

  constructor() {
    this.aggregates = [];
  }

  addAggregate(aggregate: Aggregate<T>): void {
    this.aggregates.push(aggregate);
  }

  show(): void {
    this.aggregates.forEach((a) => this.showItems(a.createIterator()));
  }

  private showItems(iterator: MyIterator<T>): void {
    while (!iterator.isDone()) {
      console.log(iterator.next());
    }
  }
}
