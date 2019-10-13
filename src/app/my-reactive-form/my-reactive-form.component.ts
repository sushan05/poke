import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent implements OnInit {

  // firstName: FormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log('checking value ', this.registerForm);
  }
}
