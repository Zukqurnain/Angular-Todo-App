import { Component, OnInit } from '@angular/core';
import { FormsModule , FormGroup ,FormControl,  Validators, NgForm,} from '@angular/forms'

@Component({
  selector: 'app-form-valid',
  templateUrl: './form-valid.component.html',
  styleUrls: ['./form-valid.component.css']
})
export class FormValidComponent  {
  constructor() { }
  group;
  form = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  });
  
  login(e){
    console.log(e);
  }


}
