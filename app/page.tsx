/* eslint-disable @next/next/no-img-element */

const asset = {
  logo: "/images/kanteikyoku-logo.png",
  libertyLogo: "/images/liberty-logo.jpg",
  store: "/images/store.jpg",
  staff: "/images/staff.jpg",
  staffSugitani: "/images/staff-sugitani.png",
  staffKamo: "/images/staff-kamo.png",
  bag01: "/images/bag-01.jpg",
  bag02: "/images/bag-02.jpg",
  watch: "/images/watch.jpg",
  jewelry01: "/images/jewelry-01.jpg",
  jewelry02: "/images/jewelry-02.jpg",
  gold: "/images/gold.jpg",
  wallet: "/images/wallet.webp",
  diamond: "/images/diamond.webp",
  platinum: "/images/platinum.webp",
  preciousMetals: "/images/precious-metals.webp",
  step01: "/images/step-01.webp",
  step02: "/images/step-02.webp",
  step03: "/images/step-03.webp",
  homeItems: "/images/home-items.webp",
  worriedWoman: "/images/worried-woman.png",
  categoryWoman: "/images/category-woman.png",
  categoryPossibilityPc: "/images/category-possibility-pc.png",
  categoryPossibilitySp: "/images/category-possibility-sp.png",
  fvProducts: "/images/fv-products.webp",
  fvSp: "/images/fv-sp.webp",
  fvPc: "/images/fv-pc.png",
  campaign10Up: "/images/campaign-simple-sp.png",
  campaign10UpPc: "/images/campaign-simple-pc.png",
  lineIcon: "/images/line-icon.png",
  phoneIcon: "/images/phone-icon.png",
  reason02: "/images/reason-02-car-lot-staff.png",
  reason03: "/images/reason-03.webp",
  concernA: "/images/concern-a.png",
  concernB: "/images/concern-b.png",
  concernC: "/images/concern-c.png",
  consultationIcons: [
    "/images/consultation-new-01.webp",
    "/images/consultation-new-02.webp",
    "/images/consultation-new-03.webp",
    "/images/consultation-new-04.webp",
    "/images/consultation-new-05.webp",
  ],
} as const;

const contact = {
  phoneDisplay: "電話番号を入力",
  phoneHref: "#store-info",
  phoneHours: "受付時間を入力",
  lineHref: "#store-info",
} as const;

const categories = [
  { name: "ブランドバッグ", image: asset.bag01 },
  { name: "ブランド財布・小物", image: asset.wallet, cutout: true },
  { name: "高級時計", image: asset.watch },
  { name: "ジュエリー", image: asset.jewelry01 },
  { name: "ダイヤモンド", image: asset.diamond, cutout: true },
  { name: "金", image: asset.gold },
  { name: "プラチナ", image: asset.platinum, cutout: true },
  { name: "その他貴金属", image: asset.preciousMetals, cutout: true },
] as const;

const concerns = [
  "古いバッグ",
  "キズや汚れ",
  "箱なし",
  "保証書なし",
  "動くか分からない時計",
  "片方だけのピアス",
  "切れたネックレス",
  "他店で断られたもの",
] as const;

const consultationExamples = [
  {
    person: "女性",
    kind: "female",
    text: "昔使っていたブランドバッグ。クローゼットに眠ったままなので、この機会に一度見てほしい。",
  },
  {
    person: "男性",
    kind: "male",
    text: "使わなくなった腕時計。店まで持って行くのが面倒なので、自宅まで来てもらえると助かる。",
  },
  {
    person: "女性",
    kind: "female",
    text: "母から譲り受けたジュエリー。価値が分からないので、まず査定してほしい。",
  },
  {
    person: "女性",
    kind: "female",
    text: "金かどうか分からないアクセサリー。売れるものなのか確認したい。",
  },
  {
    person: "男性",
    kind: "male",
    text: "箱をなくしてしまった時計でも査定できるか知りたい。",
  },
] as const;

