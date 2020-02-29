import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { nameValidation } from '../validators/custom.validators';
import { Testcase1Component } from '../testcase1/testcase1.component';
import { UsernameValidator } from '../validators/username.validators';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
