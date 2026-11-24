# バーテックスカラー（頂点カラー）とは？

専門学校国際理工カレッジ ゲームクリエイター科1年向けの30分・全15枚の授業です。Mayaによるポリゴンモデリングの基本操作を学んだ学生を想定しています。

## 開き方

Windowsで `index.html` をGoogle Chromeで開くか、上の階層にある `open-vertex-color-slides.bat` をダブルクリックします。`index.html` と同じ階層にCSS、JavaScript、`assets` フォルダを置いてください。ブラウザー内で動作し、外部ライブラリやローカルサーバーは不要です。出典リンクを開くにはインターネット接続が必要です。

- `←` / `→` で前後に移動し、`Space` で次へ進みます。`F` または「全画面」で切り替えられます。
- 最初と最後のページはつながっています。`Home` / `End` で最初／最後へ移動できます。更新すると表示中のページから再開します。
- パソコンおよびスマートフォンの横向きでは16:9で表示します。スマートフォンの縦向きでは文字を読みやすいように1列に並べ、必要なページをスクロールできます。左右スワイプと画面下のボタンで移動できます。

## 授業の流れ

| ページ | 目安 | 内容・進め方 |
| --- | ---: | --- |
| 01 | 1分 | 講演のメイン画像を見て、キャラクターの輪郭線がどこで太く見えるかを尋ねる。 |
| 02 | 1分 | 仕組み、ゲームの事例、Mayaでの表示という順序を示す。 |
| 03 | 2分 | ポリゴンの頂点に色情報を持たせる。RGBとアルファを紹介する。 |
| 04 | 3分 | 三角形の補間を図解する。スライダーを動かす前に、赤と緑の中間の値を予想させる。スライダーにフォーカスした状態では矢印キーで値を調整する。 |
| 05 | 2分 | 保存場所、細かさ、UV、データ量、用途を比較する。文字入りの看板を例に、どちらを使うか尋ねる。 |
| 06 | 2分 | UVなしで付ける色、発光の強さ、草と土を混ぜるマスクなどで利点を説明する。 |
| 07 | 2分 | 頂点の数と配置で、色変化をどこまで細かく位置指定できるかを比較する。 |
| 08 | 1分 | 陰影、線幅、テクスチャの混合、汚れ、揺れで、どの値を制御するかを挙げる。 |
| 09 | 2分 | 『ギルティギア』の講演画像で、横顔、毛先、小さな装飾、筋肉の線幅を比べる。 |
| 10 | 2分 | 講演図の赤い箇所を指し、背面メッシュのはみ出しが線になることと、頂点カラーが幅の調整に使われることを説明する。 |
| 11 | 1分 | カメラの距離で生じる問題と、視野角も補正した線幅の実例を見る。 |
| 12 | 2分 | 口元、衣装の裏地、手袋の開口部で、線の出し方をどう変えるかを観察する。 |
| 13 | 5分 | カラー付きモデルを選択し、ビュー上で `5`、メッシュ表示で頂点カラー表示を切り替える。学生にも表示の前後を確認させる。 |
| 14 | 2分 | 色データ、表示状態、表示モード、チャンネル、材質・照明を確認する。 |
| 15 | 2分 | 重要点を復習し、3問を口頭で確認する。 |
| **計** | **30分** | |

### Maya実習の準備

授業前にMaya 2025で任意のポリゴンモデルを開き、頂点に色が割り当てられていることを確認します。練習用モデルを作る場合は、ポリゴン平面を作り、頂点を選択して「メッシュ表示 → カラーの適用（Mesh Display → Apply Color）」のオプションから色を割り当てます。別の頂点に別の色を割り当てると、補間の様子も観察できます。実演では、カラーの表示（Display Colors）をいったんオフにして、切り替えでオンになる様子を見せます。

カラー セット エディタでセットを確認できます。空のセットも作れるため、セット名に加えて実際に色が割り当てられているかを確かめます。「表示カラー アトリビュートの切り替え」はオンとオフを反転します。オンの状態を確認するには、選択したメッシュのシェイプ側のアトリビュート エディタで「メッシュ コンポーネント ディスプレイ → カラーの表示（Mesh Component Display → Display Colors）」を参照します。

### 理解度チェックの解答例

1. 頂点カラーはモデルの頂点データに、テクスチャは画像の画素に色を保存する。
2. 輪郭線は背面法で描く。部位によって線の太さを変えるために頂点カラーを使う。
3. 「メッシュ表示 → 表示カラー アトリビュートの切り替え（Mesh Display → Toggle Display Colors Attribute）」を使う。シェーディング表示で確認する。

## 使用画像と出典

