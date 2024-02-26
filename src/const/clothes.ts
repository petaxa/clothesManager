export type Clothes = {
    id: number;
    path: string;
    season: 1 | 2 | 3 | 4;
    usagePlace: 1 | 2;
    clothingLayer: 1 | 2 | 3;
    clothingSection: 1 | 2 | 3 | 4;
    isSportswear: boolean;
    pairingId: null | number;
    isHangingNeeded: boolean;
};

export const season = {
    1: {
        displayText: "夏",
    },
    2: {
        displayText: "冬",
    },
    3: {
        displayText: "春秋",
    },
    4: {
        displayText: "オールシーズン",
    },
} as const;

export const usagePlace = {
    1: {
        displayText: "部屋着",
    },
    2: {
        displayText: "外着",
    },
} as const;

export const clothingLayer = {
    1: {
        displayText: "アウターレイヤー",
    },
    2: {
        displayText: "ミッドレイヤー",
    },
    3: {
        displayText: "インナーレイヤー",
    },
} as const;

export const clothingSection = {
    1: {
        displayText: "トップス",
    },
    2: {
        displayText: "ボトムス",
    },
    3: {
        displayText: "靴下",
    },
    4: {
        displayText: "ブランケット",
    },
};

export const isSportswear = {
    1: {
        displayText: "スポーツ用",
    },
    0: {
        displayText: "非スポーツ用",
    },
};
export const isHangingNeeded = {
    1: {
        displayText: "ハンガー必要",
    },
    0: {
        displayText: "ハンガー不要",
    },
};
