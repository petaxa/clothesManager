<script setup lang="ts">
import { computed, ref } from 'vue';
import { isShowItem } from '@/service/checkVisible'
import { getDbData } from '@/service/validateDb'
import * as clothesConst from '@/const/clothes'
import { Clothes } from '@/const/clothes';
import { Term, initFilter, initialTerm, terms, termsByKeypads } from '@/store/filter';

// 表示アイテムをカウント
const visibleCount = computed(() => clothes.filter(cloth => isShowItemDisplay(cloth, terms.value)).length)

// DBの服のデータを取得
const clothes = getDbData().clothes

// クリック時発火関数
// KeyPads絞り込みボタン
// Season
const clickSeasonFilter = (identifier: Clothes['season']) => {
  // 絞り込み条件を更新する
  const visible = termsByKeypads.value.season[identifier]
  termsByKeypads.value.season[identifier] = !visible
}
// usagePlace
const clickUsagePlaceFilter = (identifier: Clothes['usagePlace']) => {
  // 絞り込み条件を更新する
  const visible = termsByKeypads.value.usagePlace[identifier]
  termsByKeypads.value.usagePlace[identifier] = !visible
}
// clothingLayer
const clickClothingLayerFilter = (identifier: Clothes['clothingLayer']) => {
  // 絞り込み条件を更新する
  const visible = termsByKeypads.value.clothingLayer[identifier]
  termsByKeypads.value.clothingLayer[identifier] = !visible
}
// clothingSection
const clickClothingSectionFilter = (identifier: Clothes['clothingSection']) => {
  // 絞り込み条件を更新する
  const visible = termsByKeypads.value.clothingSection[identifier]
  termsByKeypads.value.clothingSection[identifier] = !visible
}

