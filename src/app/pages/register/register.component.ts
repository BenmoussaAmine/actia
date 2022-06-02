import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackEndResponse } from 'src/app/models/backEndResponse.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  constructor(protected userService: UserService ,private router: Router ) {}
  ngOnInit() {
  }
  registerAction() {
    const name = (document.getElementById('name_input') as HTMLInputElement).value  ;
    const email = (document.getElementById('email_input') as HTMLInputElement).value  ;
    const password = (document.getElementById('password_input') as HTMLInputElement).value  ;
    const role = (document.getElementById('role_input') as HTMLInputElement).value  ;
    this.userService.register(name, email, password , role).subscribe((res: HttpResponse<BackEndResponse>) => {
      if(res.status === 200)
      {
        console.log("success",res.body)
        this.router.navigateByUrl('/login');
        
      }
      else{
        console.log("error",res.body.message)
      }
    })}}


