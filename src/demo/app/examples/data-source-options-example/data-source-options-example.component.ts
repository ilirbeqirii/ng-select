import { JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgOptionComponent, NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'data-source-options-example',
    standalone: true,
    imports: [JsonPipe, NgOptionComponent, FormsModule, NgSelectComponent, NgFor],
    templateUrl: './data-source-options-example.component.html',
    styleUrls: ['./data-source-options-example.component.scss']
})
export class DataSourceOptionsExampleComponent implements OnInit {

    selectedCars = [3];
    cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab', disabled: true },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];

    ngOnInit() {

    }

    toggleDisabled() {
        const car: any = this.cars[1];
        car.disabled = !car.disabled;
    }
}
