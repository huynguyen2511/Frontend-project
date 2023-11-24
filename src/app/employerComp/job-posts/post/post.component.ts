import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  postId;

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.postId);
    
  }


}
