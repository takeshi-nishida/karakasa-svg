const ns = "http://www.w3.org/2000/svg";

export function createKarakasaElement(names: string[], nameSize: number, messages: string[], messageSize: number, width: number, height: number) {
    const svg = document.createElementNS(ns, "svg");
    svg.setAttributeNS(null, 'version', '1.1')
    svg.setAttribute("xmlns", ns);

    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("width", width.toString());
    svg.setAttribute("height", height.toString());

    const cx = width / 2;
    const cy = height / 2;
    const r = Math.min(cx, cy);
    const maxMessageLength = Math.max.apply(null, messages.map((m, i, a) => m.length));

    const r1 = Math.max(names.length * nameSize / Math.PI, maxMessageLength * messageSize * Math.SQRT1_2);

    const hbox = r1 * Math.SQRT2;
    const dh = hbox / messages.length;

    let g = document.createElementNS(ns, "g");
    g.setAttribute("font-size", messageSize.toString());
    svg.appendChild(g);

    for (let i = 0; i < messages.length; i++) {
        const mText = document.createElementNS(ns, "text");
        mText.textContent = messages[i];
        mText.setAttribute("x", cx.toString());
        mText.setAttribute("y", (cy - hbox / 2 + dh * 0.5 + dh * i).toString());
        mText.setAttribute("text-anchor", "middle");
        g.appendChild(mText);
    }

    g = document.createElementNS(ns, "g");
    g.setAttribute("font-size", nameSize.toString());
    svg.appendChild(g);

    for (let i = 0; i < names.length; i++) {
        const text = document.createElementNS(ns, "text");
        const name = names[i];
        const nwhite = names[i].match(/\s/g).length;
        const ch = (r - r1 - nameSize * nwhite) / (name.length - nwhite);
        const ys = [];
        for (let j = 0, y = cy + r1; j < name.length; j++) {
            ys.push(y.toFixed());
            y += name.charAt(j).trim().length > 0 ? ch : nameSize;
        }
        text.textContent = names[i];
        text.setAttribute("x", cx.toString());
        text.setAttribute("y", ys.join(","));
        text.setAttribute("writing-mode", "tb");
        text.setAttribute("transform", `rotate(${360 * i / names.length}, ${cx}, ${cy})`);
        g.appendChild(text);
    }
    return svg;
}
