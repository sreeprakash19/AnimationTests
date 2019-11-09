import {sequence, trigger, stagger, animate, style, group, query, transition, keyframes, animateChild} from '@angular/animations';

/*
export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%',height:'100%' })),
    query(':enter', style({ transform: 'translateX(100%)' })),
    
    group([
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('1.0s ease-in-out', style({transform: 'translateX(-100%)'})),
        animateChild()
      ]),
      query(':enter', [
        animate('1.0s ease-in-out', style({transform: 'translateX(0%)'})),
        animateChild()
      ])
    ]),
  ]),
]);
*/


export const routerTransition =
trigger('routeAnimation', [
  transition('* => *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({left: '-100%'})
     
    ], { optional: true }),
    query(':leave ', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('200ms ease-out', style({ left: '100%'}))
      ], { optional: true }),
      query(':enter', [

        animate('3000ms ease-out', style({ left: '0%'}))
      ], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true }),
  ])
])
