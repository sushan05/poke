import { trigger, transition, animate, style, state } from '@angular/animations';

export const customFade = trigger('customFade', [
    state('void', style({opacity: 0})),

    transition('void <=> shown', [
        animate(2000)
    ]),

    transition('shown => alert', [
        style({color: 'red', transform: 'rotate(20deg)'}),
        animate(2000)
    ]),

    transition('alert => shown', [
        style({color: 'green'}),
        animate(2000)
    ])
])