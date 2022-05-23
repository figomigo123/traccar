import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ComparisonComponent } from './image-comparsion-hori.component'

@NgModule({
    declarations: [ComparisonComponent],
    exports: [ComparisonComponent],
    imports: [CommonModule]
})
export class ComparisonModule { }
