import { Template } from "../../models/template";
import {
  TemplateActionsUnion,
  loadTemplate,
  updateTemplate,
  loadTemplateSucess
} from "../actions/template.actions";

export interface State {
  template: Template;
}

export const initialState: State = {
  template: null
};

export function reducer(
  state = initialState,
  action: TemplateActionsUnion
): State {
  switch (action.type) {
    case loadTemplate.type:
      return { ...state };
    case loadTemplateSucess.type:
      return { template: action.template };
    case updateTemplate.type:
      return { template: action.template };
  }
}
