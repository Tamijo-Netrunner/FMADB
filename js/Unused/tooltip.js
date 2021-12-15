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

function CardTooltipView() {
    this.tooltipElement = document.getElementById("card-tooltip"),
        this.$el.dataset.cardId && (this.cardId = this.$el.dataset.cardId,
            this.imgFrontSrc = this.$el.dataset.cardImageFront,
            this.imgBackSrc = this.$el.dataset.cardImageBack),
        this.$el.addEventListener("mousemove", this.moveTooltip),
        this.$el.addEventListener("mouseout", this.dismissTooltip)
    }