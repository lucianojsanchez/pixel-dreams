function Jc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var vn =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Zc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var $n = {},
  qc = {
    get exports() {
      return $n;
    },
    set exports(e) {
      $n = e;
    },
  },
  ml = {},
  x = {},
  bc = {
    get exports() {
      return x;
    },
    set exports(e) {
      x = e;
    },
  },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lr = Symbol.for("react.element"),
  ef = Symbol.for("react.portal"),
  tf = Symbol.for("react.fragment"),
  nf = Symbol.for("react.strict_mode"),
  rf = Symbol.for("react.profiler"),
  lf = Symbol.for("react.provider"),
  of = Symbol.for("react.context"),
  uf = Symbol.for("react.forward_ref"),
  af = Symbol.for("react.suspense"),
  sf = Symbol.for("react.memo"),
  cf = Symbol.for("react.lazy"),
  fu = Symbol.iterator;
function ff(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fu && e[fu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ta = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  za = Object.assign,
  Oa = {};
function sn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Ta);
}
sn.prototype.isReactComponent = {};
sn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ja() {}
ja.prototype = sn.prototype;
function hi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Ta);
}
var mi = (hi.prototype = new ja());
mi.constructor = hi;
za(mi, sn.prototype);
mi.isPureReactComponent = !0;
var du = Array.isArray,
  Ma = Object.prototype.hasOwnProperty,
  vi = { current: null },
  Ia = { key: !0, ref: !0, __self: !0, __source: !0 };
