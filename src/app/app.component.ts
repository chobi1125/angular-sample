import { Component } from '@angular/core';

interface Member {
  name: string,
  age: number
};

@Component({
  //　?をいれることでundefinedによるエラーを回避できる
  selector: 'my-app',
  template: `
    <h1>Hello {{member?.name}}</h1>
    <p [class]="red">{{ member?.age }}</p>
    <a [href]="link">testlink</a>
  `,
  styles: [`
    .red {color: red;}
  `]
})
export class AppComponent  {
  link: string = "#";
  member: Member = {
    name: 'Sato',
    age: 28
  };
  red = "red"
}
