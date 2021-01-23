import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Model/Menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuItems: Menu[] = [
    new Menu('User', '/user-list', 'User List'),
    new Menu('Product', '/product-list', 'Product List'),
    new Menu('Vendor', '/vendor-list', 'Vendor List'),
  ];
  constructor() {}

  ngOnInit(): void {}
}
