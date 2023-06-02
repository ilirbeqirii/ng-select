import { Component, OnInit } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'dropdown-position-example',
    standalone: true,
    imports: [NgSelectComponent],
    templateUrl: './dropdown-position-example.component.html',
    styleUrls: ['./dropdown-position-example.component.scss']
})
export class DropdownPositionExampleComponent implements OnInit {

    cities = [
        { value: 1, label: 'Vilnius' },
        { value: 2, label: 'Kaunas' },
        { value: 3, label: 'Pavilnys' }
    ];

    ngOnInit() {
    }
}
