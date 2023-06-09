import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Professor } from '../../shared/models/Professor.model';
import { Aluno } from '../../shared/models/Aluno.model';
import { Diretor } from 'src/app/shared/models/Diretor.model';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css'],
})
export class SchoolFormComponent implements OnInit {
  @Output() onSubmitStudent = new EventEmitter<Aluno>();
  @Output() onSubmitTeacher = new EventEmitter<Professor>();
  @Output() onSubmitDirector = new EventEmitter<Diretor>();
  @Input() alunoData!: Aluno;
  @Input() diretorData!: Diretor;
  @Input() professorData!: Professor;
  url: string = '';
  id!: string;

  studentFm: FormGroup = new FormGroup({
    nome: new FormControl(this.alunoData ? this.alunoData.nome : '', [
      Validators.required,
      Validators.minLength(3),
    ]),
    cpf: new FormControl(this.alunoData ? this.alunoData.cpf : '', [
      Validators.required,
      Validators.pattern('\\d{11}'),
    ]),
  });

  teacherFm: FormGroup = new FormGroup({
    nome: new FormControl(this.professorData ? this.professorData.nome : '', [Validators.required, Validators.minLength(3)]),
    cpf: new FormControl(this.professorData ? this.professorData.cpf : '', [
      Validators.required,
      Validators.pattern('\\d{11}'),
    ]),
    especialidade: new FormControl(this.professorData ? this.professorData.especialidade : '', Validators.required),
  });

  directorFm: FormGroup = new FormGroup({
    nome: new FormControl(this.diretorData ? this.diretorData.nome : '', [Validators.required, Validators.minLength(3)]),
    cpf: new FormControl(this.diretorData ? this.diretorData.cpf :'', [
      Validators.required,
      Validators.pattern('\\d{11}'),
    ]),
  });

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.url = String(this.route.snapshot.url);
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }

  submitStudent() {
    if (this.studentFm.invalid) {
      return;
    }

    this.onSubmitStudent.emit(this.studentFm.value);
    this.studentFm.reset();
  }

  submitTeacher() {
    if (this.teacherFm.invalid) {
      return;
    }

    this.onSubmitTeacher.emit(this.teacherFm.value);
    this.teacherFm.reset();
  }

  submitDirector() {
    if (this.directorFm.invalid) {
      return;
    }

    this.onSubmitDirector.emit(this.directorFm.value);
    this.directorFm.reset();
  }
}
