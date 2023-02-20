import { Component } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent {
  public test1 = [1, 3, 6, 4, 1, 2];
  public test2 = [1, 2, 3];
  public test3 = [-1, -3];
  public set customArray(val: string) {
    try {
      const array = JSON.parse(val);
      this.solution(array);
    } catch (error) {
      console.warn(error);
    }
  }

  public get customArray(): string {
    return '[]';
  }

  solution(A: number[]): void {
    const filtered = A.filter((val) => val >= 1 && val <= A.length).sort(
      (a, b) => a - b
    );
    let result = 0;
    if (!filtered.length || filtered[0] > 1) {
      result = 1;
    } else {
      const lastItem = filtered[filtered.length - 1];
      const res =
        filtered.find((val, id) => filtered[id + 1] - val >= 2) || lastItem;
      result = res + 1;
    }

    console.log('solution', result, 'array', A);
  }
}
