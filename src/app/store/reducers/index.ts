import * as fromQuestions from './questions.reducer'
import * as fromTemplate from './template.reducer'
import * as fromData from './data.reducer'
import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

export interface State {
    questions: fromQuestions.State;
    template: fromTemplate.State,
    data: fromData.State
}

export const reducers: ActionReducerMap<State> = {
    questions: fromQuestions.reducer,
    template: fromTemplate.reducer,
    data: fromData.reducer
  };

export const questionsFeature = createFeatureSelector<fromQuestions.State>('questions');

export const getQuestions = createSelector(
    questionsFeature,
    (state: fromQuestions.State) => state.entities
);

export const templateFeature = createFeatureSelector<fromTemplate.State>('template');

export const getTemplate = createSelector(
    templateFeature,
    (state: fromTemplate.State) => state
);

export const dataFeature = createFeatureSelector<fromData.State>('data');

export const getData = createSelector(
    dataFeature,
    (state: fromData.State) => state
);


