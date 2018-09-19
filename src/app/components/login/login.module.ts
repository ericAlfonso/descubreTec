import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {RouterModule} from '@angular/router';
import { ChoisenComponent } from '../choisen/choisen.component';
import { SelectionModule } from '../selection/selection.module';
import { ChoisenModule } from '../choisen/choisen.module';
import { WelcomeModule} from '../welcome/welcome.module';
import { WelcomeComponent} from '../welcome/welcome.component';
import {ProgrammerModule} from '../programmer/programmer.module';
import {ProgrammerComponent} from '../programmer/programmer.component';
import {ImageTwoModule} from '../image-two/image-two.module';
import {ImageTwoComponent} from '../image-two/image-two.component';
import {ImageThreeModule} from '../image-three/image-three.module';
import {ImageThreeComponent} from '../image-three/image-three.component';
import {WriteModule} from '../write/write.module';
import {WriteComponent} from '../write/write.component';
import {GraphModule} from '../graph/graph.module';
import {GraphComponent} from '../graph/graph.component';
import {DocModule} from '../doc/doc.module';
import {DocComponent} from '../doc/doc.component';
import {DocTwoModule} from '../doc-two/doc-two.module';
import {DocTwoComponent} from '../doc-two/doc-two.component';
import {GraphDocModule} from '../graph-doc/graph-doc.module';
import {GraphDocComponent} from '../graph-doc/graph-doc.component';
import {ImageNoOneModule} from '../image-no-one/image-no-one.module';
import {ImageNoOneComponent} from '../image-no-one/image-no-one.component';
import {GraphNoModule} from '../graph-no/graph-no.module';
import {GraphNoComponent} from '../graph-no/graph-no.component';

export const routes = [{
        path: '', component: LoginComponent
    }, {
        path: 'choisen', component: ChoisenComponent
    },
        {
        path: 'welcome', component: WelcomeComponent
    }, {
        path: 'programmer', component: ProgrammerComponent,
    }, {
        path: 'image-two', component: ImageTwoComponent
    }, {
        path: 'image-three',component: ImageThreeComponent,
    }, {
        path: 'write',component: WriteComponent
    }, {
        path: 'graph',component: GraphComponent
    }, {
        path: 'doc',component: DocComponent
    }, {
        path: 'doc-two',component: DocTwoComponent
    }, {
        path: 'graph-doc',component: GraphDocComponent
    }, {
        path: 'image-no-one',component: ImageNoOneComponent
    }, {
        path: 'graph-no',component: GraphNoComponent
}];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), SelectionModule, ChoisenModule, 
            WelcomeModule, ProgrammerModule, ImageTwoModule, ImageThreeModule, WriteModule, GraphModule, DocModule, DocTwoModule, GraphDocModule, ImageNoOneModule,
        GraphNoModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})



export class LoginModule {
    static routes = routes;
}
