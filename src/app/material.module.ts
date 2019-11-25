import { NgModule } from '@angular/core';
import {MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';



@NgModule({
  imports: [MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  exports: [MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class MaterialModule { }
