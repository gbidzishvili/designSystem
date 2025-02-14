import { Component, ElementRef, EventEmitter, forwardRef, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-uploader-cva',
  templateUrl: './custom-uploader-cva.component.html',
  styleUrl: './custom-uploader-cva.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomUploaderCvaComponent,
      multi: true
    },
  ]
})
export class CustomUploaderCvaComponent  implements ControlValueAccessor {
  @ViewChild('fileUploader') fileUploader!:ElementRef;
  @Output() imageUrlUpload = new EventEmitter();
  value: string = "giorgi";
  imageUrl = '';
  disabled = true;
  
  onTouched = ()=>{}
  onChange = (value:any)=>{}
  onInputChange(){
    this.onTouched()
    const fileInput = this.fileUploader.nativeElement
    const file = fileInput.files[0]
    this.onChange(file)
  }
  onFileUploadInputClick(event: Event) {
    const fileInputElement = event.target as HTMLInputElement;
    this.imageUrlUpload.emit(fileInputElement?.files?.[0])
    if (fileInputElement.files && fileInputElement.files[0]) {
      var reader = new FileReader();
      reader.onloadend = () => {
        var baseStringResut = reader.result as string;
        this.imageUrl = baseStringResut;
      };
      reader.readAsDataURL(fileInputElement.files[0]);
    }
  }
  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
  this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  triggerFileUpload(): void {
    this.fileUploader.nativeElement.click();
  }
}
