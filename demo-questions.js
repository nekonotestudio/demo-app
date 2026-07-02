// demo-questions.js — ねこの手スタジオ お試しデモ（全9教科 × 5問）
// note 販売記事URL。★介護福祉士・ケアマネは公開後にURLを差し替えてください★
const PROFILE_URL = 'https://note.com/tekona_nekonote';

const DEMO = {
  boki3: {
    label:'簿記3級', emoji:'🧮', color:'#22c55e',
    note:'https://note.com/tekona_nekonote/n/n4aaaa18ea5b0',
    questions:[
      { q:"貸借対照表を構成する3要素として正しいものはどれですか？",
        options:["収益・費用・利益","資産・負債・純資産","資産・収益・費用","負債・資本・利益"], answer:1,
        explanation:"貸借対照表（B/S）は資産・負債・純資産で構成されます。損益計算書（P/L）は収益・費用です。" },
      { q:"商品100,000円を仕入れ、代金は現金で支払った。正しい仕訳はどれですか？",
        options:["（借）売上 100,000 ／（貸）現金 100,000","（借）仕入 100,000 ／（貸）現金 100,000","（借）現金 100,000 ／（貸）仕入 100,000","（借）仕入 100,000 ／（貸）買掛金 100,000"], answer:1,
        explanation:"仕入は費用で借方、現金で支払ったので貸方に現金。（借）仕入100,000／（貸）現金100,000。" },
      { q:"商品80,000円を仕入れ、代金は掛けとした。正しい仕訳はどれですか？",
        options:["（借）仕入 80,000 ／（貸）売掛金 80,000","（借）仕入 80,000 ／（貸）買掛金 80,000","（借）買掛金 80,000 ／（貸）仕入 80,000","（借）仕入 80,000 ／（貸）現金 80,000"], answer:1,
        explanation:"掛け仕入は負債の増加。（借）仕入80,000／（貸）買掛金80,000。" },
      { q:"次のうち「費用」に分類される勘定科目はどれですか？",
        options:["受取手数料","前受金","支払利息","未収入金"], answer:2,
        explanation:"支払利息は費用です。受取手数料は収益、前受金は負債、未収入金は資産。" },
      { q:"期首商品20,000円、当期仕入150,000円、期末商品30,000円のとき、売上原価はいくらですか？",
        options:["140,000円","160,000円","170,000円","200,000円"], answer:0,
        explanation:"売上原価＝期首+当期仕入−期末＝20,000+150,000−30,000＝140,000円。" }
    ]
  },
  fp3: {
    label:'FP3級', emoji:'💰', color:'#34d399',
    note:'https://note.com/tekona_nekonote/n/nf4c424e20f9b',
    questions:[
      { q:"老齢基礎年金の繰下げ受給を行った場合、1か月あたりの増額率はどれですか？",
        options:["0.4％","0.5％","0.7％","1.0％"], answer:2,
        explanation:"繰下げは1か月0.7％増額（最大75歳で84％増）。繰上げは1か月0.4％減額です。" },
      { q:"確定拠出年金（iDeCo）の掛金の税制上の扱いとして正しいものはどれですか？",
        options:["全額が所得控除の対象","2分の1が所得控除","対象とならない","贈与税の対象"], answer:0,
        explanation:"iDeCoの掛金は全額が小規模企業共済等掛金控除として所得控除されます。" },
      { q:"贈与税の基礎控除額（暦年課税）は年間いくらですか？",
        options:["60万円","110万円","2,000万円","2,500万円"], answer:1,
        explanation:"暦年課税の基礎控除は受贈者1人あたり年間110万円です。" },
      { q:"PER（株価収益率）が表すものはどれですか？",
        options:["株価が1株当たり純資産の何倍か","株価が1株当たり純利益の何倍か","自己資本利益率","配当利回り"], answer:1,
        explanation:"PER＝株価÷1株当たり純利益（EPS）。低いほど割安とされます。" },
      { q:"NISA（2024年以降）のつみたて投資枠の年間投資上限額はいくらですか？",
        options:["40万円","120万円","240万円","360万円"], answer:1,
        explanation:"つみたて投資枠は年間120万円、成長投資枠は年間240万円、合計360万円です。" }
    ]
  },
  takken: {
    label:'宅建', emoji:'🏠', color:'#e8804f',
    note:'https://note.com/tekona_nekonote/n/n70122c89cca0',
    questions:[
      { q:"宅地建物取引業の免許の有効期間は何年ですか？",
        options:["3年","5年","7年","10年"], answer:1,
        explanation:"宅建業免許の有効期間は5年です。宅建士証も5年です。" },
      { q:"クーリング・オフができる期間は、告知を受けた日から何日間ですか？",
        options:["5日間","8日間","10日間","14日間"], answer:1,
        explanation:"書面で告知を受けた日から起算して8日以内に書面で行います。" },
      { q:"宅建業者が自ら売主となる場合、買主から受け取れる手付の上限はどれですか？",
        options:["代金の1割","代金の2割","代金の3割","制限なし"], answer:1,
        explanation:"自ら売主制限により、手付は代金の2割を超えて受領できません。" },
      { q:"市街化区域内で開発許可が必要となる開発行為の規模は原則どれですか？",
        options:["500㎡以上","1,000㎡以上","3,000㎡以上","10,000㎡以上"], answer:1,
        explanation:"市街化区域では1,000㎡以上の開発行為に開発許可が必要です。" },
      { q:"詐欺による意思表示の取消しは、取消し前の善意無過失の第三者に対抗できますか？",
        options:["常に対抗できる","対抗できない","登記があれば対抗できる","裁判所の許可があれば対抗できる"], answer:1,
        explanation:"詐欺取消しは取消し前の善意無過失の第三者に対抗できません（民法96条3項）。" }
    ]
  },
  itp: {
    label:'ITパスポート', emoji:'💻', color:'#10b981',
    note:'https://note.com/tekona_nekonote/n/nd2c0ec444e48',
    questions:[
      { q:"情報セキュリティの3要素「CIA」のうち「I」が表すものはどれですか？",
        options:["可用性","完全性・整合性（Integrity）","識別性","インターネット"], answer:1,
        explanation:"CIAはConfidentiality・Integrity・Availability。Iは改ざんされていない完全性です。" },
      { q:"2進数「1010」を10進数に変換した値はどれですか？",
        options:["8","10","12","14"], answer:1,
        explanation:"1×8+0×4+1×2+0×1=10です。" },
      { q:"SWOT分析において「O」が表すものはどれですか？",
        options:["組織","機会（Opportunity）","目標","運営"], answer:1,
        explanation:"SWOTはStrength・Weakness・Opportunity・Threat。Oは外部環境の機会です。" },
      { q:"IaaS（Infrastructure as a Service）で提供されるものはどれですか？",
        options:["完成したアプリ","開発プラットフォーム","仮想サーバ・ストレージ等のインフラ","業務システム"], answer:2,
        explanation:"IaaSはインフラ提供。PaaSは開発基盤、SaaSはアプリ提供です。" },
      { q:"フィッシング詐欺の説明として正しいものはどれですか？",
        options:["パスワードを総当たりで試す","偽サイト・メールで個人情報を騙し取る","通信を盗聴する","大量リクエストでダウンさせる"], answer:1,
        explanation:"本物そっくりの偽サイト・メールに誘導し個人情報を詐取する攻撃です。" }
    ]
  },
  gkentei: {
    label:'G検定', emoji:'🤖', color:'#38bdf8',
    note:'https://note.com/tekona_nekonote/n/n2fcca67d0778',
    questions:[
      { q:"2012年のImageNetコンペで圧勝し、ディープラーニングブームの火付け役となったモデルはどれですか？",
        options:["VGGNet","ResNet","AlexNet","GoogLeNet"], answer:2,
        explanation:"Hintonらが開発したAlexNetが2012年のILSVRCでエラー率を大幅に下げました。" },
      { q:"Transformerモデルの中核となる機構はどれですか？",
        options:["畳み込み","自己注意機構（Self-Attention）","再帰構造","プーリング"], answer:1,
        explanation:"2017年提案のTransformerはSelf-Attentionにより系列の依存関係を並列計算します。" },
      { q:"ReLU活性化関数が広く使われる主な理由はどれですか？",
        options:["出力が0〜1に収まる","勾配消失問題を軽減できる","二値分類に最適","計算コストが高い"], answer:1,
        explanation:"ReLUは正の入力で勾配が1のため、勾配消失問題を緩和できます。" },
      { q:"説明可能AIを表す略語はどれですか？",
        options:["XAI","AGI","GAN","RNN"], answer:0,
        explanation:"XAI（Explainable AI）はAIの判断根拠を人間が理解できる形で示す技術です。" },
      { q:"「RLHF」の正式名称はどれですか？",
        options:["Reinforcement Learning from Human Feedback","Recurrent Learning High Frequency","Regularized Learning Hidden Features","Recursive Language Hybrid Finetuning"], answer:0,
        explanation:"人間の評価フィードバックを強化学習に活用し、モデルを人間の意図に沿わせる手法です。" }
    ]
  },
  toeic: {
    label:'TOEIC速読', emoji:'📖', color:'#e8b84b',
    note:'https://note.com/tekona_nekonote/n/n722bcb8e7f1a',
    questions:[
      { q:"【メール】The strategy meeting will be postponed to Friday, June 6, at 10:00 AM in Meeting Room B.  会議はいつ・どこで開催されますか？",
        options:["木曜午後2時・会議室A","金曜午前10時・会議室B","金曜午後2時・会議室B","木曜午前10時・3階"], answer:1,
        explanation:"「Friday, June 6, at 10:00 AM in Meeting Room B」とあります。" },
      { q:"【注文確認】Total: $592.00. Someone must be present to sign for the delivery.  配送時に不在の場合はどうなりますか？（本文：redelivery will be attempted the following business day）",
        options:["注文キャンセル","翌営業日に再配達","コンビニに届く","追加料金発生"], answer:1,
        explanation:"「redelivery will be attempted the following business day（翌営業日に再配達）」とあります。" },
      { q:"【招待状】Please RSVP by June 28. We can accommodate up to two guests per invitation.  1枚の招待状で何名まで参加できますか？",
        options:["1名","2名","3名","4名"], answer:1,
        explanation:"「up to two guests per invitation（1招待につき2名まで）」とあります。" },
      { q:"次の語の意味として最も近いものはどれですか： \"dispatch\"（We are pleased to confirm that your order has been dispatched.）",
        options:["返品する","発送する","支払う","保管する"], answer:1,
        explanation:"dispatch は「発送する」。注文品が発送されたことを伝える表現です。" },
      { q:"\"postpone\" の意味として正しいものはどれですか？",
        options:["中止する","延期する","早める","記録する"], answer:1,
        explanation:"postpone は「延期する」。reschedule（予定変更）と関連する頻出語です。" }
    ]
  },
  toeicl: {
    label:'TOEIC Part 7', emoji:'📄', color:'#e8b84b',
    note:'https://note.com/tekona_nekonote/n/n9ec824e8eb15',
    questions:[
      { q:"【告知】Due to renovations, the city library will be closed from March 1 to March 14. Online services remain available.  図書館はいつ閉館しますか？",
        options:["2月中ずっと","3月1日〜14日","3月14日のみ","年中無休"], answer:1,
        explanation:"「closed from March 1 to March 14」とあります。オンラインサービスは利用可能です。" },
      { q:"上の告知で、閉館中も利用できるものはどれですか？",
        options:["館内の閲覧室","オンラインサービス","駐車場","会議室"], answer:1,
        explanation:"「Online services remain available」とあります。" },
      { q:"【チャット】A: Can you send the report by 3 PM? B: Sure, I'll have it ready by lunch.  Bはいつまでにレポートを用意しますか？",
        options:["午後3時","昼まで","明日","今は無理"], answer:1,
        explanation:"「I'll have it ready by lunch（昼までに用意する）」とあり、3時より早い対応です。" },
      { q:"\"in advance\" の意味として正しいものはどれですか？",
        options:["事前に","遅れて","偶然に","最終的に"], answer:0,
        explanation:"in advance は「事前に・前もって」。予約や支払いの文脈で頻出です。" },
      { q:"\"be entitled to ~\" の意味として正しいものはどれですか？",
        options:["〜を禁止される","〜の権利・資格がある","〜を疑う","〜を延期する"], answer:1,
        explanation:"be entitled to は「〜する権利・資格がある」。会員特典などの文脈で頻出です。" }
    ]
  },
  kaigo: {
    label:'介護福祉士', emoji:'🧑‍⚕️', color:'#2dd4bf',
    note:'https://note.com/tekona_nekonote/n/n89e9631619e8',
    questions:[
      { q:"「ノーマライゼーション」の考え方として最も適切なものはどれですか？",
        options:["障害者を施設に集めて保護する","障害の有無にかかわらず誰もが地域で普通に生活できる社会を目指す","高齢者を優先支援する","医療を中心に支援する"], answer:1,
        explanation:"障害のある人もない人もともに地域で当たり前の生活を送れる社会を目指す理念です。" },
      { q:"片麻痺のある人の衣服の着脱で、原則として正しいのはどれですか？",
        options:["脱ぐときは患側から、着るときは健側から","脱ぐときは健側から、着るときは患側から","どちらも健側から","どちらも患側から"], answer:1,
        explanation:"「脱健着患」。脱ぐときは健側から、着るときは患側から行います。" },
      { q:"認知症の中で最も多い原因疾患はどれですか？",
        options:["脳血管性認知症","アルツハイマー型認知症","レビー小体型認知症","前頭側頭型認知症"], answer:1,
        explanation:"認知症で最も多いのはアルツハイマー型認知症で、全体の半数以上を占めます。" },
      { q:"食事介助で誤嚥を防ぐための姿勢として適切なのはどれですか？",
        options:["仰向けで顎を上げる","座位でやや顎を引いた姿勢","完全に寝た姿勢","顎を上げて上を向く"], answer:1,
        explanation:"座位でやや顎を引いた姿勢が誤嚥予防に適切です。顎を上げると誤嚥しやすくなります。" },
      { q:"介護福祉士が研修修了後に実施できる医療的ケアはどれですか？",
        options:["注射","喀痰吸引と経管栄養","手術の補助","薬の処方"], answer:1,
        explanation:"研修修了・登録した介護福祉士は、医師の指示と看護師の連携のもとで喀痰吸引と経管栄養を実施できます。" }
    ]
  },
  caremane: {
    label:'ケアマネ', emoji:'📋', color:'#818cf8',
    note:'https://note.com/tekona_nekonote/n/n4ffee1e2c66c',
    questions:[
      { q:"介護保険制度における保険者はどれですか？",
        options:["国","都道府県","市町村及び特別区","国民健康保険団体連合会"], answer:2,
        explanation:"介護保険の保険者は市町村及び特別区です。" },
      { q:"要介護認定の二次判定を行う機関はどれですか？",
        options:["介護認定審査会","主治医","ケアマネジャー","市町村長"], answer:0,
        explanation:"一次判定はコンピュータ、二次判定は介護認定審査会が行います。" },
      { q:"介護保険の財源構成として正しいものはどれですか？",
        options:["全額公費","公費50％・保険料50％","全額保険料","公費70％・保険料30％"], answer:1,
        explanation:"公費50％（国・都道府県・市町村）と保険料50％で構成されます。" },
      { q:"居宅介護支援のモニタリングで、ケアマネが原則行うべきことはどれですか？",
        options:["年1回の訪問","少なくとも月1回の利用者宅訪問","訪問は不要","電話のみでよい"], answer:1,
        explanation:"原則として少なくとも月1回利用者宅を訪問し面接、月1回以上記録します。" },
      { q:"地域包括支援センターに配置が義務づけられている専門職の組み合わせはどれですか？",
        options:["医師・看護師・薬剤師","保健師・社会福祉士・主任介護支援専門員","介護福祉士・理学療法士・栄養士","弁護士・税理士・司法書士"], answer:1,
        explanation:"保健師・社会福祉士・主任介護支援専門員の3職種を配置します。" }
    ]
  },
  kikenbutsu: {
    label:'危険物乙4', emoji:'🔥', color:'#f97316',
    note:'https://note.com/tekona_nekonote/n/ncafb82e55c2c',
    questions:[
      { q:"危険物乙種第4類で取り扱える危険物の分類はどれですか？",
        options:["引火性液体","酸化性固体","可燃性固体","自然発火性物質"], answer:0,
        explanation:"第4類危険物は「引火性液体」です。乙種第4類はこの第4類の取扱いと立会いができます。" },
      { q:"ガソリンの指定数量として正しいものはどれですか？",
        options:["50L","200L","1,000L","2,000L"], answer:1,
        explanation:"ガソリン（第1石油類・非水溶性）の指定数量は200Lです。灯油・軽油は1,000L、重油は2,000Lです。" },
      { q:"燃焼の三要素として正しい組み合わせはどれですか？",
        options:["可燃物・酸素供給源・点火源（熱源）","可燃物・水・空気","酸素・窒素・点火源","熱・光・煙"], answer:0,
        explanation:"燃焼の三要素は可燃物・酸素供給源・点火源です。一つを取り除けば燃焼は止まり、これが消火の原理になります。" },
      { q:"引火しやすい順（引火点が低い順）に並んでいるものはどれですか？",
        options:["ガソリン → 灯油 → 重油","重油 → 灯油 → ガソリン","灯油 → ガソリン → 重油","重油 → ガソリン → 灯油"], answer:0,
        explanation:"引火点はガソリン（約-40℃以下）＜灯油（約40℃以上）＜重油（約70℃以上）。ガソリンが最も引火しやすく危険です。" },
      { q:"第4類危険物（油火災）の消火に一般に「適さない」方法はどれですか？",
        options:["棒状の強い注水","泡消火","粉末消火","二酸化炭素消火"], answer:0,
        explanation:"第4類の多くは水より軽く水に溶けないため、棒状注水は油を浮かせ広げてしまい不適です。泡・粉末・二酸化炭素による窒息消火が有効です。" }
    ]
  }
};

// 教科の表示順
const DEMO_ORDER = ['kikenbutsu','boki3','fp3','takken','itp','gkentei','toeic','toeicl','kaigo','caremane'];
