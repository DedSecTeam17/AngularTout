import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {hero} from '../heroes/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


    heroes:hero[];
    selectedHero:hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.getAllHeroes();
  }

  getAllHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }

    selectHero(hero: hero) {
        this.selectedHero=hero;
    }
}
