import { Professor } from './../../shared/model/Professor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from './../../shared/services/aluno.service';
import { Aluno } from './../../shared/model/Aluno.model';

import { Component, Input, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/shared/services/professor.service';

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

  constructor(
    private professorService: ProfessorService,
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.url = String(this.route.snapshot.url);
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }

  async createAluno(aluno: Aluno) {
    this.alunoService.postAluno(aluno).subscribe((alunoSalvo) => {
      this.alunos.push(alunoSalvo);
      location.reload();
    });
    this.router.navigate(['/']);
  }

  async criarTeacher(professor: Professor) {
    this.professorService.postProfessor(professor).subscribe((professorSalvo) =>{
      this.professores.push(professorSalvo);
      location.reload();
    })
    this.router.navigate(['/']);
  }
}
