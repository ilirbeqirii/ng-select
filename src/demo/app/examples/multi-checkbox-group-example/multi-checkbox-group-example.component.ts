import { Component, OnInit, inject } from '@angular/core';
import { DataService, Person } from '../data.service';
import { map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'multi-checkbox-group-example',
    standalone: true,
    imports: [FormsModule, NgSelectComponent, JsonPipe],
    templateUrl: './multi-checkbox-group-example.component.html',
    styleUrls: ['./multi-checkbox-group-example.component.scss']
})
export class MultiCheckboxGroupExampleComponent implements OnInit {

    people: Person[] = [];
    selectedPeople = [];
    private dataService: DataService = inject(DataService);

    ngOnInit() {
        this.dataService.getPeople()
            .pipe(map(x => x.filter(y => !y.disabled)))
            .subscribe((res) => {
                this.people = res;
                this.selectedPeople = [this.people[0].id];
            });
    }
}
