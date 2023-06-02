import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'multi-select-limit-example',
    standalone: true,
    imports: [FormsModule, NgSelectComponent, AsyncPipe, NgFor, NgIf],
    templateUrl: './multi-select-limit-example.component.html',
    styleUrls: ['./multi-select-limit-example.component.scss']
})
export class MultiSelectLimitExampleComponent implements OnInit {

    people$: Observable<any[]>;
    selectedPeople = [];
    private dataService: DataService = inject(DataService);
    
    ngOnInit() {
        this.people$ = this.dataService.getPeople();
    }

    clearModel() {
        this.selectedPeople = [];
    }
}
