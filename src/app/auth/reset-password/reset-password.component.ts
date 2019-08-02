import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, NgForm, NgModel} from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  f: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.f = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]]
    });
  }

  onSubmit(f: NgForm) {
    alert('OK bb');
  }


}
