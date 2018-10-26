import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NestedNgforTemplateDrivenComponent } from './nested-ngfor-template-driven/nested-ngfor-template-driven.component';

@NgModule({
  declarations: [
    NestedNgforTemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NestedNgforTemplateDrivenComponent]
})
export class AppModule { }
