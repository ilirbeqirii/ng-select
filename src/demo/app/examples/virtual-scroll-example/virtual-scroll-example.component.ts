import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
    selector: 'virtual-scroll-example',
    standalone: true,
    imports: [NgSelectComponent],
    templateUrl: './virtual-scroll-example.component.html',
    styleUrls: ['./virtual-scroll-example.component.scss']
})
export class VirtualScrollExampleComponent implements OnInit {

    photos = [];
    photosBuffer = [];
    bufferSize = 50;
    numberOfItemsFromEndBeforeFetchingMore = 10;
    loading = false;
    private http = inject(HttpClient);

    ngOnInit() {
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos').subscribe(photos => {
            this.photos = photos;
            this.photosBuffer = this.photos.slice(0, this.bufferSize);
        });
    }

    onScrollToEnd() {
        this.fetchMore();
    }

    onScroll({ end }) {
        if (this.loading || this.photos.length <= this.photosBuffer.length) {
            return;
        }

        if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.photosBuffer.length) {
            this.fetchMore();
        }
    }

    private fetchMore() {
        const len = this.photosBuffer.length;
        const more = this.photos.slice(len, this.bufferSize + len);
        this.loading = true;
        // using timeout here to simulate backend API delay
        setTimeout(() => {
            this.loading = false;
            this.photosBuffer = this.photosBuffer.concat(more);
        }, 200)
    }

}
