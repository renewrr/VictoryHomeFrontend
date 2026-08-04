import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { SecondaryHandoverMessageResponseSecondaryHandoverMessageRow } from '../core/api-client-v2';
import { SecondaryStore } from './secondary-store';
import { Injector } from '@angular/core';

export class SignalHandoverDataSource extends DataSource<
  SecondaryHandoverMessageResponseSecondaryHandoverMessageRow | undefined
> {
  constructor(
    private store: SecondaryStore,
    private injector: Injector,
  ) {
    super();
  }

  connect(
    collectionViewer: CollectionViewer,
  ): Observable<(SecondaryHandoverMessageResponseSecondaryHandoverMessageRow | undefined)[]> {
    // Translate scroll viewport changes into pageIndex requests
    collectionViewer.viewChange.subscribe((range) => {
      const pageSize = this.store.pageSize();
      const targetPage = Math.floor(range.start / pageSize);
      this.store.requestPage(targetPage);
    });

    // Bridge signal to Observable for CDK compatibility
    return toObservable(this.store.displayList, { injector: this.injector });
  }

  disconnect(): void {}
}
