import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('LandingPage <=> DashboardPage', [
      query(':enter', [
        style({opacity: 0})
      ]),
      query(':leave', [
        style({opacity: 1})
      ]),
      group([
        query(':leave', [
          animate('300ms ease-out', style({opacity: 0}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({opacity: 1}))
        ])
      ]),
    ])
  ]);
