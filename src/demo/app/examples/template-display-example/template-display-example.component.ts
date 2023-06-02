import { Component, EventEmitter, OnInit, inject } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { NgSelectComponent } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'template-display-example',
    standalone: true,
    imports: [NgSelectComponent, FormsModule],
    templateUrl: './template-display-example.component.html',
    styleUrls: ['./template-display-example.component.scss']
})
export class TemplateDisplayExampleComponent implements OnInit {

    peopleTypeahead = new EventEmitter<string>();
    serverSideFilterItems = [];
    selectedPeople;
    private dataService: DataService = inject(DataService);

    ngOnInit() {
        this.serverSideSearch();
    }

    private serverSideSearch() {
        this.peopleTypeahead.pipe(
            distinctUntilChanged(),
            debounceTime(300),
            switchMap(term => this.dataService.getPeople(term))
        ).subscribe(x => {
            this.serverSideFilterItems = x;
        }, (err) => {
            console.log(err);
            this.serverSideFilterItems = [];
        });
    }

}
