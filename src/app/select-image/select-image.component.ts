import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html'
})
export class SelectImageComponent implements OnInit {

  imageSrc;

  @Output() onSelecteImage: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  isInvalid: boolean = false;


  onImageSelect(event) {

    this.isInvalid = false;

    let file = event.files[0];

    let fileExtantion = file.name.split(".")[1];

    if (fileExtantion == "jpeg" || fileExtantion == "png" || fileExtantion == "gif") {

      let reader = new FileReader();

      reader.onload = e => {
        this.imageSrc = reader.result;

        this.onSelecteImage.emit(this.imageSrc)
      }

      reader.readAsDataURL(file);
    }
    else {
      this.isInvalid = true;
    }
  }
}
