import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'forms-multi-select-example',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, NgSelectComponent],
    templateUrl: './forms-multi-select-example.component.html',
    styleUrls: ['./forms-multi-select-example.component.scss']
})
export class FormsMultiSelectExampleComponent implements OnInit {

    heroForm: FormGroup;
    isCitiesControlVisible = true;
    cities: any[] = [
        { id: 1, name: 'Vilnius' },
        { id: 2, name: 'Kaunas' },
        { id: 3, name: 'Pavilnys (Disabled)', disabled: true },
        { id: 4, name: 'Pabradė' },
    ];
    private fb = inject(FormBuilder);

    ngOnInit() {
        this.heroForm = this.fb.group({
            selectedCitiesIds: []
        });
    }

    toggleCitiesControl() {
        this.isCitiesControlVisible = !this.isCitiesControlVisible;
    }

    clearCities() {
        this.heroForm.get('selectedCitiesIds').patchValue([]);
    }
}
