import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { QuestionBase } from '../../models/question-base';
import { QuestionActionsUnion, loadQuestions } from '../actions/questions.actions';

//https://ngrx.github.io/platform/stackblitz.html
//https://stackblitz.com/edit/ngrx-entity

export interface State extends EntityState<QuestionBase<any>> {

}

export const adapter: EntityAdapter<QuestionBase<any>> =
    createEntityAdapter<QuestionBase<any>>({

    });

export const initialState: State = adapter.getInitialState({

});

export function reducer(
    state = initialState,
    action: QuestionActionsUnion,
): State {
    switch (action.type)
    {
        case loadQuestions.type: {
            return adapter.addAll(action.questions, state);
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