const areas = [
  "城陽市",
  "宇治市",
  "八幡市",
  "久世郡久御山町",
  "京田辺市",
  "木津川市",
  "相楽郡精華町",
  "京都市",
  "向日市",
  "長岡京市",
  "奈良市",
] as const;

const faqs = [
  ["出張買取には料金がかかりますか？", "※出張料・査定料など、正式な料金体系を入力してください。"],
  ["査定してもらったら、必ず売らないといけませんか？", "※キャンセル可否・費用など、正式な運用回答を入力してください。"],
  ["どんなものを買取できますか？", "ブランドバッグ・時計・ジュエリー・貴金属などを取り扱う予定です。詳しい対象品はご予約時にご確認ください。"],
  ["古いものや壊れているものでも査定できますか？", "状態やお品物によって異なります。査定可能かどうか、まずは電話またはLINEでご相談ください。"],
  ["箱や保証書がなくても大丈夫ですか？", "お品物によって異なります。付属品がない場合も、まずはご相談ください。"],
  ["査定にはどのくらい時間がかかりますか？", "※品数や訪問条件に応じた、正式な所要時間の目安を入力してください。"],
  ["出張買取はどこまで来てもらえますか？", "城陽市を中心に京都南部などを想定しています。正式な対象エリアはご予約時にご確認ください。"],
  ["10%UPキャンペーンはいつまでですか？", "2026年11月30日までの予定です。適用条件は確定後に本ページでご案内します。"],
  ["10%UPの対象外商品はありますか？", "※対象商品・上限金額・対象外品・その他の適用条件を入力してください。"],
  ["出張買取には何が必要ですか？", "※本人確認書類など、正式に必要なものを入力してください。"],
] as const;

function PhoneIcon() { return <span className="button-icon phone-receiver" aria-hidden="true"><img src={asset.phoneIcon} alt="" /></span>; }
function LineIcon() { return <span className="button-icon line-mark" aria-hidden="true"><img src={asset.lineIcon} alt="" /></span>; }

function CTAButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "cta-buttons compact" : "cta-buttons"}>
      <a className="cta-button phone" href={contact.phoneHref}>
        <PhoneIcon />
        <span>
          <small>電話で出張買取を予約</small>
          <strong>{contact.phoneDisplay}</strong>
          {!compact && <em>{contact.phoneHours}</em>}
        </span>
      </a>
      <a className="cta-button line" href={contact.lineHref}>
        <LineIcon />
        <span>
          <small>LINEでカンタン</small>
          <strong>出張買取を予約</strong>
          {!compact && <em>写真を送って相談もOK</em>}
        </span>
      </a>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  children,
  light = false,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`section-heading${light ? " light" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{children}</h2>
      <span className="heading-rule" aria-hidden="true" />
    </div>
  );
}

function CampaignLockup({ small = false, hero = false }: { small?: boolean; hero?: boolean }) {
  if (hero) {
    return (
      <div className="campaign-lockup hero-campaign">
        <div className="campaign-ribbon">
          <span className="laurel-branch laurel-left" aria-hidden="true">{Array.from({ length: 7 }, (_, index) => <i key={index} />)}</span>
          <b>OPENに向けて買取強化中！</b>
          <span className="laurel-branch laurel-right" aria-hidden="true">{Array.from({ length: 7 }, (_, index) => <i key={index} />)}</span>
        </div>
        <div className="hero-offer">
          <span className="hero-price-label" aria-label="買取価格"><i>買</i><i>取</i><i>価</i><i>格</i></span>
          <div className="percent-line">
            <span className="percent-number">10</span>
            <span className="percent-unit"><b>%</b></span>
          </div>
          <div className="offer-copy"><strong>UP</strong></div>
        </div>
        <div className="deadline"><span>OPEN前限定</span><strong>11/30</strong>まで</div>
      </div>
    );
  }

  return (
    <figure className={`campaign-image${small ? " small" : ""}`}>
      <picture>
        {!small && <source media="(min-width: 768px)" srcSet={asset.campaign10UpPc} />}
        <img src={asset.campaign10Up} alt="買取強化中。買取価格10%UP、OPEN前限定11月30日まで" width="750" height="797" loading="lazy" />
      </picture>
    </figure>
  );
}

function ReservationBlock({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`reservation-block${dark ? " dark" : ""}`} id="reserve">
      <p>＼ まずは質問だけでもOK ／</p>
      <CTAButtons />
      <small className="contact-note">電話番号・LINE URL・受付時間は公開前に差し替えてください</small>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="ページ上部へ戻る">
          <img src={asset.logo} alt="質屋かんてい局" width="404" height="90" />
          <span>城陽店</span>
        </a>
        <div className="header-open"><b>京都初出店</b><span>12.1 OPEN予定</span></div>
        <a className="header-cta" href="#reserve"><PhoneIcon /><span className="header-cta-copy"><span>出張買取</span><strong>予約する</strong></span></a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-topline"><strong><em>2026</em><span>.12.1</span> <small>TUE</small></strong><b>GRAND OPEN予定！</b></div>
        <div className="hero-grid">
          <h1 id="hero-title" className="sr-only">無料出張査定で高額買取</h1>
          <picture className="hero-fv-image">
            <source media="(min-width: 700px)" srcSet={asset.fvPc} />
            <img src={asset.fvSp} alt="無料出張査定・高額買取。OPEN前限定で買取価格10%UP、11月30日まで" width="750" height="1041" />
          </picture>
        </div>
        <div className="hero-trust"><span>全国展開の質屋・リユースチェーン</span><i aria-hidden="true" /><strong>京都初出店！</strong></div>
      </section>

      <section className="hero-cta section-pad" aria-label="出張買取のご予約">
        <div className="shell"><ReservationBlock /></div>
      </section>

      <section className="open-section section-pad" id="open">
        <div className="shell open-grid">
          <div className="open-copy">
            <SectionHeading><small className="section-subtitle">＼ 京都に初登場！ ／</small><b className="open-one-line">全国展開の<em>「質屋かんてい局」</em>が</b>城陽市にOPEN！</SectionHeading>
          </div>
          <figure className="store-photo gold-frame"><img src={asset.store} alt="質屋かんてい局 城陽店の店舗外観" width="1448" height="1086" loading="lazy" /></figure>
          <div className="open-date"><span>質屋かんてい局 城陽店</span><strong>2026.12.1 <small>TUE</small></strong><b>GRAND OPEN予定！</b></div>
        </div>
      </section>

      <section className="why-section section-pad" id="why">
        <div className="shell why-grid">
          <div className="campaign-offer">
            <div className="campaign-section-heading"><span>＼ OPENに向けて ／</span><strong>ただいま買取強化中！</strong><b className="campaign-section-deadline">OPEN前限定 <em>11/30</em>まで</b></div>
            <CampaignLockup />
            <p className="campaign-message"><strong>「いつか売ろう」</strong>と思っていた<br />お品物がある方は、<br />ぜひこの機会にご相談ください。</p>
          </div>
        </div>
        <div className="campaign-terms">※キャンペーンの対象商品・上限金額・対象外品・その他適用条件を入力</div>
      </section>

      <section className="categories-section section-pad">
        <div className="shell">
          <SectionHeading eyebrow="＼ なんでも高価買取！ ／">こんなお品物、<br /><em>眠っていませんか？</em></SectionHeading>
          <div className="category-grid">
            {categories.map((category) => (
              <article className={`category-card${"cutout" in category ? " category-card--cutout" : ""}`} key={category.name}>
                <img src={category.image} alt={`${category.name}のイメージ`} width="1024" height="1024" loading="lazy" />
                <h3>{category.name}</h3>
              </article>
            ))}
          </div>
          <div className="category-note">
            <picture>
              <source media="(min-width: 768px)" srcSet={asset.categoryPossibilityPc} />
              <img src={asset.categoryPossibilitySp} alt="買取できる可能性があります。女性スタッフがご案内します" width="750" height="354" loading="lazy" />
            </picture>
          </div>
          <a className="single-line-cta" href={contact.lineHref}><LineIcon /><span>LINEで写真を送って相談</span><b>›</b></a>
        </div>
      </section>

      <section className="condition-section section-pad">
        <div className="shell condition-grid">
          <div>
            <SectionHeading>こんなお品物も<br /><b className="condition-heading-line"><em>諦める前に</em><i className="condition-heading-break"><br /></i>ご相談ください！</b></SectionHeading>
            <div className="condition-concern-images" aria-label="よくあるご相談">
              <article className="concern-visual-card">
                <img src={asset.concernA} alt="ボロボロだけど大丈夫？" width="634" height="217" loading="lazy" />
              </article>
              <article className="concern-visual-card">
                <img src={asset.concernB} alt="他のお店で断られたんだけど" width="634" height="217" loading="lazy" />
              </article>
              <article className="concern-visual-card">
                <img src={asset.concernC} alt="こんな状態でも売れる？" width="634" height="217" loading="lazy" />
              </article>
            </div>
            <div className="condition-message">
              <p>そんなときこそ、</p>
              <strong>捨てる前にご相談ください！！</strong>
              <span>査定可能かどうか、<br />スタッフが丁寧に確認いたします。</span>
            </div>
            <div className="concern-grid">{concerns.map((concern) => <span key={concern}>✓ {concern}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="steps-section section-pad">
        <div className="shell">
          <SectionHeading><span className="steps-title">楽々 無料出張買取</span><small className="section-subtitle">＼ お店まで行かなくてOK！ ／</small><em>自宅にいるだけで</em><br />ブランド品が売れる</SectionHeading>
          <div className="steps-grid">
            {[
              ["01", "お申込み", "電話またはLINEから出張買取をご予約ください。", asset.step01],
              ["02", "ご自宅で査定", "かんてい局スタッフがご自宅までお伺い。ご希望の場所でお品物を査定します。", asset.step02],
              ["03", "ご成約", "査定内容をご確認いただき、ご納得いただけましたらご成約。", asset.step03],
            ].map(([num, title, text, image]) => (
              <article className="step-card" key={num}>
                <div className="step-number"><span>STEP</span> <b>{num}</b></div>
                <figure className="step-photo"><img src={image} alt={`${title}のイメージ`} width="1448" height="1086" loading="lazy" /></figure>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
          <ReservationBlock />
        </div>
      </section>

      <section className="reasons-section section-pad">
        <div className="shell">
          <SectionHeading light><small className="section-subtitle">＼ どうして選ばれるの？ ／</small><span className="reasons-store-label">かんてい局 城陽店</span><em className="reasons-main-title">選ばれる <b>3</b>つの理由</em></SectionHeading>
          <div className="reasons-grid">
            <article className="reason-card reason-brand">
              <span>REASON <b>01</b></span>
              <h3>全国チェーンの実績と<br /><em>確かな査定力</em></h3>
              <figure className="reason-store"><img src={asset.store} alt="質屋かんてい局 城陽店の外観" width="1448" height="1086" loading="lazy" /></figure>
              <div className="reason-services"><span><b>買取</b>BUY</span><span><b>販売</b>SELL</span><span><b>質預かり</b>PAWN</span></div>
              <p>かんてい局は、全国に店舗を展開する<strong>質屋・リユースショップのチェーン</strong>。各地で培った豊富な取引実績と相場データを査定に活かしています。</p>
              <p>買取・販売・質預かりを通じて蓄積した専門知識で、ブランドバッグ、時計、ジュエリー、貴金属などの<strong>本来の価値を見極めます。</strong></p>
            </article>
            <article className="reason-card liberty">
              <span>REASON <b>02</b></span>
              <h3>運営の親会社は<br /><em>株式会社リバティ</em>です。</h3>
              <figure className="reason-store"><img src={asset.reason02} alt="自動車展示場で車をご案内する爽やかなスタッフのイメージ" width="1536" height="1152" loading="lazy" /></figure>
              <div className="reason-services reason-liberty-stats"><span><b>全国約40拠点</b>NETWORK</span><span><b>グループ売上<br />600億円規模</b>GROUP SALES</span><span><b>地域最大級<br />の展示場</b>SHOWROOM</span></div>
              <p>CMやラジオの<strong>「リーリーリーリバティー！」</strong>のフレーズで親しまれている株式会社リバティは、全国に約40拠点を構え、<strong>グループ売上高約600億円</strong>を誇る自動車販売企業です。豊富な実績と安定した経営基盤をもとに、地域社会の皆様へ心からご満足いただける「安心」をお約束いたします。</p>
            </article>
            <article className="reason-card campaign"><span>REASON <b>03</b></span><h3>12月のOPENに向けて<br /><em>現在買取強化中！</em></h3><figure className="reason-store reason-product-image"><img src={asset.reason03} alt="買取強化中のブランドバッグ、時計、ジュエリー" width="1254" height="1254" loading="lazy" /></figure><p>12月1日の城陽店OPENに向けて、現在<strong>ブランドバッグ・時計・ジュエリー・貴金属</strong>などの買取を強化しています。OPEN前の今だからこそ、地域の皆様にかんてい局の査定力と便利な出張買取を知っていただけるよう、一点ずつ丁寧に価値を見極めます。<strong>買取価格10%UPは11月末日まで</strong>の期間限定です。</p></article>
          </div>
        </div>
      </section>

      <section className="consultation-section section-pad">
        <div className="shell">
          <SectionHeading>こんなご相談を<br /><em>お待ちしています</em></SectionHeading>
          <p className="example-disclaimer">※以下は実在の口コミではなく、ご相談イメージです</p>
          <div className="consultation-scroll">
            {consultationExamples.map((item, index) => (
              <article className="consultation-card" key={item.text}>
                <span className="consultation-label">ご相談イメージ {String(index + 1).padStart(2, "0")}</span>
                <div className="consultation-person" aria-label={`${item.person}のご相談イメージ`}>
                  <img src={asset.consultationIcons[index]} alt="" width="178" height="187" loading="lazy" />
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="swipe-hint">← 横にスワイプしてご覧ください →</p>
        </div>
      </section>

      <section className="staff-section section-pad">
        <div className="shell staff-intro">
          <SectionHeading>私たちが<br /><em>お伺いします！</em></SectionHeading>
          <div className="staff-members">
            <article className="staff-card">
              <figure><img src={asset.staff} alt="店舗責任者 木村航平" width="1448" height="1086" loading="lazy" /></figure>
              <div className="staff-name"><small>店舗責任者</small><strong>木村 航平</strong></div>
              <p>初めての方にも、分かりやすく丁寧にご説明します。売れるか分からないお品物もお気軽にご相談ください。</p>
            </article>
            <article className="staff-card">
              <figure><img src={asset.staffSugitani} alt="出張買取スタッフ 杉谷伊織" width="1448" height="1086" loading="lazy" /></figure>
              <div className="staff-name"><small>出張買取スタッフ</small><strong>杉谷 伊織</strong></div>
              <p>お品物の状態を一つずつ確認し、ご納得いただけるよう丁寧な査定を心がけます。</p>
            </article>
            <article className="staff-card">
              <figure><img src={asset.staffKamo} alt="出張買取スタッフ 加茂卓也" width="1448" height="1086" loading="lazy" /></figure>
              <div className="staff-name"><small>出張買取スタッフ</small><strong>加茂 卓也</strong></div>
              <p>ご不安やご質問にも親身に対応します。気になることは何でもお声がけください。</p>
            </article>
          </div>
        </div>
        <div className="shell"><ReservationBlock /></div>
      </section>

      <section className="area-section section-pad">
        <div className="shell area-content">
          <SectionHeading>城陽市を中心に<br /><em>京都南部へ出張！</em></SectionHeading>
          <div className="area-list">{areas.map((area) => <span key={area}>{area}</span>)}</div>
          <p className="area-note">上記以外のエリアも<br /><strong>お気軽にお問い合わせください。</strong><br /><small>※正式な営業対象地域に差し替えてください</small></p>
        </div>
      </section>

      <section className="big-cta section-pad">
        <div className="shell why-grid campaign-repeat-grid">
          <div className="campaign-offer">
            <div className="campaign-section-heading"><span>＼ OPENに向けて ／</span><strong>ただいま買取強化中！</strong><b className="campaign-section-deadline">OPEN前限定 <em>11/30</em>まで</b></div>
            <CampaignLockup />
            <p className="campaign-message"><strong>「売ろうかな？」</strong>と思った<br />今がチャンス！</p>
          </div>
        </div>
      </section>

      <section className="store-section section-pad" id="store-info">
        <div className="shell">
          <SectionHeading>質屋かんてい局<br /><em>城陽店</em></SectionHeading>
          <div className="store-grid">
            <figure><div className="store-image-crop"><img src={asset.store} alt="質屋かんてい局 城陽店 店舗外観" width="1448" height="1086" loading="lazy" /></div><figcaption>2026年12月1日（火）<b>GRAND OPEN予定！</b></figcaption></figure>
            <dl className="store-details">
              <div><dt>住所</dt><dd>店舗住所を入力</dd></div><div><dt>営業時間</dt><dd>営業時間を入力</dd></div><div><dt>電話番号</dt><dd>電話番号を入力</dd></div><div><dt>駐車場</dt><dd>駐車場情報を入力</dd></div><div><dt>運営会社</dt><dd>株式会社Li-Lu<br /><small>親会社：株式会社リバティ</small></dd></div>
              <div className="map-placeholder"><dt>MAP</dt><dd>正式な住所確定後、地図を設置</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="shell faq-shell">
          <SectionHeading>よくあるご質問</SectionHeading>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}><summary><span>Q</span><b>{question}</b><i aria-hidden="true">＋</i></summary><div className="faq-answer"><span>A</span><p>{answer}</p></div></details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section-pad">
        <div className="final-frame shell">
          <div className="campaign-offer">
            <div className="campaign-section-heading"><span>＼ OPENに向けて ／</span><strong>ただいま買取強化中！</strong><b className="campaign-section-deadline">OPEN前限定 <em>11/30</em>まで</b></div>
            <CampaignLockup />
            <p className="campaign-message">お家に眠っている<br /><strong className="campaign-products">バッグ・時計・ジュエリー・貴金属</strong><br />この機会に一度<br />査定してみませんか？</p>
          </div>
          <div className="campaign-terms">※キャンペーン適用条件を入力</div>
        </div>
      </section>
      <section className="final-cta-followup" aria-label="出張買取のご予約">
        <div className="final-cta-followup-inner shell">
          <b>＼ 予約はカンタン ／</b>
          <CTAButtons />
        </div>
      </section>
    </main>
  );
}

function MobileStickyCTA() {
  return (
    <nav className="mobile-sticky" aria-label="出張買取のご予約">
      <a href={contact.phoneHref}><PhoneIcon /><span>電話で<br /><b>予約</b></span></a>
      <a href={contact.lineHref}><LineIcon /><span>LINEで<br /><b>予約</b></span></a>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand"><img src={asset.logo} alt="質屋かんてい局" width="404" height="90" loading="lazy" /><strong>城陽店</strong><p>運営会社 株式会社Li-Lu<br />親会社 株式会社リバティ</p></div>
        <div className="footer-info"><p>住所：店舗住所を入力</p><p>電話番号：電話番号を入力</p><p>古物商許可番号：必要表示を入力</p><span className="privacy-placeholder">プライバシーポリシー（URLを設定）</span></div>
      </div>
      <p className="copyright">© 2026 質屋かんてい局 城陽店</p>
    </footer>
  );
}

export default function Home() {
  return <><Header /><Hero /><Footer /><MobileStickyCTA /></>;
}