// Boxの中身一覧表示ボタン
// シーズンオフ(夏)Box
const clickSeasonOffSummerBoxFilter = () => {
  // 条件をクリア
  initFilter()

  // season: 夏, 春秋
  termsByKeypads.value.season['isActived'] = true
  termsByKeypads.value.season[1] = true
  termsByKeypads.value.season[3] = true
  // isSportswear: 非スポーツ用
  termsByKeypads.value.isSportswear['isActived'] = true
  termsByKeypads.value.isSportswear['value'] = false
  // isHangingNeeded: ハンガー不要
  termsByKeypads.value.isHangingNeeded['isActived'] = true
  termsByKeypads.value.isHangingNeeded['value'] = false
}
// シーズンオフ(冬)Box
const clickSeasonOffWinterBoxFilter = () => {
  // 条件をクリア
  initFilter()

  // season: 冬
  termsByKeypads.value.season['isActived'] = true
  termsByKeypads.value.season[2] = true
  // isSportswear: 非スポーツ用
  termsByKeypads.value.isSportswear['isActived'] = true
  termsByKeypads.value.isSportswear['value'] = false
  // isHangingNeeded: ハンガー不要
  termsByKeypads.value.isHangingNeeded['isActived'] = true
  termsByKeypads.value.isHangingNeeded['value'] = false
}
// 部屋着(夏)Box
const clickRoomwearSummerBoxFilter = () => {
  // 条件をクリア
  initFilter()

  // season: 夏, 春秋
  termsByKeypads.value.season['isActived'] = true
  termsByKeypads.value.season[1] = true
  termsByKeypads.value.season[3] = true
  // usagePlace: 部屋
  termsByKeypads.value.usagePlace['isActived'] = true
  termsByKeypads.value.usagePlace[1] = true
  // isSportswear: 非スポーツ用
  termsByKeypads.value.isSportswear['isActived'] = true
  termsByKeypads.value.isSportswear['value'] = false
  // isHangingNeeded: ハンガー不要
  termsByKeypads.value.isHangingNeeded['isActived'] = true
  termsByKeypads.value.isHangingNeeded['value'] = false
}
// 部屋着(冬)Box
const clickRoomwearWinterBoxFilter = () => {
  // 条件をクリア
  initFilter()

  // season: 冬
  termsByKeypads.value.season['isActived'] = true
  termsByKeypads.value.season[2] = true
  // usagePlace: 部屋
  termsByKeypads.value.usagePlace['isActived'] = true
  termsByKeypads.value.usagePlace[1] = true
  // isSportswear: 非スポーツ用
  termsByKeypads.value.isSportswear['isActived'] = true
  termsByKeypads.value.isSportswear['value'] = false
  // isHangingNeeded: ハンガー不要
  termsByKeypads.value.isHangingNeeded['isActived'] = true
  termsByKeypads.value.isHangingNeeded['value'] = false
}
// 外行き(夏)Box
const clickOutdoorwearSummerBoxFilter = () => {
  // 条件をクリア
  initFilter()

  // season: 夏, 春秋
  termsByKeypads.value.season['isActived'] = true
  termsByKeypads.value.season[1] = true
  termsByKeypads.value.season[3] = true
  // usagePlace: 外
  termsByKeypads.value.usagePlace['isActived'] = true
  termsByKeypads.value.usagePlace[2] = true
  // isSportswear: 非スポーツ用
  termsByKeypads.value.isSportswear['isActived'] = true
  termsByKeypads.value.isSportswear['value'] = false
  // isHangingNeeded: ハンガー不要
  termsByKeypads.value.isHangingNeeded['isActived'] = true
  termsByKeypads.value.isHangingNeeded['value'] = false
}
// 外行き(冬)Box
const clickOutdoorwearWinterBoxFilter = () => {
  // 条件をクリア
  initFilter()

  // season: 冬
  termsByKeypads.value.season['isActived'] = true
  termsByKeypads.value.season[2] = true
  // usagePlace: 外
  termsByKeypads.value.usagePlace['isActived'] = true
  termsByKeypads.value.usagePlace[2] = true
  // isSportswear: 非スポーツ用
  termsByKeypads.value.isSportswear['isActived'] = true
  termsByKeypads.value.isSportswear['value'] = false
  // isHangingNeeded: ハンガー不要
  termsByKeypads.value.isHangingNeeded['isActived'] = true
  termsByKeypads.value.isHangingNeeded['value'] = false
}
// スポーツ用Box
const clickSportswearBoxFilter = () => {
  // 条件をクリア
  initFilter()

  // isSportswear: スポーツ用
  termsByKeypads.value.isSportswear['isActived'] = true
  termsByKeypads.value.isSportswear['value'] = true
  // isHangingNeeded: ハンガー不要
  termsByKeypads.value.isHangingNeeded['isActived'] = true
  termsByKeypads.value.isHangingNeeded['value'] = false
}
// 靴下Box
const clickSoxBoxFilter = () => {
  // 条件をクリア
  initFilter()

  // clothingSection: 靴下, ブランケット
  termsByKeypads.value.clothingSection['isActived'] = true
  termsByKeypads.value.clothingSection[3] = true
  termsByKeypads.value.clothingSection[4] = true
  // isSportswear: 非スポーツ用
  termsByKeypads.value.isSportswear['isActived'] = true
  termsByKeypads.value.isSportswear['value'] = false
  // isHangingNeeded: ハンガー不要
  termsByKeypads.value.isHangingNeeded['isActived'] = true
  termsByKeypads.value.isHangingNeeded['value'] = false
}
// ハンガーラック(夏)
const clickHangerBoxSummerFilter = () => {
  // 条件をクリア
  initFilter()

  // season: 夏, 春秋
  termsByKeypads.value.season['isActived'] = true
  termsByKeypads.value.season[1] = true
  termsByKeypads.value.season[3] = true
  // isSportswear: 非スポーツ用
  termsByKeypads.value.isSportswear['isActived'] = true
  termsByKeypads.value.isSportswear['value'] = false
  // isHangingNeeded: ハンガー必要
  termsByKeypads.value.isHangingNeeded['isActived'] = true
  termsByKeypads.value.isHangingNeeded['value'] = true
}
// ハンガーラック(冬)
const clickHangerBoxWinterFilter = () => {
  // 条件をクリア
  initFilter()

  // season: 冬
  termsByKeypads.value.season['isActived'] = true
  termsByKeypads.value.season[2] = true
  // isSportswear: 非スポーツ用
  termsByKeypads.value.isSportswear['isActived'] = true
  termsByKeypads.value.isSportswear['value'] = false
  // isHangingNeeded: ハンガー必要
  termsByKeypads.value.isHangingNeeded['isActived'] = true
  termsByKeypads.value.isHangingNeeded['value'] = true
}
// クローゼット(夏)
const clickClosetBoxSummerFilter = () => {
  // termsを空にする
  terms.value = []

  // season: 夏, 春秋 && isHangingNeeded: ハンガー必要
  const forSeason: Term = {
    ...structuredClone(initialTerm),
    season: {
      isActived: true,
      1: true,
      2: false,
      3: true,
      4: false
    },
    isHangingNeeded: {
      isActived: true,
      value: true
    }
  }
  // isSportswear: スポーツ用 && isHangingNeeded: ハンガー必要
  const forSports: Term = {
    ...initialTerm,
    isSportswear: {
      isActived: true,
      value: true
    },
    isHangingNeeded: {
      isActived: true,
      value: true
    }
  }

  terms.value.push(forSeason)
  terms.value.push(forSports)
}
// クローゼット(冬)
const clickClosetBoxWinterFilter = () => {
  // termsを空にする
  terms.value = []

  // season: 冬 && isHangingNeeded: ハンガー必要
  const forSeason: Term = {
    ...structuredClone(initialTerm),
    season: {
      isActived: true,
      1: false,
      2: true,
      3: false,
      4: false
    },
    isHangingNeeded: {
      isActived: true,
      value: true
    }
  }
  // isSportswear: スポーツ用 && isHangingNeeded: ハンガー必要
  const forSports: Term = {
    ...initialTerm,
    isSportswear: {
      isActived: true,
      value: true
    },
    isHangingNeeded: {
      isActived: true,
      value: true
    }
  }

  terms.value.push(forSeason)
  terms.value.push(forSports)
}

