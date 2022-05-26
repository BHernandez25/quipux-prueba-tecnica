import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar-brand-logo',
  templateUrl: './sidebar-brand-logo.component.html'
})
export class SidebarBrandLogoComponent implements OnInit {
  @Output() onCollapsed = new EventEmitter<boolean>();

  public isCollapsed: boolean;

  constructor() {
    this.isCollapsed = false;
  }

  ngOnInit(): void {
  }

  collapsed() {
    this.onCollapsed.emit(!this.isCollapsed);
  }
}
