import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOptionComponent, NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'forms-with-options-example',
    standalone: true,
    imports: [NgOptionComponent, NgSelectComponent, ReactiveFormsModule],
    templateUrl: './forms-with-options-example.component.html',
    styleUrls: ['./forms-with-options-example.component.scss']
})
export class FormsWithOptionsExampleComponent implements OnInit {

    basePath;
    heroForm: FormGroup;
    private fb = inject(FormBuilder);

    ngOnInit() {
        this.basePath = window.location.host.includes('localhost') ? '' : '/ng-select';
        this.heroForm = this.fb.group({
            heroId: 'batman',
            agree: null
        });
    }
}
