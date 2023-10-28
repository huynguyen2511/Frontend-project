import { Component } from '@angular/core';

export interface Post {
  title: string;
  companyName: string;
  salary: string;
  address: string;
}

@Component({
  selector: 'app-random-job',
  templateUrl: './random-job.component.html',
  styleUrls: ['./random-job.component.scss']
})
export class RandomJobComponent {
  p: number = 1;
  collection = [
    { title: 'Tuyen nhan vien lam viec A', companyName: 'Hydrogen', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    { title: 'Tuyen nhan vien lam viec B', companyName: 'Helium', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    { title: 'Tuyen nhan vien lam viec C', companyName: 'Lithium', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    { title: 'Tuyen nhan vien lam viec D', companyName: 'Beryllium', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    { title: 'Tuyen nhan vien lam viec E', companyName: 'Boron', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    { title: 'Tuyen nhan vien lam viec F', companyName: 'Carbon', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    { title: 'Tuyen nhan vien lam viec G', companyName: 'Nitrogen', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    { title: 'Tuyen nhan vien lam viec H', companyName: 'Oxygen', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    { title: 'Tuyen nhan vien lam viec J', companyName: 'Fluorine', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    { title: 'Tuyen nhan vien lam viec K', companyName: 'Neon', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    { title: 'Tuyen nhan vien lam viec L', companyName: 'Fluorine', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    { title: 'Tuyen nhan vien lam viec M', companyName: 'Neon', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    // { title: 'Tuyen nhan vien lam viec N', companyName: 'Fluorine', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    // { title: 'Tuyen nhan vien lam viec O', companyName: 'Neon', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    // { title: 'Tuyen nhan vien lam viec P', companyName: 'Fluorine', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    // { title: 'Tuyen nhan vien lam viec Q', companyName: 'Neon', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    // { title: 'Tuyen nhan vien lam viec R', companyName: 'Fluorine', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    // { title: 'Tuyen nhan vien lam viec S', companyName: 'Neon', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    // { title: 'Tuyen nhan vien lam viec T', companyName: 'Fluorine', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    // { title: 'Tuyen nhan vien lam viec U', companyName: 'Neon', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    // { title: 'Tuyen nhan vien lam viec V', companyName: 'Fluorine', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
    // { title: 'Tuyen nhan vien lam viec W', companyName: 'Neon', salary: '11-15 trieu', address: 'Ha Long, Quang Ninh' },
  ];

}
