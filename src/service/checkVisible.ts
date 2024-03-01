import { Clothes } from "@/const/clothes";
import { Term } from "@/store/filter";

/**
 * clohtesの表示可否を判断する
 * @param item
 * @returns
 */
export const isShowItem = (item: Clothes, term: Term) => {
    // TODO: MとCが混同している。filterの状態に関する情報は引数でもらう
    // 1つでも非表示となる条件があれば表示しない

    const isMatchId = checkVisibleById(item, term);
    const isMatchSeason = checkVisibleBySeason(item, term);
    const isMatchUsagePlace = checkVisibleByUsagePlace(item, term);
    const isMatchClothingLayer = checkVisibleByClothingLayer(item, term);
    const isMatchClothingSection = checkVisibleByClothingSection(item, term);
    const isMatchIsSportswear = checkVisibleByIsSportswear(item, term);
    const isMatchPairingId = checkVisibleByPairingId(item, term);
    const isMatchIsHangingNeeded = checkVisibleByIsHangingNeeded(item, term);

    const isShown =
        isMatchId &&
        isMatchSeason &&
        isMatchUsagePlace &&
        isMatchClothingLayer &&
        isMatchClothingSection &&
        isMatchIsSportswear &&
        isMatchPairingId &&
        isMatchIsHangingNeeded;

    return isShown;
};

/**
 * itemをidの観点で表示してよいかチェックする
 * @param item
 * @return true: 表示, false: 非表示
 */
const checkVisibleById = (item: Clothes, term: Term) => {
    return term.id.isActived ? item.id === term.id.value : true;
};

/**
 * itemをseasonの観点で表示してよいかチェックする
 * @param item
 * @return true: 表示, false: 非表示
 */
const checkVisibleBySeason = (item: Clothes, term: Term) => {
    if (term.season.isActived) {
        return term.season[item.season];
    }
    return true;
};

/**
 * itemをusagePlaceの観点で表示してよいかチェックする
 * @param item
 * @return true: 表示, false: 非表示
 */
const checkVisibleByUsagePlace = (item: Clothes, term: Term) => {
    if (term.usagePlace.isActived) {
        return term.usagePlace[item.usagePlace];
    }
    return true;
};

/**
 * itemをclothingLayerの観点で表示してよいかチェックする
 * @param item
 * @return true: 表示, false: 非表示
 */
const checkVisibleByClothingLayer = (item: Clothes, term: Term) => {
    if (term.clothingLayer.isActived) {
        return term.clothingLayer[item.clothingLayer];
    }
    return true;
};

/**
 * itemをclothingSectionの観点で表示してよいかチェックする
 * @param item
 * @return true: 表示, false: 非表示
 */
const checkVisibleByClothingSection = (item: Clothes, term: Term) => {
    if (term.clothingSection.isActived) {
        return term.clothingSection[item.clothingSection];
    }
    return true;
};

/**
 * itemをclothingSectionの観点で表示してよいかチェックする
 * @param item
 * @return true: 表示, false: 非表示
 */
const checkVisibleByIsSportswear = (item: Clothes, term: Term) => {
    return term.isSportswear.isActived
        ? item.isSportswear === term.isSportswear.value
        : true;
};

const checkVisibleByPairingId = (item: Clothes, term: Term) => {
    return term.pairingId.isActived
        ? item.pairingId === term.pairingId.value
        : true;
};

const checkVisibleByIsHangingNeeded = (item: Clothes, term: Term) => {
    return term.isHangingNeeded.isActived
        ? item.isHangingNeeded === term.isHangingNeeded.value
        : true;
};
