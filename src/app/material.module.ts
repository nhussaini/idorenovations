import { NgModule } from '@angular/core';
import {MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgbModule],
  exports: [MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgbModule],
})
export class MaterialModule { }