アークシステムワークスの本村・C・純也氏によるCEDEC 2024講演の画像を9点使用しました。画像は加工せずにローカル保存し、直下から該当する掲載画像ページを開けます。スライド10の手順は、講演にある手法の考え方を授業用に説明したものです。[掲載記事（徳永浩貴、GAME Watch、2024年8月22日）](https://game.watch.impress.co.jp/docs/kikaku/1617901.html) ／ [CEDEC 2024 公式セッション情報](https://cedec.cesa.or.jp/2024/session/detail/s6605513389324/)

| ページ | `assets/` の画像 | 観察する箇所 |
| --- | --- | --- |
| 01 | `game-watch-cover.jpg` | キャラクターの輪郭線と講演全体のテーマ。[掲載画像](https://game.watch.impress.co.jp/img/gmw/docs/1617/901/html/0_o.jpg.html) |
| 09 | `game-watch-outline-alpha.jpg` | 横顔や目の線の強弱。[掲載画像](https://game.watch.impress.co.jp/img/gmw/docs/1617/901/html/13_o.jpg.html) |
| 09 | `game-watch-outline-width.jpg` | 毛先、装飾、筋肉の線幅。[掲載画像](https://game.watch.impress.co.jp/img/gmw/docs/1617/901/html/14_o.jpg.html) |
| 10 | `game-watch-backface.jpg` | 背面メッシュがはみ出して線になる箇所。[掲載画像](https://game.watch.impress.co.jp/img/gmw/docs/1617/901/html/5_o.jpg.html) |
| 11 | `game-watch-camera-distance.jpg` | 距離に応じて補正しない場合の線幅。[掲載画像](https://game.watch.impress.co.jp/img/gmw/docs/1617/901/html/7_o.jpg.html) |
| 11 | `game-watch-camera-fov.jpg` | 距離と視野角に合わせた補正の結果。[掲載画像](https://game.watch.impress.co.jp/img/gmw/docs/1617/901/html/12_o.jpg.html) |
| 12 | `game-watch-face-outline.jpg` | 表情によって口元に出る余計な線の調整。[掲載画像](https://game.watch.impress.co.jp/img/gmw/docs/1617/901/html/17_o.jpg.html) |
| 12 | `game-watch-cloth-outline.jpg` | 衣装の表に出る裏地の線の調整。[掲載画像](https://game.watch.impress.co.jp/img/gmw/docs/1617/901/html/19_o.jpg.html) |
| 12 | `game-watch-glove-outline.jpg` | 手袋の開口部で輪郭線を出す工夫。[掲載画像](https://game.watch.impress.co.jp/img/gmw/docs/1617/901/html/22_o.jpg.html) |

- 授業での図の解説に必要な範囲を判断するため、サイトの著作権表示と、文化庁資料の引用要件を参照しました。権利者から個別許諾は取得していません。[GAME Watchの著作権表示](https://game.watch.impress.co.jp/docs/common/copyright.html) ／ [文化庁「発表用資料やレポートの中で他人の作品を『引用』して利用する場合」](https://www.bunka.go.jp/seisaku/chosakuken/seidokaisetsu/pdf/92916001_01.pdf)
- スライド04・07の授業用模式図は、HTML、CSS、Canvasで描画しています。スライド08の一般的な利用例のうち、色の調整やテクスチャの混合はEpic Gamesの解説を参照しました。[Epic Gamesの頂点カラー マテリアル解説](https://dev.epicgames.com/documentation/en-us/unreal-engine/setting-up-a-vertex-color-material-for-mesh-painting-in-unreal-engine)

## 確認したMaya 2025公式資料

- 頂点カラーの仕組みと保存。[頂点カラー データを使用したポリゴンのカラーリング](https://help.autodesk.com/cloudhelp/2025/JPN/Maya-Modeling/files/GUID-B4706BDE-9B33-43A3-B5E8-F8A56433ACB3.htm)
- シェーディング、頂点カラーの表示切り替え、カラーマテリアルと照明。[頂点カラーを可視にする](https://help.autodesk.com/cloudhelp/2025/JPN/Maya-Modeling/files/GUID-789B35EA-BDBE-4B82-81E3-75FB611FC96C.htm) ／ [Mesh Display](https://help.autodesk.com/cloudhelp/2025/ENU/Maya-Modeling/files/GUID-57FBF97C-F60F-4D8A-8801-852B8B56D4EF.htm)
- 色データの確認と割り当て。[カラー セット エディタ オプション](https://help.autodesk.com/cloudhelp/2025/JPN/Maya-Modeling/files/GUID-0FC5F9C9-5C6A-4225-B0F3-353E7F61723D.htm) ／ [ポリゴン頂点にカラーを割り当てる](https://help.autodesk.com/cloudhelp/2025/JPN/Maya-Modeling/files/GUID-73C39180-81D8-4709-9756-FB7DB0A5E31B.htm) ／ [カラーの適用オプション](https://help.autodesk.com/cloudhelp/2025/JPN/Maya-Modeling/files/GUID-FB177486-E576-4C30-AD7E-94D662FFAF17.htm)
- 「拡散」と「上書き」の設定。[カラー マテリアル チャネルのオプション](https://help.autodesk.com/cloudhelp/2025/JPN/Maya-Modeling/files/GUID-04408333-F529-4193-9C38-E18A53BDFAB6.htm) ／ [マテリアルのブレンド設定のオプション](https://help.autodesk.com/cloudhelp/2025/JPN/Maya-Modeling/files/GUID-B62EED3D-CCE7-4A06-B057-856276653459.htm)
- `5` キーによるシェーディング表示と、ライトを使用しない設定。[既定のライティング](https://help.autodesk.com/cloudhelp/2025/JPN/Maya-LightingShading/files/GUID-6D4A0119-5A23-49DF-9D67-C44311BC472B.htm)

作業環境にはMaya 2025がなく、実機スクリーンショットの取得と実機での表示確認は未実施です。スライド13は2025版の公式資料に沿ったHTML/CSSのメニュー図です。
