import { Professor } from './../../shared/model/Professor.model';
import { Aluno } from './../../shared/model/Aluno.model';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css'],
})
export class SchoolFormComponent implements OnInit {
  @Output() onSubmitStudent = new EventEmitter<Aluno>();
  @Output() onSubmitTeacher = new EventEmitter<Professor>();
  @Input() alunoData!: Aluno;
  url: string = '';
  id!: string;

  alunoFm: FormGroup = new FormGroup({
    id: new FormControl(this.alunoData ? this.alunoData.id:''),
    nome: new FormControl(this.alunoData ? this.alunoData.nome : '', [Validators.required, Validators.minLength(3)]),
    cpf: new FormControl(this.alunoData ? this.alunoData.cpf : '', [
      Validators.required,
      Validators.pattern('\\d{11}'),
    ]),
  });

  professorFm: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cpf: new FormControl('', [
      Validators.required,
      Validators.pattern('\\d{11}'),
    ]),
    especialidade: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.url = String(this.route.snapshot.url);
    this.id = String(this.route.snapshot.paramMap.get('id'));
  }

  submitStudent() {
    if (this.alunoFm.invalid) {
      return;
    }

    this.onSubmitStudent.emit(this.alunoFm.value);
    this.alunoFm.reset();
  }

  submitTeacher() {
    if (this.professorFm.invalid) {
      return;
    }

    this.onSubmitTeacher.emit(this.professorFm.value);
    this.professorFm.reset();
  }

  submitDirector() {}
}
