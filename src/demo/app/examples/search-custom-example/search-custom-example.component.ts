import { Component, OnInit, inject } from '@angular/core';
import { DataService, Person } from '../data.service';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'search-custom-example',
    standalone: true,
    imports: [NgSelectComponent],
    templateUrl: './search-custom-example.component.html',
    styleUrls: ['./search-custom-example.component.scss']
})
export class SearchCustomExampleComponent implements OnInit {

    people: Person[] = [];
    peopleLoading = false;
    private dataService: DataService = inject(DataService);

    ngOnInit() {
        this.loadPeople();
    }

    private loadPeople() {
        this.peopleLoading = true;
        this.dataService.getPeople().subscribe(x => {
            this.people = x;
            this.peopleLoading = false;
        });
    }

    customSearchFn(term: string, item: Person) {
        term = term.toLowerCase();
        return item.name.toLowerCase().indexOf(term) > -1 || item.gender.toLowerCase() === term;
    }
}
