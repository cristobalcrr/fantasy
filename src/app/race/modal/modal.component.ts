import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {
    isModalOpen = false;
  
    setOpen(isOpen: boolean) {
      this.isModalOpen = isOpen;
    }

  constructor() { }

  ngOnInit() {}

}
