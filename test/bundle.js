/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var karakasa_1 = __webpack_require__(1);
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var ns = "http://www.w3.org/2000/svg";
	function createKarakasaElement(names, nameSize, messages, messageSize, width, height) {
	    var svg = document.createElementNS(ns, "svg");
	    svg.setAttributeNS(null, 'version', '1.1');
	    svg.setAttribute("xmlns", ns);
	    svg.setAttribute("viewBox", "0 0 " + width + " " + height);
	    svg.setAttribute("width", width.toString());
	    svg.setAttribute("height", height.toString());
	    var cx = width / 2;
	    var cy = height / 2;
	    var r = Math.min(cx, cy);
	    var maxMessageLength = Math.max.apply(null, messages.map(function (m, i, a) { return m.length; }));
	    var r1 = Math.max(names.length * nameSize / Math.PI, maxMessageLength * messageSize * Math.SQRT1_2);
	    var hbox = r1 * Math.SQRT2;
	    var dh = hbox / messages.length;
	    var g = document.createElementNS(ns, "g");
	    g.setAttribute("font-size", messageSize.toString());
	    svg.appendChild(g);
	    for (var i = 0; i < messages.length; i++) {
	        var mText = document.createElementNS(ns, "text");
	        mText.textContent = messages[i];
	        mText.setAttribute("x", cx.toString());
	        mText.setAttribute("y", (cy - hbox / 2 + dh * 0.5 + dh * i).toString());
	        mText.setAttribute("text-anchor", "middle");
	        g.appendChild(mText);
	    }
	    g = document.createElementNS(ns, "g");
	    g.setAttribute("font-size", nameSize.toString());
	    svg.appendChild(g);
	    for (var i = 0; i < names.length; i++) {
	        var text = document.createElementNS(ns, "text");
	        var name_1 = names[i];
	        var nwhite = names[i].match(/\s/g).length;
	        var ch = (r - r1 - nameSize * nwhite) / (name_1.length - nwhite);
	        var ys = [];
	        for (var j = 0, y = cy + r1; j < name_1.length; j++) {
	            ys.push(y.toFixed());
	            y += name_1.charAt(j).trim().length > 0 ? ch : nameSize;
	        }
	        text.textContent = names[i];
	        text.setAttribute("x", cx.toString());
	        text.setAttribute("y", ys.join(","));
	        text.setAttribute("writing-mode", "tb");
	        text.setAttribute("transform", "rotate(" + 360 * i / names.length + ", " + cx + ", " + cy + ")");
	        g.appendChild(text);
	    }
	    return svg;
	}
	exports.createKarakasaElement = createKarakasaElement;
	//# sourceMappingURL=karakasa.js.map

/***/ }
/******/ ]);