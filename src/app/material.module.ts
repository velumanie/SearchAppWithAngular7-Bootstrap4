import { NgModule } from '@angular/core';
import {MatInputModule, MatPaginatorModule,MatSortModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [MatInputModule, MatPaginatorModule,MatSortModule, MatTableModule],
  exports: [MatInputModule, MatPaginatorModule,MatSortModule, MatTableModule]
})
export class MaterialModule { }

