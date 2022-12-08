import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-images-slider',
  templateUrl: './images-slider.component.html',
  styleUrls: ['./images-slider.component.css']
})
export class ImagesSliderComponent implements OnInit {



  imagesArrays : any = [];
  constructor(private imageService: ImagesService,private router: Router) { }


  ngOnInit() {
    this.getImagesVal();

  }

  getImagesVal(){
    this.imageService.getUrl().subscribe((res : any )=>{
      if(res['count'] > 0){
        this.imagesArrays =  res['carousel_images'];
        console.log(this.imagesArrays)
      }
    })
  }

  logout(){
    this.router.navigate(['/login']);
  }



}
