import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select'
import { delay } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
    selector: 'forms-async-data-example',
    standalone: true,
    imports: [NgSelectComponent, ReactiveFormsModule],
    templateUrl: './forms-async-data-example.component.html',
    styleUrls: ['./forms-async-data-example.component.scss']
})
export class FormsAsyncDataExampleComponent implements OnInit {

    heroForm: FormGroup;
    albums = [];
    allAlbums = [];
    private dataService: DataService = inject(DataService);
    private fb = inject(FormBuilder);

    ngOnInit() {
        this.loadAlbums();
        this.heroForm = this.fb.group({
            album: '',
        });
    }

    openSelect(select: NgSelectComponent) {
        select.open();
    }

    closeSelect(select: NgSelectComponent) {
        select.close();
    }

    selectAlbumsRange(from, to) {
        this.albums = this.allAlbums.slice(from, to);
    }

    selectFirstAlbum() {
        this.heroForm.get('album').patchValue(this.albums[0].id);
    }

    private loadAlbums() {
        this.dataService.getAlbums().pipe(delay(500)).subscribe(albums => {
            this.allAlbums = albums;
            this.albums = [...this.allAlbums];
            this.selectFirstAlbum();
        });
    }
}
