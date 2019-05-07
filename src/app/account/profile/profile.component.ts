import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DeactivateDialogService } from 'src/app/core/sevices/deactivate-dialog.service';
import { LocalerService } from 'src/app/core/services/localer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, DoCheck {
  firstName: any;
  lastName: any;
  email: any;
  password: any;
  profile: any;
  edit = false; // set default form view profile
  arr: Array<any> = [];

  formReactive: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private dialogService: DeactivateDialogService,
    private localer: LocalerService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    // console.log(this.route.data.subscribe);
    // this.route.data.subscribe(data => {
    //   console.log(data.user);
    //   this.user = data.user;
    // });

    // this.route.paramMap.subscribe( data => {
    //   this.firstName = data.get('firstName');
    //   this.lastName = data.get('lastName');
    //   this.email = data.get('email');
    // });
    // this.router.data.subscribe(data => this.userData = data.user.data


    this.formReactive = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  changeForm(e) {
    this.edit = !this.edit;
  }

  onSubmit() {
    const param =  this.formReactive.value;
    console.log(param);
    this.updateLocal('Account', param);
  }

  updateLocal(key: string, value: any) {
    if (key && value) {
      this.arr = JSON.parse(this.localer.getLocalStorage(key)).filter(i => i.email !== this.email);
      value.email = this.email;
      this.arr.push(value);
      this.localer.removeLocalStorage(key);
      this.localer.saveLocalStorage(key, this.arr);
      this.localer.saveSessionStorage('login', this.email, 2);
      this.edit = !this.edit;
    }
  }

  ngDoCheck() {
    this.profile = JSON.parse(this.localer.getLocalStorage('Account')).find( i => i.email === this.localer.getSessionStorage('login'));
    this.firstName = this.profile.firstName;
    this.lastName = this.profile.lastName;
    this.email = this.profile.email;
    this.password = this.profile.password;
  }

  canDeactivate(): Observable<boolean> | boolean {
    return this.dialogService.confirm('Do you want to leave?');
  }
}
