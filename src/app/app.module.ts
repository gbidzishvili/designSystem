import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';
import { CustomUploaderCvaComponent } from './cust-file-uploader-resize-webworker/main/custom-uploader-cva/custom-uploader-cva.component'; 
import { MainComponent } from './cust-file-uploader-resize-webworker/main/main.component';
import { CustomUploaderModule } from './cust-file-uploader-resize-webworker/main/custom-uploader.module';

@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
