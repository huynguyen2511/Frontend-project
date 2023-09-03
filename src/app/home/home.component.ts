import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public name = 'Huy';
  public age = 18
  public traiCay =['tao','nho','cam','quit'];
  public traiCay2 =[{ten : 'tao', gia: 12, haGia: true},
  {ten : 'nho', gia: 13, haGia: false},
  {ten : 'cam', gia: -14, haGia: true},
  {ten : 'quit', gia: 15, haGia: false}];

  constructor() {}
  ngOnInit(): void { 
    console.log('trai cay = ', this.traiCay2);
    
  }

  // public resetName(): void{
  //   console.log('resetName');
  //   this.name = '';
  // }
}
