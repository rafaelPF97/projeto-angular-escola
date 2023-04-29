import { Aluno } from './../../shared/model/Aluno.model';
import { AlunoService } from '../../shared/services/aluno.service';
import { Component, OnInit, Output } from '@angular/core';
import { Professor } from 'src/app/shared/model/Professor.model';
import { ProfessorService } from 'src/app/shared/services/professor.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteFormDialogComponent } from '../delete-form-dialog/delete-form-dialog.component';


@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css'],
})
export class SchoolListComponent implements OnInit {
  alunos: Aluno[] = [];
  professores: Professor[] = [];


  constructor(
    public alunoService: AlunoService,
    public professoreService: ProfessorService,
    public dialog: MatDialog

  ) {}
  ngOnInit(): void {
    this.getAlunos();
    this.getProfessores();
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

  deleteBtt(id: number) {
    const dialogRef = this.dialog.open(DeleteFormDialogComponent, {
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });


  }

}
