import { TemplateActionsUnion, loadTemplate, updateTemplate } from '../actions/template.actions';

export interface State  {
    data: any
}

export const initialState: State = {
    data: null
}

export function reducer(
    state = initialState,
    action: TemplateActionsUnion
): State {
    switch(action.type) {
        case loadTemplate.type:
            return {
                ...state
            }
        case updateTemplate.type:
            return {
                ...state
            }
    }
}

