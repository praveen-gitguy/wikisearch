import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submmited = new EventEmitter<string>();

  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submmited.emit(this.term);
  }

}
