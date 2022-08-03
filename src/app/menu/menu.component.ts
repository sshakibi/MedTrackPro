import { Component, OnInit } from '@angular/core';

interface MenuItem {
   /**
 * The path that will be loaded when you click on the menu
 */
  path: string;
   /**
 * The text that will be loaded when you click on the menu
 */
  label: string;
}

@Component({
  selector: 'app-menu',
  template: `
  <div>
    <mat-toolbar>Menu</mat-toolbar>
    <mat-nav-list>
      <a mat-list-item *ngFor="let item of menuItems; index as i" [routerLink]="item.path">
        {{item.label}}
      </a> 
    </mat-nav-list>
  </div>`,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: Array<MenuItem> = [
    {path:'/',
      label:'Home'},
    {path:'/Candidates',
      label:'Candidates'},
      {path:'/Facilities',
      label:'Facilities'},
      {path:'/Jobs',
      label:'Jobs'},
      {path:'/Clients',
      label:'Clients/VMS/MSPs'},
      {path:'/categories',
      label:'Categories'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
