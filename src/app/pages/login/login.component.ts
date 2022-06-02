import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(protected userService: UserService ,private router: Router ,private toastr: ToastrService) {}

  ngOnInit() {


  }

  loginAction() {
    const email = (document.getElementById('email_input') as HTMLInputElement).value  ;
    const password = (document.getElementById('password_input') as HTMLInputElement).value  ;
    if (email.length==0) {
      
      this.toastr.error('le champ email est vide');
    }else if (password.length==0) {
      this.toastr.error('le champ mdp est vide');
    }
    else{
    this.userService.login(email,password).subscribe((res: HttpResponse<any>) => {
      if(res.status === 200)
      {
        console.log("success",res.body)
        localStorage.setItem("id",res.body.id);
        localStorage.setItem("email",res.body.email);
        localStorage.setItem("role",res.body.role);
        localStorage.setItem("name",res.body.name);
        this.router.navigateByUrl('/');
        
      }
      else{
        console.log("error",res.body.message)
      }
    })}

  }


}
