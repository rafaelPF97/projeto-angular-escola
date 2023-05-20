import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Diretor } from 'src/app/shared/models/Diretor.model';
import { DiretorService } from 'src/app/shared/services/diretor.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css'],
})
export class DirectorComponent implements OnInit {
  diretor?: Diretor;

  constructor(
    private diretorService: DiretorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.diretorService.getDiretor(id).subscribe((diretorSalvo) => {
      this.diretor = diretorSalvo;
    });
  }

  async removeDiretor(id: number) {
    await this.diretorService.deleteDiretor(id).subscribe();

    await this.router.navigate(['/']);

    location.reload();
  }
}
