import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diretor } from 'src/app/shared/models/Diretor.model';
import { DiretorService } from 'src/app/shared/services/diretor.service';

@Component({
  selector: 'app-school-diretor-edit',
  templateUrl: './school-diretor-edit.component.html',
  styleUrls: ['./school-diretor-edit.component.css'],
})
export class SchoolDiretorEditComponent implements OnInit {
  @Output() diretor!: Diretor;
  diretores: Diretor[] = [];

  constructor(
    private diretorService: DiretorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.diretorService.getDiretor(id).subscribe((item) => {
      this.diretor = item;
    });
  }

  async editDiretor(diretor: Diretor) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.diretorService.putDiretor(id, diretor).subscribe((diretorSalvo) => {
      this.diretores.push(diretorSalvo);
      location.reload();
    });
    this.router.navigate(['/']);
  }
}
