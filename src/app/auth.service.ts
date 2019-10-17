import { Injectable } from '@angular/core';
  import {HttpClient} from '@angular/common/http';
  import { Router } from '@angular/router';
import { Observable } from 'rxjs';
  //import {NotifierService } from 'angular-notifier'
  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {

    constructor(private http:HttpClient, private router: Router) { }
    

     loginuser(email,password){ 
       this.http.post("http://localhost:8000/login",{email,password}).subscribe((res: any)=>{
         if(res.isLogin) {
           console.log('done');
           this.router.navigate(['/comp1']);
         }
       }, (error: any) => {
         if(error.isLogin === 'false'){
           //this.notifier.notify( 'success', 'You are awesome! I mean it!', 'THAT_NOTIFICATION_ID' );
           console.log('Error');
         }

         //console.log(data)
       })
       }
      registeruser(fname,lname,email,password,cpassword){ 
        this.http.post("http://localhost:8000/register",{fname,lname,email,password,cpassword})
        .subscribe( (response: any) => {
          console.log("success")
        //   if(response.isSucceed) {
        //     this.notifier.notify('error','Login Failed')
        //     //this.router.navigate(['/login']);
        //   }
        // }, (error: any) => {
        //   if(error.isSucceed === 'false'){
        //     console.log('Error');
        //   }
        });
      }
      

    /*  registeruser(fname,lname,email,password,cpassword){ 
        this.http.post("http://localhost:8000/register",{fname,lname,email,password,cpassword}).subscribe(data=>{
          console.log(data)
        })
        }*/
        getcat(){
          console.log("get");
          return this.http.get("http://localhost:8000/cat");
          }   
      }