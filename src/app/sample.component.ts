import { Component } from '@angular/core';

@Component({
  selector: 'sample-app',
  template: `<h1>Sample {{name}}</h1>`,
})
export class SampleComponent  { name = 'World'; }
