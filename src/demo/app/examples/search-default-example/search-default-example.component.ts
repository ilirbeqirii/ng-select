import { Component, OnInit, inject } from '@angular/core';
import { DataService, Person } from '../data.service';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'search-default-example',
    standalone: true,
    imports: [NgSelectComponent],
    templateUrl: './search-default-example.component.html',
    styleUrls: ['./search-default-example.component.scss']
})
export class SearchDefaultExampleComponent implements OnInit {

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
}
