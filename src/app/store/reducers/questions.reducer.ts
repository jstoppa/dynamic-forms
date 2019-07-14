import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { QuestionBase } from "../../models/question-base";
import {
  QuestionActionsUnion,
  loadQuestions,
  loadQuestionsSucess,
  updateQuestions
} from "../actions/questions.actions";

//https://ngrx.github.io/platform/stackblitz.html
//https://stackblitz.com/edit/ngrx-entity

export interface State extends EntityState<QuestionBase<any>> {}

export const adapter: EntityAdapter<QuestionBase<any>> = createEntityAdapter<
  QuestionBase<any>
>({
  selectId: (question: QuestionBase<any>) => question.id
});

export let initialState: State = adapter.getInitialState({});

export function reducer(
  state = initialState,
  action: QuestionActionsUnion
): State {
  switch (action.type) {
    case loadQuestions.type: {
      return { ...state };
    }
    case loadQuestionsSucess.type: {
      return adapter.addAll(action.questions, state);
    }
    case updateQuestions.type: {
      return adapter.updateMany(
        action.questions.map(question =>
          Object.assign({}, { id: question.id, changes: question })
        ),
        state
      );
    }
    default: {
      return state;
    }
  }
}

export const getQuestions = (state: State) => state.entities;
