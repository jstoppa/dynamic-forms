import * as fromQuestions from './questions.reducer'
import * as fromTemplate from './template.reducer'
import * as fromData from './data.reducer'
import { createFeatureSelector, createSelector, ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
    data: fromData.State
    questions: fromQuestions.State;
    template: fromTemplate.State
}

export const reducers: ActionReducerMap<State> = {
    data: fromData.reducer,
    questions: fromQuestions.reducer,
    template: fromTemplate.reducer
  };

export const questionsFeature = createFeatureSelector<fromQuestions.State>('questions');

export const getQuestions = createSelector(
    questionsFeature,
    (state: fromQuestions.State) => state.entities
);

export const templateFeature = createFeatureSelector<fromTemplate.State>('template');

export const getTemplate = createSelector(
    templateFeature,
    (state: fromTemplate.State) => state.template
);

