import { NgModule } from '@angular/core';
import { PercentualePipe } from './percentuale.pipe';
import { IfNullPipe } from './ifnull.pipe';

const pipes = [PercentualePipe, IfNullPipe]

@NgModule({
    declarations : pipes,
    exports : pipes
})
export class PipesModule {}