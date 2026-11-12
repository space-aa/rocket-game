// このプログラムの数値はすべてゲーム専用の架空ポイントです。
// 実在ロケットの性能計算・設計・飛行を再現するものではありません。

// ------------------------------
// 1. 言語設定
// ------------------------------
const translations = {
  ja: {
    designMode: "DESIGN ANALYSIS MODE",
    languageLabel: "言語",
    introEyebrow: "INVESTIGATE → DIAGNOSE → IMPROVE → COMPARE",
    heroTitle: "設計データから、ロケットの問題を読み解こう。",
    heroDescription: "提示された設計を分析し、問題の原因を考え、部品を変更して改善を目指そう。",
    availableBudget: "AVAILABLE BUDGET",
    budgetOver: "予算を超えています。部品を見直そう",
    budgetOK: "予算内で改善できます",
    caseEyebrow: "CASE FILE / 001",
    caseTitle: "探査ミッション用ロケットの設計評価",
    caseStatus: "DIAGNOSIS REQUIRED",
    caseDescription: "提出された設計データを確認し、ミッション条件を満たせない原因を調査してください。問題点を見つけたら、予算100 PT以内で改善案を作成しましょう。",
    caseObjectiveLabel: "INVESTIGATION OBJECTIVE",
    caseObjective: "速度変更能力の不足原因を調べ、設計を改善する",
    partsTitle: "設計部品を変更",
    partsIntro: "部品を選び直して、現在の設計を改善できます。",
    partsHint: "部品を変更すると、中央の設計図と右側の性能データが更新されます。",
    blueprintTitle: "診断対象の設計図",
    blueprintNote: "NOT TO SCALE · GAME MODEL",
    blueprintFooter: "部品の変更をリアルタイムで反映",
    metricsTitle: "設計パラメータ",
    metricsIntro: "このゲーム独自の評価値です。実際の工学単位ではありません。",
    thrust: "推進性能",
    structure: "構造バランス",
    fuel: "燃料余裕",
    delta: "速度変更能力",
    thrustHint: "上昇を支えるゲーム内指標",
    structureHint: "軽さと安定性を表すゲーム内指標",
    fuelHint: "ミッションを続ける余裕を表す指標",
    deltaHint: "目標条件への対応力を表す抽象指標",
    totalCost: "選択部品の合計費用",
    diagnoseButton: "⌕　設計を診断する",
    buttonNote: "診断後、部品を変更して再評価できます。",
    missionTitle: "今回の調査目標",
    missionGoalTitle: "設計上の弱点を特定しよう",
    missionDescription: "4つの評価項目を確認し、基準を下回る項目があれば、どの部品構成が関係しているか調べましょう。評価は学習用の簡略モデルです。",
    missionGoal: "DIAGNOSE<br> & IMPROVE",
    reportTitle: "設計診断レポート",
    comparisonTitle: "初期設計と現在の設計を比較",
    retryButton: "設計を変更して再診断する ↗",
    footerNote: "教育用ゲームモデル / 実在のロケット設計・飛行を再現するものではありません",
    partDetail: "ゲーム内評価パラメータ",
    engine: "エンジン",
    structurePart: "機体構造",
    tank: "燃料タンク",
    booster: "ブースター",
    caseIssue: "初期設計で基準未満の項目",
    noIssue: "現在の設計は、すべての評価基準を満たしています。",
    issueCount: "評価基準を下回る項目が {n} 件あります。",
    overBudget: "予算を {n} PT超過しています。部品構成を見直してください。",
    withinBudget: "予算内です。あと {n} PT 使用できます。",
    successHeading: "改善目標を達成しました！",
    failureHeading: "まだ改善できる項目があります",
    successText: "現在の設計は、4つのゲーム内評価基準と予算条件を満たしています。初期設計と比べて、どの数値が変化したか確認しましょう。",
    failureText: "基準を下回る項目や予算超過があります。診断内容を参考に部品を変更し、もう一度評価してみましょう。",
    initialLabel: "初期設計",
    currentLabel: "現在の設計",
    passed: "基準クリア",
    failed: "要改善",
    costMetric: "部品費用",
    causeTitle: "原因の手がかり",
    suggestionTitle: "改善のヒント",
    noCause: "評価基準を下回る項目はありません。",
    causeText: "{part} のゲーム内加算値は {value} です。このゲームの評価ルールでは、この部品の構成値が {metric} の数値に影響しています。",
    suggestion: "{part} など別の部品に変更した場合の数値を比べてみましょう。変更後は必ず再診断してください。",
    overBudgetCause: "選択部品の合計費用が予算を超えています。",
    compareUp: "初期設計から +{n}",
    compareDown: "初期設計から {n}",
    compareSame: "初期設計と同じ",
    reportReady: "DIAGNOSTIC COMPLETE",
    reportCaptionSuccess: "改善後の設計が、すべての条件を満たしました。",
    reportCaptionFailure: "診断結果を確認し、設計を見直してください。",
    metricThrust: "推進性能",
    metricStructure: "構造バランス",
    metricFuel: "燃料余裕",
    metricDelta: "速度変更能力",
    partNames: {
      "engine-basic": "標準エンジン",
      "engine-plus": "強化エンジン",
      "engine-efficient": "効率重視エンジン",
      "frame-standard": "標準フレーム",
      "frame-light": "軽量フレーム",
      "frame-reinforced": "補強フレーム",
      "tank-compact": "コンパクトタンク",
      "tank-standard": "標準タンク",
      "tank-large": "大容量タンク",
      "booster-none": "ブースターなし",
      "booster-small": "補助ブースター",
      "booster-pair": "強化ブースター"
    }
  },
  en: {
    designMode: "DESIGN ANALYSIS MODE",
    languageLabel: "Language",
    introEyebrow: "INVESTIGATE → DIAGNOSE → IMPROVE → COMPARE",
    heroTitle: "Read the problems hidden in a rocket design.",
    heroDescription: "Analyze the provided design, investigate possible causes, and improve it by changing components.",
    availableBudget: "AVAILABLE BUDGET",
    budgetOver: "Over budget. Review your components.",
    budgetOK: "Your design is within budget.",
    caseEyebrow: "CASE FILE / 001",
    caseTitle: "Design Review: Exploration Mission Vehicle",
    caseStatus: "DIAGNOSIS REQUIRED",
    caseDescription: "Review the submitted design data and investigate why it does not meet the mission conditions. Once you find an issue, propose an improvement within the 100 PT budget.",
    caseObjectiveLabel: "INVESTIGATION OBJECTIVE",
    caseObjective: "Find why the velocity-change rating is low and improve the design.",
    partsTitle: "Modify Design Components",
    partsIntro: "Choose different components to improve the current design.",
    partsHint: "Changing a component updates the blueprint and performance data.",
    blueprintTitle: "Design Under Review",
    blueprintNote: "NOT TO SCALE · GAME MODEL",
    blueprintFooter: "Component changes update in real time",
    metricsTitle: "Design Parameters",
    metricsIntro: "These are fictional game ratings, not real engineering units.",
    thrust: "Propulsion",
    structure: "Structural Balance",
    fuel: "Fuel Margin",
    delta: "Velocity Change",
    thrustHint: "Fictional rating supporting ascent",
    structureHint: "Fictional rating for mass and stability",
    fuelHint: "Fictional rating for mission endurance",
    deltaHint: "Abstract rating for meeting the target conditions",
    totalCost: "Total Component Cost",
    diagnoseButton: "⌕　Diagnose Design",
    buttonNote: "After diagnosis, change components and run another review.",
    missionTitle: "Investigation Objective",
    missionGoalTitle: "Identify the design weakness",
    missionDescription: "Review all four ratings. If a rating is below its target, investigate which component configuration may be related. This is a simplified educational game model.",
    missionGoal: "DIAGNOSE<br> & IMPROVE",
    reportTitle: "Design Diagnostic Report",
    comparisonTitle: "Compare Initial and Current Designs",
    retryButton: "Modify Design & Diagnose Again ↗",
    footerNote: "Educational game model / Does not reproduce real rocket design or flight",
    partDetail: "In-game rating parameter",
    engine: "ENGINE",
    structurePart: "STRUCTURE",
    tank: "FUEL TANK",
    booster: "BOOSTER",
    caseIssue: "Items below target in the initial design",
    noIssue: "The current design meets all rating targets.",
    issueCount: "{n} rating(s) are below target.",
    overBudget: "The design is {n} PT over budget. Review the component configuration.",
    withinBudget: "{n} PT remaining within the budget.",
    successHeading: "Improvement goals achieved!",
    failureHeading: "Some items still need improvement",
    successText: "The current design meets all four fictional rating targets and the budget condition. Review how the values changed from the initial design.",
    failureText: "Some ratings are below target or the budget is exceeded. Use the diagnostic notes to revise components and run another review.",
    initialLabel: "Initial Design",
    currentLabel: "Current Design",
    passed: "TARGET MET",
    failed: "REVIEW",
    costMetric: "Component Cost",
    causeTitle: "Diagnostic Clue",
    suggestionTitle: "Improvement Hint",
    noCause: "No rating is below its target.",
    causeText: "The in-game contribution of {part} is {value}. Under this game's rating rules, this component value affects {metric}.",
    suggestion: "Try comparing the result after switching to another component, such as {part}. Run the diagnosis again after making changes.",
    overBudgetCause: "The total cost of the selected components exceeds the budget.",
    compareUp: "+{n} from initial design",
    compareDown: "{n} from initial design",
    compareSame: "Same as initial design",
    reportReady: "DIAGNOSTIC COMPLETE",
    reportCaptionSuccess: "The improved design meets all conditions.",
    reportCaptionFailure: "Review the diagnostic report and revise the design.",
    metricThrust: "Propulsion",
    metricStructure: "Structural Balance",
    metricFuel: "Fuel Margin",
    metricDelta: "Velocity Change",
    partNames: {
      "engine-basic": "Standard Engine",
      "engine-plus": "Advanced Engine",
      "engine-efficient": "Efficient Engine",
      "frame-standard": "Standard Frame",
      "frame-light": "Lightweight Frame",
      "frame-reinforced": "Reinforced Frame",
      "tank-compact": "Compact Tank",
      "tank-standard": "Standard Tank",
      "tank-large": "Large Tank",
      "booster-none": "No Booster",
      "booster-small": "Auxiliary Booster",
      "booster-pair": "Advanced Booster"
    }
  }
};

