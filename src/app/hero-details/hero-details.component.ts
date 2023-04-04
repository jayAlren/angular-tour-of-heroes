import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})

export class HeroDetailsComponent {
  // @Input() hero?: Hero;
  hero?: Hero | undefined;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get(`ìd`));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}

