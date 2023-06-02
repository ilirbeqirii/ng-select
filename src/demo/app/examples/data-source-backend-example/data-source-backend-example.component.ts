import { Component, OnInit, inject } from '@angular/core';
import { DataService, Person } from '../data.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'data-source-backend-example',
    standalone: true,
    imports: [FormsModule, AsyncPipe, NgSelectComponent],
    templateUrl: './data-source-backend-example.component.html',
    styleUrls: ['./data-source-backend-example.component.scss']
})
export class DataSourceBackendExampleComponent implements OnInit {

    people$: Observable<Person[]>;
    selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';
    private dataService: DataService = inject(DataService);

    ngOnInit() {
        this.people$ = this.dataService.getPeople();
    }

}
