import { Component, computed, inject, Signal, viewChild, ViewEncapsulation } from '@angular/core';
import { DatabaseService } from "../../../shared/services/database.service";
import { NPC, UiIcon } from "@ci/data-types";
import { toSignal } from "@angular/core/rxjs-interop";
import { catchError, of } from "rxjs";
import { NpcFilterComponent } from "../../npc-filter/npc-filter.component";
import { filterNPCs } from "../../filter-npcs.function";
import { RouterLink } from "@angular/router";
import { UiIconComponent } from "../../../shared/components/ui-icon/ui-icon.component";
import { NpcHeadPortraitComponent } from "../../../shared/components/npc-head-portrait/npc-head-portrait.component";
import { IngameDatePipe } from "../../../shared/pipes/ingame-date.pipe";
import { NgClass } from "@angular/common";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { MatTooltip } from "@angular/material/tooltip";
import { UserDataService } from "../../../core/services/user-data.service";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: 'app-npc-list',
    templateUrl: './npc-list.component.html',
    styleUrls: ['./npc-list.component.scss'],
    encapsulation: ViewEncapsulation.None,

    imports: [
        RouterLink,
        NpcFilterComponent,
        UiIconComponent,
        NpcHeadPortraitComponent,
        IngameDatePipe,
        NgClass,
        MatProgressSpinner,
        MatTooltip,
        MatIcon
    ]
})
export class NpcListComponent {

    npcFilter = viewChild(NpcFilterComponent);
    protected readonly uiIcon = UiIcon;
    #searchValueChanges = computed(() => this.npcFilter()?.searchValueChanges() ?? '')
    #sortValueChanges = computed(() => this.npcFilter()?.sortValueChanges() ?? 'default')
    #filterNPCs = filterNPCs
    readonly #npcList: Signal<NPC[] | undefined>;
    protected readonly userDataService = inject(UserDataService);

    protected filteredAndSortedNpcs = computed(() => {

        let npcs = this.#npcList() ?? [];
        if (!this.#searchValueChanges || !this.#sortValueChanges) return npcs;
        const searchValue = this.#searchValueChanges().toLowerCase()
        const sortValue = this.#sortValueChanges()


        return this.#filterNPCs(npcs, searchValue, sortValue);


    })
    readonly #database = inject(DatabaseService)

    constructor() {
        this.#npcList = toSignal(this.#database.fetchNPCs$().pipe(
            catchError(() => of([]))
        ))
    }

    getHeartLevel(npcKey: string): number {
        return this.userDataService.currentData().npcHeartLevels?.[npcKey] || 0;
    }

    setHeartLevel(npcKey: string, level: number, event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        
        const userData = this.userDataService.currentData();
        if (!userData.npcHeartLevels) {
            userData.npcHeartLevels = {};
        }
        // Ensure level is between 0 and 10
        userData.npcHeartLevels[npcKey] = Math.max(0, Math.min(10, level));
        this.userDataService.save();
    }

    incrementHeartLevel(npcKey: string, event: Event): void {
        const currentLevel = this.getHeartLevel(npcKey);
        if (currentLevel < 10) {
            this.setHeartLevel(npcKey, currentLevel + 1, event);
        }
    }

    decrementHeartLevel(npcKey: string, event: Event): void {
        const currentLevel = this.getHeartLevel(npcKey);
        if (currentLevel > 0) {
            this.setHeartLevel(npcKey, currentLevel - 1, event);
        }
    }
}
