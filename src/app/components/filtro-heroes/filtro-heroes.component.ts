import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-filtro-heroes',
  templateUrl: './filtro-heroes.component.html',
  styleUrls: ['./filtro-heroes.component.scss']
})
export class FiltroHeroesComponent implements OnInit {
  heroes: Heroe[];
  termino: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    });
  }
}
