import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboarComponent } from '../dashboar/dashboar.component';
import { TitleComponent } from '../title/title.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    DashboarComponent,
    TitleComponent,
    HeaderComponent,
    SidebarComponent,
    TableComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
