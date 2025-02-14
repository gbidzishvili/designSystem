import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CustomUploaderCvaComponent } from './custom-uploader-cva/custom-uploader-cva.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ 
       CustomUploaderCvaComponent,
    MainComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[CustomUploaderCvaComponent,MainComponent]
})
export class CustomUploaderModule { }
