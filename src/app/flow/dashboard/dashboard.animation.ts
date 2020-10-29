import {animate, group, query, state, style, transition, trigger} from '@angular/animations';

export const slideInOutAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('slideInOutAnimation', [
    transition('* => ListPage', [
      // end state styles for route container (host)
      query(':enter', [
        style({
          transform: 'translateX(100%)',
          backgroundColor: 'rgba(0, 0, 0, 0)'
        })
      ]),
      query(':leave', [
        style({transform: 'translateX(0%)'})
      ]),
      group([
        query(':leave', [
          animate('10000ms ease-out', style({transform: 'translateX(0%)'}))
        ]),
        query(':enter', [
          animate('10000ms ease-out', style({
            transform: 'translateX(0%)',
            backgroundColor: 'rgba(0, 0, 0, 0)'
          }))
        ])
      ]),
    ]),
  ]);
