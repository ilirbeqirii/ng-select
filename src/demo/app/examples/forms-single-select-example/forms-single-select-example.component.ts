import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgOptionComponent, NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'forms-single-select-example',
    standalone: true,
    imports: [NgOptionComponent, NgSelectComponent, ReactiveFormsModule],
    templateUrl: './forms-single-select-example.component.html',
    styleUrls: ['./forms-single-select-example.component.scss']
})
export class FormsSingleSelectExampleComponent implements OnInit {

    heroForm: FormGroup;
    ages: any[] = [
        { value: '<18', label: 'Under 18' },
        { value: '18', label: '18' },
        { value: '>18', label: 'More than 18' },
    ];
    private fb = inject(FormBuilder);
    private modalService = inject(NgbModal);

    ngOnInit() {
        this.heroForm = this.fb.group({
            age: [null, Validators.required],
        });
    }

    toggleAgeDisable() {
        if (this.heroForm.controls.age.disabled) {
            this.heroForm.controls.age.enable();
        } else {
            this.heroForm.controls.age.disable();
        }
    }

    showConfirm(content) {
        this.modalService.open(content);
    }
}
