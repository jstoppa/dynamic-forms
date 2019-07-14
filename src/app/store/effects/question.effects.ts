import { Injectable } from "@angular/core";
import { Actions, Effect, createEffect, ofType } from "@ngrx/effects";
import { QuestionService } from "src/app/services/questions.service";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import { QuestionActions } from "../actions";
import { EMPTY } from "rxjs";

@Injectable()
export class QuestionEffects {
  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionActions.loadQuestions),
      mergeMap(() =>
        this.questionService.getQuestions().pipe(
          map(questions => QuestionActions.loadQuestionsSucess({ questions })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private questionService: QuestionService
  ) {}
}
