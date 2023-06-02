import { Component, OnInit } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'tags-closed-dropdown-example',
    standalone: true,
    imports: [NgSelectComponent],
    templateUrl: './tags-closed-dropdown-example.component.html',
    styleUrls: ['./tags-closed-dropdown-example.component.scss']
})
export class TagsClosedDropdownExampleComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
