import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainToolbar } from './components/main-toolbar/main-toolbar';
import { TranslateService } from '@ngx-translate/core';
import { TopToolbar } from './containers/top-toolbar/top-toolbar';
import { PageContextService } from './services/page-context-service';
import { Sidenav } from './components/sidenav/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopToolbar, Sidenav, MatSidenavModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('vhome_mis');
  private translate = inject(TranslateService);
  protected pageContext = inject(PageContextService);
  readonly isSidenavOpen = signal(true);

  ngOnInit() {
    // 1. Establish the ultimate safety net fallback dictionary
    this.translate.addLangs(['en', 'zh', 'vi']);
    this.translate.setFallbackLang('en');

    // 2. Instruct the browser to hot-load the English pack initially
    this.translate.use('zh');
  }

  toggleSidenav(): void {
    this.isSidenavOpen.update((open) => !open);
  }
}
