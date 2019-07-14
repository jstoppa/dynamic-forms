import { createAction, props, union } from "@ngrx/store";
import { QuestionBase } from "../../models/question-base";

export const loadQuestions = createAction("[Form] LOAD questions");

export const loadQuestionsSucess = createAction(
  "[Form] LOAD questions Success",
  props<{ questions: QuestionBase<any>[] }>()
);

export const updateQuestions = createAction(
  "[Form] UPDATE questions",
  props<{ questions: QuestionBase<any>[] }>()
);

const all = union({ loadQuestions, loadQuestionsSucess, updateQuestions });

export type QuestionActionsUnion = typeof all;
