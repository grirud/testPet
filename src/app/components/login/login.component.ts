import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  catchError,
  debounceTime,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  throwError,
} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public values: string[] = [];
  public loaded: boolean = false;
  public test: Subject<string> = new Subject<string>();
  public set searchTerm(value: string) {
    this.test.next(value);
  }
  private _destroyed$ = new Subject<void>();
  private _http = inject(HttpClient);

  // constructor( private _http: HttpClient ){}

  ngOnInit(): void {
    this.test
      .pipe(
        debounceTime(1000),
        switchMap((term: string) =>
          this._falseRequest(term).pipe(
            catchError((err: Error) => {
              console.error('we got error first', err.message);
              return of([]);
            })
          )
        ),
        takeUntil(this._destroyed$)
      )
      .subscribe((res: string[]) => {
        setTimeout(() => {
          this.loaded = false;
          this.values = res;
        }, 2000);
      });
  }

  handleOptionClick(event: any) {
    confirm(`'TEXT' ${event.target.innerText}`);
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  getUsers() {
    this._http
      .get('http://localhost:3000/users?name=John')
      .subscribe((res) => console.log('res', res));
  }

  private _falseRequest(term: string): Observable<any> {
    this.loaded = true;
    if (!term) {
      return throwError(() => new Error(`I'm mistake`));
    }
    const value: string[] = [
      'test user',
      'surname user',
      'public class',
      'private route',
      'client setting',
      'frontend developer',
      'building sentences',
      'required options',
    ];
    // this._http.get('http://localhost:3000/mocked', {params: { term }})

    const test = this._http.get('test');
    const result: string[] = value.filter((value) =>
      value.includes(term.toString())
    );
    return this._http.get('http://localhost:3000/mocked', { params: { term } });
  }
}