let currentLanguage = localStorage.getItem("language") || "ja";
if (!translations[currentLanguage]) currentLanguage = "ja";

function t(key, values = {}) {
  let value = translations[currentLanguage][key] ?? translations.ja[key] ?? key;
  Object.entries(values).forEach(([name, replacement]) => {
    value = value.replaceAll(`{${name}}`, String(replacement));
  });
  return value;
}

// ------------------------------
// 2. ゲーム内の架空部品データ
// ------------------------------
const parts = {
  engine: [
    {id:"engine-basic",name:"標準エンジン",cost:18,thrust:55,structure:5,fuel:5,delta:8,shape:1},
    {id:"engine-plus",name:"強化エンジン",cost:29,thrust:82,structure:0,fuel:0,delta:12,shape:2},
    {id:"engine-efficient",name:"効率重視エンジン",cost:25,thrust:63,structure:4,fuel:12,delta:15,shape:1}
  ],
  structure: [
    {id:"frame-standard",name:"標準フレーム",cost:16,thrust:0,structure:62,fuel:0,delta:0,shape:1},
    {id:"frame-light",name:"軽量フレーム",cost:24,thrust:0,structure:43,fuel:4,delta:8,shape:2},
    {id:"frame-reinforced",name:"補強フレーム",cost:27,thrust:0,structure:88,fuel:0,delta:0,shape:3}
  ],
  tank: [
    {id:"tank-compact",name:"コンパクトタンク",cost:12,thrust:0,structure:4,fuel:48,delta:5,shape:1},
    {id:"tank-standard",name:"標準タンク",cost:20,thrust:0,structure:0,fuel:72,delta:12,shape:2},
    {id:"tank-large",name:"大容量タンク",cost:29,thrust:0,structure:-8,fuel:94,delta:18,shape:3}
  ],
  booster: [
    {id:"booster-none",name:"ブースターなし",cost:0,thrust:0,structure:0,fuel:0,delta:0,shape:0},
    {id:"booster-small",name:"補助ブースター",cost:13,thrust:18,structure:-3,fuel:3,delta:3,shape:1},
    {id:"booster-pair",name:"強化ブースター",cost:22,thrust:31,structure:-9,fuel:5,delta:5,shape:2}
  ]
};

const labels = {
  engine: "engine",
  structure: "structurePart",
  tank: "tank",
  booster: "booster"
};

// 初期設計は「速度変更能力」が目標未満になる診断案件。
// 数値はすべてゲーム専用の架空ポイント。
let initialState = {
  engine: "engine-basic",
  structure: "frame-light",
  tank: "tank-compact",
  booster: "booster-none"
};

const state = {...initialState};
const $ = id => document.getElementById(id);
const selectedPart = key => parts[key].find(part => part.id === state[key]);

const defaultMetricTargets = {thrust:65, structure:58, fuel:65, delta:58};
let currentCase = null;
let previousCaseId = null;
let caseOrder = [];
let caseDeck = [];

