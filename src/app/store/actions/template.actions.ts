import { createAction, props, union } from "@ngrx/store";
import { Template } from "../../models/template";

export const loadTemplate = createAction("[Template] LOAD template");

export const loadTemplateSucess = createAction(
  "[Template] LOAD template Success",
  props<{ template: Template }>()
);

export const updateTemplate = createAction(
  "[Template] Update Template",
  props<{ template: Template }>()
);

const all = union({
  loadTemplate,
  loadTemplateSucess,
  updateTemplate
});
export type TemplateActionsUnion = typeof all;
