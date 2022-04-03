(() => {
  'use strict';
  var e, t, i, s, a, l;
  !(function (e) {
    (e.updateThumb = 'UpdateThumb'),
      (e.updateThumbAfterTrackClick = 'UpdateThumbAfterTrackClick'),
      (e.updateFill = 'UpdateFill'),
      (e.updateThumbView = 'UpdateThumbView'),
      (e.updateFillView = 'UpdateFillView'),
      (e.updateParams = 'UpdateParams'),
      (e.updatePanelValues = 'UpdatePanelValues');
  })(e || (e = {})),
    (function (e) {
      (e.horizontal = 'horizontal'), (e.vertical = 'vertical');
    })(t || (t = {})),
    (function (e) {
      (e.min = 'min'),
        (e.max = 'max'),
        (e.step = 'step'),
        (e.value = 'value'),
        (e.isRange = 'isRange'),
        (e.direction = 'direction'),
        (e.hasFill = 'hasFill'),
        (e.hasTips = 'hasTips'),
        (e.hasScale = 'hasScale'),
        (e.isDecimal = 'isDecimal'),
        (e.decimalPlaces = 'decimalPlaces');
    })(i || (i = {})),
    (function (e) {
      (e.init = 'init'), (e.rebuild = 'rebuild');
    })(s || (s = {})),
    (function (e) {
      (e.left = 'left'), (e.top = 'top');
    })(a || (a = {})),
    (function (e) {
      (e.width = 'width'), (e.height = 'height');
    })(l || (l = {}));
  const n = class {
      constructor(e = {}) {
        this.subscribers = e;
      }
      subscribe(e, t) {
        (this.subscribers[e] = this.subscribers[e] || []), this.subscribers[e].push(t);
      }
      unsubscribe(e, t) {
        this.subscribers[e] = this.subscribers[e].filter(e => t !== e);
      }
      notify(e, ...t) {
        this.subscribers[e].forEach(e => {
          e(...t);
        });
      }
      getSubscribers() {
        return this.subscribers;
      }
    },
    h = function (e) {
      this.thumbs[e].style[this.view.offsetDirection] = `${this.getOffset()[e]}%`;
    },
    r = {
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
      panel: !1,
    },
    c = function (e) {
      const t = +!e,
        i = 0 === e,
        s = this.view.getValue()[0] > this.view.getValue()[1],
        a = this.view.getValue()[1] < this.view.getValue()[0];
      return (s && i) || (a && !i) ? t : e;
    },
    u = function (i) {
      const s = this.thumbs[i],
        a = s => {
          !(function (i, s, a) {
            const { direction: l, isRange: n, hasFill: h } = s.view.getParams(),
              { DOMroot: r } = s.view,
              c = s.view.getSize(),
              u = l === t.horizontal ? i.pageX : i.pageY,
              d = s.view.calculateCursorOffset(u, l, r, c),
              o = n ? s.validateCollision(a) : a;
            s.notify(e.updateThumb, o, d), h && s.notify(e.updateFill);
          })(s, this, i);
        },
        l = e => {
          e.preventDefault(),
            e.stopPropagation(),
            document.addEventListener('pointermove', a);
        };
      s.addEventListener('pointerdown', l),
        s.addEventListener('touchstart', l),
        document.addEventListener('pointerup', () => {
          document.removeEventListener('pointermove', a);
        });
    },
    d = class extends n {
      constructor(e) {
        super(),
          (this.view = e),
          (this.offset = []),
          (this.activeStance = 0),
          (this.thumbs = []),
          (this.updateThumbStyle = h.bind(this)),
          (this.validateCollision = c.bind(this)),
          (this.dragAndDropThumb = u.bind(this));
      }
      setOffset(e, t) {
        this.offset[e] = t;
      }
      getOffset() {
        return this.offset;
      }
      createThumb(e) {
        const t = document.createElement('div');
        t.classList.add('slider__thumb'),
          t.classList.add(`js-slider__thumb-${e}`),
          t.classList.add(`slider__thumb-${e}`),
          this.thumbs.push(t),
          this.view.DOMroot.appendChild(t),
          this.updateThumbStyle(e);
      }
    },
    o = class extends n {
      constructor(e) {
        super(), (this.view = e), (this.track = document.querySelector('.slider__track'));
      }
      createTrack(e) {
        const t = document.createElement('div');
        t.classList.add('slider__track'),
          t.classList.add('js-slider__track'),
          t.classList.add(`slider__track_${e}`),
          (this.track = t),
          this.view.DOMroot.appendChild(t);
      }
      clickTrack() {
        this.view.DOMroot.addEventListener('pointerdown', i =>
          (function (i, s) {
            const { direction: a, hasFill: l } = s.view.getParams(),
              { DOMroot: n } = s.view,
              h = s.view.getSize(),
              r = a === t.horizontal ? i.pageX : i.pageY,
              c = s.view.calculateCursorOffset(r, a, n, h);
            s.notify(e.updateThumbAfterTrackClick, c), l && s.notify(e.updateFill);
          })(i, this),
        );
      }
    };
  function m(e, t) {
    for (let i = 0; i < t.length; i += 1) if (e % t[i] == 0) return t[i];
    return m(e - 1, t);
  }
  const p = function (e, i, s, a) {
      const l = Math.round((i - e) / s + 1),
        n = l - 1,
        h = m(n, [3, 5, 7, 11]);
      let r = Math.max(Math.floor(n / h), 1);
      r = r < 15 ? Math.min(r, h) : r;
      const c = Math.ceil(l / r),
        u = Math.abs(i - e),
        d = Math.floor(u / s) > c ? Math.round(Math.round(u / s) / (c - 1)) * s : s;
      return {
        values: new Array(c).fill(null).map((t, s) => {
          let a = e + d * s;
          return (a = Math.min(a, i)), s === c - 1 && (a = i), Number(a.toFixed(1));
        }),
        offsets: new Array(c).fill('').map((e, i) => {
          let s = Math.abs(d / u) * i * 100;
          return (
            (s = Math.min(100, s)),
            i === c - 1 && (s = 100),
            a === t.vertical && (s = Math.abs(100 - s)),
            Number(s.toFixed(1))
          );
        }),
      };
    },
    f = function (e, t, i, s) {
      const a = p(i, t, e, s);
      for (let e = 0; e < a.values.length; e += 1) {
        const t = document.createElement('div');
        t.classList.add('slider__scale-mark'), t.classList.add(`slider__scale-mark_${s}`);
        const i = a.offsets[e];
        t.style[this.view.offsetDirection] = `${i}%`;
        const l = document.createElement('div');
        l.classList.add('slider__scale-number'),
          l.classList.add(`slider__scale-number_${s}`),
          (l.innerHTML = a.values[e].toString()),
          t.appendChild(l),
          this.scale.appendChild(t);
      }
    },
    b = function () {
      this.view.getParams().isRange
        ? ((this.fill.style[this.view.offsetDirection] = `${
            this.getState().fillOffset
          }%`),
          (this.fill.style[this.view.fillDirection] = `${this.getState().fillSize}%`))
        : (this.fill.style[this.view.fillDirection] = `${this.getState().fillSize}%`);
    },
    v = class extends n {
      constructor(e) {
        super(),
          (this.fill = document.querySelector('.slider__fill')),
          (this.view = e),
          (this.state = { fillOffset: 0, fillSize: 0 }),
          (this.updateFillStyle = b.bind(this));
      }
      setState({ fillOffset: e, fillSize: t }) {
        (this.state.fillOffset = e), (this.state.fillSize = t);
      }
      getState() {
        return this.state;
      }
      createFill(e) {
        const t = document.createElement('div');
        t.classList.add('slider__fill'),
          t.classList.add('js-slider__fill'),
          t.classList.add(`slider__fill_${e}`),
          (this.fill = t),
          this.view.DOMroot.appendChild(t),
          this.updateFillStyle();
      }
    },
    w = function (e) {
      (this.offsetDirection = e === t.horizontal ? a.left : a.top),
        (this.fillDirection = e === t.horizontal ? l.width : l.height);
    },
    g = function (e, i, s, a) {
      return i === t.horizontal
        ? ((e - s.offsetLeft) / a) * 100
        : ((e - s.offsetTop) / a) * 100;
    },
    S = function (e) {
      (this.tips[e].style[this.view.offsetDirection] = `${this.getOffset()[e]}%`),
        (this.tips[e].innerHTML = this.view
          .getValue()
          [e].toFixed(this.view.getParams().decimalPlaces));
    },
    V = class extends n {
      constructor(e) {
        super(),
          (this.view = e),
          (this.offset = []),
          (this.tips = []),
          (this.updateTipStyle = S.bind(this));
      }
      setOffset(e, t) {
        this.offset[e] = t;
      }
      getOffset() {
        return this.offset;
      }
      createTip(e, t) {
        const i = document.createElement('div');
        i.classList.add('slider__tip'),
          i.classList.add(`js-slider__tip-${e}`),
          i.classList.add(`slider__tip-${e}`),
          i.classList.add(`slider__tip_${t}`),
          this.tips.push(i),
          this.view.DOMroot.appendChild(i),
          this.updateTipStyle(e);
      }
    },
    P = 'text-label',
    T = 'checkbox-label',
    O = 'checkbox',
    F = 'number',
    M = function (i) {
      const s = i.target;
      (this.view.getParams().direction = s.checked ? t.vertical : t.horizontal),
        this.notify(e.updateParams, this.view.getParams());
    },
    D = function (t, i) {
      const s = t.target,
        { value: a } = s,
        l = s.type === F;
      (this.view.getParams()[i] = l ? Number(a) : s.checked),
        this.notify(e.updateParams, this.view.getParams());
    },
    L = function (t, i) {
      const s = t.target,
        { value: a } = s;
      (this.view.getParams().value[i] = Number(a)),
        this.notify(e.updateParams, this.view.getParams());
    },
    y = function () {
      this.minValueInput.addEventListener('change', e => D.call(this, e, i.min)),
        this.maxValueInput.addEventListener('change', e => D.call(this, e, i.max)),
        this.firstValueInput.addEventListener('change', e => L.call(this, e, 0)),
        this.secondValueInput.addEventListener('change', e => L.call(this, e, 1)),
        this.isVertical.addEventListener('change', e => M.call(this, e)),
        this.decimalPlacesInput.addEventListener('change', e =>
          D.call(this, e, i.decimalPlaces),
        ),
        this.stepInput.addEventListener('change', e => D.call(this, e, i.step)),
        this.isRange.addEventListener('change', e => D.call(this, e, i.isRange)),
        this.hasFill.addEventListener('change', e => D.call(this, e, i.hasFill)),
        this.hasTips.addEventListener('change', e => D.call(this, e, i.hasTips)),
        this.hasScale.addEventListener('change', e => D.call(this, e, i.hasScale)),
        this.isDecimal.addEventListener('change', e => D.call(this, e, i.isDecimal));
    },
    k = function () {
      (this.minValueInput = this.panel.querySelector('.js-min-value')),
        (this.maxValueInput = this.panel.querySelector('.js-max-value')),
        (this.firstValueInput = this.panel.querySelector('.js-first-value')),
        (this.secondValueInput = this.panel.querySelector('.js-second-value')),
        (this.decimalPlacesInput = this.panel.querySelector('.js-decimal-places')),
        (this.stepInput = this.panel.querySelector('.js-step')),
        (this.isRange = this.panel.querySelector('.js-is-range')),
        (this.isVertical = this.panel.querySelector('.js-is-vertical')),
        (this.hasFill = this.panel.querySelector('.js-has-fill')),
        (this.hasTips = this.panel.querySelector('.js-has-tips')),
        (this.hasScale = this.panel.querySelector('.js-has-scale')),
        (this.isDecimal = this.panel.querySelector('.js-is-decimal'));
    },
    _ = function () {
      const {
        min: e,
        max: i,
        value: s,
        isRange: a,
        step: l,
        direction: n,
        hasFill: h,
        hasTips: r,
        hasScale: c,
        decimalPlaces: u,
        isDecimal: d,
      } = this.view.getParams();
      (this.minValueInput.value = e.toString()),
        (this.maxValueInput.value = i.toString()),
        (this.decimalPlacesInput.value = u.toString()),
        a
          ? ((this.firstValueInput.value = s[0].toString()),
            (this.secondValueInput.value = s[1].toString()),
            (this.secondValueInput.disabled = !1))
          : ((this.firstValueInput.value = s[0].toString()),
            (this.secondValueInput.disabled = !0)),
        (this.stepInput.value = l.toString()),
        (this.isRange.checked = a),
        (this.isVertical.checked = n === t.vertical),
        (this.hasFill.checked = h),
        (this.hasTips.checked = r),
        (this.hasScale.checked = c),
        (this.isDecimal.checked = d);
    },
    z = function (e, t, i, s, a) {
      const l = document.createElement('div');
      l.classList.add('custom');
      const n = document.createElement('label');
      n.classList.add(s);
      const h = document.createElement('input');
      (h.type = t),
        h.classList.add(i),
        h.classList.add(`js-${i}`),
        (n.innerHTML = e),
        a.appendChild(n),
        t === O
          ? (n.appendChild(h), n.appendChild(l))
          : (n.appendChild(l), l.appendChild(h));
    },
    x = function (e) {
      const t = document.createElement('div');
      t.classList.add('slider-panel'),
        t.classList.add('js-slider-panel'),
        z('Min Value', F, 'min-value', P, t),
        z('Max Value', F, 'max-value', P, t),
        z('First Value', F, 'first-value', P, t),
        z('Second Value', F, 'second-value', P, t),
        z('Step', F, 'step', P, t),
        z('Decimal Places', F, 'decimal-places', P, t);
      const i = document.createElement('div');
      i.classList.add('checkbox-panel'),
        z('Range', O, 'is-range', T, i),
        z('Vertical', O, 'is-vertical', T, i),
        z('Fill', O, 'has-fill', T, i),
        z('Tips', O, 'has-tips', T, i),
        z('Scale', O, 'has-scale', T, i),
        z('Decimal', O, 'is-decimal', T, i),
        e.appendChild(t),
        t.appendChild(i);
    },
    C = class extends n {
      constructor(e) {
        super(),
          (this.view = e),
          (this.panel = document.querySelector('.slider-panel')),
          (this.minValueInput = document.querySelector('.js-min-value')),
          (this.maxValueInput = document.querySelector('.js-max-value')),
          (this.firstValueInput = document.querySelector('.js-first-value')),
          (this.secondValueInput = document.querySelector('.js-second-value')),
          (this.decimalPlacesInput = document.querySelector('.js-decimal-places')),
          (this.stepInput = document.querySelector('.js-step')),
          (this.isRange = document.querySelector('.js-is-range')),
          (this.isVertical = document.querySelector('.js-is-vertical')),
          (this.hasFill = document.querySelector('.js-has-fill')),
          (this.hasTips = document.querySelector('.js-has-tips')),
          (this.hasScale = document.querySelector('.js-has-scale')),
          (this.isDecimal = document.querySelector('.js-is-decimal')),
          (this.initializePanelsParams = _.bind(this)),
          (this.initializeInputs = k.bind(this)),
          (this.addInputListeners = y.bind(this)),
          (this.renderPanel = x.bind(this));
      }
      createPanel(e) {
        this.renderPanel(e),
          (this.panel = e.querySelector('.slider-panel')),
          this.initializeInputs(),
          this.initializePanelsParams(),
          this.addInputListeners();
      }
    },
    I = class extends n {
      constructor(e) {
        super(),
          (this.DOMroot = e),
          (this.thumbView = new d(this)),
          (this.trackView = new o(this)),
          (this.scaleView = new (class {
            constructor(e) {
              (this.view = e),
                (this.scale = document.querySelector('.slider__scale')),
                (this.createScaleMarks = f.bind(this));
            }
            createScale(e) {
              const t = document.createElement('div');
              t.classList.add('slider__scale'),
                t.classList.add('js-slider__scale'),
                t.classList.add(`slider__scale_${e}`),
                (this.scale = t),
                this.view.DOMroot.appendChild(t);
            }
          })(this)),
          (this.fillView = new v(this)),
          (this.tipView = new V(this)),
          (this.panelView = new C(this)),
          (this.params = r),
          (this.size = 0),
          (this.offsetDirection = a.left),
          (this.fillDirection = l.width),
          (this.prepareDirectionForInteraction = w.bind(this)),
          (this.calculateCursorOffset = g.bind(this));
      }
      setParams(e) {
        this.params = e;
      }
      setParam(e, t) {
        this.params[e] = t;
      }
      setSize(e) {
        this.size = e;
      }
      getParams() {
        return this.params;
      }
      getSize() {
        return this.size;
      }
      setValue(e, t) {
        this.params.value[e] = t;
      }
      getValue() {
        return this.params.value;
      }
    },
    E = function () {
      const { direction: e } = this.model.getParams(),
        i = e === t.horizontal ? t.vertical : t.horizontal;
      this.DOMroot.classList.remove(`slider_${i}`),
        this.DOMparent.classList.remove(`slider-parent_${i}`),
        (this.DOMroot.innerHTML = '');
    },
    j = function () {
      $(this.DOMroot.classList[0]).off();
    },
    q = function () {
      return (
        this.view.thumbView.subscribe(e.updateThumb, this.updateThumb),
        this.view.trackView.subscribe(
          e.updateThumbAfterTrackClick,
          this.updateThumbAfterTrackClick,
        ),
        this.model.subscribe(e.updateThumbView, this.updateThumbView),
        this.model.subscribe(e.updateParams, this.updateViewParams),
        this.model.getParams().hasFill &&
          (this.model.subscribe(e.updateFillView, this.updateFillView),
          this.view.thumbView.subscribe(e.updateFill, this.updateFill),
          this.view.trackView.subscribe(e.updateFill, this.updateFill)),
        this.model.getParams().hasTips &&
          this.model.subscribe(e.updateThumbView, this.updateTipView),
        this.model.getParams().panel &&
          (this.view.panelView.subscribe(e.updateParams, this.updateModelParams),
          this.model.subscribe(
            e.updatePanelValues,
            this.updatePanelValuesAfterThumbDrag,
          )),
        this
      );
    },
    R = function (e) {
      const t = this.model.getOffset()[e];
      this.view.tipView.setOffset(e, t), this.view.tipView.updateTipStyle(e);
    },
    A = function () {
      const e = this.model.getFillState();
      this.view.fillView.setState(e), this.view.fillView.updateFillStyle();
    },
    N = function () {
      const { isRange: e } = this.model.getParams();
      return (
        this.view.thumbView.dragAndDropThumb(0),
        this.view.trackView.clickTrack(),
        e && this.view.thumbView.dragAndDropThumb(1),
        this
      );
    },
    H = function (e) {
      const { direction: i } = this.getParams();
      return i === t.horizontal ? e : 100 - e;
    },
    U = function (e) {
      const { min: i, max: s, direction: a } = this.getParams();
      this.getOffset()[e] > 100 &&
        (this.setOffset(e, 100), this.setValue(e, a === t.horizontal ? s : i)),
        this.getOffset()[e] < 0 &&
          (this.setOffset(e, 0), this.setValue(e, a === t.horizontal ? i : s));
    },
    B = function ({
      min: e,
      max: t,
      value: i,
      decimalPlaces: s,
      step: a,
      isRange: l,
      direction: n,
      hasFill: h,
      hasTips: r,
      hasScale: c,
      isDecimal: u,
      panel: d,
      onChange: o,
    }) {
      const m = i,
        p = (function (e, t, i) {
          let s = Math.min(Math.abs(t - i), Math.abs(e));
          return 0 === s && (s = 0), s;
        })(a, e, t),
        f = (function (e, t, i) {
          return Math.min(t - i, e);
        })(e, t, p),
        b = (function (e, t, i) {
          const s = Math.min(e, t);
          return i ? s : 0;
        })(s, 3, u);
      (m[0] = (function (e, t, i) {
        const s = e;
        return (s[0] = Math.max(t, s[0])), (s[0] = Math.min(i, s[0])), s[0];
      })(m, e, t)),
        l &&
          (1 === m.length && m.push(m[0]),
          (m[1] = (function (e, t, i) {
            const s = e;
            return (
              (s[1] = Math.max(t, e[1])),
              (s[1] = Math.min(i, e[1])),
              (s[1] = Math.max(s[0], s[1])),
              s[1]
            );
          })(m, e, t)));
      const v = {
        min: f,
        max: t,
        step: p,
        value: m,
        decimalPlaces: b,
        isDecimal: u,
        isRange: l,
        direction: n,
        hasFill: h,
        hasTips: r,
        hasScale: c,
        panel: d,
      };
      return o && (v.onChange = o), v;
    },
    X = class extends n {
      constructor(e) {
        super(),
          (this.DOMroot = e),
          (this.params = r),
          (this.thumbsOffset = []),
          (this.fillState = { fillOffset: 0, fillSize: 0 }),
          (this.size = 0),
          (this.endsValidation = U.bind(this)),
          (this.prepareOffset = H.bind(this)),
          (this.validateParams = B.bind(this));
      }
      setParams(e) {
        this.params = this.validateParams(e);
      }
      updateParams(t) {
        this.setParams(this.validateParams(t)),
          this.notify(e.updateParams, this.getParams());
      }
      setParam(e, t) {
        this.params[e] = t;
      }
      getParams() {
        return this.params;
      }
      setSize(e) {
        this.size = e;
      }
      getSize() {
        return this.size;
      }
      setValue(e, t) {
        const { decimalPlaces: i } = this.params;
        this.params.value[e] = Number(t.toFixed(i));
      }
      getValue() {
        const { value: e } = this.params;
        return e;
      }
      setOffset(e, t) {
        this.thumbsOffset[e] = t;
      }
      getOffset() {
        return this.thumbsOffset;
      }
      calculateOffset(e) {
        const { min: t, max: i, value: s } = this.params;
        return this.prepareOffset((s[e] - t) / ((i - t) / 100));
      }
      updateThumb(t, i) {
        const s = this.prepareOffset(i),
          a = this.calculateStepPercent(),
          l = Math.round(s / a) * a;
        this.setValue(t, this.calculateValue(l, a)),
          this.setOffset(t, this.calculateOffset(t)),
          this.endsValidation(t),
          this.notify(e.updateThumbView, t),
          this.getParams().panel && this.notify(e.updatePanelValues, t);
      }
      updateThumbAfterTrackClick(e) {
        const { direction: i, isRange: s } = this.params,
          { fillOffset: a, fillSize: l } = this.getFillState();
        let n = 0;
        e > l / 2 + a && (n = 1),
          i === t.vertical && (n = Number(!n)),
          s || (n = 0),
          this.updateThumb(n, e);
      }
      updateFill() {
        this.setFillState(this.calculateFillState()), this.notify(e.updateFillView);
      }
      setFillState(e) {
        this.fillState = e;
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
      calculateFillSize() {
        const { isRange: e, direction: i } = this.params;
        return e
          ? i === t.horizontal
            ? this.thumbsOffset[1] - this.thumbsOffset[0]
            : this.thumbsOffset[0] - this.thumbsOffset[1]
          : this.prepareOffset(this.thumbsOffset[0]);
      }
      calculateFillOffset() {
        const { isRange: e, direction: i } = this.params;
        return e ? (i === t.horizontal ? this.thumbsOffset[0] : this.thumbsOffset[1]) : 0;
      }
      calculateStepPercent() {
        const { max: e, min: t, step: i } = this.params;
        return 100 / ((e - t) / i);
      }
      calculateValue(e, t) {
        const { step: i, min: s } = this.params;
        return (e / t) * i + s;
      }
    },
    Y = function (e) {
      this.model.updateThumbAfterTrackClick(e);
    },
    W = function (e, t) {
      this.model.updateThumb(e, t);
    },
    G = function () {
      this.model.updateFill();
    },
    J = function (e) {
      const t = this.model.getOffset()[e];
      this.view.thumbView.setOffset(e, t),
        this.view.thumbView.updateThumbStyle(e),
        (this.view.thumbView.activeStance = e);
    },
    K = function () {
      this.view.thumbView.unsubscribe(e.updateThumb, this.updateThumb),
        this.view.thumbView.unsubscribe(e.updateFill, this.updateFill),
        this.view.trackView.unsubscribe(
          e.updateThumbAfterTrackClick,
          this.updateThumbAfterTrackClick,
        ),
        this.view.trackView.unsubscribe(e.updateFill, this.updateFill),
        this.model.unsubscribe(e.updateThumbView, this.updateThumbView),
        this.model.unsubscribe(e.updateFillView, this.updateFillView),
        this.model.getParams().hasTips &&
          this.model.unsubscribe(e.updateThumbView, this.updateTipView),
        this.model.getParams().panel &&
          (this.view.panelView.unsubscribe(e.updateParams, this.updateModelParams),
          this.model.unsubscribe(e.updateParams, this.updateViewParams),
          this.model.unsubscribe(
            e.updatePanelValues,
            this.updatePanelValuesAfterThumbDrag,
          ));
    },
    Q = function (e) {
      this.model.updateParams(e);
    },
    Z = function () {
      const e = this.model.getParams();
      this.view.setParams(e), this.rerender(e);
    },
    ee = function (e) {
      const t = this.model.getValue()[e];
      0 === e
        ? (this.view.panelView.firstValueInput.value = String(t))
        : (this.view.panelView.secondValueInput.value = String(t));
    };
  function te({
    min: e,
    max: t,
    value: i,
    decimalPlaces: s,
    step: a,
    isRange: l,
    direction: n,
    hasFill: h,
    hasTips: c,
    hasScale: u,
    isDecimal: d,
    panel: o,
    onChange: m,
  }) {
    const p = null != e ? e : r.min,
      f = null != t ? t : r.max,
      b = null != s ? s : r.decimalPlaces,
      v = null != a ? a : r.step,
      w = null != l ? l : r.isRange,
      g = null != n ? n : r.direction,
      S = null != h ? h : r.hasFill,
      V = null != c ? c : r.hasTips,
      P = null != u ? u : r.hasScale,
      T = null != d ? d : r.isDecimal,
      O = null != o ? o : r.panel,
      F = null != m ? m : r.onChange;
    let M = null != i ? i : r.value;
    return (
      Array.isArray(M) || (M = [M]),
      l && 1 === M.length && M.push(M[0]),
      {
        min: p,
        max: f,
        value: M,
        decimalPlaces: b,
        step: v,
        isRange: w,
        direction: g,
        hasFill: S,
        hasTips: V,
        hasScale: P,
        isDecimal: T,
        panel: O,
        onChange: F,
      }
    );
  }
  const ie = class extends n {
    constructor(e, i) {
      super(),
        (this.params = i),
        (this.DOMroot = e),
        (this.DOMparent = e.parentElement),
        (this.presenter = new (class {
          constructor(e, t) {
            (this.slider = t),
              (this.DOMroot = this.slider.DOMroot),
              (this.DOMparent = this.slider.DOMparent),
              (this.model = new X(this.DOMroot)),
              (this.view = new I(this.DOMroot)),
              (this.params = e),
              (this.clearHTML = E.bind(this)),
              (this.removeListeners = j.bind(this)),
              (this.subscribe = q.bind(this)),
              (this.unsubscribe = K.bind(this)),
              (this.updateThumbAfterTrackClick = Y.bind(this)),
              (this.updateThumb = W.bind(this)),
              (this.updateFill = G.bind(this)),
              (this.updateThumbView = J.bind(this)),
              (this.updateTipView = R.bind(this)),
              (this.updateFillView = A.bind(this)),
              (this.updateModelParams = Q.bind(this)),
              (this.updateViewParams = Z.bind(this)),
              (this.updatePanelValuesAfterThumbDrag = ee.bind(this)),
              (this.addListeners = N.bind(this));
          }
          init(e) {
            this.setParams(e),
              this.createSlider(),
              e.panel && this.renderPanel(),
              this.subscribe(),
              this.addListeners();
          }
          rerender(e) {
            this.setParams(e),
              (this.view.thumbView.thumbs = []),
              (this.view.tipView.tips = []),
              this.view.panelView.initializePanelsParams(),
              this.unsubscribe(),
              this.clearHTML(),
              this.removeListeners(),
              this.createSlider(),
              this.subscribe(),
              this.addListeners();
          }
          createSlider() {
            this.addSliderClasses(this.params.direction)
              .setModelState()
              .setViewState()
              .setSubViewsState()
              .renderSlider();
          }
          setParams(e) {
            this.params = e;
          }
          getParams() {
            return this.params;
          }
          setModelState() {
            this.model.setParams(this.params);
            const e =
              this.model.getParams().direction === t.horizontal
                ? this.DOMroot.offsetWidth
                : this.DOMroot.offsetHeight;
            return (
              this.model.setSize(e),
              this.model.getParams().value.forEach((e, t) => {
                this.model.setOffset(t, this.model.calculateOffset(t));
              }),
              this.model.setFillState(this.model.calculateFillState()),
              this
            );
          }
          addSliderClasses(e) {
            return (
              this.DOMroot.classList.add(`slider_${e}`),
              this.DOMparent.classList.add(`slider-parent_${e}`),
              this
            );
          }
          setViewState() {
            return (
              this.view.setParams(this.model.getParams()),
              this.view.setSize(this.model.getSize()),
              this.view.prepareDirectionForInteraction(this.model.getParams().direction),
              this
            );
          }
          setSubViewsState() {
            const { hasTips: e, hasFill: t } = this.model.getParams(),
              i = this.model.getValue(),
              s = this.model.getFillState();
            return (
              i.forEach((t, i) => {
                this.setThumbViewState(i), e && this.setTipViewState(i);
              }),
              t && this.setFillViewState(s),
              this
            );
          }
          setThumbViewState(e) {
            const t = this.model.getOffset()[e];
            this.view.thumbView.setOffset(e, t);
          }
          setFillViewState(e) {
            this.view.fillView.setState(e);
          }
          setTipViewState(e) {
            const t = this.model.getOffset()[e];
            this.view.tipView.setOffset(e, t);
          }
          renderSlider() {
            const {
              direction: e,
              hasFill: t,
              hasScale: i,
              hasTips: s,
              isRange: a,
            } = this.model.getParams();
            this.renderTrack(e),
              this.renderThumb(0),
              s && this.renderTip(0, e),
              i && this.renderScale(e),
              t && this.renderFill(e),
              a && (this.renderThumb(1), s && this.renderTip(1, e));
          }
          renderTrack(e) {
            this.view.trackView.createTrack(e);
          }
          renderThumb(e) {
            this.view.thumbView.createThumb(e);
          }
          renderTip(e, t) {
            this.view.tipView.createTip(e, t);
          }
          renderFill(e) {
            this.view.fillView.createFill(e);
          }
          renderScale(e) {
            const { step: t, max: i, min: s } = this.model.getParams();
            this.view.scaleView.createScale(e),
              this.view.scaleView.createScaleMarks(t, i, s, e);
          }
          renderPanel() {
            this.view.panelView.createPanel(this.DOMparent);
          }
        })(this.params, this)),
        this.init(i);
    }
    setParams(e) {
      this.params = e;
    }
    getParams() {
      return this.params;
    }
    unsubscribe() {
      this.presenter.unsubscribe();
    }
    updateParams(e) {
      this.setParams(te(e)), this.presenter.model.updateParams(this.getParams());
    }
    init(t) {
      this.presenter.init(t),
        this.presenter.model.subscribe(
          e.updateThumbView,
          this.handleThumbChange.bind(this),
        );
    }
    handleThumbChange() {
      const e = this.presenter.model.getParams();
      this.params.onChange && this.params.onChange(e);
    }
  };
  $.fn.extend({
    slider: function (e) {
      const t = [];
      return (
        this.each((i, s) => {
          const a = (function (e, t) {
              let i;
              return (
                (i =
                  e.data('firstValue') && e.data('secondValue')
                    ? [Number(e.data('firstValue')), Number(e.data('secondValue'))]
                    : Number(e.data('firstValue')) || Number(e.data('secondValue'))
                    ? [Number(e.data('firstValue'))] || 0
                    : t.value),
                {
                  min: Number(e.data('min')) || t.min,
                  max: Number(e.data('max')) || t.max,
                  value: i,
                  decimalPlaces: Number(e.data('decimalPlaces')) || t.decimalPlaces,
                  step: Number(e.data('step')) || t.step,
                  isRange: Boolean(e.data('isRange')) || t.isRange,
                  direction: e.data('direction') || t.direction,
                  hasFill: Boolean(e.data('hasFill')) || t.hasFill,
                  hasTips: Boolean(e.data('hasTips')) || t.hasTips,
                  hasScale: Boolean(e.data('hasScale')) || t.hasScale,
                  isDecimal: Boolean(e.data('isDecimal')) || t.isDecimal,
                  panel: Boolean(e.data('panel')) || t.panel,
                  onChange: t.onChange,
                }
              );
            })(this, te(e || {})),
            l = new ie(s, a);
          t.push(l);
        }),
        t
      );
    },
  });
})();
