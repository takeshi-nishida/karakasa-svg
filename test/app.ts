import { createKarakasaElement } from "../lib/karakasa";

const names: string[] = ["西田 健志", "西田 健志", "西田 健志", "西田 健志", "西田 健志", "西田 健志", "西田 健志", "西田 健志"];
const messages: string[] = ["消極性", "デザイン", "宣言"];

window.onload = () => {
    const examples = document.getElementById('examples');
    var h2 = document.createElement("h2");
    h2.textContent = "Names only";
    var pre = document.createElement("pre");
    pre.textContent = "createKarakasaElement(200, 200, names, 14)";
    var svg = createKarakasaElement(200, 200, names, 14);
    examples.appendChild(h2);
    examples.appendChild(pre);
    examples.appendChild(svg);
    

    h2 = document.createElement("h2");
    h2.textContent = "With a message inside (and another with CSS rotate animation)";
    pre.textContent = "createKarakasaElement(320, 320, names, 14, messages, 24)";
    svg = createKarakasaElement(320, 320, names, 14, messages, 24);
    examples.appendChild(h2);
    examples.appendChild(pre);
    examples.appendChild(svg);

    svg = createKarakasaElement(320, 320, names, 14, messages, 24);
    svg.setAttribute("class", "karakasa");
    examples.appendChild(svg);
};
