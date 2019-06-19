import { Template } from '../../models/template';
import { TemplateActionsUnion, loadTemplate, updateTemplate } from '../actions/template.actions';

export interface State  {
    template: Template
}

export const initialState: State = {
    template: null
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

// export interface FormState {
    //     data: any,
    //     form: DynamicForm
    // }
    
    
    // export const initialState: FormState = {
    //     data: null,
    //     form: null
    // };
    
    // export function reducer(
    //     state = initialState,
    //     action: FormActionsUnion
    // ): FormState {
    //     switch (action.type) {
    //         case loadForm.type: 
    //         case updateForm.type: {
    //             return {
    //                 form: action.form,
    //                 data: action.data
    //             };
    //         }
    
    //         case updateData.type: {
    //             return {
    //                 data: action.data,
    //                 form: null
    //             };
    //         }
    //     }
    // }
    
    
    // export interface FormState {
    //     data: any;
    //     questions: ;
    
    // }
    
    
    // export interface QuestionState extends EntityState<QuestionBase<any>> {};
    
    // function sortByPosition(q1: QuestionBase<any>, q2: QuestionBase<any>) {
    //     return q1.position.index - q2.position.index;
    // }
    
    // export const adapter: EntityAdapter<QuestionBase<any>> = createEntityAdapter<QuestionBase<any>>({
    //     sortComparer: sortByPosition
    // });
    
    // export const initialState: QuestionState = adapter.getInitialState({
    
    // });
    