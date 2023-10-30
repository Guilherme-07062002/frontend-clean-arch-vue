import { initialState } from "../store/state";
import { CountAction } from "../actions/count";
import { AppState } from "../store";

export const CountReducer = (state: AppState = initialState, action: CountAction) => {
  switch (action.type) {
    case 'COUNT':
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
}