// 問題・証拠・正解・解説はひとまとまりで抽選する。
// 数値はすべて架空のゲームポイント。実在の宇宙機性能を表さない。
const caseBank = [
  {
    id:"ORBIT-01", category:"軌道制約", title:{ja:"月周回軌道への投入計画",en:"Lunar Orbit Insertion Review"},
    mission:{ja:"探査機を月の目標軌道へ運ぶ",en:"Deliver a probe into the target lunar orbit"},
    issue:{ja:"目標軌道に届く能力が不足",en:"The design rating is below the mission requirement"},
    objective:{ja:"軌道投入に必要な能力が不足する原因を特定する",en:"Find why the design cannot meet the orbit-insertion requirement"},
    lead:{ja:"月探査ミッションの設計審査で警告が出た。設計表・要求条件・予算の証拠を照らし合わせ、最も説明力のある原因を選ぼう。",en:"A lunar mission review has raised a warning. Compare the design, mission requirement and budget evidence, then choose the explanation that best fits."},
    initial:{engine:"engine-basic",structure:"frame-light",tank:"tank-compact",booster:"booster-none"},
    targets:{delta:58}, focus:"delta", correct:"booster",
    evidence:[
      {title:{ja:"目標軌道の要求",en:"Orbit requirement"},body:{ja:"今回のミッションでは、速度変更能力58 PT以上が必要。",en:"This mission requires a velocity-change rating of at least 58 PT."},detail:{ja:"現在の設計は41 PT。要求まで17 PT不足している。",en:"The current design is 41 PT, leaving a gap of 17 PT."}},
      {title:{ja:"部品構成の記録",en:"Component manifest"},body:{ja:"標準エンジン、軽量フレーム、コンパクトタンクを搭載。",en:"The vehicle uses a standard engine, lightweight frame and compact tank."},detail:{ja:"ゲーム内の速度変更能力への加算値は、エンジン+8、フレーム+8、タンク+5、ブースターなし+0。",en:"In this game model, the contributions are engine +8, frame +8, tank +5 and no booster +0."}},
      {title:{ja:"予算の記録",en:"Budget record"},body:{ja:"設計変更に使える予算は100 PT。",en:"The available redesign budget is 100 PT."},detail:{ja:"初期設計は54 PT。追加部品や交換に使える余裕は46 PT。",en:"The initial design costs 54 PT, leaving 46 PT for changes."}}
    ],
    options:[{id:"booster",label:{ja:"ブースターが搭載されていない",en:"No booster is installed"}},{id:"tank",label:{ja:"燃料タンクが小さすぎる",en:"The fuel tank is too small"}},{id:"frame",label:{ja:"機体フレームが軽すぎる",en:"The frame is too light"}}],
    explanation:{ja:"部品表ではブースターの加算が0 PTで、要求との差を埋める設計変更候補になっている。ただし、ブースターを追加するだけでなく、予算と他の性能も見ながら組み合わせを調整する必要がある。",en:"The manifest shows a zero contribution from the absent booster, making it a relevant design change. Adding it alone is not automatically enough: the final combination must still respect the budget and other ratings."},
    hint:{ja:"E-02で、速度変更能力への加算が0 PTになっている項目を探そう。",en:"In E-02, look for the item contributing 0 PT to the velocity-change rating."}
  },
  {
    id:"LAUNCH-02", category:"打ち上げロケット", title:{ja:"打ち上げ能力の不足",en:"Launch Capability Shortfall"},
    mission:{ja:"探査機を所定の出発条件へ送り出す",en:"Place the probe on its required departure path"},
    issue:{ja:"推進性能の評価値が要求未満",en:"The propulsion rating is below target"},
    objective:{ja:"打ち上げ段階の能力不足を説明する原因を探す",en:"Identify the cause of the launch-stage capability shortfall"},
    lead:{ja:"打ち上げ審査で、現在の構成では要求を満たせないと指摘された。推進性能と部品構成の記録を調べよう。",en:"The launch review says the current configuration may not meet the requirement. Inspect the propulsion rating and component manifest."},
    initial:{engine:"engine-basic",structure:"frame-light",tank:"tank-compact",booster:"booster-none"},
    targets:{thrust:95,delta:40}, focus:"thrust", correct:"booster",
    evidence:[
      {title:{ja:"打ち上げ要求",en:"Launch requirement"},body:{ja:"今回のゲーム内評価では推進性能95 PT以上が必要。",en:"This game scenario requires a propulsion rating of at least 95 PT."},detail:{ja:"現在の推進性能は90 PT。あと5 PT必要。",en:"The current propulsion rating is 90 PT, five points short."}},
      {title:{ja:"推進系の構成",en:"Propulsion configuration"},body:{ja:"標準エンジンを使用し、補助推進部品は選択されていない。",en:"A standard engine is selected, with no auxiliary propulsion component."},detail:{ja:"ゲーム内加算値は標準エンジン+55、ブースターなし+0。",en:"In-game contributions: standard engine +55, no booster +0."}},
      {title:{ja:"設計変更の条件",en:"Redesign constraints"},body:{ja:"予算上限は100 PT。性能だけを見て高価な構成にはできない。",en:"The budget cap is 100 PT. A high-cost configuration is not automatically acceptable."},detail:{ja:"初期設計費用は54 PT。推進系を変更しても、構造・燃料・速度変更能力の基準は維持する必要がある。",en:"The initial design costs 54 PT. Changes must also preserve the structure, fuel and velocity-change targets."}}
    ],
    options:[{id:"booster",label:{ja:"補助推進部品がない",en:"No auxiliary booster is installed"}},{id:"tank",label:{ja:"燃料タンクが小さい",en:"The fuel tank is too small"}},{id:"frame",label:{ja:"フレームが軽量型である",en:"The frame is lightweight"}}],
    explanation:{ja:"推進性能の不足に対して、推進系の構成が直接関係する。改善時はブースターだけでなく、予算や他の評価項目も確認しよう。",en:"The propulsion configuration is directly relevant to the shortfall. During redesign, check the budget and the other ratings as well as the booster option."},
    hint:{ja:"E-02で推進性能に関係する部品を確認しよう。",en:"Check which components in E-02 affect propulsion."}
  },
  {
    id:"FUEL-03", category:"燃料・ミッション継続", title:{ja:"燃料余裕の不足",en:"Insufficient Fuel Margin"},
    mission:{ja:"探査機が予定された運用を続ける",en:"Keep the probe operating through its planned mission"},
    issue:{ja:"燃料余裕の評価値が不足",en:"The fuel-margin rating is too low"},
    objective:{ja:"燃料余裕を下げている設計要因を見つける",en:"Find the design factor reducing the fuel margin"},
    lead:{ja:"ミッション計画の再確認で、燃料余裕が基準を下回っている。搭載部品の記録と各部品の評価値を比べよう。",en:"A mission-plan review found the fuel margin below target. Compare the selected components and their in-game ratings."},
    initial:{engine:"engine-plus",structure:"frame-standard",tank:"tank-compact",booster:"booster-none"},
    targets:{fuel:65,delta:35}, focus:"fuel", correct:"engine",
    evidence:[
      {title:{ja:"燃料余裕の評価",en:"Fuel-margin rating"},body:{ja:"ミッションには燃料余裕65 PT以上が必要。",en:"The mission requires a fuel-margin rating of at least 65 PT."},detail:{ja:"現在は63 PTで、2 PT不足している。",en:"The current rating is 63 PT, two points short."}},
      {title:{ja:"エンジンの評価表",en:"Engine rating sheet"},body:{ja:"現在は強化エンジンが選択されている。",en:"The advanced engine is currently selected."},detail:{ja:"このゲームモデルでは、強化エンジンの燃料余裕への加算は0。効率重視エンジンは+12。",en:"In this game model, the advanced engine adds 0 to fuel margin; the efficient engine adds +12."}},
      {title:{ja:"タンクと予算",en:"Tank and budget"},body:{ja:"コンパクトタンクを搭載。予算上限は100 PT。",en:"A compact tank is selected. The budget cap is 100 PT."},detail:{ja:"タンクの変更も選択肢だが、エンジンの評価表にも燃料余裕の差が示されている。",en:"Changing the tank is also possible, but the engine rating sheet shows a difference in fuel-margin contribution."}}
    ],
    options:[{id:"engine",label:{ja:"燃料余裕への加算が小さいエンジン",en:"The selected engine contributes little to fuel margin"}},{id:"tank",label:{ja:"タンク容量だけが原因",en:"Tank capacity is the only cause"}},{id:"frame",label:{ja:"フレームの形状が原因",en:"The frame shape is the cause"}}],
    explanation:{ja:"このゲームの評価ルールでは、現在の強化エンジンは燃料余裕への加算が0 PT。効率重視エンジンなどへの変更を比較すると、他の評価とのバランスを考えられる。",en:"Under this game's rules, the selected advanced engine contributes 0 PT to fuel margin. Comparing the efficient engine can improve the balance against the other ratings."},
    hint:{ja:"E-02のエンジン評価表で、燃料余裕への加算値を比べよう。",en:"Compare the fuel-margin contributions in the engine rating sheet."}
  },
  {
    id:"STRUCT-04", category:"質量・構造", title:{ja:"構造バランスの再審査",en:"Structural Balance Review"},
    mission:{ja:"機体の構造評価を基準内に保つ",en:"Keep the vehicle's structural rating within target"},
    issue:{ja:"構造バランスの評価値が基準未満",en:"The structural-balance rating is below target"},
    objective:{ja:"構造評価を下げている部品構成を特定する",en:"Identify the component configuration lowering structural balance"},
    lead:{ja:"部品を追加した設計案について、構造バランスの再審査が必要になった。機体フレームと追加部品の記録を調べよう。",en:"A revised vehicle proposal has been sent for another structural review. Inspect the frame and added components."},
    initial:{engine:"engine-basic",structure:"frame-light",tank:"tank-large",booster:"booster-pair"},
    targets:{structure:70}, focus:"structure", correct:"frame",
    evidence:[
      {title:{ja:"構造評価の基準",en:"Structural target"},body:{ja:"今回のミッションでは構造バランス70 PT以上が必要。",en:"This scenario requires a structural-balance rating of at least 70 PT."},detail:{ja:"現在は66 PT。4 PT不足している。",en:"The current rating is 66 PT, four points short."}},
      {title:{ja:"フレーム仕様",en:"Frame specification"},body:{ja:"軽量フレームが選択されている。",en:"A lightweight frame is selected."},detail:{ja:"ゲーム内の構造評価への加算は軽量フレーム+43、補強フレーム+88。",en:"In-game structural contributions: lightweight frame +43, reinforced frame +88."}},
      {title:{ja:"追加部品の記録",en:"Added-component record"},body:{ja:"大容量タンクと強化ブースターも搭載されている。",en:"A large tank and advanced booster are also selected."},detail:{ja:"追加部品を維持するなら、フレームの選択を見直す余地がある。費用は合計93 PT。",en:"If the added components are retained, the frame selection may need review. Total cost is 93 PT."}}
    ],
    options:[{id:"frame",label:{ja:"軽量フレームでは構造評価が足りない",en:"The lightweight frame does not meet the structural target"}},{id:"engine",label:{ja:"エンジンが標準型だから",en:"The engine is the standard type"}},{id:"tank",label:{ja:"タンクが大容量だから",en:"The tank is large"}}],
    explanation:{ja:"軽量フレームの構造評価は43 PTで、補強フレームの88 PTより低い。フレームを変更すると費用や他の評価も変わるため、全体を再診断しよう。",en:"The lightweight frame contributes 43 PT to structural balance, compared with 88 PT for the reinforced frame. Changing it affects cost and the overall design, so run the full diagnosis again."},
    hint:{ja:"E-02でフレームの構造評価を比較しよう。",en:"Compare the frame's structural contributions in E-02."}
  },
  {
    id:"BUDGET-05", category:"予算・トレードオフ", title:{ja:"予算超過の設計案",en:"Over-Budget Design Proposal"},
    mission:{ja:"要求性能を保ちながら予算内に収める",en:"Meet the mission targets while staying within budget"},
    issue:{ja:"部品費用が予算上限を超過",en:"The component cost exceeds the budget cap"},
    objective:{ja:"性能を維持しつつ費用を抑える余地を探す",en:"Find a way to reduce cost without losing required ratings"},
    lead:{ja:"設計審査では性能値だけでなく、予算条件も満たす必要がある。どの構成が費用超過につながっているか調べよう。",en:"The design review requires both acceptable ratings and a budget-compliant configuration. Find what is driving the cost overrun."},
    initial:{engine:"engine-plus",structure:"frame-reinforced",tank:"tank-large",booster:"booster-pair"},
    targets:{delta:55}, focus:"budget", correct:"combination",
    evidence:[
      {title:{ja:"予算上限",en:"Budget ceiling"},body:{ja:"部品費用の上限は100 PT。",en:"The component-cost ceiling is 100 PT."},detail:{ja:"現在の合計は107 PTで、7 PT超過している。",en:"The current total is 107 PT, seven points over budget."}},
      {title:{ja:"高価格部品",en:"High-cost components"},body:{ja:"強化エンジン、補強フレーム、大容量タンク、強化ブースターを選択。",en:"The design uses an advanced engine, reinforced frame, large tank and advanced booster."},detail:{ja:"どれか一つだけを変更すると、必要な性能評価を下回る場合がある。",en:"Changing only one component may cause a required rating to fall below target."}},
      {title:{ja:"評価条件",en:"Rating constraints"},body:{ja:"予算だけでなく、4つの性能評価も基準を満たす必要がある。",en:"The design must meet all four rating targets as well as the budget condition."},detail:{ja:"一つの部品を最高性能にするより、複数部品の組み合わせを見直すことが重要。",en:"A balanced combination may be better than choosing the highest-rated option in every category."}}
    ],
    options:[{id:"combination",label:{ja:"複数部品の組み合わせが高コスト",en:"The combination of components is too costly"}},{id:"engine",label:{ja:"エンジンだけが予算超過の原因",en:"The engine alone causes the overrun"}},{id:"tank",label:{ja:"タンクだけが予算超過の原因",en:"The tank alone causes the overrun"}}],
    explanation:{ja:"費用超過は一つの部品だけでなく、高価格部品を重ねた構成全体から生じている。性能を確認しながら、複数の部品を組み合わせ直す必要がある。",en:"The overrun comes from the overall combination of expensive components, not just one item. Rebalance multiple components while checking all ratings."},
    hint:{ja:"E-02とE-03を合わせて見よう。最高性能の部品を並べることが最適とは限らない。",en:"Read E-02 and E-03 together. Selecting the highest-rated parts is not always the best solution."}
  },
  {
    id:"MISSION-06", category:"ミッション目標", title:{ja:"変更されたミッション要求",en:"Revised Mission Requirement"},
    mission:{ja:"探査機をより高い目標条件へ対応させる",en:"Adapt the probe to a more demanding mission target"},
    issue:{ja:"新しい目標条件に設計が届かない",en:"The design does not meet the revised mission target"},
    objective:{ja:"ミッション目標と現在の設計の差を説明する",en:"Explain the gap between the mission goal and the current design"},
    lead:{ja:"計画変更により、探査機に求められる条件が引き上げられた。古い設計のままでよいか、要求値と部品構成を照合しよう。",en:"A plan change has raised the mission requirement. Compare the new target with the existing design and component manifest."},
    initial:{engine:"engine-basic",structure:"frame-light",tank:"tank-compact",booster:"booster-none"},
    targets:{delta:58}, focus:"delta", correct:"mission",
    evidence:[
      {title:{ja:"ミッション変更通知",en:"Mission change notice"},body:{ja:"探査機の到達先が変更され、速度変更能力58 PT以上が必要になった。",en:"The destination has changed; a velocity-change rating of at least 58 PT is now required."},detail:{ja:"旧設計の評価値は41 PT。旧条件のままでは新しい目標に対応できない。",en:"The existing design rates 41 PT. It cannot meet the revised target as-is."}},
      {title:{ja:"設計の作成時期",en:"Design baseline"},body:{ja:"現在の部品構成は、変更前のミッション条件をもとに選ばれている。",en:"The current component configuration was selected for the previous mission requirement."},detail:{ja:"部品そのものの故障を示す記録はない。まず要求条件と設計の不一致を確認する。",en:"There is no record indicating a component failure. First check the mismatch between requirements and design."}},
      {title:{ja:"変更可能な範囲",en:"Available changes"},body:{ja:"予算は100 PT。部品の交換・追加で設計を調整できる。",en:"The budget is 100 PT. The design can be adjusted by replacing or adding components."},detail:{ja:"設計の良し悪しは、部品単体ではなくミッション目標との適合で判断する。",en:"A design should be judged by how well it fits the mission, not by a component in isolation."}}
    ],
    options:[{id:"mission",label:{ja:"ミッション目標が変更され、旧設計が合わなくなった",en:"The mission target changed, making the old design unsuitable"}},{id:"engine",label:{ja:"エンジンが故障した",en:"The engine has failed"}},{id:"tank",label:{ja:"燃料タンクに破損がある",en:"The fuel tank is damaged"}}],
    explanation:{ja:"この事件の本質は部品の故障ではなく、ミッション目標の変更に設計が追いついていないこと。最初に要求条件を確認する重要性を学べる。",en:"The core issue is not a component failure: the design has not been updated to match the revised mission target. This highlights why requirements must be checked first."},
    hint:{ja:"証拠E-01とE-02を比べて、故障の記録があるか確認しよう。",en:"Compare E-01 and E-02. Is there evidence of a component failure?"}
  }
];

