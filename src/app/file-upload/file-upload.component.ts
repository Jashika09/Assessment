import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {


  fileArray : any = [];
  fileForm : any = FormGroup;
  fileVal : any = [];
  constructor(private router: Router) { }

  ngOnInit() {

    this.fileForm = new FormGroup({
      filename : new FormControl('')
    })
  }

  fileName(event : any){
    this.fileVal = event.target.files;
  }

  uploadFile(){
    for(let i =0; i < this.fileVal.length; i++){
      var fileType = this.fileVal[i].type;
      var vals = fileType.split('/').pop();
      if(vals == 'PNG' || vals == 'png' || vals == 'pdf' || vals == 'PDF'){
        this.fileArray.push(this.fileVal[i]);
      }else{
        alert('Please Upload only .jpg or .pdf file!');
        this.fileForm.controls['filename'].reset();
      }
    }
    this.fileForm.controls['filename'].reset();

  }

  logout(){
    this.router.navigate(['/login']);
  }
}
