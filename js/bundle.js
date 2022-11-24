! function() { "use strict";

    function t(t) { const e = document.querySelector(t);
        e.classList.add("hide"), e.classList.remove("show"), document.body.style.overflow = "" }

    function e(t, e) { const n = document.querySelector(t);
        n.classList.add("show"), n.classList.remove("hide"), document.body.style.overflow = "hidden", e && clearInterval(e) }
    window.addEventListener("DOMContentLoaded", (function() { const n = setTimeout((() => e(".modal", n)), 3e5);
        (function(t, e, n, o) { let s = document.querySelectorAll(t),
                r = document.querySelectorAll(e),
                a = document.querySelector(n);

            function c() { r.forEach((t => { t.classList.add("hide"), t.classList.remove("show", "fade") })), s.forEach((t => { t.classList.remove(o) })) }

            function i() { let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                r[t].classList.add("show", "fade"), r[t].classList.remove("hide"), s[t].classList.add(o) }
            c(), i(), a.addEventListener("click", (function(e) { const n = e.target;
                n && n.classList.contains(t.slice(1)) && s.forEach(((t, e) => { n == t && (c(), i(e)) })) })) })(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active"),
        function() { const t = document.querySelector(".calculating__result span"); let e, n, o, s, r;

            function a() { t.textContent = e && n && o && s && r ? "female" === e ? Math.round((447.6 + 9.2 * o + 3.1 * n - 4.3 * s) * r) : Math.round((88.36 + 13.4 * o + 4.8 * n - 5.7 * s) * r) : "____" }

            function c(t, e) { document.querySelectorAll(t).forEach((t => { t.classList.remove(e), t.getAttribute("id") === localStorage.getItem("sex") && t.classList.add(e), t.getAttribute("data-ratio") === localStorage.getItem("ratio") && t.classList.add(e) })) }

            function i(t, n) { const o = document.querySelectorAll(t);
                o.forEach((t => { t.addEventListener("click", (t => { t.target.getAttribute("data-ratio") ? (r = +t.target.getAttribute("data-ratio"), localStorage.setItem("ratio", +t.target.getAttribute("data-ratio"))) : (e = t.target.getAttribute("id"), localStorage.setItem("sex", t.target.getAttribute("id"))), o.forEach((t => { t.classList.remove(n) })), t.target.classList.add(n), a() })) })) }

            function l(t) { const e = document.querySelector(t);
                e.addEventListener("input", (() => { switch (e.value.match(/\D/g) ? e.style.border = "1px solid red" : e.style.border = "none", e.getAttribute("id")) {
                        case "height":
                            n = +e.value; break;
                        case "weight":
                            o = +e.value; break;
                        case "age":
                            s = +e.value }
                    a() })) }
            localStorage.getItem("sex") ? e = localStorage.getItem("sex") : (e = "female", localStorage.setItem("sex", "female")), localStorage.getItem("ratio") ? r = localStorage.getItem("ratio") : (r = 1.375, localStorage.setItem("ratio", 1.375)), a(), c("#gender div", "calculating__choose-item_active"), c(".calculating__choose_big div", "calculating__choose-item_active"), i("#gender div", "calculating__choose-item_active"), i(".calculating__choose_big div", "calculating__choose-item_active"), l("#height"), l("#weight"), l("#age") }(),
        function() { class t { constructor(t, e, n, o, s, r) { this.src = t, this.alt = e, this.title = n, this.descr = o, this.price = s; for (var a = arguments.length, c = new Array(a > 6 ? a - 6 : 0), i = 6; i < a; i++) c[i - 6] = arguments[i];
                    this.classes = c, this.parent = document.querySelector(r), this.transfer = 27, this.changeToUAH() }
                changeToUAH() { this.price = this.price * this.transfer }
                render() { const t = document.createElement("div");
                    0 === this.classes.length ? (this.classes = "menu__item", t.classList.add(this.classes)) : this.classes.forEach((e => t.classList.add(e))), t.innerHTML = `\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `, this.parent.append(t) } }(async function(t) { let e = await fetch(t); if (!e.ok) throw new Error(`Could not fetch ${t}, status: ${e.status}`); return await e.json() })("http://localhost:3000/menu").then((e => { e.forEach((e => { let { img: n, altimg: o, title: s, descr: r, price: a } = e;
                    new t(n, o, s, r, a, ".menu .container").render() })) })) }(),
        function(n, o) {
            function s(n) { const s = document.querySelector(".modal__dialog");
                s.classList.add("hide"), e(".modal", o); const r = document.createElement("div");
                r.classList.add("modal__dialog"), r.innerHTML = `\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${n}</div>\n            </div>\n        `, document.querySelector(".modal").append(r), setTimeout((() => { r.remove(), s.classList.add("show"), s.classList.remove("hide"), t(".modal") }), 4e3) }
            document.querySelectorAll(n).forEach((t => { var e;
                (e = t).addEventListener("submit", (t => { t.preventDefault(); let n = document.createElement("img");
                    n.src = "img/form/spinner.svg", n.style.cssText = "\n                display: block;\n                margin: 0 auto;\n            ", e.insertAdjacentElement("afterend", n); const o = new FormData(e);
                    (async(t, e) => { let n = await fetch("http://localhost:3000/requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: e }); return await n.json() })(0, JSON.stringify(Object.fromEntries(o.entries()))).then((t => { console.log(t), s("Спасибо! Скоро мы с вами свяжемся"), n.remove() })).catch((() => { s("Что-то пошло не так...") })).finally((() => { e.reset() })) })) })) }("form", n),
        function(n, o, s) { const r = document.querySelectorAll(n),
                a = document.querySelector(o);
            r.forEach((t => { t.addEventListener("click", (() => e(o, s))) })), a.addEventListener("click", (e => { e.target !== a && "" != e.target.getAttribute("data-close") || t(o) })), document.addEventListener("keydown", (e => { "Escape" === e.code && a.classList.contains("show") && t(o) })), window.addEventListener("scroll", (function t() { window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight && (e(o, s), window.removeEventListener("scroll", t)) })) }("[data-modal]", ".modal", n),
        function(t) { let { container: e, slide: n, nextArrow: o, prevArrow: s, totalCounter: r, currentCounter: a, wrapper: c, field: i } = t, l = 0, d = 1; const u = document.querySelectorAll(n),
                m = document.querySelector(e),
                h = document.querySelector(s),
                g = document.querySelector(o),
                f = document.querySelector(r),
                y = document.querySelector(a),
                p = document.querySelector(c),
                v = window.getComputedStyle(p).width,
                _ = document.querySelector(i);
            u.length < 10 ? (f.textContent = `0${u.length}`, y.textContent = `0${d}`) : (f.textContent = u.length, y.textContent = d), _.style.width = 100 * u.length + "%", _.style.display = "flex", _.style.transition = "0.5s all", p.style.overflow = "hidden", u.forEach((t => { t.style.width = v })), m.style.position = "relative"; const w = document.createElement("ol"),
                L = [];
            w.classList.add("carousel-indicators"), w.style.cssText = "\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    ", m.append(w); for (let t = 0; t < u.length; t++) { const e = document.createElement("li");
                e.setAttribute("data-slide-to", t + 1), e.style.cssText = "\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        ", 0 == t && (e.style.opacity = 1), w.append(e), L.push(e) }

            function S(t) { return +t.replace(/\D/g, "") }
            g.addEventListener("click", (() => { l == S(v) * (u.length - 1) ? l = 0 : l += S(v), _.style.transform = `translateX(-${l}px)`, d == u.length ? d = 1 : d++, u.length < 10 ? y.textContent = `0${d}` : y.textContent = d, L.forEach((t => t.style.opacity = ".5")), L[d - 1].style.opacity = 1 })), h.addEventListener("click", (() => { 0 == l ? l = S(v) * (u.length - 1) : l -= S(v), _.style.transform = `translateX(-${l}px)`, 1 == d ? d = u.length : d--, u.length < 10 ? y.textContent = `0${d}` : y.textContent = d, L.forEach((t => t.style.opacity = ".5")), L[d - 1].style.opacity = 1 })), L.forEach((t => { t.addEventListener("click", (t => { const e = t.target.getAttribute("data-slide-to");
                    d = e, l = S(v) * (e - 1), _.style.transform = `translateX(-${l}px)`, u.length < 10 ? y.textContent = `0${d}` : y.textContent = d, L.forEach((t => t.style.opacity = ".5")), L[d - 1].style.opacity = 1 })) })) }({ container: ".offer__slider", nextArrow: ".offer__slider-next", prevArrow: ".offer__slider-prev", slide: ".offer__slide", totalCounter: "#total", currentCounter: "#current", wrapper: ".offer__slider-wrapper", field: ".offer__slider-inner" }),
        function(t, e) {
            function n(t) { return t >= 0 && t < 10 ? "0" + t : t }! function(t, e) { const o = document.querySelector(t),
                    s = o.querySelector("#days"),
                    r = o.querySelector("#hours"),
                    a = o.querySelector("#minutes"),
                    c = o.querySelector("#seconds"),
                    i = setInterval(l, 1e3);

                function l() { const t = function(t) { const e = Date.parse(t) - Date.parse(new Date),
                            n = Math.floor(e / 864e5),
                            o = Math.floor(e / 1e3 % 60),
                            s = Math.floor(e / 1e3 / 60 % 60); return { total: e, days: n, hours: Math.floor(e / 36e5 % 24), minutes: s, seconds: o } }(e);
                    s.innerHTML = n(t.days), r.innerHTML = n(t.hours), a.innerHTML = n(t.minutes), c.innerHTML = n(t.seconds), t.total <= 0 && clearInterval(i) }
                l() }(t, e) }(".timer", "2023-06-11") })) }();
//# sourceMappingURL=bundle.js.map