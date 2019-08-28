import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { BehaviorSubject, Observable } from 'rxjs';

import * as fromConstants from '../constants';

@Injectable()
export class MenuService {
  private _menuModules$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );

  constructor(private httpClient: NgxDhis2HttpClientService) {}

  getMenuModules(rootUrl: string): Observable<any> {
    return Observable.create(observer => {
      this.httpClient
        .get('dhis-web-commons/menu/getModules.action', { useRootUrl: true })
        .subscribe(
          (menuModuleResult: any) => {
            const sanitizedMenu = this._sanitizeMenuItems(
              menuModuleResult.modules,
              rootUrl
            );
            this._menuModules$.next(sanitizedMenu);
            observer.next(sanitizedMenu);
            observer.complete();
          },
          () => {
            observer.next(null);
            observer.complete();
          }
        );
    });
  }

  getSanitizedMenus() {
    return this._menuModules$.asObservable();
  }

  private _sanitizeMenuItems(menuItems: any[], rootUrl: string): any {
    const sanitizedMenuItems = menuItems.map((item: any) => {
      const newItem: any = { ...item };
      if (
        !newItem.hasOwnProperty('displayName') ||
        newItem.displayName === ''
      ) {
        newItem.displayName = newItem.name;
      }

      if (newItem.defaultAction.indexOf('http') === -1) {
        newItem.defaultAction = '../../' + newItem.defaultAction;
      }

      if (newItem.icon.indexOf('http') === -1) {
        newItem.icon = '../../' + newItem.icon;
      }

      newItem.onlyShowOnSearch = false;

      return newItem;
    });

    const predefinedMenuItems = fromConstants.PREDEFINED_MENU_ITEMS.map(
      (item: any) => {
        const newItem: any = { ...item };

        if (newItem.defaultAction) {
          newItem.defaultAction = rootUrl + newItem.defaultAction;
        }

        if (newItem.icon) {
          newItem.icon = rootUrl + newItem.icon;
        }
        return newItem;
      }
    );
    return [...sanitizedMenuItems, ...predefinedMenuItems];
  }
}
