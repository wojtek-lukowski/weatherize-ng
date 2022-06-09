import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-searches',
  templateUrl: './last-searches.component.html',
  styleUrls: ['./last-searches.component.css']
})
export class LastSearchesComponent implements OnInit {

  @Input() lastSearches: string[] = [];
  @Input() received = '';

  constructor() { }

  ngOnInit(): void {
    console.log('searches', this.lastSearches)
  }

}
