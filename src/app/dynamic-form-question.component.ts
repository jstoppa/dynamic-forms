import { Component, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, Type, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './models/question-base';
import { onInitEffects } from '@ngrx/effects/src/lifecycle_hooks';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})

export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  @ViewChild('content', { read: ViewContainerRef, static: true}) content: ViewContainerRef;
  
  get isValid() { return this.form.controls[this.question.key].valid; }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {

  }

  ngOnInit(): void {
    const factories = Array.from(this.componentFactoryResolver['_factories'].keys());
    const type = <Type<Component>>factories.find((x: any) => x.componentName === this.question.controlType);
    if (type)
    {
      const component = this.viewContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(type));
      
      (<any>component).instance.question = this.question;
      (<any>component).instance.form = this.form;

      this.content.insert(component.hostView);
    }
  }

}
