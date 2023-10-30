import { StoreService } from './../../domain';

export class GetUsecase {
  constructor(
    private readonly storeService: StoreService
  ) { }

  execute() {
    return this.storeService.get();
  }
}