import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
  @Input() product;
  @Output() interest = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
