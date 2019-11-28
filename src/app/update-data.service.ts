import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UpdateDataService {

    updateSource$ = new BehaviorSubject<String>('All Sources');
    filterArticles$ = new BehaviorSubject<string>('All Sources');
    updateFlag$ = new BehaviorSubject<number>(1);
    updateHeading$ = new BehaviorSubject<string>('All Welcome to NewsFeeds');

    updateSource(source: string) {
        this.updateSource$.next(source);
    }

    filterArticles(pattern: string){
        console.log('In Service');
        this.filterArticles$.next(pattern);
    }

    updateHeading(newHeading: string) {
        this.updateHeading$.next(newHeading);
    }

    updateFlag(requestedStatus: number) {
        this.updateFlag$.next(requestedStatus);
    }

    getFlagStatus() {
        return this.updateFlag$.value;
    }

    getCurrentChannel() {
        return this.updateSource$.value;
    }
}