const metricDefinitions = [
  {key:"thrust", labelKey:"metricThrust", target:65},
  {key:"structure", labelKey:"metricStructure", target:58},
  {key:"fuel", labelKey:"metricFuel", target:65},
  {key:"delta", labelKey:"metricDelta", target:58}
];


function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function totals() {
  const chosen = Object.keys(state).map(selectedPart);
  const sum = field => chosen.reduce((total, part) => total + (part[field] || 0), 0);
  return {
    cost: sum("cost"),
    thrust: clamp(35 + sum("thrust"), 0, 100),
    structure: clamp(35 + sum("structure"), 0, 100),
    fuel: clamp(15 + sum("fuel"), 0, 100),
    delta: clamp(20 + sum("delta"), 0, 100)
  };
}

function getPartName(part) {
  return translations[currentLanguage].partNames[part.id] || part.name;
}

function renderParts() {
  const host = $("partGroups");
  host.innerHTML = "";

  Object.keys(parts).forEach(key => {
    const group = document.createElement("div");
    group.className = "category";

    const title = document.createElement("div");
    title.className = "category-title";
    title.innerHTML = `<span>${t(labels[key])}</span><span>${key.toUpperCase()}</span>`;
    group.appendChild(title);

    parts[key].forEach(part => {
      const button = document.createElement("button");
      button.className = "part-option" + (state[key] === part.id ? " selected" : "");
      button.type = "button";
      button.setAttribute("aria-pressed", state[key] === part.id ? "true" : "false");
      button.innerHTML = `
        <span>
          <span class="part-name">${getPartName(part)}</span><br>
          <span class="part-detail">${t("partDetail")}</span>
        </span>
        <span class="part-cost">${part.cost} PT</span>
      `;
      button.addEventListener("click", () => {
        state[key] = part.id;
        $("resultPanel").hidden = true;
        render();
      });
      group.appendChild(button);
    });

    host.appendChild(group);
  });
}

