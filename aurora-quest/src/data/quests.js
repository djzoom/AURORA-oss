// 题库入口与数值平衡。
// 生成脚本会把 1000 题抽样成一份战役，写入 quests.generated.js。
// 游戏机制在 ../app.js，渲染在 ../ui.js。

import { GENERATED_QUESTS, CAMPAIGN_ID_SOURCE } from "./quests.generated.js";

// 数值平衡：按难度给经验（E 热身 → A 专家），通关一章的奖励，以及每级所需经验。
export const XP_BY_TIER = { E: 10, D: 20, C: 30, B: 45, A: 60 };
export const XP_PER_PHASE_CLEAR = 60;
export const XP_PER_LEVEL = 120;

export const QUEST_CAMPAIGN_ID = CAMPAIGN_ID_SOURCE;
export const QUESTS = GENERATED_QUESTS;
