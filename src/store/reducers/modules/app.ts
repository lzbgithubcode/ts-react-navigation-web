import { APP } from '@/store/actionTypes';
import { IAction, IAppState } from '@/types/store';

const initState: IAppState = {
  sidebar: {
    opened: true,
  },
};
export default function appReducer(state = initState, action: IAction) {
  const { type, data } = action;
  switch (type) {
    case APP.APP_TOGGLE_SIDEBAR: {
      return { ...state, sidebar: { opened: data } };
    }
    default: {
      return state;
    }
  }
}
