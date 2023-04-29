import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SchoolCreateComponent } from './components/school-create/school-create.component';
import { SchoolEditComponent } from './components/edit/school-aluno-edit/school-edit.component';
import { DeleteFormDialogComponent } from './components/delete-form-dialog/delete-form-dialog.component';
import { SchoolFormComponent } from './components/school-form/school-form.component';
import { StudentComponent } from './components/pages/student/student.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { SchoolProfessorEditComponent } from './components/edit/school-professor-edit/school-professor-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SchoolListComponent,
    SchoolCreateComponent,
    SchoolEditComponent,
    DeleteFormDialogComponent,
    SchoolFormComponent,
    StudentComponent,
    TeacherComponent,
    SchoolProfessorEditComponent,
  ],
  imports: [
    HttpClientModule,
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
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
