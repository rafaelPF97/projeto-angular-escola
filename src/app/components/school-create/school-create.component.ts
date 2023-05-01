import { DiretorService } from './../../shared/services/diretor.service';
import { Diretor } from './../../shared/model/Diretor.model';
import { Professor } from './../../shared/model/Professor.model';
import { AlunoService } from './../../shared/services/aluno.service';
import { Aluno } from './../../shared/model/Aluno.model';
import { ProfessorService } from 'src/app/shared/services/professor.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-create',
  templateUrl: './school-create.component.html',
  styleUrls: ['./school-create.component.css'],
})
export class SchoolCreateComponent implements OnInit {
  @Input() alunoData!: Aluno;
  url: string = '';
  id!: string;
  alunos: Aluno[] = [];
  professores: Professor[] = [];
  diretores: Diretor[] = [];

  constructor(
    private professorService: ProfessorService,
    private alunoService: AlunoService,
    private diretorService: DiretorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.url = String(this.route.snapshot.url);
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }

  async createStudent(student: Aluno) {
    this.alunoService.postAluno(student).subscribe((studentSave) => {
      this.alunos.push(studentSave);
      location.reload();
    });
    this.router.navigate(['/']);
  }

  async createTeacher(teacher: Professor) {
    this.professorService.postProfessor(teacher).subscribe((teacherSave) => {
      this.professores.push(teacherSave);
      location.reload();
    });
    this.router.navigate(['/']);
  }

  async createDirector(director: Diretor) {
    this.diretorService.postDiretor(director).subscribe((directorSave) => {
      this.diretores.push(directorSave);
      location.reload();
    });
    this.router.navigate(['/']);
  }
}
