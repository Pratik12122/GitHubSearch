import { Component } from '@angular/core';
import { GitHubService} from './services/github.service';
@Component({
  selector: 'app',
  template: `
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
        GitHub Search
      </a>
    </div>
  </div>
</nav>
<div class="container"><profile></profile></div>`,
  providers:[GitHubService]
})
export class AppComponent { }