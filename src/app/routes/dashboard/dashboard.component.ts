import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MtxGrid, MtxGridColumn } from '@ng-matero/extensions/grid';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}
  @ViewChild('grid') grid!: MtxGrid;

  columns: MtxGridColumn[] = [
    { header: 'Name', field: 'name' },
    { header: 'Weight', field: 'weight' },
    { header: 'Gender', field: 'gender' },
    { header: 'Mobile', field: 'mobile' },
    { header: 'City', field: 'city' },
  ];



  columnPinnable = false;
  columnSortable = true;
  columnHideable = true;
  columnHideableChecked: 'show' | 'hide' = 'show';

  closeMenu() {
    this.grid.columnMenu.menuTrigger.closeMenu();
  }

  log(e: any) {
    console.log(e);
  }
}
