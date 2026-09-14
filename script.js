// 8大デザインスタイルの完全データ定義（シチュエーション写真対応版）
const websiteStyles = {
  // 1. グラスモフィズム (Glassmorphism)
  glass: {
    logoMark: '✨',
    logoName: 'AuraGlass',
    navLinks: ['デザインシステム', 'コンポーネント', 'テンプレート', 'ショーケース'],
    navAction: '無料トライアル',
    badgeIcon: '🪟',
    badgeText: 'Apple/iOS スタイル・王道トレンド',
    title: '光と透明感が織りなす、<br><span class="gradient-text">最先端のWeb体験</span>を。',
    subtext: '幻想的なオーロラ背景とすりガラス（Frosted Glass）効果が、あなたのWebサイトに上質な浮遊感とプレミアムな高級感をもたらします。',
    mainCta: '今すぐ無料で始める',
    subCta: 'ライブデモを見る',
    proofLead: '世界中のクリエイティブスタジオや先進SaaSが採用',
    partnerLogos: ['STUDIO GLOW', 'LUMEN.AI', 'PRISM LABS', 'AETHER', 'VISIONARY'],
    mockupHtml: `
      <div class="mockup-card-container floating-mockup">
        <div class="glass-photo-card">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80" alt="クリエイティブ・ポートレート" class="glass-hero-img">
          <div class="glass-pill-tag">✨ Frosted Glass</div>
          <div class="glass-overlay-panel">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span style="font-weight: 800; font-size: 1rem;">クリエイティブ・スタジオ 2026</span>
              <span style="background: rgba(255,255,255,0.3); padding: 2px 8px; border-radius: 99px; font-size: 0.75rem;">LIVE</span>
            </div>
            <p style="font-size: 0.85rem; opacity: 0.92; line-height: 1.5;">
              背景写真の上に半透明のすりガラスが浮遊し、光と人物が美しく透けて調和する極上の視覚効果。
            </p>
          </div>
        </div>
      </div>
    `,
    features: [
      '<strong>半透明の背景:</strong> <code>rgba(255, 255, 255, 0.16)</code> で光を透過',
      '<strong>すりガラスぼかし:</strong> <code>backdrop-filter: blur(24px)</code>',
      '<strong>極細ハイライト境界線:</strong> <code>1px solid rgba(255, 255, 255, 0.3)</code>',
      '<strong>多重ドロップシャドウ:</strong> 浮遊感を際立たせる柔らかな陰影'
    ],
    code: `/* グラスモフィズムの核となるCSS */
.glass-panel {
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}`,
    usecase: 'ポートフォリオ、ハイエンドSaaS、クリエイティブスタジオ、AppleライクなアプリUI',
    primaryBtn: 'カウントアップ',
    caption: 'すりガラスの上に乗るボタンの滑らかなホバーアニメーション：'
  },

  // 2. Bento Grid (Apple / Modern SaaS)
  bento: {
    logoMark: '🍱',
    logoName: 'BentoFlow',
    navLinks: ['機能一覧', 'インテグレーション', '顧客事例', 'プライシング'],
    navAction: '無料で試す',
    badgeIcon: '📐',
    badgeText: 'Linear / Vercel 採用の最新スタンダード',
    title: '美しく几帳面な、<br><span class="gradient-text">モダンSaaSの標準レイアウト</span>。',
    subtext: '日本の「お弁当箱」に着想を得たグリッドデザイン。幾何学的な整列と計算された余白が、複雑なプロダクトの魅力をシンプルに伝えます。',
    mainCta: 'ワークスペースを作成',
    subCta: 'プロダクトツアー',
    proofLead: '成長中のスタートアップからグローバルテックまで導入',
    partnerLogos: ['LINEAR', 'VERCEL', 'SUPABASE', 'NOTION', 'FIGMA'],
    mockupHtml: `
      <div class="mockup-card-container floating-mockup">
        <div class="bento-photo-card">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80" alt="ミニマルなMacBookワークスペース" class="bento-hero-img">
          <div class="bento-photo-meta">
            <div>
              <div style="font-weight: 800; font-size: 1.05rem; color: #1d1d1f;">Developer Workspace Pro</div>
              <div style="font-size: 0.82rem; color: #86868b;">クラウド自動同期・リアルタイムデプロイ</div>
            </div>
            <span style="background: #e8f5e9; color: #2e7d32; font-weight: 700; font-size: 0.8rem; padding: 4px 10px; border-radius: 980px;">稼働中 99.98%</span>
          </div>
        </div>
      </div>
    `,
    features: [
      '<strong>12カラムCSS Grid:</strong> 非対称で心地よいカード分割',
      '<strong>高精細1pxボーダー:</strong> <code>1px solid #e5e5ea</code> のクリーンな境界',
      '<strong>大きな角丸:</strong> <code>border-radius: 20px〜24px</code> の優しいカーブ',
      '<strong>抑制されたモノトーン:</strong> 洗練されたグレーとAppleブルーのアクセント'
    ],
    code: `/* Bento Gridの核となるCSS */
.bento-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}
.bento-tile {
  background: #ffffff;
  border: 1px solid #e5e5ea;
  border-radius: 20px;
}`,
    usecase: '機能紹介ページ（Feature一覧）、ダッシュボードUI、情報量の多いテック系サービス',
    primaryBtn: '機能を追加',
    caption: 'Apple風のなめらかな角丸ピル型ボタンの押し心地：'
  },

  // 3. ネオ・ブルータリズム (Neo-Brutalism)
  brutal: {
    logoMark: '⚡',
    logoName: 'POP!STUDIO',
    navLinks: ['作品集', 'クリエイター', 'ステッカー', 'ショップ'],
    navAction: '今すぐ購入！',
    badgeIcon: '🔥',
    badgeText: 'Gumroad / Figma界隈で大流行中！',
    title: '極太枠と硬い影！<br><span class="gradient-text">ポップ＆アグレッシブ</span>な主張。',
    subtext: 'あえてボカさない黒い硬影と、ビビッドなパステルカラーの衝撃。画面から飛び出してきそうな強烈な存在感で、退屈なWebをぶち壊します。',
    mainCta: 'カートに入れる 🛒',
    subCta: 'もっと見る 👀',
    proofLead: '世界中のインディー開発者やクリエイターが熱狂',
    partnerLogos: ['GUMROAD', 'PRODUCT HUNT', 'SUBSTACK', 'INDIE HACKERS'],
    mockupHtml: `
      <div class="mockup-card-container floating-mockup">
        <div class="brutal-photo-card">
          <div class="brutal-sticker-badge">NEW DROP! 🔥</div>
          <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80" alt="ストリートファッション・ポップスナップ" class="brutal-hero-img">
          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.5rem;">
            <div>
              <div style="font-weight: 900; font-size: 1.2rem; text-transform: uppercase;">STREET VIBES #01</div>
              <div style="font-weight: 700; font-size: 0.85rem;">★ 3,500+ COLLECTORS</div>
            </div>
            <span style="background: #4ade80; border: 2.5px solid #000; padding: 4px 10px; font-weight: 900; box-shadow: 2px 2px 0px #000;">¥4,800</span>
          </div>
        </div>
      </div>
    `,
    features: [
      '<strong>極太黒枠:</strong> <code>border: 3.5px solid #000000</code>',
      '<strong>ハードドロップシャドウ:</strong> ぼかしゼロの硬い影 <code>box-shadow: 6px 6px 0px #000</code>',
      '<strong>カチッと沈み込むボタン:</strong> <code>transform: translate(4px, 4px)</code>',
      '<strong>原色パステル:</strong> レモンイエロー、ミントグリーン、ショッキングピンク'
    ],
    code: `/* ネオ・ブルータリズムの核となるCSS */
.brutal-box {
  border: 3.5px solid #000000;
  box-shadow: 6px 6px 0px #000000;
  border-radius: 12px;
}
.brutal-btn:active {
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0px #000000;
}`,
    usecase: 'Webツール、クリエイター向けマーケットプレイス、若年層向けブランド、イベント告知',
    primaryBtn: 'プッシュ！',
    caption: 'クリックした瞬間、影の分だけカチッと沈み込む打鍵感をお試しください：'
  },

  // 4. サイバー・ダーク (Cyber / Futuristic Dark)
  cyber: {
    logoMark: '⚡',
    logoName: 'CYBER.AI',
    navLinks: ['Neural Core', 'API Docs', 'Security Matrix', 'Pricing'],
    navAction: 'Launch Terminal',
    badgeIcon: '🔮',
    badgeText: 'Web3 / AI / 次世代開発プラットフォーム',
    title: '深淵の闇にネオンが走る、<br><span class="gradient-text">圧倒的なサイバー未来感</span>。',
    subtext: 'ディープスペースブラックと発光ネオングロー。近未来テクノロジー、AIプラットフォーム、サイバーセキュリティの持つ凄みを演出します。',
    mainCta: 'アクセスキーを発行',
    subCta: 'APIリファレンス',
    proofLead: '次世代Web3＆フロンティアAIプロジェクトが採用',
    partnerLogos: ['OPENAI', 'HUGGING FACE', 'NVIDIA', 'SOLANA', 'ETHEREUM'],
    mockupHtml: `
      <div class="mockup-card-container floating-mockup">
        <div class="cyber-photo-card">
          <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80" alt="サイバーパンク・ネオンシティ" class="cyber-hero-img">
          <div class="cyber-hud-overlay">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.8rem; letter-spacing: 0.1em; color: #38bdf8;">[TARGET_LOCKED // TOKYO_GRID]</span>
              <span style="background: rgba(56, 189, 248, 0.2); border: 1px solid #38bdf8; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">LIVE SCAN</span>
            </div>
            <div>
              <div style="font-size: 1.25rem; font-weight: 800; color: #ffffff; text-shadow: 0 0 10px #38bdf8; margin-bottom: 0.3rem;">NEURAL LINK v4.8</div>
              <div style="font-size: 0.8rem; color: #94a3b8;">LATENCY: 0.8ms | QUANTUM ENCRYPTION: ACTIVE</div>
            </div>
          </div>
        </div>
      </div>
    `,
    features: [
      '<strong>漆黒の宇宙ブラック:</strong> <code>#07090e</code> のディープダーク背景',
      '<strong>発光ネオングロー:</strong> <code>box-shadow: 0 0 25px rgba(56, 189, 248, 0.3)</code>',
      '<strong>グラデーションテキスト:</strong> シアン〜パープル〜マゼンタの光の帯',
      '<strong>サイバーグリッド背景:</strong> 1pxラインによる電子回路・メッシュ演出'
    ],
    code: `/* サイバー・ダークの核となるCSS */
.cyber-panel {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(56, 189, 248, 0.35);
  box-shadow: 0 0 25px rgba(56, 189, 248, 0.2);
}
.neon-glow {
  text-shadow: 0 0 15px rgba(56, 189, 248, 0.8);
}`,
    usecase: 'AIプラットフォーム、サイバーセキュリティ、Web3/暗号資産、ゲーミング・開発者ツール',
    primaryBtn: 'コマンド実行',
    caption: 'サイバーネオンが発光するボタンのパルス効果：'
  },

  // 5. コーポレート・トラスト (Corporate & Trust)
  corporate: {
    logoMark: '🏛️',
    logoName: '日本ビジネスソリューションズ',
    navLinks: ['事業案内', 'ソリューション', 'サステナビリティ', '企業・IR情報'],
    navAction: '資料請求・お問い合わせ',
    badgeIcon: '🏢',
    badgeText: '大手企業・金融・官公庁の絶対標準',
    title: '確かな信頼と実績を刻む、<br><span class="gradient-text">日本のビジネススタンダード</span>。',
    subtext: '誠実さを象徴するディープネイビーと端正なボックス構造。東証プライム上場企業や金融機関が選ぶ、誰が見ても迷わない安心と格式を提供します。',
    mainCta: '無料コンサルティングを予約',
    subCta: '導入事例集をダウンロード',
    proofLead: '国内主要金融機関・自治体・東証プライム企業で多数の導入実績',
    partnerLogos: ['MITSUBISHI', 'SUMITOMO', 'HITACHI', 'NTT DATA', 'PANASONIC'],
    mockupHtml: `
      <div class="mockup-card-container floating-mockup">
        <div class="corp-photo-card">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80" alt="丸の内・大手町の近代高層オフィスビル群" class="corp-hero-img">
          <div class="corp-photo-footer">
            <div class="corp-crown-tag">
              <span>👑</span> 導入社数 No.1（※2026年 業界調査）
            </div>
            <h4 style="font-size: 1.15rem; font-weight: 800; color: #0a2540; margin-bottom: 0.3rem;">
              次世代エンタープライズDX基盤
            </h4>
            <p style="font-size: 0.85rem; color: #475569; line-height: 1.6;">
              東証プライム上場企業500社以上で稼働中。万全のセキュリティと24時間365日の日本語サポート体制。
            </p>
          </div>
        </div>
      </div>
    `,
    features: [
      '<strong>信頼のネイビー:</strong> <code>#0a2540</code> を軸とした誠実なトーン',
      '<strong>控えめな角丸:</strong> <code>border-radius: 4px〜6px</code> で堅実さを表現',
      '<strong>薄いグレーの境界線:</strong> <code>border: 1px solid #cbd5e1</code> で整理整頓',
      '<strong>高いコントラストと可読性:</strong> 白地に濃紺文字で誰でも読みやすい設計'
    ],
    code: `/* コーポレート・トラストの核となるCSS */
.corporate-card {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
}
.btn-primary {
  background: #0a2540;
  border-radius: 4px;
}`,
    usecase: '上場企業コーポレートサイト、金融・証券・保険、官公庁・行政、BtoBエンタープライズSaaS',
    primaryBtn: '申請・確認',
    caption: 'ビジネスの現場で誰もが安心感を覚える端正なボタン：'
  },

  // 6. メガEC・マーケット (Amazon風)
  ecommerce: {
    logoMark: '🛒',
    logoName: 'MEGA STORE',
    navLinks: ['タイムセール', 'ランキング', '新着商品', '定期おトク便'],
    navAction: 'カート (3)',
    badgeIcon: '🛍️',
    badgeText: '世界No.1シェアの購買促進UI',
    title: '購買意欲を限界まで刺激する、<br><span class="gradient-text">世界のメガECスタンダード</span>。',
    subtext: '毎日何億人ものユーザーが自然とボタンを押す「圧倒的既視感」。黄色〜オレンジの購買ボタン、★4.9レビュー、赤いセールバッジが購入率を跳ね上げます。',
    mainCta: '今すぐ購入する 🚚',
    subCta: '欲しいものリストに追加',
    proofLead: '今すぐ使える！全品プライム即日お届け配送に対応',
    partnerLogos: ['PRIME EXPRESS', 'SUPER DELIVERY', 'PAY SMART', 'CARD SECURE'],
    mockupHtml: `
      <div class="mockup-card-container floating-mockup">
        <div class="ec-photo-card">
          <span class="ec-sale-badge">特選タイムセール</span>
          <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80" alt="ショッピング・ギフト開封の喜び" class="ec-hero-img">
          <h4 style="font-size: 1.05rem; font-weight: 700; line-height: 1.4;">
            プレミアム・スマートライフ パッケージ 2026
          </h4>
          <div style="color: #de7921; font-weight: 700; font-size: 0.9rem; margin: 0.3rem 0;">
            ★★★★★ <span style="color: #007185; font-size: 0.8rem;">4.9 (4,812件のレビュー)</span>
          </div>
          <div style="margin: 0.5rem 0 0.8rem;">
            <span style="color: #cc0c39; font-size: 1.25rem; font-weight: 800;">-32%</span>
            <span style="font-size: 1.5rem; font-weight: 900; color: #b12704; margin-left: 0.4rem;">￥12,800</span>
            <span style="font-size: 0.8rem; color: #565959; text-decoration: line-through; margin-left: 0.5rem;">参考: ￥18,900</span>
          </div>
          <button style="width: 100%; background: linear-gradient(to bottom, #ffd814, #f7ca00); border: 1px solid #fcd200; border-radius: 20px; padding: 0.75rem; font-weight: 800; font-size: 0.95rem; cursor: pointer; box-shadow: 0 2px 5px rgba(213,217,217,0.5);">
            今すぐカートに追加
          </button>
        </div>
      </div>
    `,
    features: [
      '<strong>購買促進カラー:</strong> おなじみの黄色〜オレンジ <code>#ffd814 / #ffa41c</code>',
      '<strong>高密度な情報設計:</strong> 価格、割引率、レビュー星評価の即時視認',
      '<strong>親しみやすい角丸:</strong> <code>border-radius: 8px</code> とピル型CTAボタン',
      '<strong>安心のAmazonグレー背景:</strong> <code>background: #eaeded</code> でカードを浮き彫りに'
    ],
    code: `/* メガEC風の核となるCSS */
.btn-buy-now {
  background: linear-gradient(to bottom, #ffd814, #f7ca00);
  border: 1px solid #fcd200;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(213, 217, 217, 0.5);
}
.price-red { color: #b12704; }`,
    usecase: 'ECサイト・ネットショップ、D2Cモール、サブスクリプション購入ページ、チケット予約',
    primaryBtn: '今すぐカートに追加',
    caption: '世界で最もクリックされている黄色い購買ボタンの押し心地：'
  },

  // 7. マテリアル・デザイン (Material You / Google風)
  material: {
    logoMark: '🔵',
    logoName: 'Workspace GO',
    navLinks: ['アプリ連携', 'ドライブ', 'カレンダー', '管理者設定'],
    navAction: 'Google アカウントでログイン',
    badgeIcon: '📱',
    badgeText: 'Google標準の「Material You (M3)」デザイン',
    title: '誰にでも親しみやすい、<br><span class="gradient-text">Google標準のモダン・マテリアル</span>。',
    subtext: 'AndroidやGmailで全世界20億人が毎日触れるMaterial 3。優しいパステルトーン、大きな角丸サーフェス、スタジアム型のピルボタンが極上の快適さを生み出します。',
    mainCta: '使ってみる',
    subCta: '機能ツアー',
    proofLead: 'Google Workspace エコシステムと完全に調和',
    partnerLogos: ['GOOGLE CLOUD', 'ANDROID 15', 'CHROMEOS', 'FLUTTER'],
    mockupHtml: `
      <div class="mockup-card-container floating-mockup">
        <div class="material-photo-card">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80" alt="カフェでカジュアルに働くフレンドリーなチーム" class="material-hero-img">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.25rem 0.5rem;">
            <div>
              <div style="font-weight: 700; font-size: 1.05rem; color: #1a1b1f;">スマート・チームスペース</div>
              <div style="font-size: 0.8rem; color: #49454f;">Google Workspaceとシームレスに同期</div>
            </div>
            <span style="background: #eaddff; color: #21005d; padding: 4px 12px; border-radius: 100px; font-weight: 700; font-size: 0.78rem;">同期完了</span>
          </div>
        </div>
      </div>
    `,
    features: [
      '<strong>M3サーフェスカラー:</strong> <code>#f3edf7</code> の優しいトーンサーフェス',
      '<strong>ダイナミックなピル形状:</strong> ボタンやチップに <code>border-radius: 100px</code>',
      '<strong>大きな角丸カード:</strong> <code>border-radius: 24px</code> の温かみある構造',
      '<strong>フラット＆レイヤー:</strong> 重なりと陰影で階層を直感的に表現'
    ],
    code: `/* Material You (M3) の核となるCSS */
.m3-card {
  background: #f3edf7;
  border-radius: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}
.m3-btn {
  border-radius: 100px;
  background: #6750a4;
  color: #ffffff;
}`,
    usecase: 'Webアプリケーション、ダッシュボード、Googleエコシステム連動ツール、社内ポータル',
    primaryBtn: '操作を保存',
    caption: 'Googleアプリでおなじみの丸みを帯びたマテリアルボタン：'
  },

  // 8. エディトリアル・メディア (日経/Medium風)
  editorial: {
    logoMark: '✒️',
    logoName: '日報新聞デジタル',
    navLinks: ['速報ニュース', '経済・ビジネス', 'テクノロジー', 'コラム・論考'],
    navAction: '有料会員登録',
    badgeIcon: '📰',
    badgeText: '日経新聞 / Medium / ポータルの知的活字空間',
    title: '美しい明朝体と紙面、<br><span class="gradient-text">知的な説得力を宿す活字美</span>。',
    subtext: '日本の新聞や文芸誌が培ったタイポグラフィの極致。生成り色の紙のような背景と直角の罫線が、文章そのものの重みと信頼性を何倍にも引き立てます。',
    mainCta: '全文を読む（初回無料）',
    subCta: '紙面ビューアー',
    proofLead: '全国500万人の読者と知性をつなぐ信頼のジャーナリズム',
    partnerLogos: ['THE NIKKEI', 'FINANCIAL TIMES', 'MEDIUM', 'WIRED JAPAN'],
    mockupHtml: `
      <div class="mockup-card-container floating-mockup">
        <div class="editorial-photo-card">
          <div style="border-bottom: 2px solid #1a1a1a; padding-bottom: 0.5rem; margin-bottom: 0.75rem; display: flex; justify-content: space-between; font-size: 0.8rem;">
            <span>第48,920号 朝刊一面</span>
            <span>2026年9月14日（月曜日）</span>
          </div>
          <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=900&q=80" alt="万年筆と書物、知的な書斎風景" class="editorial-hero-img">
          <div class="editorial-caption">
            ▲ 写真：東京・大手町。自律型AIと人間の共創が拓くデザインの新境地（撮影：本社写真部）
          </div>
          <h4 style="font-family: 'Noto Serif JP', serif; font-size: 1.25rem; font-weight: 900; line-height: 1.4; margin-top: 0.75rem;">
            「生成AIの浸透で変容するWebデザインと知のアーカイブ」
          </h4>
        </div>
      </div>
    `,
    features: [
      '<strong>美しい明朝体:</strong> <code>Noto Serif JP</code> による格調高い見出し',
      '<strong>紙の質感背景:</strong> <code>#f8f7f2</code> の温かみある生成り色',
      '<strong>角丸ゼロの直角美:</strong> <code>border-radius: 0px</code> で新聞のような端正さ',
      '<strong>飾り罫・細い罫線:</strong> <code>border: 1px solid #dcd7cc</code> で文章を区切る'
    ],
    code: `/* エディトリアル・メディアの核となるCSS */
.editorial-card {
  font-family: 'Noto Serif JP', serif;
  background: #ffffff;
  border: 1px solid #dcd7cc;
  border-radius: 0px;
}
.headline { border-bottom: 1px solid #e0deda; }`,
    usecase: 'オンラインメディア・ニュース、企業のオウンドメディア、学術・論文レポート、ブログ',
    primaryBtn: '記事を保存',
    caption: '活字の美しさと直角の端正さが際立つボタン：'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // スタイル切り替えボタン群
  const toggleBtns = document.querySelectorAll('.style-toggle-btn');

  // ヘッダー要素
  const logoMarkEl = document.getElementById('logoMark');
  const logoNameEl = document.getElementById('logoName');
  const navLinksEl = document.getElementById('navLinks');
  const navActionBtnEl = document.getElementById('navActionBtn');

  // ヒーロー要素
  const heroBadgeIcon = document.getElementById('badgeIcon');
  const heroBadgeText = document.getElementById('badgeText');
  const heroTitleEl = document.getElementById('heroTitle');
  const heroSubtextEl = document.getElementById('heroSubtext');
  const mainCtaTextEl = document.getElementById('mainCtaText');
  const subCtaTextEl = document.getElementById('subCtaText');
  const heroMockupWrapperEl = document.getElementById('heroMockupWrapper');

  // 実績バー要素
  const proofLeadEl = document.getElementById('proofLead');
  const partnerLogosEl = document.getElementById('partnerLogos');

  // 特徴＆Bento要素
  const featureBulletsEl = document.getElementById('featureBullets');
  const codeSnippetEl = document.getElementById('codeSnippet');
  const usecaseDetailEl = document.getElementById('usecaseDetail');
  const cardCaptionEl = document.getElementById('cardCaption');
  const interactiveBtnTextEl = document.getElementById('interactiveBtnText');
  const footerLogoEl = document.getElementById('footerLogo');

  // カウンター要素
  const counterValueEl = document.getElementById('counterValue');
  const incrementBtn = document.getElementById('incrementBtn');
  const resetBtn = document.getElementById('resetBtn');

  // スタイル適用関数
  function switchStyle(styleKey) {
    const data = websiteStyles[styleKey];
    if (!data) return;

    // 1. data-theme をルートに適用
    document.documentElement.setAttribute('data-theme', styleKey);

    // 2. 切替ボタンのアクティブ同期
    toggleBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-style') === styleKey);
    });

    // 3. ヘッダーの同期
    logoMarkEl.textContent = data.logoMark;
    logoNameEl.textContent = data.logoName;
    footerLogoEl.textContent = data.logoName;
    navActionBtnEl.textContent = data.navAction;
    navLinksEl.innerHTML = data.navLinks.map(link => `<li><a href="#" class="nav-link">${link}</a></li>`).join('');

    // 4. ヒーローセクションの同期
    heroBadgeIcon.textContent = data.badgeIcon;
    heroBadgeText.textContent = data.badgeText;
    heroTitleEl.innerHTML = data.title;
    heroSubtextEl.textContent = data.subtext;
    mainCtaTextEl.textContent = data.mainCta;
    subCtaTextEl.textContent = data.subCta;

    // 5. 右側ビジュアルモックアップ（写真付き）の同期
    heroMockupWrapperEl.innerHTML = data.mockupHtml;

    // 6. 実績バーの同期
    proofLeadEl.textContent = data.proofLead;
    partnerLogosEl.innerHTML = data.partnerLogos.map(logo => `<span class="dummy-logo">${logo}</span>`).join('');

    // 7. 特徴＆Bento Gridの同期
    featureBulletsEl.innerHTML = data.features.map(feat => `<li>${feat}</li>`).join('');
    codeSnippetEl.textContent = data.code;
    usecaseDetailEl.textContent = data.usecase;
    cardCaptionEl.textContent = data.caption;
    interactiveBtnTextEl.textContent = data.primaryBtn;

    // LocalStorage に保存
    localStorage.setItem('activeWebsiteStyle', styleKey);
  }

  // ボタンイベント登録
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetStyle = btn.getAttribute('data-style');
      switchStyle(targetStyle);
    });
  });

  // 初期読み込み
  const initialStyle = localStorage.getItem('activeWebsiteStyle') || 'glass';
  switchStyle(initialStyle);

  // カウンター動作
  let count = 0;
  function updateCounter(val) {
    count = val;
    counterValueEl.textContent = count;
    counterValueEl.classList.remove('pop');
    void counterValueEl.offsetWidth; // リフロー
    counterValueEl.classList.add('pop');
  }

  incrementBtn.addEventListener('click', () => updateCounter(count + 1));
  resetBtn.addEventListener('click', () => updateCounter(0));
});
