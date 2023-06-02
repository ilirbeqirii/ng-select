import { Component, OnInit, inject } from '@angular/core';
import { concat, Observable, of, Subject } from 'rxjs';
import { DataService, Person } from '../data.service';
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'search-autocomplete-example',
    standalone: true,
    imports: [JsonPipe, FormsModule, NgSelectComponent, AsyncPipe],
    templateUrl: './search-autocomplete-example.component.html',
    styleUrls: ['./search-autocomplete-example.component.scss']
})
export class SearchAutocompleteExampleComponent implements OnInit {

    people$: Observable<Person[]>;
    peopleLoading = false;
    peopleInput$ = new Subject<string>();
    selectedPersons: Person[] = <any>[{ name: 'Karyn Wright' }, { name: 'Other' }];
    private dataService: DataService = inject(DataService);

    ngOnInit() {
        this.loadPeople();
    }

    trackByFn(item: Person) {
        return item.id;
    }

    private loadPeople() {
        this.people$ = concat(
            of([]), // default items
            this.peopleInput$.pipe(
                distinctUntilChanged(),
                tap(() => this.peopleLoading = true),
                switchMap(term => this.dataService.getPeople(term).pipe(
                    catchError(() => of([])), // empty list on error
                    tap(() => this.peopleLoading = false)
                ))
            )
        );
    }
}
