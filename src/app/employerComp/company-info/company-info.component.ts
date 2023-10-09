import { Component } from '@angular/core';
import fieldActivityData from '../data/field-activity.json'

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent {
  public fieldData = fieldActivityData;
}
