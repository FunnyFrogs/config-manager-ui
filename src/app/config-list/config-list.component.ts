import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.css']
})
export class ConfigListComponent implements OnInit {

  public applicationList: Array<object> = [];
  public configList: Array<object> = [];
  public addApplicationFlag: Boolean = false;
  public addConfigFlag: Boolean = false;
  public selectedApplication: any = {};
  public message = '';
  public applicationName = '';
  public configForm: FormGroup;
  public editFalg: Boolean = false;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getApplicationList();
  }

  public getApplicationList() {
    this.http.get('/config/listservices').subscribe((response: any) => {
      this.applicationList = response.services;
      if (this.applicationList.length > 0) {
        this.selectedApplication = this.applicationList[0];
        this.getConfigList(this.selectedApplication);
      }

    });
  }

  public getConfigList(application) {
    this.selectedApplication = application;
    this.http.get(`/config/listconfigsbyName/${application.name}`).subscribe((response: any) => {
      this.configList = response.configs;
    });
  }

  public createApplication() {
    const payLoad = {
      'servicename': this.applicationName
    };
    this.http.post('/config/createservice', payLoad).subscribe((response) => {
      this.message = response['message'];
      this.addApplicationFlag = false;
      this.applicationName = '';
      this.getApplicationList();
    });
  }

  public openNewCofig() {
    this.addConfigFlag = true;
    this.createConfigForm();
  }

  public createConfigForm() {
    this.configForm = this.formBuilder.group({
      'servicename': this.formBuilder.control(this.selectedApplication.name),
      'id': this.formBuilder.control(this.selectedApplication.id),
      'configname': '',
      'clientId': 'All',
      'ipaddress': 'All',
      'key': '',
      'value': ''
    });
  }

  public createConfig() {
    if (this.editFalg) {
      this.http.put('/config/updateconfig', this.configForm.value).subscribe((response) => {
        this.message = response['message'];
        this.addConfigFlag = false;
        this.editFalg = false;
        this.configForm.reset();
        this.getConfigList(this.selectedApplication);
      });
    } else {
      this.http.post('/config/createconfig', this.configForm.value).subscribe((response) => {
        this.message = response['message'];
        this.addConfigFlag = false;
        this.configForm.reset();
        this.getConfigList(this.selectedApplication);
      });
    }
  }

  public deleteConfig(configId) {
    this.http.delete(`/config/deleteconfig/${configId}`).subscribe((response) => {
      this.getConfigList(this.selectedApplication);
    });
  }

  public deleteService(serviceId) {
    this.http.delete(`/config/deleteservice/${serviceId}`).subscribe((response) => {
      this.getApplicationList();
    });
  }

  public editConfig(config) {
    this.createConfigForm();
    this.configForm.patchValue(config);
    this.addConfigFlag = true;
    this.editFalg = true;
  }
}
