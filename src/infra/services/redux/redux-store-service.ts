import { Store } from "redux";
import { StoreService } from "../../../domain";

export class ReduxStoreService implements StoreService {
  constructor(
    private readonly store: Store
  ) { }

  count(): void {
    this.store.dispatch({ type: 'COUNT' });
  }
  
  get(): number {
    const result = this.store.getState().count as number;
    return result
  }

}