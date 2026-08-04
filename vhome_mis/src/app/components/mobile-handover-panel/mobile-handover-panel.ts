import { ScrollingModule } from '@angular/cdk/scrolling';
import { Component, inject, Injector } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SecondaryStore } from '../../datasources/secondary-store';
import { SignalHandoverDataSource } from '../../datasources/mobile-secondary-datasource';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mobile-handover-panel',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    ScrollingModule,
    MatCardModule,
  ],
  templateUrl: './mobile-handover-panel.html',
  styleUrl: './mobile-handover-panel.scss',
})
export class MobileHandoverPanel {
  public store = inject(SecondaryStore);
  private injector = inject(Injector);

  dataSource!: SignalHandoverDataSource;

  ngOnInit(): void {
    this.dataSource = new SignalHandoverDataSource(this.store, this.injector);
  }

  refreshFeed(): void {
    this.store.reload();
  }
}
