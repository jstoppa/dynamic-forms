import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { QuestionEffects } from './store/effects/question.effects';
import { reducers } from './store/reducers';
import { PageComponent } from './page.component';
import { TemplateEffects } from './store/effects/template.effects';
import { LayoutDirective } from './directives/layout.directive';
import { CommonModule } from '@angular/common';
import { DynamicContainerComponent } from './dynamic-container.component';

const monacoConfig: NgxMonacoEditorConfig = {
    baseUrl: 'assets',
    defaultOptions: { scrollBeyondLastLine: false },
    onMonacoLoad: () => {
        console.log((window as any).monaco);
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: false
        });
        monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ES2016,
            allowNonTsExtensions: true,
            noLib: true
        });
        monaco.languages.typescript.javascriptDefaults.addExtraLib([
            'declare class contact {',
            '    /**',
            '     * Returns the next fact',
            '     */',
            '    static firstName:string',
            '}',
        ].join('\n'), 'filename/facts.d.ts');
    }
};


@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, 
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([QuestionEffects, TemplateEffects]),
        StoreDevtoolsModule.instrument(),
        MonacoEditorModule.forRoot(monacoConfig)],
    declarations: [AppComponent, LayoutDirective, DynamicContainerComponent, PageComponent, DynamicFormComponent, DynamicFormQuestionComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}
