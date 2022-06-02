import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BackEndResponse } from 'src/app/models/backEndResponse.model';
import { RegleService } from 'src/app/services/regle.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  RulesForm: FormGroup;
  Types = [
    "array",
    "integer",
    "regex"

  ]
  selected = "";
  
  update(e){
    this.selected = e.target.value;
  }

  constructor(private rules:FormBuilder ,protected Regleservice: RegleService ,private router: Router) {
   
    this.RulesForm = this.rules.group({ 
      famille: '',
      selected:''
    });
  }
  ngOnInit() {
  }
  
  
   
  onSubmit() {
    console.log(this.RulesForm.value );
  }
 async AddAction(){
    console.log("innnnnnnnnnnnnnn");
    
    const name = (document.getElementById('name') as HTMLInputElement).value  ;
  const value = (document.getElementById('values') as HTMLInputElement).value  ;
  console.log(value);
  
  var values = value.split(',');
  this.Regleservice.Add(name, values).subscribe((res: HttpResponse<BackEndResponse>) => {
    if(res.status === 200)
    {
      console.log("success",res.body)
    
      
    }
    else{
      console.log("error",res.body.message)
    }
  })}

  


   

}
