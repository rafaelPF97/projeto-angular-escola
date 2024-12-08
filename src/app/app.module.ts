import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IMaskModule } from 'angular-imask';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SchoolListComponent } from './components/school-list/school-list.component';

import { SchoolEditComponent } from './components/edit/school-aluno-edit/school-edit.component';
import { SchoolCreateComponent } from './components/school-create/school-create.component';

import { SchoolDiretorEditComponent } from './components/edit/school-diretor-edit/school-diretor-edit.component';
import { SchoolProfessorEditComponent } from './components/edit/school-professor-edit/school-professor-edit.component';
import { DirectorComponent } from './components/pages/director/director.component';
import { StudentComponent } from './components/pages/student/student.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { SchoolFormComponent } from './components/school-form/school-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SchoolListComponent,
    SchoolCreateComponent,
    SchoolEditComponent,
    SchoolFormComponent,
    StudentComponent,
    TeacherComponent,
    SchoolProfessorEditComponent,
    DirectorComponent,
    SchoolDiretorEditComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    IMaskModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [provideHttpClient(), { provide: Window, useValue: window }],
})
export class AppModule {}
