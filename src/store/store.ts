import { combineReducers, createStore } from "redux";
import { DECREMENT_STEP, INCREMENT_STEP } from "../utils/actions";
import { initFormReducer } from "./initFormStore/initForm.reducer";
interface IncrementStepAction {
  type: typeof INCREMENT_STEP;
}
interface DecrementStepAction {
  type: typeof DECREMENT_STEP;
}

type StepActions = IncrementStepAction | DecrementStepAction;

function step(state: number = 0, action: StepActions) {
  switch (action.type) {
    case INCREMENT_STEP:
      const incremented = state + 1;
      return incremented;
    case DECREMENT_STEP:
      const decremented = state - 1;
      return decremented;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  newData: initFormReducer,
  step,
});

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
