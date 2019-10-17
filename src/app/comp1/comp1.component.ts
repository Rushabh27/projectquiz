import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import {AuthService} from '../auth.service';

  import { from } from 'rxjs';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers:[]
})
export class Comp1Component implements OnInit {

  constructor(private as:AuthService) { }
  

  ngOnInit() {
    var modal = document.getElementById('id01');
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

    var modal1 = document.getElementById('id02');
    window.onclick = function(event) {
    if (event.target == modal1) {
        modal.style.display = "none";
    }


	function onclick(event)
	{
		$('#divSubMenu').slideToggle()
  }
  }
  }
  }
  // sub(fname,lname,email,password){
  //   console.log(fname,lname,email,password);
  //   this.ss.adduser(fname,lname,email,password);
  // }
  register(event){
    console.log(event);
    event.preventDefault()
    const target = event.target
    const fname=target.querySelector("#fname").value
    const lname=target.querySelector("#lname").value
    const email=target.querySelector("#email").value
    const password=target.querySelector("#password").value
    const cpassword=target.querySelector("#cpassword").value
    //const cpassword=target.querySelecor("#cpassword").value
     this.as.registeruser(fname,lname,email,password,cpassword);
     $('#cancel').trigger("click");
     $('#signin').trigger("click"); 
  }
  login(event)
  {
    console.log("logoin");
    event.preventDefault()
    const target=event.target
    const email=target.querySelector("#email").value
    const password=target.querySelector("#password").value
    this.as.loginuser(email,password);
    $('#cancell').trigger("click");
  }
  // get()
  //  {
    
  //    //this.ss.getuser()
  //  }
}