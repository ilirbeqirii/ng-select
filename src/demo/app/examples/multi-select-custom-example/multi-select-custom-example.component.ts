import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'multi-select-custom-example',
    standalone: true,
    imports: [FormsModule, NgSelectComponent, AsyncPipe],
    templateUrl: './multi-select-custom-example.component.html',
    styleUrls: ['./multi-select-custom-example.component.scss']
})
export class MultiSelectCustomExampleComponent implements OnInit {

    githubUsers$: Observable<any[]>;
    selectedUsers = ['anjmao', 'anjmittu', 'anjmendoza'];
    private dataService: DataService = inject(DataService);

    ngOnInit() {
        this.githubUsers$ = this.dataService.getGithubAccounts('anjm');
    }
}
