import { DiretorService } from './../../shared/services/diretor.service';
import { Diretor } from '../../shared/models/Diretor.model';
import { Aluno } from '../../shared/models/Aluno.model';
import { AlunoService } from '../../shared/services/aluno.service';
import { Component, OnInit, Output } from '@angular/core';
import { Professor } from 'src/app/shared/models/Professor.model';
import { ProfessorService } from 'src/app/shared/services/professor.service';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css'],
})
export class SchoolListComponent implements OnInit {
  alunos: Aluno[] = [];
  professores: Professor[] = [];
  diretores: Diretor[] = [];

  constructor(
    public alunoService: AlunoService,
    public professoreService: ProfessorService,
    public diretorService: DiretorService
  ) {}

  ngOnInit(): void {
    this.getAlunos();
    this.getProfessores();
    this.getDiretores();
  }

  getAlunos() {
    this.alunoService.getAlunos().subscribe((a) => {
      this.alunos = a;
    });
  }

  getProfessores() {
    this.professoreService.getProfessores().subscribe((p) => {
      this.professores = p;
    });
  }

  getDiretores() {
    this.diretorService.getDiretores().subscribe((d) => {
      this.diretores = d;
    });
  }
}
