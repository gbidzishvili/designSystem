import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrl: './uploader.component.css',
})
export class UploaderComponent {
  @ViewChild('fileUploader') fileUploader!:ElementRef;
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
  triggerFileUpload(){
    this.fileUploader.nativeElement.click()
  }
}
