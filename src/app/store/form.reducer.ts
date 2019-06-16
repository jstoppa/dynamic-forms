import { State } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { QuestionBase } from '../question-base';
import { FormActionTypes, FormActions } from './form.actions';

//https://stackblitz.com/run
//https://stackblitz.com/edit/ngrx-entity


export interface FormState {
    data: any,
    questions: QuestionBase<any>[],
    template: any
}


export const initialState: FormState = {
    data: null,
    questions: null,
    template: null
};

export function reducer(
    state = initialState,
    action: FormActions
): FormState {
    switch (action.type) {
        case FormActionTypes.LOAD_FORM:
            return Object.assign({}, state, {
                data: null,
                questions: null,
                template: null
            });

        case FormActionTypes.UPDATE_FORM:
            return Object.assign({}, state, {
                data: null,
                questions: null,
                template: null
            });

        case FormActionTypes.UPDATE_DATA:
            return Object.assign({}, state, {
                data: null,
                questions: null,
                template: null
            });

    }
}


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
