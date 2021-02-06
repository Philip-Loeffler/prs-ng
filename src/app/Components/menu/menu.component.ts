import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Model/Menu';
import { SystemService } from 'src/app/Service/system.service';
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
    new Menu(
      'Purchase Request',
      '/purchase-request-list',
      'Purchase Request List'
    ),
    new Menu(
      'Review',
      '/purchase-request-review/' + this.systemService.loggedInUser.id,
      'Review'
    ),
  ];
  constructor(public systemService: SystemService) {}

  ngOnInit(): void {}
}
