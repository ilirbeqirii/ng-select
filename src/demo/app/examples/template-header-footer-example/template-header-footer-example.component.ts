import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'template-header-footer-example',
    standalone: true,
    imports: [FormsModule, NgSelectComponent],
    templateUrl: './template-header-footer-example.component.html',
    styleUrls: ['./template-header-footer-example.component.scss']
})
export class TemplateHeaderFooterExampleComponent implements OnInit {

    people = [];
    selectedPeople = [];
    private dataService: DataService = inject(DataService);

    ngOnInit() {
        this.dataService.getPeople().subscribe(items => {
            this.people = items;
        });
    }

    selectAll() {
        this.selectedPeople = this.people.map(x => x.name);
    }

    unselectAll() {
        this.selectedPeople = [];
    }

}
