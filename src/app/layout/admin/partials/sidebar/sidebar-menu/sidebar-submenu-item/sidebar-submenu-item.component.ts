import { Component, Input, OnInit } from '@angular/core';
import { SubMenuItem } from '../../../../../services/menu.service';

@Component({
  selector: 'app-sidebar-submenu-item',
  templateUrl: './sidebar-submenu-item.component.html'
})
export class SidebarSubmenuItemComponent implements OnInit {

  @Input() ItemSubMenu: SubMenuItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