function setMetric(name, value) {
  $(name + "Value").textContent = value;
  $(name + "Bar").style.width = value + "%";
}

function render() {
  renderParts();

  const stats = totals();
  const left = 100 - stats.cost;

  $("budgetLeft").textContent = left;
  $("budgetBar").style.width = clamp(left, 0, 100) + "%";
  $("budgetMessage").textContent = left < 0
    ? t("budgetOver")
    : t("budgetOK");
  $("budgetMessage").style.color = left < 0 ? "#ff9d85" : "#8fb3c6";

  $("costValue").textContent = stats.cost;
  setMetric("thrust", stats.thrust);
  setMetric("structure", stats.structure);
  setMetric("fuel", stats.fuel);
  setMetric("delta", stats.delta);

  const engineName = getPartName(selectedPart("engine")).toUpperCase();
  const frameName = getPartName(selectedPart("structure")).toUpperCase();
  $("configName").textContent = `${engineName} / ${frameName}`;

  drawRocket();
}

function drawRocket() {
  const engine = selectedPart("engine");
  const frame = selectedPart("structure");
  const tank = selectedPart("tank");
  const booster = selectedPart("booster");

  const bodyW = frame.shape === 2 ? 76 : frame.shape === 3 ? 92 : 84;
  const tankH = tank.shape === 1 ? 100 : tank.shape === 3 ? 175 : 135;
  const engineW = engine.shape === 2 ? 58 : 42;
  const boosterW = booster.shape === 2 ? 24 : booster.shape === 1 ? 18 : 0;
  const x = 210 - bodyW / 2;

  let svg = `<g stroke="#77a9c8" stroke-width="2" fill="url(#bodyGradient)">
    <path d="M210 75 Q${210+bodyW/2} 115 ${210+bodyW/2} 165 L${210+bodyW/2} ${165+tankH} L${210-bodyW/2} ${165+tankH} L${210-bodyW/2} 165 Q${210-bodyW/2} 115 210 75Z"/>
    <rect x="${x+5}" y="${165+tankH}" width="${bodyW-10}" height="52" rx="5" fill="#91a9bd"/>
    <rect x="${210-engineW/2}" y="217" width="${engineW}" height="35" rx="4" fill="#607f98"/>
    <path d="M${210-engineW/2+8} 252 L${210+engineW/2-8} 252 L210 312Z" fill="url(#flameGradient)" stroke="#ffb16e"/>
    <path d="M${210-bodyW/2} 260 L${210-bodyW/2-27} 305 L${210-bodyW/2+5} 294Z" fill="#668ba6"/>
    <path d="M${210+bodyW/2} 260 L${210+bodyW/2+27} 305 L${210+bodyW/2-5} 294Z" fill="#668ba6"/>
    <rect x="${x+7}" y="180" width="${bodyW-14}" height="3" fill="#4b7b9c" stroke="none"/>
    <circle cx="210" cy="140" r="13" fill="#234b66" stroke="#7cc5dc"/>
    <circle cx="210" cy="140" r="7" fill="#10283b" stroke="#8bd7e9"/>
  </g>`;

  if (boosterW) {
    [-1, 1].forEach(side => {
      const bx = side < 0 ? 210-bodyW/2-boosterW-8 : 210+bodyW/2+8;
      svg += `<g fill="#8fa9bc" stroke="#77a9c8" stroke-width="2">
        <path d="M${bx} 145 Q${bx+boosterW/2} 125 ${bx+boosterW} 145 L${bx+boosterW} 250 L${bx} 250Z"/>
        <path d="M${bx} 250 L${bx+boosterW} 250 L${bx+boosterW/2} 280Z" fill="#d18b62"/>
      </g>`;
    });
  }

  svg += `<g stroke="#77a9c8" stroke-width="1" fill="none">
    <path d="M210 65 V45 M195 52 H225"/>
    <path d="M${x+12} ${165+tankH-15} H${x+bodyW-12}"/>
  </g>`;

  $("rocketParts").innerHTML = svg;
}

