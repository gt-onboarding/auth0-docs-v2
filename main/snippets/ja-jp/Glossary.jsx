export const GlossaryPage = () => {
  const GLOSSARY = [
    {
      term: "アクセストークン",
      description:
        "アプリケーションが API にアクセスするために使用できる資格情報です。トークンの保持者が API へのアクセスと、付与されたスコープで指定された特定の操作を許可されていることを API に伝えます。アクセストークンの形式は任意ですが、よく使われるのは不透明な文字列と JSON Web Token（JWT）の 2 つです。アクセストークンは、HTTP の Authorization ヘッダーに Bearer 資格情報として含めて API に送信します。"
    },
    {
      term: "アカウントリンク",
      description: "複数のプラットフォームにまたがるユーザーアカウントを連結し、一度の資格情報の入力で複数のリソースやアプリケーションにアクセスできるようにすることです。"
    },
    {
      term: "Actions",
      description:
        "Auth0 のランタイムの特定のポイントで実行される、Node.js で記述された安全でテナント固有のバージョン管理された関数です。Actions は、カスタムロジックによって Auth0 の機能をカスタマイズ・拡張するために使用します。"
    },
    {
      term: "アダプティブ多要素認証",
      description:
        "ログイン試行の信頼度が低いと判断された場合にのみユーザーに対して実行される多要素認証（MFA）です。アダプティブ MFA では、Auth0 は必要なときにのみ MFA を実行し、悪意ある行為者には障壁を設けつつ、正当なユーザーのログイン体験はそのまま維持します。"
    },
    {
      term: "アプリケーション",
      description: "認証と ID 管理を Auth0 に依存するお客様のソフトウェアです。Auth0 は、シングルページ、通常の Web、ネイティブ、マシン間（M2M）の各アプリケーションをサポートしています。"
    },
    {
      term: "攻撃対策",
      description:
        "攻撃を検出・軽減するために Auth0 が提供する機能群です。ブルートフォース保護、不審な IP のスロットリング、漏えいパスワード検出、ボット検出、アダプティブ多要素認証などが含まれます。"
    },
    {
      term: "audience",
      description:
        "発行されたトークンの対象者を示す一意の識別子で、JSON Web Token 内では aud クレームとして表されます。audience の値は、ID トークンの場合はアプリケーション（クライアント ID）、アクセストークンの場合は呼び出し先の API（API 識別子）です。Auth0 では、アクセストークンの要求時に送信される audience の値によって、そのトークンが不透明な形式と JWT 形式のどちらで返されるかが決まります。"
    },
    {
      term: "Auth0 Dashboard",
      description: "Auth0 の主要な管理者向けインターフェースです。アプリケーションや API の登録、ユーザーストアや他のアイデンティティプロバイダーへの接続、Auth0 サービスの構成を行えます。"
    },
    {
      term: "認証デバイス",
      description: "クライアント起点バックチャネル認証フローにおいて、ユーザーが認証を行い同意を与えるデバイスです。"
    },
    {
      term: "認証サーバー",
      description:
        "ユーザーの身元を確認または否認するサーバーです。認証サーバーは、ユーザーが利用できる操作やリソースを制限することはありません（ただし、その判断材料となる情報を提供することはできます）。"
    },
    {
      term: "認可コード",
      description:
        "認可サーバーが生成し、認可応答の一部としてアプリケーションに返されるランダムな文字列です。認可コードは有効期間が比較的短く、認可コードフロー（PKCE の有無を問わず）を使用する際にトークンエンドポイントでアクセストークンと交換されます。"
    },
    {
      term: "認可フロー",
      description:
        "OAuth 2.0 で定義されている認可グラントの別称です。認可フローとは、リソース（アプリケーションまたは API）が要求者にアクセスを付与するために用いるワークフローです。技術の種類や要求者の種類に応じて、リソース所有者は認可コードフロー、PKCE、ROPG、インプリシット、クライアントクレデンシャルのいずれかを利用できます。"
    },
    {
      term: "認可サーバー",
      description:
        "ユーザーのアクセス範囲を定義する役割を担う中央集約型のサーバーです。たとえば、認可サーバーはユーザーが利用できるデータ、タスク、機能を制御できます。認可サーバーはユーザーの認証は行いません。ユーザーの身元を検証するのは認証サーバーの役割です。"
    },
    {
      term: "悪意ある行為者",
      description:
        "脅威アクターとも呼ばれます。危害を加える意図をもって、ビジネスや環境に脅威をもたらす存在（個人または集団）です。危害には、データセンターへの侵入から盗まれた資格情報によるシステムへの不正侵入まで、物理的な被害とサイバー上の被害の両方が含まれます。"
    },
    {
      term: "ベータ",
      description:
        "対象の機能や動作を契約者に提供し、GA リリース前に最終的なフィードバックを得ながら、新しい製品機能を試して採用するための期間を設ける製品リリース段階です。機能はコードとして完成しており、安定していて、さまざまなシナリオで有用であり、GA リリースの品質基準を満たす、あるいはほぼ満たしていると考えられます。ベータリリースは非公開の場合も公開の場合もあります。"
    },
    {
      term: "ユーザーのブロック/ブロック解除",
      description:
        "要求者のリソースへのアクセスを取り消したり復元したりすることです。Auth0 の攻撃対策スイートの機能を指します。各サービスはログインやサインアップの傾向を評価し、不審なアクティビティに関連する IP アドレスをブロックします。"
    },
    {
      term: "ボット検出",
      description: "ログイン処理中に CAPTCHA を有効にすることで、Auth0 がボットと疑われるトラフィックをブロックする攻撃対策の一種です。"
    },
    {
      term: "漏えいパスワード検出",
      description: "サードパーティの Web サイトやアプリのデータ漏えいで流出したユーザー名とパスワードの組み合わせが使用された場合に、Auth0 がユーザーに通知する攻撃対策の一種です。"
    },
    {
      term: "破壊的変更",
      description: "Auth0 が把握している範囲において、Auth0 プラットフォームと顧客のアプリケーションとの相互運用に障害を引き起こす、Auth0 プラットフォームへの変更です。"
    },
    {
      term: "ブルートフォース保護",
      description: "単一の IP アドレスから単一のユーザーアカウントを狙って行われるブルートフォース攻撃から保護する攻撃対策の一種です。"
    },
    {
      term: "コールバック",
      description: "認証後に Auth0 が応答を送信する URL です。多くの場合、認証後にユーザーがリダイレクトされる URL と同じです。"
    },
    {
      term: "クレーム",
      description: "セキュリティトークンに含まれる属性で、トークンの発行者がある対象について主張している内容を表します。"
    },
    {
      term: "クライアント ID",
      description:
        "登録後にアプリケーションへ割り当てられる識別値です。この値は他のサードパーティサービスと組み合わせて使用され、Auth0 Dashboard > [Application Settings] で確認できます。"
    },
    {
      term: "クライアントシークレット",
      description:
        "クライアント（アプリケーション）が認可サーバーに対して認証を行うために使用するシークレットです。クライアントと認可サーバーのみが知っているべきものであり、推測されないよう十分にランダムでなければなりません。"
    },
    {
      term: "コンフィデンシャルクライアント",
      description:
        "OAuth 2.0 プロトコルでは、クライアント（アプリケーション）はコンフィデンシャルとパブリックのいずれかに分類されます。コンフィデンシャルクライアントは資格情報を安全に保持でき、そのために信頼できるバックエンドサーバーを必要とします。トークンエンドポイントを呼び出す際にクライアント ID とシークレットを指定することで、認証を必要とするグラントタイプを使用できます。"
    },
    {
      term: "混乱した代理（Confused Deputy）",
      description: "攻撃者がクライアントやサービスをだまして、自分の代わりに操作を実行させる状況です。"
    },
    {
      term: "接続",
      description: "Auth0 と、アプリケーションのユーザーの提供元との関係です。アイデンティティプロバイダー、パスワードレス認証方式、ユーザーデータベースなどが該当します。"
    },
    {
      term: "利用デバイス",
      description: "クライアント起点バックチャネル認証フローにおいて、ユーザーがサービスを利用するために用いるデバイスです。"
    },
    {
      term: "カスタムドメイン",
      description: "独自の名称（バニティ名）を持つサードパーティのドメインです。CNAME とも呼ばれます。"
    },
    {
      term: "非推奨",
      description:
        "対象の機能や動作が新規の契約者にはサポートされず、積極的な機能強化も行われず、最小限の保守のみが行われていることを示す製品リリース段階です。"
    },
    {
      term: "デジタルアイデンティティ",
      description: "特定のアプリケーションが提供する機能の文脈において、特定のユーザーを定義する属性の集合です。"
    },
    {
      term: "デジタル署名",
      description:
        "トークン内のビットが改ざんされるのを防ぐ暗号化された文字列です。ビットが変更または改ざんされると、署名を検証できなくなり、トークンは拒否されます。"
    },
    {
      term: "ディレクトリ",
      description:
        "ユーザーを一元管理するリポジトリ（最もよく知られているのは Active Directory）です。資格情報や属性を集約し、各アプリケーションが独自のローカルなアイデンティティ構成を持つ必要をなくします。"
    },
    {
      term: "早期アクセス",
      description:
        "対象の機能や動作を、限られた数の契約者または顧客開発パートナー（CDP）に提供し、テストとフィードバックを行ってもらう製品リリース段階です。"
    },
    {
      term: "提供終了",
      description: "対象の機能や動作がプラットフォームから削除されたことを示す製品リリース段階です。使用を継続すると、エラーが発生する可能性が高くなります。"
    },
    {
      term: "提供終了日",
      description: "機能や動作へのアクセスがプラットフォームから削除される日付です。提供終了日はプランの種類によって異なる場合があります。"
    },
    {
      term: "Fine-grained Authorization (FGA)",
      description: "アプリケーション内の特定のオブジェクトやリソースへのアクセス権を個々のユーザーに付与する、Auth0のSaaS製品です。"
    },
    {
      term: "フロー",
      description:
        "Actionsを使って拡張できるプロセスです。各フローは1つ以上のトリガーで構成され、Auth0のジャーニーにおける特定の時点で情報が流れる論理的なパイプラインを表します。"
    },
    {
      term: "一般提供",
      description: "対象の機能や動作が完全に利用可能となり、すべての契約者が本番環境で使用できる製品リリース段階です。"
    },
    {
      term: "グループ",
      description: "1人以上のユーザーの集合です。Auth0 Authorization Extensionでは、グループを使って多数のユーザーに一度にアクセス権を付与できます。"
    },
    {
      term: "ID トークン",
      description: "リソースへのアクセスではなく、クライアント自身のために用意された資格情報です。クライアントが解析・検証できる、決められた形式を持ちます。"
    },
    {
      term: "IDプロバイダー（IdP）",
      description: "デジタルアイデンティティを保存・管理するサービスです。Auth0は、信頼できるソーシャル、エンタープライズ、法的なアイデンティティプロバイダーをサポートしています。"
    },
    {
      term: "JSON Web Token（JWT）",
      description:
        "2者間でクレームを安全に表現するための、オープンな業界標準であるRFC 7519の方式です。Auth0では、ID トークンは常にJWT形式で返され、アクセストークンもJWT形式であることが多くあります。"
    },
    {
      term: "ローカライゼーション",
      description: "新しいUniversal Loginのエクスペリエンスを、サポートされている言語で表示する機能です。"
    },
    {
      term: "Lock",
      description: "ユーザーを認証するためのAuth0のUIウィジェットです。そのままの状態ですぐに使用でき、Classic Universal Loginのエクスペリエンスにおける既定の外観となります。"
    },
    {
      term: "Management API",
      description: "Auth0のサービスを管理し、管理タスクをプログラムから実行するためのAuth0のAPIです。"
    },
    {
      term: "メタデータ",
      description: "設定やプロファイルの内容など、ユーザーが更新できる情報です。メタデータはID トークンに追加され、ユーザープロファイルに保存できます。"
    },
    {
      term: "移行",
      description: "顧客が特定の機能や動作の使用をやめて移行するプロセスです。移行は非推奨の段階で行う必要があります。"
    },
    {
      term: "多要素認証（MFA）",
      description: "複数の認証要素を用いる認証プロセスです。通常、1つ目の要素はユーザー名とパスワードで、2つ目はメールやSMSで送られるコードやリンク、またはアプリによるワンタイムパスワードです。"
    },
    {
      term: "ノンス",
      description: "認証プロトコルで発行される任意の（多くの場合ランダムまたは疑似ランダムな）数値で、リプレイ攻撃の検出と軽減に役立てられます。"
    },
    {
      term: "OAuth 2.0",
      description:
        "認可のプロトコルとワークフローを定義する認可フレームワークです。OAuth 2.0は、ロール、認可グラント、認可リクエストとレスポンス、トークンの取り扱いを定義します。"
    },
    {
      term: "OpenID",
      description: "ログイン情報を収集・保存することなく、ユーザーが本人であることをアプリケーションが検証できるようにする、認証のオープン標準です。"
    },
    {
      term: "Organizations",
      description: "B2Bの顧客がエンドユーザーを分類し、固有のロール、ログインエクスペリエンス、リソースへのアクセスを定義できるようにするAuth0の製品です。"
    },
    {
      term: "パスワードレス",
      description: "1つ目の認証要素がパスワードではない認証方式です。代わりに、メールやSMSで受け取るワンタイムパスワード、プッシュ通知、生体認証センサーなどが用いられます。"
    },
    {
      term: "境界（ペリメーター）",
      description: "ディレクトリ、そのすべてのユーザー、およびそのディレクトリを利用するすべてのアプリケーションを包含する境界の集合です。"
    },
    {
      term: "製品リリース段階",
      description: "Auth0が製品機能をどのように段階的に準備し、リリースし、提供終了するかを示すフェーズです。"
    },
    {
      term: "パブリッククライアント",
      description:
        "OAuth 2.0プロトコルでは、クライアントは機密（Confidential）またはパブリックのいずれかに分類されます。パブリッククライアントは資格情報を安全に保持できないため、クライアントシークレットを必要としないグラントタイプのみを使用すべきです。"
    },
    {
      term: "ローの資格情報",
      description: "ユーザーとリソースの間で合意された共有シークレットまたは情報の集合であり、リソースがユーザーの本人性を検証できるようにするものです。"
    },
    {
      term: "リフレッシュトークン",
      description: "新しいアクセストークンを取得するために使用できる特別な種類のトークンです。ユーザーに再ログインを強いることなく、期限切れになるアクセストークンを更新するのに役立ちます。"
    },
    {
      term: "リフレッシュトークンローテーション",
      description: "脆弱性を最小限に抑えるため、リフレッシュトークンを頻繁に入れ替える方式です。交換のたびに新しいリフレッシュトークンも返されます。"
    },
    {
      term: "リライングパーティー",
      description: "ユーザーの認証をサードパーティのアイデンティティプロバイダーに依存するエンティティ（サービスやアプリケーションなど）です。"
    },
    {
      term: "リソースオーナー",
      description: "保護されたリソースへのアクセスを許可できるエンティティ（ユーザーやアプリケーションなど）です。"
    },
    {
      term: "リソースサーバー",
      description: "保護されたリソースをホストするサーバーです。リソースサーバーは、保護されたリソースへのリクエストを受け付けて応答します。"
    },
    {
      term: "ロール",
      description: "システムに対して持つべきアクセスレベルを示すためにユーザーに割り当てられる、ユーザーのアイデンティティの一側面です。"
    },
    {
      term: "スコープ",
      description: "アプリケーションが実行を許可される具体的な操作や、ユーザーに代わって要求できる情報を定義する仕組みです。"
    },
    {
      term: "Security Assertion Markup Language（SAML）",
      description: "パスワードを使わずに2者間で認証情報を交換できる、XMLベースの標準化されたプロトコルです。"
    },
    {
      term: "セキュリティトークン",
      description: "ユーザーの認証が成功したことを証明するために使用される、デジタル署名された成果物です。"
    },
    {
      term: "セッションクッキー",
      description: "受け取ったトークンが署名済みで有効であり、信頼できるソースから発行されたものであるとミドルウェアが確認した後に発行されるエンティティです。"
    },
    {
      term: "シャドウアカウント",
      description: "リモートのアプリケーションへのアクセスが必要になったときに、ローカルディレクトリのユーザーをリモートディレクトリに別途手動でプロビジョニングするという、維持が困難な運用手法です。"
    },
    {
      term: "署名アルゴリズム",
      description: "トークンが改ざんされていないことを保証するために、トークンにデジタル署名を行う際に使用されるハッシュアルゴリズムです。"
    },
    {
      term: "シングルサインオン（SSO）",
      description: "ユーザーが1つのアプリケーションにログインすると、他のアプリケーションにも自動的にログインされるようにするサービスです。シングルログアウトは、これと逆の形で同様に機能します。"
    },
    {
      term: "サブスクリプション",
      description: "各テナントで利用できる機能とクォータを定める契約です。"
    },
    {
      term: "不審なIPのスロットリング",
      description: "単一のIPアドレスから過度に多くのアカウントを狙う不審なログインからテナントを保護する、攻撃対策の一種です。"
    },
    {
      term: "テナント",
      description: "単一のソフトウェアインスタンスに対して、特定の権限を伴う共通のアクセスを共有する、論理的に分離されたユーザーの集合です。"
    },
    {
      term: "トークンエンドポイント",
      description: "プログラムからトークンを要求するために使用される、認可サーバー上のエンドポイントです。"
    },
    {
      term: "トリガー",
      description: "ユーザーのログインなど、特定の操作が実行時に発生したときにActionを自動的に呼び出すイベントです。"
    },
    {
      term: "信頼",
      description: "リソースが、その認証機関がユーザーについて述べる内容を受け入れる用意があるとき、そのリソースはアイデンティティプロバイダーまたは認証機関を信頼していることになります。"
    },
    {
      term: "Universal Login",
      description: "認可サーバーの中核機能である認証フローの、Auth0による実装です。"
    },
    {
      term: "Web Service Federation（WS-Fed）",
      description: "WS-Trustによって信頼関係が確立されたシステム、ドメイン、アイデンティティプロバイダーの間でユーザーのアイデンティティを管理するためのプロトコルです。主にMicrosoft製品で使用されます。"
    }
  ]

  const A_TO_Z = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
  const norm = (s) => s.normalize("NFKD").toLowerCase().trim()

  const useQueryParamState = (key, initial = "") => {
    const [value, setValue] = useState(() => {
      if (typeof window === "undefined") return initial
      const url = new URL(window.location.href)
      return url.searchParams.get(key) ?? initial
    })

    useEffect(() => {
      if (typeof window === "undefined") return
      const url = new URL(window.location.href)
      if (value) url.searchParams.set(key, value)
      else url.searchParams.delete(key)
      window.history.replaceState({}, "", url.toString())
    }, [key, value])

    return [value, setValue]
  }

  const highlight = (text, query) => {
    if (!query) return text
    const i = norm(text).indexOf(norm(query))
    if (i < 0) return text
    const end = i + query.length
    return (
      <>
        {text.slice(0, i)}
        <mark>{text.slice(i, end)}</mark>
        {text.slice(end)}
      </>
    )
  }

  const [term, setTerm] = useQueryParamState("term", "")
  const groups = useMemo(() => {
    const filtered = term ? GLOSSARY.filter((g) => norm(g.term).includes(norm(term))) : GLOSSARY

    const map = new Map()
    for (const item of filtered.sort((a, b) => a.term.localeCompare(b.term))) {
      const key = (item.term[0] || "").toUpperCase()
      map.set(key, [...(map.get(key) || []), item])
    }
    return map
  }, [term])

  const letterRefs = useRef({})
  const handleJump = (letter) => {
    const el = letterRefs.current[letter]
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="mx-auto max-w-5xl py-10 text-gray-900 dark:text-gray-100">
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            id="search-input-control"
            type="text"
            placeholder="名前で検索"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black pl-10 pr-4 py-3 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      {/* A–Z index */}
      <nav className="mb-8 flex flex-wrap gap-3">
        {A_TO_Z.map((letter) => {
          const enabled = groups.has(letter)
          return (
            <button
              key={letter}
              onClick={() => enabled && handleJump(letter)}
              disabled={!enabled}
              className={`text-lg ${enabled ? "text-indigo-600 dark:text-indigo-300 hover:text-black dark:hover:text-white" : "text-gray-400 dark:text-gray-600 cursor-not-allowed"}`}
              aria-label={`${letter} へ移動`}
            >
              {letter}
            </button>
          )
        })}
      </nav>

      {/* Groups */}
      <section>
        {A_TO_Z.filter((L) => groups.has(L)).map((letter) => {
          const items = groups.get(letter)
          return (
            <section key={letter} className="mb-10">
              <div className="flex items-end gap-1">
                <h2 id={letter} ref={(el) => (letterRefs.current[letter] = el)} className="text-3xl font-semibold glossary_h2">
                  {letter}
                </h2>
                <div className="flex-1 border-b-2 border-[#3F59E4]" />
              </div>

              <ul className="mt-6 space-y-6 glossary_list">
                {items.map((it) => (
                  <li key={it.term} className="scroll-mt-24">
                    <h3 id={norm(it.term)} className="text-xl font-medium text-gray-900 dark:text-gray-100 glossary_h3">
                      {it.term}
                    </h3>
                    <p className="mt-1 text-gray-700 dark:text-gray-300">{highlight(it.description, term)}</p>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}

        {groups.size === 0 && <p className="text-gray-500 dark:text-gray-400">「{term}」に一致する結果が見つかりませんでした。別のタームでお試しください。</p>}
      </section>
    </div>
  )
}