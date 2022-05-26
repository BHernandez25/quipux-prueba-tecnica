import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-left-links',
  templateUrl: './navbar-left-links.component.html'
})
export class NavbarLeftLinksComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
