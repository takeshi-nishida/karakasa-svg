"use strict";
var karakasa_1 = require("../lib/karakasa");
var keyakizakaNames = ["平手 友梨奈", "小池 美波", "原田 葵", "佐藤 詩織", "菅井 友香", "斎藤 冬優花", "石森 虹花",
    "渡邉 理佐", "上村 莉菜", "尾関 梨香", "織田 奈那", "渡辺 梨加", "土生 瑞穂", "今泉 佑唯",
    "鈴本 美愉", "守屋 茜", "長濱 ねる", "志田 愛佳", "長沢 菜々香", "小林 由依", "米谷 奈々未"];
var messages = ["欅坂46", "革命、", "お待たせ"];
window.onload = function () {
    var content = document.getElementById('content');
    var svg = karakasa_1.createKarakasaElement(keyakizakaNames, 8, messages, 12, 280, 280);
    content.appendChild(svg);
    svg = karakasa_1.createKarakasaElement(keyakizakaNames, 12, messages, 32, 400, 400);
    svg.setAttribute("class", "karakasa");
    content.appendChild(svg);
};
