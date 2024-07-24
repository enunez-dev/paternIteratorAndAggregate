import { MyIterator } from './Iterator';

export class CreUserIterator<K, V> implements MyIterator<[K, V]> {
  private keys: K[];
  private map: Map<K, V>;
  private position: number = 0;

  constructor(map: Map<K, V>) {
    this.map = map;
    this.keys = Array.from(map.keys());
  }

  public current(): [K, V] {
    const key = this.keys[this.position];
    return [key, this.map.get(key) as V];
  }

  public next(): [K, V] {
    const key = this.keys[this.position];
    const value = this.map.get(key) as V;
    this.position += 1;
    return [key, value];
  }

  public isDone(): boolean {
    return this.position >= this.keys.length;
  }
}
