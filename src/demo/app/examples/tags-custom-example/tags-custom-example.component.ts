import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'tags-custom-example',
    standalone: true,
    imports: [JsonPipe, FormsModule, NgSelectComponent],
    templateUrl: './tags-custom-example.component.html',
    styleUrls: ['./tags-custom-example.component.scss']
})
export class TagsCustomExampleComponent implements OnInit {

    selectedCompanies;
    companies: any[] = [];
    companiesNames = ['Uber', 'Microsoft', 'Flexigen'];

    ngOnInit() {
        this.companiesNames.forEach((c, i) => {
            this.companies.push({ id: i, name: c });
        });
    }

    addTagFn(name) {
        return { name: name, tag: true };
    }
}
