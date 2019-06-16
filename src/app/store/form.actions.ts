import { Action } from '@ngrx/store';
import { QuestionBase } from '../question-base';

export enum FormActionTypes {
    LOAD_FORM = '[Form] LOAD FORM Requested',
    UPDATE_FORM = '[Form] UPDATE FORM Requested',
    UPDATE_DATA = '[Form] UPDATE DATA Requested',
    ERROR = '[Form] Error'
}

export class LoadFormAction implements Action {
    type = FormActionTypes.LOAD_FORM;
    constructor(public fornName: string, public ids: Array<string>, public payload?: any) { }
}

export class UpdateFormAction implements Action {
    type = FormActionTypes.UPDATE_FORM;
    constructor(public payload: { questions: QuestionBase<any>[] }) { }
}

export class SaveDataAction implements Action {
    type = FormActionTypes.UPDATE_DATA
    constructor(public payload: { mutation: string, ids: Array<string>, data: any }) { }
}

export class ErrorAction implements Action {
    type = FormActionTypes.ERROR;
    constructor(public payload: any) { }
}

export type FormActions =
    LoadFormAction | UpdateFormAction | SaveDataAction | ErrorAction;