import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'tags-default-example',
    standalone: true,
    imports: [JsonPipe, FormsModule, NgSelectComponent],
    templateUrl: './tags-default-example.component.html',
    styleUrls: ['./tags-default-example.component.scss']
})
export class TagsDefaultExampleComponent implements OnInit {

    selectedCompany;

    ngOnInit() {
    }
}
