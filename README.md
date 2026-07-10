# KeyRemapper

Keychron Launcher ライクな GUI でキーボードのキーマップを編集し、JSON設定ファイルの入出力、AutoHotkey スクリプトを生成する Web アプリ。

https://pppp314592.github.io/KeyRemapper/

## 機能

- **キーボード配列**: ANSI 104 / JIS 109 対応
- **レイヤー管理**: 複数レイヤーの追加・削除・リネーム、アクティブ切替
- **キー割当**: 通常キー割当、ModTap（タップ＋長押し）、MO（長押しレイヤー切替）、透過、無効
- **JSON入出力**: ブラウザからファイル読込/保存
- **AHK生成**: AutoHotkey v1 / v2 スクリプトをワンクリック生成
- **公開準備完了**: クライアントサイド静的サイト（ビルド不要）

## 使い方

1. [ページを開く](https://pppp314592.github.io/KeyRemapper/)
2. キーをクリックして割当を設定
3. 「AHK生成」でスクリプトをダウンロード
4. AutoHotkey で実行

## AHK生成の仕組み

- `#If (CurrentLayer = n)` / `#HotIf` でレイヤー別マッピング
- `$*` プリフィクス統一（修飾キー付きでも発火）
- Layer 0 の ModTap/MO のみ修飾キーチェック → Ctrl+F などは素通り
- `#MaxThreadsPerHotkey, 20` + ガード変数でオートリピート対策
- ModTap 長押しは 300ms/200ms のタイマーでタップ/ホールド判定
- Critical + Sleep(1)×2（〜30ms）でタップ時の順序問題を軽減

## 既知の問題

- **ModTap タップ後のキー順序**: ModTap キーをタップ（短押し）した直後に別のキーを押すと、そのキーが先に処理される場合があります。例: `f`（tap=f, hold=MO(2)）をタップ → すぐ `a` → `af` の順（`fa` にならない）。これはレイヤー切替の即時性とトレードオフの関係にあります。同時押し（30ms 以内）の場合は適切に処理されます。

## リンク

- [Web アプリ (GitHub Pages)](https://pppp314592.github.io/KeyRemapper/)
- [リポジトリ](https://github.com/pppp314592/KeyRemapper)
- [AutoHotkey](https://www.autohotkey.com/)
