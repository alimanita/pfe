import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ControlsOf, IProfile } from '@shared';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  reactiveForm = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', [Validators.required]],
    city: ['', [Validators.required]],
    address: ['', [Validators.required]],
    company: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    tele: ['', [Validators.required]],

    date: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getErrorMessage(form: FormGroup<ControlsOf<IProfile>>) {
    return form.get('email')?.hasError('required')
      ? 'You must enter a value'
      : form.get('email')?.hasError('email')
      ? 'Not a valid email'
      : '';
  }
}
