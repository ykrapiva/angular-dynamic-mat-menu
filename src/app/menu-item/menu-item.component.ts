import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NavItem} from "../nav-item";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuItemComponent {
  @Input() item: NavItem = {displayName: "", iconName: ""}
  @Input() root: boolean = true

  constructor() {
  }

  getChildren(): NavItem[] {
    if (this.item && this.item.children) {
      return this.item.children
    } else {
      return [];
    }
  }

  hasChildren() {
    return this.getChildren().length > 0
  }
}
