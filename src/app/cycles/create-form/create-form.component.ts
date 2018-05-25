import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  public formGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.createForm();
  }
  public createForm() {
    this.formGroup = this.formBuilder.group({
      name: [''],
      age: [''],
      email: ['']
    });
  }
  public submitData() {
    console.log(this.formGroup.value);
  }
  canDeactivate() {
    return false;
  }
}
