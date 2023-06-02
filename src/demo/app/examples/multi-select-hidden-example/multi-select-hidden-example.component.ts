import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'multi-select-hidden-example',
    standalone: true,
    imports: [FormsModule, NgSelectComponent, AsyncPipe],
    templateUrl: './multi-select-hidden-example.component.html',
    styleUrls: ['./multi-select-hidden-example.component.scss']
})
export class MultiSelectHiddenExampleComponent implements OnInit {

    people$: Observable<any[]>;
    selectedPeople = [];
    private dataService: DataService = inject(DataService);

    ngOnInit() {
        this.people$ = this.dataService.getPeople();
    }

}
