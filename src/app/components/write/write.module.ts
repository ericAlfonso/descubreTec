import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteComponent } from './write.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule],
    declarations: [WriteComponent],
    exports: [WriteComponent]
})



export class WriteModule { }
