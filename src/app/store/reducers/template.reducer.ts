import { Template } from "../../models/template";
import {
  TemplateActionsUnion,
  loadTemplate,
  updateTemplate,
  loadTemplateSucess
} from "../actions/template.actions";
import { updateData } from '../actions/data.actions';

export interface State {};

export const initialState: State = <Template>{};

export function reducer(
  state = initialState,
  action: TemplateActionsUnion
): State {
  switch (action.type) {
    case loadTemplate.type:
      return { ...state };
    case loadTemplateSucess.type:
      return { ...action.template };
    case updateTemplate.type:
      return { ...action.template };
    default: 
      if (action['type'] === updateData.type)
        return state;
      else
        return { ...state };
  }
}
