import { CountUseCase } from "../../application/usecases";
import { PiniaStoreService } from "../../infra/services/pinia";
import { CounterStore } from "../../infra/services/pinia/store";

export const makeCountUsecase = () => {
  const counterStore = CounterStore();
  const storeService = new PiniaStoreService(counterStore);
  return new CountUseCase(storeService);
}