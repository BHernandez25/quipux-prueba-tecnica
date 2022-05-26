import {Component, Input, OnInit} from '@angular/core';
import { MenuService, MenuItem } from '../../../../services/menu.service'

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html'
})

export class SidebarMenuComponent implements OnInit {

  public menu:MenuItem[];
  @Input() isCollapsed = true;


  constructor(private Menu:MenuService) {

    this.menu = Menu.getItems();
  }

  ngOnInit(): void {
  }

}
