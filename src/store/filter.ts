import { Ref, ref } from "vue";

/**
 * 絞り込み初期条件
 */
export const initialTerm: Term = {
    id: {
        isActived: false,
        value: 0,
    },
    season: {
        isActived: false,
        1: false,
        2: false,
        3: false,
        4: false,
    },
    usagePlace: {
        isActived: false,
        1: false,
        2: false,
    },
    clothingLayer: {
        isActived: false,
        1: false,
        2: false,
        3: false,
    },
    clothingSection: {
        isActived: false,
        1: false,
        2: false,
        3: false,
        4: false,
    },
    isSportswear: {
        isActived: false,
        value: false,
    },
    pairingId: {
        isActived: false,
        value: 0,
    },
    isHangingNeeded: {
        isActived: false,
        value: false,
    },
};

// 絞りこみ関係の状態を管理する
// 画面上の絞り込み条件を操作するときはtermsByKeypadsを操作、terms自体を操作したいときはtermsにTermオブジェクトを追加する
export const termsByKeypads: Ref<Term> = ref(structuredClone(initialTerm));
export const terms: Ref<Term[]> = ref([termsByKeypads.value]);

/**
 * 条件をすべて初期状態に戻す
 */
export const initFilter = () => {
    termsByKeypads.value = structuredClone(initialTerm);
    terms.value = [termsByKeypads.value];
};

/**
 * 絞り込み条件の型
 */
export type Term = {
    id: {
        isActived: boolean;
        value: number;
    };
    season: {
        isActived: boolean;
        1: boolean;
        2: boolean;
        3: boolean;
        4: boolean;
    };
    usagePlace: {
        isActived: boolean;
        1: boolean;
        2: boolean;
    };
    clothingLayer: {
        isActived: boolean;
        1: boolean;
        2: boolean;
        3: boolean;
    };
    clothingSection: {
        isActived: boolean;
        1: boolean;
        2: boolean;
        3: boolean;
        4: boolean;
    };
    isSportswear: {
        isActived: boolean;
        value: boolean;
    };
    pairingId: {
        isActived: boolean;
        value: number;
    };
    isHangingNeeded: {
        isActived: boolean;
        value: boolean;
    };
};