// 画面表示用表示可否判定関数
const isShowItemDisplay = (item: Clothes, terms: Term[]) => {
  let isShow = false;

  terms.forEach(term => {
    const isShowThisTerm = isShowItem(item, term)
    isShow = isShow || isShowThisTerm
  })
  return isShow
}

// KeypadFilterボタン配列
const keypadFilterButtons = ref([
  {
    title: "season",
    termsThisPart: termsByKeypads.value.season,
    buttonsArray: clothesConst.season,
    clickEventFunction: clickSeasonFilter
  },
  {
    title: "usagePlace",
    termsThisPart: termsByKeypads.value.usagePlace,
    buttonsArray: clothesConst.usagePlace,
    clickEventFunction: clickUsagePlaceFilter
  },
  {
    title: "clothingLayer",
    termsThisPart: termsByKeypads.value.clothingLayer,
    buttonsArray: clothesConst.clothingLayer,
    clickEventFunction: clickClothingLayerFilter
  },
  {
    title: "clothingSection",
    termsThisPart: termsByKeypads.value.clothingSection,
    buttonsArray: clothesConst.clothingSection,
    clickEventFunction: clickClothingSectionFilter
  }
])
// boxFilterボタン配列
const boxFilterButtons = ref([
  {
    title: "シーズンオフbox(夏)",
    clickEventFunction: clickSeasonOffSummerBoxFilter
  },
  {
    title: "シーズンオフbox(冬)",
    clickEventFunction: clickSeasonOffWinterBoxFilter
  },
  {
    title: "部屋着box(夏)",
    clickEventFunction: clickRoomwearSummerBoxFilter
  },
  {
    title: "部屋着box(冬)",
    clickEventFunction: clickRoomwearWinterBoxFilter
  },
  {
    title: "外行きbox(夏)",
    clickEventFunction: clickOutdoorwearSummerBoxFilter
  },
  {
    title: "外行きbox(冬)",
    clickEventFunction: clickOutdoorwearWinterBoxFilter
  },
  {
    title: "スポーツ用box",
    clickEventFunction: clickSportswearBoxFilter
  },
  {
    title: "靴下box",
    clickEventFunction: clickSoxBoxFilter
  },
  {
    title: "ハンガーラック(夏)",
    clickEventFunction: clickHangerBoxSummerFilter
  },
  {
    title: "ハンガーラック(冬)",
    clickEventFunction: clickHangerBoxWinterFilter
  },
  {
    title: "クローゼット(夏)",
    clickEventFunction: clickClosetBoxSummerFilter
  },
  {
    title: "クローゼット(冬)",
    clickEventFunction: clickClosetBoxWinterFilter
  },
])
</script>

