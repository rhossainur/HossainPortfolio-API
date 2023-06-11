import {
  trigger,
  animate,
  transition,
  style,
  query,
  state,
  stagger
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* =>*', [
		style({ opacity: 0 }),
		animate('500ms', style({ opacity: 1 })),
	]),
]);

export const revealAnimation=trigger("revealAnimation", [
  state('hidden', style({
    transform: 'translatey(5%)',opacity:0})
  ), state('shown', style({
    transform: 'translatey(0%)', opacity: 1})
  ), transition('hidden=>shown', [
    animate('.5s')
  ]),
]);

export const staggeredCheck=trigger('staggeredCheck', [
  transition('* => *', [ 
    query(':enter', [
        style({ opacity: 0 }),
        stagger(1000, [animate('0.5s', style({ opacity: 1 }))])
      ], { optional: true }
    )
  ])
]);