import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LocalerService } from './../../core/services/localer.service';
import { NgClass } from '@angular/common';
import { JsonService } from 'src/app/core/services/json.service';
import { ApiService, END_POINT } from 'src/app/core/services/api.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  arr: Array<any> = [];
  check: any;
  status: any;

  formReactive: FormGroup;

  constructor(
    private fb: FormBuilder,
    private localer: LocalerService,
    private json: JsonService,
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formReactive = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    // this.formReactive.valueChanges.subscribe(
    //   data => console.log(data)
    // );
  }

  onSubmit() {
    const param =  this.formReactive.value;
    this.saveLocal('Account', param);
    // this.json.saveText(JSON.stringify(param), '../../../assets/users.json');
  }

  saveLocal(key: string, value: any) {
    if (key && value) {
      const valStorage = this.localer.getLocalStorage(key);
      if ( valStorage ) {
        this.arr = JSON.parse(this.localer.getLocalStorage(key));
        this.check = this.arr.map((element) => element.email).includes(value.email);
        if ( !this.check ) {
          this.arr.push(value);
          this.localer.removeLocalStorage(key);
          this.localer.saveLocalStorage(key, this.arr);
          this.router.navigate(['/login']);
        }
      } else {
        this.localer.saveLocalStorage(key, [value]);
        this.arr.push(value);
      }
    }
  }
}
