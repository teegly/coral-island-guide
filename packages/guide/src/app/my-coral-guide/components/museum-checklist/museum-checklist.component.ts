import { Component, inject } from '@angular/core';
import { MuseumChecklistService } from "../../../core/services/checklists/museum-checklist.service";
import { BaseItemChecklistComponent } from "../base-item-checklist.component";
import { ListDetailContainerComponent } from "../../../shared/components/list-detail-container/list-detail-container.component";
import { DatabaseItemDetailsComponent } from "../../../shared/components/database-item-details/database-item-details.component";
import { FishComponent } from "../../../shared/components/database-item-details/fish/fish.component";
import { InsectComponent } from "../../../shared/components/database-item-details/insect/insect.component";
import { ShopProcessingResultComponent } from "../../../shared/components/database-item-details/shop-processing-result/shop-processing-result.component";
import { AsyncPipe, KeyValuePipe } from "@angular/common";
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import { ItemIconComponent } from "../../../shared/components/item-icon/item-icon.component";
import { MatCheckbox } from "@angular/material/checkbox";
import { ReactiveFormsModule } from "@angular/forms";
import { OfferingChecklistService } from "../../../core/services/checklists/offering-checklist.service";
import { FishCaughtChecklistService } from "../../../core/services/checklists/fish-caught-checklist.service";
import { InsectsCaughtChecklistService } from "../../../core/services/checklists/insects-caught-checklist.service";
import { SeaCrittersCaughtChecklistService } from "../../../core/services/checklists/sea-critters-caught-checklist.service";
import { ItemStatusBadgesComponent, ItemStatusConfig } from "../../../shared/components/item-status-badges/item-status-badges.component";
import { MinimalItem } from "@ci/data-types";

@Component({
    selector: 'app-museum-checklist',
    templateUrl: './museum-checklist.component.html',

    imports: [
        ListDetailContainerComponent,
        DatabaseItemDetailsComponent,
        FishComponent,
        InsectComponent,
        ShopProcessingResultComponent,
        AsyncPipe,
        MatTabGroup,
        MatTab,
        ItemIconComponent,
        MatCheckbox,
        KeyValuePipe,
        ReactiveFormsModule,
        ItemStatusBadgesComponent
    ]
})
export class MuseumChecklistComponent extends BaseItemChecklistComponent {
    checklistService = inject(MuseumChecklistService);
    checklistDefinition$ = this._database.fetchMuseumChecklist$();

    private readonly offeringChecklistService = inject(OfferingChecklistService);
    private readonly fishCaughtChecklistService = inject(FishCaughtChecklistService);
    private readonly insectsCaughtChecklistService = inject(InsectsCaughtChecklistService);
    private readonly seaCrittersCaughtChecklistService = inject(SeaCrittersCaughtChecklistService);

    constructor() {
        super();
    }

    getItemStatus(entry: MinimalItem, tabKey: string): ItemStatusConfig {
        const itemKey = entry.id;
        
        // Determine which caught checklist to use based on tab key
        let isCaught = false;
        const lowerTabKey = tabKey.toLowerCase();
        if (lowerTabKey.includes('fish')) {
            isCaught = this.fishCaughtChecklistService.isChecked(itemKey);
        } else if (lowerTabKey.includes('insect') || lowerTabKey.includes('bug')) {
            isCaught = this.insectsCaughtChecklistService.isChecked(itemKey);
        } else if (lowerTabKey.includes('ocean') || lowerTabKey.includes('critter')) {
            isCaught = this.seaCrittersCaughtChecklistService.isChecked(itemKey);
        }

        return {
            isInMuseum: this.checklistService.isChecked(itemKey),
            isInOfferings: this.offeringChecklistService.isChecked(itemKey),
            isCaught: isCaught
        };
    }
}
