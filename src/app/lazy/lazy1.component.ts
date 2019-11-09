import { Component, OnInit,HostBinding } from '@angular/core';
import { transition, trigger, query, style, animate, stagger  } from '@angular/animations';

@Component({
  selector: 'app-lazy',
  template: `<h1>Lazy1</h1>
  <body background='assets/dp3.jpg'>
<div fxLayout="row" fxLayoutAlign="center center" class="logincomp" >
    <img fxFlex="25%" src="/assets/man1-first.png"  />
    <img fxFlex="10%" src="/assets/man.png"  />
    <mat-card fxFlex="25%"  class="row-height">
        <mat-card-header>
            <mat-card-title>Login page</mat-card-title>
            <mat-card-subtitle>
               
            </mat-card-subtitle>
        </mat-card-header>
          <mat-card-content fxLayout="column">
            <button mat-raised-button *ngIf="!showretry" color="primary" (click)="GoogleLogin()">
                Google login
            </button>
        </mat-card-content>   
    </mat-card>
    <img fxFlex="10%" src="/assets/images.png"  />
    <img fxFlex="25%" src="/assets/man2-first.png"  />



</div>
</body>

 `,
 animations:[
  trigger('childAnimations', [
    transition(':enter', [
      query('img', [
        style({opacity: 0, transform: 'translateY(50%)'}),
        stagger('1000ms', [
          animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
        ])
      ], { optional: true })
    ]),
    transition(':leave', [
      query('img', [
        style({opacity: 1, transform: 'none'}),
        stagger('30ms', [
          animate('5000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 0, transform: 'translateY(50%)' }))
        ])
      ], { optional: true })
    ])
  ]),
]

})
@HostBinding('@childAnimations')

export class Lazy1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
