import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://li-lu.libertynet.jp/", {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders production metadata and tracking", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ja">/);
  assert.match(html, /<title>質屋かんてい局 城陽店｜OPEN前限定 出張買取10%UP<\/title>/);
  assert.match(html, /<meta name="description" content="2026年12月、質屋かんてい局 城陽店がOPEN予定。/);
  assert.match(html, /<meta name="robots" content="index, follow">/);
  assert.match(html, /<link rel="canonical" href="https:\/\/li-lu\.libertynet\.jp\/jyoyo-pre-lp\/">/);
  assert.match(html, /<meta property="og:image" content="https:\/\/li-lu\.libertynet\.jp\/jyoyo-pre-lp\/images\/og-20260904\.jpg">/);
  assert.match(html, /<meta name="twitter:image" content="https:\/\/li-lu\.libertynet\.jp\/jyoyo-pre-lp\/images\/og-20260904\.jpg">/);
  assert.match(html, /GTM-MG693D6/);
  assert.doesNotMatch(html, /noindex|nofollow/i);
});

test("renders accessible images and all purchase results", async () => {
  const html = await (await render()).text();
  const images = html.match(/<img\b[^>]*>/g) ?? [];
  assert.ok(images.length > 0);
  images.forEach((image) => assert.match(image, /\balt="[^"]*"/));
  assert.equal((html.match(/class="result-card"/g) ?? []).length, 30);
  assert.doesNotMatch(html, /正式な.+入力してください/);
  assert.doesNotMatch(html, /\son[a-z]+=/i);
  assert.doesNotMatch(html, /javascript:/i);
});

test("links to complete legal pages in a new tab", async () => {
  const renderedHtml = await (await render()).text();
  assert.match(renderedHtml, /href="\/privacy-policy\.html" target="_blank" rel="noopener noreferrer"/);
  assert.match(renderedHtml, /href="\/tokushoho\.html" target="_blank" rel="noopener noreferrer"/);

  const staticIndex = await readFile(new URL("../jyoyo-pre-lp/index.html", import.meta.url), "utf8");
  assert.match(staticIndex, /href="\.\/privacy-policy\.html" target="_blank" rel="noopener noreferrer"/);
  assert.match(staticIndex, /href="\.\/tokushoho\.html" target="_blank" rel="noopener noreferrer"/);

  const privacy = await readFile(new URL("../jyoyo-pre-lp/privacy-policy.html", import.meta.url), "utf8");
  assert.match(privacy, /<h1>個人情報保護方針<\/h1>/);
  assert.match(privacy, /Ⅱ　保有個人データ（開示対象個人情報）の開示等請求手続きについて/);
  assert.match(privacy, /kanteikyoku-joyo@g\.li-lu\.jp/);

  const commerce = await readFile(new URL("../jyoyo-pre-lp/tokushoho.html", import.meta.url), "utf8");
  assert.match(commerce, /<h1>特定商取引法に基づく表記/);
  assert.match(commerce, /既存顧客様限定オープン前先行買取キャンペーン/);
  assert.match(commerce, /第611092530082号/);
});
