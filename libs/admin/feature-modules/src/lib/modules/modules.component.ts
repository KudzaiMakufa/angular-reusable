import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Subscription} from "rxjs";
import {LayoutService} from "../../../../../shared/ui/src/lib/layout/service/app.layout.service";

@Component({
    selector: 'app-modules',
    templateUrl: './modules.component.html',
    styleUrls: ['./modules.component.css'],
})
export class ModulesComponent {
    items!: MenuItem[];



    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor( public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {

        });
    }

    ngOnInit() {


        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }



    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
