import { Component } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrl: './uploader.component.css',
})
export class UploaderComponent {
  imageurl: string = 'https://bit.ly/3OIfyYe';

  // UPLOAD LOGIC
  onFileUploadInputClick(event: Event) {
    const fileInputElement = event.target as HTMLInputElement;
    if (fileInputElement.files && fileInputElement.files[0]) {
      var reader = new FileReader();
      reader.onloadend = () => {
        var baseStringResut = reader.result as string;
        this.imageurl = baseStringResut;
      };
      reader.readAsDataURL(fileInputElement.files[0]);
    }
  }
}
