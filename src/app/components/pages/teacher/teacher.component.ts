import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Professor } from '../../../shared/models/Professor.model';
import { ProfessorService } from './../../../shared/services/professor.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  professor?: Professor;

  constructor(
    private professorService: ProfessorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.professorService.getProfessor(id).subscribe((professorSalvo) => {
      this.professor = professorSalvo;
    });
  }

  async removeTeacher(id: number) {
    await this.professorService.deleteProfessor(id).subscribe();

    await this.router.navigate(['/']);
    
    location.reload();
  }

}
