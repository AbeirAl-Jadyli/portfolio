import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;
  success: boolean = false;
  error: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });

  }

  sendEmail() {

    if (this.contactForm.invalid) {
      this.error = true;
      return;
    }

    this.loading = true;
    this.success = false;
    this.error = false;

    emailjs.send(
      'service_o8ncsyg',     // Service ID
      'template_6tavo85',    // Template ID
      {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
      },
      'MBpY0jEyPNctpLT99'     // Public Key
    )
    .then((res) => {
      console.log('SUCCESS', res);
      this.success = true;
      this.loading = false;

      this.contactForm.reset(); // يمسح الفورم بعد الإرسال
    })
    .catch((err) => {
      console.log('ERROR', err);
      this.error = true;
      this.loading = false;
    });

  }

}