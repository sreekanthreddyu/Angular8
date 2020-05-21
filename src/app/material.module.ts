import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule,MatNativeDateModule,
  MatCheckboxModule, MatSidenavModule,
   MatToolbarModule,MatProgressSpinnerModule,
  MatListModule, MatTabsModule,
  MatCardModule,MatSelectModule,
MatDialogModule,MatTableModule,
MatSortModule,MatPaginatorModule,
MatSnackBarModule} from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  exports:[MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
MatDatepickerModule,
MatNativeDateModule,
MatCheckboxModule,
MatSidenavModule,
MatToolbarModule,
MatListModule,
MatTabsModule,
MatCardModule,
MatSelectModule,
MatProgressSpinnerModule,
MatDialogModule,
MatTableModule,
MatSortModule,
MatPaginatorModule,
MatSnackBarModule]
})
export class MaterialModule { }
