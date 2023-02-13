import { Component } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent {
  public test1 = [1, 3, 6, 4, 1, 2]
  public test2 = [1, 2, 3]
  public test3 = [-1, -3]
  public set customArray(val: string) {
    try {
      const array = JSON.parse(val)
      this.solution(array)
    } catch (error) {
      console.warn(error)
    }
  }

  public get customArray(): string {
    return '[]'
  }
  // This is a demo task.
// Write a function:
// function solution(A: number[]): number;
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

solution(A: number[]): void {
  const filtered = A.filter((val) => val >= 1 && val <= A.length).sort((a, b) => a - b)
  let result = 0
  if(!filtered.length || filtered[0] > 1) {
    result = 1
  } else {
    const lastItem = filtered[filtered.length - 1]
    const res = filtered.find((val, id) => (filtered[id + 1] - val) >= 2) || lastItem
    result = res + 1
  }


  console.log('solution', result, 'array', A)
}

}
