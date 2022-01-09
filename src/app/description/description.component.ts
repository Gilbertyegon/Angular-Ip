import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() goal: Quote;


  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  @Output() isDone = new EventEmitter<boolean>();
    like = 0;
    dislike = 0;

    upVote(){
      this.like = this.like + 1;
    }

    downVote(){
      this.dislike = this.dislike + 1;
    }
  constructor() { }

  ngOnInit(): void {
  }

}