function Da(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ma.call(t, r) && !Ia.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: lr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: vi.current,
  };
}
function df(e, t) {
  return {
    $$typeof: lr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lr;
}
function pf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pu = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? pf("" + e.key)
    : t.toString(36);
}
function zr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case lr:
          case ef:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Il(i, 0) : r),
      du(l)
        ? ((n = ""),
          e != null && (n = e.replace(pu, "$&/") + "/"),
          zr(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (gi(l) &&
            (l = df(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(pu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), du(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Il(o, u);
      i += zr(o, t, n, a, l);
    }
  else if (((a = ff(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Il(o, u++)), (i += zr(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function hr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    zr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function hf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Or = { transition: null },
  mf = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Or,
    ReactCurrentOwner: vi,
  };
O.Children = {
  map: hr,
  forEach: function (e, t, n) {
    hr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      hr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      hr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
O.Component = sn;
O.Fragment = tf;
O.Profiler = rf;
O.PureComponent = hi;
O.StrictMode = nf;
O.Suspense = af;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mf;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = za({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = vi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      Ma.call(t, a) &&
        !Ia.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: lr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: of,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: lf, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = Da;
O.createFactory = function (e) {
  var t = Da.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: uf, render: e };
};
O.isValidElement = gi;
O.lazy = function (e) {
  return { $$typeof: cf, _payload: { _status: -1, _result: e }, _init: hf };
};
O.memo = function (e, t) {
  return { $$typeof: sf, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Or.transition;
  Or.transition = {};
  try {
    e();
  } finally {
    Or.transition = t;
  }
};
O.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
O.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
O.useContext = function (e) {
  return ce.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
O.useId = function () {
  return ce.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return ce.current.useRef(e);
};
O.useState = function (e) {
  return ce.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return ce.current.useTransition();
};
O.version = "18.2.0";
(function (e) {
  e.exports = O;
})(bc);
const Rn = Zc(x),
  co = Jc({ __proto__: null, default: Rn }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vf = x,
  gf = Symbol.for("react.element"),
  yf = Symbol.for("react.fragment"),
  wf = Object.prototype.hasOwnProperty,
  Sf = vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fa(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) wf.call(t, r) && !kf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: gf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Sf.current,
  };
}
ml.Fragment = yf;
ml.jsx = Fa;
ml.jsxs = Fa;
(function (e) {
  e.exports = ml;
})(qc);
const xf = $n.Fragment,
  R = $n.jsx,
  Y = $n.jsxs;
var fo = {},
  po = {},
  Ef = {
    get exports() {
      return po;
    },
    set exports(e) {
      po = e;
    },
  },
  ke = {},
  ho = {},
  Cf = {
    get exports() {
      return ho;
    },
    set exports(e) {
      ho = e;
    },
  },
  Ua = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, T) {
    var z = C.length;
    C.push(T);
    e: for (; 0 < z; ) {
      var Q = (z - 1) >>> 1,
        q = C[Q];
      if (0 < l(q, T)) (C[Q] = T), (C[z] = q), (z = Q);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var T = C[0],
      z = C.pop();
    if (z !== T) {
      C[0] = z;
      e: for (var Q = 0, q = C.length, dr = q >>> 1; Q < dr; ) {
        var St = 2 * (Q + 1) - 1,
          Ml = C[St],
          kt = St + 1,
          pr = C[kt];
        if (0 > l(Ml, z))
          kt < q && 0 > l(pr, Ml)
            ? ((C[Q] = pr), (C[kt] = z), (Q = kt))
            : ((C[Q] = Ml), (C[St] = z), (Q = St));
        else if (kt < q && 0 > l(pr, z)) (C[Q] = pr), (C[kt] = z), (Q = kt);
        else break e;
      }
    }
    return T;
  }
  function l(C, T) {
    var z = C.sortIndex - T.sortIndex;
    return z !== 0 ? z : C.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    s = [],
    h = 1,
    m = null,
    d = 3,
    v = !1,
    S = !1,
    y = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var T = n(s); T !== null; ) {
      if (T.callback === null) r(s);
      else if (T.startTime <= C)
        r(s), (T.sortIndex = T.expirationTime), t(a, T);
      else break;
      T = n(s);
    }
  }
  function g(C) {
    if (((y = !1), p(C), !S))
      if (n(a) !== null) (S = !0), Ol(E);
      else {
        var T = n(s);
        T !== null && jl(g, T.startTime - C);
      }
  }
  function E(C, T) {
    (S = !1), y && ((y = !1), f(L), (L = -1)), (v = !0);
    var z = d;
    try {
      for (
        p(T), m = n(a);
        m !== null && (!(m.expirationTime > T) || (C && !Re()));

      ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          (m.callback = null), (d = m.priorityLevel);
          var q = Q(m.expirationTime <= T);
          (T = e.unstable_now()),
            typeof q == "function" ? (m.callback = q) : m === n(a) && r(a),
            p(T);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var dr = !0;
      else {
        var St = n(s);
        St !== null && jl(g, St.startTime - T), (dr = !1);
      }
      return dr;
    } finally {
      (m = null), (d = z), (v = !1);
    }
  }
  var _ = !1,
    P = null,
    L = -1,
    H = 5,
    j = -1;
  function Re() {
    return !(e.unstable_now() - j < H);
  }
  function hn() {
    if (P !== null) {
      var C = e.unstable_now();
      j = C;
      var T = !0;
      try {
        T = P(!0, C);
      } finally {
        T ? mn() : ((_ = !1), (P = null));
      }
    } else _ = !1;
  }
  var mn;
  if (typeof c == "function")
    mn = function () {
      c(hn);
    };
  else if (typeof MessageChannel < "u") {
    var cu = new MessageChannel(),
      Xc = cu.port2;
    (cu.port1.onmessage = hn),
      (mn = function () {
        Xc.postMessage(null);
      });
  } else
    mn = function () {
      N(hn, 0);
    };
  function Ol(C) {
    (P = C), _ || ((_ = !0), mn());
  }
  function jl(C, T) {
    L = N(function () {
      C(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || v || ((S = !0), Ol(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (C) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = d;
      }
      var z = d;
      d = T;
      try {
        return C();
      } finally {
        d = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, T) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var z = d;
      d = C;
      try {
        return T();
      } finally {
        d = z;
      }
    }),
    (e.unstable_scheduleCallback = function (C, T, z) {
      var Q = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Q + z : Q))
          : (z = Q),
        C)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = z + q),
        (C = {
          id: h++,
          callback: T,
          priorityLevel: C,
          startTime: z,
          expirationTime: q,
          sortIndex: -1,
        }),
        z > Q
          ? ((C.sortIndex = z),
            t(s, C),
            n(a) === null &&
              C === n(s) &&
              (y ? (f(L), (L = -1)) : (y = !0), jl(g, z - Q)))
          : ((C.sortIndex = q), t(a, C), S || v || ((S = !0), Ol(E))),
        C
      );
    }),
    (e.unstable_shouldYield = Re),
    (e.unstable_wrapCallback = function (C) {
      var T = d;
      return function () {
        var z = d;
        d = T;
        try {
          return C.apply(this, arguments);
        } finally {
          d = z;
        }
      };
    });
})(Ua);
(function (e) {
  e.exports = Ua;
})(Cf);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $a = x,
  Se = ho;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Aa = new Set(),
  An = {};
function Mt(e, t) {
  tn(e, t), tn(e + "Capture", t);
}
function tn(e, t) {
  for (An[e] = t, e = 0; e < t.length; e++) Aa.add(t[e]);
}
var Ye = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  mo = Object.prototype.hasOwnProperty,
  _f =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hu = {},
  mu = {};
function Pf(e) {
  return mo.call(mu, e)
    ? !0
    : mo.call(hu, e)
    ? !1
    : _f.test(e)
    ? (mu[e] = !0)
    : ((hu[e] = !0), !1);
}
function Nf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Lf(e, t, n, r) {
  if (t === null || typeof t > "u" || Nf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yi = /[\-:]([a-z])/g;
function wi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yi, wi);
    re[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(yi, wi);
    re[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(yi, wi);
  re[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Si(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Lf(t, n, l, r) && (n = null),
    r || l === null
      ? Pf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mr = Symbol.for("react.element"),
  Ft = Symbol.for("react.portal"),
  Ut = Symbol.for("react.fragment"),
  ki = Symbol.for("react.strict_mode"),
  vo = Symbol.for("react.profiler"),
  Ba = Symbol.for("react.provider"),
  Va = Symbol.for("react.context"),
  xi = Symbol.for("react.forward_ref"),
  go = Symbol.for("react.suspense"),
  yo = Symbol.for("react.suspense_list"),
  Ei = Symbol.for("react.memo"),
  be = Symbol.for("react.lazy"),
  Wa = Symbol.for("react.offscreen"),
  vu = Symbol.iterator;
function gn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vu && e[vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  Dl;
function _n(e) {
  if (Dl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Dl = (t && t[1]) || "";
    }
  return (
    `
` +
    Dl +
    e
  );
}
var Fl = !1;
function Ul(e, t) {
  if (!e || Fl) return "";
  Fl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Fl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? _n(e) : "";
}
function Rf(e) {
  switch (e.tag) {
    case 5:
      return _n(e.type);
    case 16:
      return _n("Lazy");
    case 13:
      return _n("Suspense");
    case 19:
      return _n("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ul(e.type, !1)), e;
    case 11:
      return (e = Ul(e.type.render, !1)), e;
    case 1:
      return (e = Ul(e.type, !0)), e;
    default:
      return "";
  }
}
function wo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case Ft:
      return "Portal";
    case vo:
      return "Profiler";
    case ki:
      return "StrictMode";
    case go:
      return "Suspense";
    case yo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Va:
        return (e.displayName || "Context") + ".Consumer";
      case Ba:
        return (e._context.displayName || "Context") + ".Provider";
      case xi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ei:
        return (
          (t = e.displayName || null), t !== null ? t : wo(e.type) || "Memo"
        );
      case be:
        (t = e._payload), (e = e._init);
        try {
          return wo(e(t));
        } catch {}
    }
  return null;
}
function Tf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wo(t);
    case 8:
      return t === ki ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ha(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function zf(e) {
  var t = Ha(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function vr(e) {
  e._valueTracker || (e._valueTracker = zf(e));
}
function Qa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ha(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function So(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ka(e, t) {
  (t = t.checked), t != null && Si(e, "checked", t, !1);
}
function ko(e, t) {
  Ka(e, t);
  var n = mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? xo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && xo(e, t.type, mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function xo(e, t, n) {
  (t !== "number" || Wr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pn = Array.isArray;
function Xt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Eo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function wu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (Pn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mt(n) };
}
function Ya(e, t) {
  var n = mt(t.value),
    r = mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Su(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ga(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Co(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ga(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var gr,
  Xa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        gr = gr || document.createElement("div"),
          gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = gr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Bn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Of = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tn).forEach(function (e) {
  Of.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tn[t] = Tn[e]);
  });
});
function Ja(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Tn.hasOwnProperty(e) && Tn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Za(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ja(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var jf = V(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function _o(e, t) {
  if (t) {
    if (jf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function Po(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var No = null;
function Ci(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Lo = null,
  Jt = null,
  Zt = null;
function ku(e) {
  if ((e = ur(e))) {
    if (typeof Lo != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = Sl(t)), Lo(e.stateNode, e.type, t));
  }
}
function qa(e) {
  Jt ? (Zt ? Zt.push(e) : (Zt = [e])) : (Jt = e);
}
function ba() {
  if (Jt) {
    var e = Jt,
      t = Zt;
    if (((Zt = Jt = null), ku(e), t)) for (e = 0; e < t.length; e++) ku(t[e]);
  }
}
function es(e, t) {
  return e(t);
}
function ts() {}
var $l = !1;
function ns(e, t, n) {
  if ($l) return e(t, n);
  $l = !0;
  try {
    return es(e, t, n);
  } finally {
    ($l = !1), (Jt !== null || Zt !== null) && (ts(), ba());
  }
}
function Vn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var Ro = !1;
if (Ye)
  try {
    var yn = {};
    Object.defineProperty(yn, "passive", {
      get: function () {
        Ro = !0;
      },
    }),
      window.addEventListener("test", yn, yn),
      window.removeEventListener("test", yn, yn);
  } catch {
    Ro = !1;
  }
function Mf(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (h) {
    this.onError(h);
  }
}
var zn = !1,
  Hr = null,
  Qr = !1,
  To = null,
  If = {
    onError: function (e) {
      (zn = !0), (Hr = e);
    },
  };
function Df(e, t, n, r, l, o, i, u, a) {
  (zn = !1), (Hr = null), Mf.apply(If, arguments);
}
function Ff(e, t, n, r, l, o, i, u, a) {
  if ((Df.apply(this, arguments), zn)) {
    if (zn) {
      var s = Hr;
      (zn = !1), (Hr = null);
    } else throw Error(w(198));
    Qr || ((Qr = !0), (To = s));
  }
}
function It(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function rs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function xu(e) {
  if (It(e) !== e) throw Error(w(188));
}
function Uf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return xu(l), e;
        if (o === r) return xu(l), t;
        o = o.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function ls(e) {
  return (e = Uf(e)), e !== null ? os(e) : null;
}
function os(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = os(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var is = Se.unstable_scheduleCallback,
  Eu = Se.unstable_cancelCallback,
  $f = Se.unstable_shouldYield,
  Af = Se.unstable_requestPaint,
  K = Se.unstable_now,
  Bf = Se.unstable_getCurrentPriorityLevel,
  _i = Se.unstable_ImmediatePriority,
  us = Se.unstable_UserBlockingPriority,
  Kr = Se.unstable_NormalPriority,
  Vf = Se.unstable_LowPriority,
  as = Se.unstable_IdlePriority,
  vl = null,
  Ae = null;
function Wf(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function")
    try {
      Ae.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : Kf,
  Hf = Math.log,
  Qf = Math.LN2;
function Kf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hf(e) / Qf) | 0)) | 0;
}
var yr = 64,
  wr = 4194304;
function Nn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Yr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Nn(u)) : ((o &= i), o !== 0 && (r = Nn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Nn(i)) : o !== 0 && (r = Nn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Yf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Gf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Me(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = Yf(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function zo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ss() {
  var e = yr;
  return (yr <<= 1), !(yr & 4194240) && (yr = 64), e;
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function or(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Me(t)),
    (e[t] = n);
}
function Xf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Pi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function cs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fs,
  Ni,
  ds,
  ps,
  hs,
  Oo = !1,
  Sr = [],
  it = null,
  ut = null,
  at = null,
  Wn = new Map(),
  Hn = new Map(),
  tt = [],
  Jf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Cu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      it = null;
      break;
    case "dragenter":
    case "dragleave":
      ut = null;
      break;
    case "mouseover":
    case "mouseout":
      at = null;
      break;
    case "pointerover":
    case "pointerout":
      Wn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hn.delete(t.pointerId);
  }
}
function wn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = ur(t)), t !== null && Ni(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Zf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (it = wn(it, e, t, n, r, l)), !0;
    case "dragenter":
      return (ut = wn(ut, e, t, n, r, l)), !0;
    case "mouseover":
      return (at = wn(at, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Wn.set(o, wn(Wn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Hn.set(o, wn(Hn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ms(e) {
  var t = Ct(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rs(n)), t !== null)) {
          (e.blockedOn = t),
            hs(e.priority, function () {
              ds(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = jo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (No = r), n.target.dispatchEvent(r), (No = null);
    } else return (t = ur(n)), t !== null && Ni(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _u(e, t, n) {
  jr(e) && n.delete(t);
}
function qf() {
  (Oo = !1),
    it !== null && jr(it) && (it = null),
    ut !== null && jr(ut) && (ut = null),
    at !== null && jr(at) && (at = null),
    Wn.forEach(_u),
    Hn.forEach(_u);
}
function Sn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Oo ||
      ((Oo = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, qf)));
}
function Qn(e) {
  function t(l) {
    return Sn(l, e);
  }
  if (0 < Sr.length) {
    Sn(Sr[0], e);
    for (var n = 1; n < Sr.length; n++) {
      var r = Sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && Sn(it, e),
      ut !== null && Sn(ut, e),
      at !== null && Sn(at, e),
      Wn.forEach(t),
      Hn.forEach(t),
      n = 0;
    n < tt.length;
    n++
  )
    (r = tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && ((n = tt[0]), n.blockedOn === null); )
    ms(n), n.blockedOn === null && tt.shift();
}
var qt = Ze.ReactCurrentBatchConfig,
  Gr = !0;
function bf(e, t, n, r) {
  var l = I,
    o = qt.transition;
  qt.transition = null;
  try {
    (I = 1), Li(e, t, n, r);
  } finally {
    (I = l), (qt.transition = o);
  }
}
function ed(e, t, n, r) {
  var l = I,
    o = qt.transition;
  qt.transition = null;
  try {
    (I = 4), Li(e, t, n, r);
  } finally {
    (I = l), (qt.transition = o);
  }
}
function Li(e, t, n, r) {
  if (Gr) {
    var l = jo(e, t, n, r);
    if (l === null) Jl(e, t, r, Xr, n), Cu(e, r);
    else if (Zf(l, e, t, n, r)) r.stopPropagation();
    else if ((Cu(e, r), t & 4 && -1 < Jf.indexOf(e))) {
      for (; l !== null; ) {
        var o = ur(l);
        if (
          (o !== null && fs(o),
          (o = jo(e, t, n, r)),
          o === null && Jl(e, t, r, Xr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Jl(e, t, r, null, n);
  }
}
var Xr = null;
function jo(e, t, n, r) {
  if (((Xr = null), (e = Ci(r)), (e = Ct(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = rs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xr = e), null;
}
function vs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Bf()) {
        case _i:
          return 1;
        case us:
          return 4;
        case Kr:
        case Vf:
          return 16;
        case as:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null,
  Ri = null,
  Mr = null;
function gs() {
  if (Mr) return Mr;
  var e,
    t = Ri,
    n = t.length,
    r,
    l = "value" in rt ? rt.value : rt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ir(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function kr() {
  return !0;
}
function Pu() {
  return !1;
}
function xe(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? kr
        : Pu),
      (this.isPropagationStopped = Pu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = kr));
      },
      persist: function () {},
      isPersistent: kr,
    }),
    t
  );
}
var cn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ti = xe(cn),
  ir = V({}, cn, { view: 0, detail: 0 }),
  td = xe(ir),
  Bl,
  Vl,
  kn,
  gl = V({}, ir, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== kn &&
            (kn && e.type === "mousemove"
              ? ((Bl = e.screenX - kn.screenX), (Vl = e.screenY - kn.screenY))
              : (Vl = Bl = 0),
            (kn = e)),
          Bl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vl;
    },
  }),
  Nu = xe(gl),
  nd = V({}, gl, { dataTransfer: 0 }),
  rd = xe(nd),
  ld = V({}, ir, { relatedTarget: 0 }),
  Wl = xe(ld),
  od = V({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  id = xe(od),
  ud = V({}, cn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ad = xe(ud),
  sd = V({}, cn, { data: 0 }),
  Lu = xe(sd),
  cd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  fd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function pd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dd[e]) ? !!t[e] : !1;
}
function zi() {
  return pd;
}
var hd = V({}, ir, {
    key: function (e) {
      if (e.key) {
        var t = cd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? fd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zi,
    charCode: function (e) {
      return e.type === "keypress" ? Ir(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ir(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  md = xe(hd),
  vd = V({}, gl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ru = xe(vd),
  gd = V({}, ir, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zi,
  }),
  yd = xe(gd),
  wd = V({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sd = xe(wd),
  kd = V({}, gl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xd = xe(kd),
  Ed = [9, 13, 27, 32],
  Oi = Ye && "CompositionEvent" in window,
  On = null;
Ye && "documentMode" in document && (On = document.documentMode);
var Cd = Ye && "TextEvent" in window && !On,
  ys = Ye && (!Oi || (On && 8 < On && 11 >= On)),
  Tu = String.fromCharCode(32),
  zu = !1;
function ws(e, t) {
  switch (e) {
    case "keyup":
      return Ed.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ss(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var $t = !1;
function _d(e, t) {
  switch (e) {
    case "compositionend":
      return Ss(t);
    case "keypress":
      return t.which !== 32 ? null : ((zu = !0), Tu);
    case "textInput":
      return (e = t.data), e === Tu && zu ? null : e;
    default:
      return null;
  }
}
function Pd(e, t) {
  if ($t)
    return e === "compositionend" || (!Oi && ws(e, t))
      ? ((e = gs()), (Mr = Ri = rt = null), ($t = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ys && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Nd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ou(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Nd[e.type] : t === "textarea";
}
function ks(e, t, n, r) {
  qa(r),
    (t = Jr(t, "onChange")),
    0 < t.length &&
      ((n = new Ti("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var jn = null,
  Kn = null;
function Ld(e) {
  Os(e, 0);
}
function yl(e) {
  var t = Vt(e);
  if (Qa(t)) return e;
}
function Rd(e, t) {
  if (e === "change") return t;
}
var xs = !1;
if (Ye) {
  var Hl;
  if (Ye) {
    var Ql = "oninput" in document;
    if (!Ql) {
      var ju = document.createElement("div");
      ju.setAttribute("oninput", "return;"),
        (Ql = typeof ju.oninput == "function");
    }
    Hl = Ql;
  } else Hl = !1;
  xs = Hl && (!document.documentMode || 9 < document.documentMode);
}
function Mu() {
  jn && (jn.detachEvent("onpropertychange", Es), (Kn = jn = null));
}
function Es(e) {
  if (e.propertyName === "value" && yl(Kn)) {
    var t = [];
    ks(t, Kn, e, Ci(e)), ns(Ld, t);
  }
}
function Td(e, t, n) {
  e === "focusin"
    ? (Mu(), (jn = t), (Kn = n), jn.attachEvent("onpropertychange", Es))
    : e === "focusout" && Mu();
}
function zd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return yl(Kn);
}
function Od(e, t) {
  if (e === "click") return yl(t);
}
function jd(e, t) {
  if (e === "input" || e === "change") return yl(t);
}
function Md(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : Md;
function Yn(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!mo.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function Iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Du(e, t) {
  var n = Iu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Iu(n);
  }
}
function Cs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function _s() {
  for (var e = window, t = Wr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wr(e.document);
  }
  return t;
}
function ji(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Id(e) {
  var t = _s(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Cs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ji(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Du(n, o));
        var i = Du(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Dd = Ye && "documentMode" in document && 11 >= document.documentMode,
  At = null,
  Mo = null,
  Mn = null,
  Io = !1;
function Fu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Io ||
    At == null ||
    At !== Wr(r) ||
    ((r = At),
    "selectionStart" in r && ji(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Mn && Yn(Mn, r)) ||
      ((Mn = r),
      (r = Jr(Mo, "onSelect")),
      0 < r.length &&
        ((t = new Ti("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = At))));
}
function xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bt = {
    animationend: xr("Animation", "AnimationEnd"),
    animationiteration: xr("Animation", "AnimationIteration"),
    animationstart: xr("Animation", "AnimationStart"),
    transitionend: xr("Transition", "TransitionEnd"),
  },
  Kl = {},
  Ps = {};
Ye &&
  ((Ps = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bt.animationend.animation,
    delete Bt.animationiteration.animation,
    delete Bt.animationstart.animation),
  "TransitionEvent" in window || delete Bt.transitionend.transition);
function wl(e) {
  if (Kl[e]) return Kl[e];
  if (!Bt[e]) return e;
  var t = Bt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ps) return (Kl[e] = t[n]);
  return e;
}
var Ns = wl("animationend"),
  Ls = wl("animationiteration"),
  Rs = wl("animationstart"),
  Ts = wl("transitionend"),
  zs = new Map(),
  Uu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gt(e, t) {
  zs.set(e, t), Mt(t, [e]);
}
for (var Yl = 0; Yl < Uu.length; Yl++) {
  var Gl = Uu[Yl],
    Fd = Gl.toLowerCase(),
    Ud = Gl[0].toUpperCase() + Gl.slice(1);
  gt(Fd, "on" + Ud);
}
gt(Ns, "onAnimationEnd");
gt(Ls, "onAnimationIteration");
gt(Rs, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(Ts, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
Mt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ln =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $d = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function $u(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ff(r, t, void 0, e), (e.currentTarget = null);
}
function Os(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          $u(l, u, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          $u(l, u, s), (o = a);
        }
    }
  }
  if (Qr) throw ((e = To), (Qr = !1), (To = null), e);
}
function F(e, t) {
  var n = t[Ao];
  n === void 0 && (n = t[Ao] = new Set());
  var r = e + "__bubble";
  n.has(r) || (js(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), js(n, e, r, t);
}
var Er = "_reactListening" + Math.random().toString(36).slice(2);
function Gn(e) {
  if (!e[Er]) {
    (e[Er] = !0),
      Aa.forEach(function (n) {
        n !== "selectionchange" && ($d.has(n) || Xl(n, !1, e), Xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Er] || ((t[Er] = !0), Xl("selectionchange", !1, t));
  }
}
function js(e, t, n, r) {
  switch (vs(t)) {
    case 1:
      var l = bf;
      break;
    case 4:
      l = ed;
      break;
    default:
      l = Li;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ro ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Jl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Ct(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ns(function () {
    var s = o,
      h = Ci(n),
      m = [];
    e: {
      var d = zs.get(e);
      if (d !== void 0) {
        var v = Ti,
          S = e;
        switch (e) {
          case "keypress":
            if (Ir(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = md;
            break;
          case "focusin":
            (S = "focus"), (v = Wl);
            break;
          case "focusout":
            (S = "blur"), (v = Wl);
            break;
          case "beforeblur":
          case "afterblur":
            v = Wl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Nu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = rd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = yd;
            break;
          case Ns:
          case Ls:
          case Rs:
            v = id;
            break;
          case Ts:
            v = Sd;
            break;
          case "scroll":
            v = td;
            break;
          case "wheel":
            v = xd;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ad;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ru;
        }
        var y = (t & 4) !== 0,
          N = !y && e === "scroll",
          f = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var c = s, p; c !== null; ) {
          p = c;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              f !== null && ((g = Vn(c, f)), g != null && y.push(Xn(c, g, p)))),
            N)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((d = new v(d, S, null, n, h)), m.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          d &&
            n !== No &&
            (S = n.relatedTarget || n.fromElement) &&
            (Ct(S) || S[Ge]))
        )
          break e;
        if (
          (v || d) &&
          ((d =
            h.window === h
              ? h
              : (d = h.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          v
            ? ((S = n.relatedTarget || n.toElement),
              (v = s),
              (S = S ? Ct(S) : null),
              S !== null &&
                ((N = It(S)), S !== N || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((v = null), (S = s)),
          v !== S)
        ) {
          if (
            ((y = Nu),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Ru),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (N = v == null ? d : Vt(v)),
            (p = S == null ? d : Vt(S)),
            (d = new y(g, c + "leave", v, n, h)),
            (d.target = N),
            (d.relatedTarget = p),
            (g = null),
            Ct(h) === s &&
              ((y = new y(f, c + "enter", S, n, h)),
              (y.target = p),
              (y.relatedTarget = N),
              (g = y)),
            (N = g),
            v && S)
          )
            t: {
              for (y = v, f = S, c = 0, p = y; p; p = Dt(p)) c++;
              for (p = 0, g = f; g; g = Dt(g)) p++;
              for (; 0 < c - p; ) (y = Dt(y)), c--;
              for (; 0 < p - c; ) (f = Dt(f)), p--;
              for (; c--; ) {
                if (y === f || (f !== null && y === f.alternate)) break t;
                (y = Dt(y)), (f = Dt(f));
              }
              y = null;
            }
          else y = null;
          v !== null && Au(m, d, v, y, !1),
            S !== null && N !== null && Au(m, N, S, y, !0);
        }
      }
      e: {
        if (
          ((d = s ? Vt(s) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === "select" || (v === "input" && d.type === "file"))
        )
          var E = Rd;
        else if (Ou(d))
          if (xs) E = jd;
          else {
            E = zd;
            var _ = Td;
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (E = Od);
        if (E && (E = E(e, s))) {
          ks(m, E, n, h);
          break e;
        }
        _ && _(e, d, s),
          e === "focusout" &&
            (_ = d._wrapperState) &&
            _.controlled &&
            d.type === "number" &&
            xo(d, "number", d.value);
      }
      switch (((_ = s ? Vt(s) : window), e)) {
        case "focusin":
          (Ou(_) || _.contentEditable === "true") &&
            ((At = _), (Mo = s), (Mn = null));
          break;
        case "focusout":
          Mn = Mo = At = null;
          break;
        case "mousedown":
          Io = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Io = !1), Fu(m, n, h);
          break;
        case "selectionchange":
          if (Dd) break;
        case "keydown":
        case "keyup":
          Fu(m, n, h);
      }
      var P;
      if (Oi)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        $t
          ? ws(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (ys &&
          n.locale !== "ko" &&
          ($t || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && $t && (P = gs())
            : ((rt = h),
              (Ri = "value" in rt ? rt.value : rt.textContent),
              ($t = !0))),
        (_ = Jr(s, L)),
        0 < _.length &&
          ((L = new Lu(L, e, null, n, h)),
          m.push({ event: L, listeners: _ }),
          P ? (L.data = P) : ((P = Ss(n)), P !== null && (L.data = P)))),
        (P = Cd ? _d(e, n) : Pd(e, n)) &&
          ((s = Jr(s, "onBeforeInput")),
          0 < s.length &&
            ((h = new Lu("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: s }),
            (h.data = P)));
    }
    Os(m, t);
  });
}
function Xn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Vn(e, n)),
      o != null && r.unshift(Xn(e, o, l)),
      (o = Vn(e, t)),
      o != null && r.push(Xn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Dt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Au(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Vn(n, o)), a != null && i.unshift(Xn(n, a, u)))
        : l || ((a = Vn(n, o)), a != null && i.push(Xn(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ad = /\r\n?/g,
  Bd = /\u0000|\uFFFD/g;
function Bu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ad,
      `
`
    )
    .replace(Bd, "");
}
function Cr(e, t, n) {
  if (((t = Bu(t)), Bu(e) !== t && n)) throw Error(w(425));
}
function Zr() {}
var Do = null,
  Fo = null;
function Uo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var $o = typeof setTimeout == "function" ? setTimeout : void 0,
  Vd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Vu = typeof Promise == "function" ? Promise : void 0,
  Wd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Vu < "u"
      ? function (e) {
          return Vu.resolve(null).then(e).catch(Hd);
        }
      : $o;
function Hd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Qn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Qn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Wu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fn = Math.random().toString(36).slice(2),
  $e = "__reactFiber$" + fn,
  Jn = "__reactProps$" + fn,
  Ge = "__reactContainer$" + fn,
  Ao = "__reactEvents$" + fn,
  Qd = "__reactListeners$" + fn,
  Kd = "__reactHandles$" + fn;
function Ct(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[$e])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Wu(e); e !== null; ) {
          if ((n = e[$e])) return n;
          e = Wu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ur(e) {
  return (
    (e = e[$e] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Sl(e) {
  return e[Jn] || null;
}
var Bo = [],
  Wt = -1;
function yt(e) {
  return { current: e };
}
function U(e) {
  0 > Wt || ((e.current = Bo[Wt]), (Bo[Wt] = null), Wt--);
}
function D(e, t) {
  Wt++, (Bo[Wt] = e.current), (e.current = t);
}
var vt = {},
  ue = yt(vt),
  he = yt(!1),
  Rt = vt;
function nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function me(e) {
  return (e = e.childContextTypes), e != null;
}
function qr() {
  U(he), U(ue);
}
function Hu(e, t, n) {
  if (ue.current !== vt) throw Error(w(168));
  D(ue, t), D(he, n);
}
function Ms(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Tf(e) || "Unknown", l));
  return V({}, n, r);
}
function br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vt),
    (Rt = ue.current),
    D(ue, e),
    D(he, he.current),
    !0
  );
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = Ms(e, t, Rt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(he),
      U(ue),
      D(ue, e))
    : U(he),
    D(he, n);
}
var We = null,
  kl = !1,
  ql = !1;
function Is(e) {
  We === null ? (We = [e]) : We.push(e);
}
function Yd(e) {
  (kl = !0), Is(e);
}
function wt() {
  if (!ql && We !== null) {
    ql = !0;
    var e = 0,
      t = I;
    try {
      var n = We;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (We = null), (kl = !1);
    } catch (l) {
      throw (We !== null && (We = We.slice(e + 1)), is(_i, wt), l);
    } finally {
      (I = t), (ql = !1);
    }
  }
  return null;
}
var Ht = [],
  Qt = 0,
  el = null,
  tl = 0,
  Ee = [],
  Ce = 0,
  Tt = null,
  He = 1,
  Qe = "";
function xt(e, t) {
  (Ht[Qt++] = tl), (Ht[Qt++] = el), (el = e), (tl = t);
}
function Ds(e, t, n) {
  (Ee[Ce++] = He), (Ee[Ce++] = Qe), (Ee[Ce++] = Tt), (Tt = e);
  var r = He;
  e = Qe;
  var l = 32 - Me(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Me(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (He = (1 << (32 - Me(t) + l)) | (n << l) | r),
      (Qe = o + e);
  } else (He = (1 << o) | (n << l) | r), (Qe = e);
}
function Mi(e) {
  e.return !== null && (xt(e, 1), Ds(e, 1, 0));
}
function Ii(e) {
  for (; e === el; )
    (el = Ht[--Qt]), (Ht[Qt] = null), (tl = Ht[--Qt]), (Ht[Qt] = null);
  for (; e === Tt; )
    (Tt = Ee[--Ce]),
      (Ee[Ce] = null),
      (Qe = Ee[--Ce]),
      (Ee[Ce] = null),
      (He = Ee[--Ce]),
      (Ee[Ce] = null);
}
var we = null,
  ye = null,
  $ = !1,
  je = null;
function Fs(e, t) {
  var n = _e(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ku(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (we = e), (ye = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (we = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tt !== null ? { id: He, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = _e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (we = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Vo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wo(e) {
  if ($) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Ku(e, t)) {
        if (Vo(e)) throw Error(w(418));
        t = st(n.nextSibling);
        var r = we;
        t && Ku(e, t)
          ? Fs(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (we = e));
      }
    } else {
      if (Vo(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (we = e);
    }
  }
}
function Yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function _r(e) {
  if (e !== we) return !1;
  if (!$) return Yu(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Uo(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Vo(e)) throw (Us(), Error(w(418)));
    for (; t; ) Fs(e, t), (t = st(t.nextSibling));
  }
  if ((Yu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = we ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function Us() {
  for (var e = ye; e; ) e = st(e.nextSibling);
}
function rn() {
  (ye = we = null), ($ = !1);
}
function Di(e) {
  je === null ? (je = [e]) : je.push(e);
}
var Gd = Ze.ReactCurrentBatchConfig;
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var nl = yt(null),
  rl = null,
  Kt = null,
  Fi = null;
function Ui() {
  Fi = Kt = rl = null;
}
function $i(e) {
  var t = nl.current;
  U(nl), (e._currentValue = t);
}
function Ho(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function bt(e, t) {
  (rl = e),
    (Fi = Kt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (Fi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kt === null)) {
      if (rl === null) throw Error(w(308));
      (Kt = e), (rl.dependencies = { lanes: 0, firstContext: e });
    } else Kt = Kt.next = e;
  return t;
}
var _t = null;
function Ai(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function $s(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ai(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function Bi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function As(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ai(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Dr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pi(e, n);
  }
}
function Gu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ll(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = s) : (u.next = s),
        (h.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (h = s = a = null), (u = o);
    do {
      var d = u.lane,
        v = u.eventTime;
      if ((r & d) === d) {
        h !== null &&
          (h = h.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            y = u;
          switch (((d = t), (v = n), y.tag)) {
            case 1:
              if (((S = y.payload), typeof S == "function")) {
                m = S.call(v, m, d);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = y.payload),
                (d = typeof S == "function" ? S.call(v, m, d) : S),
                d == null)
              )
                break e;
              m = V({}, m, d);
              break e;
            case 2:
              et = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (d = l.effects),
          d === null ? (l.effects = [u]) : d.push(u));
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((s = h = v), (a = m)) : (h = h.next = v),
          (i |= d);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (d = u),
          (u = d.next),
          (d.next = null),
          (l.lastBaseUpdate = d),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (a = m),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Ot |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(w(191, l));
        l.call(r);
      }
    }
}
var Bs = new $a.Component().refs;
function Qo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = dt(e),
      o = Ke(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ct(e, o, l)),
      t !== null && (Ie(t, e, l, r), Dr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = dt(e),
      o = Ke(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ct(e, o, l)),
      t !== null && (Ie(t, e, l, r), Dr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = dt(e),
      l = Ke(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ct(e, l, r)),
      t !== null && (Ie(t, e, r, n), Dr(t, e, r));
  },
};
function Ju(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Yn(n, r) || !Yn(l, o)
      : !0
  );
}
function Vs(e, t, n) {
  var r = !1,
    l = vt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ne(o))
      : ((l = me(t) ? Rt : ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? nn(e, l) : vt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Zu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xl.enqueueReplaceState(t, t.state, null);
}
function Ko(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Bs), Bi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ne(o))
    : ((o = me(t) ? Rt : ue.current), (l.context = nn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Qo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && xl.enqueueReplaceState(l, l.state, null),
      ll(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function xn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Bs && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function qu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ws(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = pt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, g) {
    return c === null || c.tag !== 6
      ? ((c = oo(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function a(f, c, p, g) {
    var E = p.type;
    return E === Ut
      ? h(f, c, p.props.children, g, p.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === be &&
            qu(E) === c.type))
      ? ((g = l(c, p.props)), (g.ref = xn(f, c, p)), (g.return = f), g)
      : ((g = Vr(p.type, p.key, p.props, null, f.mode, g)),
        (g.ref = xn(f, c, p)),
        (g.return = f),
        g);
  }
  function s(f, c, p, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = io(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function h(f, c, p, g, E) {
    return c === null || c.tag !== 7
      ? ((c = Lt(p, f.mode, g, E)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function m(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = oo("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case mr:
          return (
            (p = Vr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = xn(f, null, c)),
            (p.return = f),
            p
          );
        case Ft:
          return (c = io(c, f.mode, p)), (c.return = f), c;
        case be:
          var g = c._init;
          return m(f, g(c._payload), p);
      }
      if (Pn(c) || gn(c))
        return (c = Lt(c, f.mode, p, null)), (c.return = f), c;
      Pr(f, c);
    }
    return null;
  }
  function d(f, c, p, g) {
    var E = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return E !== null ? null : u(f, c, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case mr:
          return p.key === E ? a(f, c, p, g) : null;
        case Ft:
          return p.key === E ? s(f, c, p, g) : null;
        case be:
          return (E = p._init), d(f, c, E(p._payload), g);
      }
      if (Pn(p) || gn(p)) return E !== null ? null : h(f, c, p, g, null);
      Pr(f, p);
    }
    return null;
  }
  function v(f, c, p, g, E) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(p) || null), u(c, f, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case mr:
          return (f = f.get(g.key === null ? p : g.key) || null), a(c, f, g, E);
        case Ft:
          return (f = f.get(g.key === null ? p : g.key) || null), s(c, f, g, E);
        case be:
          var _ = g._init;
          return v(f, c, p, _(g._payload), E);
      }
      if (Pn(g) || gn(g)) return (f = f.get(p) || null), h(c, f, g, E, null);
      Pr(c, g);
    }
    return null;
  }
  function S(f, c, p, g) {
    for (
      var E = null, _ = null, P = c, L = (c = 0), H = null;
      P !== null && L < p.length;
      L++
    ) {
      P.index > L ? ((H = P), (P = null)) : (H = P.sibling);
      var j = d(f, P, p[L], g);
      if (j === null) {
        P === null && (P = H);
        break;
      }
      e && P && j.alternate === null && t(f, P),
        (c = o(j, c, L)),
        _ === null ? (E = j) : (_.sibling = j),
        (_ = j),
        (P = H);
    }
    if (L === p.length) return n(f, P), $ && xt(f, L), E;
    if (P === null) {
      for (; L < p.length; L++)
        (P = m(f, p[L], g)),
          P !== null &&
            ((c = o(P, c, L)), _ === null ? (E = P) : (_.sibling = P), (_ = P));
      return $ && xt(f, L), E;
    }
    for (P = r(f, P); L < p.length; L++)
      (H = v(P, f, L, p[L], g)),
        H !== null &&
          (e && H.alternate !== null && P.delete(H.key === null ? L : H.key),
          (c = o(H, c, L)),
          _ === null ? (E = H) : (_.sibling = H),
          (_ = H));
    return (
      e &&
        P.forEach(function (Re) {
          return t(f, Re);
        }),
      $ && xt(f, L),
      E
    );
  }
  function y(f, c, p, g) {
    var E = gn(p);
    if (typeof E != "function") throw Error(w(150));
    if (((p = E.call(p)), p == null)) throw Error(w(151));
    for (
      var _ = (E = null), P = c, L = (c = 0), H = null, j = p.next();
      P !== null && !j.done;
      L++, j = p.next()
    ) {
      P.index > L ? ((H = P), (P = null)) : (H = P.sibling);
      var Re = d(f, P, j.value, g);
      if (Re === null) {
        P === null && (P = H);
        break;
      }
      e && P && Re.alternate === null && t(f, P),
        (c = o(Re, c, L)),
        _ === null ? (E = Re) : (_.sibling = Re),
        (_ = Re),
        (P = H);
    }
    if (j.done) return n(f, P), $ && xt(f, L), E;
    if (P === null) {
      for (; !j.done; L++, j = p.next())
        (j = m(f, j.value, g)),
          j !== null &&
            ((c = o(j, c, L)), _ === null ? (E = j) : (_.sibling = j), (_ = j));
      return $ && xt(f, L), E;
    }
    for (P = r(f, P); !j.done; L++, j = p.next())
      (j = v(P, f, L, j.value, g)),
        j !== null &&
          (e && j.alternate !== null && P.delete(j.key === null ? L : j.key),
          (c = o(j, c, L)),
          _ === null ? (E = j) : (_.sibling = j),
          (_ = j));
    return (
      e &&
        P.forEach(function (hn) {
          return t(f, hn);
        }),
      $ && xt(f, L),
      E
    );
  }
  function N(f, c, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Ut &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case mr:
          e: {
            for (var E = p.key, _ = c; _ !== null; ) {
              if (_.key === E) {
                if (((E = p.type), E === Ut)) {
                  if (_.tag === 7) {
                    n(f, _.sibling),
                      (c = l(_, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === be &&
                    qu(E) === _.type)
                ) {
                  n(f, _.sibling),
                    (c = l(_, p.props)),
                    (c.ref = xn(f, _, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            p.type === Ut
              ? ((c = Lt(p.props.children, f.mode, g, p.key)),
                (c.return = f),
                (f = c))
              : ((g = Vr(p.type, p.key, p.props, null, f.mode, g)),
                (g.ref = xn(f, c, p)),
                (g.return = f),
                (f = g));
          }
          return i(f);
        case Ft:
          e: {
            for (_ = p.key; c !== null; ) {
              if (c.key === _)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = io(p, f.mode, g)), (c.return = f), (f = c);
          }
          return i(f);
        case be:
          return (_ = p._init), N(f, c, _(p._payload), g);
      }
      if (Pn(p)) return S(f, c, p, g);
      if (gn(p)) return y(f, c, p, g);
      Pr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = oo(p, f.mode, g)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return N;
}
var ln = Ws(!0),
  Hs = Ws(!1),
  ar = {},
  Be = yt(ar),
  Zn = yt(ar),
  qn = yt(ar);
function Pt(e) {
  if (e === ar) throw Error(w(174));
  return e;
}
function Vi(e, t) {
  switch ((D(qn, t), D(Zn, e), D(Be, ar), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Co(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Co(t, e));
  }
  U(Be), D(Be, t);
}
function on() {
  U(Be), U(Zn), U(qn);
}
function Qs(e) {
  Pt(qn.current);
  var t = Pt(Be.current),
    n = Co(t, e.type);
  t !== n && (D(Zn, e), D(Be, n));
}
function Wi(e) {
  Zn.current === e && (U(Be), U(Zn));
}
var A = yt(0);
function ol(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var bl = [];
function Hi() {
  for (var e = 0; e < bl.length; e++)
    bl[e]._workInProgressVersionPrimary = null;
  bl.length = 0;
}
var Fr = Ze.ReactCurrentDispatcher,
  eo = Ze.ReactCurrentBatchConfig,
  zt = 0,
  B = null,
  X = null,
  b = null,
  il = !1,
  In = !1,
  bn = 0,
  Xd = 0;
function le() {
  throw Error(w(321));
}
function Qi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function Ki(e, t, n, r, l, o) {
  if (
    ((zt = o),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fr.current = e === null || e.memoizedState === null ? bd : ep),
    (e = n(r, l)),
    In)
  ) {
    o = 0;
    do {
      if (((In = !1), (bn = 0), 25 <= o)) throw Error(w(301));
      (o += 1),
        (b = X = null),
        (t.updateQueue = null),
        (Fr.current = tp),
        (e = n(r, l));
    } while (In);
  }
  if (
    ((Fr.current = ul),
    (t = X !== null && X.next !== null),
    (zt = 0),
    (b = X = B = null),
    (il = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function Yi() {
  var e = bn !== 0;
  return (bn = 0), e;
}
function Ue() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (B.memoizedState = b = e) : (b = b.next = e), b;
}
function Le() {
  if (X === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = b === null ? B.memoizedState : b.next;
  if (t !== null) (b = t), (X = e);
  else {
    if (e === null) throw Error(w(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      b === null ? (B.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function to(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      s = o;
    do {
      var h = s.lane;
      if ((zt & h) === h)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var m = {
          lane: h,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = m), (i = r)) : (a = a.next = m),
          (B.lanes |= h),
          (Ot |= h);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = u),
      De(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (B.lanes |= o), (Ot |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function no(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    De(o, t.memoizedState) || (pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ks() {}
function Ys(e, t) {
  var n = B,
    r = Le(),
    l = t(),
    o = !De(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    Gi(Js.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      tr(9, Xs.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(w(349));
    zt & 30 || Gs(n, t, l);
  }
  return l;
}
function Gs(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Xs(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Zs(t) && qs(e);
}
function Js(e, t, n) {
  return n(function () {
    Zs(t) && qs(e);
  });
}
function Zs(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function qs(e) {
  var t = Xe(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function bu(e) {
  var t = Ue();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: er,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = qd.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function tr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bs() {
  return Le().memoizedState;
}
function Ur(e, t, n, r) {
  var l = Ue();
  (B.flags |= e),
    (l.memoizedState = tr(1 | t, n, void 0, r === void 0 ? null : r));
}
function El(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (((o = i.destroy), r !== null && Qi(r, i.deps))) {
      l.memoizedState = tr(t, n, o, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = tr(1 | t, n, o, r));
}
function ea(e, t) {
  return Ur(8390656, 8, e, t);
}
function Gi(e, t) {
  return El(2048, 8, e, t);
}
function ec(e, t) {
  return El(4, 2, e, t);
}
function tc(e, t) {
  return El(4, 4, e, t);
}
function nc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function rc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), El(4, 4, nc.bind(null, t, e), n)
  );
}
function Xi() {}
function lc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function oc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Qi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ic(e, t, n) {
  return zt & 21
    ? (De(n, t) || ((n = ss()), (B.lanes |= n), (Ot |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function Jd(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = eo.transition;
  eo.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (eo.transition = r);
  }
}
function uc() {
  return Le().memoizedState;
}
function Zd(e, t, n) {
  var r = dt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ac(e))
  )
    sc(t, n);
  else if (((n = $s(e, t, n, r)), n !== null)) {
    var l = se();
    Ie(n, e, r, l), cc(n, t, r);
  }
}
function qd(e, t, n) {
  var r = dt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ac(e)) sc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), De(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Ai(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = $s(e, t, l, r)),
      n !== null && ((l = se()), Ie(n, e, r, l), cc(n, t, r));
  }
}
function ac(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function sc(e, t) {
  In = il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function cc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pi(e, n);
  }
}
var ul = {
    readContext: Ne,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  bd = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: ea,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ur(4194308, 4, nc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ur(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ur(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ue();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ue();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Zd.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ue();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: bu,
    useDebugValue: Xi,
    useDeferredValue: function (e) {
      return (Ue().memoizedState = e);
    },
    useTransition: function () {
      var e = bu(!1),
        t = e[0];
      return (e = Jd.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        l = Ue();
      if ($) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(w(349));
        zt & 30 || Gs(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ea(Js.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        tr(9, Xs.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ue(),
        t = ee.identifierPrefix;
      if ($) {
        var n = Qe,
          r = He;
        (n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = bn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Xd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ep = {
    readContext: Ne,
    useCallback: lc,
    useContext: Ne,
    useEffect: Gi,
    useImperativeHandle: rc,
    useInsertionEffect: ec,
    useLayoutEffect: tc,
    useMemo: oc,
    useReducer: to,
    useRef: bs,
    useState: function () {
      return to(er);
    },
    useDebugValue: Xi,
    useDeferredValue: function (e) {
      var t = Le();
      return ic(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = to(er)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ks,
    useSyncExternalStore: Ys,
    useId: uc,
    unstable_isNewReconciler: !1,
  },
  tp = {
    readContext: Ne,
    useCallback: lc,
    useContext: Ne,
    useEffect: Gi,
    useImperativeHandle: rc,
    useInsertionEffect: ec,
    useLayoutEffect: tc,
    useMemo: oc,
    useReducer: no,
    useRef: bs,
    useState: function () {
      return no(er);
    },
    useDebugValue: Xi,
    useDeferredValue: function (e) {
      var t = Le();
      return X === null ? (t.memoizedState = e) : ic(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = no(er)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ks,
    useSyncExternalStore: Ys,
    useId: uc,
    unstable_isNewReconciler: !1,
  };
function un(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Rf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ro(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var np = typeof WeakMap == "function" ? WeakMap : Map;
function fc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      sl || ((sl = !0), (ri = r)), Yo(e, t);
    }),
    n
  );
}
function dc(e, t, n) {
  (n = Ke(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Yo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Yo(e, t),
          typeof r != "function" &&
            (ft === null ? (ft = new Set([this])) : ft.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ta(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new np();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = vp.bind(null, e, t, n)), t.then(e, e));
}
function na(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ra(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ke(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var rp = Ze.ReactCurrentOwner,
  pe = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Hs(t, null, n, r) : ln(t, e.child, n, r);
}
function la(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    bt(t, l),
    (r = Ki(e, t, n, r, o, l)),
    (n = Yi()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : ($ && n && Mi(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function oa(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ru(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), pc(e, t, o, r, l))
      : ((e = Vr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Yn), n(i, r) && e.ref === t.ref)
    )
      return Je(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function pc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Yn(o, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), Je(e, t, l);
  }
  return Go(e, t, n, r, l);
}
function hc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Gt, ge),
        (ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Gt, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        D(Gt, ge),
        (ge |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Gt, ge),
      (ge |= r);
  return ae(e, t, l, n), t.child;
}
function mc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Go(e, t, n, r, l) {
  var o = me(n) ? Rt : ue.current;
  return (
    (o = nn(t, o)),
    bt(t, l),
    (n = Ki(e, t, n, r, o, l)),
    (r = Yi()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : ($ && r && Mi(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function ia(e, t, n, r, l) {
  if (me(n)) {
    var o = !0;
    br(t);
  } else o = !1;
  if ((bt(t, l), t.stateNode === null))
    $r(e, t), Vs(t, n, r), Ko(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Ne(s))
      : ((s = me(n) ? Rt : ue.current), (s = nn(t, s)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && Zu(t, i, r, s)),
      (et = !1);
    var d = t.memoizedState;
    (i.state = d),
      ll(t, r, i, l),
      (a = t.memoizedState),
      u !== r || d !== a || he.current || et
        ? (typeof h == "function" && (Qo(t, n, h, r), (a = t.memoizedState)),
          (u = et || Ju(t, n, u, r, d, a, s))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = s),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      As(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : ze(t.type, u)),
      (i.props = s),
      (m = t.pendingProps),
      (d = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ne(a))
        : ((a = me(n) ? Rt : ue.current), (a = nn(t, a)));
    var v = n.getDerivedStateFromProps;
    (h =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || d !== a) && Zu(t, i, r, a)),
      (et = !1),
      (d = t.memoizedState),
      (i.state = d),
      ll(t, r, i, l);
    var S = t.memoizedState;
    u !== m || d !== S || he.current || et
      ? (typeof v == "function" && (Qo(t, n, v, r), (S = t.memoizedState)),
        (s = et || Ju(t, n, s, r, d, S, a) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xo(e, t, n, r, o, l);
}
function Xo(e, t, n, r, l, o) {
  mc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Qu(t, n, !1), Je(e, t, o);
  (r = t.stateNode), (rp.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ln(t, e.child, null, o)), (t.child = ln(t, null, u, o)))
      : ae(e, t, u, o),
    (t.memoizedState = r.state),
    l && Qu(t, n, !0),
    t.child
  );
}
function vc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Hu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hu(e, t.context, !1),
    Vi(e, t.containerInfo);
}
function ua(e, t, n, r, l) {
  return rn(), Di(l), (t.flags |= 256), ae(e, t, n, r), t.child;
}
var Jo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gc(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(A, l & 1),
    e === null)
  )
    return (
      Wo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Pl(i, r, 0, null)),
              (e = Lt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Zo(n)),
              (t.memoizedState = Jo),
              e)
            : Ji(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return lp(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = pt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = pt(u, o)) : ((o = Lt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Zo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Jo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = pt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ji(e, t) {
  return (
    (t = Pl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nr(e, t, n, r) {
  return (
    r !== null && Di(r),
    ln(t, e.child, null, n),
    (e = Ji(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function lp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ro(Error(w(422)))), Nr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Pl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Lt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && ln(t, e.child, null, i),
        (t.child.memoizedState = Zo(i)),
        (t.memoizedState = Jo),
        o);
  if (!(t.mode & 1)) return Nr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(w(419))), (r = ro(o, r, void 0)), Nr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), pe || u)) {
    if (((r = ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Xe(e, l), Ie(r, e, l, -1));
    }
    return nu(), (r = ro(Error(w(421)))), Nr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = gp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ye = st(l.nextSibling)),
      (we = t),
      ($ = !0),
      (je = null),
      e !== null &&
        ((Ee[Ce++] = He),
        (Ee[Ce++] = Qe),
        (Ee[Ce++] = Tt),
        (He = e.id),
        (Qe = e.overflow),
        (Tt = t)),
      (t = Ji(t, r.children)),
      (t.flags |= 4096),
      t);
}
function aa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ho(e.return, t, n);
}
function lo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function yc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ae(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && aa(e, n, t);
        else if (e.tag === 19) aa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(A, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ol(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          lo(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ol(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        lo(t, !0, n, null, o);
        break;
      case "together":
        lo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $r(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ot |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function op(e, t, n) {
  switch (t.tag) {
    case 3:
      vc(t), rn();
      break;
    case 5:
      Qs(t);
      break;
    case 1:
      me(t.type) && br(t);
      break;
    case 4:
      Vi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(nl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? gc(e, t, n)
          : (D(A, A.current & 1),
            (e = Je(e, t, n)),
            e !== null ? e.sibling : null);
      D(A, A.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return yc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hc(e, t, n);
  }
  return Je(e, t, n);
}
var wc, qo, Sc, kc;
wc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
qo = function () {};
Sc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Pt(Be.current);
    var o = null;
    switch (n) {
      case "input":
        (l = So(e, l)), (r = So(e, r)), (o = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Eo(e, l)), (r = Eo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Zr);
    }
    _o(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (An.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (An.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && F("scroll", e),
                  o || u === a || (o = []))
                : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
kc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function En(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ip(e, t, n) {
  var r = t.pendingProps;
  switch ((Ii(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return me(t.type) && qr(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        on(),
        U(he),
        U(ue),
        Hi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), je !== null && (ii(je), (je = null)))),
        qo(e, t),
        oe(t),
        null
      );
    case 5:
      Wi(t);
      var l = Pt(qn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return oe(t), null;
        }
        if (((e = Pt(Be.current)), _r(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[$e] = t), (r[Jn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ln.length; l++) F(Ln[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              gu(r, o), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              wu(r, o), F("invalid", r);
          }
          _o(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : An.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              vr(r), yu(r, o, !0);
              break;
            case "textarea":
              vr(r), Su(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Zr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ga(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[$e] = t),
            (e[Jn] = r),
            wc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Po(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) F(Ln[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                gu(e, r), (l = So(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                wu(e, r), (l = Eo(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            _o(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? Za(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Xa(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Bn(e, a)
                    : typeof a == "number" && Bn(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (An.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && F("scroll", e)
                      : a != null && Si(e, o, a, i));
              }
            switch (n) {
              case "input":
                vr(e), yu(e, r, !1);
                break;
              case "textarea":
                vr(e), Su(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Xt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Xt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Zr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) kc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = Pt(qn.current)), Pt(Be.current), _r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$e] = t),
            (o = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$e] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (U(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ye !== null && t.mode & 1 && !(t.flags & 128))
          Us(), rn(), (t.flags |= 98560), (o = !1);
        else if (((o = _r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(w(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(w(317));
            o[$e] = t;
          } else
            rn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (o = !1);
        } else je !== null && (ii(je), (je = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? J === 0 && (J = 3) : nu())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        on(), qo(e, t), e === null && Gn(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return $i(t.type._context), oe(t), null;
    case 17:
      return me(t.type) && qr(), oe(t), null;
    case 19:
      if ((U(A), (o = t.memoizedState), o === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) En(o, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ol(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    En(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(A, (A.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            K() > an &&
            ((t.flags |= 128), (r = !0), En(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ol(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              En(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !$)
            )
              return oe(t), null;
          } else
            2 * K() - o.renderingStartTime > an &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), En(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = K()),
          (t.sibling = null),
          (n = A.current),
          D(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        tu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function up(e, t) {
  switch ((Ii(t), t.tag)) {
    case 1:
      return (
        me(t.type) && qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        on(),
        U(he),
        U(ue),
        Hi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Wi(t), null;
    case 13:
      if ((U(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        rn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(A), null;
    case 4:
      return on(), null;
    case 10:
      return $i(t.type._context), null;
    case 22:
    case 23:
      return tu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Lr = !1,
  ie = !1,
  ap = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Yt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function bo(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var sa = !1;
function sp(e, t) {
  if (((Do = Gr), (e = _s()), ji(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            s = 0,
            h = 0,
            m = e,
            d = null;
          t: for (;;) {
            for (
              var v;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (a = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (v = m.firstChild) !== null;

            )
              (d = m), (m = v);
            for (;;) {
              if (m === e) break t;
              if (
                (d === n && ++s === l && (u = i),
                d === o && ++h === r && (a = i),
                (v = m.nextSibling) !== null)
              )
                break;
              (m = d), (d = m.parentNode);
            }
            m = v;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fo = { focusedElem: e, selectionRange: n }, Gr = !1, k = t; k !== null; )
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (k = e);
    else
      for (; k !== null; ) {
        t = k;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var y = S.memoizedProps,
                    N = S.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : ze(t.type, y),
                      N
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (g) {
          W(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (k = e);
          break;
        }
        k = t.return;
      }
  return (S = sa), (sa = !1), S;
}
function Dn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && bo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Cl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ei(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function xc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$e], delete t[Jn], delete t[Ao], delete t[Qd], delete t[Kd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ec(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ca(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ec(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ti(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Zr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ti(e, t, n), e = e.sibling; e !== null; ) ti(e, t, n), (e = e.sibling);
}
function ni(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ni(e, t, n), e = e.sibling; e !== null; ) ni(e, t, n), (e = e.sibling);
}
var te = null,
  Oe = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) Cc(e, t, n), (n = n.sibling);
}
function Cc(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function")
    try {
      Ae.onCommitFiberUnmount(vl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Yt(n, t);
    case 6:
      var r = te,
        l = Oe;
      (te = null),
        qe(e, t, n),
        (te = r),
        (Oe = l),
        te !== null &&
          (Oe
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (Oe
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zl(e.parentNode, n)
              : e.nodeType === 1 && Zl(e, n),
            Qn(e))
          : Zl(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (l = Oe),
        (te = n.stateNode.containerInfo),
        (Oe = !0),
        qe(e, t, n),
        (te = r),
        (Oe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && bo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Yt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), qe(e, t, n), (ie = r))
        : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function fa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ap()),
      t.forEach(function (r) {
        var l = yp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (te = u.stateNode), (Oe = !1);
              break e;
            case 3:
              (te = u.stateNode.containerInfo), (Oe = !0);
              break e;
            case 4:
              (te = u.stateNode.containerInfo), (Oe = !0);
              break e;
          }
          u = u.return;
        }
        if (te === null) throw Error(w(160));
        Cc(o, i, l), (te = null), (Oe = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        W(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _c(t, e), (t = t.sibling);
}
function _c(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), Fe(e), r & 4)) {
        try {
          Dn(3, e, e.return), Cl(3, e);
        } catch (y) {
          W(e, e.return, y);
        }
        try {
          Dn(5, e, e.return);
        } catch (y) {
          W(e, e.return, y);
        }
      }
      break;
    case 1:
      Te(t, e), Fe(e), r & 512 && n !== null && Yt(n, n.return);
      break;
    case 5:
      if (
        (Te(t, e),
        Fe(e),
        r & 512 && n !== null && Yt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Bn(l, "");
        } catch (y) {
          W(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Ka(l, o),
              Po(u, i);
            var s = Po(u, o);
            for (i = 0; i < a.length; i += 2) {
              var h = a[i],
                m = a[i + 1];
              h === "style"
                ? Za(l, m)
                : h === "dangerouslySetInnerHTML"
                ? Xa(l, m)
                : h === "children"
                ? Bn(l, m)
                : Si(l, h, m, s);
            }
            switch (u) {
              case "input":
                ko(l, o);
                break;
              case "textarea":
                Ya(l, o);
                break;
              case "select":
                var d = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Xt(l, !!o.multiple, v, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Xt(l, !!o.multiple, o.defaultValue, !0)
                      : Xt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Jn] = o;
          } catch (y) {
            W(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Te(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          W(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Te(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Qn(t.containerInfo);
        } catch (y) {
          W(e, e.return, y);
        }
      break;
    case 4:
      Te(t, e), Fe(e);
      break;
    case 13:
      Te(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (bi = K())),
        r & 4 && fa(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (s = ie) || h), Te(t, e), (ie = s)) : Te(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !h && e.mode & 1)
        )
          for (k = e, h = e.child; h !== null; ) {
            for (m = k = h; k !== null; ) {
              switch (((d = k), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dn(4, d, d.return);
                  break;
                case 1:
                  Yt(d, d.return);
                  var S = d.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (y) {
                      W(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Yt(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    pa(m);
                    continue;
                  }
              }
              v !== null ? ((v.return = d), (k = v)) : pa(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (a = m.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = Ja("display", i)));
              } catch (y) {
                W(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = s ? "" : m.memoizedProps;
              } catch (y) {
                W(e, e.return, y);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Te(t, e), Fe(e), r & 4 && fa(e);
      break;
    case 21:
      break;
    default:
      Te(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ec(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Bn(l, ""), (r.flags &= -33));
          var o = ca(e);
          ni(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = ca(e);
          ti(e, u, i);
          break;
        default:
          throw Error(w(161));
      }
    } catch (a) {
      W(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function cp(e, t, n) {
  (k = e), Pc(e);
}
function Pc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Lr;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || ie;
        u = Lr;
        var s = ie;
        if (((Lr = i), (ie = a) && !s))
          for (k = l; k !== null; )
            (i = k),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ha(l)
                : a !== null
                ? ((a.return = i), (k = a))
                : ha(l);
        for (; o !== null; ) (k = o), Pc(o), (o = o.sibling);
        (k = l), (Lr = u), (ie = s);
      }
      da(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (k = o)) : da(e);
  }
}
function da(e) {
  for (; k !== null; ) {
    var t = k;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Xu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var h = s.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Qn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(w(163));
          }
        ie || (t.flags & 512 && ei(t));
      } catch (d) {
        W(t, t.return, d);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function pa(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function ha(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cl(4, t);
          } catch (a) {
            W(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              W(t, l, a);
            }
          }
          var o = t.return;
          try {
            ei(t);
          } catch (a) {
            W(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ei(t);
          } catch (a) {
            W(t, i, a);
          }
      }
    } catch (a) {
      W(t, t.return, a);
    }
    if (t === e) {
      k = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (k = u);
      break;
    }
    k = t.return;
  }
}
var fp = Math.ceil,
  al = Ze.ReactCurrentDispatcher,
  Zi = Ze.ReactCurrentOwner,
  Pe = Ze.ReactCurrentBatchConfig,
  M = 0,
  ee = null,
  G = null,
  ne = 0,
  ge = 0,
  Gt = yt(0),
  J = 0,
  nr = null,
  Ot = 0,
  _l = 0,
  qi = 0,
  Fn = null,
  de = null,
  bi = 0,
  an = 1 / 0,
  Ve = null,
  sl = !1,
  ri = null,
  ft = null,
  Rr = !1,
  lt = null,
  cl = 0,
  Un = 0,
  li = null,
  Ar = -1,
  Br = 0;
function se() {
  return M & 6 ? K() : Ar !== -1 ? Ar : (Ar = K());
}
function dt(e) {
  return e.mode & 1
    ? M & 2 && ne !== 0
      ? ne & -ne
      : Gd.transition !== null
      ? (Br === 0 && (Br = ss()), Br)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vs(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Un) throw ((Un = 0), (li = null), Error(w(185)));
  or(e, n, r),
    (!(M & 2) || e !== ee) &&
      (e === ee && (!(M & 2) && (_l |= n), J === 4 && nt(e, ne)),
      ve(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((an = K() + 500), kl && wt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  Gf(e, t);
  var r = Yr(e, e === ee ? ne : 0);
  if (r === 0)
    n !== null && Eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Eu(n), t === 1))
      e.tag === 0 ? Yd(ma.bind(null, e)) : Is(ma.bind(null, e)),
        Wd(function () {
          !(M & 6) && wt();
        }),
        (n = null);
    else {
      switch (cs(r)) {
        case 1:
          n = _i;
          break;
        case 4:
          n = us;
          break;
        case 16:
          n = Kr;
          break;
        case 536870912:
          n = as;
          break;
        default:
          n = Kr;
      }
      n = Mc(n, Nc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nc(e, t) {
  if (((Ar = -1), (Br = 0), M & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = Yr(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var o = Rc();
    (ee !== e || ne !== t) && ((Ve = null), (an = K() + 500), Nt(e, t));
    do
      try {
        hp();
        break;
      } catch (u) {
        Lc(e, u);
      }
    while (1);
    Ui(),
      (al.current = o),
      (M = l),
      G !== null ? (t = 0) : ((ee = null), (ne = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = zo(e)), l !== 0 && ((r = l), (t = oi(e, l)))), t === 1)
    )
      throw ((n = nr), Nt(e, 0), nt(e, r), ve(e, K()), n);
    if (t === 6) nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !dp(l) &&
          ((t = fl(e, r)),
          t === 2 && ((o = zo(e)), o !== 0 && ((r = o), (t = oi(e, o)))),
          t === 1))
      )
        throw ((n = nr), Nt(e, 0), nt(e, r), ve(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          Et(e, de, Ve);
          break;
        case 3:
          if (
            (nt(e, r), (r & 130023424) === r && ((t = bi + 500 - K()), 10 < t))
          ) {
            if (Yr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = $o(Et.bind(null, e, de, Ve), t);
            break;
          }
          Et(e, de, Ve);
          break;
        case 4:
          if ((nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Me(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * fp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $o(Et.bind(null, e, de, Ve), r);
            break;
          }
          Et(e, de, Ve);
          break;
        case 5:
          Et(e, de, Ve);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return ve(e, K()), e.callbackNode === n ? Nc.bind(null, e) : null;
}
function oi(e, t) {
  var n = Fn;
  return (
    e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
    (e = fl(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && ii(t)),
    e
  );
}
function ii(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function dp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!De(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nt(e, t) {
  for (
    t &= ~qi,
      t &= ~_l,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Me(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ma(e) {
  if (M & 6) throw Error(w(327));
  en();
  var t = Yr(e, 0);
  if (!(t & 1)) return ve(e, K()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zo(e);
    r !== 0 && ((t = r), (n = oi(e, r)));
  }
  if (n === 1) throw ((n = nr), Nt(e, 0), nt(e, t), ve(e, K()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, de, Ve),
    ve(e, K()),
    null
  );
}
function eu(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((an = K() + 500), kl && wt());
  }
}
function jt(e) {
  lt !== null && lt.tag === 0 && !(M & 6) && en();
  var t = M;
  M |= 1;
  var n = Pe.transition,
    r = I;
  try {
    if (((Pe.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Pe.transition = n), (M = t), !(M & 6) && wt();
  }
}
function tu() {
  (ge = Gt.current), U(Gt);
}
function Nt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Vd(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((Ii(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qr();
          break;
        case 3:
          on(), U(he), U(ue), Hi();
          break;
        case 5:
          Wi(r);
          break;
        case 4:
          on();
          break;
        case 13:
          U(A);
          break;
        case 19:
          U(A);
          break;
        case 10:
          $i(r.type._context);
          break;
        case 22:
        case 23:
          tu();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (G = e = pt(e.current, null)),
    (ne = ge = t),
    (J = 0),
    (nr = null),
    (qi = _l = Ot = 0),
    (de = Fn = null),
    _t !== null)
  ) {
    for (t = 0; t < _t.length; t++)
      if (((n = _t[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    _t = null;
  }
  return e;
}
function Lc(e, t) {
  do {
    var n = G;
    try {
      if ((Ui(), (Fr.current = ul), il)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        ((zt = 0),
        (b = X = B = null),
        (In = !1),
        (bn = 0),
        (Zi.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (nr = t), (G = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = ne),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var d = h.alternate;
            d
              ? ((h.updateQueue = d.updateQueue),
                (h.memoizedState = d.memoizedState),
                (h.lanes = d.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var v = na(i);
          if (v !== null) {
            (v.flags &= -257),
              ra(v, i, u, o, t),
              v.mode & 1 && ta(o, s, t),
              (t = v),
              (a = s);
            var S = t.updateQueue;
            if (S === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ta(o, s, t), nu();
              break e;
            }
            a = Error(w(426));
          }
        } else if ($ && u.mode & 1) {
          var N = na(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              ra(N, i, u, o, t),
              Di(un(a, u));
            break e;
          }
        }
        (o = a = un(a, u)),
          J !== 4 && (J = 2),
          Fn === null ? (Fn = [o]) : Fn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = fc(o, a, t);
              Gu(o, f);
              break e;
            case 1:
              u = a;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (ft === null || !ft.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = dc(o, u, t);
                Gu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      zc(n);
    } catch (E) {
      (t = E), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Rc() {
  var e = al.current;
  return (al.current = ul), e === null ? ul : e;
}
function nu() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    ee === null || (!(Ot & 268435455) && !(_l & 268435455)) || nt(ee, ne);
}
function fl(e, t) {
  var n = M;
  M |= 2;
  var r = Rc();
  (ee !== e || ne !== t) && ((Ve = null), Nt(e, t));
  do
    try {
      pp();
      break;
    } catch (l) {
      Lc(e, l);
    }
  while (1);
  if ((Ui(), (M = n), (al.current = r), G !== null)) throw Error(w(261));
  return (ee = null), (ne = 0), J;
}
function pp() {
  for (; G !== null; ) Tc(G);
}
function hp() {
  for (; G !== null && !$f(); ) Tc(G);
}
function Tc(e) {
  var t = jc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? zc(e) : (G = t),
    (Zi.current = null);
}
function zc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = up(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (G = null);
        return;
      }
    } else if (((n = ip(n, t, ge)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Et(e, t, n) {
  var r = I,
    l = Pe.transition;
  try {
    (Pe.transition = null), (I = 1), mp(e, t, n, r);
  } finally {
    (Pe.transition = l), (I = r);
  }
  return null;
}
function mp(e, t, n, r) {
  do en();
  while (lt !== null);
  if (M & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Xf(e, o),
    e === ee && ((G = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Rr ||
      ((Rr = !0),
      Mc(Kr, function () {
        return en(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Pe.transition), (Pe.transition = null);
    var i = I;
    I = 1;
    var u = M;
    (M |= 4),
      (Zi.current = null),
      sp(e, n),
      _c(n, e),
      Id(Fo),
      (Gr = !!Do),
      (Fo = Do = null),
      (e.current = n),
      cp(n),
      Af(),
      (M = u),
      (I = i),
      (Pe.transition = o);
  } else e.current = n;
  if (
    (Rr && ((Rr = !1), (lt = e), (cl = l)),
    (o = e.pendingLanes),
    o === 0 && (ft = null),
    Wf(n.stateNode),
    ve(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (sl) throw ((sl = !1), (e = ri), (ri = null), e);
  return (
    cl & 1 && e.tag !== 0 && en(),
    (o = e.pendingLanes),
    o & 1 ? (e === li ? Un++ : ((Un = 0), (li = e))) : (Un = 0),
    wt(),
    null
  );
}
function en() {
  if (lt !== null) {
    var e = cs(cl),
      t = Pe.transition,
      n = I;
    try {
      if (((Pe.transition = null), (I = 16 > e ? 16 : e), lt === null))
        var r = !1;
      else {
        if (((e = lt), (lt = null), (cl = 0), M & 6)) throw Error(w(331));
        var l = M;
        for (M |= 4, k = e.current; k !== null; ) {
          var o = k,
            i = o.child;
          if (k.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (k = s; k !== null; ) {
                  var h = k;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dn(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (k = m);
                  else
                    for (; k !== null; ) {
                      h = k;
                      var d = h.sibling,
                        v = h.return;
                      if ((xc(h), h === s)) {
                        k = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = v), (k = d);
                        break;
                      }
                      k = v;
                    }
                }
              }
              var S = o.alternate;
              if (S !== null) {
                var y = S.child;
                if (y !== null) {
                  S.child = null;
                  do {
                    var N = y.sibling;
                    (y.sibling = null), (y = N);
                  } while (y !== null);
                }
              }
              k = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (k = i);
          else
            e: for (; k !== null; ) {
              if (((o = k), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (k = f);
                break e;
              }
              k = o.return;
            }
        }
        var c = e.current;
        for (k = c; k !== null; ) {
          i = k;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (k = p);
          else
            e: for (i = c; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, u);
                  }
                } catch (E) {
                  W(u, u.return, E);
                }
              if (u === i) {
                k = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (k = g);
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((M = l), wt(), Ae && typeof Ae.onPostCommitFiberRoot == "function")
        )
          try {
            Ae.onPostCommitFiberRoot(vl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Pe.transition = t);
    }
  }
  return !1;
}
function va(e, t, n) {
  (t = un(n, t)),
    (t = fc(e, t, 1)),
    (e = ct(e, t, 1)),
    (t = se()),
    e !== null && (or(e, 1, t), ve(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) va(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        va(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ft === null || !ft.has(r)))
        ) {
          (e = un(n, e)),
            (e = dc(t, e, 1)),
            (t = ct(t, e, 1)),
            (e = se()),
            t !== null && (or(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (J === 4 || (J === 3 && (ne & 130023424) === ne && 500 > K() - bi)
        ? Nt(e, 0)
        : (qi |= n)),
    ve(e, t);
}
function Oc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wr), (wr <<= 1), !(wr & 130023424) && (wr = 4194304))
      : (t = 1));
  var n = se();
  (e = Xe(e, t)), e !== null && (or(e, t, n), ve(e, n));
}
function gp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Oc(e, n);
}
function yp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), Oc(e, n);
}
var jc;
jc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), op(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), $ && t.flags & 1048576 && Ds(t, tl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      $r(e, t), (e = t.pendingProps);
      var l = nn(t, ue.current);
      bt(t, n), (l = Ki(null, t, r, e, l, n));
      var o = Yi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            me(r) ? ((o = !0), br(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Bi(t),
            (l.updater = xl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ko(t, r, e, n),
            (t = Xo(null, t, r, !0, o, n)))
          : ((t.tag = 0), $ && o && Mi(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($r(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Sp(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = Go(null, t, r, e, n);
            break e;
          case 1:
            t = ia(null, t, r, e, n);
            break e;
          case 11:
            t = la(null, t, r, e, n);
            break e;
          case 14:
            t = oa(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Go(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        ia(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((vc(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          As(e, t),
          ll(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = un(Error(w(423)), t)), (t = ua(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = un(Error(w(424)), t)), (t = ua(e, t, r, n, l));
            break e;
          } else
            for (
              ye = st(t.stateNode.containerInfo.firstChild),
                we = t,
                $ = !0,
                je = null,
                n = Hs(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rn(), r === l)) {
            t = Je(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Qs(t),
        e === null && Wo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Uo(r, l) ? (i = null) : o !== null && Uo(r, o) && (t.flags |= 32),
        mc(e, t),
        ae(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Wo(t), null;
    case 13:
      return gc(e, t, n);
    case 4:
      return (
        Vi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ln(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        la(e, t, r, l, n)
      );
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          D(nl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (De(o.value, i)) {
            if (o.children === l.children && !he.current) {
              t = Je(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Ke(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var h = s.pending;
                        h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Ho(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(w(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Ho(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ae(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        bt(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        oa(e, t, r, l, n)
      );
    case 15:
      return pc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        $r(e, t),
        (t.tag = 1),
        me(r) ? ((e = !0), br(t)) : (e = !1),
        bt(t, n),
        Vs(t, r, l),
        Ko(t, r, l, n),
        Xo(null, t, r, !0, e, n)
      );
    case 19:
      return yc(e, t, n);
    case 22:
      return hc(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function Mc(e, t) {
  return is(e, t);
}
function wp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function _e(e, t, n, r) {
  return new wp(e, t, n, r);
}
function ru(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sp(e) {
  if (typeof e == "function") return ru(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === xi)) return 11;
    if (e === Ei) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) ru(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Ut:
        return Lt(n.children, l, o, t);
      case ki:
        (i = 8), (l |= 8);
        break;
      case vo:
        return (
          (e = _e(12, n, t, l | 2)), (e.elementType = vo), (e.lanes = o), e
        );
      case go:
        return (e = _e(13, n, t, l)), (e.elementType = go), (e.lanes = o), e;
      case yo:
        return (e = _e(19, n, t, l)), (e.elementType = yo), (e.lanes = o), e;
      case Wa:
        return Pl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ba:
              i = 10;
              break e;
            case Va:
              i = 9;
              break e;
            case xi:
              i = 11;
              break e;
            case Ei:
              i = 14;
              break e;
            case be:
              (i = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = _e(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Lt(e, t, n, r) {
  return (e = _e(7, e, r, t)), (e.lanes = n), e;
}
function Pl(e, t, n, r) {
  return (
    (e = _e(22, e, r, t)),
    (e.elementType = Wa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function oo(e, t, n) {
  return (e = _e(6, e, null, t)), (e.lanes = n), e;
}
function io(e, t, n) {
  return (
    (t = _e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function kp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Al(0)),
    (this.expirationTimes = Al(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Al(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function lu(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new kp(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = _e(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bi(o),
    e
  );
}
function xp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ft,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ic(e) {
  if (!e) return vt;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return Ms(e, n, t);
  }
  return t;
}
function Dc(e, t, n, r, l, o, i, u, a) {
  return (
    (e = lu(n, r, !0, e, l, o, i, u, a)),
    (e.context = Ic(null)),
    (n = e.current),
    (r = se()),
    (l = dt(n)),
    (o = Ke(r, l)),
    (o.callback = t ?? null),
    ct(n, o, l),
    (e.current.lanes = l),
    or(e, l, r),
    ve(e, r),
    e
  );
}
function Nl(e, t, n, r) {
  var l = t.current,
    o = se(),
    i = dt(l);
  return (
    (n = Ic(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ct(l, t, i)),
    e !== null && (Ie(e, l, i, o), Dr(e, l, i)),
    i
  );
}
function dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ga(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ou(e, t) {
  ga(e, t), (e = e.alternate) && ga(e, t);
}
function Ep() {
  return null;
}
var Fc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function iu(e) {
  this._internalRoot = e;
}
Ll.prototype.render = iu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Nl(e, t, null, null);
};
Ll.prototype.unmount = iu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jt(function () {
      Nl(null, e, null, null);
    }),
      (t[Ge] = null);
  }
};
function Ll(e) {
  this._internalRoot = e;
}
Ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ps();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++);
    tt.splice(n, 0, e), n === 0 && ms(e);
  }
};
function uu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ya() {}
function Cp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = dl(i);
        o.call(s);
      };
    }
    var i = Dc(t, r, e, 0, null, !1, !1, "", ya);
    return (
      (e._reactRootContainer = i),
      (e[Ge] = i.current),
      Gn(e.nodeType === 8 ? e.parentNode : e),
      jt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = dl(a);
      u.call(s);
    };
  }
  var a = lu(e, 0, !1, null, null, !1, !1, "", ya);
  return (
    (e._reactRootContainer = a),
    (e[Ge] = a.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    jt(function () {
      Nl(t, a, n, r);
    }),
    a
  );
}
function Tl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = dl(i);
        u.call(a);
      };
    }
    Nl(t, i, e, l);
  } else i = Cp(n, t, e, l, r);
  return dl(i);
}
fs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nn(t.pendingLanes);
        n !== 0 &&
          (Pi(t, n | 1), ve(t, K()), !(M & 6) && ((an = K() + 500), wt()));
      }
      break;
    case 13:
      jt(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          Ie(r, e, 1, l);
        }
      }),
        ou(e, 1);
  }
};
Ni = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      Ie(t, e, 134217728, n);
    }
    ou(e, 134217728);
  }
};
ds = function (e) {
  if (e.tag === 13) {
    var t = dt(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = se();
      Ie(n, e, t, r);
    }
    ou(e, t);
  }
};
ps = function () {
  return I;
};
hs = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
Lo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ko(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Sl(r);
            if (!l) throw Error(w(90));
            Qa(r), ko(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ya(e, n);
      break;
    case "select":
      (t = n.value), t != null && Xt(e, !!n.multiple, t, !1);
  }
};
es = eu;
ts = jt;
var _p = { usingClientEntryPoint: !1, Events: [ur, Vt, Sl, qa, ba, eu] },
  Cn = {
    findFiberByHostInstance: Ct,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Pp = {
    bundleType: Cn.bundleType,
    version: Cn.version,
    rendererPackageName: Cn.rendererPackageName,
    rendererConfig: Cn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ls(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Cn.findFiberByHostInstance || Ep,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tr.isDisabled && Tr.supportsFiber)
    try {
      (vl = Tr.inject(Pp)), (Ae = Tr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _p;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!uu(t)) throw Error(w(200));
  return xp(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!uu(e)) throw Error(w(299));
  var n = !1,
    r = "",
    l = Fc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = lu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ge] = t.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    new iu(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = ls(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return jt(e);
};
ke.hydrate = function (e, t, n) {
  if (!Rl(t)) throw Error(w(200));
  return Tl(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!uu(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Fc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Dc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ge] = t.current),
    Gn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ll(t);
};
ke.render = function (e, t, n) {
  if (!Rl(t)) throw Error(w(200));
  return Tl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!Rl(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (jt(function () {
        Tl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ge] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = eu;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Rl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Tl(e, t, n, !1, r);
};
ke.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = ke);
})(Ef);
var wa = po;
(fo.createRoot = wa.createRoot), (fo.hydrateRoot = wa.hydrateRoot);
/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rr() {
  return (
    (rr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rr.apply(this, arguments)
  );
}
var ot;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ot || (ot = {}));
const Sa = "popstate";
function Np(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return ui(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : pl(l);
  }
  return Rp(t, n, null, e);
}
function Z(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function au(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Lp() {
  return Math.random().toString(36).substr(2, 8);
}
function ka(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ui(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    rr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? dn(t) : t,
      { state: n, key: (t && t.key) || r || Lp() }
    )
  );
}
function pl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function dn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Rp(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = ot.Pop,
    a = null,
    s = h();
  s == null && ((s = 0), i.replaceState(rr({}, i.state, { idx: s }), ""));
  function h() {
    return (i.state || { idx: null }).idx;
  }
  function m() {
    u = ot.Pop;
    let N = h(),
      f = N == null ? null : N - s;
    (s = N), a && a({ action: u, location: y.location, delta: f });
  }
  function d(N, f) {
    u = ot.Push;
    let c = ui(y.location, N, f);
    n && n(c, N), (s = h() + 1);
    let p = ka(c, s),
      g = y.createHref(c);
    try {
      i.pushState(p, "", g);
    } catch {
      l.location.assign(g);
    }
    o && a && a({ action: u, location: y.location, delta: 1 });
  }
  function v(N, f) {
    u = ot.Replace;
    let c = ui(y.location, N, f);
    n && n(c, N), (s = h());
    let p = ka(c, s),
      g = y.createHref(c);
    i.replaceState(p, "", g),
      o && a && a({ action: u, location: y.location, delta: 0 });
  }
  function S(N) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof N == "string" ? N : pl(N);
    return (
      Z(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let y = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(N) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Sa, m),
        (a = N),
        () => {
          l.removeEventListener(Sa, m), (a = null);
        }
      );
    },
    createHref(N) {
      return t(l, N);
    },
    createURL: S,
    encodeLocation(N) {
      let f = S(N);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: d,
    replace: v,
    go(N) {
      return i.go(N);
    },
  };
  return y;
}
var xa;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(xa || (xa = {}));
function Tp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? dn(t) : t,
    l = su(r.pathname || "/", n);
  if (l == null) return null;
  let o = Uc(e);
  zp(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = Ap(o[u], Wp(l));
  return i;
}
function Uc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || "" : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (Z(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = ht([r, a.relativePath]),
      h = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (Z(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      Uc(o.children, t, h, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: Up(s, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === "" || !((u = o.path) != null && u.includes("?"))) l(o, i);
      else for (let a of $c(o.path)) l(o, i, a);
    }),
    t
  );
}
function $c(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = $c(r.join("/")),
    u = [];
  return (
    u.push(...i.map((a) => (a === "" ? o : [o, a].join("/")))),
    l && u.push(...i),
    u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function zp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : $p(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Op = /^:\w+$/,
  jp = 3,
  Mp = 2,
  Ip = 1,
  Dp = 10,
  Fp = -2,
  Ea = (e) => e === "*";
function Up(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ea) && (r += Fp),
    t && (r += Mp),
    n
      .filter((l) => !Ea(l))
      .reduce((l, o) => l + (Op.test(o) ? jp : o === "" ? Ip : Dp), r)
  );
}
function $p(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ap(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      h = Bp(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let m = u.route;
    o.push({
      params: r,
      pathname: ht([l, h.pathname]),
      pathnameBase: Yp(ht([l, h.pathnameBase])),
      route: m,
    }),
      h.pathnameBase !== "/" && (l = ht([l, h.pathnameBase]));
  }
  return o;
}
function Bp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Vp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((s, h, m) => {
      if (h === "*") {
        let d = u[m] || "";
        i = o.slice(0, o.length - d.length).replace(/(.)\/+$/, "$1");
      }
      return (s[h] = Hp(u[m] || "", h)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Vp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    au(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Wp(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      au(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Hp(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      au(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function su(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Qp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? dn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Kp(n, t)) : t,
    search: Gp(r),
    hash: Xp(l),
  };
}
function Kp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function uo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ac(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Bc(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = dn(e))
    : ((l = rr({}, e)),
      Z(
        !l.pathname || !l.pathname.includes("?"),
        uo("?", "pathname", "search", l)
      ),
      Z(
        !l.pathname || !l.pathname.includes("#"),
        uo("#", "pathname", "hash", l)
      ),
      Z(!l.search || !l.search.includes("#"), uo("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let m = t.length - 1;
    if (i.startsWith("..")) {
      let d = i.split("/");
      for (; d[0] === ".."; ) d.shift(), (m -= 1);
      l.pathname = d.join("/");
    }
    u = m >= 0 ? t[m] : "/";
  }
  let a = Qp(l, u),
    s = i && i !== "/" && i.endsWith("/"),
    h = (o || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || h) && (a.pathname += "/"), a;
}
const ht = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Yp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Gp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Xp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Jp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const qp = typeof Object.is == "function" ? Object.is : Zp,
  { useState: bp, useEffect: eh, useLayoutEffect: th, useDebugValue: nh } = co;
function rh(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = bp({ inst: { value: r, getSnapshot: t } });
  return (
    th(() => {
      (l.value = r), (l.getSnapshot = t), ao(l) && o({ inst: l });
    }, [e, r, t]),
    eh(
      () => (
        ao(l) && o({ inst: l }),
        e(() => {
          ao(l) && o({ inst: l });
        })
      ),
      [e]
    ),
    nh(r),
    r
  );
}
function ao(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !qp(n, r);
  } catch {
    return !0;
  }
}
function lh(e, t, n) {
  return t();
}
const oh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ih = !oh,
  uh = ih ? lh : rh;
"useSyncExternalStore" in co && ((e) => e.useSyncExternalStore)(co);
const Vc = x.createContext(null),
  Wc = x.createContext(null),
  sr = x.createContext(null),
  zl = x.createContext(null),
  pn = x.createContext({ outlet: null, matches: [] }),
  Hc = x.createContext(null);
function ai() {
  return (
    (ai = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ai.apply(this, arguments)
  );
}
function ah(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  cr() || Z(!1);
  let { basename: r, navigator: l } = x.useContext(sr),
    { hash: o, pathname: i, search: u } = Kc(e, { relative: n }),
    a = i;
  return (
    r !== "/" && (a = i === "/" ? r : ht([r, i])),
    l.createHref({ pathname: a, search: u, hash: o })
  );
}
function cr() {
  return x.useContext(zl) != null;
}
function fr() {
  return cr() || Z(!1), x.useContext(zl).location;
}
function Qc() {
  cr() || Z(!1);
  let { basename: e, navigator: t } = x.useContext(sr),
    { matches: n } = x.useContext(pn),
    { pathname: r } = fr(),
    l = JSON.stringify(Ac(n).map((u) => u.pathnameBase)),
    o = x.useRef(!1);
  return (
    x.useEffect(() => {
      o.current = !0;
    }),
    x.useCallback(
      function (u, a) {
        if ((a === void 0 && (a = {}), !o.current)) return;
        if (typeof u == "number") {
          t.go(u);
          return;
        }
        let s = Bc(u, JSON.parse(l), r, a.relative === "path");
        e !== "/" &&
          (s.pathname = s.pathname === "/" ? e : ht([e, s.pathname])),
          (a.replace ? t.replace : t.push)(s, a.state, a);
      },
      [e, t, l, r]
    )
  );
}
function Kc(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = x.useContext(pn),
    { pathname: l } = fr(),
    o = JSON.stringify(Ac(r).map((i) => i.pathnameBase));
  return x.useMemo(() => Bc(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function sh(e, t) {
  cr() || Z(!1);
  let { navigator: n } = x.useContext(sr),
    r = x.useContext(Wc),
    { matches: l } = x.useContext(pn),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let a = fr(),
    s;
  if (t) {
    var h;
    let y = typeof t == "string" ? dn(t) : t;
    u === "/" || ((h = y.pathname) != null && h.startsWith(u)) || Z(!1),
      (s = y);
  } else s = a;
  let m = s.pathname || "/",
    d = u === "/" ? m : m.slice(u.length) || "/",
    v = Tp(e, { pathname: d }),
    S = ph(
      v &&
        v.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: ht([
              u,
              n.encodeLocation
                ? n.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? u
                : ht([
                    u,
                    n.encodeLocation
                      ? n.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      l,
      r || void 0
    );
  return t && S
    ? x.createElement(
        zl.Provider,
        {
          value: {
            location: ai(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: ot.Pop,
          },
        },
        S
      )
    : S;
}
function ch() {
  let e = gh(),
    t = Jp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: l }, n) : null,
    o
  );
}
class fh extends x.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? x.createElement(
          pn.Provider,
          { value: this.props.routeContext },
          x.createElement(Hc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function dh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = x.useContext(Vc);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(pn.Provider, { value: t }, r)
  );
}
function ph(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = r.findIndex(
      (i) => i.route.id && (l == null ? void 0 : l[i.route.id])
    );
    o >= 0 || Z(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, i, u) => {
    let a = i.route.id ? (l == null ? void 0 : l[i.route.id]) : null,
      s = null;
    n &&
      (i.route.ErrorBoundary
        ? (s = x.createElement(i.route.ErrorBoundary, null))
        : i.route.errorElement
        ? (s = i.route.errorElement)
        : (s = x.createElement(ch, null)));
    let h = t.concat(r.slice(0, u + 1)),
      m = () => {
        let d = o;
        return (
          a
            ? (d = s)
            : i.route.Component
            ? (d = x.createElement(i.route.Component, null))
            : i.route.element && (d = i.route.element),
          x.createElement(dh, {
            match: i,
            routeContext: { outlet: o, matches: h },
            children: d,
          })
        );
      };
    return n && (i.route.ErrorBoundary || i.route.errorElement || u === 0)
      ? x.createElement(fh, {
          location: n.location,
          component: s,
          error: a,
          children: m(),
          routeContext: { outlet: null, matches: h },
        })
      : m();
  }, null);
}
var Ca;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(Ca || (Ca = {}));
var hl;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(hl || (hl = {}));
function hh(e) {
  let t = x.useContext(Wc);
  return t || Z(!1), t;
}
function mh(e) {
  let t = x.useContext(pn);
  return t || Z(!1), t;
}
function vh(e) {
  let t = mh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Z(!1), n.route.id;
}
function gh() {
  var e;
  let t = x.useContext(Hc),
    n = hh(hl.UseRouteError),
    r = vh(hl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function si(e) {
  Z(!1);
}
function yh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ot.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  cr() && Z(!1);
  let u = t.replace(/^\/*/, "/"),
    a = x.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = dn(r));
  let {
      pathname: s = "/",
      search: h = "",
      hash: m = "",
      state: d = null,
      key: v = "default",
    } = r,
    S = x.useMemo(() => {
      let y = su(s, u);
      return y == null
        ? null
        : {
            location: { pathname: y, search: h, hash: m, state: d, key: v },
            navigationType: l,
          };
    }, [u, s, h, m, d, v, l]);
  return S == null
    ? null
    : x.createElement(
        sr.Provider,
        { value: a },
        x.createElement(zl.Provider, { children: n, value: S })
      );
}
function wh(e) {
  let { children: t, location: n } = e,
    r = x.useContext(Vc),
    l = r && !t ? r.router.routes : ci(t);
  return sh(l, n);
}
var _a;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(_a || (_a = {}));
new Promise(() => {});
function ci(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, l) => {
      if (!x.isValidElement(r)) return;
      if (r.type === x.Fragment) {
        n.push.apply(n, ci(r.props.children, t));
        return;
      }
      r.type !== si && Z(!1), !r.props.index || !r.props.children || Z(!1);
      let o = [...t, l],
        i = {
          id: r.props.id || o.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary:
            r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy,
        };
      r.props.children && (i.children = ci(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fi() {
  return (
    (fi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fi.apply(this, arguments)
  );
}
function Sh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function kh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function xh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !kh(e);
}
const Eh = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function Ch(e) {
  let { basename: t, children: n, window: r } = e,
    l = x.useRef();
  l.current == null && (l.current = Np({ window: r, v5Compat: !0 }));
  let o = l.current,
    [i, u] = x.useState({ action: o.action, location: o.location });
  return (
    x.useLayoutEffect(() => o.listen(u), [o]),
    x.createElement(yh, {
      basename: t,
      children: n,
      location: i.location,
      navigationType: i.action,
      navigator: o,
    })
  );
}
const _h =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ph = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  so = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: a,
        to: s,
        preventScrollReset: h,
      } = t,
      m = Sh(t, Eh),
      { basename: d } = x.useContext(sr),
      v,
      S = !1;
    if (typeof s == "string" && Ph.test(s) && ((v = s), _h)) {
      let c = new URL(window.location.href),
        p = s.startsWith("//") ? new URL(c.protocol + s) : new URL(s),
        g = su(p.pathname, d);
      p.origin === c.origin && g != null
        ? (s = g + p.search + p.hash)
        : (S = !0);
    }
    let y = ah(s, { relative: l }),
      N = Nh(s, {
        replace: i,
        state: u,
        target: a,
        preventScrollReset: h,
        relative: l,
      });
    function f(c) {
      r && r(c), c.defaultPrevented || N(c);
    }
    return x.createElement(
      "a",
      fi({}, m, { href: v || y, onClick: S || o ? r : f, ref: n, target: a })
    );
  });
var Pa;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Pa || (Pa = {}));
var Na;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Na || (Na = {}));
function Nh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    u = Qc(),
    a = fr(),
    s = Kc(e, { relative: i });
  return x.useCallback(
    (h) => {
      if (xh(h, n)) {
        h.preventDefault();
        let m = r !== void 0 ? r : pl(a) === pl(s);
        u(e, { replace: m, state: l, preventScrollReset: o, relative: i });
      }
    },
    [a, u, s, r, l, n, e, o, i]
  );
}
const Lh = "/assets/download-74b78f19.png",
  Rh = "/assets/logo-d2900685.svg",
  Th = "/assets/preview-35b286f0.png",
  La = [
    "an armchair in the shape of an avocado",
    "surreal logo for my dogs page",
    "teddy bears shopping for groceries in Japan, ukiyo-e",
    "an oil painting by Matisse of a humanoid robot playing chess",
    "panda mad scientist mixing sparkling chemicals, digital art",
    "a macro 35mm photograph of two mice in Hawaii, they're each wearing tiny swimsuits and are carrying tiny surf boards, digital art",
    "3D render of a cute tropical fish in an aquarium on a dark blue background, digital art",
    "an astronaut lounging in a tropical resort in space, vaporwave",
    "an oil painting portrait of a capybara wearing medieval royal robes and an ornate crown on a dark background",
    "a stained glass window depicting a hamburger and french fries",
    "a pencil and watercolor drawing of a bright city in the future with flying cars",
    "a sunlit indoor lounge area with a pool with clear water and another pool with translucent pastel pink water, next to a big window, digital art",
    "a fortune-telling shiba inu reading your fate in a giant hamburger, digital art",
    '"a sea otter with a pearl earring" by Johannes Vermeer',
    "an oil pastel drawing of an annoyed cat in a spaceship",
    "a painting of a fox in the style of Starry Night",
    "a bowl of soup that looks like a monster, knitted out of wool",
    "A plush toy robot sitting against a yellow wall",
    "A synthwave style sunset above the reflecting water of the sea, digital art",
    "Two futuristic towers with a skybridge covered in lush foliage, digital art",
    "A 3D render of a rainbow colored hot air balloon flying above a reflective lake",
    "A comic book cover of a superhero wearing headphones",
    "A centered explosion of colorful powder on a black background",
    "A photo of a Samoyed dog with its tongue out hugging a white Siamese cat",
    "A photo of a white fur monster standing in a purple room",
    "A photo of Michelangelo's sculpture of David wearing headphones djing",
    "A Samurai riding a Horse on Mars, lomography.",
    "A modern, sleek Cadillac drives along the Gardiner expressway with downtown Toronto in the background, with a lens flare, 50mm photography",
    "A realistic photograph of a young woman with blue eyes and blonde hair",
    "A man standing in front of a stargate to another dimension",
    "Spongebob Squarepants in the Blair Witch Project",
    "A velociraptor working at a hotdog stand, lomography",
    "A man walking through the bustling streets of Kowloon at night, lit by many bright neon shop signs, 50mm lens",
    "A BBQ that is alive, in the style of a Pixar animated movie",
    "A futuristic cyborg dance club, neon lights",
    "The long-lost Star Wars 1990 Japanese Anime",
    "A hamburger in the shape of a Rubik’s cube, professional food photography",
    "A Synthwave Hedgehog, Blade Runner Cyberpunk",
    "An astronaut encountering an alien life form on a distant planet, photography",
    "A Dinosaur exploring Cape Town, photography",
    "A Man falling in Love with his Computer, digital art",
    "A photograph of a cyborg exploring Tokyo at night, lomography",
    "Dracula walking down the street of New York City in the 1920s, black and white photography",
    "Synthwave aeroplane",
    "A man wanders through the rainy streets of Tokyo, with bright neon signs, 50mm",
    "A Space Shuttle flying above Cape Town, digital art",
  ];
var di = {},
  zh = {
    get exports() {
      return di;
    },
    set exports(e) {
      di = e;
    },
  };
(function (e, t) {
  (function (n, r) {
    r();
  })(vn, function () {
    function n(s, h) {
      return (
        typeof h > "u"
          ? (h = { autoBom: !1 })
          : typeof h != "object" &&
            (console.warn("Deprecated: Expected third argument to be a object"),
            (h = { autoBom: !h })),
        h.autoBom &&
        /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
          s.type
        )
          ? new Blob(["\uFEFF", s], { type: s.type })
          : s
      );
    }
    function r(s, h, m) {
      var d = new XMLHttpRequest();
      d.open("GET", s),
        (d.responseType = "blob"),
        (d.onload = function () {
          a(d.response, h, m);
        }),
        (d.onerror = function () {
          console.error("could not download file");
        }),
        d.send();
    }
    function l(s) {
      var h = new XMLHttpRequest();
      h.open("HEAD", s, !1);
      try {
        h.send();
      } catch {}
      return 200 <= h.status && 299 >= h.status;
    }
    function o(s) {
      try {
        s.dispatchEvent(new MouseEvent("click"));
      } catch {
        var h = document.createEvent("MouseEvents");
        h.initMouseEvent(
          "click",
          !0,
          !0,
          window,
          0,
          0,
          0,
          80,
          20,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
          s.dispatchEvent(h);
      }
    }
    var i =
        typeof window == "object" && window.window === window
          ? window
          : typeof self == "object" && self.self === self
          ? self
          : typeof vn == "object" && vn.global === vn
          ? vn
          : void 0,
      u =
        i.navigator &&
        /Macintosh/.test(navigator.userAgent) &&
        /AppleWebKit/.test(navigator.userAgent) &&
        !/Safari/.test(navigator.userAgent),
      a =
        i.saveAs ||
        (typeof window != "object" || window !== i
          ? function () {}
          : "download" in HTMLAnchorElement.prototype && !u
          ? function (s, h, m) {
              var d = i.URL || i.webkitURL,
                v = document.createElement("a");
              (h = h || s.name || "download"),
                (v.download = h),
                (v.rel = "noopener"),
                typeof s == "string"
                  ? ((v.href = s),
                    v.origin === location.origin
                      ? o(v)
                      : l(v.href)
                      ? r(s, h, m)
                      : o(v, (v.target = "_blank")))
                  : ((v.href = d.createObjectURL(s)),
                    setTimeout(function () {
                      d.revokeObjectURL(v.href);
                    }, 4e4),
                    setTimeout(function () {
                      o(v);
                    }, 0));
            }
          : "msSaveOrOpenBlob" in navigator
          ? function (s, h, m) {
              if (((h = h || s.name || "download"), typeof s != "string"))
                navigator.msSaveOrOpenBlob(n(s, m), h);
              else if (l(s)) r(s, h, m);
              else {
                var d = document.createElement("a");
                (d.href = s),
                  (d.target = "_blank"),
                  setTimeout(function () {
                    o(d);
                  });
              }
            }
          : function (s, h, m, d) {
              if (
                ((d = d || open("", "_blank")),
                d &&
                  (d.document.title = d.document.body.innerText =
                    "downloading..."),
                typeof s == "string")
              )
                return r(s, h, m);
              var v = s.type === "application/octet-stream",
                S = /constructor/i.test(i.HTMLElement) || i.safari,
                y = /CriOS\/[\d]+/.test(navigator.userAgent);
              if ((y || (v && S) || u) && typeof FileReader < "u") {
                var N = new FileReader();
                (N.onloadend = function () {
                  var p = N.result;
                  (p = y
                    ? p
                    : p.replace(/^data:[^;]*;/, "data:attachment/file;")),
                    d ? (d.location.href = p) : (location = p),
                    (d = null);
                }),
                  N.readAsDataURL(s);
              } else {
                var f = i.URL || i.webkitURL,
                  c = f.createObjectURL(s);
                d ? (d.location = c) : (location.href = c),
                  (d = null),
                  setTimeout(function () {
                    f.revokeObjectURL(c);
                  }, 4e4);
              }
            });
    (i.saveAs = a.saveAs = a), (e.exports = a);
  });
})(zh);
const Oh = di,
  Yc = (e) => {
    const t = Math.floor(Math.random() * La.length),
      n = La[t];
    return e.includes(n) ? Yc(e) : n;
  };
function jh(e, t) {
  Oh.saveAs(t, `download-${e}.jpg`);
}
const Mh = ({ _id: e, name: t, prompt: n, photo: r }) =>
    Y("div", {
      className:
        "rounded-xl group relative shadow-card hover:shadow-cardhover card",
      children: [
        R("img", {
          src: r,
          alt: n,
          className: "w-full h-auto object-cover rounded-xl",
        }),
        Y("div", {
          className:
            "group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md",
          children: [
            R("p", {
              className: "text-white text-md overflow-y-auto prompt",
              children: n,
            }),
            Y("div", {
              className: "mt-5 flex justify-between items-center gap-2",
              children: [
                Y("div", {
                  className: "flex items-center gap-2",
                  children: [
                    R("div", {
                      className:
                        "w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold",
                      children: t[0],
                    }),
                    R("p", { className: "text-white text-sm", children: t }),
                  ],
                }),
                R("button", {
                  type: "button",
                  onClick: () => jh(e, r),
                  className: "outline-none bg-transparent border-none",
                  children: R("img", {
                    src: Lh,
                    alt: "download",
                    className: "w-6 h-6 object-contain invert",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  pi = ({
    labelName: e,
    name: t,
    type: n,
    placeHolder: r,
    handleChange: l,
    isSurpriseMe: o,
    handleSurpriseMe: i,
    value: u,
  }) =>
    Y("div", {
      children: [
        Y("div", {
          className: "flex font-semibold items-center gap-2 mb-2",
          children: [
            R("label", {
              htmlFor: t,
              className: "block text-sm font-medium text-[#636363]",
              children: e,
            }),
            o &&
              R("button", {
                type: "button",
                className:
                  "font-semibold text-xs bg-[#ff6969] py-1 px-2 rounded-[5px] text-white shadow shadow-slate-50 hover:shadow-md",
                onClick: i,
                children: "Surprise Me",
              }),
          ],
        }),
        R("input", {
          type: n,
          id: t,
          name: t,
          placeholder: r,
          value: u,
          onChange: l,
          required: !0,
          className:
            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#646464] focus:border-[#828282] outline-none block s:min-w-[300px] xl:min-w-[500px] w-full p-3 shadow-inner shadow-black font-bold",
        }),
      ],
    }),
  Gc = () =>
    R("div", {
      role: "status",
      children: Y("svg", {
        "aria-hidden": "true",
        className:
          "inline w-10 h-10 mr-2 text-gray-200 animate-spin fill-[#6469ff]",
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          R("path", {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            fill: "currentColor",
          }),
          R("path", {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentFill",
          }),
        ],
      }),
    }),
  Ih = () => {
    const e = Qc(),
      [t, n] = x.useState({ name: "", prompt: "", photo: "" }),
      [r, l] = x.useState(!1),
      [o, i] = x.useState(!1),
      u = async () => {
        if (t.prompt && t.photo) {
          i(!0);
          try {
            await (
              await fetch(
                "https://pixel-dreams-9dip.onrender.com/api/v1/post",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(t),
                }
              )
            ).json(),
              e("/");
          } catch (m) {
            console.log(m);
          } finally {
            i(!1);
          }
        } else alert("Please enter a prompt and generate an image.");
      },
      a = (m) => {
        n({ ...t, [m.target.name]: m.target.value });
      },
      s = () => {
        const m = Yc([t.prompt]);
        n({ ...t, prompt: m });
      },
      h = async () => {
        if (t.prompt && t.name)
          try {
            l(!0);
            const d = await (
              await fetch(
                "https://pixel-dreams-9dip.onrender.com/api/v1/dalle",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ prompt: t.prompt }),
                }
              )
            ).json();
            n({ ...t, photo: `data:image/jpeg;base64,${d.photo}` });
          } catch (m) {
            alert(m);
          } finally {
            l(!1);
          }
        else alert("Please fill all fields.");
      };
    return R("div", {
      className: "flex justify-center items-center h-full",
      children: R("section", {
        className: "max-w-7xl mx-auto",
        children: Y("div", {
          className:
            "bg-gradient-to-r from-[#e9e9e9] to-[#f3f3f3] drop-shadow-lg rounded-lg shadow-md px-5 xs:px-20 py-10 mt-20 shadow-black ",
          children: [
            Y("div", {
              className: "px-5",
              children: [
                R("h1", {
                  className:
                    "font-extrabold text-[#333333] text-[32px] text-center",
                  children: "Create your Image",
                }),
                R("p", {
                  className:
                    "mt-2 font-roboto text-[#6f6f6f] text-[14px] text-center",
                  children:
                    "Type in a phrase or sentence and get a unique image that visually represents your text.",
                }),
              ],
            }),
            Y("form", {
              className: "mt-16 max-w-3x1 mx-auto",
              onSubmit: u,
              children: [
                Y("div", {
                  className: "font-serif flex flex-col gap-5 items-center ",
                  children: [
                    R(pi, {
                      labelName: "Your Name",
                      type: "text",
                      name: "name",
                      placeHolder: "John Doe",
                      value: t.name,
                      handleChange: a,
                      isSurpriseMe: !1,
                      handleSurpriseMe: function () {
                        throw new Error("Function not implemented.");
                      },
                    }),
                    R(pi, {
                      labelName: "Prompt",
                      type: "text",
                      name: "prompt",
                      placeHolder: "Amazing Logo",
                      value: t.prompt,
                      handleChange: a,
                      isSurpriseMe: !0,
                      handleSurpriseMe: s,
                    }),
                    Y("div", {
                      className: `flex justify-center item-center relative bg-gray-50 border\r
          border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#EA5455] w-72 p-3 h-72 shadow-inner shadow-black`,
                      children: [
                        t.photo
                          ? R("img", {
                              src: t.photo,
                              alt: t.prompt,
                              className: "w-full h-full object-contain",
                            })
                          : R("img", {
                              src: Th,
                              alt: "preview",
                              className: "h-32 w-32 opacity-40 mt-[60px]",
                            }),
                        r &&
                          R("div", {
                            className:
                              "absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg",
                            children: R(Gc, {}),
                          }),
                      ],
                    }),
                  ],
                }),
                R("div", {
                  className: "mt-5 flex gap-5 justify-center",
                  children: R("button", {
                    type: "button",
                    className:
                      "rounded-md bg-green-500 text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white font-semibold shadow-sm shadow-gray-900 hover:shadow-inner hover:shadow-gray-900 ",
                    onClick: h,
                    children: r ? "Generating..." : "Generate Image",
                  }),
                }),
                R("div", {
                  className: "mt-10 flex gap-5 justify-center",
                  children: R("button", {
                    className: `rounded-md bg-[#5f89fc] text-sm w-full sm:w-auto px-5 py-2.5 text-center text-white font-semibold shadow-sm shadow-gray-900 hover:shadow-inner hover:shadow-gray-900  ${
                      o || !t.photo ? "opacity-50 cursor-not-allowed" : ""
                    }`,
                    type: "submit",
                    onClick: u,
                    disabled: !t.photo || o,
                    children: o ? "Sharing..." : "Share with the community",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Ra = ({ data: e, title: t }) =>
    (e == null ? void 0 : e.length) > 0
      ? e.map((n) => R(Mh, { ...n }, n._id))
      : R("h2", {
          className: "mt-5 font-bold text-[#6469ff] text-xl uppercase",
          children: t,
        }),
  Dh = () => {
    const [e, t] = x.useState(!1),
      [n, r] = Rn.useState(null),
      [l, o] = x.useState(""),
      [i, u] = Rn.useState(null),
      [a, s] = Rn.useState(null);
    return (
      x.useEffect(() => {
        (async () => {
          t(!0);
          try {
            const d = await fetch(
              "https://pixel-dreams-9dip.onrender.com/api/v1/post",
              { method: "GET", headers: { "Content-Type": "application/json" } }
            );
            if (d.ok) {
              const v = await d.json();
              r(v.data.reverse());
            }
          } catch (d) {
            alert(d);
          } finally {
            t(!1);
          }
        })();
      }, []),
      Y("section", {
        className: "max-w-7xl mx-auto",
        children: [
          Y("div", {
            className: "pt-20",
            children: [
              R("h1", {
                className:
                  "font-extrabold text-[#333333] text-[32px] text-center",
                children: "Community Creations",
              }),
              R("h2", {
                className: "mt-2 text-[#6f6f6f] text-[14px] text-center",
                children:
                  "Pixel Dreams is an online tool that allows you to generate unique and creative images based on your text input thanks to DALL·E 2 API. It's a fun and creative way to generate images for social media, blog posts, presentations, and more. Give it a try and see what kind of unique images you can create!",
              }),
            ],
          }),
          R("div", {
            className: "mt-16 font-extrabold",
            children: R(pi, {
              type: "text",
              name: "text",
              placeHolder: "Search posts...",
              value: l,
              handleChange: (m) => {
                o(m.target.value),
                  s(
                    setTimeout(() => {
                      const d = n.filter(
                        (v) =>
                          v.name.toLowerCase().includes(l.toLowerCase()) ||
                          v.prompt.toLowerCase().includes(l.toLowerCase())
                      );
                      u(d);
                    }, 500)
                  );
              },
              isSurpriseMe: !1,
              handleSurpriseMe: function () {
                throw new Error("Function not implemented.");
              },
              labelName: "",
            }),
          }),
          R("div", {
            className: "mt-10",
            children: e
              ? R("div", {
                  className: "flex justify-center items-center",
                  children: R(Gc, {}),
                })
              : Y(xf, {
                  children: [
                    l &&
                      Y("h2", {
                        className: "font-medium text-[#666e75] text-x1 mb-3",
                        children: [
                          "Showing Results For",
                          Y("span", {
                            className: "text-[#333333]",
                            children: [" ", l],
                          }),
                        ],
                      }),
                    R("div", {
                      className:
                        "grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3",
                      children: l
                        ? R(Ra, { data: i, title: "No results found" })
                        : R(Ra, { data: n, title: "No posts found" }),
                    }),
                  ],
                }),
          }),
        ],
      })
    );
  },
  Fh = () => {
    const e = fr();
    return Y("header", {
      className:
        "w-full h-fit flex justify-between items-center bg-opacity-40 backdrop-filter backdrop-blur-sm bg-gray-50 sm:px-8 px-4 border-b border-gray-300 fixed top-0 left-0 right-0 z-10",
      children: [
        R(so, {
          to: "/",
          children: R("img", {
            className: "w-28 object-contain",
            src: Rh,
            alt: "logo",
          }),
        }),
        e.pathname === "/"
          ? R("div", {
              children: R(so, {
                to: "/createpost",
                className:
                  "font-roboto font-medium bg-[#EA5455] text-white px-4 py-3 rounded-md shadow-2xl shadow-gray-500 hover:bg-[#ff7f7f] mx-1",
                children: "Create",
              }),
            })
          : R("div", {
              children: R(so, {
                to: "/",
                className:
                  "font-roboto font-medium bg-[#002B5B] text-white shadow-2xl shadow-gray-500 hover:bg-[#3f5a78] px-4 py-3 rounded-md mx-1",
                children: "Home",
              }),
            }),
      ],
    });
  },
  Uh = () =>
    Y(Ch, {
      children: [
        R(Fh, {}),
        R("main", {
          className:
            "sm:p-8 px-4 py-8 w-full h-full min-h-screen bg-gradient-to-r from-[#E4DCCF] to-[#F3F1FF]",
          children: Y(wh, {
            children: [
              R(si, { path: "/", element: R(Dh, {}) }),
              R(si, { path: "/createpost", element: R(Ih, {}) }),
            ],
          }),
        }),
      ],
    });
fo.createRoot(document.getElementById("root")).render(
  R(Rn.StrictMode, { children: R(Uh, {}) })
);
