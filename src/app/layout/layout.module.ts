import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './admin/partials/header/header.component';
import { FooterComponent } from './admin/partials/footer/footer.component';
import { SidebarComponent } from './admin/partials/sidebar/sidebar.component';
import { ContentComponent } from './admin/partials/content/content.component';
import { NavbarRightLinksComponent } from "./admin/partials/header/navbar/navbar-right-links/navbar-right-links.component";
import { NavbarLeftLinksComponent } from "./admin/partials/header/navbar/navbar-left-links/navbar-left-links.component";
import { SidebarBrandLogoComponent } from "./admin/partials/sidebar/sidebar-brand-logo/sidebar-brand-logo.component";
import { SidebarMenuComponent } from "./admin/partials/sidebar/sidebar-menu/sidebar-menu.component";
import { MenuService } from "./services/menu.service";
import { SidebarMenuItemComponent } from "./admin/partials/sidebar/sidebar-menu/sidebar-menu-item/sidebar-menu-item.component";
import { SidebarSubmenuItemComponent } from "./admin/partials/sidebar/sidebar-menu/sidebar-submenu-item/sidebar-submenu-item.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    NavbarRightLinksComponent,
    NavbarLeftLinksComponent,
    SidebarBrandLogoComponent,
    SidebarMenuComponent,
    SidebarSubmenuItemComponent,
    SidebarMenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    AdminComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  providers: [
    MenuService
  ]
})
export class LayoutModule { }