// ------------------------------
// 3. 診断ロジック
// ------------------------------
function analyze() {
  const stats = totals();
  const checks = metricDefinitions.map(definition => ({
    key: definition.key,
    label: t(definition.labelKey),
    value: stats[definition.key],
    target: definition.target,
    ok: stats[definition.key] >= definition.target
  }));

  const failed = checks.filter(check => !check.ok);
  const overBudget = stats.cost > 100;

  return {
    stats,
    checks,
    failed,
    passed: checks.length - failed.length,
    success: failed.length === 0 && !overBudget,
    overBudget
  };
}

// 問題の数値に関係する部品のゲーム内加算値を手がかりとして表示する。
// これはゲームルール内の説明であり、実際の工学的な原因判定ではありません。
function getDiagnosticClue(metricKey) {
  const componentKeys = {
    thrust: ["engine", "booster"],
    structure: ["engine", "structure", "tank", "booster"],
    fuel: ["engine", "structure", "tank", "booster"],
    delta: ["engine", "structure", "tank", "booster"]
  };

  const candidates = componentKeys[metricKey].map(key => ({
    key,
    part: selectedPart(key),
    contribution: selectedPart(key)[metricKey]
  }));

  candidates.sort((a, b) => a.contribution - b.contribution);
  return candidates[0];
}

function renderComparison(currentStats) {
  const initial = getInitialTotals();
  const metrics = [
    {key:"thrust", label:t("metricThrust")},
    {key:"structure", label:t("metricStructure")},
    {key:"fuel", label:t("metricFuel")},
    {key:"delta", label:t("metricDelta")}
  ];

  $("comparisonGrid").innerHTML = metrics.map(metric => {
    const start = initial[metric.key];
    const now = currentStats[metric.key];
    const difference = now - start;
    let differenceText = t("compareSame");

    if (difference > 0) differenceText = t("compareUp", {n:difference});
    if (difference < 0) differenceText = t("compareDown", {n:Math.abs(difference)});

    return `<div class="comparison-card">
      <span>${metric.label}</span>
      <div class="comparison-values">
        <div><small>${t("initialLabel")}</small><strong>${start}</strong></div>
        <div class="comparison-arrow">→</div>
        <div><small>${t("currentLabel")}</small><strong>${now}</strong></div>
      </div>
      <em class="${difference > 0 ? "improved" : difference < 0 ? "declined" : ""}">${differenceText}</em>
    </div>`;
  }).join("");
}

function getInitialTotals() {
  const saved = {...state};
  Object.keys(initialState).forEach(key => { state[key] = initialState[key]; });
  const initial = totals();
  Object.keys(saved).forEach(key => { state[key] = saved[key]; });
  return initial;
}

