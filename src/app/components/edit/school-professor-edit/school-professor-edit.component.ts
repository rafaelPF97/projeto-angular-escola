import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professor } from 'src/app/shared/models/Professor.model';
import { ProfessorService } from 'src/app/shared/services/professor.service';

@Component({
  selector: 'app-school-professor-edit',
  templateUrl: './school-professor-edit.component.html',
  styleUrls: ['./school-professor-edit.component.css']
})
export class SchoolProfessorEditComponent implements OnInit {
  @Output() professor!: Professor;
  professores: Professor[] = [];

  constructor(
    private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.professorService.getProfessor(id).subscribe((item) => {
      this.professor = item;
    });
  }

  async editProfessor(professor: Professor){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.professorService.putProfessor(id, professor).subscribe((professorSalvo) => {
      this.professores.push(professorSalvo);
      location.reload();
    });
    this.router.navigate(['/']);
  }

}
