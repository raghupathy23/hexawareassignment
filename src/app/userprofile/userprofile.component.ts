import { Component, ViewEncapsulation } from '@angular/core';

interface Country {
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent {
  
    countries: Country[] = [
        {value: 'india-0', viewValue: 'India'},
        {value: 'germany-1', viewValue: 'Germany'},
        {value: 'france-2', viewValue: 'France'}
      ];

}
