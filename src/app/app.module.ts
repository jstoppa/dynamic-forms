import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

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
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, MonacoEditorModule.forRoot(monacoConfig)],
    declarations: [AppComponent, DynamicFormComponent, DynamicFormQuestionComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}
