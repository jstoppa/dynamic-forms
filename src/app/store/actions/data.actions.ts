import { createAction, props, union } from '@ngrx/store';

export const loadData = createAction(
    '[Data] Load Data',
    props<{ data: any }>()  
);

export const updateData = createAction(
    '[Data] Update Data',
    props<{ data: any }>()  
);

const all = union({
    loadData,
    updateData
});
export type DataActionsUnion = typeof all;