function showReport(result) {
  $("resultPanel").hidden = false;
  $("caseClearPanel").hidden = !result.success;
  if (result.success && currentCase) {
    $("caseClearTitle").textContent = currentLanguage === "ja" ? `${currentCase.id} 解決！` : `${currentCase.id} SOLVED!`;
    $("caseClearExplanation").textContent = currentLanguage === "ja"
      ? `${caseText(currentCase.explanation)} 設計改善も完了し、今回のミッション条件を満たしました。`
      : `${caseText(currentCase.explanation)} The redesign is complete and meets this mission's conditions.`;
    $("nextCaseButton").textContent = currentLanguage === "ja" ? "次の事件を調査する →" : "INVESTIGATE THE NEXT CASE →";
  }
  $("resultPanel").scrollIntoView({behavior:"smooth", block:"start"});

  $("resultBadge").textContent = result.success
    ? (currentLanguage === "ja" ? "改善達成" : "IMPROVED")
    : (currentLanguage === "ja" ? "要確認" : "REVIEW");
  $("resultBadge").style.color = result.success ? "#83dfb8" : "#ffbd87";

  $("analysisHeading").textContent = result.success
    ? t("successHeading")
    : t("failureHeading");

  $("analysisText").textContent = result.success
    ? t("successText")
    : t("failureText");

  $("flightStatus").textContent = t("reportReady");
  $("flightCaption").textContent = result.success
    ? t("reportCaptionSuccess")
    : t("reportCaptionFailure");

  const initial = getInitialTotals();
  const current = result.stats;
  const initialFailed = metricDefinitions.filter(def => initial[def.key] < def.target);
  const summaryParts = [];

  if (initialFailed.length) {
    summaryParts.push(`<p><strong>${t("caseIssue")}：</strong>${initialFailed.map(def => t(def.labelKey)).join(" / ")}</p>`);
  }

  if (result.failed.length) {
    summaryParts.push(`<p class="report-alert">${t("issueCount", {n:result.failed.length})}</p>`);
  } else {
    summaryParts.push(`<p class="report-good">${t("noIssue")}</p>`);
  }

  if (result.overBudget) {
    summaryParts.push(`<p class="report-alert">${t("overBudget", {n:current.cost - 100})}</p>`);
  } else {
    summaryParts.push(`<p>${t("withinBudget", {n:100 - current.cost})}</p>`);
  }

  $("reportSummary").innerHTML = summaryParts.join("");
  renderComparison(current);

  const listItems = [];

  result.checks.forEach(check => {
    listItems.push(`<li class="${check.ok ? "check-pass" : "check-fail"}">
      <strong>${check.ok ? "✓" : "△"} ${check.label}</strong>
      <span>${check.value} / ${check.target} PT — ${check.ok ? t("passed") : t("failed")}</span>
    </li>`);
  });

  result.failed.forEach(check => {
    const clue = getDiagnosticClue(check.key);
    const partName = getPartName(clue.part);
    listItems.push(`<li class="diagnostic-clue">
      <strong>${t("causeTitle")}：${check.label}</strong>
      <span>${t("causeText", {
        part: partName,
        value: clue.contribution,
        metric: check.label
      })}</span>
      <span class="suggestion">${t("suggestion", {part: partName})}</span>
    </li>`);
  });

  if (result.overBudget) {
    listItems.push(`<li class="diagnostic-clue"><strong>${t("causeTitle")}</strong><span>${t("overBudgetCause")}</span></li>`);
  }

  if (!result.failed.length && !result.overBudget) {
    listItems.push(`<li class="check-pass"><strong>${t("noCause")}</strong></li>`);
  }

  $("analysisList").innerHTML = listItems.join("");
  $("flightRocket").classList.remove("animate");
  void $("flightRocket").offsetWidth;
  $("flightRocket").classList.add("animate");
}

function diagnose() {
  const result = analyze();
  showReport(result);
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "ja";
  localStorage.setItem("language", currentLanguage);
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    // missionGoal には <br> が含まれるため、HTMLとして設定する。
    if (key === "missionGoal") {
      element.innerHTML = t(key);
    } else {
      element.textContent = t(key);
    }
  });

  $("languageSelect").value = currentLanguage;
  render();
  if (currentCase && !investigationState.solved) renderInvestigation();

  // 診断結果が開いている場合も、現在の言語で再表示する。
  if (!$("resultPanel").hidden) diagnose();

  document.title = "SPACE MISSION DESIGN LAB";
}

$("launchButton").addEventListener("click", diagnose);

$("retryButton").addEventListener("click", () => {
  $("resultPanel").hidden = true;
  $("flightRocket").classList.remove("animate");
  $("resultPanel").scrollIntoView({behavior:"smooth", block:"start"});
});

$("languageSelect").addEventListener("change", event => {
  applyLanguage(event.target.value);
});

// 初期表示

// ------------------------------
// 7. ランダム事件・推理ゲーム
// ------------------------------
const investigationState = {opened:new Set(), hypothesis:null, solved:false};
const caseText = value => value?.[currentLanguage] ?? value?.ja ?? "";

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function drawCase() {
  if (!caseDeck.length) {
    caseDeck = shuffle(caseBank);
    if (caseDeck.length > 1 && caseDeck[caseDeck.length - 1].id === previousCaseId) {
      [caseDeck[0], caseDeck[caseDeck.length - 1]] = [caseDeck[caseDeck.length - 1], caseDeck[0]];
    }
  }
  let selected = caseDeck.pop();
  if (selected.id === previousCaseId && caseDeck.length) {
    const alternate = caseDeck.pop();
    caseDeck.push(selected);
    selected = alternate;
  }
  return selected;
}

