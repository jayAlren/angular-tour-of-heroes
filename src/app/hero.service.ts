import { Injectable } from '@angular/core';
import { Hero } from './hero'; // imported the data type

import { HEROES } from './mock-heroes'; // imported fake data

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroServices: fetched hero id = ${id}`);
    return of(hero);
  }
}

