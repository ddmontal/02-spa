import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(parseInt(params['id']));
    });
  }
}
