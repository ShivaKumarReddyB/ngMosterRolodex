import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() searchEvent= new EventEmitter();

  searchField = '';

  constructor() { }

  ngOnInit() {
  }
  searchChange() {
    this.searchEvent.emit(this.searchField);
    console.log('searchText', this.searchField);
  }

}
