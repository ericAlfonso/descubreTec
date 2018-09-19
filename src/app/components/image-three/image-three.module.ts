import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageThreeComponent } from './image-three.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [CommonModule],
    declarations: [ImageThreeComponent],
    exports: [ImageThreeComponent]
})



export class ImageThreeModule { }
