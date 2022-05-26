import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../../../../services/menu.service';

@Component({
  selector: 'app-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html'
})
export class SidebarMenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem | undefined;

  constructor() {

  }

  ngOnInit(): void {
  }

}
