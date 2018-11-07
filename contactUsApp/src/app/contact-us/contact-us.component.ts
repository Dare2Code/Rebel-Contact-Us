import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {ServerService} from './server.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  submitted = false;
  stringData;
  contactUsData = [{
    message: 'hello'
  }];

  constructor(private formBuilder: FormBuilder, private serverService: ServerService ) { }

  ngOnInit() {
    this.contactUsForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // convenience getter for easy access to form fields
  get form() { return this.contactUsForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactUsForm.invalid) {
      return;
    }

    this.stringData = JSON.stringify(this.contactUsForm.value);

    // save data to Firebase realtime db - API
    this.serverService.storeServers(this.stringData)
      .subscribe(
        (response) => console.log('response:' + response),
        (error) => console.log('Error: ' + error)
      );

    console.log('my data is - ' + this.stringData);
  }
}