<template>
  <!-- 絞り込み入力欄 -->
  <div class="filters">
    <!-- リセット -->
    <button @click="initFilter()">クリア</button>
    <!-- id -->
    <div class="filter">
      <p class="filter-title">id</p>
      <input class="filter-toggle-button" type="checkbox" v-model="termsByKeypads.id.isActived">
      <input class="filter-value-input" type="number" v-model="termsByKeypads.id.value">
    </div>
    <!-- pairingId -->
    <div class="filter">
      <p class="filter-title">pairingId</p>
      <input class="filter-toggle-button" type="checkbox" v-model="termsByKeypads.pairingId.isActived">
      <input class="filter-value-input" type="number" v-model="termsByKeypads.pairingId.value">
    </div>
    <!-- キーパッドでのフィルタリングボタン -->
    <div v-for="button in keypadFilterButtons" class="filter">
      <p class="filter-title">{{ button.title }}</p>
      <input class="filter-toggle-button" type="checkbox" v-model="button.termsThisPart.isActived">
      <button v-for="(value, key) in button.buttonsArray" @click="button.clickEventFunction(key)"
        :class="button.termsThisPart[key] ? 'selectedButton' : ''">
        {{ value.displayText }}
      </button>
    </div>
    <!-- isSportswear -->
    <div class="filter">
      <p class="filter-title">isSportswear</p>
      <input class="filter-toggle-button" type="checkbox" v-model="termsByKeypads.isSportswear.isActived">
      <select v-model="termsByKeypads.isSportswear.value">
        <option :value="true">スポーツ用</option>
        <option :value="false">非スポーツ用</option>
      </select>
    </div>
    <!-- isHangingNeeded -->
    <div class="filter">
      <p class="filter-title">isHangingNeeded</p>
      <input class="filter-toggle-button" type="checkbox" v-model="termsByKeypads.isHangingNeeded.isActived">
      <select v-model="termsByKeypads.isHangingNeeded.value">
        <option :value="true">ハンガー必要</option>
        <option :value="false">ハンガー不必要</option>
      </select>
    </div>
  </div>
  <div class="filters">
    <!-- boxFilterボタン -->
    <div v-for="button in boxFilterButtons" class="filter">
      <button @click="button.clickEventFunction">{{ button.title }}</button>
    </div>
  </div>

  <h2>{{ visibleCount }}</h2>
  <div class="items">
    <div v-for="item in clothes">
      <div v-if="isShowItemDisplay(item, terms)" class="item">
        <img class="item-image" :src="item.path">
        <div class="item-discript">
          <p>id: {{ item.id }}</p>
          <p>season: {{ clothesConst.season[item.season].displayText }}</p>
          <p>usagePlace: {{ clothesConst.usagePlace[item.usagePlace].displayText }}</p>
          <p>clothingLayer: {{ clothesConst.clothingLayer[item.clothingLayer].displayText }}</p>
          <p>clothingSection: {{ clothesConst.clothingSection[item.clothingSection].displayText }}</p>
          <p>isSportswear: {{ clothesConst.isSportswear[item.isSportswear ? 1 : 0].displayText }}</p>
          <p>pairingId: {{ item.pairingId ?? "null" }}</p>
          <p>isHangingNeeded: {{ clothesConst.isHangingNeeded[item.isHangingNeeded ? 1 : 0].displayText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
}

.filter {
  display: flex;
  margin: 10px;
}

.filter-title {
  font-size: large;
  margin: 0;
}

.filter-toggle-button {
  width: auto;
}

.filter-value-input {
  width: 5em;
  height: 1em;
}

.items {
  display: flex;
  flex-wrap: wrap;
}

.item {
  margin: 10px;
}

.item-image {
  height: 300px;
}

.selectedButton {
  border-color: #646cff
}
</style>
