import { AutorService } from './autor/autor.service';
import { CoursesService } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { AutorComponent } from './autor/autor.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AutorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CoursesService, AutorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
