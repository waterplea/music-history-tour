import { InjectionToken, Provider } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export const YEAR = new InjectionToken<number>('Current year');

export const YEAR_PROVIDERS: Provider[] = [
  {
    provide: YEAR,
    deps: [ActivatedRoute],
    useFactory: yearFactory,
  },
];

export function yearFactory({ snapshot }: ActivatedRoute): number {
  return parseInt(snapshot.paramMap.get('year') || '1950', 10);
}
