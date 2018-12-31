import { Component, OnInit ,Input } from '@angular/core';
import {hero} from '../heroes/hero';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

// for incoming data from outside component the @Input property notation work as template to be fulfilled
// after that we can use our data inside our component easily
export class HeroDetailComponent implements OnInit {

     hero: hero;

  constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
  ) { }

  ngOnInit() {
      this.getHero();
  }

    goBack(): void {
    this.location.back();
    }

  getHero (): void{
    const  id=+this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero);
  }

}
