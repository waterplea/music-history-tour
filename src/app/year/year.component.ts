import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { YEAR, YEAR_PROVIDERS } from './year.providers';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css'],
  providers: YEAR_PROVIDERS,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YearComponent {
  constructor(@Inject(YEAR) public year: number) {}
}
