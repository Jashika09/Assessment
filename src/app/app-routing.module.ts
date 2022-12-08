import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ImagesSliderComponent } from './images-slider/images-slider.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '',  redirectTo: 'login',  pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'image-slider', component: ImagesSliderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
