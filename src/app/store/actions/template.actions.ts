import { createAction, props, union } from '@ngrx/store';
import { Template } from '../../models/template';

export const loadTemplate = createAction(
    '[Template] Load Template',
    props<{ template: Template }>()  
);

export const updateTemplate = createAction(
    '[Template] Update Template',
    props<{ template: Template }>()  
);

const all = union({
    loadTemplate,
    updateTemplate
});
export type TemplateActionsUnion = typeof all;