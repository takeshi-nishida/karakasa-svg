# Karakasa-SVG
JS library to create round-robin signature (Karakasa-renpanjo in Japanese) SVG element from string array(s).

名前とメッセージから傘連判状のSVGを作成するライブラリです．

## Install
```sh
npm install --save karakasa-svg
```

## Usage
```js
import { createKarakasaElement } from "karakasa-svg";
var svg = createKarakasaElement(400, 400, names, 12, messages, 32);
document.getElementById("...").appendChild(svg);
```

## Link
+ [消極性デザイン宣言 ―消極的な人よ、声を上げよ。……いや、上げなくてよい。](https://www.amazon.co.jp/dp/4802510306) (2章に「傘連判状を取り入れたチャットシステム」が登場します)
+ [傘連判状ジェネレーター](http://www2.kobe-u.ac.jp/~tnishida/karakasa-gen/) 本ライブラリを使用しています