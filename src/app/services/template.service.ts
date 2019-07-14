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
      gridTemplateAreas: "body",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr"
    });
  }
}
