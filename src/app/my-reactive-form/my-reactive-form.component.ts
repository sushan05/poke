import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { pincodeValidator } from './customValidators';

@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent implements OnInit {

  // firstName: FormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  // registerForm: FormGroup = new FormGroup({
  //   firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //   lastName: new FormControl('')
  // })

  registerForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

    const experienceForm = this._fb.group({
      years: '',
      profile: ''
    });

    this.registerForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: '',
      address: this._fb.group({
        street: '',
        city: '',
        state: '',
        mypincode: [null, [Validators.required, pincodeValidator]]
      }),
      experience: this._fb.array([experienceForm])
    });

  }

  get experienceForms() {
    return this.registerForm.get('experience') as FormArray;
  }

  addNewForm() {
    const experienceForm = this._fb.group({
      years: '',
      profile: ''
    });

    this.experienceForms.push(experienceForm);
  }

  deleteForm(i) {
    this.experienceForms.removeAt(i);
  }

  onSubmit(): void {
    console.log('hcekcing form ', this.registerForm);
  }
}
