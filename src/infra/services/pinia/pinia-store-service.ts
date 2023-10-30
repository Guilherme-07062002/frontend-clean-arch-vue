import { StoreService } from "../../../domain";
import { CounterStore } from "./store";

export class PiniaStoreService implements StoreService {
  constructor(
    private readonly store: CounterStore
  ) { }

  count(): void {
    this.store.increment();
  }

  get(): number {
    return this.store.getCount();
  }
}