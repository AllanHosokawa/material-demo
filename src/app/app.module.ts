import { MatComponentsModule } from './mat-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditCourseComponent } from './edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],
  entryComponents: [
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule
  ],
  providers: [
    //{ provide: DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
