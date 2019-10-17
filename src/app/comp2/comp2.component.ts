import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import Cat from '../Cat';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  cats:Cat[];
  constructor(private as:AuthService) { }

  ngOnInit() {
    this.as.getcat().subscribe((data: Cat[]) => {
      console.log(data)
      this.cats = data;
  });
  }

}
