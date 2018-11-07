import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
// import { DebugPanelComponent} from '../debug-panel/debug-panel.component';


@Component ( {
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;
  formActive = true;

  constructor(private _formBuilder: FormBuilder) {
    this._buildForm();
  }

  ngOnInit(): void {
    this.contactUsForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo),
      'power': new FormControl(this.hero.power, Validators.required)
    });

  }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }

  onClearForm() {
    this._buildForm();
    this.formActive = false;
    setTimeout(() => {
      this.formActive = true;
    }, 0);
  }

  onSubmitForm() {
    console.log(this.contactUsForm.value);
  }

}
