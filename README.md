# ts-practice

TypeScript を基礎からざっと学んだ記録。

## 使用技術

TypeScript / tsx / Hono / Zod

## 動かし方

ホストにグローバルインストールせず、Docker（Dockerfile + docker-compose）で実行する。

```bash
docker compose up -d
docker compose exec app pnpm install
docker compose exec app pnpm tsx src/01-setup/index.ts
```

`06-hono-mini` を起動したら http://localhost:8787 でアクセスできる。停止は `docker compose down`。

## ディレクトリ構成

```
ts-practice/
├── README.md
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── package.json         # type: module, scripts に typecheck
├── tsconfig.json        # strict: true, module/moduleResolution: nodenext
├── .gitignore
└── src/
    ├── 01-setup/
    ├── 02-types/
    ├── 03-async/
    ├── 04-modules/
    ├── 05-zod/
    └── 06-hono-mini/
```

## 学習インデックス

1トピック = 1ディレクトリ = 1コミット。各ディレクトリに README（学んだこと3行 + 参考リンク + 動かし方）と動くサンプルを置く。

| ディレクトリ | 学ぶこと |
|---|---|
| `src/01-setup` | tsxでTypeScriptファイルを実行できるようにする |
| `src/02-types` | 型注釈・interface・union型 |
| `src/03-async` | Promise / async・await / try-catch |
| `src/04-modules` | import / export（ESM） |
| `src/05-zod` | z.object / parse / safeParse / z.infer |
| `src/06-hono-mini` | GET/POSTが動く最小API |

## コミット戦略

学習の足跡を履歴に残す。トピックごとに1コミット（1行日本語）。

- 環境構築: tsxでTypeScriptを実行できるようにする
- 基礎: 型注釈と基本型を学ぶ
- 型応用: interfaceとunion型を学ぶ
- 非同期: Promiseとasync/awaitを学ぶ
- モジュール: import/exportを学ぶ
- Zod: スキーマ定義とバリデーションを学ぶ
- Hono: 最小APIを書いて動かす

## 公開品質チェックリスト

- [ ] ルートREADMEに目的と学習インデックスがある
- [ ] 各ディレクトリにREADMEがある
- [ ] 各サンプルが動く（`pnpm tsx` で確認）
- [ ] `.env` や秘密情報をコミットしていない
- [ ] `node_modules` が `.gitignore` で除外されている

## 参考リンク

### 手を動かすときに使う教材

各トピックで実際に開いて写経・逆引きするメイン教材。

- 環境構築: [TypeScriptで始めるNode.js入門（ICS MEDIA）](https://ics.media/entry/4682/)
- 型の基礎・応用: [サバイバルTypeScript](https://typescriptbook.jp/)
- 非同期処理: [非同期処理まとめ Promise・async/await編（Zenn）](https://zenn.dev/daichi09167/articles/701ed3fdc0332a)
- モジュール: [モジュールとimport/export完全ガイド（codingls）](https://codingls.com/typescript/7232/)
- Zod: [Zod入門（Zenn / PocoPota）](https://zenn.dev/pocopota/articles/zod-introduction)
- Hono: [今さらながらHonoに入門してみる（Qiita）](https://qiita.com/youtoy/items/a540248f00b27fcdb14c)

### リファレンス・情報として

困ったときに引く一次情報・深掘り。

- [TypeScript公式 Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [tsconfig.json完全ガイド（TerrierScript）](https://terrierscript.com/typescript/52/)
- [Zod公式ドキュメント](https://zod.dev/)
- [Hono公式ドキュメント（日本語）](https://hono-ja.pages.dev/docs/)
- [見よ、これがHonoのRPCだ（Zenn）](https://zenn.dev/yusukebe/articles/a00721f8b3b92e)
