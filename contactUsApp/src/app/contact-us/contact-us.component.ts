import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  // Alert user that the data is posted or not
  isDataPosted = 'na';

  constructor(private formBuilder: FormBuilder, private serverService: ServerService ) { }

  // building contactus form immediately after loading formbuiler
  ngOnInit() {
    this.contactUsForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(3)]],
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

    // storing user entered data into a string format so its readable by serverservice
    this.stringData = JSON.stringify(this.contactUsForm.value);

    // save data to Firebase realtime db - API
    this.serverService.storeContactUsData(this.stringData)
      .subscribe(
        (response) => {console.log('Response:' + response); this.isDataPosted = 'true' },
        (error) => {console.log('Error:' + error); this.isDataPosted = 'false'; }
      );

    // logging data to confirm - dev mode only
    console.log('my data is - ' + this.stringData);
  }
}
