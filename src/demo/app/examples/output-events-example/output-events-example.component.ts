import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../data.service';
import { NgSelectComponent } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgFor, NgIf } from '@angular/common';

interface Event {
    name: string;
    value: any;
}

@Component({
    selector: 'output-events-example',
    standalone: true,
    imports: [NgSelectComponent, FormsModule, NgIf, NgFor, JsonPipe],
    templateUrl: './output-events-example.component.html',
    styleUrls: ['./output-events-example.component.scss']
})
export class OutputEventsExampleComponent implements OnInit {

    selectedItems: any;
    items = [];

    private dataService: DataService = inject(DataService);

    events: Event[] = [];

    ngOnInit() {
        this.dataService.getPeople().subscribe(items => {
            this.items = items;
        });
    }

    onChange($event) {
        this.events.push({ name: '(change)', value: $event });
    }

    onFocus($event: Event) {
        this.events.push({ name: '(focus)', value: $event });
    }

    onBlur($event: Event) {
        this.events.push({ name: '(blur)', value: $event });
    }

    onOpen() {
        this.events.push({ name: '(open)', value: null });
    }

    onClose() {
        this.events.push({ name: '(close)', value: null });
    }

    onAdd($event) {
        this.events.push({ name: '(add)', value: $event });
    }

    onRemove($event) {
        this.events.push({ name: '(remove)', value: $event });
    }

    onClear() {
        this.events.push({ name: '(clear)', value: null });
    }

    onScrollToEnd($event) {
        this.events.push({ name: '(scrollToEnd)', value: $event });
    }

    onSearch($event) {
        this.events.push({ name: '(search)', value: $event });
    }
}
