import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isSidebarCollapsed = new BehaviorSubject<boolean>(false);
  sidebarState = this.isSidebarCollapsed.asObservable();

  toggleSidebar() {
    this.isSidebarCollapsed.next(!this.isSidebarCollapsed.value);
  }

  constructor() {}
}
