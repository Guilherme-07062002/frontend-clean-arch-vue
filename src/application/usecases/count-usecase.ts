import { StoreService } from "../../domain"

export class CountUseCase {
  constructor(
    private store: StoreService
  ) { }

  execute() {
    this.store.count();
  }
}