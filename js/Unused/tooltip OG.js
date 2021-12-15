window.scryfall= {
    mousePosition: {
        x: null,
        y: null
    },
    components: [],
    run: function (e) {
        var t, n = (e || document).querySelectorAll("[data-component]"), r = [];
        for (t = 0; t < n.length; t += 1) {
            var i = n[t]
                , o = scryfall.components[i.getAttribute("data-component")];
            o && !i.__init && (i.__init = !0,
                r.push({
                    el: i,
                    h: o.h,
                    p: o.p
                }))
        }
        for (r = r.sort(function (e, t) {
            return e.p - t.p
        }),
            t = 0; t < r.length; t += 1) {
            var a = r[t];
            Backbone.View.prototype.isPrototypeOf(a.h.prototype) ? new a.h({
                el: a.el
            }) : a.h(a.el)
        }
    }
},

window.scryfall.util = {
    mousePositionIsValid: function () {
        return !(!scryfall.mousePosition.x || !scryfall.mousePosition.y)
    },
    elementUnderCursor: function () {
        return scryfall.util.mousePositionIsValid() ? document.elementFromPoint(scryfall.mousePosition.x - window.pageXOffset, scryfall.mousePosition.y - window.pageYOffset) : null
    },
    inputValuesByAppendingString: function (e, t) {
        return {
            newValue: e.value + t,
            newSelection: e.value.length
        }
    },
    inputValuesByDiscardingSelection: function (e) {
        return {
            removedValue: e.value.substr(e.selectionStart, e.selectionEnd),
            newValue: e.value.substr(0, e.selectionStart) + e.value.substr(e.selectionEnd),
            newSelection: e.selectionStart
        }
    },
    inputValuesBySplittingAtSelection: function (e) {
        var t = e.selectionEnd - e.selectionStart;
        return {
            beforeFragment: e.value.substr(0, e.selectionStart),
            removedFragment: e.value.substr(e.selectionStart, t),
            afterFragment: e.value.substr(e.selectionEnd)
        }
    }
},
window.scryfall.cookies = {
    fetch: function (e) {
        return e && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
    },
    store: function (e, t, n, r, i, o) {
        if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e))
            return !1;
        var a = "";
        if (n)
            switch (n.constructor) {
                case Number:
                    a = n === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                    break;
                case String:
                    a = "; expires=" + n;
                    break;
                case Date:
                    a = "; expires=" + n.toUTCString()
            }
        return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + a + (i ? "; domain=" + i : "") + (r ? "; path=" + r : "") + (o ? "; secure" : ""),
            !0
    },
    "delete": function (e, t, n) {
        return !!this.hasItem(e) && (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n ? "; domain=" + n : "") + (t ? "; path=" + t : ""),
            !0)
    },
    exists: function (e) {
        return !(!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
    }
};

var CardTooltipView =
{
    name: "CardTooltip",
    selector: "[data-component='card-tooltip']",
    mounted: function () {
        this.tooltipElement = document.getElementById("card-tooltip"),
            this.$el.dataset.cardId && (this.cardId = this.$el.dataset.cardId,
                this.imgFrontSrc = this.$el.dataset.cardImageFront,
                this.imgBackSrc = this.$el.dataset.cardImageBack),
            this.$el.addEventListener("mousemove", this.moveTooltip),
            this.$el.addEventListener("mouseout", this.dismissTooltip)
    },
    methods: {
        moveTooltip: function (e) {
            if (window.innerWidth < 768)
                return !1;
            if ("flex" != this.tooltipElement.style.display && (this.tooltipElement.style.display = "flex"),
                this.tooltipElement.style.left = e.pageX + 50 + "px",
                this.tooltipElement.style.top = e.pageY - 30 + "px",
                this.tooltipElement.dataset.cardId != this.cardId) {
                if (this.tooltipElement.dataset.cardId = this.cardId,
                    this.imgFrontSrc) {
                    var t = document.createElement("img");
                    t.id = "card-tooltip-img-front",
                        t.className = "card",
                        t.src = this.imgFrontSrc
                }
                if (this.imgBackSrc) {
                    var n = document.createElement("img");
                    n.id = "card-tooltip-img-back",
                        n.className = "card",
                        n.src = this.imgBackSrc
                }
                for (; this.tooltipElement.firstChild;)
                    this.tooltipElement.removeChild(this.tooltipElement.firstChild);
                t && this.tooltipElement.appendChild(t),
                    n ? (this.tooltipElement.appendChild(n),
                        this.tooltipElement.className = "two-up") : this.tooltipElement.className = ""
            }
        },
        dismissTooltip: function () {
            this.tooltipElement.style.display = "none"
        }
    }
};
scryfall.createComponent(CardTooltipView)