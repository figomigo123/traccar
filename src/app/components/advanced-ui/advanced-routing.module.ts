import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccordionComponent } from "./accordion/accordion.component";
import { BlogComponent } from "./blog/blog.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CollapseComponent } from "./collapse/collapse.component";
import { CountersComponent } from "./counters/counters.component";
import { ModalsComponent } from "./modals/modals.component";
import { RatingsComponent } from "./ratings/ratings.component";
import { SearchComponent } from "./search/search.component";
import { SweetAlertComponent } from "./sweet-alert/sweet-alert.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { UserlistComponent } from "./userlist/userlist.component";

const routes:Routes = [
    {path:'',
        children: [
            {
                path: 'accordion' , component: AccordionComponent
            },
            {
                path: 'blog' , component: BlogComponent
            },
            {
                path: 'carousel' , component: CarouselComponent
            },
            {
                path: 'collapse' , component: CollapseComponent
            },
            {
                path: 'counters' , component: CountersComponent
            },
            {
                path: 'modals' , component: ModalsComponent
            },
            {
                path: 'ratings' , component: RatingsComponent
            },
            {
                path: 'search' , component: SearchComponent
            },
            {
                path: 'sweet-alerts' , component: SweetAlertComponent
            },
            {
                path: 'timeline', component: TimelineComponent
            },
            {
                path: 'userlist' , component: UserlistComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class  AdvancedRoutingModule { }

