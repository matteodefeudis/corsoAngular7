import { NgModule } from '@angular/core';
import { EvidenziaDirective } from './evidenzia.directive';
import { LoopDirective } from './loop.directive';

const directive = [EvidenziaDirective, LoopDirective];

@NgModule({
    declarations: directive,
    exports: directive
})
export class DirectivesModule {}