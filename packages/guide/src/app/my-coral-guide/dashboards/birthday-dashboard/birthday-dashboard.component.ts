import { Component, inject, input, output, ViewEncapsulation } from '@angular/core';
import { BirthdayDashboardEntry, MinimalItem, UiIcon } from "@ci/data-types";
import { AddSpacesToPascalCasePipe } from "../../../shared/pipes/add-spaces-to-pascal-case.pipe";
import { UiIconComponent } from "../../../shared/components/ui-icon/ui-icon.component";
import { RouterLink } from "@angular/router";
import { ItemIconComponent } from "../../../shared/components/item-icon/item-icon.component";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatOptgroup, MatOption, MatSelect } from "@angular/material/select";
import { MatCheckbox } from "@angular/material/checkbox";
import { UserDataService } from "../../../core/services/user-data.service";
import { BirthdayGiftTracking } from "../../../core/types/birthday-gift-tracking.type";

@Component({
    selector: 'app-birthday-dashboard',
    imports: [
        AddSpacesToPascalCasePipe,
        UiIconComponent,
        RouterLink,
        ItemIconComponent,
        MatFormField,
        MatLabel,
        MatSelect,
        MatOption,
        MatOptgroup,
        MatCheckbox
    ],
    templateUrl: './birthday-dashboard.component.html',
    styleUrl: './birthday-dashboard.component.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        'class': 'flex flex-col gap-3'
    }
})
export class BirthdayDashboardComponent {
    birthdays = input.required<BirthdayDashboardEntry[]>()
    currentDate = input.required<string>(); // ISO date string for tracking
    itemClicked = output<MinimalItem>()
    protected readonly UiIcon = UiIcon;
    protected readonly uiIcon = UiIcon;
    protected readonly userDataService = inject(UserDataService);

    getGiftTracking(npcKey: string): BirthdayGiftTracking | undefined {
        return this.userDataService.currentData().birthdayGifts?.[npcKey];
    }

    selectGift(npcKey: string, giftId: string): void {
        const userData = this.userDataService.currentData();
        if (!userData.birthdayGifts) {
            userData.birthdayGifts = {};
        }
        userData.birthdayGifts[npcKey] = {
            selectedGiftId: giftId,
            given: false,
            date: this.currentDate()
        };
        this.userDataService.save();
    }

    toggleGiftGiven(npcKey: string): void {
        const userData = this.userDataService.currentData();
        if (userData.birthdayGifts?.[npcKey]) {
            userData.birthdayGifts[npcKey].given = !userData.birthdayGifts[npcKey].given;
            this.userDataService.save();
        }
    }

    getSelectedGiftId(npcKey: string): string | null {
        const tracking = this.getGiftTracking(npcKey);
        // Reset if date doesn't match
        if (tracking && tracking.date !== this.currentDate()) {
            return null;
        }
        return tracking?.selectedGiftId || null;
    }

    isGiftGiven(npcKey: string): boolean {
        const tracking = this.getGiftTracking(npcKey);
        // Reset if date doesn't match
        if (tracking && tracking.date !== this.currentDate()) {
            return false;
        }
        return tracking?.given || false;
    }
}
