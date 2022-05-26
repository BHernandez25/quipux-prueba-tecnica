import { Injectable } from '@angular/core';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Injectable({
  providedIn: 'root'
})

export class MenuService {
  public menu:MenuItem[] = [];

  constructor() {
    this.generateSidebarMenu();
  }

  getItems():MenuItem[] {
    return this.menu;
  }

  generaMenuItem (key:string, icon:IconProp, text:string, SubMenuItems:SubMenuItem[] = []):MenuItem {
    return {key:key, icon:icon,text:text,SubMenuItems:SubMenuItems}
  }


  generateSidebarMenu(){
    let companies:MenuItem = this.generaMenuItem("item1",['fas', 'archive'],'Empresas');
    companies.SubMenuItems.push({link:'companies',text: 'Empresa'});
    this.menu.push(companies);

    let articles:MenuItem = this.generaMenuItem("item2",['fas', 'file-lines'],'Articulos');
    articles.SubMenuItems.push({link:'articles',text: 'Articulos'});
    this.menu.push(articles);

    let collaborators:MenuItem = this.generaMenuItem("item3",['fas', 'user'],'Colaboradores');
    collaborators.SubMenuItems.push({link:'collaborators',text: 'Colaboradores'});
    this.menu.push(collaborators);
  }

}

export interface MenuItem {
    key: string;
    icon: IconProp;
    text: string;
    SubMenuItems: SubMenuItem[];
}

export interface SubMenuItem {
  text:string;
  link:string;
}
