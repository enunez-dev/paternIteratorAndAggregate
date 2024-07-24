import { MyIterator } from './Iterator';

export interface Aggregate<T> {
  createIterator(): MyIterator<T>;
}
