import { createAction, props, union } from '@ngrx/store';

export const loadData = createAction('[Data] Load Data');

export const updateData = createAction(
    '[Data] Update Data',
    props<{ data: any }>()  
);

const all = union({
    loadData,
    updateData
});
export type DataActionsUnion = typeof all;