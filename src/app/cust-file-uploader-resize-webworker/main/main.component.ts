import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  worker = new Worker(new URL('./jimp.worker', import.meta.url), { type: 'module' });
  imgUrl :any;
  formGroup = new FormGroup({
    name:new FormControl(),
    customUploader: new FormControl({value:"initial value from write value(from parent)",disabled:false})
  })
  ngOnInit(){
    console.log("metaUrl",import.meta.url)
  }
  onImageUrlUpload(event:any){
    this.imgUrl = event;
    this.compressWithWorker()
  }
  compressWithWorker() {
    const reader = new FileReader();
    reader.onload = async () => {
      const base64String = reader.result as string;
      this.worker.postMessage({ bytes: base64String });
    };
    reader.readAsDataURL(this.imgUrl);  
    this.worker.onmessage = ({ data }) => {
      this.imgUrl = data
    };
    
    }
    logOnConsole(){
      console.log('logged')
    }
}
