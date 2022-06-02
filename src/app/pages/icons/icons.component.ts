import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BackEndResponse } from 'src/app/models/backEndResponse.model';
import { FileService } from 'src/app/services/file.servive';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  public file : string = "";
  constructor(protected fileService: FileService ,private toastr: ToastrService,private router: Router ,private spinner: NgxSpinnerService) {}

  ngOnInit() {
    
  }

  async onFileUpload ()  {

    
  //  console.log(event.target.files);
    //let file = event.target.files[0];
    /*let f = (document.getElementById('fichier_input') as HTMLInputElement).files[0];
    console.log("onfile upload" , f);
    let reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = () => {
      if(reader.result.toString().includes("data:application/vnd.ms-excel;base64,")){
        const myarray = reader.result.toString().split("data:application/vnd.ms-excel;base64,");
        console.log("if",myarray);
        return myarray[1];}
       else if(reader.result.toString().includes("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,")){
          const myarray = reader.result.toString().split("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,");
          console.log("else if ",myarray);
          return myarray[1];}
        else{
        const myarray = reader.result.toString();
        console.log("esle aaaaaa",myarray);
        return myarray[1];
*/

    /*    }
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };*/
}

SubmitMethode(methode : string){
  console.log("in");
  try {
  this.fileService.savemethode(methode).subscribe((res: HttpResponse<BackEndResponse>) => {
    
    if(res.status === 200)
    {
      console.log("success methode ",res.body);
      
      this.toastr.success('Success!', res.body.message);
    }
    else{
      console.log("error  methode ",res.body.message);
      this.toastr.error('error!', res.body.message);
    }
  })}catch(err ){console.log("text" , err)}
} 
  public showSpinner(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 5000); // 5 seconds
  }

  async SubmitFile  (){
    console.log("in");
   try{

    let f = (document.getElementById('fichier_input') as HTMLInputElement).files[0];
    let myarray = [] ;
    console.log("onfile upload" , f);
    let reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = () => {
      if(reader.result.toString().includes("data:application/vnd.ms-excel;base64,")){
         myarray = reader.result.toString().split("data:application/vnd.ms-excel;base64,");
        console.log("if",myarray);
        }
       else if(reader.result.toString().includes("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,")){
           myarray = reader.result.toString().split("data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,");
          console.log("else if ",myarray);
          }
        else{
        const myarray = reader.result.toString();
        console.log("esle aaaaaa",myarray);
        }
    ////////////////
   console.log("fichier finale ", myarray[1]);
    const methode = (document.getElementById('methode-select') as HTMLInputElement ).value;
    console.log(methode);
    if(myarray[1] && methode){
      this.fileService.uploadfile(myarray[1]).subscribe((res: HttpResponse<BackEndResponse>) => {
        if(res.status === 200)
        {
          console.log("success upload file",res.body);
          this.SubmitMethode(methode);
          this.toastr.success('Success!', res.body.message);
          this.showSpinner();

        }
        else{
          console.log("error  upload file",res.body.message);
          this.toastr.error('error!', res.body.message);
        }
      })
    }}
  }catch(err ){console.log("text" , err)}
}



}
