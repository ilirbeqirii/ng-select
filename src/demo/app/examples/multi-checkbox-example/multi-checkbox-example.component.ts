import { Component, OnInit, inject } from '@angular/core';
import { DataService, Person } from '../data.service';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'multi-checkbox-example',
    standalone: true,
    imports: [JsonPipe, FormsModule, NgSelectComponent],
    templateUrl: './multi-checkbox-example.component.html',
    styleUrls: ['./multi-checkbox-example.component.scss']
})
export class MultiCheckboxExampleComponent implements OnInit {

    people: Person[] = [];
    selectedPeople = [];
    private dataService: DataService = inject(DataService);

    constructor() {
    }

    ngOnInit() {
        this.dataService.getPeople()
            .pipe(map(x => x.filter(y => !y.disabled)))
            .subscribe((res) => {
                this.people = res;
                this.selectedPeople = [this.people[0].id, this.people[1].id];
            });
    }
}
