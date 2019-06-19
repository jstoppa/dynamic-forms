import * as fromQuestions from './questions.reducer'
import * as fromTemplate from './template.reducer'
import * as fromData from './data.reducer'
import { createFeatureSelector, createSelector, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

export interface State {
    data: fromData.State
    questions: fromQuestions.State;
    template: fromTemplate.State
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const reducers: ActionReducerMap<State, any> = {
    data: fromData.reducer,
    questions: fromQuestions.reducer,
    template: fromTemplate.reducer
  };

export const getQuestionsState = createFeatureSelector<State, State>('questions');

export const getQuestionsEntityState = createSelector(
    getQuestionsState,
    state => state.questions
);

export const {
    selectAll: getAllQuestions,
  } = fromQuestions.adapter.getSelectors(getQuestionsEntityState);



// import { createFeatureSelector, State, createSelector } from '@ngrx/store';
// import { FormState } from './form.reducer';

// export const getFormState = createFeatureSelector<FormState>('form');

// // https://stackblitz.com/edit/create-selector-props
// // https://stackblitz.com/edit/musicq-angular-ngrx

// export const getForm = createSelector(
//     getFormState,
//     state => state.form
// );