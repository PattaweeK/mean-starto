import { Component } from '@angular/core';

@Component({
    selector: 'topbar',
    templateUrl: 'test.component.html',
    styleUrls: ['test.component.css']
})
export class TestComponent {
    favoriteSeason: string;

    seasons = [
        'Winter',
        'Spring',
        'Summer',
        'Autumn',
    ];
}