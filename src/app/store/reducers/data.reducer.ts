import { DataActionsUnion, loadData, updateData } from '../actions/data.actions';

export interface State {};

export const initialState: State = { };

export function reducer(
  state = initialState,
  action: DataActionsUnion
): State {
  switch (action.type) {
    case loadData.type:
      return { ...state };
    case updateData.type:
      return { ...action.data } 
    default:
      return { ...state };
  }
}

