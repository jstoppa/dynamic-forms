import { createAction, props, union } from "@ngrx/store";
import { QuestionBase } from "../../models/question-base";

export const loadQuestions = createAction("[Form] LOAD questions");

export const loadQuestionsSucess = createAction(
  "[Form] LOAD questions Success",
  props<{ questions: QuestionBase<any>[] }>()
);

const all = union({ loadQuestions, loadQuestionsSucess });

export type QuestionActionsUnion = typeof all;

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
