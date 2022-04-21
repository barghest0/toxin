(() => {
  'use strict';
  const t = {
      min: 0,
      max: 100,
      step: 10,
      value: [0],
      isRange: !1,
      direction: 'horizontal',
      hasFill: !0,
      hasTips: !0,
      hasScale: !0,
      isDecimal: !1,
      decimalPlaces: 0,
    },
    e = 100,
    i = class {
      constructor(t = {}) {
        this.subscribers = t;
      }
      subscribe(t, e) {
        (this.subscribers[t] = this.subscribers[t] || []),
          this.subscribers[t].push(e);
      }
      unsubscribe(t, e) {
        this.subscribers[t] = this.subscribers[t].filter(t => e !== t);
      }
      notify(e, i = t) {
        this.subscribers[e].forEach(t => {
          t(i);
        });
      }
      getSubscribers() {
        return this.subscribers;
      }
    },
    s = function (t) {
      this.thumbs[t].style[this.view.offsetDirection] = `${
        this.getOffset()[t]
      }%`;
    },
    a = function (t) {
      const e = +!t,
        i = 0 === t,
        s = this.view.getValue()[0] > this.view.getValue()[1],
        a = this.view.getValue()[1] < this.view.getValue()[0];
      return (s && i) || (a && !i) ? e : t;
    },
    r = function (t) {
      const e = this.thumbs[t],
        i = e => {
          this.handleThumbDrag(e, t);
        },
        s = t => {
          t.preventDefault(),
            t.stopPropagation(),
            document.addEventListener('pointermove', i);
        };
      e.addEventListener('pointerdown', s),
        e.addEventListener('touchstart', s),
        document.addEventListener('pointerup', () => {
          document.removeEventListener('pointermove', i);
        });
    },
    l = 'slider__thumb';
  var h, n, c, d, u;
  !(function (t) {
    (t.updateThumb = 'UpdateThumb'),
      (t.updateThumbAfterTrackClick = 'UpdateThumbAfterTrackClick'),
      (t.updateThumbView = 'UpdateThumbView'),
      (t.updateFillView = 'UpdateFillView'),
      (t.updateParams = 'UpdateParams'),
      (t.updatePanelValues = 'UpdatePanelValues'),
      (t.getSliderParams = 'GetSliderParams');
  })(h || (h = {})),
    (function (t) {
      (t.horizontal = 'horizontal'), (t.vertical = 'vertical');
    })(n || (n = {})),
    (function (t) {
      (t.min = 'min'),
        (t.max = 'max'),
        (t.step = 'step'),
        (t.value = 'value'),
        (t.isRange = 'isRange'),
        (t.direction = 'direction'),
        (t.hasFill = 'hasFill'),
        (t.hasTips = 'hasTips'),
        (t.hasScale = 'hasScale'),
        (t.isDecimal = 'isDecimal'),
        (t.decimalPlaces = 'decimalPlaces'),
        (t.datafirstValue = 'firstValue'),
        (t.dataSecondValue = 'secondValue');
    })(c || (c = {})),
    (function (t) {
      (t.left = 'left'), (t.top = 'top');
    })(d || (d = {})),
    (function (t) {
      (t.width = 'width'), (t.height = 'height');
    })(u || (u = {}));
  const o = function (t, e) {
      const { direction: i, isRange: s } = this.view.getParams(),
        { DOMroot: a } = this.view,
        r = this.view.getSize(),
        l = i === n.horizontal ? t.pageX : t.pageY,
        c = this.view.calculateCursorOffset(l, i, a, r),
        d = s ? this.validateCollision(e) : e;
      (this.cursorOffset = c),
        (this.activeStance = d),
        this.notify(h.updateThumb);
    },
    m = class extends i {
      constructor(t) {
        super(),
          (this.view = t),
          (this.offset = []),
          (this.activeStance = 0),
          (this.cursorOffset = 0),
          (this.thumbs = []),
          (this.updateThumbStyle = s.bind(this)),
          (this.validateCollision = a.bind(this)),
          (this.dragAndDropThumb = r.bind(this)),
          (this.handleThumbDrag = o.bind(this));
      }
      setOffset(t, e) {
        this.offset[t] = e;
      }
      getOffset() {
        return this.offset;
      }
      renderThumb(t) {
        const e = document.createElement('div');
        e.classList.add(l),
          e.classList.add(`js-${l}-${t}`),
          e.classList.add(`${l}-${t}`),
          this.thumbs.push(e),
          this.view.DOMroot.appendChild(e),
          this.updateThumbStyle(t);
      }
    },
    f = 'slider__scale-mark',
    p = [3, 5, 7, 11];
  function b(t, e) {
    for (const i of e) if (t % i == 0) return i;
    return b(t - 1, e);
  }
  const w = function (t, i, s, a) {
      const r = Math.round((i - t) / s + 1),
        l = r - 1,
        h = b(l, p);
      let c = Math.max(Math.floor(l / h), 1);
      c = c < 15 ? Math.min(c, h) : c;
      const d = Math.abs(i - t),
        u = Math.ceil(r / c),
        o = u - 1,
        m = Math.floor(d / s) > u ? Math.round(Math.round(d / s) / o) * s : s;
      return {
        values: new Array(u).fill(null).map((e, s) => {
          let a = t + m * s;
          return (a = Math.min(a, i)), s === o && (a = i), Number(a.toFixed(1));
        }),
        offsets: new Array(u).fill(null).map((t, i) => {
          let s = Math.abs(m / d) * i * e;
          return (
            (s = Math.min(e, s)),
            i === o && (s = e),
            a === n.vertical && (s = Math.abs(e - s)),
            Number(s.toFixed(1))
          );
        }),
      };
    },
    v = function (t, e, i, s) {
      const a = w(i, e, t, s);
      for (let t = 0; t < a.values.length; t += 1) {
        const e = document.createElement('div');
        e.classList.add(f),
          e.classList.add(`${f}_${s}`),
          e.classList.add(`js-${f}_${s}`);
        const i = a.offsets[t];
        e.style[this.view.offsetDirection] = `${i}%`;
        const r = document.createElement('div');
        r.classList.add('slider__scale-number'),
          r.classList.add(`slider__scale-number_${s}`),
          r.classList.add(`js-slider__scale-number_${s}`),
          (r.innerHTML = a.values[t].toString()),
          e.appendChild(r),
          this.scale.appendChild(e);
      }
    },
    S = function () {
      this.view.getParams().isRange
        ? ((this.fill.style[this.view.offsetDirection] = `${
            this.getState().fillOffset
          }%`),
          (this.fill.style[this.view.fillDirection] = `${
            this.getState().fillSize
          }%`))
        : (this.fill.style[this.view.fillDirection] = `${
            this.getState().fillSize
          }%`);
    },
    g = class extends i {
      constructor(t) {
        super(),
          (this.fill = document.querySelector('.slider__fill')),
          (this.view = t),
          (this.state = { fillOffset: 0, fillSize: 0 }),
          (this.updateFillStyle = S.bind(this));
      }
      setState({ fillOffset: t, fillSize: e }) {
        (this.state.fillOffset = t), (this.state.fillSize = e);
      }
      getState() {
        return this.state;
      }
      renderFill(t) {
        const e = document.createElement('div');
        e.classList.add('slider__fill'),
          e.classList.add('js-slider__fill'),
          e.classList.add(`slider__fill_${t}`),
          (this.fill = e),
          this.view.DOMroot.appendChild(e),
          this.updateFillStyle();
      }
    },
    T = function () {
      this.view.DOMroot.addEventListener('pointerdown', t =>
        this.handleTrackClick(t),
      );
    },
    V = function (t) {
      const { direction: e } = this.view.getParams(),
        { DOMroot: i } = this.view,
        s = this.view.getSize(),
        a = e === n.horizontal ? t.pageX : t.pageY,
        r = this.view.calculateCursorOffset(a, e, i, s);
      (this.cursorOffset = r), this.notify(h.updateThumbAfterTrackClick);
    },
    O = class extends i {
      constructor(t) {
        super(),
          (this.view = t),
          (this.cursorOffset = 0),
          (this.track = document.querySelector('.slider__track')),
          (this.clickTrack = T.bind(this)),
          (this.handleTrackClick = V.bind(this));
      }
      renderTrack(t) {
        const e = document.createElement('div');
        e.classList.add('slider__track'),
          e.classList.add('js-slider__track'),
          e.classList.add(`slider__track_${t}`),
          (this.track = e),
          this.view.DOMroot.appendChild(e);
      }
    },
    P = function (t) {
      (this.tips[t].style[this.view.offsetDirection] = `${
        this.getOffset()[t]
      }%`),
        (this.tips[t].innerHTML = this.view
          .getValue()
          [t].toFixed(this.view.getParams().decimalPlaces));
    },
    M = class extends i {
      constructor(t) {
        super(),
          (this.view = t),
          (this.offset = []),
          (this.tips = []),
          (this.updateTipStyle = P.bind(this));
      }
      setOffset(t, e) {
        this.offset[t] = e;
      }
      getOffset() {
        return this.offset;
      }
      renderTip(t, e) {
        const i = document.createElement('div');
        i.classList.add('slider__tip'),
          i.classList.add(`js-slider__tip-${t}`),
          i.classList.add(`slider__tip-${t}`),
          i.classList.add(`slider__tip_${e}`),
          this.tips.push(i),
          this.view.DOMroot.appendChild(i),
          this.updateTipStyle(t);
      }
    },
    D = function (t) {
      (this.offsetDirection = t === n.horizontal ? d.left : d.top),
        (this.fillDirection = t === n.horizontal ? u.width : u.height);
    },
    F = function (t, i, s, a) {
      return i === n.horizontal
        ? ((t - s.offsetLeft) / a) * e
        : ((t - s.offsetTop) / a) * e;
    },
    _ = class extends i {
      constructor(e) {
        super(),
          (this.DOMroot = e),
          (this.thumbView = new m(this)),
          (this.trackView = new O(this)),
          (this.scaleView = new (class {
            constructor(t) {
              (this.view = t),
                (this.scale = document.querySelector('.slider__scale')),
                (this.renderScaleMarks = v.bind(this));
            }
            renderScale(t) {
              const e = document.createElement('div');
              e.classList.add('slider__scale'),
                e.classList.add('js-slider__scale'),
                e.classList.add(`slider__scale_${t}`),
                (this.scale = e),
                this.view.DOMroot.appendChild(e);
            }
          })(this)),
          (this.fillView = new g(this)),
          (this.tipView = new M(this)),
          (this.params = t),
          (this.size = 0),
          (this.offsetDirection = d.left),
          (this.fillDirection = u.width),
          (this.prepareDirectionForInteraction = D.bind(this)),
          (this.calculateCursorOffset = F.bind(this));
      }
      setParams(t) {
        this.params = t;
      }
      setParam(t, e) {
        this.params[t] = e;
      }
      setSize(t) {
        this.size = t;
      }
      getParams() {
        return this.params;
      }
      getSize() {
        return this.size;
      }
      setValue(t, e) {
        this.params.value[t] = e;
      }
      getValue() {
        return this.params.value;
      }
    },
    L = function (t) {
      const { direction: e } = this.getParams();
      return e === n.horizontal ? t : 100 - t;
    },
    k = function (t) {
      const { min: e, max: i, direction: s } = this.getParams();
      this.getOffset()[t] > 100 &&
        (this.setOffset(t, 100), this.setValue(t, s === n.horizontal ? i : e)),
        this.getOffset()[t] < 0 &&
          (this.setOffset(t, 0), this.setValue(t, s === n.horizontal ? e : i));
    },
    z = function ({
      min: t,
      max: e,
      value: i,
      decimalPlaces: s,
      step: a,
      isRange: r,
      direction: l,
      hasFill: h,
      hasTips: n,
      hasScale: c,
      isDecimal: d,
      panel: u,
    }) {
      const o = i,
        m = (function (t, e, i) {
          let s = Math.min(Math.abs(e - i), Math.abs(t));
          return 0 === s && (s = 1), s;
        })(a, t, e),
        f = (function (t, e, i) {
          return Math.min(e - i, t);
        })(t, e, m),
        p = (function (t, e, i) {
          const s = Math.min(t, e);
          return i ? s : 0;
        })(s, 3, d);
      return (
        (o[0] = (function (t, e, i) {
          const s = t;
          return (s[0] = Math.max(e, s[0])), (s[0] = Math.min(i, s[0])), s[0];
        })(o, t, e)),
        r &&
          (1 === o.length && o.push(o[0]),
          (o[1] = (function (t, e, i) {
            const s = t;
            return (
              (s[1] = Math.max(e, t[1])),
              (s[1] = Math.min(i, t[1])),
              (s[1] = Math.max(s[0], s[1])),
              s[1]
            );
          })(o, t, e))),
        {
          min: f,
          max: e,
          step: m,
          value: o,
          decimalPlaces: p,
          isDecimal: d,
          isRange: r,
          direction: l,
          hasFill: h,
          hasTips: n,
          hasScale: c,
          panel: u,
        }
      );
    },
    x = class extends i {
      constructor(e) {
        super(),
          (this.DOMroot = e),
          (this.params = t),
          (this.thumbsOffset = []),
          (this.fillState = { fillOffset: 0, fillSize: 0 }),
          (this.size = 0),
          (this.activeStance = 0),
          (this.endsValidation = k.bind(this)),
          (this.prepareOffset = L.bind(this)),
          (this.validateParams = z.bind(this));
      }
      setParams(t) {
        this.params = this.validateParams(t);
      }
      setParam(t, e) {
        this.params[t] = e;
      }
      getParams() {
        return this.params;
      }
      setSize(t) {
        this.size = t;
      }
      getSize() {
        return this.size;
      }
      setValue(t, e) {
        const { decimalPlaces: i } = this.params;
        this.params.value[t] = Number(e.toFixed(i));
      }
      getValue() {
        const { value: t } = this.params;
        return t;
      }
      setOffset(t, e) {
        this.thumbsOffset[t] = e;
      }
      getOffset() {
        return this.thumbsOffset;
      }
      calculateOffset(t) {
        const { min: i, max: s, value: a } = this.params;
        return this.prepareOffset((a[t] - i) / ((s - i) / e));
      }
      updateThumb(t, e) {
        const i = this.prepareOffset(e),
          s = this.calculateStepPercent(),
          a = Math.round(i / s) * s;
        this.setValue(t, this.calculateValue(a, s)),
          this.setOffset(t, this.calculateOffset(t)),
          this.endsValidation(t),
          (this.activeStance = t),
          this.notify(h.updateThumbView),
          this.params.hasFill && this.updateFill(),
          this.notify(h.getSliderParams, this.getParams());
      }
      updateThumbAfterTrackClick(t) {
        const { fillOffset: e, fillSize: i } = this.getFillState();
        let s = 0;
        t > i / 2 + e && (s = 1),
          (s = this.chooseCorrectStance(s)),
          this.updateThumb(s, t);
      }
      updateFill() {
        this.setFillState(this.calculateFillState()),
          this.notify(h.updateFillView);
      }
      setFillState(t) {
        this.fillState = t;
      }
      getFillState() {
        return this.fillState;
      }
      calculateFillState() {
        return {
          fillOffset: this.calculateFillOffset(),
          fillSize: this.calculateFillSize(),
        };
      }
      chooseCorrectStance(t) {
        const { isRange: e, direction: i } = this.getParams();
        return i === n.vertical ? Number(!t) : e ? t : 0;
      }
      calculateFillSize() {
        const { isRange: t } = this.params;
        return t
          ? this.calculateBasedOnDirection(
              this.thumbsOffset[0],
              this.thumbsOffset[1],
            )
          : this.prepareOffset(this.thumbsOffset[0]);
      }
      calculateBasedOnDirection(t, e) {
        const { direction: i } = this.getParams();
        return i === n.horizontal ? e - t : t - e;
      }
      calculateFillOffset() {
        const { isRange: t, direction: e } = this.params;
        return t
          ? e === n.horizontal
            ? this.thumbsOffset[0]
            : this.thumbsOffset[1]
          : 0;
      }
      calculateStepPercent() {
        const { max: t, min: i, step: s } = this.params;
        return e / ((t - i) / s);
      }
      calculateValue(t, e) {
        const { step: i, min: s } = this.params;
        return (t / e) * i + s;
      }
    },
    y = function () {
      const { direction: t } = this.model.getParams(),
        e = t === n.horizontal ? n.vertical : n.horizontal;
      this.DOMroot.classList.remove(`slider_${e}`),
        this.DOMparent.classList.remove(`slider-parent_${e}`),
        (this.DOMroot.innerHTML = '');
    },
    C = function () {
      $(this.DOMroot.classList[0]).off();
    },
    R = function () {
      return (
        this.view.thumbView.subscribe(h.updateThumb, this.updateThumb),
        this.view.trackView.subscribe(
          h.updateThumbAfterTrackClick,
          this.updateThumbAfterTrackClick,
        ),
        this.model.subscribe(h.getSliderParams, this.getSliderParams),
        this.model.subscribe(h.updateThumbView, this.updateThumbView),
        this.model.getParams().hasFill &&
          this.model.subscribe(h.updateFillView, this.updateFillView),
        this.model.getParams().hasTips &&
          this.model.subscribe(h.updateThumbView, this.updateTipView),
        this
      );
    },
    E = function () {
      const t = this.model.activeStance,
        e = this.model.getOffset()[t];
      this.view.tipView.setOffset(t, e), this.view.tipView.updateTipStyle(t);
    },
    A = function () {
      const t = this.model.getFillState();
      this.view.fillView.setState(t), this.view.fillView.updateFillStyle();
    },
    N = function () {
      const { isRange: t } = this.model.getParams();
      return (
        this.view.thumbView.dragAndDropThumb(0),
        this.view.trackView.clickTrack(),
        t && this.view.thumbView.dragAndDropThumb(1),
        this
      );
    },
    j = function () {
      const t = this.view.trackView.cursorOffset;
      this.model.updateThumbAfterTrackClick(t);
    },
    B = function () {
      const t = this.view.thumbView.activeStance,
        e = this.view.thumbView.cursorOffset;
      this.model.updateThumb(t, e);
    },
    H = function () {
      const t = this.model.activeStance,
        e = this.model.getOffset()[t];
      this.view.thumbView.setOffset(t, e),
        this.view.thumbView.updateThumbStyle(t),
        (this.view.thumbView.activeStance = t);
    },
    U = function () {
      return (
        this.view.thumbView.unsubscribe(h.updateThumb, this.updateThumb),
        this.view.trackView.unsubscribe(
          h.updateThumbAfterTrackClick,
          this.updateThumbAfterTrackClick,
        ),
        this.model.unsubscribe(h.getSliderParams, this.getSliderParams),
        this.model.unsubscribe(h.updateThumbView, this.updateThumbView),
        this.getParams().hasFill ||
          this.model.unsubscribe(h.updateFillView, this.updateFillView),
        this.getParams().hasTips ||
          this.model.unsubscribe(h.updateThumbView, this.updateTipView),
        this
      );
    },
    q = function (t) {
      return t;
    };
  function I({
    min: e,
    max: i,
    value: s,
    decimalPlaces: a,
    step: r,
    isRange: l,
    direction: h,
    hasFill: n,
    hasTips: c,
    hasScale: d,
    isDecimal: u,
    panel: o,
  }) {
    const m = null != e ? e : t.min,
      f = null != i ? i : t.max,
      p = null != a ? a : t.decimalPlaces,
      b = null != r ? r : t.step,
      w = null != l ? l : t.isRange,
      v = null != h ? h : t.direction,
      S = null != n ? n : t.hasFill,
      g = null != c ? c : t.hasTips,
      T = null != d ? d : t.hasScale,
      V = null != u ? u : t.isDecimal,
      O = null != o ? o : t.panel;
    let P = null != s ? s : t.value;
    return (
      Array.isArray(P) || (P = [P]),
      l && 1 === P.length && P.push(P[0]),
      {
        min: m,
        max: f,
        value: P,
        decimalPlaces: p,
        step: b,
        isRange: w,
        direction: v,
        hasFill: S,
        hasTips: g,
        hasScale: T,
        isDecimal: V,
        panel: O,
      }
    );
  }
  $.fn.extend({
    slider: function (t) {
      const e = this[0],
        i = I(t || {}),
        s = (function (t, e) {
          let i;
          return (
            (i =
              t.data(c.datafirstValue) && t.data(c.dataSecondValue)
                ? [
                    Number(t.data(c.datafirstValue)),
                    Number(t.data(c.dataSecondValue)),
                  ]
                : Number(t.data(c.datafirstValue)) ||
                  Number(t.data(c.dataSecondValue))
                ? [Number(t.data(c.datafirstValue))] || 0
                : e.value),
            {
              min: Number(t.data(c.min)) || e.min,
              max: Number(t.data(c.max)) || e.max,
              value: i,
              decimalPlaces: Number(t.data(c.decimalPlaces)) || e.decimalPlaces,
              step: Number(t.data(c.step)) || e.step,
              isRange: Boolean(t.data(c.isRange)) || e.isRange,
              direction: t.data(c.direction) || e.direction,
              hasFill: Boolean(t.data(c.hasFill)) || e.hasFill,
              hasTips: Boolean(t.data(c.hasTips)) || e.hasTips,
              hasScale: Boolean(t.data(c.hasScale)) || e.hasScale,
              isDecimal: Boolean(t.data(c.isDecimal)) || e.isDecimal,
            }
          );
        })($(e), i);
      return new (class {
        constructor(t, e) {
          (this.params = e),
            (this.DOMroot = t),
            (this.DOMparent = t.parentElement),
            (this.presenter = new (class {
              constructor(t, e, i) {
                (this.DOMroot = e),
                  (this.DOMparent = i),
                  (this.model = new x(this.DOMroot)),
                  (this.view = new _(this.DOMroot)),
                  (this.params = t),
                  (this.clearHTML = y.bind(this)),
                  (this.removeListeners = C.bind(this)),
                  (this.subscribe = R.bind(this)),
                  (this.unsubscribe = U.bind(this)),
                  (this.updateThumbAfterTrackClick = j.bind(this)),
                  (this.updateThumb = B.bind(this)),
                  (this.updateThumbView = H.bind(this)),
                  (this.updateTipView = E.bind(this)),
                  (this.updateFillView = A.bind(this)),
                  (this.addListeners = N.bind(this)),
                  (this.getSliderParams = q.bind(this));
              }
              init() {
                this.setParams(this.params),
                  this.createSlider(),
                  this.subscribe(),
                  this.addListeners();
              }
              rerender(t) {
                this.setParams(t),
                  (this.view.thumbView.thumbs = []),
                  (this.view.tipView.tips = []),
                  this.unsubscribe(),
                  this.clearHTML(),
                  this.removeListeners(),
                  this.createSlider(),
                  this.subscribe(),
                  this.addListeners();
              }
              setParams(t) {
                this.params = t;
              }
              getParams() {
                return this.params;
              }
              createSlider() {
                this.addSliderClasses(this.params.direction)
                  .setModelState()
                  .setViewState()
                  .setSubViewsState()
                  .renderSlider();
              }
              setModelState() {
                this.model.setParams(this.params);
                const t =
                  this.model.getParams().direction === n.horizontal
                    ? this.DOMroot.offsetWidth
                    : this.DOMroot.offsetHeight;
                return (
                  this.model.setSize(t),
                  this.model.getParams().value.forEach((t, e) => {
                    this.model.setOffset(e, this.model.calculateOffset(e));
                  }),
                  this.model.setFillState(this.model.calculateFillState()),
                  this
                );
              }
              addSliderClasses(t) {
                return (
                  this.DOMroot.classList.add('slider'),
                  this.DOMroot.classList.add('js-slider'),
                  this.DOMroot.classList.add(`slider_${t}`),
                  this.DOMroot.classList.add(`js-slider_${t}`),
                  this.DOMparent.classList.add(`slider-parent_${t}`),
                  this
                );
              }
              setViewState() {
                return (
                  this.view.setParams(this.model.getParams()),
                  this.view.setSize(this.model.getSize()),
                  this.view.prepareDirectionForInteraction(
                    this.model.getParams().direction,
                  ),
                  this
                );
              }
              setSubViewsState() {
                const { hasTips: t, hasFill: e } = this.model.getParams(),
                  i = this.model.getValue(),
                  s = this.model.getFillState();
                return (
                  i.forEach((e, i) => {
                    this.setThumbViewState(i), t && this.setTipViewState(i);
                  }),
                  e && this.setFillViewState(s),
                  this
                );
              }
              setThumbViewState(t) {
                const e = this.model.getOffset()[t];
                this.view.thumbView.setOffset(t, e);
              }
              setFillViewState(t) {
                this.view.fillView.setState(t);
              }
              setTipViewState(t) {
                const e = this.model.getOffset()[t];
                this.view.tipView.setOffset(t, e);
              }
              renderSlider() {
                const {
                  direction: t,
                  hasFill: e,
                  hasScale: i,
                  hasTips: s,
                  isRange: a,
                } = this.model.getParams();
                this.renderTrack(t),
                  this.renderThumb(0),
                  s && this.renderTip(0, t),
                  i && this.renderScale(t),
                  e && this.renderFill(t),
                  a && (this.renderThumb(1), s && this.renderTip(1, t));
              }
              renderTrack(t) {
                this.view.trackView.renderTrack(t);
              }
              renderThumb(t) {
                this.view.thumbView.renderThumb(t);
              }
              renderTip(t, e) {
                this.view.tipView.renderTip(t, e);
              }
              renderFill(t) {
                this.view.fillView.renderFill(t);
              }
              renderScale(t) {
                const { step: e, max: i, min: s } = this.model.getParams();
                this.view.scaleView.renderScale(t),
                  this.view.scaleView.renderScaleMarks(e, i, s, t);
              }
            })(this.params, this.DOMroot, this.DOMparent)),
            this.init();
        }
        getParams() {
          return this.params;
        }
        getContainer() {
          return this.DOMroot;
        }
        getParent() {
          return this.DOMparent;
        }
        unsubscribe() {
          this.presenter.unsubscribe();
        }
        updateParams(t) {
          this.presenter.rerender(I(t)),
            (this.params = this.presenter.model.getParams());
        }
        subscribe(t) {
          this.presenter.model.subscribe(h.getSliderParams, t);
        }
        init() {
          this.presenter.init(), this.attachResizeListener();
        }
        attachResizeListener() {
          window.addEventListener('resize', () =>
            this.presenter.rerender(this.params),
          );
        }
      })(e, s);
    },
  }),
    document.querySelectorAll('[data-slider="true"]').forEach(t => {
      $(t).slider();
    });
})();
