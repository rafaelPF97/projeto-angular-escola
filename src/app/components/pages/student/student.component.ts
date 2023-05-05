import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Aluno } from 'src/app/shared/models/Aluno.model';
import { AlunoService } from 'src/app/shared/services/aluno.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  aluno?: Aluno;

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.alunoService
      .getAluno(id)
      .subscribe((alunoSalvo) => (this.aluno = alunoSalvo));
  }

  async removeStudent(id: number){
    await this.alunoService.deleteAluno(id).subscribe();

    this.router.navigate(['/']);
  }
}
