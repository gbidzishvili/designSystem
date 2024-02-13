import { Component } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrl: './uploader.component.css',
})
export class UploaderComponent {
  imageurl: string =
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D';

  // UPLOAD LOGIC
  onFileUploadInputClick(event: Event) {
    const fileInputElement = event.target as HTMLInputElement;
    if (fileInputElement.files && fileInputElement.files[0]) {
      var reader = new FileReader();
      reader.onloadend = () => {
        var baseString = reader.result as string;
        this.imageurl = baseString;
      };
      reader.readAsDataURL(fileInputElement.files[0]);
    }
  }
}
