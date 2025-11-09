export const AvailableLanguages = ['de', 'es', 'fr', 'id', 'ja', 'zh-CN', 'ko', 'pt-BR', 'th-TH', 'en'] as const;

export type AvailableLanguage = typeof AvailableLanguages[number];

export const AvailableLanguageDisplayName: Record<AvailableLanguage, string> = {
    de: 'german',
    en: 'english',
    id: 'indonesian',
    fr: 'french',
    es: 'spanish',
    ja: 'japanese',
    "zh-CN": 'chinese simplified',
    ko: 'korean',
    "pt-BR": 'brazilian portuguese',
    'th-TH': 'thai'
} as const
