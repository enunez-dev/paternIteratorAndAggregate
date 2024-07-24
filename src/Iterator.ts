export interface MyIterator<T> {
  current(): T;
  next(): T | null;
  isDone(): boolean;
}
