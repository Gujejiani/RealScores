import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'RealScores';
  loadSpinner: boolean = false;
  sub: Subscription;
  constructor(private router: Router) {}
  ngOnInit() {
    this.sub = this.router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  // when we are navigating end waiting for some data, we are showing spinner automatically
  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loadSpinner = true;
    }
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    )
      this.loadSpinner = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
