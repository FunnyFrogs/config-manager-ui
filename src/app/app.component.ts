import { Component } from '@angular/core';
import {
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { CreateFormComponent } from './cycles/create-form/create-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

export class AlwayAuthGuard implements CanActivate {
  canActivate() {
    console.log('AlwayAuthGuard');
    window.alert('you dont have acccess for login');
    return true;
  }
}
export class DataSaved implements CanDeactivate<CreateFormComponent> {
  canDeactivate(component: CreateFormComponent) {
    console.log('canDeactivate');
    if (component.canDeactivate()) {
      return true;
    } else {
      // window.alert('are you sure?');
      return true;
    }
  }
}
