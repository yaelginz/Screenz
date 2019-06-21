import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowImage = false;
  isBtnSave = false;
  temImgSrc;

  selectedImageSrc;

  showImage(imageSrc) {
    this.temImgSrc = imageSrc;
    this.isBtnSave = true;
  }

  save() {
    this.selectedImageSrc = this.temImgSrc;
    this.isShowImage = true;
  }

}
