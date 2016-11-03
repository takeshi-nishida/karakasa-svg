# Karakasa-SVG
JS library to create round-robin signature (Karakasa-renpanjo in Japanese) SVG element from string array(s).

���O�ƃ��b�Z�[�W����P�A�����SVG���쐬���郉�C�u�����ł��D

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
+ [���ɐ��f�U�C���錾 �\���ɓI�Ȑl��A�����グ��B�c�c����A�グ�Ȃ��Ă悢�B](https://www.amazon.co.jp/dp/4802510306) (2�͂Ɂu�P�A����������ꂽ�`���b�g�V�X�e���v���o�ꂵ�܂�)
+ [�P�A����W�F�l���[�^�[](http://www2.kobe-u.ac.jp/~tnishida/karakasa-gen/) �{���C�u�������g�p���Ă��܂