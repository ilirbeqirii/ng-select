import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'multi-select-template-example',
    standalone: true,
    imports: [FormsModule, NgSelectComponent, AsyncPipe],
    templateUrl: './multi-select-template-example.component.html',
    styleUrls: ['./multi-select-template-example.component.scss']
})
export class MultiSelectTemplateExampleComponent implements OnInit {

    githubUsers$: Observable<any[]>;
    selectedUsers = ['anjmao'];
    private dataService: DataService = inject(DataService);

    ngOnInit() {
        this.githubUsers$ = this.dataService.getGithubAccounts('anjm');
    }
}
