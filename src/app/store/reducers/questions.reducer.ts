import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { QuestionBase } from "../../models/question-base";
import {
  QuestionActionsUnion,
  loadQuestions,
  loadQuestionsSucess
} from "../actions/questions.actions";
import { DropdownQuestion } from "src/app/question-dropdown";
import { TextboxQuestion } from "src/app/question-textbox";
import { createReducer, on, Action } from "@ngrx/store";
import { QuestionActions } from "../actions";

//https://ngrx.github.io/platform/stackblitz.html
//https://stackblitz.com/edit/ngrx-entity

export interface State extends EntityState<QuestionBase<any>> {}

export const adapter: EntityAdapter<QuestionBase<any>> = createEntityAdapter<
  QuestionBase<any>
>({
  selectId: (question: QuestionBase<any>) => question.id
});

export let initialState: State = adapter.getInitialState({});

// const userReducer = createReducer(
//   initialState,
//   on(QuestionActions.loadQuestions, state => {
//     return { ...state };
//   }),
//   on(QuestionActions.loadQuestionsSucess, (state, { questions }) => {
//     return adapter.addAll(questions, state);
//   })
// );

// export function reducer(state: State | undefined, action: Action) {
//   return userReducer(state, action);
// }

export function reducer(
    state = initialState,
    action: QuestionActionsUnion,
): State {
    switch (action.type) {
        case loadQuestions.type: {
            return { ...state };

        }
        case loadQuestionsSucess.type: {
            return adapter.addAll(action.questions, state);

        }
        default: {
            return state;
        }
    }
}

export const getQuestions = (state: State) => state.entities;

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
