import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Template } from '../models/template';

@Injectable({
  providedIn: "root"
})
export class TemplateService {
  constructor() {}

  getTemplate(): Observable<Template> {
    return of(<Template>{
      gridTemplateAreas: "'left'",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
      gridGap: "20px",
      showBorder: false
    });
  }
}
