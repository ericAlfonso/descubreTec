import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammerComponent } from './programmer.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule],
    declarations: [ProgrammerComponent],
    exports: [ProgrammerComponent]
})



export class ProgrammerModule { }
