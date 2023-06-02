import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
    selector: 'multi-select-default-example',
    standalone: true,
    imports: [FormsModule, NgSelectComponent, AsyncPipe, NgFor],
    templateUrl: './multi-select-default-example.component.html',
    styleUrls: ['./multi-select-default-example.component.scss']
})
export class MultiSelectDefaultExampleComponent implements OnInit {

    people$: Observable<any[]>;
    selectedPeople = [{ name: 'Karyn Wright' }];
    private dataService: DataService = inject(DataService);

    ngOnInit() {
        this.people$ = this.dataService.getPeople();
    }

    clearModel() {
        this.selectedPeople = [];
    }

    changeModel() {
        this.selectedPeople = [{ name: 'New person' }];
    }
}
