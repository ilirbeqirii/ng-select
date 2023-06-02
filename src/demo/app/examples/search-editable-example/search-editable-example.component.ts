import { Component, OnInit, inject } from '@angular/core';
import { Person, DataService } from '../data.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-search-editable-example',
  standalone: true,
  imports: [FormsModule, NgSelectComponent, AsyncPipe],
  templateUrl: './search-editable-example.component.html',
  styleUrls: ['./search-editable-example.component.scss']
})
export class SearchEditableExampleComponent implements OnInit {

  people$: Observable<Person[]>;
  selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';
  private dataService = inject(DataService);

  ngOnInit() {
    this.people$ = this.dataService.getPeople();
  }

}
