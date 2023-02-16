import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, debounceTime, Observable, of, Subject, switchMap, takeUntil, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
//   styles: [
//     `
//     .wrapper {
//         position: relative;
//         min-width: 30px;
//     }
    
//     .content-list {
//         position: absolute;
//         z-index: 999;
//         width: 100%;
//         box-sizing: border-box;  
//         border: 1px solid grey;
//         border-top: none;
//         border-bottom-left-radius: 4px;
//         border-bottom-right-radius: 4px;
//     }
    
//     .list {
//         padding: 10px;
//         &:hover {
//           cursor: pointer;
//           background: rgb(219, 211, 211);
//         }
//     }
    
//     .list:hover {
//         cursor: pointer;
//         background: rgb(219, 211, 211);
//     }
    
//     .spinner-container {
//         position: absolute;
//         right: 10px;
//         top: calc(50% - 10px);
//       }
    
//       .spinner {
//         position: relative;
//         height: 20px;
//         width: 20px;
//         display: inline-block;
//         animation: around 5.4s infinite;
//       }
      
//       @keyframes around {
//         0% {
//           transform: rotate(0deg)
//         }
//         100% {
//           transform: rotate(360deg)
//         }
//       }
      
//       .spinner::after, .spinner::before {
//         content: "";
//         background: white;
//         position: absolute;
//         display: inline-block;
//         width: 100%;
//         height: 100%;
//         border-width: 2px;
//         border-color: #333 #333 transparent transparent;
//         border-style: solid;
//         border-radius: 20px;
//         box-sizing: border-box;
//         top: 0;
//         left: 0;
//         animation: around 0.7s ease-in-out infinite;
//       }
      
//       .spinner::after {
//         animation: around 0.7s ease-in-out 0.1s infinite;
//         background: transparent;
//       }
//       `
//   ]
})
export class LoginComponent implements OnInit{

    public values: string[] = []
    public loaded: boolean = false;
    public test: Subject<string> = new Subject<string>();
    public set searchTerm(value: string) {
        this.test.next(value)
    }
    private _destroyed$ = new Subject<void>();
    private _http = inject(HttpClient)

    // constructor( private _http: HttpClient ){}

    ngOnInit(): void {
        this.test.pipe(
            debounceTime(1000),
            switchMap((term: string) => this._falseRequest(term).pipe(catchError((err: Error) => {
                console.error('we got error first', err.message);
                return of([]) 
                })
            )),
            takeUntil(this._destroyed$)
            ).subscribe(
                (res: string[]) => {
                    // setTimeout(() => {
                        this.loaded = false
                        this.values = res
                    // }, 2000);
                }
            )
        }

    handleOptionClick(event: any) {
        confirm(`'TEXT' ${event.target.innerText}` )
    }

    ngOnDestroy(): void {
        this._destroyed$.next();
        this._destroyed$.complete()
    }

    rerere() {
        this._http.get('http://localhost:3000/users?name=John').subscribe((res) => console.log('res',res))
    }
    private _falseRequest(term: string): Observable<any> {
        this.loaded = true
        if(!term) {
            return throwError(() => new Error(`I'm mistake`))
        }
        const value: string[] = [
            'test user',
            'surname user',
            'public class',
            'private route',
            'client setting',
            'frontend developer',
            'building sentences',
            'required options'
        ]
        // this._http.get('http://localhost:3000/mocked', {params: { term }})

       const test = this._http.get('test') 
       const result: string[] = value.filter((value) => value.includes(term.toString()))
       return this._http.get('http://localhost:3000/mocked', { params: { term } })
    }
}