function renderInvestigation() {
  if (!currentCase) return;
  const c = currentCase;
  $("caseEyebrow").textContent = `CASE FILE / ${c.id}`;
  $("caseHeaderTitle").textContent = caseText(c.title);
  $("caseHeaderStatus").textContent = currentLanguage === "ja" ? "調査中" : "UNDER INVESTIGATION";
  $("caseHeaderDescription").textContent = caseText(c.lead);
  $("caseHeaderObjective").textContent = caseText(c.objective);
  $("investigationTitle").textContent = `${c.id}：${caseText(c.title)}`;
  $("investigationStatus").textContent = currentLanguage === "ja" ? "証拠を確認" : "REVIEW EVIDENCE";
  $("investigationLead").textContent = caseText(c.lead);
  $("caseBriefGrid").innerHTML = [
    [currentLanguage === "ja" ? "ミッション" : "MISSION", caseText(c.mission)],
    [currentLanguage === "ja" ? "発見された問題" : "REPORTED ISSUE", caseText(c.issue)],
    [currentLanguage === "ja" ? "改善予算" : "REDESIGN BUDGET", "100 PT"]
  ].map(([label,value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("");

  const evidence = shuffle(c.evidence.map((item,index)=>({...item,index})));
  $("evidenceGrid").innerHTML = evidence.map(item => `
    <article class="evidence-card">
      <div class="evidence-top"><span>EVIDENCE ${String(item.index+1).padStart(2,"0")}</span><span>${currentLanguage === "ja" ? "調査資料" : "CASE FILE"}</span></div>
      <h4>${caseText(item.title)}</h4>
      <p>${caseText(item.body)}</p>
      <button type="button" class="evidence-button" data-evidence="${item.index}">${currentLanguage === "ja" ? "資料を確認する" : "OPEN EVIDENCE"}</button>
      <p class="evidence-detail" hidden>${caseText(item.detail)}</p>
    </article>`).join("");

  const options = shuffle(c.options);
  const labels = ["A", "B", "C"];
  $("hypothesisOptions").innerHTML = options.map((option,index) => `
    <button type="button" class="hypothesis-option" data-hypothesis="${option.id}">${labels[index]}：${caseText(option.label)}</button>`).join("");
  $("hypothesisTitle").textContent = currentLanguage === "ja" ? "原因として最も可能性が高いものは？" : "Which explanation best fits the evidence?";
  $("hypothesisHelp").textContent = currentLanguage === "ja" ? "証拠はヒントです。1つ以上確認すれば仮説を提出できます。全部読まなくてもOK！" : "Evidence is optional help. Review at least one card to submit a hypothesis.";
  $("hypothesisFeedback").textContent = currentLanguage === "ja" ? "気になる証拠を1つ確認して、原因を選んでみよう。" : "Open one clue, then choose what you think caused the problem.";
  $("hypothesisFeedback").className = "hypothesis-feedback";
  $("submitHypothesis").textContent = currentLanguage === "ja" ? "仮説を提出する" : "SUBMIT HYPOTHESIS";
  $("submitHypothesis").disabled = true;

  document.querySelectorAll(".evidence-button").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".evidence-card");
      const detail = card.querySelector(".evidence-detail");
      detail.hidden = !detail.hidden;
      if (!detail.hidden) {
        investigationState.opened.add(Number(button.dataset.evidence));
        button.textContent = currentLanguage === "ja" ? "確認済み ✓" : "REVIEWED ✓";
        button.classList.add("is-open");
      } else {
        button.textContent = currentLanguage === "ja" ? "資料をもう一度見る" : "OPEN AGAIN";
      }
      updateInvestigationControls();
    });
  });
  document.querySelectorAll(".hypothesis-option").forEach(button => {
    button.addEventListener("click", () => {
      if (investigationState.solved) return;
      investigationState.hypothesis = button.dataset.hypothesis;
      document.querySelectorAll(".hypothesis-option").forEach(option => option.classList.toggle("selected", option === button));
      $("hypothesisFeedback").textContent = currentLanguage === "ja" ? "この仮説でよければ、下のボタンで答え合わせ！" : "Ready? Submit your hypothesis to check your answer.";
      $("hypothesisFeedback").className = "hypothesis-feedback";
      updateInvestigationControls();
    });
  });
}

function updateInvestigationControls() {
  // 証拠はすべて読む必要なし。最低1つ確認すれば回答できる。
  $("submitHypothesis").disabled = investigationState.opened.size < 1 || !investigationState.hypothesis || investigationState.solved;
}

function startCase(caseData = null) {
  currentCase = caseData || drawCase();
  previousCaseId = currentCase.id;
  initialState = {...currentCase.initial};
  Object.assign(state, initialState);
  Object.entries(defaultMetricTargets).forEach(([key,value]) => {
    const definition = metricDefinitions.find(item => item.key === key);
    if (definition) definition.target = currentCase.targets?.[key] ?? value;
  });
  investigationState.opened = new Set();
  investigationState.hypothesis = null;
  investigationState.solved = false;
  $("investigationPanel").hidden = false;
  $("workspace").hidden = true;
  $("resultPanel").hidden = true;
  $("caseClearPanel").hidden = true;
  $("launchButton").disabled = false;
  $("retryButton").hidden = false;
  renderInvestigation();
  render();
  $("caseHeaderPanel").scrollIntoView({behavior:"smooth",block:"start"});
}

$("submitHypothesis").addEventListener("click", () => {
  const feedback = $("hypothesisFeedback");
  if (investigationState.solved) {
    $("workspace").hidden = false;
    $("workspace").scrollIntoView({behavior:"smooth",block:"start"});
    return;
  }
  if (investigationState.opened.size < 1 || !investigationState.hypothesis) return;
  if (investigationState.hypothesis === currentCase.correct) {
    investigationState.solved = true;
    feedback.textContent = (currentLanguage === "ja" ? "推理成功！ " : "CASE SOLVED! ") + caseText(currentCase.explanation);
    feedback.classList.remove("incorrect");
    feedback.classList.add("correct");
    document.querySelectorAll(".hypothesis-option").forEach(option => {
      option.disabled = true;
      if (option.dataset.hypothesis === currentCase.correct) {
        option.classList.add("is-correct");
        if (!option.querySelector(".answer-mark")) {
          const mark = document.createElement("span");
          mark.className = "answer-mark";
          mark.textContent = "○";
          option.appendChild(mark);
        }
      }
    });
    $("investigationStatus").textContent = currentLanguage === "ja" ? "原因を特定" : "CAUSE IDENTIFIED";
    $("caseHeaderStatus").textContent = currentLanguage === "ja" ? "設計改善へ進めます" : "READY TO REDESIGN";
    $("submitHypothesis").textContent = currentLanguage === "ja" ? "設計ワークショップへ進む" : "OPEN DESIGN WORKSHOP";
    $("submitHypothesis").disabled = false;
    $("workspace").hidden = false;
    $("workspace").scrollIntoView({behavior:"smooth",block:"start"});
  } else {
    const wrongButton = document.querySelector(`.hypothesis-option[data-hypothesis="${investigationState.hypothesis}"]`);
    if (wrongButton) {
      wrongButton.classList.add("is-wrong");
      if (!wrongButton.querySelector(".answer-mark")) {
        const mark = document.createElement("span");
        mark.className = "answer-mark";
        mark.textContent = "×";
        wrongButton.appendChild(mark);
      }
    }
    feedback.textContent = (currentLanguage === "ja" ? "× その仮説ではなさそう！ もう一度考えてみよう。\nヒント：" : "× Not quite. Try another explanation.\nHint: ") + caseText(currentCase.hint);
    feedback.classList.remove("correct");
    feedback.classList.add("incorrect");
    // 次の回答を選ぶまで提出できないようにして、同じ答えの連続送信を防ぐ。
    investigationState.hypothesis = null;
    document.querySelectorAll(".hypothesis-option").forEach(option => option.classList.remove("selected"));
    updateInvestigationControls();
  }
});

$("nextCaseButton").addEventListener("click", () => startCase());

// 初回はランダムな事件から開始。直前と同じ事件は連続しない。
applyLanguage(currentLanguage);
startCase();
