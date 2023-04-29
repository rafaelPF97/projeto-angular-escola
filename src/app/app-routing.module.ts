import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SchoolCreateComponent } from './components/school-create/school-create.component';
import { SchoolEditComponent } from './components/edit/school-aluno-edit/school-edit.component';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { SchoolFormComponent } from './components/school-form/school-form.component';
import { StudentComponent } from './components/pages/student/student.component';

const routes: Routes = [
  { path: '', component: SchoolListComponent },
  { path: 'create', component: SchoolCreateComponent },
  { path: 'aluno/edit/:id', component: SchoolEditComponent },
  { path: 'professor/:id', component: TeacherComponent },
  { path: 'aluno/:id', component: StudentComponent },
  { path: 'form', component: SchoolFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
