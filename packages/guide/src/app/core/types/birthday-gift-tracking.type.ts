export type BirthdayGiftTracking = {
    selectedGiftId: string | null;
    given: boolean;
    date: string; // ISO date string to track which day this is for
}

export type BirthdayGiftsData = Record<string, BirthdayGiftTracking>; // key is npcKey
