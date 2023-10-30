import { GetUsecase } from "../../application/usecases";
import { PiniaStoreService } from "../../infra/services/pinia";
import { CounterStore } from "../../infra/services/pinia/store";

export const makeGetUsecase = () => {
  const counterStore = CounterStore();
  const storeService = new PiniaStoreService(counterStore);
  return new GetUsecase(storeService);
}