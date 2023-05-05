import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { SchoolProfessorEditComponent } from './components/edit/school-professor-edit/school-professor-edit.component';
import { DirectorComponent } from './components/pages/director/director.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { SchoolCreateComponent } from './components/school-create/school-create.component';
import { SchoolEditComponent } from './components/edit/school-aluno-edit/school-edit.component';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { SchoolFormComponent } from './components/school-form/school-form.component';
import { StudentComponent } from './components/pages/student/student.component';
import { SchoolDiretorEditComponent } from './components/edit/school-diretor-edit/school-diretor-edit.component';

const routes: Routes = [
  { path: '', component: SchoolListComponent },
  { path: 'create', component: SchoolCreateComponent },
  { path: 'aluno/edit/:id', component: SchoolEditComponent },
  { path: 'professor/edit/:id', component:SchoolProfessorEditComponent},
  { path: 'diretor/edit/:id', component: SchoolDiretorEditComponent},
  { path: 'professor/:id', component: TeacherComponent },
  { path: 'diretor/:id', component: DirectorComponent},
  { path: 'aluno/:id', component: StudentComponent },
  { path: 'form', component: SchoolFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
