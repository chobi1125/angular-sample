import { Component } from '@angular/core';

@Component({
  selector: 'sample-app',
  template: `
    <div>
      <input type="button" (click)="show($event)" value="現在時刻" />
      <p>{{time}}</p>
    </div>
    <div>
      <input #txt id="txt" name="txt" type="text" (keyup.enter)="input(txt.value)" />
      <ul [innerHTML]="msg"></ul>
    </div>
  `,
})
export class SampleComponent  {
  time: string = '---';
  msg: string = "";
  // テンプレートステートメントで$eventとすることでイベント情報を取得できる
  show(e: any) {
    this.time = new Date().toLocaleString();
    console.log(e)
  }
  // テンプレート参照変数※keyup.enterでエンター時のみ入力値を反映
  input(input: string){
    this.msg += `<li>${input}</li>`;
  }
}
