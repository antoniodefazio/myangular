import { Component, Input } from '@angular/core';

interface TableColumn {
  name: string;
  type: string;
  displayType: string;
}

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css']
})
export class ReusableTableComponent {
  @Input() columns: TableColumn[]=[];
  @Input() data: Array<any>=[];
}

