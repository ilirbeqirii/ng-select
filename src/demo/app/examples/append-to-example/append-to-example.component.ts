import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'append-to-example',
    standalone: true,
    imports: [FormsModule, AsyncPipe, NgSelectComponent],
    templateUrl: './append-to-example.component.html',
    styleUrls: ['./append-to-example.component.scss'],
    //     encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppendToExampleComponent implements OnInit {

    people: any = [];
    selected: any;
    selected2: any;
    selected3: any;
    private dataService = inject(DataService);

    ngOnInit() {
        this.people = this.dataService.getPeople();
    }

}
