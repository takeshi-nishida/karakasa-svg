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
	var names = ["西田 健志", "西田 健志", "西田 健志", "西田 健志", "西田 健志", "西田 健志", "西田 健志", "西田 健志"];
	var messages = ["消極性", "デザイン", "宣言"];
	window.onload = function () {
	    var examples = document.getElementById('examples');
	    var h2 = document.createElement("h2");
	    h2.textContent = "Names only";
	    var pre = document.createElement("pre");
	    pre.textContent = "createKarakasaElement(200, 200, names, 14)";
	    var svg = karakasa_1.createKarakasaElement(200, 200, names, 14);
	    examples.appendChild(h2);
	    examples.appendChild(pre);
	    examples.appendChild(svg);
	    h2 = document.createElement("h2");
	    h2.textContent = "With a message inside (and another with CSS rotate animation)";
	    pre.textContent = "createKarakasaElement(320, 320, names, 14, messages, 24)";
	    svg = karakasa_1.createKarakasaElement(320, 320, names, 14, messages, 24);
	    examples.appendChild(h2);
	    examples.appendChild(pre);
	    examples.appendChild(svg);
	    svg = karakasa_1.createKarakasaElement(320, 320, names, 14, messages, 24);
	    svg.setAttribute("class", "karakasa");
	    examples.appendChild(svg);
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var ns = "http://www.w3.org/2000/svg";
	function createKarakasaElement(width, height, names, nameSize, messages, messageSize) {
	    var cx = width / 2;
	    var cy = height / 2;
	    var r = Math.min(cx, cy) * 0.98;
	    var r1 = names.length * nameSize / Math.PI;
	    var g;
	    var svg = document.createElementNS(ns, "svg");
	    svg.setAttributeNS(null, 'version', '1.1');
	    svg.setAttribute("xmlns", ns);
	    svg.setAttribute("viewBox", "0 0 " + width + " " + height);
	    svg.setAttribute("width", width.toString());
	    svg.setAttribute("height", height.toString());
	    if (messages && messages.length > 0) {
	        g = document.createElementNS(ns, "g");
	        g.setAttribute("font-family", "serif");
	        g.setAttribute("font-size", messageSize.toString());
	        svg.appendChild(g);
	        r1 = Math.max(r1, Math.max.apply(null, messages.map(function (m, i, a) { return m.length; })) * messageSize * Math.SQRT1_2);
	        var hbox = r1 * Math.SQRT2;
	        var dh = hbox / messages.length;
	        for (var i = 0; i < messages.length; i++) {
	            var mText = document.createElementNS(ns, "text");
	            mText.textContent = messages[i];
	            mText.setAttribute("x", cx.toString());
	            mText.setAttribute("y", (cy - hbox / 2 + dh * 0.5 + dh * i).toString());
	            mText.setAttribute("text-anchor", "middle");
	            g.appendChild(mText);
	        }
	    }
	    g = document.createElementNS(ns, "g");
	    g.setAttribute("font-size", nameSize.toString());
	    g.setAttribute("font-family", "serif");
	    svg.appendChild(g);
	    for (var i = 0; i < names.length; i++) {
	        var text = document.createElementNS(ns, "text");
	        var name_1 = names[i];
	        var nwhite = countWhiteSpace(names[i]);
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
	function countWhiteSpace(s) {
	    var m = s.match(/\s/g);
	    return m ? m.length : 0;
	}
	//# sourceMappingURL=karakasa.js.map

/***/ }
/******/ ]);