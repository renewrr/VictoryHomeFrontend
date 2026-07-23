import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainToolbar } from './components/main-toolbar/main-toolbar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainToolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('vhome_mis');
  private translate = inject(TranslateService);

  ngOnInit() {
    // 1. Establish the ultimate safety net fallback dictionary
    this.translate.addLangs(['en', 'zh', 'vi']);
    this.translate.setFallbackLang('en')

    // 2. Instruct the browser to hot-load the English pack initially
    this.translate.use('zh');
  }
}
