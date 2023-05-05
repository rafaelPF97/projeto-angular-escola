import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { Aluno } from 'src/app/shared/models/Aluno.model';
import { AlunoService } from 'src/app/shared/services/aluno.service';

@Component({
  selector: 'app-school-edit',
  templateUrl: './school-edit.component.html',
  styleUrls: ['./school-edit.component.css'],
})
export class SchoolEditComponent implements OnInit {
  @Output() aluno!: Aluno;
  alunos: Aluno[] = [];

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.alunoService.getAluno(id).subscribe((item) => {
      this.aluno = item;

    });
  }
  async editAluno(aluno: Aluno) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.alunoService.putAluno(id, aluno).subscribe((alunoSalvo) => {
      this.alunos.push(alunoSalvo);
      location.reload();
    });
    this.router.navigate(['/']);
  }
}
