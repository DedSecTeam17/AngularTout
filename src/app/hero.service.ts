import {Injectable} from '@angular/core';
import {hero} from './heroes/hero';
import {HEROES} from './heroes/mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';


// This marks the class as one that participates in the dependency injection system.
@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(private messageService: MessageService) {
    }

    getHeroes(): Observable<hero[]> {
        this.messageService.addMessage("HeroService: fetched heroes");

        return of(HEROES);

    }

    getHero(id: number): Observable<hero> {
        // TODO: send the message _after_ fetching the hero
        this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }




}
