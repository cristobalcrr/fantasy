import { Component, ElementRef, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-registro-foto',
  templateUrl: './registro-foto.page.html',
  styleUrls: ['./registro-foto.page.scss']
})
export class RegistroFotoPage {
  imageUrl: string = '';
  @ViewChild('imageElement') imageElement: ElementRef | undefined;

  constructor() {
    // Constructor logic
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    this.imageUrl = image.webPath || '';
    if (this.imageElement) {
      this.imageElement.nativeElement.src = this.imageUrl;
    }
  }
}
