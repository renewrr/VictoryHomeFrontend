import { Component, inject } from '@angular/core';
import { MobileToolbar } from '../../components/mobile-toolbar/mobile-toolbar';
import { MainToolbarV2 } from '../../components/main-toolbar-v2/main-toolbar-v2';
import { LayoutService } from '../../services/layout-service';

@Component({
  selector: 'app-top-toolbar',
  imports: [MobileToolbar, MainToolbarV2],
  templateUrl: './top-toolbar.html',
  styleUrl: './top-toolbar.scss',
})
export class TopToolbar {
  protected layout = inject(LayoutService);
}
