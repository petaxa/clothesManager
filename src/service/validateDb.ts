import jsonData from "@/assets/db.json";
import { Clothes } from "@/const/clothes";
import { ClothesSets } from "@/const/clothesSets";

type SafetyJsonData = {
    clothes: Clothes[];
    clothesSets: ClothesSets[];
};

export const getDbData = () => {
    // jsonDataのバリデーションを行い、型安全にして返す

    // clothesテーブル
    const clothes = jsonData.clothes;
    clothes.forEach((item) => {
        if (!validateClothesId(item.id)) {
            throw new Error("invalid clothes id");
        }
        if (!validateClothesPath(item.path)) {
            throw new Error("invalid clothes path");
        }
        if (!validateClothesSeason(item.season)) {
            throw new Error("invalid clothes season");
        }
        if (!validateClothesUsagePlace(item.usagePlace)) {
            throw new Error("invalid clothes usagePlace");
        }
        if (!validateClothesClothingLayer(item.clothingLayer)) {
            throw new Error("invalid clothes clothingLayer");
        }
        if (!validateClothesClothingSection(item.clothingSection)) {
            throw new Error("invalid clothes clothingSection");
        }
        if (!validateClothesIsSportswear(item.isSportswear)) {
            throw new Error("invalid clothes isSportswear");
        }
        if (!validateClothesPairingId(item.pairingId)) {
            throw new Error("invalid clothes pairingId");
        }
        if (!validateClothesIsHangingNeeded(item.isHangingNeeded)) {
            throw new Error("invalid clothes isHangingNeeded");
        }
    });

    // clothingSetsテーブル
    const clothingSets = jsonData.clothingSets;
    clothingSets.forEach((item) => {
        if (!validateClothesSetsId(item.id)) {
            throw new Error("invalid clothesSets id");
        }
        if (!validateClothesSetsSetId(item.setId)) {
            throw new Error("invalid clothesSets setId");
        }
        if (!validateClothesSetsClothesId(item.clothesId)) {
            throw new Error("invalid clothesSets clothesId");
        }
    });

    // 全て検査し終わったら
    return jsonData as unknown as SafetyJsonData;
};

const validateClothesId = (id: number) => {
    return typeof id === "number";
};

const validateClothesPath = (path: string) => {
    return typeof path === "string";
};
const validateClothesSeason = (season: number) => {
    return season === 1 || season === 2 || season === 3 || season === 4;
};
const validateClothesUsagePlace = (usagePlace: number) => {
    return usagePlace === 1 || usagePlace === 2;
};
const validateClothesClothingLayer = (clothingLayer: number) => {
    return clothingLayer === 1 || clothingLayer === 2 || clothingLayer === 3;
};
const validateClothesClothingSection = (clothingSection: number) => {
    return (
        clothingSection === 1 ||
        clothingSection === 2 ||
        clothingSection === 3 ||
        clothingSection === 4
    );
};
const validateClothesIsSportswear = (isSportswear: boolean) => {
    return typeof isSportswear === "boolean";
};
const validateClothesPairingId = (pairingId: null | number) => {
    return typeof pairingId === "number" || pairingId === null;
};
const validateClothesIsHangingNeeded = (isHangingNeeded: boolean) => {
    return typeof isHangingNeeded === "boolean";
};

// clothesSetsテーブル
const validateClothesSetsId = (id: number) => {
    return typeof id === "number";
};
const validateClothesSetsSetId = (setId: number) => {
    return typeof setId === "number";
};
const validateClothesSetsClothesId = (clothesId: number) => {
    return typeof clothesId === "number";
};
