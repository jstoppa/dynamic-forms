import { createAction, props } from '@ngrx/store';
import { QuestionBase } from '../../models/question-base';

export const loadQuestions = createAction(
    '[Form] LOAD questions',
    props<{ questions: QuestionBase<any>[] }>()
)

export type QuestionActionsUnion = ReturnType<typeof loadQuestions>;

// export const updateForm = createAction(
//     '[Form] UPDATE FORM Requested',
//     props<{ form: DynamicForm , data: any}>()
// )

// export const updateData = createAction(
//     '[Form] UPDATE DATA Requested',
//     props<{ data: any }>()
// )

// export const error = createAction(
//     '[Form] Error',
//     props<{ error: string }>()
// )

// const all = union({
//     loadForm,
//     updateForm,
//     updateData,
//     error
//   });
//   export type FormActionsUnion = typeof all;