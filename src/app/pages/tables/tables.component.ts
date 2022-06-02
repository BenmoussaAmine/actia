import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { BackEndResponse } from 'src/app/models/backEndResponse.model';
import { RegleService } from 'src/app/services/regle.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit  {
  name = 'Angular';
  RulesForm: FormGroup;

  constructor(private rules:FormBuilder ,protected Regleservice: RegleService ,private router: Router) {
   
    this.RulesForm = this.rules.group({ 
      famille: '',
      rules: this.rules.array([]) ,
    });
  }
  ngOnInit() {
  }
  
  quantities() : FormArray {
    return this.RulesForm.get("rules") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.rules.group({
      nom: '',
      caracteristique: '',
    })
  }
   
  addRule() {
    this.quantities().push(this.newQuantity());
  }
   
  removeRule(i:number) {
    this.quantities().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.RulesForm.value );
  }

  AddAction() {
   /* const famille = (document.getElementById('famille') as HTMLInputElement).value  ;
    const rules = (document.getElementById('rules') as HTMLInputElement).value.toString()  ;
    console.log("in");
    console.log(famille);
    console.log(rules);
    this.Regleservice.Add(famille, rules ).subscribe((res: HttpResponse<BackEndResponse>) => {
      if(res.status === 200)
      {
        console.log("success",res.body)        
      }
      else{
        console.log("error",res.body.message)
      }
    })*/


    
    
  
  }

  

}
