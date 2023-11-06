import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.scss'],
})
export class MyMenuComponent implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  closeMenu() {
    this.popoverController.dismiss();
  }
}