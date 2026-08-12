import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainToolbar } from './components/main-toolbar/main-toolbar';
import { TranslateService } from '@ngx-translate/core';
import { TopToolbar } from './containers/top-toolbar/top-toolbar';
import { PageContextService } from './services/page-context-service';
import { Sidenav } from './components/sidenav/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutService } from './services/layout-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopToolbar, Sidenav, MatSidenavModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('vhome_mis');
  protected layout = inject(LayoutService);
  private translate = inject(TranslateService);
  protected pageContext = inject(PageContextService);
  readonly isSidenavOpen = signal(false);
  readonly isAnimating = signal(false);

  ngOnInit() {
    // 1. Establish the ultimate safety net fallback dictionary
    this.translate.addLangs(['en', 'zh', 'vi']);
    this.translate.setFallbackLang('en');

    // 2. Instruct the browser to hot-load the English pack initially
    this.translate.use('zh');
  }

  onAnimationStart(): void {
    this.isAnimating.set(true);
  }

  onAnimationEnd(): void {
    this.isAnimating.set(false);
  }

  toggleSidenav(): void {
    this.isSidenavOpen.update((open) => !open);
  }
}
