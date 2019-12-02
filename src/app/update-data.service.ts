import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UpdateDataService {
  updateSource$ = new BehaviorSubject<string>("All Sources");
  filterArticles$ = new BehaviorSubject<string>("All Sources");
  updateHeaderLabelFlag$ = new BehaviorSubject<number>(1);
  updateHeading$ = new BehaviorSubject<string>("Welcome to NewsFeeds");

  updateSource(source: string) {
    this.updateSource$.next(source);
  }

  filterArticles(pattern: string) {
    this.filterArticles$.next(pattern);
  }

  updateHeading(newHeading: string) {
    this.updateHeading$.next(newHeading);
  }

  updateHeaderLabelFlag(requestedStatus: number) {
    this.updateHeaderLabelFlag$.next(requestedStatus);
  }

  getHeaderLabelFlagStatus() {
    return this.updateHeaderLabelFlag$.value;
  }

  getCurrentChannel() {
    return this.updateSource$.value;
  }
}
