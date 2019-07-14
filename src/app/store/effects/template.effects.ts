import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from "rxjs/operators";
import { EMPTY } from "rxjs";
import { TemplateService } from 'src/app/services/template.service';
import { TemplateActions } from '../actions';

@Injectable()
export class TemplateEffects {
  loadTemplate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TemplateActions.loadTemplate),
      mergeMap(() =>
        this.templateService.getTemplate().pipe(
          map(template => TemplateActions.loadTemplateSucess({ template })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private templateService: TemplateService
  ) {}
}
