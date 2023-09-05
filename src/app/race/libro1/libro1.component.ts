import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro1',
  templateUrl: './libro1.component.html',
  styleUrls: ['./libro1.component.scss'],
})
export class Libro1Component  implements OnInit {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor() { }

  ngOnInit() {}

}
