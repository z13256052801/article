import {
  requireJszip_min
} from "./chunk-N4MDBA4Y.js";
import {
  Color
} from "./chunk-C6KU37IV.js";
import {
  getDefaultExportFromCjs
} from "./chunk-GRK5WT62.js";

// node_modules/ranui/dist/index-1ffff466.js
(function(global = {}, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global.d3 = global.d3 || {});
})(globalThis, function(exports2) {
  var version = "4.12.0";
  var ascending = function(a2, b) {
    return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
  };
  var bisector = function(compare) {
    if (compare.length === 1)
      compare = ascendingComparator(compare);
    return {
      left: function(a2, x2, lo, hi) {
        if (lo == null)
          lo = 0;
        if (hi == null)
          hi = a2.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a2[mid], x2) < 0)
            lo = mid + 1;
          else
            hi = mid;
        }
        return lo;
      },
      right: function(a2, x2, lo, hi) {
        if (lo == null)
          lo = 0;
        if (hi == null)
          hi = a2.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a2[mid], x2) > 0)
            hi = mid;
          else
            lo = mid + 1;
        }
        return lo;
      }
    };
  };
  function ascendingComparator(f) {
    return function(d, x2) {
      return ascending(f(d), x2);
    };
  }
  var ascendingBisect = bisector(ascending);
  var bisectRight = ascendingBisect.right;
  var bisectLeft = ascendingBisect.left;
  var pairs = function(array2, f) {
    if (f == null)
      f = pair;
    var i = 0, n = array2.length - 1, p = array2[0], pairs2 = new Array(n < 0 ? 0 : n);
    while (i < n)
      pairs2[i] = f(p, p = array2[++i]);
    return pairs2;
  };
  function pair(a2, b) {
    return [a2, b];
  }
  var cross = function(values0, values1, reduce) {
    var n0 = values0.length, n1 = values1.length, values2 = new Array(n0 * n1), i0, i1, i, value0;
    if (reduce == null)
      reduce = pair;
    for (i0 = i = 0; i0 < n0; ++i0) {
      for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
        values2[i] = reduce(value0, values1[i1]);
      }
    }
    return values2;
  };
  var descending = function(a2, b) {
    return b < a2 ? -1 : b > a2 ? 1 : b >= a2 ? 0 : NaN;
  };
  var number = function(x2) {
    return x2 === null ? NaN : +x2;
  };
  var variance = function(values2, valueof) {
    var n = values2.length, m = 0, i = -1, mean2 = 0, value, delta, sum2 = 0;
    if (valueof == null) {
      while (++i < n) {
        if (!isNaN(value = number(values2[i]))) {
          delta = value - mean2;
          mean2 += delta / ++m;
          sum2 += delta * (value - mean2);
        }
      }
    } else {
      while (++i < n) {
        if (!isNaN(value = number(valueof(values2[i], i, values2)))) {
          delta = value - mean2;
          mean2 += delta / ++m;
          sum2 += delta * (value - mean2);
        }
      }
    }
    if (m > 1)
      return sum2 / (m - 1);
  };
  var deviation = function(array2, f) {
    var v = variance(array2, f);
    return v ? Math.sqrt(v) : v;
  };
  var extent = function(values2, valueof) {
    var n = values2.length, i = -1, value, min2, max2;
    if (valueof == null) {
      while (++i < n) {
        if ((value = values2[i]) != null && value >= value) {
          min2 = max2 = value;
          while (++i < n) {
            if ((value = values2[i]) != null) {
              if (min2 > value)
                min2 = value;
              if (max2 < value)
                max2 = value;
            }
          }
        }
      }
    } else {
      while (++i < n) {
        if ((value = valueof(values2[i], i, values2)) != null && value >= value) {
          min2 = max2 = value;
          while (++i < n) {
            if ((value = valueof(values2[i], i, values2)) != null) {
              if (min2 > value)
                min2 = value;
              if (max2 < value)
                max2 = value;
            }
          }
        }
      }
    }
    return [min2, max2];
  };
  var array = Array.prototype;
  var slice = array.slice;
  var map = array.map;
  var constant = function(x2) {
    return function() {
      return x2;
    };
  };
  var identity = function(x2) {
    return x2;
  };
  var sequence = function(start2, stop, step2) {
    start2 = +start2, stop = +stop, step2 = (n = arguments.length) < 2 ? (stop = start2, start2 = 0, 1) : n < 3 ? 1 : +step2;
    var i = -1, n = Math.max(0, Math.ceil((stop - start2) / step2)) | 0, range2 = new Array(n);
    while (++i < n) {
      range2[i] = start2 + i * step2;
    }
    return range2;
  };
  var e10 = Math.sqrt(50);
  var e5 = Math.sqrt(10);
  var e2 = Math.sqrt(2);
  var ticks = function(start2, stop, count2) {
    var reverse2, i = -1, n, ticks2, step2;
    stop = +stop, start2 = +start2, count2 = +count2;
    if (start2 === stop && count2 > 0)
      return [start2];
    if (reverse2 = stop < start2)
      n = start2, start2 = stop, stop = n;
    if ((step2 = tickIncrement(start2, stop, count2)) === 0 || !isFinite(step2))
      return [];
    if (step2 > 0) {
      start2 = Math.ceil(start2 / step2);
      stop = Math.floor(stop / step2);
      ticks2 = new Array(n = Math.ceil(stop - start2 + 1));
      while (++i < n)
        ticks2[i] = (start2 + i) * step2;
    } else {
      start2 = Math.floor(start2 * step2);
      stop = Math.ceil(stop * step2);
      ticks2 = new Array(n = Math.ceil(start2 - stop + 1));
      while (++i < n)
        ticks2[i] = (start2 - i) / step2;
    }
    if (reverse2)
      ticks2.reverse();
    return ticks2;
  };
  function tickIncrement(start2, stop, count2) {
    var step2 = (stop - start2) / Math.max(0, count2), power = Math.floor(Math.log(step2) / Math.LN10), error = step2 / Math.pow(10, power);
    return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
  }
  function tickStep(start2, stop, count2) {
    var step0 = Math.abs(stop - start2) / Math.max(0, count2), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
    if (error >= e10)
      step1 *= 10;
    else if (error >= e5)
      step1 *= 5;
    else if (error >= e2)
      step1 *= 2;
    return stop < start2 ? -step1 : step1;
  }
  var sturges = function(values2) {
    return Math.ceil(Math.log(values2.length) / Math.LN2) + 1;
  };
  var histogram = function() {
    var value = identity, domain = extent, threshold2 = sturges;
    function histogram2(data) {
      var i, n = data.length, x2, values2 = new Array(n);
      for (i = 0; i < n; ++i) {
        values2[i] = value(data[i], i, data);
      }
      var xz = domain(values2), x02 = xz[0], x12 = xz[1], tz = threshold2(values2, x02, x12);
      if (!Array.isArray(tz)) {
        tz = tickStep(x02, x12, tz);
        tz = sequence(Math.ceil(x02 / tz) * tz, Math.floor(x12 / tz) * tz, tz);
      }
      var m = tz.length;
      while (tz[0] <= x02)
        tz.shift(), --m;
      while (tz[m - 1] > x12)
        tz.pop(), --m;
      var bins = new Array(m + 1), bin;
      for (i = 0; i <= m; ++i) {
        bin = bins[i] = [];
        bin.x0 = i > 0 ? tz[i - 1] : x02;
        bin.x1 = i < m ? tz[i] : x12;
      }
      for (i = 0; i < n; ++i) {
        x2 = values2[i];
        if (x02 <= x2 && x2 <= x12) {
          bins[bisectRight(tz, x2, 0, m)].push(data[i]);
        }
      }
      return bins;
    }
    histogram2.value = function(_) {
      return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram2) : value;
    };
    histogram2.domain = function(_) {
      return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram2) : domain;
    };
    histogram2.thresholds = function(_) {
      return arguments.length ? (threshold2 = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram2) : threshold2;
    };
    return histogram2;
  };
  var threshold = function(values2, p, valueof) {
    if (valueof == null)
      valueof = number;
    if (!(n = values2.length))
      return;
    if ((p = +p) <= 0 || n < 2)
      return +valueof(values2[0], 0, values2);
    if (p >= 1)
      return +valueof(values2[n - 1], n - 1, values2);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values2[i0], i0, values2), value1 = +valueof(values2[i0 + 1], i0 + 1, values2);
    return value0 + (value1 - value0) * (i - i0);
  };
  var freedmanDiaconis = function(values2, min2, max2) {
    values2 = map.call(values2, number).sort(ascending);
    return Math.ceil(
      (max2 - min2) / (2 * (threshold(values2, 0.75) - threshold(values2, 0.25)) * Math.pow(values2.length, -1 / 3))
    );
  };
  var scott = function(values2, min2, max2) {
    return Math.ceil(
      (max2 - min2) / (3.5 * deviation(values2) * Math.pow(values2.length, -1 / 3))
    );
  };
  var max = function(values2, valueof) {
    var n = values2.length, i = -1, value, max2;
    if (valueof == null) {
      while (++i < n) {
        if ((value = values2[i]) != null && value >= value) {
          max2 = value;
          while (++i < n) {
            if ((value = values2[i]) != null && value > max2) {
              max2 = value;
            }
          }
        }
      }
    } else {
      while (++i < n) {
        if ((value = valueof(values2[i], i, values2)) != null && value >= value) {
          max2 = value;
          while (++i < n) {
            if ((value = valueof(values2[i], i, values2)) != null && value > max2) {
              max2 = value;
            }
          }
        }
      }
    }
    return max2;
  };
  var mean = function(values2, valueof) {
    var n = values2.length, m = n, i = -1, value, sum2 = 0;
    if (valueof == null) {
      while (++i < n) {
        if (!isNaN(value = number(values2[i])))
          sum2 += value;
        else
          --m;
      }
    } else {
      while (++i < n) {
        if (!isNaN(value = number(valueof(values2[i], i, values2))))
          sum2 += value;
        else
          --m;
      }
    }
    if (m)
      return sum2 / m;
  };
  var median = function(values2, valueof) {
    var n = values2.length, i = -1, value, numbers = [];
    if (valueof == null) {
      while (++i < n) {
        if (!isNaN(value = number(values2[i]))) {
          numbers.push(value);
        }
      }
    } else {
      while (++i < n) {
        if (!isNaN(value = number(valueof(values2[i], i, values2)))) {
          numbers.push(value);
        }
      }
    }
    return threshold(numbers.sort(ascending), 0.5);
  };
  var merge = function(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array2;
    while (++i < n)
      j += arrays[i].length;
    merged = new Array(j);
    while (--n >= 0) {
      array2 = arrays[n];
      m = array2.length;
      while (--m >= 0) {
        merged[--j] = array2[m];
      }
    }
    return merged;
  };
  var min = function(values2, valueof) {
    var n = values2.length, i = -1, value, min2;
    if (valueof == null) {
      while (++i < n) {
        if ((value = values2[i]) != null && value >= value) {
          min2 = value;
          while (++i < n) {
            if ((value = values2[i]) != null && min2 > value) {
              min2 = value;
            }
          }
        }
      }
    } else {
      while (++i < n) {
        if ((value = valueof(values2[i], i, values2)) != null && value >= value) {
          min2 = value;
          while (++i < n) {
            if ((value = valueof(values2[i], i, values2)) != null && min2 > value) {
              min2 = value;
            }
          }
        }
      }
    }
    return min2;
  };
  var permute = function(array2, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while (i--)
      permutes[i] = array2[indexes[i]];
    return permutes;
  };
  var scan = function(values2, compare) {
    if (!(n = values2.length))
      return;
    var n, i = 0, j = 0, xi, xj = values2[j];
    if (compare == null)
      compare = ascending;
    while (++i < n) {
      if (compare(xi = values2[i], xj) < 0 || compare(xj, xj) !== 0) {
        xj = xi, j = i;
      }
    }
    if (compare(xj, xj) === 0)
      return j;
  };
  var shuffle = function(array2, i0, i1) {
    var m = (i1 == null ? array2.length : i1) - (i0 = i0 == null ? 0 : +i0), t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array2[m + i0];
      array2[m + i0] = array2[i + i0];
      array2[i + i0] = t;
    }
    return array2;
  };
  var sum = function(values2, valueof) {
    var n = values2.length, i = -1, value, sum2 = 0;
    if (valueof == null) {
      while (++i < n) {
        if (value = +values2[i])
          sum2 += value;
      }
    } else {
      while (++i < n) {
        if (value = +valueof(values2[i], i, values2))
          sum2 += value;
      }
    }
    return sum2;
  };
  var transpose = function(matrix) {
    if (!(n = matrix.length))
      return [];
    for (var i = -1, m = min(matrix, length), transpose2 = new Array(m); ++i < m; ) {
      for (var j = -1, n, row = transpose2[i] = new Array(n); ++j < n; ) {
        row[j] = matrix[j][i];
      }
    }
    return transpose2;
  };
  function length(d) {
    return d.length;
  }
  var zip = function() {
    return transpose(arguments);
  };
  var slice$1 = Array.prototype.slice;
  var identity$1 = function(x2) {
    return x2;
  };
  var top = 1;
  var right = 2;
  var bottom = 3;
  var left = 4;
  var epsilon = 1e-6;
  function translateX(x2) {
    return "translate(" + (x2 + 0.5) + ",0)";
  }
  function translateY(y2) {
    return "translate(0," + (y2 + 0.5) + ")";
  }
  function number$1(scale) {
    return function(d) {
      return +scale(d);
    };
  }
  function center(scale) {
    var offset = Math.max(0, scale.bandwidth() - 1) / 2;
    if (scale.round())
      offset = Math.round(offset);
    return function(d) {
      return +scale(d) + offset;
    };
  }
  function entering() {
    return !this.__axis;
  }
  function axis(orient, scale) {
    var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, k2 = orient === top || orient === left ? -1 : 1, x2 = orient === left || orient === right ? "x" : "y", transform2 = orient === top || orient === bottom ? translateX : translateY;
    function axis2(context) {
      var values2 = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format = tickFormat2 == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$1 : tickFormat2, spacing = Math.max(tickSizeInner, 0) + tickPadding, range2 = scale.range(), range0 = +range2[0] + 0.5, range1 = +range2[range2.length - 1] + 0.5, position = (scale.bandwidth ? center : number$1)(scale.copy()), selection2 = context.selection ? context.selection() : context, path2 = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values2, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line2 = tick.select("line"), text2 = tick.select("text");
      path2 = path2.merge(
        path2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")
      );
      tick = tick.merge(tickEnter);
      line2 = line2.merge(
        tickEnter.append("line").attr("stroke", "#000").attr(x2 + "2", k2 * tickSizeInner)
      );
      text2 = text2.merge(
        tickEnter.append("text").attr("fill", "#000").attr(x2, k2 * spacing).attr(
          "dy",
          orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"
        )
      );
      if (context !== selection2) {
        path2 = path2.transition(context);
        tick = tick.transition(context);
        line2 = line2.transition(context);
        text2 = text2.transition(context);
        tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d) {
          return isFinite(d = position(d)) ? transform2(d) : this.getAttribute("transform");
        });
        tickEnter.attr("opacity", epsilon).attr("transform", function(d) {
          var p = this.parentNode.__axis;
          return transform2(p && isFinite(p = p(d)) ? p : position(d));
        });
      }
      tickExit.remove();
      path2.attr(
        "d",
        orient === left || orient == right ? "M" + k2 * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k2 * tickSizeOuter : "M" + range0 + "," + k2 * tickSizeOuter + "V0.5H" + range1 + "V" + k2 * tickSizeOuter
      );
      tick.attr("opacity", 1).attr("transform", function(d) {
        return transform2(position(d));
      });
      line2.attr(x2 + "2", k2 * tickSizeInner);
      text2.attr(x2, k2 * spacing).text(format);
      selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr(
        "text-anchor",
        orient === right ? "start" : orient === left ? "end" : "middle"
      );
      selection2.each(function() {
        this.__axis = position;
      });
    }
    axis2.scale = function(_) {
      return arguments.length ? (scale = _, axis2) : scale;
    };
    axis2.ticks = function() {
      return tickArguments = slice$1.call(arguments), axis2;
    };
    axis2.tickArguments = function(_) {
      return arguments.length ? (tickArguments = _ == null ? [] : slice$1.call(_), axis2) : tickArguments.slice();
    };
    axis2.tickValues = function(_) {
      return arguments.length ? (tickValues = _ == null ? null : slice$1.call(_), axis2) : tickValues && tickValues.slice();
    };
    axis2.tickFormat = function(_) {
      return arguments.length ? (tickFormat2 = _, axis2) : tickFormat2;
    };
    axis2.tickSize = function(_) {
      return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis2) : tickSizeInner;
    };
    axis2.tickSizeInner = function(_) {
      return arguments.length ? (tickSizeInner = +_, axis2) : tickSizeInner;
    };
    axis2.tickSizeOuter = function(_) {
      return arguments.length ? (tickSizeOuter = +_, axis2) : tickSizeOuter;
    };
    axis2.tickPadding = function(_) {
      return arguments.length ? (tickPadding = +_, axis2) : tickPadding;
    };
    return axis2;
  }
  function axisTop(scale) {
    return axis(top, scale);
  }
  function axisRight(scale) {
    return axis(right, scale);
  }
  function axisBottom(scale) {
    return axis(bottom, scale);
  }
  function axisLeft(scale) {
    return axis(left, scale);
  }
  var noop = { value: function() {
  } };
  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || t in _)
        throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }
  function Dispatch(_) {
    this._ = _;
  }
  function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0)
        name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t))
        throw new Error("unknown type: " + t);
      return { type: t, name };
    });
  }
  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
      if (arguments.length < 2) {
        while (++i < n)
          if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))
            return t;
        return;
      }
      if (callback != null && typeof callback !== "function")
        throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type)
          _[t] = set(_[t], typename.name, callback);
        else if (callback == null)
          for (t in _)
            _[t] = set(_[t], typename.name, null);
      }
      return this;
    },
    copy: function() {
      var copy2 = {}, _ = this._;
      for (var t in _)
        copy2[t] = _[t].slice();
      return new Dispatch(copy2);
    },
    call: function(type2, that) {
      if ((n = arguments.length - 2) > 0)
        for (var args = new Array(n), i = 0, n, t; i < n; ++i)
          args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type2))
        throw new Error("unknown type: " + type2);
      for (t = this._[type2], i = 0, n = t.length; i < n; ++i)
        t[i].value.apply(that, args);
    },
    apply: function(type2, that, args) {
      if (!this._.hasOwnProperty(type2))
        throw new Error("unknown type: " + type2);
      for (var t = this._[type2], i = 0, n = t.length; i < n; ++i)
        t[i].value.apply(that, args);
    }
  };
  function get(type2, name) {
    for (var i = 0, n = type2.length, c2; i < n; ++i) {
      if ((c2 = type2[i]).name === name) {
        return c2.value;
      }
    }
  }
  function set(type2, name, callback) {
    for (var i = 0, n = type2.length; i < n; ++i) {
      if (type2[i].name === name) {
        type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
        break;
      }
    }
    if (callback != null)
      type2.push({ name, value: callback });
    return type2;
  }
  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  var namespace = function(name) {
    var prefix2 = name += "", i = prefix2.indexOf(":");
    if (i >= 0 && (prefix2 = name.slice(0, i)) !== "xmlns")
      name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix2) ? { space: namespaces[prefix2], local: name } : name;
  };
  function creatorInherit(name) {
    return function() {
      var document2 = this.ownerDocument, uri = this.namespaceURI;
      return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  var creator = function(name) {
    var fullname = namespace(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  };
  var nextId = 0;
  function local$1() {
    return new Local();
  }
  function Local() {
    this._ = "@" + (++nextId).toString(36);
  }
  Local.prototype = local$1.prototype = {
    constructor: Local,
    get: function(node) {
      var id2 = this._;
      while (!(id2 in node))
        if (!(node = node.parentNode))
          return;
      return node[id2];
    },
    set: function(node, value) {
      return node[this._] = value;
    },
    remove: function(node) {
      return this._ in node && delete node[this._];
    },
    toString: function() {
      return this._;
    }
  };
  var matcher = function(selector2) {
    return function() {
      return this.matches(selector2);
    };
  };
  if (typeof document !== "undefined") {
    var element = document.documentElement;
    if (!element.matches) {
      var vendorMatches = element.webkitMatchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector;
      matcher = function(selector2) {
        return function() {
          return vendorMatches.call(this, selector2);
        };
      };
    }
  }
  var matcher$1 = matcher;
  var filterEvents = {};
  exports2.event = null;
  if (typeof document !== "undefined") {
    var element$1 = document.documentElement;
    if (!("onmouseenter" in element$1)) {
      filterEvents = { mouseenter: "mouseover", mouseleave: "mouseout" };
    }
  }
  function filterContextListener(listener, index2, group) {
    listener = contextListener(listener, index2, group);
    return function(event) {
      var related = event.relatedTarget;
      if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) {
        listener.call(this, event);
      }
    };
  }
  function contextListener(listener, index2, group) {
    return function(event1) {
      var event0 = exports2.event;
      exports2.event = event1;
      try {
        listener.call(this, this.__data__, index2, group);
      } finally {
        exports2.event = event0;
      }
    };
  }
  function parseTypenames$1(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0)
        name = t.slice(i + 1), t = t.slice(0, i);
      return { type: t, name };
    });
  }
  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on)
        return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.capture);
        } else {
          on[++i] = o;
        }
      }
      if (++i)
        on.length = i;
      else
        delete this.__on;
    };
  }
  function onAdd(typename, value, capture) {
    var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
    return function(d, i, group) {
      var on = this.__on, o, listener = wrap(value, i, group);
      if (on)
        for (var j = 0, m = on.length; j < m; ++j) {
          if ((o = on[j]).type === typename.type && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.capture);
            this.addEventListener(
              o.type,
              o.listener = listener,
              o.capture = capture
            );
            o.value = value;
            return;
          }
        }
      this.addEventListener(typename.type, listener, capture);
      o = {
        type: typename.type,
        name: typename.name,
        value,
        listener,
        capture
      };
      if (!on)
        this.__on = [o];
      else
        on.push(o);
    };
  }
  var selection_on = function(typename, value, capture) {
    var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on)
        for (var j = 0, m = on.length, o; j < m; ++j) {
          for (i = 0, o = on[j]; i < n; ++i) {
            if ((t = typenames[i]).type === o.type && t.name === o.name) {
              return o.value;
            }
          }
        }
      return;
    }
    on = value ? onAdd : onRemove;
    if (capture == null)
      capture = false;
    for (i = 0; i < n; ++i)
      this.each(on(typenames[i], value, capture));
    return this;
  };
  function customEvent(event1, listener, that, args) {
    var event0 = exports2.event;
    event1.sourceEvent = exports2.event;
    exports2.event = event1;
    try {
      return listener.apply(that, args);
    } finally {
      exports2.event = event0;
    }
  }
  var sourceEvent = function() {
    var current = exports2.event, source;
    while (source = current.sourceEvent)
      current = source;
    return current;
  };
  var point = function(node, event) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point2 = svg.createSVGPoint();
      point2.x = event.clientX, point2.y = event.clientY;
      point2 = point2.matrixTransform(node.getScreenCTM().inverse());
      return [point2.x, point2.y];
    }
    var rect = node.getBoundingClientRect();
    return [
      event.clientX - rect.left - node.clientLeft,
      event.clientY - rect.top - node.clientTop
    ];
  };
  var mouse = function(node) {
    var event = sourceEvent();
    if (event.changedTouches)
      event = event.changedTouches[0];
    return point(node, event);
  };
  function none() {
  }
  var selector = function(selector2) {
    return selector2 == null ? none : function() {
      return this.querySelector(selector2);
    };
  };
  var selection_select = function(select2) {
    if (typeof select2 !== "function")
      select2 = selector(select2);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
          if ("__data__" in node)
            subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }
    return new Selection(subgroups, this._parents);
  };
  function empty$1() {
    return [];
  }
  var selectorAll = function(selector2) {
    return selector2 == null ? empty$1 : function() {
      return this.querySelectorAll(selector2);
    };
  };
  var selection_selectAll = function(select2) {
    if (typeof select2 !== "function")
      select2 = selectorAll(select2);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select2.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }
    return new Selection(subgroups, parents);
  };
  var selection_filter = function(match) {
    if (typeof match !== "function")
      match = matcher$1(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Selection(subgroups, this._parents);
  };
  var sparse = function(update) {
    return new Array(update.length);
  };
  var selection_enter = function() {
    return new Selection(this._enter || this._groups.map(sparse), this._parents);
  };
  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector2) {
      return this._parent.querySelector(selector2);
    },
    querySelectorAll: function(selector2) {
      return this._parent.querySelectorAll(selector2);
    }
  };
  var constant$1 = function(x2) {
    return function() {
      return x2;
    };
  };
  var keyPrefix = "$";
  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }
  function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = {}, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
        if (keyValue in nodeByKeyValue) {
          exit[i] = node;
        } else {
          nodeByKeyValue[keyValue] = node;
        }
      }
    }
    for (i = 0; i < dataLength; ++i) {
      keyValue = keyPrefix + key.call(parent, data[i], i, data);
      if (node = nodeByKeyValue[keyValue]) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue[keyValue] = null;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) {
        exit[i] = node;
      }
    }
  }
  var selection_data = function(value, key) {
    if (!value) {
      data = new Array(this.size()), j = -1;
      this.each(function(d) {
        data[++j] = d;
      });
      return data;
    }
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function")
      value = constant$1(value);
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j], group = groups[j], groupLength = group.length, data = value.call(parent, parent && parent.__data__, j, parents), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1)
            i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength)
            ;
          previous._next = next || null;
        }
      }
    }
    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  };
  var selection_exit = function() {
    return new Selection(this._exit || this._groups.map(sparse), this._parents);
  };
  var selection_merge = function(selection$$1) {
    for (var groups0 = this._groups, groups1 = selection$$1._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge2 = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge2[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Selection(merges, this._parents);
  };
  var selection_order = function() {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling)
            next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  };
  var selection_sort = function(compare) {
    if (!compare)
      compare = ascending$1;
    function compareNode(a2, b) {
      return a2 && b ? compare(a2.__data__, b.__data__) : !a2 - !b;
    }
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection(sortgroups, this._parents).order();
  };
  function ascending$1(a2, b) {
    return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
  }
  var selection_call = function() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  };
  var selection_nodes = function() {
    var nodes = new Array(this.size()), i = -1;
    this.each(function() {
      nodes[++i] = this;
    });
    return nodes;
  };
  var selection_node = function() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node)
          return node;
      }
    }
    return null;
  };
  var selection_size = function() {
    var size = 0;
    this.each(function() {
      ++size;
    });
    return size;
  };
  var selection_empty = function() {
    return !this.node();
  };
  var selection_each = function(callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i])
          callback.call(node, node.__data__, i, group);
      }
    }
    return this;
  };
  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.removeAttribute(name);
      else
        this.setAttribute(name, v);
    };
  }
  function attrFunctionNS(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.removeAttributeNS(fullname.space, fullname.local);
      else
        this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }
  var selection_attr = function(name, value) {
    var fullname = namespace(name);
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each(
      (value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value)
    );
  };
  var defaultView = function(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || // node is a Node
    node.document && node || // node is a Window
    node.defaultView;
  };
  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.style.removeProperty(name);
      else
        this.style.setProperty(name, v, priority);
    };
  }
  var selection_style = function(name, value, priority) {
    return arguments.length > 1 ? this.each(
      (value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)
    ) : styleValue(this.node(), name);
  };
  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }
  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        delete this[name];
      else
        this[name] = v;
    };
  }
  var selection_property = function(name, value) {
    return arguments.length > 1 ? this.each(
      (value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)
    ) : this.node()[name];
  };
  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
      list.add(names[i]);
  }
  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
      list.remove(names[i]);
  }
  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  var selection_classed = function(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n)
        if (!list.contains(names[i]))
          return false;
      return true;
    }
    return this.each(
      (typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value)
    );
  };
  function textRemove() {
    this.textContent = "";
  }
  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }
  var selection_text = function(value) {
    return arguments.length ? this.each(
      value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(
        value
      )
    ) : this.node().textContent;
  };
  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }
  var selection_html = function(value) {
    return arguments.length ? this.each(
      value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(
        value
      )
    ) : this.node().innerHTML;
  };
  function raise() {
    if (this.nextSibling)
      this.parentNode.appendChild(this);
  }
  var selection_raise = function() {
    return this.each(raise);
  };
  function lower() {
    if (this.previousSibling)
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  var selection_lower = function() {
    return this.each(lower);
  };
  var selection_append = function(name) {
    var create2 = typeof name === "function" ? name : creator(name);
    return this.select(function() {
      return this.appendChild(create2.apply(this, arguments));
    });
  };
  function constantNull() {
    return null;
  }
  var selection_insert = function(name, before) {
    var create2 = typeof name === "function" ? name : creator(name), select2 = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function() {
      return this.insertBefore(
        create2.apply(this, arguments),
        select2.apply(this, arguments) || null
      );
    });
  };
  function remove() {
    var parent = this.parentNode;
    if (parent)
      parent.removeChild(this);
  }
  var selection_remove = function() {
    return this.each(remove);
  };
  var selection_datum = function(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  };
  function dispatchEvent(node, type2, params) {
    var window2 = defaultView(node), event = window2.CustomEvent;
    if (typeof event === "function") {
      event = new event(type2, params);
    } else {
      event = window2.document.createEvent("Event");
      if (params)
        event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
      else
        event.initEvent(type2, false, false);
    }
    node.dispatchEvent(event);
  }
  function dispatchConstant(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params);
    };
  }
  function dispatchFunction(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params.apply(this, arguments));
    };
  }
  var selection_dispatch = function(type2, params) {
    return this.each(
      (typeof params === "function" ? dispatchFunction : dispatchConstant)(
        type2,
        params
      )
    );
  };
  var root = [null];
  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  function selection() {
    return new Selection([[document.documentElement]], root);
  }
  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: selection_select,
    selectAll: selection_selectAll,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    merge: selection_merge,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch
  };
  var select = function(selector2) {
    return typeof selector2 === "string" ? new Selection(
      [[document.querySelector(selector2)]],
      [document.documentElement]
    ) : new Selection([[selector2]], root);
  };
  var selectAll = function(selector2) {
    return typeof selector2 === "string" ? new Selection(
      [document.querySelectorAll(selector2)],
      [document.documentElement]
    ) : new Selection([selector2 == null ? [] : selector2], root);
  };
  var touch = function(node, touches2, identifier) {
    if (arguments.length < 3)
      identifier = touches2, touches2 = sourceEvent().changedTouches;
    for (var i = 0, n = touches2 ? touches2.length : 0, touch2; i < n; ++i) {
      if ((touch2 = touches2[i]).identifier === identifier) {
        return point(node, touch2);
      }
    }
    return null;
  };
  var touches = function(node, touches2) {
    if (touches2 == null)
      touches2 = sourceEvent().touches;
    for (var i = 0, n = touches2 ? touches2.length : 0, points = new Array(n); i < n; ++i) {
      points[i] = point(node, touches2[i]);
    }
    return points;
  };
  function nopropagation() {
    exports2.event.stopImmediatePropagation();
  }
  var noevent = function() {
    exports2.event.preventDefault();
    exports2.event.stopImmediatePropagation();
  };
  var dragDisable = function(view) {
    var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", noevent, true);
    if ("onselectstart" in root2) {
      selection2.on("selectstart.drag", noevent, true);
    } else {
      root2.__noselect = root2.style.MozUserSelect;
      root2.style.MozUserSelect = "none";
    }
  };
  function yesdrag(view, noclick) {
    var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", null);
    if (noclick) {
      selection2.on("click.drag", noevent, true);
      setTimeout(function() {
        selection2.on("click.drag", null);
      }, 0);
    }
    if ("onselectstart" in root2) {
      selection2.on("selectstart.drag", null);
    } else {
      root2.style.MozUserSelect = root2.__noselect;
      delete root2.__noselect;
    }
  }
  var constant$2 = function(x2) {
    return function() {
      return x2;
    };
  };
  function DragEvent(target, type2, subject, id2, active2, x2, y2, dx, dy, dispatch2) {
    this.target = target;
    this.type = type2;
    this.subject = subject;
    this.identifier = id2;
    this.active = active2;
    this.x = x2;
    this.y = y2;
    this.dx = dx;
    this.dy = dy;
    this._ = dispatch2;
  }
  DragEvent.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
  };
  function defaultFilter$1() {
    return !exports2.event.button;
  }
  function defaultContainer() {
    return this.parentNode;
  }
  function defaultSubject(d) {
    return d == null ? { x: exports2.event.x, y: exports2.event.y } : d;
  }
  function defaultTouchable() {
    return "ontouchstart" in this;
  }
  var drag = function() {
    var filter = defaultFilter$1, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch("start", "drag", "end"), active2 = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
    function drag2(selection2) {
      selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function mousedowned() {
      if (touchending || !filter.apply(this, arguments))
        return;
      var gesture = beforestart(
        "mouse",
        container.apply(this, arguments),
        mouse,
        this,
        arguments
      );
      if (!gesture)
        return;
      select(exports2.event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
      dragDisable(exports2.event.view);
      nopropagation();
      mousemoving = false;
      mousedownx = exports2.event.clientX;
      mousedowny = exports2.event.clientY;
      gesture("start");
    }
    function mousemoved() {
      noevent();
      if (!mousemoving) {
        var dx = exports2.event.clientX - mousedownx, dy = exports2.event.clientY - mousedowny;
        mousemoving = dx * dx + dy * dy > clickDistance2;
      }
      gestures.mouse("drag");
    }
    function mouseupped() {
      select(exports2.event.view).on("mousemove.drag mouseup.drag", null);
      yesdrag(exports2.event.view, mousemoving);
      noevent();
      gestures.mouse("end");
    }
    function touchstarted() {
      if (!filter.apply(this, arguments))
        return;
      var touches2 = exports2.event.changedTouches, c2 = container.apply(this, arguments), n = touches2.length, i, gesture;
      for (i = 0; i < n; ++i) {
        if (gesture = beforestart(
          touches2[i].identifier,
          c2,
          touch,
          this,
          arguments
        )) {
          nopropagation();
          gesture("start");
        }
      }
    }
    function touchmoved() {
      var touches2 = exports2.event.changedTouches, n = touches2.length, i, gesture;
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches2[i].identifier]) {
          noevent();
          gesture("drag");
        }
      }
    }
    function touchended() {
      var touches2 = exports2.event.changedTouches, n = touches2.length, i, gesture;
      if (touchending)
        clearTimeout(touchending);
      touchending = setTimeout(function() {
        touchending = null;
      }, 500);
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches2[i].identifier]) {
          nopropagation();
          gesture("end");
        }
      }
    }
    function beforestart(id2, container2, point2, that, args) {
      var p = point2(container2, id2), s2, dx, dy, sublisteners = listeners.copy();
      if (!customEvent(
        new DragEvent(
          drag2,
          "beforestart",
          s2,
          id2,
          active2,
          p[0],
          p[1],
          0,
          0,
          sublisteners
        ),
        function() {
          if ((exports2.event.subject = s2 = subject.apply(that, args)) == null)
            return false;
          dx = s2.x - p[0] || 0;
          dy = s2.y - p[1] || 0;
          return true;
        }
      ))
        return;
      return function gesture(type2) {
        var p02 = p, n;
        switch (type2) {
          case "start":
            gestures[id2] = gesture, n = active2++;
            break;
          case "end":
            delete gestures[id2], --active2;
          case "drag":
            p = point2(container2, id2), n = active2;
            break;
        }
        customEvent(
          new DragEvent(
            drag2,
            type2,
            s2,
            id2,
            n,
            p[0] + dx,
            p[1] + dy,
            p[0] - p02[0],
            p[1] - p02[1],
            sublisteners
          ),
          sublisteners.apply,
          sublisteners,
          [type2, that, args]
        );
      };
    }
    drag2.filter = function(_) {
      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$2(!!_), drag2) : filter;
    };
    drag2.container = function(_) {
      return arguments.length ? (container = typeof _ === "function" ? _ : constant$2(_), drag2) : container;
    };
    drag2.subject = function(_) {
      return arguments.length ? (subject = typeof _ === "function" ? _ : constant$2(_), drag2) : subject;
    };
    drag2.touchable = function(_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$2(!!_), drag2) : touchable;
    };
    drag2.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? drag2 : value;
    };
    drag2.clickDistance = function(_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, drag2) : Math.sqrt(clickDistance2);
    };
    return drag2;
  };
  var define2 = function(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  };
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition)
      prototype[key] = definition[key];
    return prototype;
  }
  function Color2() {
  }
  var darker = 0.7;
  var brighter = 1 / darker;
  var reI = "\\s*([+-]?\\d+)\\s*";
  var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var reHex3 = /^#([0-9a-f]{3})$/;
  var reHex6 = /^#([0-9a-f]{6})$/;
  var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
  var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
  var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
  var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
  var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
  var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
  var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  define2(Color2, color, {
    displayable: function() {
      return this.rgb().displayable();
    },
    toString: function() {
      return this.rgb() + "";
    }
  });
  function color(format) {
    var m;
    format = (format + "").trim().toLowerCase();
    return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb(
      m >> 8 & 15 | m >> 4 & 240,
      m >> 4 & 15 | m & 240,
      (m & 15) << 4 | m & 15,
      1
    )) : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n) {
    return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
  }
  function rgba(r, g, b, a2) {
    if (a2 <= 0)
      r = g = b = NaN;
    return new Rgb(r, g, b, a2);
  }
  function rgbConvert(o) {
    if (!(o instanceof Color2))
      o = color(o);
    if (!o)
      return new Rgb();
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }
  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }
  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  define2(
    Rgb,
    rgb,
    extend(Color2, {
      brighter: function(k2) {
        k2 = k2 == null ? brighter : Math.pow(brighter, k2);
        return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
      },
      darker: function(k2) {
        k2 = k2 == null ? darker : Math.pow(darker, k2);
        return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
      },
      rgb: function() {
        return this;
      },
      displayable: function() {
        return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
      },
      toString: function() {
        var a2 = this.opacity;
        a2 = isNaN(a2) ? 1 : Math.max(0, Math.min(1, a2));
        return (a2 === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a2 === 1 ? ")" : ", " + a2 + ")");
      }
    })
  );
  function hsla(h, s2, l, a2) {
    if (a2 <= 0)
      h = s2 = l = NaN;
    else if (l <= 0 || l >= 1)
      h = s2 = NaN;
    else if (s2 <= 0)
      h = NaN;
    return new Hsl(h, s2, l, a2);
  }
  function hslConvert(o) {
    if (o instanceof Hsl)
      return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color2))
      o = color(o);
    if (!o)
      return new Hsl();
    if (o instanceof Hsl)
      return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max2 = Math.max(r, g, b), h = NaN, s2 = max2 - min2, l = (max2 + min2) / 2;
    if (s2) {
      if (r === max2)
        h = (g - b) / s2 + (g < b) * 6;
      else if (g === max2)
        h = (b - r) / s2 + 2;
      else
        h = (r - g) / s2 + 4;
      s2 /= l < 0.5 ? max2 + min2 : 2 - max2 - min2;
      h *= 60;
    } else {
      s2 = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s2, l, o.opacity);
  }
  function hsl(h, s2, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s2, l, opacity == null ? 1 : opacity);
  }
  function Hsl(h, s2, l, opacity) {
    this.h = +h;
    this.s = +s2;
    this.l = +l;
    this.opacity = +opacity;
  }
  define2(
    Hsl,
    hsl,
    extend(Color2, {
      brighter: function(k2) {
        k2 = k2 == null ? brighter : Math.pow(brighter, k2);
        return new Hsl(this.h, this.s, this.l * k2, this.opacity);
      },
      darker: function(k2) {
        k2 = k2 == null ? darker : Math.pow(darker, k2);
        return new Hsl(this.h, this.s, this.l * k2, this.opacity);
      },
      rgb: function() {
        var h = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s2, m1 = 2 * l - m2;
        return new Rgb(
          hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
          hsl2rgb(h, m1, m2),
          hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
          this.opacity
        );
      },
      displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      }
    })
  );
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
  }
  var deg2rad = Math.PI / 180;
  var rad2deg = 180 / Math.PI;
  var Kn = 18;
  var Xn = 0.95047;
  var Yn = 1;
  var Zn = 1.08883;
  var t0 = 4 / 29;
  var t1 = 6 / 29;
  var t2 = 3 * t1 * t1;
  var t3 = t1 * t1 * t1;
  function labConvert(o) {
    if (o instanceof Lab)
      return new Lab(o.l, o.a, o.b, o.opacity);
    if (o instanceof Hcl) {
      var h = o.h * deg2rad;
      return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
    }
    if (!(o instanceof Rgb))
      o = rgbConvert(o);
    var b = rgb2xyz(o.r), a2 = rgb2xyz(o.g), l = rgb2xyz(o.b), x2 = xyz2lab((0.4124564 * b + 0.3575761 * a2 + 0.1804375 * l) / Xn), y2 = xyz2lab((0.2126729 * b + 0.7151522 * a2 + 0.072175 * l) / Yn), z = xyz2lab((0.0193339 * b + 0.119192 * a2 + 0.9503041 * l) / Zn);
    return new Lab(116 * y2 - 16, 500 * (x2 - y2), 200 * (y2 - z), o.opacity);
  }
  function lab(l, a2, b, opacity) {
    return arguments.length === 1 ? labConvert(l) : new Lab(l, a2, b, opacity == null ? 1 : opacity);
  }
  function Lab(l, a2, b, opacity) {
    this.l = +l;
    this.a = +a2;
    this.b = +b;
    this.opacity = +opacity;
  }
  define2(
    Lab,
    lab,
    extend(Color2, {
      brighter: function(k2) {
        return new Lab(
          this.l + Kn * (k2 == null ? 1 : k2),
          this.a,
          this.b,
          this.opacity
        );
      },
      darker: function(k2) {
        return new Lab(
          this.l - Kn * (k2 == null ? 1 : k2),
          this.a,
          this.b,
          this.opacity
        );
      },
      rgb: function() {
        var y2 = (this.l + 16) / 116, x2 = isNaN(this.a) ? y2 : y2 + this.a / 500, z = isNaN(this.b) ? y2 : y2 - this.b / 200;
        y2 = Yn * lab2xyz(y2);
        x2 = Xn * lab2xyz(x2);
        z = Zn * lab2xyz(z);
        return new Rgb(
          xyz2rgb(3.2404542 * x2 - 1.5371385 * y2 - 0.4985314 * z),
          // D65 -> sRGB
          xyz2rgb(-0.969266 * x2 + 1.8760108 * y2 + 0.041556 * z),
          xyz2rgb(0.0556434 * x2 - 0.2040259 * y2 + 1.0572252 * z),
          this.opacity
        );
      }
    })
  );
  function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
  }
  function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
  }
  function xyz2rgb(x2) {
    return 255 * (x2 <= 31308e-7 ? 12.92 * x2 : 1.055 * Math.pow(x2, 1 / 2.4) - 0.055);
  }
  function rgb2xyz(x2) {
    return (x2 /= 255) <= 0.04045 ? x2 / 12.92 : Math.pow((x2 + 0.055) / 1.055, 2.4);
  }
  function hclConvert(o) {
    if (o instanceof Hcl)
      return new Hcl(o.h, o.c, o.l, o.opacity);
    if (!(o instanceof Lab))
      o = labConvert(o);
    var h = Math.atan2(o.b, o.a) * rad2deg;
    return new Hcl(
      h < 0 ? h + 360 : h,
      Math.sqrt(o.a * o.a + o.b * o.b),
      o.l,
      o.opacity
    );
  }
  function hcl(h, c2, l, opacity) {
    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c2, l, opacity == null ? 1 : opacity);
  }
  function Hcl(h, c2, l, opacity) {
    this.h = +h;
    this.c = +c2;
    this.l = +l;
    this.opacity = +opacity;
  }
  define2(
    Hcl,
    hcl,
    extend(Color2, {
      brighter: function(k2) {
        return new Hcl(
          this.h,
          this.c,
          this.l + Kn * (k2 == null ? 1 : k2),
          this.opacity
        );
      },
      darker: function(k2) {
        return new Hcl(
          this.h,
          this.c,
          this.l - Kn * (k2 == null ? 1 : k2),
          this.opacity
        );
      },
      rgb: function() {
        return labConvert(this).rgb();
      }
    })
  );
  var A = -0.14861;
  var B = 1.78277;
  var C = -0.29227;
  var D = -0.90649;
  var E = 1.97294;
  var ED = E * D;
  var EB = E * B;
  var BC_DA = B * C - D * A;
  function cubehelixConvert(o) {
    if (o instanceof Cubehelix)
      return new Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Rgb))
      o = rgbConvert(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k2 = (E * (g - l) - C * bl) / D, s2 = Math.sqrt(k2 * k2 + bl * bl) / (E * l * (1 - l)), h = s2 ? Math.atan2(k2, bl) * rad2deg - 120 : NaN;
    return new Cubehelix(h < 0 ? h + 360 : h, s2, l, o.opacity);
  }
  function cubehelix(h, s2, l, opacity) {
    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s2, l, opacity == null ? 1 : opacity);
  }
  function Cubehelix(h, s2, l, opacity) {
    this.h = +h;
    this.s = +s2;
    this.l = +l;
    this.opacity = +opacity;
  }
  define2(
    Cubehelix,
    cubehelix,
    extend(Color2, {
      brighter: function(k2) {
        k2 = k2 == null ? brighter : Math.pow(brighter, k2);
        return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
      },
      darker: function(k2) {
        k2 = k2 == null ? darker : Math.pow(darker, k2);
        return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
      },
      rgb: function() {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad, l = +this.l, a2 = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh2 = Math.cos(h), sinh2 = Math.sin(h);
        return new Rgb(
          255 * (l + a2 * (A * cosh2 + B * sinh2)),
          255 * (l + a2 * (C * cosh2 + D * sinh2)),
          255 * (l + a2 * (E * cosh2)),
          this.opacity
        );
      }
    })
  );
  function basis(t12, v0, v1, v2, v3) {
    var t22 = t12 * t12, t32 = t22 * t12;
    return ((1 - 3 * t12 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t12 + 3 * t22 - 3 * t32) * v2 + t32 * v3) / 6;
  }
  var basis$1 = function(values2) {
    var n = values2.length - 1;
    return function(t) {
      var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values2[i], v2 = values2[i + 1], v0 = i > 0 ? values2[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values2[i + 2] : 2 * v2 - v1;
      return basis((t - i / n) * n, v0, v1, v2, v3);
    };
  };
  var basisClosed = function(values2) {
    var n = values2.length;
    return function(t) {
      var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values2[(i + n - 1) % n], v1 = values2[i % n], v2 = values2[(i + 1) % n], v3 = values2[(i + 2) % n];
      return basis((t - i / n) * n, v0, v1, v2, v3);
    };
  };
  var constant$3 = function(x2) {
    return function() {
      return x2;
    };
  };
  function linear(a2, d) {
    return function(t) {
      return a2 + t * d;
    };
  }
  function exponential(a2, b, y2) {
    return a2 = Math.pow(a2, y2), b = Math.pow(b, y2) - a2, y2 = 1 / y2, function(t) {
      return Math.pow(a2 + t * b, y2);
    };
  }
  function hue(a2, b) {
    var d = b - a2;
    return d ? linear(a2, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$3(isNaN(a2) ? b : a2);
  }
  function gamma(y2) {
    return (y2 = +y2) === 1 ? nogamma : function(a2, b) {
      return b - a2 ? exponential(a2, b, y2) : constant$3(isNaN(a2) ? b : a2);
    };
  }
  function nogamma(a2, b) {
    var d = b - a2;
    return d ? linear(a2, d) : constant$3(isNaN(a2) ? b : a2);
  }
  var interpolateRgb = function rgbGamma(y2) {
    var color$$1 = gamma(y2);
    function rgb$$1(start2, end2) {
      var r = color$$1((start2 = rgb(start2)).r, (end2 = rgb(end2)).r), g = color$$1(start2.g, end2.g), b = color$$1(start2.b, end2.b), opacity = nogamma(start2.opacity, end2.opacity);
      return function(t) {
        start2.r = r(t);
        start2.g = g(t);
        start2.b = b(t);
        start2.opacity = opacity(t);
        return start2 + "";
      };
    }
    rgb$$1.gamma = rgbGamma;
    return rgb$$1;
  }(1);
  function rgbSpline(spline) {
    return function(colors2) {
      var n = colors2.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color$$1;
      for (i = 0; i < n; ++i) {
        color$$1 = rgb(colors2[i]);
        r[i] = color$$1.r || 0;
        g[i] = color$$1.g || 0;
        b[i] = color$$1.b || 0;
      }
      r = spline(r);
      g = spline(g);
      b = spline(b);
      color$$1.opacity = 1;
      return function(t) {
        color$$1.r = r(t);
        color$$1.g = g(t);
        color$$1.b = b(t);
        return color$$1 + "";
      };
    };
  }
  var rgbBasis = rgbSpline(basis$1);
  var rgbBasisClosed = rgbSpline(basisClosed);
  var array$1 = function(a2, b) {
    var nb = b ? b.length : 0, na = a2 ? Math.min(nb, a2.length) : 0, x2 = new Array(na), c2 = new Array(nb), i;
    for (i = 0; i < na; ++i)
      x2[i] = interpolateValue(a2[i], b[i]);
    for (; i < nb; ++i)
      c2[i] = b[i];
    return function(t) {
      for (i = 0; i < na; ++i)
        c2[i] = x2[i](t);
      return c2;
    };
  };
  var date = function(a2, b) {
    var d = /* @__PURE__ */ new Date();
    return a2 = +a2, b -= a2, function(t) {
      return d.setTime(a2 + b * t), d;
    };
  };
  var reinterpolate = function(a2, b) {
    return a2 = +a2, b -= a2, function(t) {
      return a2 + b * t;
    };
  };
  var object = function(a2, b) {
    var i = {}, c2 = {}, k2;
    if (a2 === null || typeof a2 !== "object")
      a2 = {};
    if (b === null || typeof b !== "object")
      b = {};
    for (k2 in b) {
      if (k2 in a2) {
        i[k2] = interpolateValue(a2[k2], b[k2]);
      } else {
        c2[k2] = b[k2];
      }
    }
    return function(t) {
      for (k2 in i)
        c2[k2] = i[k2](t);
      return c2;
    };
  };
  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var reB = new RegExp(reA.source, "g");
  function zero(b) {
    return function() {
      return b;
    };
  }
  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }
  var interpolateString = function(a2, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s2 = [], q = [];
    a2 = a2 + "", b = b + "";
    while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s2[i])
          s2[i] += bs;
        else
          s2[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s2[i])
          s2[i] += bm;
        else
          s2[++i] = bm;
      } else {
        s2[++i] = null;
        q.push({ i, x: reinterpolate(am, bm) });
      }
      bi = reB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s2[i])
        s2[i] += bs;
      else
        s2[++i] = bs;
    }
    return s2.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
      for (var i2 = 0, o; i2 < b; ++i2)
        s2[(o = q[i2]).i] = o.x(t);
      return s2.join("");
    });
  };
  var interpolateValue = function(a2, b) {
    var t = typeof b, c2;
    return b == null || t === "boolean" ? constant$3(b) : (t === "number" ? reinterpolate : t === "string" ? (c2 = color(b)) ? (b = c2, interpolateRgb) : interpolateString : b instanceof color ? interpolateRgb : b instanceof Date ? date : Array.isArray(b) ? array$1 : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : reinterpolate)(a2, b);
  };
  var interpolateRound = function(a2, b) {
    return a2 = +a2, b -= a2, function(t) {
      return Math.round(a2 + b * t);
    };
  };
  var degrees = 180 / Math.PI;
  var identity$2 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  var decompose = function(a2, b, c2, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a2 * a2 + b * b))
      a2 /= scaleX, b /= scaleX;
    if (skewX = a2 * c2 + b * d)
      c2 -= a2 * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c2 * c2 + d * d))
      c2 /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a2 * d < b * c2)
      a2 = -a2, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a2) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX,
      scaleY
    };
  };
  var cssNode;
  var cssRoot;
  var cssView;
  var svgNode;
  function parseCss(value) {
    if (value === "none")
      return identity$2;
    if (!cssNode)
      cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
    cssNode.style.transform = value;
    value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
    cssRoot.removeChild(cssNode);
    value = value.slice(7, -1).split(",");
    return decompose(
      +value[0],
      +value[1],
      +value[2],
      +value[3],
      +value[4],
      +value[5]
    );
  }
  function parseSvg(value) {
    if (value == null)
      return identity$2;
    if (!svgNode)
      svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate()))
      return identity$2;
    value = value.matrix;
    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
  }
  function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s2) {
      return s2.length ? s2.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s2, q) {
      if (xa !== xb || ya !== yb) {
        var i = s2.push("translate(", null, pxComma, null, pxParen);
        q.push(
          { i: i - 4, x: reinterpolate(xa, xb) },
          { i: i - 2, x: reinterpolate(ya, yb) }
        );
      } else if (xb || yb) {
        s2.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }
    function rotate(a2, b, s2, q) {
      if (a2 !== b) {
        if (a2 - b > 180)
          b += 360;
        else if (b - a2 > 180)
          a2 += 360;
        q.push({
          i: s2.push(pop(s2) + "rotate(", null, degParen) - 2,
          x: reinterpolate(a2, b)
        });
      } else if (b) {
        s2.push(pop(s2) + "rotate(" + b + degParen);
      }
    }
    function skewX(a2, b, s2, q) {
      if (a2 !== b) {
        q.push({
          i: s2.push(pop(s2) + "skewX(", null, degParen) - 2,
          x: reinterpolate(a2, b)
        });
      } else if (b) {
        s2.push(pop(s2) + "skewX(" + b + degParen);
      }
    }
    function scale(xa, ya, xb, yb, s2, q) {
      if (xa !== xb || ya !== yb) {
        var i = s2.push(pop(s2) + "scale(", null, ",", null, ")");
        q.push(
          { i: i - 4, x: reinterpolate(xa, xb) },
          { i: i - 2, x: reinterpolate(ya, yb) }
        );
      } else if (xb !== 1 || yb !== 1) {
        s2.push(pop(s2) + "scale(" + xb + "," + yb + ")");
      }
    }
    return function(a2, b) {
      var s2 = [], q = [];
      a2 = parse(a2), b = parse(b);
      translate(a2.translateX, a2.translateY, b.translateX, b.translateY, s2, q);
      rotate(a2.rotate, b.rotate, s2, q);
      skewX(a2.skewX, b.skewX, s2, q);
      scale(a2.scaleX, a2.scaleY, b.scaleX, b.scaleY, s2, q);
      a2 = b = null;
      return function(t) {
        var i = -1, n = q.length, o;
        while (++i < n)
          s2[(o = q[i]).i] = o.x(t);
        return s2.join("");
      };
    };
  }
  var interpolateTransformCss = interpolateTransform(
    parseCss,
    "px, ",
    "px)",
    "deg)"
  );
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
  var rho = Math.SQRT2;
  var rho2 = 2;
  var rho4 = 4;
  var epsilon2 = 1e-12;
  function cosh(x2) {
    return ((x2 = Math.exp(x2)) + 1 / x2) / 2;
  }
  function sinh(x2) {
    return ((x2 = Math.exp(x2)) - 1 / x2) / 2;
  }
  function tanh(x2) {
    return ((x2 = Math.exp(2 * x2)) - 1) / (x2 + 1);
  }
  var interpolateZoom = function(p02, p1) {
    var ux0 = p02[0], uy0 = p02[1], w0 = p02[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
      };
    } else {
      var d1 = Math.sqrt(d2), b02 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b12 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b02 * b02 + 1) - b02), r1 = Math.log(Math.sqrt(b12 * b12 + 1) - b12);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s2 = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s2 + r0) - sinh(r0));
        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s2 + r0)];
      };
    }
    i.duration = S * 1e3;
    return i;
  };
  function hsl$1(hue$$1) {
    return function(start2, end2) {
      var h = hue$$1((start2 = hsl(start2)).h, (end2 = hsl(end2)).h), s2 = nogamma(start2.s, end2.s), l = nogamma(start2.l, end2.l), opacity = nogamma(start2.opacity, end2.opacity);
      return function(t) {
        start2.h = h(t);
        start2.s = s2(t);
        start2.l = l(t);
        start2.opacity = opacity(t);
        return start2 + "";
      };
    };
  }
  var hsl$2 = hsl$1(hue);
  var hslLong = hsl$1(nogamma);
  function lab$1(start2, end2) {
    var l = nogamma((start2 = lab(start2)).l, (end2 = lab(end2)).l), a2 = nogamma(start2.a, end2.a), b = nogamma(start2.b, end2.b), opacity = nogamma(start2.opacity, end2.opacity);
    return function(t) {
      start2.l = l(t);
      start2.a = a2(t);
      start2.b = b(t);
      start2.opacity = opacity(t);
      return start2 + "";
    };
  }
  function hcl$1(hue$$1) {
    return function(start2, end2) {
      var h = hue$$1((start2 = hcl(start2)).h, (end2 = hcl(end2)).h), c2 = nogamma(start2.c, end2.c), l = nogamma(start2.l, end2.l), opacity = nogamma(start2.opacity, end2.opacity);
      return function(t) {
        start2.h = h(t);
        start2.c = c2(t);
        start2.l = l(t);
        start2.opacity = opacity(t);
        return start2 + "";
      };
    };
  }
  var hcl$2 = hcl$1(hue);
  var hclLong = hcl$1(nogamma);
  function cubehelix$1(hue$$1) {
    return function cubehelixGamma(y2) {
      y2 = +y2;
      function cubehelix$$1(start2, end2) {
        var h = hue$$1((start2 = cubehelix(start2)).h, (end2 = cubehelix(end2)).h), s2 = nogamma(start2.s, end2.s), l = nogamma(start2.l, end2.l), opacity = nogamma(start2.opacity, end2.opacity);
        return function(t) {
          start2.h = h(t);
          start2.s = s2(t);
          start2.l = l(Math.pow(t, y2));
          start2.opacity = opacity(t);
          return start2 + "";
        };
      }
      cubehelix$$1.gamma = cubehelixGamma;
      return cubehelix$$1;
    }(1);
  }
  var cubehelix$2 = cubehelix$1(hue);
  var cubehelixLong = cubehelix$1(nogamma);
  var quantize = function(interpolator, n) {
    var samples = new Array(n);
    for (var i = 0; i < n; ++i)
      samples[i] = interpolator(i / (n - 1));
    return samples;
  };
  var frame = 0;
  var timeout = 0;
  var interval = 0;
  var pokeDelay = 1e3;
  var taskHead;
  var taskTail;
  var clockLast = 0;
  var clockNow = 0;
  var clockSkew = 0;
  var clock = typeof performance === "object" && performance.now ? performance : Date;
  var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
  };
  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }
  function clearNow() {
    clockNow = 0;
  }
  function Timer() {
    this._call = this._time = this._next = null;
  }
  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time2) {
      if (typeof callback !== "function")
        throw new TypeError("callback is not a function");
      time2 = (time2 == null ? now() : +time2) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail)
          taskTail._next = this;
        else
          taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time2;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };
  function timer(callback, delay, time2) {
    var t = new Timer();
    t.restart(callback, delay, time2);
    return t;
  }
  function timerFlush() {
    now();
    ++frame;
    var t = taskHead, e;
    while (t) {
      if ((e = clockNow - t._time) >= 0)
        t._call.call(null, e);
      t = t._next;
    }
    --frame;
  }
  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }
  function poke() {
    var now2 = clock.now(), delay = now2 - clockLast;
    if (delay > pokeDelay)
      clockSkew -= delay, clockLast = now2;
  }
  function nap() {
    var t02, t12 = taskHead, t22, time2 = Infinity;
    while (t12) {
      if (t12._call) {
        if (time2 > t12._time)
          time2 = t12._time;
        t02 = t12, t12 = t12._next;
      } else {
        t22 = t12._next, t12._next = null;
        t12 = t02 ? t02._next = t22 : taskHead = t22;
      }
    }
    taskTail = t02;
    sleep(time2);
  }
  function sleep(time2) {
    if (frame)
      return;
    if (timeout)
      timeout = clearTimeout(timeout);
    var delay = time2 - clockNow;
    if (delay > 24) {
      if (time2 < Infinity)
        timeout = setTimeout(wake, time2 - clock.now() - clockSkew);
      if (interval)
        interval = clearInterval(interval);
    } else {
      if (!interval)
        clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }
  var timeout$1 = function(callback, delay, time2) {
    var t = new Timer();
    delay = delay == null ? 0 : +delay;
    t.restart(
      function(elapsed) {
        t.stop();
        callback(elapsed + delay);
      },
      delay,
      time2
    );
    return t;
  };
  var interval$1 = function(callback, delay, time2) {
    var t = new Timer(), total = delay;
    if (delay == null)
      return t.restart(callback, delay, time2), t;
    delay = +delay, time2 = time2 == null ? now() : +time2;
    t.restart(
      function tick(elapsed) {
        elapsed += total;
        t.restart(tick, total += delay, time2);
        callback(elapsed);
      },
      delay,
      time2
    );
    return t;
  };
  var emptyOn = dispatch("start", "end", "interrupt");
  var emptyTween = [];
  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;
  var schedule = function(node, name, id2, index2, group, timing) {
    var schedules = node.__transition;
    if (!schedules)
      node.__transition = {};
    else if (id2 in schedules)
      return;
    create(node, id2, {
      name,
      index: index2,
      // For context during callback.
      group,
      // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  };
  function init(node, id2) {
    var schedule2 = get$1(node, id2);
    if (schedule2.state > CREATED)
      throw new Error("too late; already scheduled");
    return schedule2;
  }
  function set$1(node, id2) {
    var schedule2 = get$1(node, id2);
    if (schedule2.state > STARTING)
      throw new Error("too late; already started");
    return schedule2;
  }
  function get$1(node, id2) {
    var schedule2 = node.__transition;
    if (!schedule2 || !(schedule2 = schedule2[id2]))
      throw new Error("transition not found");
    return schedule2;
  }
  function create(node, id2, self) {
    var schedules = node.__transition, tween;
    schedules[id2] = self;
    self.timer = timer(schedule2, 0, self.time);
    function schedule2(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start2, self.delay, self.time);
      if (self.delay <= elapsed)
        start2(elapsed - self.delay);
    }
    function start2(elapsed) {
      var i, j, n, o;
      if (self.state !== SCHEDULED)
        return stop();
      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name)
          continue;
        if (o.state === STARTED)
          return timeout$1(start2);
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        } else if (+i < id2) {
          o.state = ENDED;
          o.timer.stop();
          delete schedules[i];
        }
      }
      timeout$1(function() {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING)
        return;
      self.state = STARTED;
      tween = new Array(n = self.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(
          node,
          node.__data__,
          self.index,
          self.group
        )) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }
    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
      while (++i < n) {
        tween[i].call(null, t);
      }
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }
    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id2];
      for (var i in schedules)
        return;
      delete node.__transition;
    }
  }
  var interrupt = function(node, name) {
    var schedules = node.__transition, schedule$$1, active2, empty2 = true, i;
    if (!schedules)
      return;
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule$$1 = schedules[i]).name !== name) {
        empty2 = false;
        continue;
      }
      active2 = schedule$$1.state > STARTING && schedule$$1.state < ENDING;
      schedule$$1.state = ENDED;
      schedule$$1.timer.stop();
      if (active2)
        schedule$$1.on.call(
          "interrupt",
          node,
          node.__data__,
          schedule$$1.index,
          schedule$$1.group
        );
      delete schedules[i];
    }
    if (empty2)
      delete node.__transition;
  };
  var selection_interrupt = function(name) {
    return this.each(function() {
      interrupt(this, name);
    });
  };
  function tweenRemove(id2, name) {
    var tween0, tween1;
    return function() {
      var schedule$$1 = set$1(this, id2), tween = schedule$$1.tween;
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }
      schedule$$1.tween = tween1;
    };
  }
  function tweenFunction(id2, name, value) {
    var tween0, tween1;
    if (typeof value !== "function")
      throw new Error();
    return function() {
      var schedule$$1 = set$1(this, id2), tween = schedule$$1.tween;
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n)
          tween1.push(t);
      }
      schedule$$1.tween = tween1;
    };
  }
  var transition_tween = function(name, value) {
    var id2 = this._id;
    name += "";
    if (arguments.length < 2) {
      var tween = get$1(this.node(), id2).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }
    return this.each(
      (value == null ? tweenRemove : tweenFunction)(id2, name, value)
    );
  };
  function tweenValue(transition2, name, value) {
    var id2 = transition2._id;
    transition2.each(function() {
      var schedule$$1 = set$1(this, id2);
      (schedule$$1.value || (schedule$$1.value = {}))[name] = value.apply(
        this,
        arguments
      );
    });
    return function(node) {
      return get$1(node, id2).value[name];
    };
  }
  var interpolate = function(a2, b) {
    var c2;
    return (typeof b === "number" ? reinterpolate : b instanceof color ? interpolateRgb : (c2 = color(b)) ? (b = c2, interpolateRgb) : interpolateString)(a2, b);
  };
  function attrRemove$1(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS$1(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant$1(name, interpolate$$1, value1) {
    var value00, interpolate0;
    return function() {
      var value0 = this.getAttribute(name);
      return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value1);
    };
  }
  function attrConstantNS$1(fullname, interpolate$$1, value1) {
    var value00, interpolate0;
    return function() {
      var value0 = this.getAttributeNS(fullname.space, fullname.local);
      return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value1);
    };
  }
  function attrFunction$1(name, interpolate$$1, value) {
    var value00, value10, interpolate0;
    return function() {
      var value0, value1 = value(this);
      if (value1 == null)
        return void this.removeAttribute(name);
      value0 = this.getAttribute(name);
      return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate$$1(
        value00 = value0,
        value10 = value1
      );
    };
  }
  function attrFunctionNS$1(fullname, interpolate$$1, value) {
    var value00, value10, interpolate0;
    return function() {
      var value0, value1 = value(this);
      if (value1 == null)
        return void this.removeAttributeNS(fullname.space, fullname.local);
      value0 = this.getAttributeNS(fullname.space, fullname.local);
      return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate$$1(
        value00 = value0,
        value10 = value1
      );
    };
  }
  var transition_attr = function(name, value) {
    var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
    return this.attrTween(
      name,
      typeof value === "function" ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(
        fullname,
        i,
        tweenValue(this, "attr." + name, value)
      ) : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname) : (fullname.local ? attrConstantNS$1 : attrConstant$1)(
        fullname,
        i,
        value + ""
      )
    );
  };
  function attrTweenNS(fullname, value) {
    function tween() {
      var node = this, i = value.apply(node, arguments);
      return i && function(t) {
        node.setAttributeNS(fullname.space, fullname.local, i(t));
      };
    }
    tween._value = value;
    return tween;
  }
  function attrTween(name, value) {
    function tween() {
      var node = this, i = value.apply(node, arguments);
      return i && function(t) {
        node.setAttribute(name, i(t));
      };
    }
    tween._value = value;
    return tween;
  }
  var transition_attrTween = function(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    var fullname = namespace(name);
    return this.tween(
      key,
      (fullname.local ? attrTweenNS : attrTween)(fullname, value)
    );
  };
  function delayFunction(id2, value) {
    return function() {
      init(this, id2).delay = +value.apply(this, arguments);
    };
  }
  function delayConstant(id2, value) {
    return value = +value, function() {
      init(this, id2).delay = value;
    };
  }
  var transition_delay = function(value) {
    var id2 = this._id;
    return arguments.length ? this.each(
      (typeof value === "function" ? delayFunction : delayConstant)(
        id2,
        value
      )
    ) : get$1(this.node(), id2).delay;
  };
  function durationFunction(id2, value) {
    return function() {
      set$1(this, id2).duration = +value.apply(this, arguments);
    };
  }
  function durationConstant(id2, value) {
    return value = +value, function() {
      set$1(this, id2).duration = value;
    };
  }
  var transition_duration = function(value) {
    var id2 = this._id;
    return arguments.length ? this.each(
      (typeof value === "function" ? durationFunction : durationConstant)(
        id2,
        value
      )
    ) : get$1(this.node(), id2).duration;
  };
  function easeConstant(id2, value) {
    if (typeof value !== "function")
      throw new Error();
    return function() {
      set$1(this, id2).ease = value;
    };
  }
  var transition_ease = function(value) {
    var id2 = this._id;
    return arguments.length ? this.each(easeConstant(id2, value)) : get$1(this.node(), id2).ease;
  };
  var transition_filter = function(match) {
    if (typeof match !== "function")
      match = matcher$1(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
  };
  var transition_merge = function(transition$$1) {
    if (transition$$1._id !== this._id)
      throw new Error();
    for (var groups0 = this._groups, groups1 = transition$$1._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge2 = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge2[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Transition(merges, this._parents, this._name, this._id);
  };
  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
      var i = t.indexOf(".");
      if (i >= 0)
        t = t.slice(0, i);
      return !t || t === "start";
    });
  }
  function onFunction(id2, name, listener) {
    var on0, on1, sit = start(name) ? init : set$1;
    return function() {
      var schedule$$1 = sit(this, id2), on = schedule$$1.on;
      if (on !== on0)
        (on1 = (on0 = on).copy()).on(name, listener);
      schedule$$1.on = on1;
    };
  }
  var transition_on = function(name, listener) {
    var id2 = this._id;
    return arguments.length < 2 ? get$1(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
  };
  function removeFunction(id2) {
    return function() {
      var parent = this.parentNode;
      for (var i in this.__transition)
        if (+i !== id2)
          return;
      if (parent)
        parent.removeChild(this);
    };
  }
  var transition_remove = function() {
    return this.on("end.remove", removeFunction(this._id));
  };
  var transition_select = function(select2) {
    var name = this._name, id2 = this._id;
    if (typeof select2 !== "function")
      select2 = selector(select2);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
          if ("__data__" in node)
            subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule(subgroup[i], name, id2, i, subgroup, get$1(node, id2));
        }
      }
    }
    return new Transition(subgroups, this._parents, name, id2);
  };
  var transition_selectAll = function(select2) {
    var name = this._name, id2 = this._id;
    if (typeof select2 !== "function")
      select2 = selectorAll(select2);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children = select2.call(node, node.__data__, i, group), child, inherit2 = get$1(node, id2), k2 = 0, l = children.length; k2 < l; ++k2) {
            if (child = children[k2]) {
              schedule(child, name, id2, k2, children, inherit2);
            }
          }
          subgroups.push(children);
          parents.push(node);
        }
      }
    }
    return new Transition(subgroups, parents, name, id2);
  };
  var Selection$1 = selection.prototype.constructor;
  var transition_selection = function() {
    return new Selection$1(this._groups, this._parents);
  };
  function styleRemove$1(name, interpolate$$1) {
    var value00, value10, interpolate0;
    return function() {
      var value0 = styleValue(this, name), value1 = (this.style.removeProperty(name), styleValue(this, name));
      return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate$$1(
        value00 = value0,
        value10 = value1
      );
    };
  }
  function styleRemoveEnd(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant$1(name, interpolate$$1, value1) {
    var value00, interpolate0;
    return function() {
      var value0 = styleValue(this, name);
      return value0 === value1 ? null : value0 === value00 ? interpolate0 : interpolate0 = interpolate$$1(value00 = value0, value1);
    };
  }
  function styleFunction$1(name, interpolate$$1, value) {
    var value00, value10, interpolate0;
    return function() {
      var value0 = styleValue(this, name), value1 = value(this);
      if (value1 == null)
        value1 = (this.style.removeProperty(name), styleValue(this, name));
      return value0 === value1 ? null : value0 === value00 && value1 === value10 ? interpolate0 : interpolate0 = interpolate$$1(
        value00 = value0,
        value10 = value1
      );
    };
  }
  var transition_style = function(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
    return value == null ? this.styleTween(name, styleRemove$1(name, i)).on(
      "end.style." + name,
      styleRemoveEnd(name)
    ) : this.styleTween(
      name,
      typeof value === "function" ? styleFunction$1(name, i, tweenValue(this, "style." + name, value)) : styleConstant$1(name, i, value + ""),
      priority
    );
  };
  function styleTween(name, value, priority) {
    function tween() {
      var node = this, i = value.apply(node, arguments);
      return i && function(t) {
        node.style.setProperty(name, i(t), priority);
      };
    }
    tween._value = value;
    return tween;
  }
  var transition_styleTween = function(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    return this.tween(
      key,
      styleTween(name, value, priority == null ? "" : priority)
    );
  };
  function textConstant$1(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction$1(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }
  var transition_text = function(value) {
    return this.tween(
      "text",
      typeof value === "function" ? textFunction$1(tweenValue(this, "text", value)) : textConstant$1(value == null ? "" : value + "")
    );
  };
  var transition_transition = function() {
    var name = this._name, id0 = this._id, id1 = newId();
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit2 = get$1(node, id0);
          schedule(node, name, id1, i, group, {
            time: inherit2.time + inherit2.delay + inherit2.duration,
            delay: 0,
            duration: inherit2.duration,
            ease: inherit2.ease
          });
        }
      }
    }
    return new Transition(groups, this._parents, name, id1);
  };
  var id = 0;
  function Transition(groups, parents, name, id2) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id2;
  }
  function transition(name) {
    return selection().transition(name);
  }
  function newId() {
    return ++id;
  }
  var selection_prototype = selection.prototype;
  Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: transition_select,
    selectAll: transition_selectAll,
    filter: transition_filter,
    merge: transition_merge,
    selection: transition_selection,
    transition: transition_transition,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: transition_on,
    attr: transition_attr,
    attrTween: transition_attrTween,
    style: transition_style,
    styleTween: transition_styleTween,
    text: transition_text,
    remove: transition_remove,
    tween: transition_tween,
    delay: transition_delay,
    duration: transition_duration,
    ease: transition_ease
  };
  function linear$1(t) {
    return +t;
  }
  function quadIn(t) {
    return t * t;
  }
  function quadOut(t) {
    return t * (2 - t);
  }
  function quadInOut(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
  }
  function cubicIn(t) {
    return t * t * t;
  }
  function cubicOut(t) {
    return --t * t * t + 1;
  }
  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }
  var exponent = 3;
  var polyIn = function custom(e) {
    e = +e;
    function polyIn2(t) {
      return Math.pow(t, e);
    }
    polyIn2.exponent = custom;
    return polyIn2;
  }(exponent);
  var polyOut = function custom(e) {
    e = +e;
    function polyOut2(t) {
      return 1 - Math.pow(1 - t, e);
    }
    polyOut2.exponent = custom;
    return polyOut2;
  }(exponent);
  var polyInOut = function custom(e) {
    e = +e;
    function polyInOut2(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
    }
    polyInOut2.exponent = custom;
    return polyInOut2;
  }(exponent);
  var pi = Math.PI;
  var halfPi = pi / 2;
  function sinIn(t) {
    return 1 - Math.cos(t * halfPi);
  }
  function sinOut(t) {
    return Math.sin(t * halfPi);
  }
  function sinInOut(t) {
    return (1 - Math.cos(pi * t)) / 2;
  }
  function expIn(t) {
    return Math.pow(2, 10 * t - 10);
  }
  function expOut(t) {
    return 1 - Math.pow(2, -10 * t);
  }
  function expInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
  }
  function circleIn(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function circleOut(t) {
    return Math.sqrt(1 - --t * t);
  }
  function circleInOut(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
  }
  var b1 = 4 / 11;
  var b2 = 6 / 11;
  var b3 = 8 / 11;
  var b4 = 3 / 4;
  var b5 = 9 / 11;
  var b6 = 10 / 11;
  var b7 = 15 / 16;
  var b8 = 21 / 22;
  var b9 = 63 / 64;
  var b0 = 1 / b1 / b1;
  function bounceIn(t) {
    return 1 - bounceOut(1 - t);
  }
  function bounceOut(t) {
    return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
  }
  function bounceInOut(t) {
    return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
  }
  var overshoot = 1.70158;
  var backIn = function custom(s2) {
    s2 = +s2;
    function backIn2(t) {
      return t * t * ((s2 + 1) * t - s2);
    }
    backIn2.overshoot = custom;
    return backIn2;
  }(overshoot);
  var backOut = function custom(s2) {
    s2 = +s2;
    function backOut2(t) {
      return --t * t * ((s2 + 1) * t + s2) + 1;
    }
    backOut2.overshoot = custom;
    return backOut2;
  }(overshoot);
  var backInOut = function custom(s2) {
    s2 = +s2;
    function backInOut2(t) {
      return ((t *= 2) < 1 ? t * t * ((s2 + 1) * t - s2) : (t -= 2) * t * ((s2 + 1) * t + s2) + 2) / 2;
    }
    backInOut2.overshoot = custom;
    return backInOut2;
  }(overshoot);
  var tau = 2 * Math.PI;
  var amplitude = 1;
  var period = 0.3;
  var elasticIn = function custom(a2, p) {
    var s2 = Math.asin(1 / (a2 = Math.max(1, a2))) * (p /= tau);
    function elasticIn2(t) {
      return a2 * Math.pow(2, 10 * --t) * Math.sin((s2 - t) / p);
    }
    elasticIn2.amplitude = function(a3) {
      return custom(a3, p * tau);
    };
    elasticIn2.period = function(p2) {
      return custom(a2, p2);
    };
    return elasticIn2;
  }(amplitude, period);
  var elasticOut = function custom(a2, p) {
    var s2 = Math.asin(1 / (a2 = Math.max(1, a2))) * (p /= tau);
    function elasticOut2(t) {
      return 1 - a2 * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s2) / p);
    }
    elasticOut2.amplitude = function(a3) {
      return custom(a3, p * tau);
    };
    elasticOut2.period = function(p2) {
      return custom(a2, p2);
    };
    return elasticOut2;
  }(amplitude, period);
  var elasticInOut = function custom(a2, p) {
    var s2 = Math.asin(1 / (a2 = Math.max(1, a2))) * (p /= tau);
    function elasticInOut2(t) {
      return ((t = t * 2 - 1) < 0 ? a2 * Math.pow(2, 10 * t) * Math.sin((s2 - t) / p) : 2 - a2 * Math.pow(2, -10 * t) * Math.sin((s2 + t) / p)) / 2;
    }
    elasticInOut2.amplitude = function(a3) {
      return custom(a3, p * tau);
    };
    elasticInOut2.period = function(p2) {
      return custom(a2, p2);
    };
    return elasticInOut2;
  }(amplitude, period);
  var defaultTiming = {
    time: null,
    // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };
  function inherit(node, id2) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id2])) {
      if (!(node = node.parentNode)) {
        return defaultTiming.time = now(), defaultTiming;
      }
    }
    return timing;
  }
  var selection_transition = function(name) {
    var id2, timing;
    if (name instanceof Transition) {
      id2 = name._id, name = name._name;
    } else {
      id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule(node, name, id2, i, group, timing || inherit(node, id2));
        }
      }
    }
    return new Transition(groups, this._parents, name, id2);
  };
  selection.prototype.interrupt = selection_interrupt;
  selection.prototype.transition = selection_transition;
  var root$1 = [null];
  var active = function(node, name) {
    var schedules = node.__transition, schedule$$1, i;
    if (schedules) {
      name = name == null ? null : name + "";
      for (i in schedules) {
        if ((schedule$$1 = schedules[i]).state > SCHEDULED && schedule$$1.name === name) {
          return new Transition([[node]], root$1, name, +i);
        }
      }
    }
    return null;
  };
  var constant$4 = function(x2) {
    return function() {
      return x2;
    };
  };
  var BrushEvent = function(target, type2, selection2) {
    this.target = target;
    this.type = type2;
    this.selection = selection2;
  };
  function nopropagation$1() {
    exports2.event.stopImmediatePropagation();
  }
  var noevent$1 = function() {
    exports2.event.preventDefault();
    exports2.event.stopImmediatePropagation();
  };
  var MODE_DRAG = { name: "drag" };
  var MODE_SPACE = { name: "space" };
  var MODE_HANDLE = { name: "handle" };
  var MODE_CENTER = { name: "center" };
  var X = {
    name: "x",
    handles: ["e", "w"].map(type),
    input: function(x2, e) {
      return x2 && [
        [x2[0], e[0][1]],
        [x2[1], e[1][1]]
      ];
    },
    output: function(xy) {
      return xy && [xy[0][0], xy[1][0]];
    }
  };
  var Y = {
    name: "y",
    handles: ["n", "s"].map(type),
    input: function(y2, e) {
      return y2 && [
        [e[0][0], y2[0]],
        [e[1][0], y2[1]]
      ];
    },
    output: function(xy) {
      return xy && [xy[0][1], xy[1][1]];
    }
  };
  var XY = {
    name: "xy",
    handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(type),
    input: function(xy) {
      return xy;
    },
    output: function(xy) {
      return xy;
    }
  };
  var cursors = {
    overlay: "crosshair",
    selection: "move",
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var flipX = {
    e: "w",
    w: "e",
    nw: "ne",
    ne: "nw",
    se: "sw",
    sw: "se"
  };
  var flipY = {
    n: "s",
    s: "n",
    nw: "sw",
    ne: "se",
    se: "ne",
    sw: "nw"
  };
  var signsX = {
    overlay: 1,
    selection: 1,
    n: null,
    e: 1,
    s: null,
    w: -1,
    nw: -1,
    ne: 1,
    se: 1,
    sw: -1
  };
  var signsY = {
    overlay: 1,
    selection: 1,
    n: -1,
    e: null,
    s: 1,
    w: null,
    nw: -1,
    ne: -1,
    se: 1,
    sw: 1
  };
  function type(t) {
    return { type: t };
  }
  function defaultFilter() {
    return !exports2.event.button;
  }
  function defaultExtent() {
    var svg = this.ownerSVGElement || this;
    return [
      [0, 0],
      [svg.width.baseVal.value, svg.height.baseVal.value]
    ];
  }
  function local(node) {
    while (!node.__brush)
      if (!(node = node.parentNode))
        return;
    return node.__brush;
  }
  function empty(extent2) {
    return extent2[0][0] === extent2[1][0] || extent2[0][1] === extent2[1][1];
  }
  function brushSelection(node) {
    var state = node.__brush;
    return state ? state.dim.output(state.selection) : null;
  }
  function brushX() {
    return brush$1(X);
  }
  function brushY() {
    return brush$1(Y);
  }
  var brush = function() {
    return brush$1(XY);
  };
  function brush$1(dim) {
    var extent2 = defaultExtent, filter = defaultFilter, listeners = dispatch(brush2, "start", "brush", "end"), handleSize = 6, touchending;
    function brush2(group) {
      var overlay = group.property("__brush", initialize).selectAll(".overlay").data([type("overlay")]);
      overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", cursors.overlay).merge(overlay).each(function() {
        var extent3 = local(this).extent;
        select(this).attr("x", extent3[0][0]).attr("y", extent3[0][1]).attr("width", extent3[1][0] - extent3[0][0]).attr("height", extent3[1][1] - extent3[0][1]);
      });
      group.selectAll(".selection").data([type("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
      var handle = group.selectAll(".handle").data(dim.handles, function(d) {
        return d.type;
      });
      handle.exit().remove();
      handle.enter().append("rect").attr("class", function(d) {
        return "handle handle--" + d.type;
      }).attr("cursor", function(d) {
        return cursors[d.type];
      });
      group.each(redraw).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", started);
    }
    brush2.move = function(group, selection2) {
      if (group.selection) {
        group.on("start.brush", function() {
          emitter(this, arguments).beforestart().start();
        }).on("interrupt.brush end.brush", function() {
          emitter(this, arguments).end();
        }).tween("brush", function() {
          var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input(
            typeof selection2 === "function" ? selection2.apply(this, arguments) : selection2,
            state.extent
          ), i = interpolateValue(selection0, selection1);
          function tween(t) {
            state.selection = t === 1 && empty(selection1) ? null : i(t);
            redraw.call(that);
            emit.brush();
          }
          return selection0 && selection1 ? tween : tween(1);
        });
      } else {
        group.each(function() {
          var that = this, args = arguments, state = that.__brush, selection1 = dim.input(
            typeof selection2 === "function" ? selection2.apply(that, args) : selection2,
            state.extent
          ), emit = emitter(that, args).beforestart();
          interrupt(that);
          state.selection = selection1 == null || empty(selection1) ? null : selection1;
          redraw.call(that);
          emit.start().brush().end();
        });
      }
    };
    function redraw() {
      var group = select(this), selection2 = local(this).selection;
      if (selection2) {
        group.selectAll(".selection").style("display", null).attr("x", selection2[0][0]).attr("y", selection2[0][1]).attr("width", selection2[1][0] - selection2[0][0]).attr("height", selection2[1][1] - selection2[0][1]);
        group.selectAll(".handle").style("display", null).attr("x", function(d) {
          return d.type[d.type.length - 1] === "e" ? selection2[1][0] - handleSize / 2 : selection2[0][0] - handleSize / 2;
        }).attr("y", function(d) {
          return d.type[0] === "s" ? selection2[1][1] - handleSize / 2 : selection2[0][1] - handleSize / 2;
        }).attr("width", function(d) {
          return d.type === "n" || d.type === "s" ? selection2[1][0] - selection2[0][0] + handleSize : handleSize;
        }).attr("height", function(d) {
          return d.type === "e" || d.type === "w" ? selection2[1][1] - selection2[0][1] + handleSize : handleSize;
        });
      } else {
        group.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
      }
    }
    function emitter(that, args) {
      return that.__brush.emitter || new Emitter(that, args);
    }
    function Emitter(that, args) {
      this.that = that;
      this.args = args;
      this.state = that.__brush;
      this.active = 0;
    }
    Emitter.prototype = {
      beforestart: function() {
        if (++this.active === 1)
          this.state.emitter = this, this.starting = true;
        return this;
      },
      start: function() {
        if (this.starting)
          this.starting = false, this.emit("start");
        return this;
      },
      brush: function() {
        this.emit("brush");
        return this;
      },
      end: function() {
        if (--this.active === 0)
          delete this.state.emitter, this.emit("end");
        return this;
      },
      emit: function(type2) {
        customEvent(
          new BrushEvent(brush2, type2, dim.output(this.state.selection)),
          listeners.apply,
          listeners,
          [type2, this.that, this.args]
        );
      }
    };
    function started() {
      if (exports2.event.touches) {
        if (exports2.event.changedTouches.length < exports2.event.touches.length)
          return noevent$1();
      } else if (touchending)
        return;
      if (!filter.apply(this, arguments))
        return;
      var that = this, type2 = exports2.event.target.__data__.type, mode = (exports2.event.metaKey ? type2 = "overlay" : type2) === "selection" ? MODE_DRAG : exports2.event.altKey ? MODE_CENTER : MODE_HANDLE, signX = dim === Y ? null : signsX[type2], signY = dim === X ? null : signsY[type2], state = local(that), extent3 = state.extent, selection2 = state.selection, W = extent3[0][0], w0, w1, N = extent3[0][1], n0, n1, E2 = extent3[1][0], e0, e1, S = extent3[1][1], s0, s1, dx, dy, moving, shifting = signX && signY && exports2.event.shiftKey, lockX, lockY, point0 = mouse(that), point2 = point0, emit = emitter(that, arguments).beforestart();
      if (type2 === "overlay") {
        state.selection = selection2 = [
          [w0 = dim === Y ? W : point0[0], n0 = dim === X ? N : point0[1]],
          [e0 = dim === Y ? E2 : w0, s0 = dim === X ? S : n0]
        ];
      } else {
        w0 = selection2[0][0];
        n0 = selection2[0][1];
        e0 = selection2[1][0];
        s0 = selection2[1][1];
      }
      w1 = w0;
      n1 = n0;
      e1 = e0;
      s1 = s0;
      var group = select(that).attr("pointer-events", "none");
      var overlay = group.selectAll(".overlay").attr("cursor", cursors[type2]);
      if (exports2.event.touches) {
        group.on("touchmove.brush", moved, true).on("touchend.brush touchcancel.brush", ended, true);
      } else {
        var view = select(exports2.event.view).on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
        dragDisable(exports2.event.view);
      }
      nopropagation$1();
      interrupt(that);
      redraw.call(that);
      emit.start();
      function moved() {
        var point1 = mouse(that);
        if (shifting && !lockX && !lockY) {
          if (Math.abs(point1[0] - point2[0]) > Math.abs(point1[1] - point2[1]))
            lockY = true;
          else
            lockX = true;
        }
        point2 = point1;
        moving = true;
        noevent$1();
        move();
      }
      function move() {
        var t;
        dx = point2[0] - point0[0];
        dy = point2[1] - point0[1];
        switch (mode) {
          case MODE_SPACE:
          case MODE_DRAG: {
            if (signX)
              dx = Math.max(W - w0, Math.min(E2 - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
            if (signY)
              dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
            break;
          }
          case MODE_HANDLE: {
            if (signX < 0)
              dx = Math.max(W - w0, Math.min(E2 - w0, dx)), w1 = w0 + dx, e1 = e0;
            else if (signX > 0)
              dx = Math.max(W - e0, Math.min(E2 - e0, dx)), w1 = w0, e1 = e0 + dx;
            if (signY < 0)
              dy = Math.max(N - n0, Math.min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
            else if (signY > 0)
              dy = Math.max(N - s0, Math.min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
            break;
          }
          case MODE_CENTER: {
            if (signX)
              w1 = Math.max(W, Math.min(E2, w0 - dx * signX)), e1 = Math.max(W, Math.min(E2, e0 + dx * signX));
            if (signY)
              n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY));
            break;
          }
        }
        if (e1 < w1) {
          signX *= -1;
          t = w0, w0 = e0, e0 = t;
          t = w1, w1 = e1, e1 = t;
          if (type2 in flipX)
            overlay.attr("cursor", cursors[type2 = flipX[type2]]);
        }
        if (s1 < n1) {
          signY *= -1;
          t = n0, n0 = s0, s0 = t;
          t = n1, n1 = s1, s1 = t;
          if (type2 in flipY)
            overlay.attr("cursor", cursors[type2 = flipY[type2]]);
        }
        if (state.selection)
          selection2 = state.selection;
        if (lockX)
          w1 = selection2[0][0], e1 = selection2[1][0];
        if (lockY)
          n1 = selection2[0][1], s1 = selection2[1][1];
        if (selection2[0][0] !== w1 || selection2[0][1] !== n1 || selection2[1][0] !== e1 || selection2[1][1] !== s1) {
          state.selection = [
            [w1, n1],
            [e1, s1]
          ];
          redraw.call(that);
          emit.brush();
        }
      }
      function ended() {
        nopropagation$1();
        if (exports2.event.touches) {
          if (exports2.event.touches.length)
            return;
          if (touchending)
            clearTimeout(touchending);
          touchending = setTimeout(function() {
            touchending = null;
          }, 500);
          group.on("touchmove.brush touchend.brush touchcancel.brush", null);
        } else {
          yesdrag(exports2.event.view, moving);
          view.on(
            "keydown.brush keyup.brush mousemove.brush mouseup.brush",
            null
          );
        }
        group.attr("pointer-events", "all");
        overlay.attr("cursor", cursors.overlay);
        if (state.selection)
          selection2 = state.selection;
        if (empty(selection2))
          state.selection = null, redraw.call(that);
        emit.end();
      }
      function keydowned() {
        switch (exports2.event.keyCode) {
          case 16: {
            shifting = signX && signY;
            break;
          }
          case 18: {
            if (mode === MODE_HANDLE) {
              if (signX)
                e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY)
                s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
              move();
            }
            break;
          }
          case 32: {
            if (mode === MODE_HANDLE || mode === MODE_CENTER) {
              if (signX < 0)
                e0 = e1 - dx;
              else if (signX > 0)
                w0 = w1 - dx;
              if (signY < 0)
                s0 = s1 - dy;
              else if (signY > 0)
                n0 = n1 - dy;
              mode = MODE_SPACE;
              overlay.attr("cursor", cursors.selection);
              move();
            }
            break;
          }
          default:
            return;
        }
        noevent$1();
      }
      function keyupped() {
        switch (exports2.event.keyCode) {
          case 16: {
            if (shifting) {
              lockX = lockY = shifting = false;
              move();
            }
            break;
          }
          case 18: {
            if (mode === MODE_CENTER) {
              if (signX < 0)
                e0 = e1;
              else if (signX > 0)
                w0 = w1;
              if (signY < 0)
                s0 = s1;
              else if (signY > 0)
                n0 = n1;
              mode = MODE_HANDLE;
              move();
            }
            break;
          }
          case 32: {
            if (mode === MODE_SPACE) {
              if (exports2.event.altKey) {
                if (signX)
                  e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                if (signY)
                  s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                mode = MODE_CENTER;
              } else {
                if (signX < 0)
                  e0 = e1;
                else if (signX > 0)
                  w0 = w1;
                if (signY < 0)
                  s0 = s1;
                else if (signY > 0)
                  n0 = n1;
                mode = MODE_HANDLE;
              }
              overlay.attr("cursor", cursors[type2]);
              move();
            }
            break;
          }
          default:
            return;
        }
        noevent$1();
      }
    }
    function initialize() {
      var state = this.__brush || { selection: null };
      state.extent = extent2.apply(this, arguments);
      state.dim = dim;
      return state;
    }
    brush2.extent = function(_) {
      return arguments.length ? (extent2 = typeof _ === "function" ? _ : constant$4([
        [+_[0][0], +_[0][1]],
        [+_[1][0], +_[1][1]]
      ]), brush2) : extent2;
    };
    brush2.filter = function(_) {
      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$4(!!_), brush2) : filter;
    };
    brush2.handleSize = function(_) {
      return arguments.length ? (handleSize = +_, brush2) : handleSize;
    };
    brush2.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? brush2 : value;
    };
    return brush2;
  }
  var cos = Math.cos;
  var sin = Math.sin;
  var pi$1 = Math.PI;
  var halfPi$1 = pi$1 / 2;
  var tau$1 = pi$1 * 2;
  var max$1 = Math.max;
  function compareValue(compare) {
    return function(a2, b) {
      return compare(
        a2.source.value + a2.target.value,
        b.source.value + b.target.value
      );
    };
  }
  var chord = function() {
    var padAngle = 0, sortGroups = null, sortSubgroups = null, sortChords = null;
    function chord2(matrix) {
      var n = matrix.length, groupSums = [], groupIndex = sequence(n), subgroupIndex = [], chords = [], groups = chords.groups = new Array(n), subgroups = new Array(n * n), k2, x2, x02, dx, i, j;
      k2 = 0, i = -1;
      while (++i < n) {
        x2 = 0, j = -1;
        while (++j < n) {
          x2 += matrix[i][j];
        }
        groupSums.push(x2);
        subgroupIndex.push(sequence(n));
        k2 += x2;
      }
      if (sortGroups)
        groupIndex.sort(function(a2, b) {
          return sortGroups(groupSums[a2], groupSums[b]);
        });
      if (sortSubgroups)
        subgroupIndex.forEach(function(d, i2) {
          d.sort(function(a2, b) {
            return sortSubgroups(matrix[i2][a2], matrix[i2][b]);
          });
        });
      k2 = max$1(0, tau$1 - padAngle * n) / k2;
      dx = k2 ? padAngle : tau$1 / n;
      x2 = 0, i = -1;
      while (++i < n) {
        x02 = x2, j = -1;
        while (++j < n) {
          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x2, a1 = x2 += v * k2;
          subgroups[dj * n + di] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }
        groups[di] = {
          index: di,
          startAngle: x02,
          endAngle: x2,
          value: groupSums[di]
        };
        x2 += dx;
      }
      i = -1;
      while (++i < n) {
        j = i - 1;
        while (++j < n) {
          var source = subgroups[j * n + i], target = subgroups[i * n + j];
          if (source.value || target.value) {
            chords.push(
              source.value < target.value ? { source: target, target: source } : { source, target }
            );
          }
        }
      }
      return sortChords ? chords.sort(sortChords) : chords;
    }
    chord2.padAngle = function(_) {
      return arguments.length ? (padAngle = max$1(0, _), chord2) : padAngle;
    };
    chord2.sortGroups = function(_) {
      return arguments.length ? (sortGroups = _, chord2) : sortGroups;
    };
    chord2.sortSubgroups = function(_) {
      return arguments.length ? (sortSubgroups = _, chord2) : sortSubgroups;
    };
    chord2.sortChords = function(_) {
      return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord2) : sortChords && sortChords._;
    };
    return chord2;
  };
  var slice$2 = Array.prototype.slice;
  var constant$5 = function(x2) {
    return function() {
      return x2;
    };
  };
  var pi$2 = Math.PI;
  var tau$2 = 2 * pi$2;
  var epsilon$1 = 1e-6;
  var tauEpsilon = tau$2 - epsilon$1;
  function Path() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
  }
  function path() {
    return new Path();
  }
  Path.prototype = path.prototype = {
    constructor: Path,
    moveTo: function(x2, y2) {
      this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y2);
    },
    closePath: function() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._ += "Z";
      }
    },
    lineTo: function(x2, y2) {
      this._ += "L" + (this._x1 = +x2) + "," + (this._y1 = +y2);
    },
    quadraticCurveTo: function(x12, y12, x2, y2) {
      this._ += "Q" + +x12 + "," + +y12 + "," + (this._x1 = +x2) + "," + (this._y1 = +y2);
    },
    bezierCurveTo: function(x12, y12, x2, y2, x3, y3) {
      this._ += "C" + +x12 + "," + +y12 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x3) + "," + (this._y1 = +y3);
    },
    arcTo: function(x12, y12, x2, y2, r) {
      x12 = +x12, y12 = +y12, x2 = +x2, y2 = +y2, r = +r;
      var x02 = this._x1, y02 = this._y1, x21 = x2 - x12, y21 = y2 - y12, x01 = x02 - x12, y01 = y02 - y12, l01_2 = x01 * x01 + y01 * y01;
      if (r < 0)
        throw new Error("negative radius: " + r);
      if (this._x1 === null) {
        this._ += "M" + (this._x1 = x12) + "," + (this._y1 = y12);
      } else if (!(l01_2 > epsilon$1))
        ;
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
        this._ += "L" + (this._x1 = x12) + "," + (this._y1 = y12);
      } else {
        var x20 = x2 - x02, y20 = y2 - y02, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan(
          (pi$2 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2
        ), t01 = l / l01, t21 = l / l21;
        if (Math.abs(t01 - 1) > epsilon$1) {
          this._ += "L" + (x12 + t01 * x01) + "," + (y12 + t01 * y01);
        }
        this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x12 + t21 * x21) + "," + (this._y1 = y12 + t21 * y21);
      }
    },
    arc: function(x2, y2, r, a0, a1, ccw) {
      x2 = +x2, y2 = +y2, r = +r;
      var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x02 = x2 + dx, y02 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
      if (r < 0)
        throw new Error("negative radius: " + r);
      if (this._x1 === null) {
        this._ += "M" + x02 + "," + y02;
      } else if (Math.abs(this._x1 - x02) > epsilon$1 || Math.abs(this._y1 - y02) > epsilon$1) {
        this._ += "L" + x02 + "," + y02;
      }
      if (!r)
        return;
      if (da < 0)
        da = da % tau$2 + tau$2;
      if (da > tauEpsilon) {
        this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x2 - dx) + "," + (y2 - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x02) + "," + (this._y1 = y02);
      } else if (da > epsilon$1) {
        this._ += "A" + r + "," + r + ",0," + +(da >= pi$2) + "," + cw + "," + (this._x1 = x2 + r * Math.cos(a1)) + "," + (this._y1 = y2 + r * Math.sin(a1));
      }
    },
    rect: function(x2, y2, w, h) {
      this._ += "M" + (this._x0 = this._x1 = +x2) + "," + (this._y0 = this._y1 = +y2) + "h" + +w + "v" + +h + "h" + -w + "Z";
    },
    toString: function() {
      return this._;
    }
  };
  function defaultSource(d) {
    return d.source;
  }
  function defaultTarget(d) {
    return d.target;
  }
  function defaultRadius(d) {
    return d.radius;
  }
  function defaultStartAngle(d) {
    return d.startAngle;
  }
  function defaultEndAngle(d) {
    return d.endAngle;
  }
  var ribbon = function() {
    var source = defaultSource, target = defaultTarget, radius = defaultRadius, startAngle = defaultStartAngle, endAngle = defaultEndAngle, context = null;
    function ribbon2() {
      var buffer, argv = slice$2.call(arguments), s2 = source.apply(this, argv), t = target.apply(this, argv), sr = +radius.apply(this, (argv[0] = s2, argv)), sa0 = startAngle.apply(this, argv) - halfPi$1, sa1 = endAngle.apply(this, argv) - halfPi$1, sx0 = sr * cos(sa0), sy0 = sr * sin(sa0), tr = +radius.apply(this, (argv[0] = t, argv)), ta0 = startAngle.apply(this, argv) - halfPi$1, ta1 = endAngle.apply(this, argv) - halfPi$1;
      if (!context)
        context = buffer = path();
      context.moveTo(sx0, sy0);
      context.arc(0, 0, sr, sa0, sa1);
      if (sa0 !== ta0 || sa1 !== ta1) {
        context.quadraticCurveTo(0, 0, tr * cos(ta0), tr * sin(ta0));
        context.arc(0, 0, tr, ta0, ta1);
      }
      context.quadraticCurveTo(0, 0, sx0, sy0);
      context.closePath();
      if (buffer)
        return context = null, buffer + "" || null;
    }
    ribbon2.radius = function(_) {
      return arguments.length ? (radius = typeof _ === "function" ? _ : constant$5(+_), ribbon2) : radius;
    };
    ribbon2.startAngle = function(_) {
      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$5(+_), ribbon2) : startAngle;
    };
    ribbon2.endAngle = function(_) {
      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$5(+_), ribbon2) : endAngle;
    };
    ribbon2.source = function(_) {
      return arguments.length ? (source = _, ribbon2) : source;
    };
    ribbon2.target = function(_) {
      return arguments.length ? (target = _, ribbon2) : target;
    };
    ribbon2.context = function(_) {
      return arguments.length ? (context = _ == null ? null : _, ribbon2) : context;
    };
    return ribbon2;
  };
  var prefix = "$";
  function Map() {
  }
  Map.prototype = map$1.prototype = {
    constructor: Map,
    has: function(key) {
      return prefix + key in this;
    },
    get: function(key) {
      return this[prefix + key];
    },
    set: function(key, value) {
      this[prefix + key] = value;
      return this;
    },
    remove: function(key) {
      var property = prefix + key;
      return property in this && delete this[property];
    },
    clear: function() {
      for (var property in this)
        if (property[0] === prefix)
          delete this[property];
    },
    keys: function() {
      var keys2 = [];
      for (var property in this)
        if (property[0] === prefix)
          keys2.push(property.slice(1));
      return keys2;
    },
    values: function() {
      var values2 = [];
      for (var property in this)
        if (property[0] === prefix)
          values2.push(this[property]);
      return values2;
    },
    entries: function() {
      var entries2 = [];
      for (var property in this)
        if (property[0] === prefix)
          entries2.push({ key: property.slice(1), value: this[property] });
      return entries2;
    },
    size: function() {
      var size = 0;
      for (var property in this)
        if (property[0] === prefix)
          ++size;
      return size;
    },
    empty: function() {
      for (var property in this)
        if (property[0] === prefix)
          return false;
      return true;
    },
    each: function(f) {
      for (var property in this)
        if (property[0] === prefix)
          f(this[property], property.slice(1), this);
    }
  };
  function map$1(object2, f) {
    var map2 = new Map();
    if (object2 instanceof Map)
      object2.each(function(value, key2) {
        map2.set(key2, value);
      });
    else if (Array.isArray(object2)) {
      var i = -1, n = object2.length, o;
      if (f == null)
        while (++i < n)
          map2.set(i, object2[i]);
      else
        while (++i < n)
          map2.set(f(o = object2[i], i, object2), o);
    } else if (object2)
      for (var key in object2)
        map2.set(key, object2[key]);
    return map2;
  }
  var nest = function() {
    var keys2 = [], sortKeys = [], sortValues, rollup, nest2;
    function apply(array2, depth, createResult, setResult) {
      if (depth >= keys2.length) {
        if (sortValues != null)
          array2.sort(sortValues);
        return rollup != null ? rollup(array2) : array2;
      }
      var i = -1, n = array2.length, key = keys2[depth++], keyValue, value, valuesByKey = map$1(), values2, result = createResult();
      while (++i < n) {
        if (values2 = valuesByKey.get(keyValue = key(value = array2[i]) + "")) {
          values2.push(value);
        } else {
          valuesByKey.set(keyValue, [value]);
        }
      }
      valuesByKey.each(function(values3, key2) {
        setResult(result, key2, apply(values3, depth, createResult, setResult));
      });
      return result;
    }
    function entries2(map2, depth) {
      if (++depth > keys2.length)
        return map2;
      var array2, sortKey = sortKeys[depth - 1];
      if (rollup != null && depth >= keys2.length)
        array2 = map2.entries();
      else
        array2 = [], map2.each(function(v, k2) {
          array2.push({ key: k2, values: entries2(v, depth) });
        });
      return sortKey != null ? array2.sort(function(a2, b) {
        return sortKey(a2.key, b.key);
      }) : array2;
    }
    return nest2 = {
      object: function(array2) {
        return apply(array2, 0, createObject, setObject);
      },
      map: function(array2) {
        return apply(array2, 0, createMap, setMap);
      },
      entries: function(array2) {
        return entries2(apply(array2, 0, createMap, setMap), 0);
      },
      key: function(d) {
        keys2.push(d);
        return nest2;
      },
      sortKeys: function(order) {
        sortKeys[keys2.length - 1] = order;
        return nest2;
      },
      sortValues: function(order) {
        sortValues = order;
        return nest2;
      },
      rollup: function(f) {
        rollup = f;
        return nest2;
      }
    };
  };
  function createObject() {
    return {};
  }
  function setObject(object2, key, value) {
    object2[key] = value;
  }
  function createMap() {
    return map$1();
  }
  function setMap(map2, key, value) {
    map2.set(key, value);
  }
  function Set() {
  }
  var proto = map$1.prototype;
  Set.prototype = set$2.prototype = {
    constructor: Set,
    has: proto.has,
    add: function(value) {
      value += "";
      this[prefix + value] = value;
      return this;
    },
    remove: proto.remove,
    clear: proto.clear,
    values: proto.keys,
    size: proto.size,
    empty: proto.empty,
    each: proto.each
  };
  function set$2(object2, f) {
    var set2 = new Set();
    if (object2 instanceof Set)
      object2.each(function(value) {
        set2.add(value);
      });
    else if (object2) {
      var i = -1, n = object2.length;
      if (f == null)
        while (++i < n)
          set2.add(object2[i]);
      else
        while (++i < n)
          set2.add(f(object2[i], i, object2));
    }
    return set2;
  }
  var keys = function(map2) {
    var keys2 = [];
    for (var key in map2)
      keys2.push(key);
    return keys2;
  };
  var values = function(map2) {
    var values2 = [];
    for (var key in map2)
      values2.push(map2[key]);
    return values2;
  };
  var entries = function(map2) {
    var entries2 = [];
    for (var key in map2)
      entries2.push({ key, value: map2[key] });
    return entries2;
  };
  var EOL = {};
  var EOF = {};
  var QUOTE = 34;
  var NEWLINE = 10;
  var RETURN = 13;
  function objectConverter(columns) {
    return new Function(
      "d",
      "return {" + columns.map(function(name, i) {
        return JSON.stringify(name) + ": d[" + i + "]";
      }).join(",") + "}"
    );
  }
  function customConverter(columns, f) {
    var object2 = objectConverter(columns);
    return function(row, i) {
      return f(object2(row), i, columns);
    };
  }
  function inferColumns(rows) {
    var columnSet = /* @__PURE__ */ Object.create(null), columns = [];
    rows.forEach(function(row) {
      for (var column in row) {
        if (!(column in columnSet)) {
          columns.push(columnSet[column] = column);
        }
      }
    });
    return columns;
  }
  var dsv = function(delimiter) {
    var reFormat = new RegExp('["' + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
    function parse(text2, f) {
      var convert, columns, rows = parseRows(text2, function(row, i) {
        if (convert)
          return convert(row, i - 1);
        columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
      });
      rows.columns = columns || [];
      return rows;
    }
    function parseRows(text2, f) {
      var rows = [], N = text2.length, I = 0, n = 0, t, eof = N <= 0, eol = false;
      if (text2.charCodeAt(N - 1) === NEWLINE)
        --N;
      if (text2.charCodeAt(N - 1) === RETURN)
        --N;
      function token() {
        if (eof)
          return EOF;
        if (eol)
          return eol = false, EOL;
        var i, j = I, c2;
        if (text2.charCodeAt(j) === QUOTE) {
          while (I++ < N && text2.charCodeAt(I) !== QUOTE || text2.charCodeAt(++I) === QUOTE)
            ;
          if ((i = I) >= N)
            eof = true;
          else if ((c2 = text2.charCodeAt(I++)) === NEWLINE)
            eol = true;
          else if (c2 === RETURN) {
            eol = true;
            if (text2.charCodeAt(I) === NEWLINE)
              ++I;
          }
          return text2.slice(j + 1, i - 1).replace(/""/g, '"');
        }
        while (I < N) {
          if ((c2 = text2.charCodeAt(i = I++)) === NEWLINE)
            eol = true;
          else if (c2 === RETURN) {
            eol = true;
            if (text2.charCodeAt(I) === NEWLINE)
              ++I;
          } else if (c2 !== DELIMITER)
            continue;
          return text2.slice(j, i);
        }
        return eof = true, text2.slice(j, N);
      }
      while ((t = token()) !== EOF) {
        var row = [];
        while (t !== EOL && t !== EOF)
          row.push(t), t = token();
        if (f && (row = f(row, n++)) == null)
          continue;
        rows.push(row);
      }
      return rows;
    }
    function format(rows, columns) {
      if (columns == null)
        columns = inferColumns(rows);
      return [columns.map(formatValue).join(delimiter)].concat(
        rows.map(function(row) {
          return columns.map(function(column) {
            return formatValue(row[column]);
          }).join(delimiter);
        })
      ).join("\n");
    }
    function formatRows(rows) {
      return rows.map(formatRow).join("\n");
    }
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(text2) {
      return text2 == null ? "" : reFormat.test(text2 += "") ? '"' + text2.replace(/"/g, '""') + '"' : text2;
    }
    return {
      parse,
      parseRows,
      format,
      formatRows
    };
  };
  var csv = dsv(",");
  var csvParse = csv.parse;
  var csvParseRows = csv.parseRows;
  var csvFormat = csv.format;
  var csvFormatRows = csv.formatRows;
  var tsv = dsv("	");
  var tsvParse = tsv.parse;
  var tsvParseRows = tsv.parseRows;
  var tsvFormat = tsv.format;
  var tsvFormatRows = tsv.formatRows;
  var center$1 = function(x2, y2) {
    var nodes;
    if (x2 == null)
      x2 = 0;
    if (y2 == null)
      y2 = 0;
    function force() {
      var i, n = nodes.length, node, sx = 0, sy = 0;
      for (i = 0; i < n; ++i) {
        node = nodes[i], sx += node.x, sy += node.y;
      }
      for (sx = sx / n - x2, sy = sy / n - y2, i = 0; i < n; ++i) {
        node = nodes[i], node.x -= sx, node.y -= sy;
      }
    }
    force.initialize = function(_) {
      nodes = _;
    };
    force.x = function(_) {
      return arguments.length ? (x2 = +_, force) : x2;
    };
    force.y = function(_) {
      return arguments.length ? (y2 = +_, force) : y2;
    };
    return force;
  };
  var constant$6 = function(x2) {
    return function() {
      return x2;
    };
  };
  var jiggle = function() {
    return (Math.random() - 0.5) * 1e-6;
  };
  var tree_add = function(d) {
    var x2 = +this._x.call(null, d), y2 = +this._y.call(null, d);
    return add(this.cover(x2, y2), x2, y2, d);
  };
  function add(tree2, x2, y2, d) {
    if (isNaN(x2) || isNaN(y2))
      return tree2;
    var parent, node = tree2._root, leaf = { data: d }, x02 = tree2._x0, y02 = tree2._y0, x12 = tree2._x1, y12 = tree2._y1, xm, ym, xp, yp, right2, bottom2, i, j;
    if (!node)
      return tree2._root = leaf, tree2;
    while (node.length) {
      if (right2 = x2 >= (xm = (x02 + x12) / 2))
        x02 = xm;
      else
        x12 = xm;
      if (bottom2 = y2 >= (ym = (y02 + y12) / 2))
        y02 = ym;
      else
        y12 = ym;
      if (parent = node, !(node = node[i = bottom2 << 1 | right2]))
        return parent[i] = leaf, tree2;
    }
    xp = +tree2._x.call(null, node.data);
    yp = +tree2._y.call(null, node.data);
    if (x2 === xp && y2 === yp)
      return leaf.next = node, parent ? parent[i] = leaf : tree2._root = leaf, tree2;
    do {
      parent = parent ? parent[i] = new Array(4) : tree2._root = new Array(4);
      if (right2 = x2 >= (xm = (x02 + x12) / 2))
        x02 = xm;
      else
        x12 = xm;
      if (bottom2 = y2 >= (ym = (y02 + y12) / 2))
        y02 = ym;
      else
        y12 = ym;
    } while ((i = bottom2 << 1 | right2) === (j = (yp >= ym) << 1 | xp >= xm));
    return parent[j] = node, parent[i] = leaf, tree2;
  }
  function addAll(data) {
    var d, i, n = data.length, x2, y2, xz = new Array(n), yz = new Array(n), x02 = Infinity, y02 = Infinity, x12 = -Infinity, y12 = -Infinity;
    for (i = 0; i < n; ++i) {
      if (isNaN(x2 = +this._x.call(null, d = data[i])) || isNaN(y2 = +this._y.call(null, d)))
        continue;
      xz[i] = x2;
      yz[i] = y2;
      if (x2 < x02)
        x02 = x2;
      if (x2 > x12)
        x12 = x2;
      if (y2 < y02)
        y02 = y2;
      if (y2 > y12)
        y12 = y2;
    }
    if (x12 < x02)
      x02 = this._x0, x12 = this._x1;
    if (y12 < y02)
      y02 = this._y0, y12 = this._y1;
    this.cover(x02, y02).cover(x12, y12);
    for (i = 0; i < n; ++i) {
      add(this, xz[i], yz[i], data[i]);
    }
    return this;
  }
  var tree_cover = function(x2, y2) {
    if (isNaN(x2 = +x2) || isNaN(y2 = +y2))
      return this;
    var x02 = this._x0, y02 = this._y0, x12 = this._x1, y12 = this._y1;
    if (isNaN(x02)) {
      x12 = (x02 = Math.floor(x2)) + 1;
      y12 = (y02 = Math.floor(y2)) + 1;
    } else if (x02 > x2 || x2 > x12 || y02 > y2 || y2 > y12) {
      var z = x12 - x02, node = this._root, parent, i;
      switch (i = (y2 < (y02 + y12) / 2) << 1 | x2 < (x02 + x12) / 2) {
        case 0: {
          do
            parent = new Array(4), parent[i] = node, node = parent;
          while (z *= 2, x12 = x02 + z, y12 = y02 + z, x2 > x12 || y2 > y12);
          break;
        }
        case 1: {
          do
            parent = new Array(4), parent[i] = node, node = parent;
          while (z *= 2, x02 = x12 - z, y12 = y02 + z, x02 > x2 || y2 > y12);
          break;
        }
        case 2: {
          do
            parent = new Array(4), parent[i] = node, node = parent;
          while (z *= 2, x12 = x02 + z, y02 = y12 - z, x2 > x12 || y02 > y2);
          break;
        }
        case 3: {
          do
            parent = new Array(4), parent[i] = node, node = parent;
          while (z *= 2, x02 = x12 - z, y02 = y12 - z, x02 > x2 || y02 > y2);
          break;
        }
      }
      if (this._root && this._root.length)
        this._root = node;
    } else
      return this;
    this._x0 = x02;
    this._y0 = y02;
    this._x1 = x12;
    this._y1 = y12;
    return this;
  };
  var tree_data = function() {
    var data = [];
    this.visit(function(node) {
      if (!node.length)
        do
          data.push(node.data);
        while (node = node.next);
    });
    return data;
  };
  var tree_extent = function(_) {
    return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? void 0 : [
      [this._x0, this._y0],
      [this._x1, this._y1]
    ];
  };
  var Quad = function(node, x02, y02, x12, y12) {
    this.node = node;
    this.x0 = x02;
    this.y0 = y02;
    this.x1 = x12;
    this.y1 = y12;
  };
  var tree_find = function(x2, y2, radius) {
    var data, x02 = this._x0, y02 = this._y0, x12, y12, x22, y22, x3 = this._x1, y3 = this._y1, quads = [], node = this._root, q, i;
    if (node)
      quads.push(new Quad(node, x02, y02, x3, y3));
    if (radius == null)
      radius = Infinity;
    else {
      x02 = x2 - radius, y02 = y2 - radius;
      x3 = x2 + radius, y3 = y2 + radius;
      radius *= radius;
    }
    while (q = quads.pop()) {
      if (!(node = q.node) || (x12 = q.x0) > x3 || (y12 = q.y0) > y3 || (x22 = q.x1) < x02 || (y22 = q.y1) < y02)
        continue;
      if (node.length) {
        var xm = (x12 + x22) / 2, ym = (y12 + y22) / 2;
        quads.push(
          new Quad(node[3], xm, ym, x22, y22),
          new Quad(node[2], x12, ym, xm, y22),
          new Quad(node[1], xm, y12, x22, ym),
          new Quad(node[0], x12, y12, xm, ym)
        );
        if (i = (y2 >= ym) << 1 | x2 >= xm) {
          q = quads[quads.length - 1];
          quads[quads.length - 1] = quads[quads.length - 1 - i];
          quads[quads.length - 1 - i] = q;
        }
      } else {
        var dx = x2 - +this._x.call(null, node.data), dy = y2 - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
        if (d2 < radius) {
          var d = Math.sqrt(radius = d2);
          x02 = x2 - d, y02 = y2 - d;
          x3 = x2 + d, y3 = y2 + d;
          data = node.data;
        }
      }
    }
    return data;
  };
  var tree_remove = function(d) {
    if (isNaN(x2 = +this._x.call(null, d)) || isNaN(y2 = +this._y.call(null, d)))
      return this;
    var parent, node = this._root, retainer, previous, next, x02 = this._x0, y02 = this._y0, x12 = this._x1, y12 = this._y1, x2, y2, xm, ym, right2, bottom2, i, j;
    if (!node)
      return this;
    if (node.length)
      while (true) {
        if (right2 = x2 >= (xm = (x02 + x12) / 2))
          x02 = xm;
        else
          x12 = xm;
        if (bottom2 = y2 >= (ym = (y02 + y12) / 2))
          y02 = ym;
        else
          y12 = ym;
        if (!(parent = node, node = node[i = bottom2 << 1 | right2]))
          return this;
        if (!node.length)
          break;
        if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3])
          retainer = parent, j = i;
      }
    while (node.data !== d)
      if (!(previous = node, node = node.next))
        return this;
    if (next = node.next)
      delete node.next;
    if (previous)
      return next ? previous.next = next : delete previous.next, this;
    if (!parent)
      return this._root = next, this;
    next ? parent[i] = next : delete parent[i];
    if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
      if (retainer)
        retainer[j] = node;
      else
        this._root = node;
    }
    return this;
  };
  function removeAll(data) {
    for (var i = 0, n = data.length; i < n; ++i)
      this.remove(data[i]);
    return this;
  }
  var tree_root = function() {
    return this._root;
  };
  var tree_size = function() {
    var size = 0;
    this.visit(function(node) {
      if (!node.length)
        do
          ++size;
        while (node = node.next);
    });
    return size;
  };
  var tree_visit = function(callback) {
    var quads = [], q, node = this._root, child, x02, y02, x12, y12;
    if (node)
      quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
    while (q = quads.pop()) {
      if (!callback(
        node = q.node,
        x02 = q.x0,
        y02 = q.y0,
        x12 = q.x1,
        y12 = q.y1
      ) && node.length) {
        var xm = (x02 + x12) / 2, ym = (y02 + y12) / 2;
        if (child = node[3])
          quads.push(new Quad(child, xm, ym, x12, y12));
        if (child = node[2])
          quads.push(new Quad(child, x02, ym, xm, y12));
        if (child = node[1])
          quads.push(new Quad(child, xm, y02, x12, ym));
        if (child = node[0])
          quads.push(new Quad(child, x02, y02, xm, ym));
      }
    }
    return this;
  };
  var tree_visitAfter = function(callback) {
    var quads = [], next = [], q;
    if (this._root)
      quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
    while (q = quads.pop()) {
      var node = q.node;
      if (node.length) {
        var child, x02 = q.x0, y02 = q.y0, x12 = q.x1, y12 = q.y1, xm = (x02 + x12) / 2, ym = (y02 + y12) / 2;
        if (child = node[0])
          quads.push(new Quad(child, x02, y02, xm, ym));
        if (child = node[1])
          quads.push(new Quad(child, xm, y02, x12, ym));
        if (child = node[2])
          quads.push(new Quad(child, x02, ym, xm, y12));
        if (child = node[3])
          quads.push(new Quad(child, xm, ym, x12, y12));
      }
      next.push(q);
    }
    while (q = next.pop()) {
      callback(q.node, q.x0, q.y0, q.x1, q.y1);
    }
    return this;
  };
  function defaultX(d) {
    return d[0];
  }
  var tree_x = function(_) {
    return arguments.length ? (this._x = _, this) : this._x;
  };
  function defaultY(d) {
    return d[1];
  }
  var tree_y = function(_) {
    return arguments.length ? (this._y = _, this) : this._y;
  };
  function quadtree(nodes, x2, y2) {
    var tree2 = new Quadtree(
      x2 == null ? defaultX : x2,
      y2 == null ? defaultY : y2,
      NaN,
      NaN,
      NaN,
      NaN
    );
    return nodes == null ? tree2 : tree2.addAll(nodes);
  }
  function Quadtree(x2, y2, x02, y02, x12, y12) {
    this._x = x2;
    this._y = y2;
    this._x0 = x02;
    this._y0 = y02;
    this._x1 = x12;
    this._y1 = y12;
    this._root = void 0;
  }
  function leaf_copy(leaf) {
    var copy2 = { data: leaf.data }, next = copy2;
    while (leaf = leaf.next)
      next = next.next = { data: leaf.data };
    return copy2;
  }
  var treeProto = quadtree.prototype = Quadtree.prototype;
  treeProto.copy = function() {
    var copy2 = new Quadtree(
      this._x,
      this._y,
      this._x0,
      this._y0,
      this._x1,
      this._y1
    ), node = this._root, nodes, child;
    if (!node)
      return copy2;
    if (!node.length)
      return copy2._root = leaf_copy(node), copy2;
    nodes = [{ source: node, target: copy2._root = new Array(4) }];
    while (node = nodes.pop()) {
      for (var i = 0; i < 4; ++i) {
        if (child = node.source[i]) {
          if (child.length)
            nodes.push({
              source: child,
              target: node.target[i] = new Array(4)
            });
          else
            node.target[i] = leaf_copy(child);
        }
      }
    }
    return copy2;
  };
  treeProto.add = tree_add;
  treeProto.addAll = addAll;
  treeProto.cover = tree_cover;
  treeProto.data = tree_data;
  treeProto.extent = tree_extent;
  treeProto.find = tree_find;
  treeProto.remove = tree_remove;
  treeProto.removeAll = removeAll;
  treeProto.root = tree_root;
  treeProto.size = tree_size;
  treeProto.visit = tree_visit;
  treeProto.visitAfter = tree_visitAfter;
  treeProto.x = tree_x;
  treeProto.y = tree_y;
  function x(d) {
    return d.x + d.vx;
  }
  function y(d) {
    return d.y + d.vy;
  }
  var collide = function(radius) {
    var nodes, radii, strength = 1, iterations = 1;
    if (typeof radius !== "function")
      radius = constant$6(radius == null ? 1 : +radius);
    function force() {
      var i, n = nodes.length, tree2, node, xi, yi, ri, ri2;
      for (var k2 = 0; k2 < iterations; ++k2) {
        tree2 = quadtree(nodes, x, y).visitAfter(prepare);
        for (i = 0; i < n; ++i) {
          node = nodes[i];
          ri = radii[node.index], ri2 = ri * ri;
          xi = node.x + node.vx;
          yi = node.y + node.vy;
          tree2.visit(apply);
        }
      }
      function apply(quad, x02, y02, x12, y12) {
        var data = quad.data, rj = quad.r, r = ri + rj;
        if (data) {
          if (data.index > node.index) {
            var x2 = xi - data.x - data.vx, y2 = yi - data.y - data.vy, l = x2 * x2 + y2 * y2;
            if (l < r * r) {
              if (x2 === 0)
                x2 = jiggle(), l += x2 * x2;
              if (y2 === 0)
                y2 = jiggle(), l += y2 * y2;
              l = (r - (l = Math.sqrt(l))) / l * strength;
              node.vx += (x2 *= l) * (r = (rj *= rj) / (ri2 + rj));
              node.vy += (y2 *= l) * r;
              data.vx -= x2 * (r = 1 - r);
              data.vy -= y2 * r;
            }
          }
          return;
        }
        return x02 > xi + r || x12 < xi - r || y02 > yi + r || y12 < yi - r;
      }
    }
    function prepare(quad) {
      if (quad.data)
        return quad.r = radii[quad.data.index];
      for (var i = quad.r = 0; i < 4; ++i) {
        if (quad[i] && quad[i].r > quad.r) {
          quad.r = quad[i].r;
        }
      }
    }
    function initialize() {
      if (!nodes)
        return;
      var i, n = nodes.length, node;
      radii = new Array(n);
      for (i = 0; i < n; ++i)
        node = nodes[i], radii[node.index] = +radius(node, i, nodes);
    }
    force.initialize = function(_) {
      nodes = _;
      initialize();
    };
    force.iterations = function(_) {
      return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
      return arguments.length ? (strength = +_, force) : strength;
    };
    force.radius = function(_) {
      return arguments.length ? (radius = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : radius;
    };
    return force;
  };
  function index(d) {
    return d.index;
  }
  function find(nodeById, nodeId) {
    var node = nodeById.get(nodeId);
    if (!node)
      throw new Error("missing: " + nodeId);
    return node;
  }
  var link = function(links) {
    var id2 = index, strength = defaultStrength, strengths, distance2 = constant$6(30), distances, nodes, count2, bias, iterations = 1;
    if (links == null)
      links = [];
    function defaultStrength(link2) {
      return 1 / Math.min(count2[link2.source.index], count2[link2.target.index]);
    }
    function force(alpha) {
      for (var k2 = 0, n = links.length; k2 < iterations; ++k2) {
        for (var i = 0, link2, source, target, x2, y2, l, b; i < n; ++i) {
          link2 = links[i], source = link2.source, target = link2.target;
          x2 = target.x + target.vx - source.x - source.vx || jiggle();
          y2 = target.y + target.vy - source.y - source.vy || jiggle();
          l = Math.sqrt(x2 * x2 + y2 * y2);
          l = (l - distances[i]) / l * alpha * strengths[i];
          x2 *= l, y2 *= l;
          target.vx -= x2 * (b = bias[i]);
          target.vy -= y2 * b;
          source.vx += x2 * (b = 1 - b);
          source.vy += y2 * b;
        }
      }
    }
    function initialize() {
      if (!nodes)
        return;
      var i, n = nodes.length, m = links.length, nodeById = map$1(nodes, id2), link2;
      for (i = 0, count2 = new Array(n); i < m; ++i) {
        link2 = links[i], link2.index = i;
        if (typeof link2.source !== "object")
          link2.source = find(nodeById, link2.source);
        if (typeof link2.target !== "object")
          link2.target = find(nodeById, link2.target);
        count2[link2.source.index] = (count2[link2.source.index] || 0) + 1;
        count2[link2.target.index] = (count2[link2.target.index] || 0) + 1;
      }
      for (i = 0, bias = new Array(m); i < m; ++i) {
        link2 = links[i], bias[i] = count2[link2.source.index] / (count2[link2.source.index] + count2[link2.target.index]);
      }
      strengths = new Array(m), initializeStrength();
      distances = new Array(m), initializeDistance();
    }
    function initializeStrength() {
      if (!nodes)
        return;
      for (var i = 0, n = links.length; i < n; ++i) {
        strengths[i] = +strength(links[i], i, links);
      }
    }
    function initializeDistance() {
      if (!nodes)
        return;
      for (var i = 0, n = links.length; i < n; ++i) {
        distances[i] = +distance2(links[i], i, links);
      }
    }
    force.initialize = function(_) {
      nodes = _;
      initialize();
    };
    force.links = function(_) {
      return arguments.length ? (links = _, initialize(), force) : links;
    };
    force.id = function(_) {
      return arguments.length ? (id2 = _, force) : id2;
    };
    force.iterations = function(_) {
      return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initializeStrength(), force) : strength;
    };
    force.distance = function(_) {
      return arguments.length ? (distance2 = typeof _ === "function" ? _ : constant$6(+_), initializeDistance(), force) : distance2;
    };
    return force;
  };
  function x$1(d) {
    return d.x;
  }
  function y$1(d) {
    return d.y;
  }
  var initialRadius = 10;
  var initialAngle = Math.PI * (3 - Math.sqrt(5));
  var simulation = function(nodes) {
    var simulation2, alpha = 1, alphaMin = 1e-3, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = map$1(), stepper = timer(step2), event = dispatch("tick", "end");
    if (nodes == null)
      nodes = [];
    function step2() {
      tick();
      event.call("tick", simulation2);
      if (alpha < alphaMin) {
        stepper.stop();
        event.call("end", simulation2);
      }
    }
    function tick() {
      var i, n = nodes.length, node;
      alpha += (alphaTarget - alpha) * alphaDecay;
      forces.each(function(force) {
        force(alpha);
      });
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null)
          node.x += node.vx *= velocityDecay;
        else
          node.x = node.fx, node.vx = 0;
        if (node.fy == null)
          node.y += node.vy *= velocityDecay;
        else
          node.y = node.fy, node.vy = 0;
      }
    }
    function initializeNodes() {
      for (var i = 0, n = nodes.length, node; i < n; ++i) {
        node = nodes[i], node.index = i;
        if (isNaN(node.x) || isNaN(node.y)) {
          var radius = initialRadius * Math.sqrt(i), angle2 = i * initialAngle;
          node.x = radius * Math.cos(angle2);
          node.y = radius * Math.sin(angle2);
        }
        if (isNaN(node.vx) || isNaN(node.vy)) {
          node.vx = node.vy = 0;
        }
      }
    }
    function initializeForce(force) {
      if (force.initialize)
        force.initialize(nodes);
      return force;
    }
    initializeNodes();
    return simulation2 = {
      tick,
      restart: function() {
        return stepper.restart(step2), simulation2;
      },
      stop: function() {
        return stepper.stop(), simulation2;
      },
      nodes: function(_) {
        return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation2) : nodes;
      },
      alpha: function(_) {
        return arguments.length ? (alpha = +_, simulation2) : alpha;
      },
      alphaMin: function(_) {
        return arguments.length ? (alphaMin = +_, simulation2) : alphaMin;
      },
      alphaDecay: function(_) {
        return arguments.length ? (alphaDecay = +_, simulation2) : +alphaDecay;
      },
      alphaTarget: function(_) {
        return arguments.length ? (alphaTarget = +_, simulation2) : alphaTarget;
      },
      velocityDecay: function(_) {
        return arguments.length ? (velocityDecay = 1 - _, simulation2) : 1 - velocityDecay;
      },
      force: function(name, _) {
        return arguments.length > 1 ? (_ == null ? forces.remove(name) : forces.set(name, initializeForce(_)), simulation2) : forces.get(name);
      },
      find: function(x2, y2, radius) {
        var i = 0, n = nodes.length, dx, dy, d2, node, closest;
        if (radius == null)
          radius = Infinity;
        else
          radius *= radius;
        for (i = 0; i < n; ++i) {
          node = nodes[i];
          dx = x2 - node.x;
          dy = y2 - node.y;
          d2 = dx * dx + dy * dy;
          if (d2 < radius)
            closest = node, radius = d2;
        }
        return closest;
      },
      on: function(name, _) {
        return arguments.length > 1 ? (event.on(name, _), simulation2) : event.on(name);
      }
    };
  };
  var manyBody = function() {
    var nodes, node, alpha, strength = constant$6(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
    function force(_) {
      var i, n = nodes.length, tree2 = quadtree(nodes, x$1, y$1).visitAfter(accumulate);
      for (alpha = _, i = 0; i < n; ++i)
        node = nodes[i], tree2.visit(apply);
    }
    function initialize() {
      if (!nodes)
        return;
      var i, n = nodes.length, node2;
      strengths = new Array(n);
      for (i = 0; i < n; ++i)
        node2 = nodes[i], strengths[node2.index] = +strength(node2, i, nodes);
    }
    function accumulate(quad) {
      var strength2 = 0, q, c2, weight = 0, x2, y2, i;
      if (quad.length) {
        for (x2 = y2 = i = 0; i < 4; ++i) {
          if ((q = quad[i]) && (c2 = Math.abs(q.value))) {
            strength2 += q.value, weight += c2, x2 += c2 * q.x, y2 += c2 * q.y;
          }
        }
        quad.x = x2 / weight;
        quad.y = y2 / weight;
      } else {
        q = quad;
        q.x = q.data.x;
        q.y = q.data.y;
        do
          strength2 += strengths[q.data.index];
        while (q = q.next);
      }
      quad.value = strength2;
    }
    function apply(quad, x12, _, x2) {
      if (!quad.value)
        return true;
      var x3 = quad.x - node.x, y2 = quad.y - node.y, w = x2 - x12, l = x3 * x3 + y2 * y2;
      if (w * w / theta2 < l) {
        if (l < distanceMax2) {
          if (x3 === 0)
            x3 = jiggle(), l += x3 * x3;
          if (y2 === 0)
            y2 = jiggle(), l += y2 * y2;
          if (l < distanceMin2)
            l = Math.sqrt(distanceMin2 * l);
          node.vx += x3 * quad.value * alpha / l;
          node.vy += y2 * quad.value * alpha / l;
        }
        return true;
      } else if (quad.length || l >= distanceMax2)
        return;
      if (quad.data !== node || quad.next) {
        if (x3 === 0)
          x3 = jiggle(), l += x3 * x3;
        if (y2 === 0)
          y2 = jiggle(), l += y2 * y2;
        if (l < distanceMin2)
          l = Math.sqrt(distanceMin2 * l);
      }
      do
        if (quad.data !== node) {
          w = strengths[quad.data.index] * alpha / l;
          node.vx += x3 * w;
          node.vy += y2 * w;
        }
      while (quad = quad.next);
    }
    force.initialize = function(_) {
      nodes = _;
      initialize();
    };
    force.strength = function(_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
    };
    force.distanceMin = function(_) {
      return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
    };
    force.distanceMax = function(_) {
      return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
    };
    force.theta = function(_) {
      return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
    };
    return force;
  };
  var radial = function(radius, x2, y2) {
    var nodes, strength = constant$6(0.1), strengths, radiuses;
    if (typeof radius !== "function")
      radius = constant$6(+radius);
    if (x2 == null)
      x2 = 0;
    if (y2 == null)
      y2 = 0;
    function force(alpha) {
      for (var i = 0, n = nodes.length; i < n; ++i) {
        var node = nodes[i], dx = node.x - x2 || 1e-6, dy = node.y - y2 || 1e-6, r = Math.sqrt(dx * dx + dy * dy), k2 = (radiuses[i] - r) * strengths[i] * alpha / r;
        node.vx += dx * k2;
        node.vy += dy * k2;
      }
    }
    function initialize() {
      if (!nodes)
        return;
      var i, n = nodes.length;
      strengths = new Array(n);
      radiuses = new Array(n);
      for (i = 0; i < n; ++i) {
        radiuses[i] = +radius(nodes[i], i, nodes);
        strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
      }
    }
    force.initialize = function(_) {
      nodes = _, initialize();
    };
    force.strength = function(_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
    };
    force.radius = function(_) {
      return arguments.length ? (radius = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : radius;
    };
    force.x = function(_) {
      return arguments.length ? (x2 = +_, force) : x2;
    };
    force.y = function(_) {
      return arguments.length ? (y2 = +_, force) : y2;
    };
    return force;
  };
  var x$2 = function(x2) {
    var strength = constant$6(0.1), nodes, strengths, xz;
    if (typeof x2 !== "function")
      x2 = constant$6(x2 == null ? 0 : +x2);
    function force(alpha) {
      for (var i = 0, n = nodes.length, node; i < n; ++i) {
        node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
      }
    }
    function initialize() {
      if (!nodes)
        return;
      var i, n = nodes.length;
      strengths = new Array(n);
      xz = new Array(n);
      for (i = 0; i < n; ++i) {
        strengths[i] = isNaN(xz[i] = +x2(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
      }
    }
    force.initialize = function(_) {
      nodes = _;
      initialize();
    };
    force.strength = function(_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
    };
    force.x = function(_) {
      return arguments.length ? (x2 = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : x2;
    };
    return force;
  };
  var y$2 = function(y2) {
    var strength = constant$6(0.1), nodes, strengths, yz;
    if (typeof y2 !== "function")
      y2 = constant$6(y2 == null ? 0 : +y2);
    function force(alpha) {
      for (var i = 0, n = nodes.length, node; i < n; ++i) {
        node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
      }
    }
    function initialize() {
      if (!nodes)
        return;
      var i, n = nodes.length;
      strengths = new Array(n);
      yz = new Array(n);
      for (i = 0; i < n; ++i) {
        strengths[i] = isNaN(yz[i] = +y2(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
      }
    }
    force.initialize = function(_) {
      nodes = _;
      initialize();
    };
    force.strength = function(_) {
      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
    };
    force.y = function(_) {
      return arguments.length ? (y2 = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : y2;
    };
    return force;
  };
  var formatDecimal = function(x2, p) {
    if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0)
      return null;
    var i, coefficient = x2.slice(0, i);
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x2.slice(i + 1)
    ];
  };
  var exponent$1 = function(x2) {
    return x2 = formatDecimal(Math.abs(x2)), x2 ? x2[1] : NaN;
  };
  var formatGroup = function(grouping, thousands) {
    return function(value, width) {
      var i = value.length, t = [], j = 0, g = grouping[0], length2 = 0;
      while (i > 0 && g > 0) {
        if (length2 + g + 1 > width)
          g = Math.max(1, width - length2);
        t.push(value.substring(i -= g, i + g));
        if ((length2 += g + 1) > width)
          break;
        g = grouping[j = (j + 1) % grouping.length];
      }
      return t.reverse().join(thousands);
    };
  };
  var formatNumerals = function(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i) {
        return numerals[+i];
      });
    };
  };
  var formatDefault = function(x2, p) {
    x2 = x2.toPrecision(p);
    out:
      for (var n = x2.length, i = 1, i0 = -1, i1; i < n; ++i) {
        switch (x2[i]) {
          case ".":
            i0 = i1 = i;
            break;
          case "0":
            if (i0 === 0)
              i0 = i;
            i1 = i;
            break;
          case "e":
            break out;
          default:
            if (i0 > 0)
              i0 = 0;
            break;
        }
      }
    return i0 > 0 ? x2.slice(0, i0) + x2.slice(i1 + 1) : x2;
  };
  var prefixExponent;
  var formatPrefixAuto = function(x2, p) {
    var d = formatDecimal(x2, p);
    if (!d)
      return x2 + "";
    var coefficient = d[0], exponent2 = d[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimal(x2, Math.max(0, p + i - 1))[0];
  };
  var formatRounded = function(x2, p) {
    var d = formatDecimal(x2, p);
    if (!d)
      return x2 + "";
    var coefficient = d[0], exponent2 = d[1];
    return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
  };
  var formatTypes = {
    "": formatDefault,
    "%": function(x2, p) {
      return (x2 * 100).toFixed(p);
    },
    b: function(x2) {
      return Math.round(x2).toString(2);
    },
    c: function(x2) {
      return x2 + "";
    },
    d: function(x2) {
      return Math.round(x2).toString(10);
    },
    e: function(x2, p) {
      return x2.toExponential(p);
    },
    f: function(x2, p) {
      return x2.toFixed(p);
    },
    g: function(x2, p) {
      return x2.toPrecision(p);
    },
    o: function(x2) {
      return Math.round(x2).toString(8);
    },
    p: function(x2, p) {
      return formatRounded(x2 * 100, p);
    },
    r: formatRounded,
    s: formatPrefixAuto,
    X: function(x2) {
      return Math.round(x2).toString(16).toUpperCase();
    },
    x: function(x2) {
      return Math.round(x2).toString(16);
    }
  };
  var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
  function formatSpecifier(specifier) {
    return new FormatSpecifier(specifier);
  }
  formatSpecifier.prototype = FormatSpecifier.prototype;
  function FormatSpecifier(specifier) {
    if (!(match = re.exec(specifier)))
      throw new Error("invalid format: " + specifier);
    var match, fill = match[1] || " ", align = match[2] || ">", sign2 = match[3] || "-", symbol2 = match[4] || "", zero2 = !!match[5], width = match[6] && +match[6], comma = !!match[7], precision = match[8] && +match[8].slice(1), type2 = match[9] || "";
    if (type2 === "n")
      comma = true, type2 = "g";
    else if (!formatTypes[type2])
      type2 = "";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    this.fill = fill;
    this.align = align;
    this.sign = sign2;
    this.symbol = symbol2;
    this.zero = zero2;
    this.width = width;
    this.comma = comma;
    this.precision = precision;
    this.type = type2;
  }
  FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width == null ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0)) + this.type;
  };
  var identity$3 = function(x2) {
    return x2;
  };
  var prefixes = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
  ];
  var formatLocale = function(locale2) {
    var group = locale2.grouping && locale2.thousands ? formatGroup(locale2.grouping, locale2.thousands) : identity$3, currency = locale2.currency, decimal = locale2.decimal, numerals = locale2.numerals ? formatNumerals(locale2.numerals) : identity$3, percent = locale2.percent || "%";
    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);
      var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol2 = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, type2 = specifier.type;
      var prefix2 = symbol2 === "$" ? currency[0] : symbol2 === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol2 === "$" ? currency[1] : /[%p]/.test(type2) ? percent : "";
      var formatType = formatTypes[type2], maybeSuffix = !type2 || /[defgprs%]/.test(type2);
      precision = precision == null ? type2 ? 6 : 12 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
      function format(value) {
        var valuePrefix = prefix2, valueSuffix = suffix, i, n, c2;
        if (type2 === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;
          var valueNegative = value < 0;
          value = formatType(Math.abs(value), precision);
          if (valueNegative && +value === 0)
            valueNegative = false;
          valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : "-" : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
          valueSuffix = valueSuffix + (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && sign2 === "(" ? ")" : "");
          if (maybeSuffix) {
            i = -1, n = value.length;
            while (++i < n) {
              if (c2 = value.charCodeAt(i), 48 > c2 || c2 > 57) {
                valueSuffix = (c2 === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }
        if (comma && !zero2)
          value = group(value, Infinity);
        var length2 = valuePrefix.length + value.length + valueSuffix.length, padding = length2 < width ? new Array(width - length2 + 1).join(fill) : "";
        if (comma && zero2)
          value = group(
            padding + value,
            padding.length ? width - valueSuffix.length : Infinity
          ), padding = "";
        switch (align) {
          case "<":
            value = valuePrefix + value + valueSuffix + padding;
            break;
          case "=":
            value = valuePrefix + padding + value + valueSuffix;
            break;
          case "^":
            value = padding.slice(0, length2 = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length2);
            break;
          default:
            value = padding + valuePrefix + value + valueSuffix;
            break;
        }
        return numerals(value);
      }
      format.toString = function() {
        return specifier + "";
      };
      return format;
    }
    function formatPrefix(specifier, value) {
      var f = newFormat(
        (specifier = formatSpecifier(specifier), specifier.type = "f", specifier)
      ), e = Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3, k2 = Math.pow(10, -e), prefix2 = prefixes[8 + e / 3];
      return function(value2) {
        return f(k2 * value2) + prefix2;
      };
    }
    return {
      format: newFormat,
      formatPrefix
    };
  };
  var locale;
  defaultLocale({
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });
  function defaultLocale(definition) {
    locale = formatLocale(definition);
    exports2.format = locale.format;
    exports2.formatPrefix = locale.formatPrefix;
    return locale;
  }
  var precisionFixed = function(step2) {
    return Math.max(0, -exponent$1(Math.abs(step2)));
  };
  var precisionPrefix = function(step2, value) {
    return Math.max(
      0,
      Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3 - exponent$1(Math.abs(step2))
    );
  };
  var precisionRound = function(step2, max2) {
    step2 = Math.abs(step2), max2 = Math.abs(max2) - step2;
    return Math.max(0, exponent$1(max2) - exponent$1(step2)) + 1;
  };
  var adder = function() {
    return new Adder();
  };
  function Adder() {
    this.reset();
  }
  Adder.prototype = {
    constructor: Adder,
    reset: function() {
      this.s = // rounded value
      this.t = 0;
    },
    add: function(y2) {
      add$1(temp, y2, this.t);
      add$1(this, temp.s, this.s);
      if (this.s)
        this.t += temp.t;
      else
        this.s = temp.t;
    },
    valueOf: function() {
      return this.s;
    }
  };
  var temp = new Adder();
  function add$1(adder2, a2, b) {
    var x2 = adder2.s = a2 + b, bv = x2 - a2, av = x2 - bv;
    adder2.t = a2 - av + (b - bv);
  }
  var epsilon$2 = 1e-6;
  var epsilon2$1 = 1e-12;
  var pi$3 = Math.PI;
  var halfPi$2 = pi$3 / 2;
  var quarterPi = pi$3 / 4;
  var tau$3 = pi$3 * 2;
  var degrees$1 = 180 / pi$3;
  var radians = pi$3 / 180;
  var abs = Math.abs;
  var atan = Math.atan;
  var atan2 = Math.atan2;
  var cos$1 = Math.cos;
  var ceil = Math.ceil;
  var exp = Math.exp;
  var log = Math.log;
  var pow = Math.pow;
  var sin$1 = Math.sin;
  var sign = Math.sign || function(x2) {
    return x2 > 0 ? 1 : x2 < 0 ? -1 : 0;
  };
  var sqrt = Math.sqrt;
  var tan = Math.tan;
  function acos(x2) {
    return x2 > 1 ? 0 : x2 < -1 ? pi$3 : Math.acos(x2);
  }
  function asin(x2) {
    return x2 > 1 ? halfPi$2 : x2 < -1 ? -halfPi$2 : Math.asin(x2);
  }
  function haversin(x2) {
    return (x2 = sin$1(x2 / 2)) * x2;
  }
  function noop$1() {
  }
  function streamGeometry(geometry, stream) {
    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
      streamGeometryType[geometry.type](geometry, stream);
    }
  }
  var streamObjectType = {
    Feature: function(object2, stream) {
      streamGeometry(object2.geometry, stream);
    },
    FeatureCollection: function(object2, stream) {
      var features = object2.features, i = -1, n = features.length;
      while (++i < n)
        streamGeometry(features[i].geometry, stream);
    }
  };
  var streamGeometryType = {
    Sphere: function(object2, stream) {
      stream.sphere();
    },
    Point: function(object2, stream) {
      object2 = object2.coordinates;
      stream.point(object2[0], object2[1], object2[2]);
    },
    MultiPoint: function(object2, stream) {
      var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
      while (++i < n)
        object2 = coordinates2[i], stream.point(object2[0], object2[1], object2[2]);
    },
    LineString: function(object2, stream) {
      streamLine(object2.coordinates, stream, 0);
    },
    MultiLineString: function(object2, stream) {
      var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
      while (++i < n)
        streamLine(coordinates2[i], stream, 0);
    },
    Polygon: function(object2, stream) {
      streamPolygon(object2.coordinates, stream);
    },
    MultiPolygon: function(object2, stream) {
      var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
      while (++i < n)
        streamPolygon(coordinates2[i], stream);
    },
    GeometryCollection: function(object2, stream) {
      var geometries = object2.geometries, i = -1, n = geometries.length;
      while (++i < n)
        streamGeometry(geometries[i], stream);
    }
  };
  function streamLine(coordinates2, stream, closed) {
    var i = -1, n = coordinates2.length - closed, coordinate;
    stream.lineStart();
    while (++i < n)
      coordinate = coordinates2[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
  }
  function streamPolygon(coordinates2, stream) {
    var i = -1, n = coordinates2.length;
    stream.polygonStart();
    while (++i < n)
      streamLine(coordinates2[i], stream, 1);
    stream.polygonEnd();
  }
  var geoStream = function(object2, stream) {
    if (object2 && streamObjectType.hasOwnProperty(object2.type)) {
      streamObjectType[object2.type](object2, stream);
    } else {
      streamGeometry(object2, stream);
    }
  };
  var areaRingSum = adder();
  var areaSum = adder();
  var lambda00;
  var phi00;
  var lambda0;
  var cosPhi0;
  var sinPhi0;
  var areaStream = {
    point: noop$1,
    lineStart: noop$1,
    lineEnd: noop$1,
    polygonStart: function() {
      areaRingSum.reset();
      areaStream.lineStart = areaRingStart;
      areaStream.lineEnd = areaRingEnd;
    },
    polygonEnd: function() {
      var areaRing = +areaRingSum;
      areaSum.add(areaRing < 0 ? tau$3 + areaRing : areaRing);
      this.lineStart = this.lineEnd = this.point = noop$1;
    },
    sphere: function() {
      areaSum.add(tau$3);
    }
  };
  function areaRingStart() {
    areaStream.point = areaPointFirst;
  }
  function areaRingEnd() {
    areaPoint(lambda00, phi00);
  }
  function areaPointFirst(lambda, phi2) {
    areaStream.point = areaPoint;
    lambda00 = lambda, phi00 = phi2;
    lambda *= radians, phi2 *= radians;
    lambda0 = lambda, cosPhi0 = cos$1(phi2 = phi2 / 2 + quarterPi), sinPhi0 = sin$1(phi2);
  }
  function areaPoint(lambda, phi2) {
    lambda *= radians, phi2 *= radians;
    phi2 = phi2 / 2 + quarterPi;
    var dLambda = lambda - lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, cosPhi = cos$1(phi2), sinPhi = sin$1(phi2), k2 = sinPhi0 * sinPhi, u = cosPhi0 * cosPhi + k2 * cos$1(adLambda), v = k2 * sdLambda * sin$1(adLambda);
    areaRingSum.add(atan2(v, u));
    lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
  }
  var area = function(object2) {
    areaSum.reset();
    geoStream(object2, areaStream);
    return areaSum * 2;
  };
  function spherical(cartesian2) {
    return [atan2(cartesian2[1], cartesian2[0]), asin(cartesian2[2])];
  }
  function cartesian(spherical2) {
    var lambda = spherical2[0], phi2 = spherical2[1], cosPhi = cos$1(phi2);
    return [cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi2)];
  }
  function cartesianDot(a2, b) {
    return a2[0] * b[0] + a2[1] * b[1] + a2[2] * b[2];
  }
  function cartesianCross(a2, b) {
    return [
      a2[1] * b[2] - a2[2] * b[1],
      a2[2] * b[0] - a2[0] * b[2],
      a2[0] * b[1] - a2[1] * b[0]
    ];
  }
  function cartesianAddInPlace(a2, b) {
    a2[0] += b[0], a2[1] += b[1], a2[2] += b[2];
  }
  function cartesianScale(vector, k2) {
    return [vector[0] * k2, vector[1] * k2, vector[2] * k2];
  }
  function cartesianNormalizeInPlace(d) {
    var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
  }
  var lambda0$1;
  var phi0;
  var lambda1;
  var phi1;
  var lambda2;
  var lambda00$1;
  var phi00$1;
  var p0;
  var deltaSum = adder();
  var ranges;
  var range;
  var boundsStream = {
    point: boundsPoint,
    lineStart: boundsLineStart,
    lineEnd: boundsLineEnd,
    polygonStart: function() {
      boundsStream.point = boundsRingPoint;
      boundsStream.lineStart = boundsRingStart;
      boundsStream.lineEnd = boundsRingEnd;
      deltaSum.reset();
      areaStream.polygonStart();
    },
    polygonEnd: function() {
      areaStream.polygonEnd();
      boundsStream.point = boundsPoint;
      boundsStream.lineStart = boundsLineStart;
      boundsStream.lineEnd = boundsLineEnd;
      if (areaRingSum < 0)
        lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90);
      else if (deltaSum > epsilon$2)
        phi1 = 90;
      else if (deltaSum < -epsilon$2)
        phi0 = -90;
      range[0] = lambda0$1, range[1] = lambda1;
    }
  };
  function boundsPoint(lambda, phi2) {
    ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
    if (phi2 < phi0)
      phi0 = phi2;
    if (phi2 > phi1)
      phi1 = phi2;
  }
  function linePoint(lambda, phi2) {
    var p = cartesian([lambda * radians, phi2 * radians]);
    if (p0) {
      var normal2 = cartesianCross(p0, p), equatorial = [normal2[1], -normal2[0], 0], inflection = cartesianCross(equatorial, normal2);
      cartesianNormalizeInPlace(inflection);
      inflection = spherical(inflection);
      var delta = lambda - lambda2, sign$$1 = delta > 0 ? 1 : -1, lambdai = inflection[0] * degrees$1 * sign$$1, phii, antimeridian = abs(delta) > 180;
      if (antimeridian ^ (sign$$1 * lambda2 < lambdai && lambdai < sign$$1 * lambda)) {
        phii = inflection[1] * degrees$1;
        if (phii > phi1)
          phi1 = phii;
      } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign$$1 * lambda2 < lambdai && lambdai < sign$$1 * lambda)) {
        phii = -inflection[1] * degrees$1;
        if (phii < phi0)
          phi0 = phii;
      } else {
        if (phi2 < phi0)
          phi0 = phi2;
        if (phi2 > phi1)
          phi1 = phi2;
      }
      if (antimeridian) {
        if (lambda < lambda2) {
          if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1))
            lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0$1, lambda1))
            lambda0$1 = lambda;
        }
      } else {
        if (lambda1 >= lambda0$1) {
          if (lambda < lambda0$1)
            lambda0$1 = lambda;
          if (lambda > lambda1)
            lambda1 = lambda;
        } else {
          if (lambda > lambda2) {
            if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1))
              lambda1 = lambda;
          } else {
            if (angle(lambda, lambda1) > angle(lambda0$1, lambda1))
              lambda0$1 = lambda;
          }
        }
      }
    } else {
      ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
    }
    if (phi2 < phi0)
      phi0 = phi2;
    if (phi2 > phi1)
      phi1 = phi2;
    p0 = p, lambda2 = lambda;
  }
  function boundsLineStart() {
    boundsStream.point = linePoint;
  }
  function boundsLineEnd() {
    range[0] = lambda0$1, range[1] = lambda1;
    boundsStream.point = boundsPoint;
    p0 = null;
  }
  function boundsRingPoint(lambda, phi2) {
    if (p0) {
      var delta = lambda - lambda2;
      deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
    } else {
      lambda00$1 = lambda, phi00$1 = phi2;
    }
    areaStream.point(lambda, phi2);
    linePoint(lambda, phi2);
  }
  function boundsRingStart() {
    areaStream.lineStart();
  }
  function boundsRingEnd() {
    boundsRingPoint(lambda00$1, phi00$1);
    areaStream.lineEnd();
    if (abs(deltaSum) > epsilon$2)
      lambda0$1 = -(lambda1 = 180);
    range[0] = lambda0$1, range[1] = lambda1;
    p0 = null;
  }
  function angle(lambda02, lambda12) {
    return (lambda12 -= lambda02) < 0 ? lambda12 + 360 : lambda12;
  }
  function rangeCompare(a2, b) {
    return a2[0] - b[0];
  }
  function rangeContains(range2, x2) {
    return range2[0] <= range2[1] ? range2[0] <= x2 && x2 <= range2[1] : x2 < range2[0] || range2[1] < x2;
  }
  var bounds = function(feature) {
    var i, n, a2, b, merged, deltaMax, delta;
    phi1 = lambda1 = -(lambda0$1 = phi0 = Infinity);
    ranges = [];
    geoStream(feature, boundsStream);
    if (n = ranges.length) {
      ranges.sort(rangeCompare);
      for (i = 1, a2 = ranges[0], merged = [a2]; i < n; ++i) {
        b = ranges[i];
        if (rangeContains(a2, b[0]) || rangeContains(a2, b[1])) {
          if (angle(a2[0], b[1]) > angle(a2[0], a2[1]))
            a2[1] = b[1];
          if (angle(b[0], a2[1]) > angle(a2[0], a2[1]))
            a2[0] = b[0];
        } else {
          merged.push(a2 = b);
        }
      }
      for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a2 = merged[n]; i <= n; a2 = b, ++i) {
        b = merged[i];
        if ((delta = angle(a2[1], b[0])) > deltaMax)
          deltaMax = delta, lambda0$1 = b[0], lambda1 = a2[1];
      }
    }
    ranges = range = null;
    return lambda0$1 === Infinity || phi0 === Infinity ? [
      [NaN, NaN],
      [NaN, NaN]
    ] : [
      [lambda0$1, phi0],
      [lambda1, phi1]
    ];
  };
  var W0;
  var W1;
  var X0;
  var Y0;
  var Z0;
  var X1;
  var Y1;
  var Z1;
  var X2;
  var Y2;
  var Z2;
  var lambda00$2;
  var phi00$2;
  var x0;
  var y0;
  var z0;
  var centroidStream = {
    sphere: noop$1,
    point: centroidPoint,
    lineStart: centroidLineStart,
    lineEnd: centroidLineEnd,
    polygonStart: function() {
      centroidStream.lineStart = centroidRingStart;
      centroidStream.lineEnd = centroidRingEnd;
    },
    polygonEnd: function() {
      centroidStream.lineStart = centroidLineStart;
      centroidStream.lineEnd = centroidLineEnd;
    }
  };
  function centroidPoint(lambda, phi2) {
    lambda *= radians, phi2 *= radians;
    var cosPhi = cos$1(phi2);
    centroidPointCartesian(
      cosPhi * cos$1(lambda),
      cosPhi * sin$1(lambda),
      sin$1(phi2)
    );
  }
  function centroidPointCartesian(x2, y2, z) {
    ++W0;
    X0 += (x2 - X0) / W0;
    Y0 += (y2 - Y0) / W0;
    Z0 += (z - Z0) / W0;
  }
  function centroidLineStart() {
    centroidStream.point = centroidLinePointFirst;
  }
  function centroidLinePointFirst(lambda, phi2) {
    lambda *= radians, phi2 *= radians;
    var cosPhi = cos$1(phi2);
    x0 = cosPhi * cos$1(lambda);
    y0 = cosPhi * sin$1(lambda);
    z0 = sin$1(phi2);
    centroidStream.point = centroidLinePoint;
    centroidPointCartesian(x0, y0, z0);
  }
  function centroidLinePoint(lambda, phi2) {
    lambda *= radians, phi2 *= radians;
    var cosPhi = cos$1(phi2), x2 = cosPhi * cos$1(lambda), y2 = cosPhi * sin$1(lambda), z = sin$1(phi2), w = atan2(
      sqrt(
        (w = y0 * z - z0 * y2) * w + (w = z0 * x2 - x0 * z) * w + (w = x0 * y2 - y0 * x2) * w
      ),
      x0 * x2 + y0 * y2 + z0 * z
    );
    W1 += w;
    X1 += w * (x0 + (x0 = x2));
    Y1 += w * (y0 + (y0 = y2));
    Z1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0, y0, z0);
  }
  function centroidLineEnd() {
    centroidStream.point = centroidPoint;
  }
  function centroidRingStart() {
    centroidStream.point = centroidRingPointFirst;
  }
  function centroidRingEnd() {
    centroidRingPoint(lambda00$2, phi00$2);
    centroidStream.point = centroidPoint;
  }
  function centroidRingPointFirst(lambda, phi2) {
    lambda00$2 = lambda, phi00$2 = phi2;
    lambda *= radians, phi2 *= radians;
    centroidStream.point = centroidRingPoint;
    var cosPhi = cos$1(phi2);
    x0 = cosPhi * cos$1(lambda);
    y0 = cosPhi * sin$1(lambda);
    z0 = sin$1(phi2);
    centroidPointCartesian(x0, y0, z0);
  }
  function centroidRingPoint(lambda, phi2) {
    lambda *= radians, phi2 *= radians;
    var cosPhi = cos$1(phi2), x2 = cosPhi * cos$1(lambda), y2 = cosPhi * sin$1(lambda), z = sin$1(phi2), cx = y0 * z - z0 * y2, cy = z0 * x2 - x0 * z, cz = x0 * y2 - y0 * x2, m = sqrt(cx * cx + cy * cy + cz * cz), w = asin(m), v = m && -w / m;
    X2 += v * cx;
    Y2 += v * cy;
    Z2 += v * cz;
    W1 += w;
    X1 += w * (x0 + (x0 = x2));
    Y1 += w * (y0 + (y0 = y2));
    Z1 += w * (z0 + (z0 = z));
    centroidPointCartesian(x0, y0, z0);
  }
  var centroid = function(object2) {
    W0 = W1 = X0 = Y0 = Z0 = X1 = Y1 = Z1 = X2 = Y2 = Z2 = 0;
    geoStream(object2, centroidStream);
    var x2 = X2, y2 = Y2, z = Z2, m = x2 * x2 + y2 * y2 + z * z;
    if (m < epsilon2$1) {
      x2 = X1, y2 = Y1, z = Z1;
      if (W1 < epsilon$2)
        x2 = X0, y2 = Y0, z = Z0;
      m = x2 * x2 + y2 * y2 + z * z;
      if (m < epsilon2$1)
        return [NaN, NaN];
    }
    return [atan2(y2, x2) * degrees$1, asin(z / sqrt(m)) * degrees$1];
  };
  var constant$7 = function(x2) {
    return function() {
      return x2;
    };
  };
  var compose = function(a2, b) {
    function compose2(x2, y2) {
      return x2 = a2(x2, y2), b(x2[0], x2[1]);
    }
    if (a2.invert && b.invert)
      compose2.invert = function(x2, y2) {
        return x2 = b.invert(x2, y2), x2 && a2.invert(x2[0], x2[1]);
      };
    return compose2;
  };
  function rotationIdentity(lambda, phi2) {
    return [
      lambda > pi$3 ? lambda - tau$3 : lambda < -pi$3 ? lambda + tau$3 : lambda,
      phi2
    ];
  }
  rotationIdentity.invert = rotationIdentity;
  function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= tau$3) ? deltaPhi || deltaGamma ? compose(
      rotationLambda(deltaLambda),
      rotationPhiGamma(deltaPhi, deltaGamma)
    ) : rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma) : rotationIdentity;
  }
  function forwardRotationLambda(deltaLambda) {
    return function(lambda, phi2) {
      return lambda += deltaLambda, [
        lambda > pi$3 ? lambda - tau$3 : lambda < -pi$3 ? lambda + tau$3 : lambda,
        phi2
      ];
    };
  }
  function rotationLambda(deltaLambda) {
    var rotation2 = forwardRotationLambda(deltaLambda);
    rotation2.invert = forwardRotationLambda(-deltaLambda);
    return rotation2;
  }
  function rotationPhiGamma(deltaPhi, deltaGamma) {
    var cosDeltaPhi = cos$1(deltaPhi), sinDeltaPhi = sin$1(deltaPhi), cosDeltaGamma = cos$1(deltaGamma), sinDeltaGamma = sin$1(deltaGamma);
    function rotation2(lambda, phi2) {
      var cosPhi = cos$1(phi2), x2 = cos$1(lambda) * cosPhi, y2 = sin$1(lambda) * cosPhi, z = sin$1(phi2), k2 = z * cosDeltaPhi + x2 * sinDeltaPhi;
      return [
        atan2(
          y2 * cosDeltaGamma - k2 * sinDeltaGamma,
          x2 * cosDeltaPhi - z * sinDeltaPhi
        ),
        asin(k2 * cosDeltaGamma + y2 * sinDeltaGamma)
      ];
    }
    rotation2.invert = function(lambda, phi2) {
      var cosPhi = cos$1(phi2), x2 = cos$1(lambda) * cosPhi, y2 = sin$1(lambda) * cosPhi, z = sin$1(phi2), k2 = z * cosDeltaGamma - y2 * sinDeltaGamma;
      return [
        atan2(
          y2 * cosDeltaGamma + z * sinDeltaGamma,
          x2 * cosDeltaPhi + k2 * sinDeltaPhi
        ),
        asin(k2 * cosDeltaPhi - x2 * sinDeltaPhi)
      ];
    };
    return rotation2;
  }
  var rotation = function(rotate) {
    rotate = rotateRadians(
      rotate[0] * radians,
      rotate[1] * radians,
      rotate.length > 2 ? rotate[2] * radians : 0
    );
    function forward(coordinates2) {
      coordinates2 = rotate(coordinates2[0] * radians, coordinates2[1] * radians);
      return coordinates2[0] *= degrees$1, coordinates2[1] *= degrees$1, coordinates2;
    }
    forward.invert = function(coordinates2) {
      coordinates2 = rotate.invert(
        coordinates2[0] * radians,
        coordinates2[1] * radians
      );
      return coordinates2[0] *= degrees$1, coordinates2[1] *= degrees$1, coordinates2;
    };
    return forward;
  };
  function circleStream(stream, radius, delta, direction, t02, t12) {
    if (!delta)
      return;
    var cosRadius = cos$1(radius), sinRadius = sin$1(radius), step2 = direction * delta;
    if (t02 == null) {
      t02 = radius + direction * tau$3;
      t12 = radius - step2 / 2;
    } else {
      t02 = circleRadius(cosRadius, t02);
      t12 = circleRadius(cosRadius, t12);
      if (direction > 0 ? t02 < t12 : t02 > t12)
        t02 += direction * tau$3;
    }
    for (var point2, t = t02; direction > 0 ? t > t12 : t < t12; t -= step2) {
      point2 = spherical([
        cosRadius,
        -sinRadius * cos$1(t),
        -sinRadius * sin$1(t)
      ]);
      stream.point(point2[0], point2[1]);
    }
  }
  function circleRadius(cosRadius, point2) {
    point2 = cartesian(point2), point2[0] -= cosRadius;
    cartesianNormalizeInPlace(point2);
    var radius = acos(-point2[1]);
    return ((-point2[2] < 0 ? -radius : radius) + tau$3 - epsilon$2) % tau$3;
  }
  var circle = function() {
    var center2 = constant$7([0, 0]), radius = constant$7(90), precision = constant$7(6), ring, rotate, stream = { point: point2 };
    function point2(x2, y2) {
      ring.push(x2 = rotate(x2, y2));
      x2[0] *= degrees$1, x2[1] *= degrees$1;
    }
    function circle2() {
      var c2 = center2.apply(this, arguments), r = radius.apply(this, arguments) * radians, p = precision.apply(this, arguments) * radians;
      ring = [];
      rotate = rotateRadians(-c2[0] * radians, -c2[1] * radians, 0).invert;
      circleStream(stream, r, p, 1);
      c2 = { type: "Polygon", coordinates: [ring] };
      ring = rotate = null;
      return c2;
    }
    circle2.center = function(_) {
      return arguments.length ? (center2 = typeof _ === "function" ? _ : constant$7([+_[0], +_[1]]), circle2) : center2;
    };
    circle2.radius = function(_) {
      return arguments.length ? (radius = typeof _ === "function" ? _ : constant$7(+_), circle2) : radius;
    };
    circle2.precision = function(_) {
      return arguments.length ? (precision = typeof _ === "function" ? _ : constant$7(+_), circle2) : precision;
    };
    return circle2;
  };
  var clipBuffer = function() {
    var lines = [], line2;
    return {
      point: function(x2, y2) {
        line2.push([x2, y2]);
      },
      lineStart: function() {
        lines.push(line2 = []);
      },
      lineEnd: noop$1,
      rejoin: function() {
        if (lines.length > 1)
          lines.push(lines.pop().concat(lines.shift()));
      },
      result: function() {
        var result = lines;
        lines = [];
        line2 = null;
        return result;
      }
    };
  };
  var pointEqual = function(a2, b) {
    return abs(a2[0] - b[0]) < epsilon$2 && abs(a2[1] - b[1]) < epsilon$2;
  };
  function Intersection(point2, points, other, entry) {
    this.x = point2;
    this.z = points;
    this.o = other;
    this.e = entry;
    this.v = false;
    this.n = this.p = null;
  }
  var clipRejoin = function(segments, compareIntersection2, startInside, interpolate2, stream) {
    var subject = [], clip2 = [], i, n;
    segments.forEach(function(segment) {
      if ((n2 = segment.length - 1) <= 0)
        return;
      var n2, p02 = segment[0], p1 = segment[n2], x2;
      if (pointEqual(p02, p1)) {
        stream.lineStart();
        for (i = 0; i < n2; ++i)
          stream.point((p02 = segment[i])[0], p02[1]);
        stream.lineEnd();
        return;
      }
      subject.push(x2 = new Intersection(p02, segment, null, true));
      clip2.push(x2.o = new Intersection(p02, null, x2, false));
      subject.push(x2 = new Intersection(p1, segment, null, false));
      clip2.push(x2.o = new Intersection(p1, null, x2, true));
    });
    if (!subject.length)
      return;
    clip2.sort(compareIntersection2);
    link$1(subject);
    link$1(clip2);
    for (i = 0, n = clip2.length; i < n; ++i) {
      clip2[i].e = startInside = !startInside;
    }
    var start2 = subject[0], points, point2;
    while (1) {
      var current = start2, isSubject = true;
      while (current.v)
        if ((current = current.n) === start2)
          return;
      points = current.z;
      stream.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (i = 0, n = points.length; i < n; ++i)
              stream.point((point2 = points[i])[0], point2[1]);
          } else {
            interpolate2(current.x, current.n.x, 1, stream);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (i = points.length - 1; i >= 0; --i)
              stream.point((point2 = points[i])[0], point2[1]);
          } else {
            interpolate2(current.x, current.p.x, -1, stream);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      stream.lineEnd();
    }
  };
  function link$1(array2) {
    if (!(n = array2.length))
      return;
    var n, i = 0, a2 = array2[0], b;
    while (++i < n) {
      a2.n = b = array2[i];
      b.p = a2;
      a2 = b;
    }
    a2.n = b = array2[0];
    b.p = a2;
  }
  var sum$1 = adder();
  var polygonContains = function(polygon, point2) {
    var lambda = point2[0], phi2 = point2[1], normal2 = [sin$1(lambda), -cos$1(lambda), 0], angle2 = 0, winding = 0;
    sum$1.reset();
    for (var i = 0, n = polygon.length; i < n; ++i) {
      if (!(m = (ring = polygon[i]).length))
        continue;
      var ring, m, point0 = ring[m - 1], lambda02 = point0[0], phi02 = point0[1] / 2 + quarterPi, sinPhi02 = sin$1(phi02), cosPhi02 = cos$1(phi02);
      for (var j = 0; j < m; ++j, lambda02 = lambda12, sinPhi02 = sinPhi1, cosPhi02 = cosPhi1, point0 = point1) {
        var point1 = ring[j], lambda12 = point1[0], phi12 = point1[1] / 2 + quarterPi, sinPhi1 = sin$1(phi12), cosPhi1 = cos$1(phi12), delta = lambda12 - lambda02, sign$$1 = delta >= 0 ? 1 : -1, absDelta = sign$$1 * delta, antimeridian = absDelta > pi$3, k2 = sinPhi02 * sinPhi1;
        sum$1.add(
          atan2(
            k2 * sign$$1 * sin$1(absDelta),
            cosPhi02 * cosPhi1 + k2 * cos$1(absDelta)
          )
        );
        angle2 += antimeridian ? delta + sign$$1 * tau$3 : delta;
        if (antimeridian ^ lambda02 >= lambda ^ lambda12 >= lambda) {
          var arc2 = cartesianCross(cartesian(point0), cartesian(point1));
          cartesianNormalizeInPlace(arc2);
          var intersection = cartesianCross(normal2, arc2);
          cartesianNormalizeInPlace(intersection);
          var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
          if (phi2 > phiArc || phi2 === phiArc && (arc2[0] || arc2[1])) {
            winding += antimeridian ^ delta >= 0 ? 1 : -1;
          }
        }
      }
    }
    return (angle2 < -epsilon$2 || angle2 < epsilon$2 && sum$1 < -epsilon$2) ^ winding & 1;
  };
  var clip = function(pointVisible, clipLine2, interpolate2, start2) {
    return function(sink) {
      var line2 = clipLine2(sink), ringBuffer = clipBuffer(), ringSink = clipLine2(ringBuffer), polygonStarted = false, polygon, segments, ring;
      var clip2 = {
        point: point2,
        lineStart,
        lineEnd,
        polygonStart: function() {
          clip2.point = pointRing;
          clip2.lineStart = ringStart;
          clip2.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip2.point = point2;
          clip2.lineStart = lineStart;
          clip2.lineEnd = lineEnd;
          segments = merge(segments);
          var startInside = polygonContains(polygon, start2);
          if (segments.length) {
            if (!polygonStarted)
              sink.polygonStart(), polygonStarted = true;
            clipRejoin(
              segments,
              compareIntersection,
              startInside,
              interpolate2,
              sink
            );
          } else if (startInside) {
            if (!polygonStarted)
              sink.polygonStart(), polygonStarted = true;
            sink.lineStart();
            interpolate2(null, null, 1, sink);
            sink.lineEnd();
          }
          if (polygonStarted)
            sink.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          sink.polygonStart();
          sink.lineStart();
          interpolate2(null, null, 1, sink);
          sink.lineEnd();
          sink.polygonEnd();
        }
      };
      function point2(lambda, phi2) {
        if (pointVisible(lambda, phi2))
          sink.point(lambda, phi2);
      }
      function pointLine(lambda, phi2) {
        line2.point(lambda, phi2);
      }
      function lineStart() {
        clip2.point = pointLine;
        line2.lineStart();
      }
      function lineEnd() {
        clip2.point = point2;
        line2.lineEnd();
      }
      function pointRing(lambda, phi2) {
        ring.push([lambda, phi2]);
        ringSink.point(lambda, phi2);
      }
      function ringStart() {
        ringSink.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringSink.lineEnd();
        var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point3;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n)
          return;
        if (clean & 1) {
          segment = ringSegments[0];
          if ((m = segment.length - 1) > 0) {
            if (!polygonStarted)
              sink.polygonStart(), polygonStarted = true;
            sink.lineStart();
            for (i = 0; i < m; ++i)
              sink.point((point3 = segment[i])[0], point3[1]);
            sink.lineEnd();
          }
          return;
        }
        if (n > 1 && clean & 2)
          ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(validSegment));
      }
      return clip2;
    };
  };
  function validSegment(segment) {
    return segment.length > 1;
  }
  function compareIntersection(a2, b) {
    return ((a2 = a2.x)[0] < 0 ? a2[1] - halfPi$2 - epsilon$2 : halfPi$2 - a2[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi$2 - epsilon$2 : halfPi$2 - b[1]);
  }
  var clipAntimeridian = clip(
    function() {
      return true;
    },
    clipAntimeridianLine,
    clipAntimeridianInterpolate,
    [-pi$3, -halfPi$2]
  );
  function clipAntimeridianLine(stream) {
    var lambda02 = NaN, phi02 = NaN, sign0 = NaN, clean;
    return {
      lineStart: function() {
        stream.lineStart();
        clean = 1;
      },
      point: function(lambda12, phi12) {
        var sign1 = lambda12 > 0 ? pi$3 : -pi$3, delta = abs(lambda12 - lambda02);
        if (abs(delta - pi$3) < epsilon$2) {
          stream.point(
            lambda02,
            phi02 = (phi02 + phi12) / 2 > 0 ? halfPi$2 : -halfPi$2
          );
          stream.point(sign0, phi02);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi02);
          stream.point(lambda12, phi02);
          clean = 0;
        } else if (sign0 !== sign1 && delta >= pi$3) {
          if (abs(lambda02 - sign0) < epsilon$2)
            lambda02 -= sign0 * epsilon$2;
          if (abs(lambda12 - sign1) < epsilon$2)
            lambda12 -= sign1 * epsilon$2;
          phi02 = clipAntimeridianIntersect(lambda02, phi02, lambda12, phi12);
          stream.point(sign0, phi02);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi02);
          clean = 0;
        }
        stream.point(lambda02 = lambda12, phi02 = phi12);
        sign0 = sign1;
      },
      lineEnd: function() {
        stream.lineEnd();
        lambda02 = phi02 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function clipAntimeridianIntersect(lambda02, phi02, lambda12, phi12) {
    var cosPhi02, cosPhi1, sinLambda0Lambda1 = sin$1(lambda02 - lambda12);
    return abs(sinLambda0Lambda1) > epsilon$2 ? atan(
      (sin$1(phi02) * (cosPhi1 = cos$1(phi12)) * sin$1(lambda12) - sin$1(phi12) * (cosPhi02 = cos$1(phi02)) * sin$1(lambda02)) / (cosPhi02 * cosPhi1 * sinLambda0Lambda1)
    ) : (phi02 + phi12) / 2;
  }
  function clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi2;
    if (from == null) {
      phi2 = direction * halfPi$2;
      stream.point(-pi$3, phi2);
      stream.point(0, phi2);
      stream.point(pi$3, phi2);
      stream.point(pi$3, 0);
      stream.point(pi$3, -phi2);
      stream.point(0, -phi2);
      stream.point(-pi$3, -phi2);
      stream.point(-pi$3, 0);
      stream.point(-pi$3, phi2);
    } else if (abs(from[0] - to[0]) > epsilon$2) {
      var lambda = from[0] < to[0] ? pi$3 : -pi$3;
      phi2 = direction * lambda / 2;
      stream.point(-lambda, phi2);
      stream.point(0, phi2);
      stream.point(lambda, phi2);
    } else {
      stream.point(to[0], to[1]);
    }
  }
  var clipCircle = function(radius) {
    var cr = cos$1(radius), delta = 6 * radians, smallRadius = cr > 0, notHemisphere = abs(cr) > epsilon$2;
    function interpolate2(from, to, direction, stream) {
      circleStream(stream, radius, delta, direction, from, to);
    }
    function visible(lambda, phi2) {
      return cos$1(lambda) * cos$1(phi2) > cr;
    }
    function clipLine2(stream) {
      var point0, c0, v0, v00, clean;
      return {
        lineStart: function() {
          v00 = v0 = false;
          clean = 1;
        },
        point: function(lambda, phi2) {
          var point1 = [lambda, phi2], point2, v = visible(lambda, phi2), c2 = smallRadius ? v ? 0 : code(lambda, phi2) : v ? code(lambda + (lambda < 0 ? pi$3 : -pi$3), phi2) : 0;
          if (!point0 && (v00 = v0 = v))
            stream.lineStart();
          if (v !== v0) {
            point2 = intersect2(point0, point1);
            if (!point2 || pointEqual(point0, point2) || pointEqual(point1, point2)) {
              point1[0] += epsilon$2;
              point1[1] += epsilon$2;
              v = visible(point1[0], point1[1]);
            }
          }
          if (v !== v0) {
            clean = 0;
            if (v) {
              stream.lineStart();
              point2 = intersect2(point1, point0);
              stream.point(point2[0], point2[1]);
            } else {
              point2 = intersect2(point0, point1);
              stream.point(point2[0], point2[1]);
              stream.lineEnd();
            }
            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;
            if (!(c2 & c0) && (t = intersect2(point1, point0, true))) {
              clean = 0;
              if (smallRadius) {
                stream.lineStart();
                stream.point(t[0][0], t[0][1]);
                stream.point(t[1][0], t[1][1]);
                stream.lineEnd();
              } else {
                stream.point(t[1][0], t[1][1]);
                stream.lineEnd();
                stream.lineStart();
                stream.point(t[0][0], t[0][1]);
              }
            }
          }
          if (v && (!point0 || !pointEqual(point0, point1))) {
            stream.point(point1[0], point1[1]);
          }
          point0 = point1, v0 = v, c0 = c2;
        },
        lineEnd: function() {
          if (v0)
            stream.lineEnd();
          point0 = null;
        },
        // Rejoin first and last segments if there were intersections and the first
        // and last points were visible.
        clean: function() {
          return clean | (v00 && v0) << 1;
        }
      };
    }
    function intersect2(a2, b, two) {
      var pa = cartesian(a2), pb = cartesian(b);
      var n1 = [1, 0, 0], n2 = cartesianCross(pa, pb), n2n2 = cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
      if (!determinant)
        return !two && a2;
      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = cartesianCross(n1, n2), A2 = cartesianScale(n1, c1), B2 = cartesianScale(n2, c2);
      cartesianAddInPlace(A2, B2);
      var u = n1xn2, w = cartesianDot(A2, u), uu = cartesianDot(u, u), t22 = w * w - uu * (cartesianDot(A2, A2) - 1);
      if (t22 < 0)
        return;
      var t = sqrt(t22), q = cartesianScale(u, (-w - t) / uu);
      cartesianAddInPlace(q, A2);
      q = spherical(q);
      if (!two)
        return q;
      var lambda02 = a2[0], lambda12 = b[0], phi02 = a2[1], phi12 = b[1], z;
      if (lambda12 < lambda02)
        z = lambda02, lambda02 = lambda12, lambda12 = z;
      var delta2 = lambda12 - lambda02, polar = abs(delta2 - pi$3) < epsilon$2, meridian = polar || delta2 < epsilon$2;
      if (!polar && phi12 < phi02)
        z = phi02, phi02 = phi12, phi12 = z;
      if (meridian ? polar ? phi02 + phi12 > 0 ^ q[1] < (abs(q[0] - lambda02) < epsilon$2 ? phi02 : phi12) : phi02 <= q[1] && q[1] <= phi12 : delta2 > pi$3 ^ (lambda02 <= q[0] && q[0] <= lambda12)) {
        var q1 = cartesianScale(u, (-w + t) / uu);
        cartesianAddInPlace(q1, A2);
        return [q, spherical(q1)];
      }
    }
    function code(lambda, phi2) {
      var r = smallRadius ? radius : pi$3 - radius, code2 = 0;
      if (lambda < -r)
        code2 |= 1;
      else if (lambda > r)
        code2 |= 2;
      if (phi2 < -r)
        code2 |= 4;
      else if (phi2 > r)
        code2 |= 8;
      return code2;
    }
    return clip(
      visible,
      clipLine2,
      interpolate2,
      smallRadius ? [0, -radius] : [-pi$3, radius - pi$3]
    );
  };
  var clipLine = function(a2, b, x02, y02, x12, y12) {
    var ax = a2[0], ay = a2[1], bx = b[0], by = b[1], t02 = 0, t12 = 1, dx = bx - ax, dy = by - ay, r;
    r = x02 - ax;
    if (!dx && r > 0)
      return;
    r /= dx;
    if (dx < 0) {
      if (r < t02)
        return;
      if (r < t12)
        t12 = r;
    } else if (dx > 0) {
      if (r > t12)
        return;
      if (r > t02)
        t02 = r;
    }
    r = x12 - ax;
    if (!dx && r < 0)
      return;
    r /= dx;
    if (dx < 0) {
      if (r > t12)
        return;
      if (r > t02)
        t02 = r;
    } else if (dx > 0) {
      if (r < t02)
        return;
      if (r < t12)
        t12 = r;
    }
    r = y02 - ay;
    if (!dy && r > 0)
      return;
    r /= dy;
    if (dy < 0) {
      if (r < t02)
        return;
      if (r < t12)
        t12 = r;
    } else if (dy > 0) {
      if (r > t12)
        return;
      if (r > t02)
        t02 = r;
    }
    r = y12 - ay;
    if (!dy && r < 0)
      return;
    r /= dy;
    if (dy < 0) {
      if (r > t12)
        return;
      if (r > t02)
        t02 = r;
    } else if (dy > 0) {
      if (r < t02)
        return;
      if (r < t12)
        t12 = r;
    }
    if (t02 > 0)
      a2[0] = ax + t02 * dx, a2[1] = ay + t02 * dy;
    if (t12 < 1)
      b[0] = ax + t12 * dx, b[1] = ay + t12 * dy;
    return true;
  };
  var clipMax = 1e9;
  var clipMin = -clipMax;
  function clipRectangle(x02, y02, x12, y12) {
    function visible(x2, y2) {
      return x02 <= x2 && x2 <= x12 && y02 <= y2 && y2 <= y12;
    }
    function interpolate2(from, to, direction, stream) {
      var a2 = 0, a1 = 0;
      if (from == null || (a2 = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) {
        do
          stream.point(a2 === 0 || a2 === 3 ? x02 : x12, a2 > 1 ? y12 : y02);
        while ((a2 = (a2 + direction + 4) % 4) !== a1);
      } else {
        stream.point(to[0], to[1]);
      }
    }
    function corner(p, direction) {
      return abs(p[0] - x02) < epsilon$2 ? direction > 0 ? 0 : 3 : abs(p[0] - x12) < epsilon$2 ? direction > 0 ? 2 : 1 : abs(p[1] - y02) < epsilon$2 ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }
    function compareIntersection2(a2, b) {
      return comparePoint(a2.x, b.x);
    }
    function comparePoint(a2, b) {
      var ca = corner(a2, 1), cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a2[1] : ca === 1 ? a2[0] - b[0] : ca === 2 ? a2[1] - b[1] : b[0] - a2[0];
    }
    return function(stream) {
      var activeStream = stream, bufferStream = clipBuffer(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
      var clipStream = {
        point: point2,
        lineStart,
        lineEnd,
        polygonStart,
        polygonEnd
      };
      function point2(x2, y2) {
        if (visible(x2, y2))
          activeStream.point(x2, y2);
      }
      function polygonInside() {
        var winding = 0;
        for (var i = 0, n = polygon.length; i < n; ++i) {
          for (var ring2 = polygon[i], j = 1, m = ring2.length, point3 = ring2[0], a0, a1, b02 = point3[0], b12 = point3[1]; j < m; ++j) {
            a0 = b02, a1 = b12, point3 = ring2[j], b02 = point3[0], b12 = point3[1];
            if (a1 <= y12) {
              if (b12 > y12 && (b02 - a0) * (y12 - a1) > (b12 - a1) * (x02 - a0))
                ++winding;
            } else {
              if (b12 <= y12 && (b02 - a0) * (y12 - a1) < (b12 - a1) * (x02 - a0))
                --winding;
            }
          }
        }
        return winding;
      }
      function polygonStart() {
        activeStream = bufferStream, segments = [], polygon = [], clean = true;
      }
      function polygonEnd() {
        var startInside = polygonInside(), cleanInside = clean && startInside, visible2 = (segments = merge(segments)).length;
        if (cleanInside || visible2) {
          stream.polygonStart();
          if (cleanInside) {
            stream.lineStart();
            interpolate2(null, null, 1, stream);
            stream.lineEnd();
          }
          if (visible2) {
            clipRejoin(
              segments,
              compareIntersection2,
              startInside,
              interpolate2,
              stream
            );
          }
          stream.polygonEnd();
        }
        activeStream = stream, segments = polygon = ring = null;
      }
      function lineStart() {
        clipStream.point = linePoint2;
        if (polygon)
          polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }
      function lineEnd() {
        if (segments) {
          linePoint2(x__, y__);
          if (v__ && v_)
            bufferStream.rejoin();
          segments.push(bufferStream.result());
        }
        clipStream.point = point2;
        if (v_)
          activeStream.lineEnd();
      }
      function linePoint2(x2, y2) {
        var v = visible(x2, y2);
        if (polygon)
          ring.push([x2, y2]);
        if (first) {
          x__ = x2, y__ = y2, v__ = v;
          first = false;
          if (v) {
            activeStream.lineStart();
            activeStream.point(x2, y2);
          }
        } else {
          if (v && v_)
            activeStream.point(x2, y2);
          else {
            var a2 = [
              x_ = Math.max(clipMin, Math.min(clipMax, x_)),
              y_ = Math.max(clipMin, Math.min(clipMax, y_))
            ], b = [
              x2 = Math.max(clipMin, Math.min(clipMax, x2)),
              y2 = Math.max(clipMin, Math.min(clipMax, y2))
            ];
            if (clipLine(a2, b, x02, y02, x12, y12)) {
              if (!v_) {
                activeStream.lineStart();
                activeStream.point(a2[0], a2[1]);
              }
              activeStream.point(b[0], b[1]);
              if (!v)
                activeStream.lineEnd();
              clean = false;
            } else if (v) {
              activeStream.lineStart();
              activeStream.point(x2, y2);
              clean = false;
            }
          }
        }
        x_ = x2, y_ = y2, v_ = v;
      }
      return clipStream;
    };
  }
  var extent$1 = function() {
    var x02 = 0, y02 = 0, x12 = 960, y12 = 500, cache, cacheStream, clip2;
    return clip2 = {
      stream: function(stream) {
        return cache && cacheStream === stream ? cache : cache = clipRectangle(x02, y02, x12, y12)(cacheStream = stream);
      },
      extent: function(_) {
        return arguments.length ? (x02 = +_[0][0], y02 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1], cache = cacheStream = null, clip2) : [
          [x02, y02],
          [x12, y12]
        ];
      }
    };
  };
  var lengthSum = adder();
  var lambda0$2;
  var sinPhi0$1;
  var cosPhi0$1;
  var lengthStream = {
    sphere: noop$1,
    point: noop$1,
    lineStart: lengthLineStart,
    lineEnd: noop$1,
    polygonStart: noop$1,
    polygonEnd: noop$1
  };
  function lengthLineStart() {
    lengthStream.point = lengthPointFirst;
    lengthStream.lineEnd = lengthLineEnd;
  }
  function lengthLineEnd() {
    lengthStream.point = lengthStream.lineEnd = noop$1;
  }
  function lengthPointFirst(lambda, phi2) {
    lambda *= radians, phi2 *= radians;
    lambda0$2 = lambda, sinPhi0$1 = sin$1(phi2), cosPhi0$1 = cos$1(phi2);
    lengthStream.point = lengthPoint;
  }
  function lengthPoint(lambda, phi2) {
    lambda *= radians, phi2 *= radians;
    var sinPhi = sin$1(phi2), cosPhi = cos$1(phi2), delta = abs(lambda - lambda0$2), cosDelta = cos$1(delta), sinDelta = sin$1(delta), x2 = cosPhi * sinDelta, y2 = cosPhi0$1 * sinPhi - sinPhi0$1 * cosPhi * cosDelta, z = sinPhi0$1 * sinPhi + cosPhi0$1 * cosPhi * cosDelta;
    lengthSum.add(atan2(sqrt(x2 * x2 + y2 * y2), z));
    lambda0$2 = lambda, sinPhi0$1 = sinPhi, cosPhi0$1 = cosPhi;
  }
  var length$1 = function(object2) {
    lengthSum.reset();
    geoStream(object2, lengthStream);
    return +lengthSum;
  };
  var coordinates = [null, null];
  var object$1 = { type: "LineString", coordinates };
  var distance = function(a2, b) {
    coordinates[0] = a2;
    coordinates[1] = b;
    return length$1(object$1);
  };
  var containsObjectType = {
    Feature: function(object2, point2) {
      return containsGeometry(object2.geometry, point2);
    },
    FeatureCollection: function(object2, point2) {
      var features = object2.features, i = -1, n = features.length;
      while (++i < n)
        if (containsGeometry(features[i].geometry, point2))
          return true;
      return false;
    }
  };
  var containsGeometryType = {
    Sphere: function() {
      return true;
    },
    Point: function(object2, point2) {
      return containsPoint(object2.coordinates, point2);
    },
    MultiPoint: function(object2, point2) {
      var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
      while (++i < n)
        if (containsPoint(coordinates2[i], point2))
          return true;
      return false;
    },
    LineString: function(object2, point2) {
      return containsLine(object2.coordinates, point2);
    },
    MultiLineString: function(object2, point2) {
      var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
      while (++i < n)
        if (containsLine(coordinates2[i], point2))
          return true;
      return false;
    },
    Polygon: function(object2, point2) {
      return containsPolygon(object2.coordinates, point2);
    },
    MultiPolygon: function(object2, point2) {
      var coordinates2 = object2.coordinates, i = -1, n = coordinates2.length;
      while (++i < n)
        if (containsPolygon(coordinates2[i], point2))
          return true;
      return false;
    },
    GeometryCollection: function(object2, point2) {
      var geometries = object2.geometries, i = -1, n = geometries.length;
      while (++i < n)
        if (containsGeometry(geometries[i], point2))
          return true;
      return false;
    }
  };
  function containsGeometry(geometry, point2) {
    return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point2) : false;
  }
  function containsPoint(coordinates2, point2) {
    return distance(coordinates2, point2) === 0;
  }
  function containsLine(coordinates2, point2) {
    var ab = distance(coordinates2[0], coordinates2[1]), ao = distance(coordinates2[0], point2), ob = distance(point2, coordinates2[1]);
    return ao + ob <= ab + epsilon$2;
  }
  function containsPolygon(coordinates2, point2) {
    return !!polygonContains(coordinates2.map(ringRadians), pointRadians(point2));
  }
  function ringRadians(ring) {
    return ring = ring.map(pointRadians), ring.pop(), ring;
  }
  function pointRadians(point2) {
    return [point2[0] * radians, point2[1] * radians];
  }
  var contains = function(object2, point2) {
    return (object2 && containsObjectType.hasOwnProperty(object2.type) ? containsObjectType[object2.type] : containsGeometry)(object2, point2);
  };
  function graticuleX(y02, y12, dy) {
    var y2 = sequence(y02, y12 - epsilon$2, dy).concat(y12);
    return function(x2) {
      return y2.map(function(y3) {
        return [x2, y3];
      });
    };
  }
  function graticuleY(x02, x12, dx) {
    var x2 = sequence(x02, x12 - epsilon$2, dx).concat(x12);
    return function(y2) {
      return x2.map(function(x3) {
        return [x3, y2];
      });
    };
  }
  function graticule() {
    var x12, x02, X12, X02, y12, y02, Y12, Y02, dx = 10, dy = dx, DX = 90, DY = 360, x2, y2, X3, Y3, precision = 2.5;
    function graticule2() {
      return { type: "MultiLineString", coordinates: lines() };
    }
    function lines() {
      return sequence(ceil(X02 / DX) * DX, X12, DX).map(X3).concat(sequence(ceil(Y02 / DY) * DY, Y12, DY).map(Y3)).concat(
        sequence(ceil(x02 / dx) * dx, x12, dx).filter(function(x3) {
          return abs(x3 % DX) > epsilon$2;
        }).map(x2)
      ).concat(
        sequence(ceil(y02 / dy) * dy, y12, dy).filter(function(y3) {
          return abs(y3 % DY) > epsilon$2;
        }).map(y2)
      );
    }
    graticule2.lines = function() {
      return lines().map(function(coordinates2) {
        return { type: "LineString", coordinates: coordinates2 };
      });
    };
    graticule2.outline = function() {
      return {
        type: "Polygon",
        coordinates: [
          X3(X02).concat(
            Y3(Y12).slice(1),
            X3(X12).reverse().slice(1),
            Y3(Y02).reverse().slice(1)
          )
        ]
      };
    };
    graticule2.extent = function(_) {
      if (!arguments.length)
        return graticule2.extentMinor();
      return graticule2.extentMajor(_).extentMinor(_);
    };
    graticule2.extentMajor = function(_) {
      if (!arguments.length)
        return [
          [X02, Y02],
          [X12, Y12]
        ];
      X02 = +_[0][0], X12 = +_[1][0];
      Y02 = +_[0][1], Y12 = +_[1][1];
      if (X02 > X12)
        _ = X02, X02 = X12, X12 = _;
      if (Y02 > Y12)
        _ = Y02, Y02 = Y12, Y12 = _;
      return graticule2.precision(precision);
    };
    graticule2.extentMinor = function(_) {
      if (!arguments.length)
        return [
          [x02, y02],
          [x12, y12]
        ];
      x02 = +_[0][0], x12 = +_[1][0];
      y02 = +_[0][1], y12 = +_[1][1];
      if (x02 > x12)
        _ = x02, x02 = x12, x12 = _;
      if (y02 > y12)
        _ = y02, y02 = y12, y12 = _;
      return graticule2.precision(precision);
    };
    graticule2.step = function(_) {
      if (!arguments.length)
        return graticule2.stepMinor();
      return graticule2.stepMajor(_).stepMinor(_);
    };
    graticule2.stepMajor = function(_) {
      if (!arguments.length)
        return [DX, DY];
      DX = +_[0], DY = +_[1];
      return graticule2;
    };
    graticule2.stepMinor = function(_) {
      if (!arguments.length)
        return [dx, dy];
      dx = +_[0], dy = +_[1];
      return graticule2;
    };
    graticule2.precision = function(_) {
      if (!arguments.length)
        return precision;
      precision = +_;
      x2 = graticuleX(y02, y12, 90);
      y2 = graticuleY(x02, x12, precision);
      X3 = graticuleX(Y02, Y12, 90);
      Y3 = graticuleY(X02, X12, precision);
      return graticule2;
    };
    return graticule2.extentMajor([
      [-180, -90 + epsilon$2],
      [180, 90 - epsilon$2]
    ]).extentMinor([
      [-180, -80 - epsilon$2],
      [180, 80 + epsilon$2]
    ]);
  }
  function graticule10() {
    return graticule()();
  }
  var interpolate$1 = function(a2, b) {
    var x02 = a2[0] * radians, y02 = a2[1] * radians, x12 = b[0] * radians, y12 = b[1] * radians, cy0 = cos$1(y02), sy0 = sin$1(y02), cy1 = cos$1(y12), sy1 = sin$1(y12), kx0 = cy0 * cos$1(x02), ky0 = cy0 * sin$1(x02), kx1 = cy1 * cos$1(x12), ky1 = cy1 * sin$1(x12), d = 2 * asin(sqrt(haversin(y12 - y02) + cy0 * cy1 * haversin(x12 - x02))), k2 = sin$1(d);
    var interpolate2 = d ? function(t) {
      var B2 = sin$1(t *= d) / k2, A2 = sin$1(d - t) / k2, x2 = A2 * kx0 + B2 * kx1, y2 = A2 * ky0 + B2 * ky1, z = A2 * sy0 + B2 * sy1;
      return [
        atan2(y2, x2) * degrees$1,
        atan2(z, sqrt(x2 * x2 + y2 * y2)) * degrees$1
      ];
    } : function() {
      return [x02 * degrees$1, y02 * degrees$1];
    };
    interpolate2.distance = d;
    return interpolate2;
  };
  var identity$4 = function(x2) {
    return x2;
  };
  var areaSum$1 = adder();
  var areaRingSum$1 = adder();
  var x00;
  var y00;
  var x0$1;
  var y0$1;
  var areaStream$1 = {
    point: noop$1,
    lineStart: noop$1,
    lineEnd: noop$1,
    polygonStart: function() {
      areaStream$1.lineStart = areaRingStart$1;
      areaStream$1.lineEnd = areaRingEnd$1;
    },
    polygonEnd: function() {
      areaStream$1.lineStart = areaStream$1.lineEnd = areaStream$1.point = noop$1;
      areaSum$1.add(abs(areaRingSum$1));
      areaRingSum$1.reset();
    },
    result: function() {
      var area2 = areaSum$1 / 2;
      areaSum$1.reset();
      return area2;
    }
  };
  function areaRingStart$1() {
    areaStream$1.point = areaPointFirst$1;
  }
  function areaPointFirst$1(x2, y2) {
    areaStream$1.point = areaPoint$1;
    x00 = x0$1 = x2, y00 = y0$1 = y2;
  }
  function areaPoint$1(x2, y2) {
    areaRingSum$1.add(y0$1 * x2 - x0$1 * y2);
    x0$1 = x2, y0$1 = y2;
  }
  function areaRingEnd$1() {
    areaPoint$1(x00, y00);
  }
  var x0$2 = Infinity;
  var y0$2 = x0$2;
  var x1 = -x0$2;
  var y1 = x1;
  var boundsStream$1 = {
    point: boundsPoint$1,
    lineStart: noop$1,
    lineEnd: noop$1,
    polygonStart: noop$1,
    polygonEnd: noop$1,
    result: function() {
      var bounds2 = [
        [x0$2, y0$2],
        [x1, y1]
      ];
      x1 = y1 = -(y0$2 = x0$2 = Infinity);
      return bounds2;
    }
  };
  function boundsPoint$1(x2, y2) {
    if (x2 < x0$2)
      x0$2 = x2;
    if (x2 > x1)
      x1 = x2;
    if (y2 < y0$2)
      y0$2 = y2;
    if (y2 > y1)
      y1 = y2;
  }
  var X0$1 = 0;
  var Y0$1 = 0;
  var Z0$1 = 0;
  var X1$1 = 0;
  var Y1$1 = 0;
  var Z1$1 = 0;
  var X2$1 = 0;
  var Y2$1 = 0;
  var Z2$1 = 0;
  var x00$1;
  var y00$1;
  var x0$3;
  var y0$3;
  var centroidStream$1 = {
    point: centroidPoint$1,
    lineStart: centroidLineStart$1,
    lineEnd: centroidLineEnd$1,
    polygonStart: function() {
      centroidStream$1.lineStart = centroidRingStart$1;
      centroidStream$1.lineEnd = centroidRingEnd$1;
    },
    polygonEnd: function() {
      centroidStream$1.point = centroidPoint$1;
      centroidStream$1.lineStart = centroidLineStart$1;
      centroidStream$1.lineEnd = centroidLineEnd$1;
    },
    result: function() {
      var centroid2 = Z2$1 ? [X2$1 / Z2$1, Y2$1 / Z2$1] : Z1$1 ? [X1$1 / Z1$1, Y1$1 / Z1$1] : Z0$1 ? [X0$1 / Z0$1, Y0$1 / Z0$1] : [NaN, NaN];
      X0$1 = Y0$1 = Z0$1 = X1$1 = Y1$1 = Z1$1 = X2$1 = Y2$1 = Z2$1 = 0;
      return centroid2;
    }
  };
  function centroidPoint$1(x2, y2) {
    X0$1 += x2;
    Y0$1 += y2;
    ++Z0$1;
  }
  function centroidLineStart$1() {
    centroidStream$1.point = centroidPointFirstLine;
  }
  function centroidPointFirstLine(x2, y2) {
    centroidStream$1.point = centroidPointLine;
    centroidPoint$1(x0$3 = x2, y0$3 = y2);
  }
  function centroidPointLine(x2, y2) {
    var dx = x2 - x0$3, dy = y2 - y0$3, z = sqrt(dx * dx + dy * dy);
    X1$1 += z * (x0$3 + x2) / 2;
    Y1$1 += z * (y0$3 + y2) / 2;
    Z1$1 += z;
    centroidPoint$1(x0$3 = x2, y0$3 = y2);
  }
  function centroidLineEnd$1() {
    centroidStream$1.point = centroidPoint$1;
  }
  function centroidRingStart$1() {
    centroidStream$1.point = centroidPointFirstRing;
  }
  function centroidRingEnd$1() {
    centroidPointRing(x00$1, y00$1);
  }
  function centroidPointFirstRing(x2, y2) {
    centroidStream$1.point = centroidPointRing;
    centroidPoint$1(x00$1 = x0$3 = x2, y00$1 = y0$3 = y2);
  }
  function centroidPointRing(x2, y2) {
    var dx = x2 - x0$3, dy = y2 - y0$3, z = sqrt(dx * dx + dy * dy);
    X1$1 += z * (x0$3 + x2) / 2;
    Y1$1 += z * (y0$3 + y2) / 2;
    Z1$1 += z;
    z = y0$3 * x2 - x0$3 * y2;
    X2$1 += z * (x0$3 + x2);
    Y2$1 += z * (y0$3 + y2);
    Z2$1 += z * 3;
    centroidPoint$1(x0$3 = x2, y0$3 = y2);
  }
  function PathContext(context) {
    this._context = context;
  }
  PathContext.prototype = {
    _radius: 4.5,
    pointRadius: function(_) {
      return this._radius = _, this;
    },
    polygonStart: function() {
      this._line = 0;
    },
    polygonEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line === 0)
        this._context.closePath();
      this._point = NaN;
    },
    point: function(x2, y2) {
      switch (this._point) {
        case 0: {
          this._context.moveTo(x2, y2);
          this._point = 1;
          break;
        }
        case 1: {
          this._context.lineTo(x2, y2);
          break;
        }
        default: {
          this._context.moveTo(x2 + this._radius, y2);
          this._context.arc(x2, y2, this._radius, 0, tau$3);
          break;
        }
      }
    },
    result: noop$1
  };
  var lengthSum$1 = adder();
  var lengthRing;
  var x00$2;
  var y00$2;
  var x0$4;
  var y0$4;
  var lengthStream$1 = {
    point: noop$1,
    lineStart: function() {
      lengthStream$1.point = lengthPointFirst$1;
    },
    lineEnd: function() {
      if (lengthRing)
        lengthPoint$1(x00$2, y00$2);
      lengthStream$1.point = noop$1;
    },
    polygonStart: function() {
      lengthRing = true;
    },
    polygonEnd: function() {
      lengthRing = null;
    },
    result: function() {
      var length2 = +lengthSum$1;
      lengthSum$1.reset();
      return length2;
    }
  };
  function lengthPointFirst$1(x2, y2) {
    lengthStream$1.point = lengthPoint$1;
    x00$2 = x0$4 = x2, y00$2 = y0$4 = y2;
  }
  function lengthPoint$1(x2, y2) {
    x0$4 -= x2, y0$4 -= y2;
    lengthSum$1.add(sqrt(x0$4 * x0$4 + y0$4 * y0$4));
    x0$4 = x2, y0$4 = y2;
  }
  function PathString() {
    this._string = [];
  }
  PathString.prototype = {
    _radius: 4.5,
    _circle: circle$1(4.5),
    pointRadius: function(_) {
      if ((_ = +_) !== this._radius)
        this._radius = _, this._circle = null;
      return this;
    },
    polygonStart: function() {
      this._line = 0;
    },
    polygonEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line === 0)
        this._string.push("Z");
      this._point = NaN;
    },
    point: function(x2, y2) {
      switch (this._point) {
        case 0: {
          this._string.push("M", x2, ",", y2);
          this._point = 1;
          break;
        }
        case 1: {
          this._string.push("L", x2, ",", y2);
          break;
        }
        default: {
          if (this._circle == null)
            this._circle = circle$1(this._radius);
          this._string.push("M", x2, ",", y2, this._circle);
          break;
        }
      }
    },
    result: function() {
      if (this._string.length) {
        var result = this._string.join("");
        this._string = [];
        return result;
      } else {
        return null;
      }
    }
  };
  function circle$1(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }
  var index$1 = function(projection2, context) {
    var pointRadius = 4.5, projectionStream, contextStream;
    function path2(object2) {
      if (object2) {
        if (typeof pointRadius === "function")
          contextStream.pointRadius(+pointRadius.apply(this, arguments));
        geoStream(object2, projectionStream(contextStream));
      }
      return contextStream.result();
    }
    path2.area = function(object2) {
      geoStream(object2, projectionStream(areaStream$1));
      return areaStream$1.result();
    };
    path2.measure = function(object2) {
      geoStream(object2, projectionStream(lengthStream$1));
      return lengthStream$1.result();
    };
    path2.bounds = function(object2) {
      geoStream(object2, projectionStream(boundsStream$1));
      return boundsStream$1.result();
    };
    path2.centroid = function(object2) {
      geoStream(object2, projectionStream(centroidStream$1));
      return centroidStream$1.result();
    };
    path2.projection = function(_) {
      return arguments.length ? (projectionStream = _ == null ? (projection2 = null, identity$4) : (projection2 = _).stream, path2) : projection2;
    };
    path2.context = function(_) {
      if (!arguments.length)
        return context;
      contextStream = _ == null ? (context = null, new PathString()) : new PathContext(context = _);
      if (typeof pointRadius !== "function")
        contextStream.pointRadius(pointRadius);
      return path2;
    };
    path2.pointRadius = function(_) {
      if (!arguments.length)
        return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path2;
    };
    return path2.projection(projection2).context(context);
  };
  var transform = function(methods) {
    return {
      stream: transformer(methods)
    };
  };
  function transformer(methods) {
    return function(stream) {
      var s2 = new TransformStream();
      for (var key in methods)
        s2[key] = methods[key];
      s2.stream = stream;
      return s2;
    };
  }
  function TransformStream() {
  }
  TransformStream.prototype = {
    constructor: TransformStream,
    point: function(x2, y2) {
      this.stream.point(x2, y2);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  };
  function fit(projection2, fitBounds, object2) {
    var clip2 = projection2.clipExtent && projection2.clipExtent();
    projection2.scale(150).translate([0, 0]);
    if (clip2 != null)
      projection2.clipExtent(null);
    geoStream(object2, projection2.stream(boundsStream$1));
    fitBounds(boundsStream$1.result());
    if (clip2 != null)
      projection2.clipExtent(clip2);
    return projection2;
  }
  function fitExtent(projection2, extent2, object2) {
    return fit(
      projection2,
      function(b) {
        var w = extent2[1][0] - extent2[0][0], h = extent2[1][1] - extent2[0][1], k2 = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x2 = +extent2[0][0] + (w - k2 * (b[1][0] + b[0][0])) / 2, y2 = +extent2[0][1] + (h - k2 * (b[1][1] + b[0][1])) / 2;
        projection2.scale(150 * k2).translate([x2, y2]);
      },
      object2
    );
  }
  function fitSize(projection2, size, object2) {
    return fitExtent(projection2, [[0, 0], size], object2);
  }
  function fitWidth(projection2, width, object2) {
    return fit(
      projection2,
      function(b) {
        var w = +width, k2 = w / (b[1][0] - b[0][0]), x2 = (w - k2 * (b[1][0] + b[0][0])) / 2, y2 = -k2 * b[0][1];
        projection2.scale(150 * k2).translate([x2, y2]);
      },
      object2
    );
  }
  function fitHeight(projection2, height, object2) {
    return fit(
      projection2,
      function(b) {
        var h = +height, k2 = h / (b[1][1] - b[0][1]), x2 = -k2 * b[0][0], y2 = (h - k2 * (b[1][1] + b[0][1])) / 2;
        projection2.scale(150 * k2).translate([x2, y2]);
      },
      object2
    );
  }
  var maxDepth = 16;
  var cosMinDistance = cos$1(30 * radians);
  var resample = function(project, delta2) {
    return +delta2 ? resample$1(project, delta2) : resampleNone(project);
  };
  function resampleNone(project) {
    return transformer({
      point: function(x2, y2) {
        x2 = project(x2, y2);
        this.stream.point(x2[0], x2[1]);
      }
    });
  }
  function resample$1(project, delta2) {
    function resampleLineTo(x02, y02, lambda02, a0, b02, c0, x12, y12, lambda12, a1, b12, c1, depth, stream) {
      var dx = x12 - x02, dy = y12 - y02, d2 = dx * dx + dy * dy;
      if (d2 > 4 * delta2 && depth--) {
        var a2 = a0 + a1, b = b02 + b12, c2 = c0 + c1, m = sqrt(a2 * a2 + b * b + c2 * c2), phi2 = asin(c2 /= m), lambda22 = abs(abs(c2) - 1) < epsilon$2 || abs(lambda02 - lambda12) < epsilon$2 ? (lambda02 + lambda12) / 2 : atan2(b, a2), p = project(lambda22, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x02, dy2 = y2 - y02, dz = dy * dx2 - dx * dy2;
        if (dz * dz / d2 > delta2 || // perpendicular projected distance
        abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 || // midpoint close to an end
        a0 * a1 + b02 * b12 + c0 * c1 < cosMinDistance) {
          resampleLineTo(
            x02,
            y02,
            lambda02,
            a0,
            b02,
            c0,
            x2,
            y2,
            lambda22,
            a2 /= m,
            b /= m,
            c2,
            depth,
            stream
          );
          stream.point(x2, y2);
          resampleLineTo(
            x2,
            y2,
            lambda22,
            a2,
            b,
            c2,
            x12,
            y12,
            lambda12,
            a1,
            b12,
            c1,
            depth,
            stream
          );
        }
      }
    }
    return function(stream) {
      var lambda002, x002, y002, a00, b00, c00, lambda02, x02, y02, a0, b02, c0;
      var resampleStream = {
        point: point2,
        lineStart,
        lineEnd,
        polygonStart: function() {
          stream.polygonStart();
          resampleStream.lineStart = ringStart;
        },
        polygonEnd: function() {
          stream.polygonEnd();
          resampleStream.lineStart = lineStart;
        }
      };
      function point2(x2, y2) {
        x2 = project(x2, y2);
        stream.point(x2[0], x2[1]);
      }
      function lineStart() {
        x02 = NaN;
        resampleStream.point = linePoint2;
        stream.lineStart();
      }
      function linePoint2(lambda, phi2) {
        var c2 = cartesian([lambda, phi2]), p = project(lambda, phi2);
        resampleLineTo(
          x02,
          y02,
          lambda02,
          a0,
          b02,
          c0,
          x02 = p[0],
          y02 = p[1],
          lambda02 = lambda,
          a0 = c2[0],
          b02 = c2[1],
          c0 = c2[2],
          maxDepth,
          stream
        );
        stream.point(x02, y02);
      }
      function lineEnd() {
        resampleStream.point = point2;
        stream.lineEnd();
      }
      function ringStart() {
        lineStart();
        resampleStream.point = ringPoint;
        resampleStream.lineEnd = ringEnd;
      }
      function ringPoint(lambda, phi2) {
        linePoint2(lambda002 = lambda, phi2), x002 = x02, y002 = y02, a00 = a0, b00 = b02, c00 = c0;
        resampleStream.point = linePoint2;
      }
      function ringEnd() {
        resampleLineTo(
          x02,
          y02,
          lambda02,
          a0,
          b02,
          c0,
          x002,
          y002,
          lambda002,
          a00,
          b00,
          c00,
          maxDepth,
          stream
        );
        resampleStream.lineEnd = lineEnd;
        lineEnd();
      }
      return resampleStream;
    };
  }
  var transformRadians = transformer({
    point: function(x2, y2) {
      this.stream.point(x2 * radians, y2 * radians);
    }
  });
  function transformRotate(rotate) {
    return transformer({
      point: function(x2, y2) {
        var r = rotate(x2, y2);
        return this.stream.point(r[0], r[1]);
      }
    });
  }
  function projection(project) {
    return projectionMutator(function() {
      return project;
    })();
  }
  function projectionMutator(projectAt) {
    var project, k2 = 150, x2 = 480, y2 = 250, dx, dy, lambda = 0, phi2 = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, theta = null, preclip = clipAntimeridian, x02 = null, y02, x12, y12, postclip = identity$4, delta2 = 0.5, projectResample = resample(projectTransform, delta2), cache, cacheStream;
    function projection2(point2) {
      point2 = projectRotate(point2[0] * radians, point2[1] * radians);
      return [point2[0] * k2 + dx, dy - point2[1] * k2];
    }
    function invert(point2) {
      point2 = projectRotate.invert((point2[0] - dx) / k2, (dy - point2[1]) / k2);
      return point2 && [point2[0] * degrees$1, point2[1] * degrees$1];
    }
    function projectTransform(x3, y3) {
      return x3 = project(x3, y3), [x3[0] * k2 + dx, dy - x3[1] * k2];
    }
    projection2.stream = function(stream) {
      return cache && cacheStream === stream ? cache : cache = transformRadians(
        transformRotate(rotate)(
          preclip(projectResample(postclip(cacheStream = stream)))
        )
      );
    };
    projection2.preclip = function(_) {
      return arguments.length ? (preclip = _, theta = void 0, reset()) : preclip;
    };
    projection2.postclip = function(_) {
      return arguments.length ? (postclip = _, x02 = y02 = x12 = y12 = null, reset()) : postclip;
    };
    projection2.clipAngle = function(_) {
      return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians) : (theta = null, clipAntimeridian), reset()) : theta * degrees$1;
    };
    projection2.clipExtent = function(_) {
      return arguments.length ? (postclip = _ == null ? (x02 = y02 = x12 = y12 = null, identity$4) : clipRectangle(
        x02 = +_[0][0],
        y02 = +_[0][1],
        x12 = +_[1][0],
        y12 = +_[1][1]
      ), reset()) : x02 == null ? null : [
        [x02, y02],
        [x12, y12]
      ];
    };
    projection2.scale = function(_) {
      return arguments.length ? (k2 = +_, recenter()) : k2;
    };
    projection2.translate = function(_) {
      return arguments.length ? (x2 = +_[0], y2 = +_[1], recenter()) : [x2, y2];
    };
    projection2.center = function(_) {
      return arguments.length ? (lambda = _[0] % 360 * radians, phi2 = _[1] % 360 * radians, recenter()) : [lambda * degrees$1, phi2 * degrees$1];
    };
    projection2.rotate = function(_) {
      return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [
        deltaLambda * degrees$1,
        deltaPhi * degrees$1,
        deltaGamma * degrees$1
      ];
    };
    projection2.precision = function(_) {
      return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt(delta2);
    };
    projection2.fitExtent = function(extent2, object2) {
      return fitExtent(projection2, extent2, object2);
    };
    projection2.fitSize = function(size, object2) {
      return fitSize(projection2, size, object2);
    };
    projection2.fitWidth = function(width, object2) {
      return fitWidth(projection2, width, object2);
    };
    projection2.fitHeight = function(height, object2) {
      return fitHeight(projection2, height, object2);
    };
    function recenter() {
      projectRotate = compose(
        rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma),
        project
      );
      var center2 = project(lambda, phi2);
      dx = x2 - center2[0] * k2;
      dy = y2 + center2[1] * k2;
      return reset();
    }
    function reset() {
      cache = cacheStream = null;
      return projection2;
    }
    return function() {
      project = projectAt.apply(this, arguments);
      projection2.invert = project.invert && invert;
      return recenter();
    };
  }
  function conicProjection(projectAt) {
    var phi02 = 0, phi12 = pi$3 / 3, m = projectionMutator(projectAt), p = m(phi02, phi12);
    p.parallels = function(_) {
      return arguments.length ? m(phi02 = _[0] * radians, phi12 = _[1] * radians) : [phi02 * degrees$1, phi12 * degrees$1];
    };
    return p;
  }
  function cylindricalEqualAreaRaw(phi02) {
    var cosPhi02 = cos$1(phi02);
    function forward(lambda, phi2) {
      return [lambda * cosPhi02, sin$1(phi2) / cosPhi02];
    }
    forward.invert = function(x2, y2) {
      return [x2 / cosPhi02, asin(y2 * cosPhi02)];
    };
    return forward;
  }
  function conicEqualAreaRaw(y02, y12) {
    var sy0 = sin$1(y02), n = (sy0 + sin$1(y12)) / 2;
    if (abs(n) < epsilon$2)
      return cylindricalEqualAreaRaw(y02);
    var c2 = 1 + sy0 * (2 * n - sy0), r0 = sqrt(c2) / n;
    function project(x2, y2) {
      var r = sqrt(c2 - 2 * n * sin$1(y2)) / n;
      return [r * sin$1(x2 *= n), r0 - r * cos$1(x2)];
    }
    project.invert = function(x2, y2) {
      var r0y = r0 - y2;
      return [
        atan2(x2, abs(r0y)) / n * sign(r0y),
        asin((c2 - (x2 * x2 + r0y * r0y) * n * n) / (2 * n))
      ];
    };
    return project;
  }
  var conicEqualArea = function() {
    return conicProjection(conicEqualAreaRaw).scale(155.424).center([0, 33.6442]);
  };
  var albers = function() {
    return conicEqualArea().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
  };
  function multiplex(streams) {
    var n = streams.length;
    return {
      point: function(x2, y2) {
        var i = -1;
        while (++i < n)
          streams[i].point(x2, y2);
      },
      sphere: function() {
        var i = -1;
        while (++i < n)
          streams[i].sphere();
      },
      lineStart: function() {
        var i = -1;
        while (++i < n)
          streams[i].lineStart();
      },
      lineEnd: function() {
        var i = -1;
        while (++i < n)
          streams[i].lineEnd();
      },
      polygonStart: function() {
        var i = -1;
        while (++i < n)
          streams[i].polygonStart();
      },
      polygonEnd: function() {
        var i = -1;
        while (++i < n)
          streams[i].polygonEnd();
      }
    };
  }
  var albersUsa = function() {
    var cache, cacheStream, lower48 = albers(), lower48Point, alaska = conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, hawaii = conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, point2, pointStream = {
      point: function(x2, y2) {
        point2 = [x2, y2];
      }
    };
    function albersUsa2(coordinates2) {
      var x2 = coordinates2[0], y2 = coordinates2[1];
      return point2 = null, (lower48Point.point(x2, y2), point2) || (alaskaPoint.point(x2, y2), point2) || (hawaiiPoint.point(x2, y2), point2);
    }
    albersUsa2.invert = function(coordinates2) {
      var k2 = lower48.scale(), t = lower48.translate(), x2 = (coordinates2[0] - t[0]) / k2, y2 = (coordinates2[1] - t[1]) / k2;
      return (y2 >= 0.12 && y2 < 0.234 && x2 >= -0.425 && x2 < -0.214 ? alaska : y2 >= 0.166 && y2 < 0.234 && x2 >= -0.214 && x2 < -0.115 ? hawaii : lower48).invert(coordinates2);
    };
    albersUsa2.stream = function(stream) {
      return cache && cacheStream === stream ? cache : cache = multiplex([
        lower48.stream(cacheStream = stream),
        alaska.stream(stream),
        hawaii.stream(stream)
      ]);
    };
    albersUsa2.precision = function(_) {
      if (!arguments.length)
        return lower48.precision();
      lower48.precision(_), alaska.precision(_), hawaii.precision(_);
      return reset();
    };
    albersUsa2.scale = function(_) {
      if (!arguments.length)
        return lower48.scale();
      lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
      return albersUsa2.translate(lower48.translate());
    };
    albersUsa2.translate = function(_) {
      if (!arguments.length)
        return lower48.translate();
      var k2 = lower48.scale(), x2 = +_[0], y2 = +_[1];
      lower48Point = lower48.translate(_).clipExtent([
        [x2 - 0.455 * k2, y2 - 0.238 * k2],
        [x2 + 0.455 * k2, y2 + 0.238 * k2]
      ]).stream(pointStream);
      alaskaPoint = alaska.translate([x2 - 0.307 * k2, y2 + 0.201 * k2]).clipExtent([
        [x2 - 0.425 * k2 + epsilon$2, y2 + 0.12 * k2 + epsilon$2],
        [x2 - 0.214 * k2 - epsilon$2, y2 + 0.234 * k2 - epsilon$2]
      ]).stream(pointStream);
      hawaiiPoint = hawaii.translate([x2 - 0.205 * k2, y2 + 0.212 * k2]).clipExtent([
        [x2 - 0.214 * k2 + epsilon$2, y2 + 0.166 * k2 + epsilon$2],
        [x2 - 0.115 * k2 - epsilon$2, y2 + 0.234 * k2 - epsilon$2]
      ]).stream(pointStream);
      return reset();
    };
    albersUsa2.fitExtent = function(extent2, object2) {
      return fitExtent(albersUsa2, extent2, object2);
    };
    albersUsa2.fitSize = function(size, object2) {
      return fitSize(albersUsa2, size, object2);
    };
    albersUsa2.fitWidth = function(width, object2) {
      return fitWidth(albersUsa2, width, object2);
    };
    albersUsa2.fitHeight = function(height, object2) {
      return fitHeight(albersUsa2, height, object2);
    };
    function reset() {
      cache = cacheStream = null;
      return albersUsa2;
    }
    return albersUsa2.scale(1070);
  };
  function azimuthalRaw(scale) {
    return function(x2, y2) {
      var cx = cos$1(x2), cy = cos$1(y2), k2 = scale(cx * cy);
      return [k2 * cy * sin$1(x2), k2 * sin$1(y2)];
    };
  }
  function azimuthalInvert(angle2) {
    return function(x2, y2) {
      var z = sqrt(x2 * x2 + y2 * y2), c2 = angle2(z), sc = sin$1(c2), cc = cos$1(c2);
      return [atan2(x2 * sc, z * cc), asin(z && y2 * sc / z)];
    };
  }
  var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
    return sqrt(2 / (1 + cxcy));
  });
  azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
    return 2 * asin(z / 2);
  });
  var azimuthalEqualArea = function() {
    return projection(azimuthalEqualAreaRaw).scale(124.75).clipAngle(180 - 1e-3);
  };
  var azimuthalEquidistantRaw = azimuthalRaw(function(c2) {
    return (c2 = acos(c2)) && c2 / sin$1(c2);
  });
  azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
    return z;
  });
  var azimuthalEquidistant = function() {
    return projection(azimuthalEquidistantRaw).scale(79.4188).clipAngle(180 - 1e-3);
  };
  function mercatorRaw(lambda, phi2) {
    return [lambda, log(tan((halfPi$2 + phi2) / 2))];
  }
  mercatorRaw.invert = function(x2, y2) {
    return [x2, 2 * atan(exp(y2)) - halfPi$2];
  };
  var mercator = function() {
    return mercatorProjection(mercatorRaw).scale(961 / tau$3);
  };
  function mercatorProjection(project) {
    var m = projection(project), center2 = m.center, scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, x02 = null, y02, x12, y12;
    m.scale = function(_) {
      return arguments.length ? (scale(_), reclip()) : scale();
    };
    m.translate = function(_) {
      return arguments.length ? (translate(_), reclip()) : translate();
    };
    m.center = function(_) {
      return arguments.length ? (center2(_), reclip()) : center2();
    };
    m.clipExtent = function(_) {
      return arguments.length ? (_ == null ? x02 = y02 = x12 = y12 = null : (x02 = +_[0][0], y02 = +_[0][1], x12 = +_[1][0], y12 = +_[1][1]), reclip()) : x02 == null ? null : [
        [x02, y02],
        [x12, y12]
      ];
    };
    function reclip() {
      var k2 = pi$3 * scale(), t = m(rotation(m.rotate()).invert([0, 0]));
      return clipExtent(
        x02 == null ? [
          [t[0] - k2, t[1] - k2],
          [t[0] + k2, t[1] + k2]
        ] : project === mercatorRaw ? [
          [Math.max(t[0] - k2, x02), y02],
          [Math.min(t[0] + k2, x12), y12]
        ] : [
          [x02, Math.max(t[1] - k2, y02)],
          [x12, Math.min(t[1] + k2, y12)]
        ]
      );
    }
    return reclip();
  }
  function tany(y2) {
    return tan((halfPi$2 + y2) / 2);
  }
  function conicConformalRaw(y02, y12) {
    var cy0 = cos$1(y02), n = y02 === y12 ? sin$1(y02) : log(cy0 / cos$1(y12)) / log(tany(y12) / tany(y02)), f = cy0 * pow(tany(y02), n) / n;
    if (!n)
      return mercatorRaw;
    function project(x2, y2) {
      if (f > 0) {
        if (y2 < -halfPi$2 + epsilon$2)
          y2 = -halfPi$2 + epsilon$2;
      } else {
        if (y2 > halfPi$2 - epsilon$2)
          y2 = halfPi$2 - epsilon$2;
      }
      var r = f / pow(tany(y2), n);
      return [r * sin$1(n * x2), f - r * cos$1(n * x2)];
    }
    project.invert = function(x2, y2) {
      var fy = f - y2, r = sign(n) * sqrt(x2 * x2 + fy * fy);
      return [
        atan2(x2, abs(fy)) / n * sign(fy),
        2 * atan(pow(f / r, 1 / n)) - halfPi$2
      ];
    };
    return project;
  }
  var conicConformal = function() {
    return conicProjection(conicConformalRaw).scale(109.5).parallels([30, 30]);
  };
  function equirectangularRaw(lambda, phi2) {
    return [lambda, phi2];
  }
  equirectangularRaw.invert = equirectangularRaw;
  var equirectangular = function() {
    return projection(equirectangularRaw).scale(152.63);
  };
  function conicEquidistantRaw(y02, y12) {
    var cy0 = cos$1(y02), n = y02 === y12 ? sin$1(y02) : (cy0 - cos$1(y12)) / (y12 - y02), g = cy0 / n + y02;
    if (abs(n) < epsilon$2)
      return equirectangularRaw;
    function project(x2, y2) {
      var gy = g - y2, nx = n * x2;
      return [gy * sin$1(nx), g - gy * cos$1(nx)];
    }
    project.invert = function(x2, y2) {
      var gy = g - y2;
      return [
        atan2(x2, abs(gy)) / n * sign(gy),
        g - sign(n) * sqrt(x2 * x2 + gy * gy)
      ];
    };
    return project;
  }
  var conicEquidistant = function() {
    return conicProjection(conicEquidistantRaw).scale(131.154).center([0, 13.9389]);
  };
  function gnomonicRaw(x2, y2) {
    var cy = cos$1(y2), k2 = cos$1(x2) * cy;
    return [cy * sin$1(x2) / k2, sin$1(y2) / k2];
  }
  gnomonicRaw.invert = azimuthalInvert(atan);
  var gnomonic = function() {
    return projection(gnomonicRaw).scale(144.049).clipAngle(60);
  };
  function scaleTranslate(kx2, ky2, tx, ty) {
    return kx2 === 1 && ky2 === 1 && tx === 0 && ty === 0 ? identity$4 : transformer({
      point: function(x2, y2) {
        this.stream.point(x2 * kx2 + tx, y2 * ky2 + ty);
      }
    });
  }
  var identity$5 = function() {
    var k2 = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform$$1 = identity$4, x02 = null, y02, x12, y12, postclip = identity$4, cache, cacheStream, projection2;
    function reset() {
      cache = cacheStream = null;
      return projection2;
    }
    return projection2 = {
      stream: function(stream) {
        return cache && cacheStream === stream ? cache : cache = transform$$1(postclip(cacheStream = stream));
      },
      postclip: function(_) {
        return arguments.length ? (postclip = _, x02 = y02 = x12 = y12 = null, reset()) : postclip;
      },
      clipExtent: function(_) {
        return arguments.length ? (postclip = _ == null ? (x02 = y02 = x12 = y12 = null, identity$4) : clipRectangle(
          x02 = +_[0][0],
          y02 = +_[0][1],
          x12 = +_[1][0],
          y12 = +_[1][1]
        ), reset()) : x02 == null ? null : [
          [x02, y02],
          [x12, y12]
        ];
      },
      scale: function(_) {
        return arguments.length ? (transform$$1 = scaleTranslate((k2 = +_) * sx, k2 * sy, tx, ty), reset()) : k2;
      },
      translate: function(_) {
        return arguments.length ? (transform$$1 = scaleTranslate(
          k2 * sx,
          k2 * sy,
          tx = +_[0],
          ty = +_[1]
        ), reset()) : [tx, ty];
      },
      reflectX: function(_) {
        return arguments.length ? (transform$$1 = scaleTranslate(
          k2 * (sx = _ ? -1 : 1),
          k2 * sy,
          tx,
          ty
        ), reset()) : sx < 0;
      },
      reflectY: function(_) {
        return arguments.length ? (transform$$1 = scaleTranslate(
          k2 * sx,
          k2 * (sy = _ ? -1 : 1),
          tx,
          ty
        ), reset()) : sy < 0;
      },
      fitExtent: function(extent2, object2) {
        return fitExtent(projection2, extent2, object2);
      },
      fitSize: function(size, object2) {
        return fitSize(projection2, size, object2);
      },
      fitWidth: function(width, object2) {
        return fitWidth(projection2, width, object2);
      },
      fitHeight: function(height, object2) {
        return fitHeight(projection2, height, object2);
      }
    };
  };
  function naturalEarth1Raw(lambda, phi2) {
    var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
    return [
      lambda * (0.8707 - 0.131979 * phi22 + phi4 * (-0.013791 + phi4 * (3971e-6 * phi22 - 1529e-6 * phi4))),
      phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4)))
    ];
  }
  naturalEarth1Raw.invert = function(x2, y2) {
    var phi2 = y2, i = 25, delta;
    do {
      var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
      phi2 -= delta = (phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4))) - y2) / (1.007226 + phi22 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi22 - 5916e-6 * 11 * phi4)));
    } while (abs(delta) > epsilon$2 && --i > 0);
    return [
      x2 / (0.8707 + (phi22 = phi2 * phi2) * (-0.131979 + phi22 * (-0.013791 + phi22 * phi22 * phi22 * (3971e-6 - 1529e-6 * phi22)))),
      phi2
    ];
  };
  var naturalEarth1 = function() {
    return projection(naturalEarth1Raw).scale(175.295);
  };
  function orthographicRaw(x2, y2) {
    return [cos$1(y2) * sin$1(x2), sin$1(y2)];
  }
  orthographicRaw.invert = azimuthalInvert(asin);
  var orthographic = function() {
    return projection(orthographicRaw).scale(249.5).clipAngle(90 + epsilon$2);
  };
  function stereographicRaw(x2, y2) {
    var cy = cos$1(y2), k2 = 1 + cos$1(x2) * cy;
    return [cy * sin$1(x2) / k2, sin$1(y2) / k2];
  }
  stereographicRaw.invert = azimuthalInvert(function(z) {
    return 2 * atan(z);
  });
  var stereographic = function() {
    return projection(stereographicRaw).scale(250).clipAngle(142);
  };
  function transverseMercatorRaw(lambda, phi2) {
    return [log(tan((halfPi$2 + phi2) / 2)), -lambda];
  }
  transverseMercatorRaw.invert = function(x2, y2) {
    return [-y2, 2 * atan(exp(x2)) - halfPi$2];
  };
  var transverseMercator = function() {
    var m = mercatorProjection(transverseMercatorRaw), center2 = m.center, rotate = m.rotate;
    m.center = function(_) {
      return arguments.length ? center2([-_[1], _[0]]) : (_ = center2(), [_[1], -_[0]]);
    };
    m.rotate = function(_) {
      return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
    };
    return rotate([0, 0, 90]).scale(159.155);
  };
  function defaultSeparation(a2, b) {
    return a2.parent === b.parent ? 1 : 2;
  }
  function meanX(children) {
    return children.reduce(meanXReduce, 0) / children.length;
  }
  function meanXReduce(x2, c2) {
    return x2 + c2.x;
  }
  function maxY(children) {
    return 1 + children.reduce(maxYReduce, 0);
  }
  function maxYReduce(y2, c2) {
    return Math.max(y2, c2.y);
  }
  function leafLeft(node) {
    var children;
    while (children = node.children)
      node = children[0];
    return node;
  }
  function leafRight(node) {
    var children;
    while (children = node.children)
      node = children[children.length - 1];
    return node;
  }
  var cluster = function() {
    var separation = defaultSeparation, dx = 1, dy = 1, nodeSize = false;
    function cluster2(root2) {
      var previousNode, x2 = 0;
      root2.eachAfter(function(node) {
        var children = node.children;
        if (children) {
          node.x = meanX(children);
          node.y = maxY(children);
        } else {
          node.x = previousNode ? x2 += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left2 = leafLeft(root2), right2 = leafRight(root2), x02 = left2.x - separation(left2, right2) / 2, x12 = right2.x + separation(right2, left2) / 2;
      return root2.eachAfter(
        nodeSize ? function(node) {
          node.x = (node.x - root2.x) * dx;
          node.y = (root2.y - node.y) * dy;
        } : function(node) {
          node.x = (node.x - x02) / (x12 - x02) * dx;
          node.y = (1 - (root2.y ? node.y / root2.y : 1)) * dy;
        }
      );
    }
    cluster2.separation = function(x2) {
      return arguments.length ? (separation = x2, cluster2) : separation;
    };
    cluster2.size = function(x2) {
      return arguments.length ? (nodeSize = false, dx = +x2[0], dy = +x2[1], cluster2) : nodeSize ? null : [dx, dy];
    };
    cluster2.nodeSize = function(x2) {
      return arguments.length ? (nodeSize = true, dx = +x2[0], dy = +x2[1], cluster2) : nodeSize ? [dx, dy] : null;
    };
    return cluster2;
  };
  function count(node) {
    var sum2 = 0, children = node.children, i = children && children.length;
    if (!i)
      sum2 = 1;
    else
      while (--i >= 0)
        sum2 += children[i].value;
    node.value = sum2;
  }
  var node_count = function() {
    return this.eachAfter(count);
  };
  var node_each = function(callback) {
    var node = this, current, next = [node], children, i, n;
    do {
      current = next.reverse(), next = [];
      while (node = current.pop()) {
        callback(node), children = node.children;
        if (children)
          for (i = 0, n = children.length; i < n; ++i) {
            next.push(children[i]);
          }
      }
    } while (next.length);
    return this;
  };
  var node_eachBefore = function(callback) {
    var node = this, nodes = [node], children, i;
    while (node = nodes.pop()) {
      callback(node), children = node.children;
      if (children)
        for (i = children.length - 1; i >= 0; --i) {
          nodes.push(children[i]);
        }
    }
    return this;
  };
  var node_eachAfter = function(callback) {
    var node = this, nodes = [node], next = [], children, i, n;
    while (node = nodes.pop()) {
      next.push(node), children = node.children;
      if (children)
        for (i = 0, n = children.length; i < n; ++i) {
          nodes.push(children[i]);
        }
    }
    while (node = next.pop()) {
      callback(node);
    }
    return this;
  };
  var node_sum = function(value) {
    return this.eachAfter(function(node) {
      var sum2 = +value(node.data) || 0, children = node.children, i = children && children.length;
      while (--i >= 0)
        sum2 += children[i].value;
      node.value = sum2;
    });
  };
  var node_sort = function(compare) {
    return this.eachBefore(function(node) {
      if (node.children) {
        node.children.sort(compare);
      }
    });
  };
  var node_path = function(end2) {
    var start2 = this, ancestor = leastCommonAncestor(start2, end2), nodes = [start2];
    while (start2 !== ancestor) {
      start2 = start2.parent;
      nodes.push(start2);
    }
    var k2 = nodes.length;
    while (end2 !== ancestor) {
      nodes.splice(k2, 0, end2);
      end2 = end2.parent;
    }
    return nodes;
  };
  function leastCommonAncestor(a2, b) {
    if (a2 === b)
      return a2;
    var aNodes = a2.ancestors(), bNodes = b.ancestors(), c2 = null;
    a2 = aNodes.pop();
    b = bNodes.pop();
    while (a2 === b) {
      c2 = a2;
      a2 = aNodes.pop();
      b = bNodes.pop();
    }
    return c2;
  }
  var node_ancestors = function() {
    var node = this, nodes = [node];
    while (node = node.parent) {
      nodes.push(node);
    }
    return nodes;
  };
  var node_descendants = function() {
    var nodes = [];
    this.each(function(node) {
      nodes.push(node);
    });
    return nodes;
  };
  var node_leaves = function() {
    var leaves = [];
    this.eachBefore(function(node) {
      if (!node.children) {
        leaves.push(node);
      }
    });
    return leaves;
  };
  var node_links = function() {
    var root2 = this, links = [];
    root2.each(function(node) {
      if (node !== root2) {
        links.push({ source: node.parent, target: node });
      }
    });
    return links;
  };
  function hierarchy(data, children) {
    var root2 = new Node(data), valued = +data.value && (root2.value = data.value), node, nodes = [root2], child, childs, i, n;
    if (children == null)
      children = defaultChildren;
    while (node = nodes.pop()) {
      if (valued)
        node.value = +node.data.value;
      if ((childs = children(node.data)) && (n = childs.length)) {
        node.children = new Array(n);
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = node.children[i] = new Node(childs[i]));
          child.parent = node;
          child.depth = node.depth + 1;
        }
      }
    }
    return root2.eachBefore(computeHeight);
  }
  function node_copy() {
    return hierarchy(this).eachBefore(copyData);
  }
  function defaultChildren(d) {
    return d.children;
  }
  function copyData(node) {
    node.data = node.data.data;
  }
  function computeHeight(node) {
    var height = 0;
    do
      node.height = height;
    while ((node = node.parent) && node.height < ++height);
  }
  function Node(data) {
    this.data = data;
    this.depth = this.height = 0;
    this.parent = null;
  }
  Node.prototype = hierarchy.prototype = {
    constructor: Node,
    count: node_count,
    each: node_each,
    eachAfter: node_eachAfter,
    eachBefore: node_eachBefore,
    sum: node_sum,
    sort: node_sort,
    path: node_path,
    ancestors: node_ancestors,
    descendants: node_descendants,
    leaves: node_leaves,
    links: node_links,
    copy: node_copy
  };
  var slice$3 = Array.prototype.slice;
  function shuffle$1(array2) {
    var m = array2.length, t, i;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array2[m];
      array2[m] = array2[i];
      array2[i] = t;
    }
    return array2;
  }
  var enclose = function(circles2) {
    var i = 0, n = (circles2 = shuffle$1(slice$3.call(circles2))).length, B2 = [], p, e;
    while (i < n) {
      p = circles2[i];
      if (e && enclosesWeak(e, p))
        ++i;
      else
        e = encloseBasis(B2 = extendBasis(B2, p)), i = 0;
    }
    return e;
  };
  function extendBasis(B2, p) {
    var i, j;
    if (enclosesWeakAll(p, B2))
      return [p];
    for (i = 0; i < B2.length; ++i) {
      if (enclosesNot(p, B2[i]) && enclosesWeakAll(encloseBasis2(B2[i], p), B2)) {
        return [B2[i], p];
      }
    }
    for (i = 0; i < B2.length - 1; ++i) {
      for (j = i + 1; j < B2.length; ++j) {
        if (enclosesNot(encloseBasis2(B2[i], B2[j]), p) && enclosesNot(encloseBasis2(B2[i], p), B2[j]) && enclosesNot(encloseBasis2(B2[j], p), B2[i]) && enclosesWeakAll(encloseBasis3(B2[i], B2[j], p), B2)) {
          return [B2[i], B2[j], p];
        }
      }
    }
    throw new Error();
  }
  function enclosesNot(a2, b) {
    var dr = a2.r - b.r, dx = b.x - a2.x, dy = b.y - a2.y;
    return dr < 0 || dr * dr < dx * dx + dy * dy;
  }
  function enclosesWeak(a2, b) {
    var dr = a2.r - b.r + 1e-6, dx = b.x - a2.x, dy = b.y - a2.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
  }
  function enclosesWeakAll(a2, B2) {
    for (var i = 0; i < B2.length; ++i) {
      if (!enclosesWeak(a2, B2[i])) {
        return false;
      }
    }
    return true;
  }
  function encloseBasis(B2) {
    switch (B2.length) {
      case 1:
        return encloseBasis1(B2[0]);
      case 2:
        return encloseBasis2(B2[0], B2[1]);
      case 3:
        return encloseBasis3(B2[0], B2[1], B2[2]);
    }
  }
  function encloseBasis1(a2) {
    return {
      x: a2.x,
      y: a2.y,
      r: a2.r
    };
  }
  function encloseBasis2(a2, b) {
    var x12 = a2.x, y12 = a2.y, r1 = a2.r, x2 = b.x, y2 = b.y, r2 = b.r, x21 = x2 - x12, y21 = y2 - y12, r21 = r2 - r1, l = Math.sqrt(x21 * x21 + y21 * y21);
    return {
      x: (x12 + x2 + x21 / l * r21) / 2,
      y: (y12 + y2 + y21 / l * r21) / 2,
      r: (l + r1 + r2) / 2
    };
  }
  function encloseBasis3(a2, b, c2) {
    var x12 = a2.x, y12 = a2.y, r1 = a2.r, x2 = b.x, y2 = b.y, r2 = b.r, x3 = c2.x, y3 = c2.y, r3 = c2.r, a22 = x12 - x2, a3 = x12 - x3, b22 = y12 - y2, b32 = y12 - y3, c22 = r2 - r1, c3 = r3 - r1, d1 = x12 * x12 + y12 * y12 - r1 * r1, d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2, d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3, ab = a3 * b22 - a22 * b32, xa = (b22 * d3 - b32 * d2) / (ab * 2) - x12, xb = (b32 * c22 - b22 * c3) / ab, ya = (a3 * d2 - a22 * d3) / (ab * 2) - y12, yb = (a22 * c3 - a3 * c22) / ab, A2 = xb * xb + yb * yb - 1, B2 = 2 * (r1 + xa * xb + ya * yb), C2 = xa * xa + ya * ya - r1 * r1, r = -(A2 ? (B2 + Math.sqrt(B2 * B2 - 4 * A2 * C2)) / (2 * A2) : C2 / B2);
    return {
      x: x12 + xa + xb * r,
      y: y12 + ya + yb * r,
      r
    };
  }
  function place(a2, b, c2) {
    var ax = a2.x, ay = a2.y, da = b.r + c2.r, db = a2.r + c2.r, dx = b.x - ax, dy = b.y - ay, dc = dx * dx + dy * dy;
    if (dc) {
      var x2 = 0.5 + ((db *= db) - (da *= da)) / (2 * dc), y2 = Math.sqrt(
        Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)
      ) / (2 * dc);
      c2.x = ax + x2 * dx + y2 * dy;
      c2.y = ay + x2 * dy - y2 * dx;
    } else {
      c2.x = ax + db;
      c2.y = ay;
    }
  }
  function intersects(a2, b) {
    var dx = b.x - a2.x, dy = b.y - a2.y, dr = a2.r + b.r;
    return dr * dr - 1e-6 > dx * dx + dy * dy;
  }
  function score(node) {
    var a2 = node._, b = node.next._, ab = a2.r + b.r, dx = (a2.x * b.r + b.x * a2.r) / ab, dy = (a2.y * b.r + b.y * a2.r) / ab;
    return dx * dx + dy * dy;
  }
  function Node$1(circle2) {
    this._ = circle2;
    this.next = null;
    this.previous = null;
  }
  function packEnclose(circles2) {
    if (!(n = circles2.length))
      return 0;
    var a2, b, c2, n, aa, ca, i, j, k2, sj, sk;
    a2 = circles2[0], a2.x = 0, a2.y = 0;
    if (!(n > 1))
      return a2.r;
    b = circles2[1], a2.x = -b.r, b.x = a2.r, b.y = 0;
    if (!(n > 2))
      return a2.r + b.r;
    place(b, a2, c2 = circles2[2]);
    a2 = new Node$1(a2), b = new Node$1(b), c2 = new Node$1(c2);
    a2.next = c2.previous = b;
    b.next = a2.previous = c2;
    c2.next = b.previous = a2;
    pack:
      for (i = 3; i < n; ++i) {
        place(a2._, b._, c2 = circles2[i]), c2 = new Node$1(c2);
        j = b.next, k2 = a2.previous, sj = b._.r, sk = a2._.r;
        do {
          if (sj <= sk) {
            if (intersects(j._, c2._)) {
              b = j, a2.next = b, b.previous = a2, --i;
              continue pack;
            }
            sj += j._.r, j = j.next;
          } else {
            if (intersects(k2._, c2._)) {
              a2 = k2, a2.next = b, b.previous = a2, --i;
              continue pack;
            }
            sk += k2._.r, k2 = k2.previous;
          }
        } while (j !== k2.next);
        c2.previous = a2, c2.next = b, a2.next = b.previous = b = c2;
        aa = score(a2);
        while ((c2 = c2.next) !== b) {
          if ((ca = score(c2)) < aa) {
            a2 = c2, aa = ca;
          }
        }
        b = a2.next;
      }
    a2 = [b._], c2 = b;
    while ((c2 = c2.next) !== b)
      a2.push(c2._);
    c2 = enclose(a2);
    for (i = 0; i < n; ++i)
      a2 = circles2[i], a2.x -= c2.x, a2.y -= c2.y;
    return c2.r;
  }
  var siblings = function(circles2) {
    packEnclose(circles2);
    return circles2;
  };
  function optional(f) {
    return f == null ? null : required(f);
  }
  function required(f) {
    if (typeof f !== "function")
      throw new Error();
    return f;
  }
  function constantZero() {
    return 0;
  }
  var constant$8 = function(x2) {
    return function() {
      return x2;
    };
  };
  function defaultRadius$1(d) {
    return Math.sqrt(d.value);
  }
  var index$2 = function() {
    var radius = null, dx = 1, dy = 1, padding = constantZero;
    function pack(root2) {
      root2.x = dx / 2, root2.y = dy / 2;
      if (radius) {
        root2.eachBefore(radiusLeaf(radius)).eachAfter(packChildren(padding, 0.5)).eachBefore(translateChild(1));
      } else {
        root2.eachBefore(radiusLeaf(defaultRadius$1)).eachAfter(packChildren(constantZero, 1)).eachAfter(packChildren(padding, root2.r / Math.min(dx, dy))).eachBefore(translateChild(Math.min(dx, dy) / (2 * root2.r)));
      }
      return root2;
    }
    pack.radius = function(x2) {
      return arguments.length ? (radius = optional(x2), pack) : radius;
    };
    pack.size = function(x2) {
      return arguments.length ? (dx = +x2[0], dy = +x2[1], pack) : [dx, dy];
    };
    pack.padding = function(x2) {
      return arguments.length ? (padding = typeof x2 === "function" ? x2 : constant$8(+x2), pack) : padding;
    };
    return pack;
  };
  function radiusLeaf(radius) {
    return function(node) {
      if (!node.children) {
        node.r = Math.max(0, +radius(node) || 0);
      }
    };
  }
  function packChildren(padding, k2) {
    return function(node) {
      if (children = node.children) {
        var children, i, n = children.length, r = padding(node) * k2 || 0, e;
        if (r)
          for (i = 0; i < n; ++i)
            children[i].r += r;
        e = packEnclose(children);
        if (r)
          for (i = 0; i < n; ++i)
            children[i].r -= r;
        node.r = e + r;
      }
    };
  }
  function translateChild(k2) {
    return function(node) {
      var parent = node.parent;
      node.r *= k2;
      if (parent) {
        node.x = parent.x + k2 * node.x;
        node.y = parent.y + k2 * node.y;
      }
    };
  }
  var roundNode = function(node) {
    node.x0 = Math.round(node.x0);
    node.y0 = Math.round(node.y0);
    node.x1 = Math.round(node.x1);
    node.y1 = Math.round(node.y1);
  };
  var treemapDice = function(parent, x02, y02, x12, y12) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k2 = parent.value && (x12 - x02) / parent.value;
    while (++i < n) {
      node = nodes[i], node.y0 = y02, node.y1 = y12;
      node.x0 = x02, node.x1 = x02 += node.value * k2;
    }
  };
  var partition = function() {
    var dx = 1, dy = 1, padding = 0, round = false;
    function partition2(root2) {
      var n = root2.height + 1;
      root2.x0 = root2.y0 = padding;
      root2.x1 = dx;
      root2.y1 = dy / n;
      root2.eachBefore(positionNode(dy, n));
      if (round)
        root2.eachBefore(roundNode);
      return root2;
    }
    function positionNode(dy2, n) {
      return function(node) {
        if (node.children) {
          treemapDice(
            node,
            node.x0,
            dy2 * (node.depth + 1) / n,
            node.x1,
            dy2 * (node.depth + 2) / n
          );
        }
        var x02 = node.x0, y02 = node.y0, x12 = node.x1 - padding, y12 = node.y1 - padding;
        if (x12 < x02)
          x02 = x12 = (x02 + x12) / 2;
        if (y12 < y02)
          y02 = y12 = (y02 + y12) / 2;
        node.x0 = x02;
        node.y0 = y02;
        node.x1 = x12;
        node.y1 = y12;
      };
    }
    partition2.round = function(x2) {
      return arguments.length ? (round = !!x2, partition2) : round;
    };
    partition2.size = function(x2) {
      return arguments.length ? (dx = +x2[0], dy = +x2[1], partition2) : [dx, dy];
    };
    partition2.padding = function(x2) {
      return arguments.length ? (padding = +x2, partition2) : padding;
    };
    return partition2;
  };
  var keyPrefix$1 = "$";
  var preroot = { depth: -1 };
  var ambiguous = {};
  function defaultId(d) {
    return d.id;
  }
  function defaultParentId(d) {
    return d.parentId;
  }
  var stratify = function() {
    var id2 = defaultId, parentId = defaultParentId;
    function stratify2(data) {
      var d, i, n = data.length, root2, parent, node, nodes = new Array(n), nodeId, nodeKey, nodeByKey = {};
      for (i = 0; i < n; ++i) {
        d = data[i], node = nodes[i] = new Node(d);
        if ((nodeId = id2(d, i, data)) != null && (nodeId += "")) {
          nodeKey = keyPrefix$1 + (node.id = nodeId);
          nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
        }
      }
      for (i = 0; i < n; ++i) {
        node = nodes[i], nodeId = parentId(data[i], i, data);
        if (nodeId == null || !(nodeId += "")) {
          if (root2)
            throw new Error("multiple roots");
          root2 = node;
        } else {
          parent = nodeByKey[keyPrefix$1 + nodeId];
          if (!parent)
            throw new Error("missing: " + nodeId);
          if (parent === ambiguous)
            throw new Error("ambiguous: " + nodeId);
          if (parent.children)
            parent.children.push(node);
          else
            parent.children = [node];
          node.parent = parent;
        }
      }
      if (!root2)
        throw new Error("no root");
      root2.parent = preroot;
      root2.eachBefore(function(node2) {
        node2.depth = node2.parent.depth + 1;
        --n;
      }).eachBefore(computeHeight);
      root2.parent = null;
      if (n > 0)
        throw new Error("cycle");
      return root2;
    }
    stratify2.id = function(x2) {
      return arguments.length ? (id2 = required(x2), stratify2) : id2;
    };
    stratify2.parentId = function(x2) {
      return arguments.length ? (parentId = required(x2), stratify2) : parentId;
    };
    return stratify2;
  };
  function defaultSeparation$1(a2, b) {
    return a2.parent === b.parent ? 1 : 2;
  }
  function nextLeft(v) {
    var children = v.children;
    return children ? children[0] : v.t;
  }
  function nextRight(v) {
    var children = v.children;
    return children ? children[children.length - 1] : v.t;
  }
  function moveSubtree(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }
  function executeShifts(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }
  function nextAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }
  function TreeNode(node, i) {
    this._ = node;
    this.parent = null;
    this.children = null;
    this.A = null;
    this.a = this;
    this.z = 0;
    this.m = 0;
    this.c = 0;
    this.s = 0;
    this.t = null;
    this.i = i;
  }
  TreeNode.prototype = Object.create(Node.prototype);
  function treeRoot(root2) {
    var tree2 = new TreeNode(root2, 0), node, nodes = [tree2], child, children, i, n;
    while (node = nodes.pop()) {
      if (children = node._.children) {
        node.children = new Array(n = children.length);
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = node.children[i] = new TreeNode(children[i], i));
          child.parent = node;
        }
      }
    }
    (tree2.parent = new TreeNode(null, 0)).children = [tree2];
    return tree2;
  }
  var tree = function() {
    var separation = defaultSeparation$1, dx = 1, dy = 1, nodeSize = null;
    function tree2(root2) {
      var t = treeRoot(root2);
      t.eachAfter(firstWalk), t.parent.m = -t.z;
      t.eachBefore(secondWalk);
      if (nodeSize)
        root2.eachBefore(sizeNode);
      else {
        var left2 = root2, right2 = root2, bottom2 = root2;
        root2.eachBefore(function(node) {
          if (node.x < left2.x)
            left2 = node;
          if (node.x > right2.x)
            right2 = node;
          if (node.depth > bottom2.depth)
            bottom2 = node;
        });
        var s2 = left2 === right2 ? 1 : separation(left2, right2) / 2, tx = s2 - left2.x, kx2 = dx / (right2.x + s2 + tx), ky2 = dy / (bottom2.depth || 1);
        root2.eachBefore(function(node) {
          node.x = (node.x + tx) * kx2;
          node.y = node.depth * ky2;
        });
      }
      return root2;
    }
    function firstWalk(v) {
      var children = v.children, siblings2 = v.parent.children, w = v.i ? siblings2[v.i - 1] : null;
      if (children) {
        executeShifts(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }
      v.parent.A = apportion(v, w, v.parent.A || siblings2[0]);
    }
    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }
    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
        while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
          vom = nextLeft(vom);
          vop = nextRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
          if (shift > 0) {
            moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }
          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }
        if (vim && !nextRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }
        if (vip && !nextLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }
      return ancestor;
    }
    function sizeNode(node) {
      node.x *= dx;
      node.y = node.depth * dy;
    }
    tree2.separation = function(x2) {
      return arguments.length ? (separation = x2, tree2) : separation;
    };
    tree2.size = function(x2) {
      return arguments.length ? (nodeSize = false, dx = +x2[0], dy = +x2[1], tree2) : nodeSize ? null : [dx, dy];
    };
    tree2.nodeSize = function(x2) {
      return arguments.length ? (nodeSize = true, dx = +x2[0], dy = +x2[1], tree2) : nodeSize ? [dx, dy] : null;
    };
    return tree2;
  };
  var treemapSlice = function(parent, x02, y02, x12, y12) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k2 = parent.value && (y12 - y02) / parent.value;
    while (++i < n) {
      node = nodes[i], node.x0 = x02, node.x1 = x12;
      node.y0 = y02, node.y1 = y02 += node.value * k2;
    }
  };
  var phi = (1 + Math.sqrt(5)) / 2;
  function squarifyRatio(ratio, parent, x02, y02, x12, y12) {
    var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
    while (i0 < n) {
      dx = x12 - x02, dy = y12 - y02;
      do
        sumValue = nodes[i1++].value;
      while (!sumValue && i1 < n);
      minValue = maxValue = sumValue;
      alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
      beta = sumValue * sumValue * alpha;
      minRatio = Math.max(maxValue / beta, beta / minValue);
      for (; i1 < n; ++i1) {
        sumValue += nodeValue = nodes[i1].value;
        if (nodeValue < minValue)
          minValue = nodeValue;
        if (nodeValue > maxValue)
          maxValue = nodeValue;
        beta = sumValue * sumValue * alpha;
        newRatio = Math.max(maxValue / beta, beta / minValue);
        if (newRatio > minRatio) {
          sumValue -= nodeValue;
          break;
        }
        minRatio = newRatio;
      }
      rows.push(
        row = {
          value: sumValue,
          dice: dx < dy,
          children: nodes.slice(i0, i1)
        }
      );
      if (row.dice)
        treemapDice(
          row,
          x02,
          y02,
          x12,
          value ? y02 += dy * sumValue / value : y12
        );
      else
        treemapSlice(
          row,
          x02,
          y02,
          value ? x02 += dx * sumValue / value : x12,
          y12
        );
      value -= sumValue, i0 = i1;
    }
    return rows;
  }
  var squarify = function custom(ratio) {
    function squarify2(parent, x02, y02, x12, y12) {
      squarifyRatio(ratio, parent, x02, y02, x12, y12);
    }
    squarify2.ratio = function(x2) {
      return custom((x2 = +x2) > 1 ? x2 : 1);
    };
    return squarify2;
  }(phi);
  var index$3 = function() {
    var tile = squarify, round = false, dx = 1, dy = 1, paddingStack = [0], paddingInner = constantZero, paddingTop = constantZero, paddingRight = constantZero, paddingBottom = constantZero, paddingLeft = constantZero;
    function treemap(root2) {
      root2.x0 = root2.y0 = 0;
      root2.x1 = dx;
      root2.y1 = dy;
      root2.eachBefore(positionNode);
      paddingStack = [0];
      if (round)
        root2.eachBefore(roundNode);
      return root2;
    }
    function positionNode(node) {
      var p = paddingStack[node.depth], x02 = node.x0 + p, y02 = node.y0 + p, x12 = node.x1 - p, y12 = node.y1 - p;
      if (x12 < x02)
        x02 = x12 = (x02 + x12) / 2;
      if (y12 < y02)
        y02 = y12 = (y02 + y12) / 2;
      node.x0 = x02;
      node.y0 = y02;
      node.x1 = x12;
      node.y1 = y12;
      if (node.children) {
        p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
        x02 += paddingLeft(node) - p;
        y02 += paddingTop(node) - p;
        x12 -= paddingRight(node) - p;
        y12 -= paddingBottom(node) - p;
        if (x12 < x02)
          x02 = x12 = (x02 + x12) / 2;
        if (y12 < y02)
          y02 = y12 = (y02 + y12) / 2;
        tile(node, x02, y02, x12, y12);
      }
    }
    treemap.round = function(x2) {
      return arguments.length ? (round = !!x2, treemap) : round;
    };
    treemap.size = function(x2) {
      return arguments.length ? (dx = +x2[0], dy = +x2[1], treemap) : [dx, dy];
    };
    treemap.tile = function(x2) {
      return arguments.length ? (tile = required(x2), treemap) : tile;
    };
    treemap.padding = function(x2) {
      return arguments.length ? treemap.paddingInner(x2).paddingOuter(x2) : treemap.paddingInner();
    };
    treemap.paddingInner = function(x2) {
      return arguments.length ? (paddingInner = typeof x2 === "function" ? x2 : constant$8(+x2), treemap) : paddingInner;
    };
    treemap.paddingOuter = function(x2) {
      return arguments.length ? treemap.paddingTop(x2).paddingRight(x2).paddingBottom(x2).paddingLeft(x2) : treemap.paddingTop();
    };
    treemap.paddingTop = function(x2) {
      return arguments.length ? (paddingTop = typeof x2 === "function" ? x2 : constant$8(+x2), treemap) : paddingTop;
    };
    treemap.paddingRight = function(x2) {
      return arguments.length ? (paddingRight = typeof x2 === "function" ? x2 : constant$8(+x2), treemap) : paddingRight;
    };
    treemap.paddingBottom = function(x2) {
      return arguments.length ? (paddingBottom = typeof x2 === "function" ? x2 : constant$8(+x2), treemap) : paddingBottom;
    };
    treemap.paddingLeft = function(x2) {
      return arguments.length ? (paddingLeft = typeof x2 === "function" ? x2 : constant$8(+x2), treemap) : paddingLeft;
    };
    return treemap;
  };
  var binary = function(parent, x02, y02, x12, y12) {
    var nodes = parent.children, i, n = nodes.length, sum2, sums = new Array(n + 1);
    for (sums[0] = sum2 = i = 0; i < n; ++i) {
      sums[i + 1] = sum2 += nodes[i].value;
    }
    partition2(0, n, parent.value, x02, y02, x12, y12);
    function partition2(i2, j, value, x03, y03, x13, y13) {
      if (i2 >= j - 1) {
        var node = nodes[i2];
        node.x0 = x03, node.y0 = y03;
        node.x1 = x13, node.y1 = y13;
        return;
      }
      var valueOffset = sums[i2], valueTarget = value / 2 + valueOffset, k2 = i2 + 1, hi = j - 1;
      while (k2 < hi) {
        var mid = k2 + hi >>> 1;
        if (sums[mid] < valueTarget)
          k2 = mid + 1;
        else
          hi = mid;
      }
      if (valueTarget - sums[k2 - 1] < sums[k2] - valueTarget && i2 + 1 < k2)
        --k2;
      var valueLeft = sums[k2] - valueOffset, valueRight = value - valueLeft;
      if (x13 - x03 > y13 - y03) {
        var xk = (x03 * valueRight + x13 * valueLeft) / value;
        partition2(i2, k2, valueLeft, x03, y03, xk, y13);
        partition2(k2, j, valueRight, xk, y03, x13, y13);
      } else {
        var yk = (y03 * valueRight + y13 * valueLeft) / value;
        partition2(i2, k2, valueLeft, x03, y03, x13, yk);
        partition2(k2, j, valueRight, x03, yk, x13, y13);
      }
    }
  };
  var sliceDice = function(parent, x02, y02, x12, y12) {
    (parent.depth & 1 ? treemapSlice : treemapDice)(parent, x02, y02, x12, y12);
  };
  var resquarify = function custom(ratio) {
    function resquarify2(parent, x02, y02, x12, y12) {
      if ((rows = parent._squarify) && rows.ratio === ratio) {
        var rows, row, nodes, i, j = -1, n, m = rows.length, value = parent.value;
        while (++j < m) {
          row = rows[j], nodes = row.children;
          for (i = row.value = 0, n = nodes.length; i < n; ++i)
            row.value += nodes[i].value;
          if (row.dice)
            treemapDice(
              row,
              x02,
              y02,
              x12,
              y02 += (y12 - y02) * row.value / value
            );
          else
            treemapSlice(
              row,
              x02,
              y02,
              x02 += (x12 - x02) * row.value / value,
              y12
            );
          value -= row.value;
        }
      } else {
        parent._squarify = rows = squarifyRatio(ratio, parent, x02, y02, x12, y12);
        rows.ratio = ratio;
      }
    }
    resquarify2.ratio = function(x2) {
      return custom((x2 = +x2) > 1 ? x2 : 1);
    };
    return resquarify2;
  }(phi);
  var area$1 = function(polygon) {
    var i = -1, n = polygon.length, a2, b = polygon[n - 1], area2 = 0;
    while (++i < n) {
      a2 = b;
      b = polygon[i];
      area2 += a2[1] * b[0] - a2[0] * b[1];
    }
    return area2 / 2;
  };
  var centroid$1 = function(polygon) {
    var i = -1, n = polygon.length, x2 = 0, y2 = 0, a2, b = polygon[n - 1], c2, k2 = 0;
    while (++i < n) {
      a2 = b;
      b = polygon[i];
      k2 += c2 = a2[0] * b[1] - b[0] * a2[1];
      x2 += (a2[0] + b[0]) * c2;
      y2 += (a2[1] + b[1]) * c2;
    }
    return k2 *= 3, [x2 / k2, y2 / k2];
  };
  var cross$1 = function(a2, b, c2) {
    return (b[0] - a2[0]) * (c2[1] - a2[1]) - (b[1] - a2[1]) * (c2[0] - a2[0]);
  };
  function lexicographicOrder(a2, b) {
    return a2[0] - b[0] || a2[1] - b[1];
  }
  function computeUpperHullIndexes(points) {
    var n = points.length, indexes = [0, 1], size = 2;
    for (var i = 2; i < n; ++i) {
      while (size > 1 && cross$1(
        points[indexes[size - 2]],
        points[indexes[size - 1]],
        points[i]
      ) <= 0)
        --size;
      indexes[size++] = i;
    }
    return indexes.slice(0, size);
  }
  var hull = function(points) {
    if ((n = points.length) < 3)
      return null;
    var i, n, sortedPoints = new Array(n), flippedPoints = new Array(n);
    for (i = 0; i < n; ++i)
      sortedPoints[i] = [+points[i][0], +points[i][1], i];
    sortedPoints.sort(lexicographicOrder);
    for (i = 0; i < n; ++i)
      flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];
    var upperIndexes = computeUpperHullIndexes(sortedPoints), lowerIndexes = computeUpperHullIndexes(flippedPoints);
    var skipLeft = lowerIndexes[0] === upperIndexes[0], skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1], hull2 = [];
    for (i = upperIndexes.length - 1; i >= 0; --i)
      hull2.push(points[sortedPoints[upperIndexes[i]][2]]);
    for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i)
      hull2.push(points[sortedPoints[lowerIndexes[i]][2]]);
    return hull2;
  };
  var contains$1 = function(polygon, point2) {
    var n = polygon.length, p = polygon[n - 1], x2 = point2[0], y2 = point2[1], x02 = p[0], y02 = p[1], x12, y12, inside = false;
    for (var i = 0; i < n; ++i) {
      p = polygon[i], x12 = p[0], y12 = p[1];
      if (y12 > y2 !== y02 > y2 && x2 < (x02 - x12) * (y2 - y12) / (y02 - y12) + x12)
        inside = !inside;
      x02 = x12, y02 = y12;
    }
    return inside;
  };
  var length$2 = function(polygon) {
    var i = -1, n = polygon.length, b = polygon[n - 1], xa, ya, xb = b[0], yb = b[1], perimeter = 0;
    while (++i < n) {
      xa = xb;
      ya = yb;
      b = polygon[i];
      xb = b[0];
      yb = b[1];
      xa -= xb;
      ya -= yb;
      perimeter += Math.sqrt(xa * xa + ya * ya);
    }
    return perimeter;
  };
  var slice$4 = [].slice;
  var noabort = {};
  function Queue(size) {
    this._size = size;
    this._call = this._error = null;
    this._tasks = [];
    this._data = [];
    this._waiting = this._active = this._ended = this._start = 0;
  }
  Queue.prototype = queue.prototype = {
    constructor: Queue,
    defer: function(callback) {
      if (typeof callback !== "function")
        throw new Error("invalid callback");
      if (this._call)
        throw new Error("defer after await");
      if (this._error != null)
        return this;
      var t = slice$4.call(arguments, 1);
      t.push(callback);
      ++this._waiting, this._tasks.push(t);
      poke$1(this);
      return this;
    },
    abort: function() {
      if (this._error == null)
        abort(this, new Error("abort"));
      return this;
    },
    await: function(callback) {
      if (typeof callback !== "function")
        throw new Error("invalid callback");
      if (this._call)
        throw new Error("multiple await");
      this._call = function(error, results) {
        callback.apply(null, [error].concat(results));
      };
      maybeNotify(this);
      return this;
    },
    awaitAll: function(callback) {
      if (typeof callback !== "function")
        throw new Error("invalid callback");
      if (this._call)
        throw new Error("multiple await");
      this._call = callback;
      maybeNotify(this);
      return this;
    }
  };
  function poke$1(q) {
    if (!q._start) {
      try {
        start$1(q);
      } catch (e) {
        if (q._tasks[q._ended + q._active - 1])
          abort(q, e);
        else if (!q._data)
          throw e;
      }
    }
  }
  function start$1(q) {
    while (q._start = q._waiting && q._active < q._size) {
      var i = q._ended + q._active, t = q._tasks[i], j = t.length - 1, c2 = t[j];
      t[j] = end(q, i);
      --q._waiting, ++q._active;
      t = c2.apply(null, t);
      if (!q._tasks[i])
        continue;
      q._tasks[i] = t || noabort;
    }
  }
  function end(q, i) {
    return function(e, r) {
      if (!q._tasks[i])
        return;
      --q._active, ++q._ended;
      q._tasks[i] = null;
      if (q._error != null)
        return;
      if (e != null) {
        abort(q, e);
      } else {
        q._data[i] = r;
        if (q._waiting)
          poke$1(q);
        else
          maybeNotify(q);
      }
    };
  }
  function abort(q, e) {
    var i = q._tasks.length, t;
    q._error = e;
    q._data = void 0;
    q._waiting = NaN;
    while (--i >= 0) {
      if (t = q._tasks[i]) {
        q._tasks[i] = null;
        if (t.abort) {
          try {
            t.abort();
          } catch (e3) {
          }
        }
      }
    }
    q._active = NaN;
    maybeNotify(q);
  }
  function maybeNotify(q) {
    if (!q._active && q._call) {
      var d = q._data;
      q._data = void 0;
      q._call(q._error, d);
    }
  }
  function queue(concurrency) {
    if (concurrency == null)
      concurrency = Infinity;
    else if (!((concurrency = +concurrency) >= 1))
      throw new Error("invalid concurrency");
    return new Queue(concurrency);
  }
  var defaultSource$1 = function() {
    return Math.random();
  };
  var uniform = function sourceRandomUniform(source) {
    function randomUniform(min2, max2) {
      min2 = min2 == null ? 0 : +min2;
      max2 = max2 == null ? 1 : +max2;
      if (arguments.length === 1)
        max2 = min2, min2 = 0;
      else
        max2 -= min2;
      return function() {
        return source() * max2 + min2;
      };
    }
    randomUniform.source = sourceRandomUniform;
    return randomUniform;
  }(defaultSource$1);
  var normal = function sourceRandomNormal(source) {
    function randomNormal(mu, sigma) {
      var x2, r;
      mu = mu == null ? 0 : +mu;
      sigma = sigma == null ? 1 : +sigma;
      return function() {
        var y2;
        if (x2 != null)
          y2 = x2, x2 = null;
        else
          do {
            x2 = source() * 2 - 1;
            y2 = source() * 2 - 1;
            r = x2 * x2 + y2 * y2;
          } while (!r || r > 1);
        return mu + sigma * y2 * Math.sqrt(-2 * Math.log(r) / r);
      };
    }
    randomNormal.source = sourceRandomNormal;
    return randomNormal;
  }(defaultSource$1);
  var logNormal = function sourceRandomLogNormal(source) {
    function randomLogNormal() {
      var randomNormal = normal.source(source).apply(this, arguments);
      return function() {
        return Math.exp(randomNormal());
      };
    }
    randomLogNormal.source = sourceRandomLogNormal;
    return randomLogNormal;
  }(defaultSource$1);
  var irwinHall = function sourceRandomIrwinHall(source) {
    function randomIrwinHall(n) {
      return function() {
        for (var sum2 = 0, i = 0; i < n; ++i)
          sum2 += source();
        return sum2;
      };
    }
    randomIrwinHall.source = sourceRandomIrwinHall;
    return randomIrwinHall;
  }(defaultSource$1);
  var bates = function sourceRandomBates(source) {
    function randomBates(n) {
      var randomIrwinHall = irwinHall.source(source)(n);
      return function() {
        return randomIrwinHall() / n;
      };
    }
    randomBates.source = sourceRandomBates;
    return randomBates;
  }(defaultSource$1);
  var exponential$1 = function sourceRandomExponential(source) {
    function randomExponential(lambda) {
      return function() {
        return -Math.log(1 - source()) / lambda;
      };
    }
    randomExponential.source = sourceRandomExponential;
    return randomExponential;
  }(defaultSource$1);
  var request = function(url, callback) {
    var request2, event = dispatch("beforesend", "progress", "load", "error"), mimeType, headers = map$1(), xhr = new XMLHttpRequest(), user = null, password = null, response, responseType, timeout2 = 0;
    if (typeof XDomainRequest !== "undefined" && !("withCredentials" in xhr) && /^(http(s)?:)?\/\//.test(url))
      xhr = new XDomainRequest();
    "onload" in xhr ? xhr.onload = xhr.onerror = xhr.ontimeout = respond : xhr.onreadystatechange = function(o) {
      xhr.readyState > 3 && respond(o);
    };
    function respond(o) {
      var status = xhr.status, result;
      if (!status && hasResponse(xhr) || status >= 200 && status < 300 || status === 304) {
        if (response) {
          try {
            result = response.call(request2, xhr);
          } catch (e) {
            event.call("error", request2, e);
            return;
          }
        } else {
          result = xhr;
        }
        event.call("load", request2, result);
      } else {
        event.call("error", request2, o);
      }
    }
    xhr.onprogress = function(e) {
      event.call("progress", request2, e);
    };
    request2 = {
      header: function(name, value) {
        name = (name + "").toLowerCase();
        if (arguments.length < 2)
          return headers.get(name);
        if (value == null)
          headers.remove(name);
        else
          headers.set(name, value + "");
        return request2;
      },
      // If mimeType is non-null and no Accept header is set, a default is used.
      mimeType: function(value) {
        if (!arguments.length)
          return mimeType;
        mimeType = value == null ? null : value + "";
        return request2;
      },
      // Specifies what type the response value should take;
      // for instance, arraybuffer, blob, document, or text.
      responseType: function(value) {
        if (!arguments.length)
          return responseType;
        responseType = value;
        return request2;
      },
      timeout: function(value) {
        if (!arguments.length)
          return timeout2;
        timeout2 = +value;
        return request2;
      },
      user: function(value) {
        return arguments.length < 1 ? user : (user = value == null ? null : value + "", request2);
      },
      password: function(value) {
        return arguments.length < 1 ? password : (password = value == null ? null : value + "", request2);
      },
      // Specify how to convert the response content to a specific type;
      // changes the callback value on "load" events.
      response: function(value) {
        response = value;
        return request2;
      },
      // Alias for send("GET", …).
      get: function(data, callback2) {
        return request2.send("GET", data, callback2);
      },
      // Alias for send("POST", …).
      post: function(data, callback2) {
        return request2.send("POST", data, callback2);
      },
      // If callback is non-null, it will be used for error and load events.
      send: function(method, data, callback2) {
        xhr.open(method, url, true, user, password);
        if (mimeType != null && !headers.has("accept"))
          headers.set("accept", mimeType + ",*/*");
        if (xhr.setRequestHeader)
          headers.each(function(value, name) {
            xhr.setRequestHeader(name, value);
          });
        if (mimeType != null && xhr.overrideMimeType)
          xhr.overrideMimeType(mimeType);
        if (responseType != null)
          xhr.responseType = responseType;
        if (timeout2 > 0)
          xhr.timeout = timeout2;
        if (callback2 == null && typeof data === "function")
          callback2 = data, data = null;
        if (callback2 != null && callback2.length === 1)
          callback2 = fixCallback(callback2);
        if (callback2 != null)
          request2.on("error", callback2).on("load", function(xhr2) {
            callback2(null, xhr2);
          });
        event.call("beforesend", request2, xhr);
        xhr.send(data == null ? null : data);
        return request2;
      },
      abort: function() {
        xhr.abort();
        return request2;
      },
      on: function() {
        var value = event.on.apply(event, arguments);
        return value === event ? request2 : value;
      }
    };
    if (callback != null) {
      if (typeof callback !== "function")
        throw new Error("invalid callback: " + callback);
      return request2.get(callback);
    }
    return request2;
  };
  function fixCallback(callback) {
    return function(error, xhr) {
      callback(error == null ? xhr : null);
    };
  }
  function hasResponse(xhr) {
    var type2 = xhr.responseType;
    return type2 && type2 !== "text" ? xhr.response : xhr.responseText;
  }
  var type$1 = function(defaultMimeType, response) {
    return function(url, callback) {
      var r = request(url).mimeType(defaultMimeType).response(response);
      if (callback != null) {
        if (typeof callback !== "function")
          throw new Error("invalid callback: " + callback);
        return r.get(callback);
      }
      return r;
    };
  };
  var html = type$1("text/html", function(xhr) {
    return document.createRange().createContextualFragment(xhr.responseText);
  });
  var json = type$1("application/json", function(xhr) {
    return JSON.parse(xhr.responseText);
  });
  var text = type$1("text/plain", function(xhr) {
    return xhr.responseText;
  });
  var xml = type$1("application/xml", function(xhr) {
    var xml2 = xhr.responseXML;
    if (!xml2)
      throw new Error("parse error");
    return xml2;
  });
  var dsv$1 = function(defaultMimeType, parse) {
    return function(url, row, callback) {
      if (arguments.length < 3)
        callback = row, row = null;
      var r = request(url).mimeType(defaultMimeType);
      r.row = function(_) {
        return arguments.length ? r.response(responseOf(parse, row = _)) : row;
      };
      r.row(row);
      return callback ? r.get(callback) : r;
    };
  };
  function responseOf(parse, row) {
    return function(request$$1) {
      return parse(request$$1.responseText, row);
    };
  }
  var csv$1 = dsv$1("text/csv", csvParse);
  var tsv$1 = dsv$1("text/tab-separated-values", tsvParse);
  var array$2 = Array.prototype;
  var map$3 = array$2.map;
  var slice$5 = array$2.slice;
  var implicit = { name: "implicit" };
  function ordinal(range2) {
    var index2 = map$1(), domain = [], unknown = implicit;
    range2 = range2 == null ? [] : slice$5.call(range2);
    function scale(d) {
      var key = d + "", i = index2.get(key);
      if (!i) {
        if (unknown !== implicit)
          return unknown;
        index2.set(key, i = domain.push(d));
      }
      return range2[(i - 1) % range2.length];
    }
    scale.domain = function(_) {
      if (!arguments.length)
        return domain.slice();
      domain = [], index2 = map$1();
      var i = -1, n = _.length, d, key;
      while (++i < n)
        if (!index2.has(key = (d = _[i]) + ""))
          index2.set(key, domain.push(d));
      return scale;
    };
    scale.range = function(_) {
      return arguments.length ? (range2 = slice$5.call(_), scale) : range2.slice();
    };
    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
      return ordinal().domain(domain).range(range2).unknown(unknown);
    };
    return scale;
  }
  function band() {
    var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, range$$1 = [0, 1], step2, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
    delete scale.unknown;
    function rescale() {
      var n = domain().length, reverse2 = range$$1[1] < range$$1[0], start2 = range$$1[reverse2 - 0], stop = range$$1[1 - reverse2];
      step2 = (stop - start2) / Math.max(1, n - paddingInner + paddingOuter * 2);
      if (round)
        step2 = Math.floor(step2);
      start2 += (stop - start2 - step2 * (n - paddingInner)) * align;
      bandwidth = step2 * (1 - paddingInner);
      if (round)
        start2 = Math.round(start2), bandwidth = Math.round(bandwidth);
      var values2 = sequence(n).map(function(i) {
        return start2 + step2 * i;
      });
      return ordinalRange(reverse2 ? values2.reverse() : values2);
    }
    scale.domain = function(_) {
      return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.range = function(_) {
      return arguments.length ? (range$$1 = [+_[0], +_[1]], rescale()) : range$$1.slice();
    };
    scale.rangeRound = function(_) {
      return range$$1 = [+_[0], +_[1]], round = true, rescale();
    };
    scale.bandwidth = function() {
      return bandwidth;
    };
    scale.step = function() {
      return step2;
    };
    scale.round = function(_) {
      return arguments.length ? (round = !!_, rescale()) : round;
    };
    scale.padding = function(_) {
      return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
    };
    scale.paddingInner = function(_) {
      return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
    };
    scale.paddingOuter = function(_) {
      return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
    };
    scale.align = function(_) {
      return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
    };
    scale.copy = function() {
      return band().domain(domain()).range(range$$1).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
    };
    return rescale();
  }
  function pointish(scale) {
    var copy2 = scale.copy;
    scale.padding = scale.paddingOuter;
    delete scale.paddingInner;
    delete scale.paddingOuter;
    scale.copy = function() {
      return pointish(copy2());
    };
    return scale;
  }
  function point$1() {
    return pointish(band().paddingInner(1));
  }
  var constant$9 = function(x2) {
    return function() {
      return x2;
    };
  };
  var number$2 = function(x2) {
    return +x2;
  };
  var unit = [0, 1];
  function deinterpolateLinear(a2, b) {
    return (b -= a2 = +a2) ? function(x2) {
      return (x2 - a2) / b;
    } : constant$9(b);
  }
  function deinterpolateClamp(deinterpolate2) {
    return function(a2, b) {
      var d = deinterpolate2(a2 = +a2, b = +b);
      return function(x2) {
        return x2 <= a2 ? 0 : x2 >= b ? 1 : d(x2);
      };
    };
  }
  function reinterpolateClamp(reinterpolate2) {
    return function(a2, b) {
      var r = reinterpolate2(a2 = +a2, b = +b);
      return function(t) {
        return t <= 0 ? a2 : t >= 1 ? b : r(t);
      };
    };
  }
  function bimap(domain, range2, deinterpolate2, reinterpolate2) {
    var d0 = domain[0], d1 = domain[1], r0 = range2[0], r1 = range2[1];
    if (d1 < d0)
      d0 = deinterpolate2(d1, d0), r0 = reinterpolate2(r1, r0);
    else
      d0 = deinterpolate2(d0, d1), r0 = reinterpolate2(r0, r1);
    return function(x2) {
      return r0(d0(x2));
    };
  }
  function polymap(domain, range2, deinterpolate2, reinterpolate2) {
    var j = Math.min(domain.length, range2.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    if (domain[j] < domain[0]) {
      domain = domain.slice().reverse();
      range2 = range2.slice().reverse();
    }
    while (++i < j) {
      d[i] = deinterpolate2(domain[i], domain[i + 1]);
      r[i] = reinterpolate2(range2[i], range2[i + 1]);
    }
    return function(x2) {
      var i2 = bisectRight(domain, x2, 1, j) - 1;
      return r[i2](d[i2](x2));
    };
  }
  function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp());
  }
  function continuous(deinterpolate2, reinterpolate2) {
    var domain = unit, range2 = unit, interpolate$$1 = interpolateValue, clamp = false, piecewise, output, input;
    function rescale() {
      piecewise = Math.min(domain.length, range2.length) > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }
    function scale(x2) {
      return (output || (output = piecewise(
        domain,
        range2,
        clamp ? deinterpolateClamp(deinterpolate2) : deinterpolate2,
        interpolate$$1
      )))(+x2);
    }
    scale.invert = function(y2) {
      return (input || (input = piecewise(
        range2,
        domain,
        deinterpolateLinear,
        clamp ? reinterpolateClamp(reinterpolate2) : reinterpolate2
      )))(+y2);
    };
    scale.domain = function(_) {
      return arguments.length ? (domain = map$3.call(_, number$2), rescale()) : domain.slice();
    };
    scale.range = function(_) {
      return arguments.length ? (range2 = slice$5.call(_), rescale()) : range2.slice();
    };
    scale.rangeRound = function(_) {
      return range2 = slice$5.call(_), interpolate$$1 = interpolateRound, rescale();
    };
    scale.clamp = function(_) {
      return arguments.length ? (clamp = !!_, rescale()) : clamp;
    };
    scale.interpolate = function(_) {
      return arguments.length ? (interpolate$$1 = _, rescale()) : interpolate$$1;
    };
    return rescale();
  }
  var tickFormat = function(domain, count2, specifier) {
    var start2 = domain[0], stop = domain[domain.length - 1], step2 = tickStep(start2, stop, count2 == null ? 10 : count2), precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s": {
        var value = Math.max(Math.abs(start2), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix(step2, value)))
          specifier.precision = precision;
        return exports2.formatPrefix(specifier, value);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        if (specifier.precision == null && !isNaN(
          precision = precisionRound(
            step2,
            Math.max(Math.abs(start2), Math.abs(stop))
          )
        ))
          specifier.precision = precision - (specifier.type === "e");
        break;
      }
      case "f":
      case "%": {
        if (specifier.precision == null && !isNaN(precision = precisionFixed(step2)))
          specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
    }
    return exports2.format(specifier);
  };
  function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function(count2) {
      var d = domain();
      return ticks(d[0], d[d.length - 1], count2 == null ? 10 : count2);
    };
    scale.tickFormat = function(count2, specifier) {
      return tickFormat(domain(), count2, specifier);
    };
    scale.nice = function(count2) {
      if (count2 == null)
        count2 = 10;
      var d = domain(), i0 = 0, i1 = d.length - 1, start2 = d[i0], stop = d[i1], step2;
      if (stop < start2) {
        step2 = start2, start2 = stop, stop = step2;
        step2 = i0, i0 = i1, i1 = step2;
      }
      step2 = tickIncrement(start2, stop, count2);
      if (step2 > 0) {
        start2 = Math.floor(start2 / step2) * step2;
        stop = Math.ceil(stop / step2) * step2;
        step2 = tickIncrement(start2, stop, count2);
      } else if (step2 < 0) {
        start2 = Math.ceil(start2 * step2) / step2;
        stop = Math.floor(stop * step2) / step2;
        step2 = tickIncrement(start2, stop, count2);
      }
      if (step2 > 0) {
        d[i0] = Math.floor(start2 / step2) * step2;
        d[i1] = Math.ceil(stop / step2) * step2;
        domain(d);
      } else if (step2 < 0) {
        d[i0] = Math.ceil(start2 * step2) / step2;
        d[i1] = Math.floor(stop * step2) / step2;
        domain(d);
      }
      return scale;
    };
    return scale;
  }
  function linear$2() {
    var scale = continuous(deinterpolateLinear, reinterpolate);
    scale.copy = function() {
      return copy(scale, linear$2());
    };
    return linearish(scale);
  }
  function identity$6() {
    var domain = [0, 1];
    function scale(x2) {
      return +x2;
    }
    scale.invert = scale;
    scale.domain = scale.range = function(_) {
      return arguments.length ? (domain = map$3.call(_, number$2), scale) : domain.slice();
    };
    scale.copy = function() {
      return identity$6().domain(domain);
    };
    return linearish(scale);
  }
  var nice = function(domain, interval2) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x02 = domain[i0], x12 = domain[i1], t;
    if (x12 < x02) {
      t = i0, i0 = i1, i1 = t;
      t = x02, x02 = x12, x12 = t;
    }
    domain[i0] = interval2.floor(x02);
    domain[i1] = interval2.ceil(x12);
    return domain;
  };
  function deinterpolate(a2, b) {
    return (b = Math.log(b / a2)) ? function(x2) {
      return Math.log(x2 / a2) / b;
    } : constant$9(b);
  }
  function reinterpolate$1(a2, b) {
    return a2 < 0 ? function(t) {
      return -Math.pow(-b, t) * Math.pow(-a2, 1 - t);
    } : function(t) {
      return Math.pow(b, t) * Math.pow(a2, 1 - t);
    };
  }
  function pow10(x2) {
    return isFinite(x2) ? +("1e" + x2) : x2 < 0 ? 0 : x2;
  }
  function powp(base) {
    return base === 10 ? pow10 : base === Math.E ? Math.exp : function(x2) {
      return Math.pow(base, x2);
    };
  }
  function logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x2) {
      return Math.log(x2) / base;
    });
  }
  function reflect(f) {
    return function(x2) {
      return -f(-x2);
    };
  }
  function log$1() {
    var scale = continuous(deinterpolate, reinterpolate$1).domain([1, 10]), domain = scale.domain, base = 10, logs = logp(10), pows = powp(10);
    function rescale() {
      logs = logp(base), pows = powp(base);
      if (domain()[0] < 0)
        logs = reflect(logs), pows = reflect(pows);
      return scale;
    }
    scale.base = function(_) {
      return arguments.length ? (base = +_, rescale()) : base;
    };
    scale.domain = function(_) {
      return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.ticks = function(count2) {
      var d = domain(), u = d[0], v = d[d.length - 1], r;
      if (r = v < u)
        i = u, u = v, v = i;
      var i = logs(u), j = logs(v), p, k2, t, n = count2 == null ? 10 : +count2, z = [];
      if (!(base % 1) && j - i < n) {
        i = Math.round(i) - 1, j = Math.round(j) + 1;
        if (u > 0)
          for (; i < j; ++i) {
            for (k2 = 1, p = pows(i); k2 < base; ++k2) {
              t = p * k2;
              if (t < u)
                continue;
              if (t > v)
                break;
              z.push(t);
            }
          }
        else
          for (; i < j; ++i) {
            for (k2 = base - 1, p = pows(i); k2 >= 1; --k2) {
              t = p * k2;
              if (t < u)
                continue;
              if (t > v)
                break;
              z.push(t);
            }
          }
      } else {
        z = ticks(i, j, Math.min(j - i, n)).map(pows);
      }
      return r ? z.reverse() : z;
    };
    scale.tickFormat = function(count2, specifier) {
      if (specifier == null)
        specifier = base === 10 ? ".0e" : ",";
      if (typeof specifier !== "function")
        specifier = exports2.format(specifier);
      if (count2 === Infinity)
        return specifier;
      if (count2 == null)
        count2 = 10;
      var k2 = Math.max(1, base * count2 / scale.ticks().length);
      return function(d) {
        var i = d / pows(Math.round(logs(d)));
        if (i * base < base - 0.5)
          i *= base;
        return i <= k2 ? specifier(d) : "";
      };
    };
    scale.nice = function() {
      return domain(
        nice(domain(), {
          floor: function(x2) {
            return pows(Math.floor(logs(x2)));
          },
          ceil: function(x2) {
            return pows(Math.ceil(logs(x2)));
          }
        })
      );
    };
    scale.copy = function() {
      return copy(scale, log$1().base(base));
    };
    return scale;
  }
  function raise$1(x2, exponent2) {
    return x2 < 0 ? -Math.pow(-x2, exponent2) : Math.pow(x2, exponent2);
  }
  function pow$1() {
    var exponent2 = 1, scale = continuous(deinterpolate2, reinterpolate2), domain = scale.domain;
    function deinterpolate2(a2, b) {
      return (b = raise$1(b, exponent2) - (a2 = raise$1(a2, exponent2))) ? function(x2) {
        return (raise$1(x2, exponent2) - a2) / b;
      } : constant$9(b);
    }
    function reinterpolate2(a2, b) {
      b = raise$1(b, exponent2) - (a2 = raise$1(a2, exponent2));
      return function(t) {
        return raise$1(a2 + b * t, 1 / exponent2);
      };
    }
    scale.exponent = function(_) {
      return arguments.length ? (exponent2 = +_, domain(domain())) : exponent2;
    };
    scale.copy = function() {
      return copy(scale, pow$1().exponent(exponent2));
    };
    return linearish(scale);
  }
  function sqrt$1() {
    return pow$1().exponent(0.5);
  }
  function quantile$$1() {
    var domain = [], range2 = [], thresholds = [];
    function rescale() {
      var i = 0, n = Math.max(1, range2.length);
      thresholds = new Array(n - 1);
      while (++i < n)
        thresholds[i - 1] = threshold(domain, i / n);
      return scale;
    }
    function scale(x2) {
      if (!isNaN(x2 = +x2))
        return range2[bisectRight(thresholds, x2)];
    }
    scale.invertExtent = function(y2) {
      var i = range2.indexOf(y2);
      return i < 0 ? [NaN, NaN] : [
        i > 0 ? thresholds[i - 1] : domain[0],
        i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
      ];
    };
    scale.domain = function(_) {
      if (!arguments.length)
        return domain.slice();
      domain = [];
      for (var i = 0, n = _.length, d; i < n; ++i)
        if (d = _[i], d != null && !isNaN(d = +d))
          domain.push(d);
      domain.sort(ascending);
      return rescale();
    };
    scale.range = function(_) {
      return arguments.length ? (range2 = slice$5.call(_), rescale()) : range2.slice();
    };
    scale.quantiles = function() {
      return thresholds.slice();
    };
    scale.copy = function() {
      return quantile$$1().domain(domain).range(range2);
    };
    return scale;
  }
  function quantize$1() {
    var x02 = 0, x12 = 1, n = 1, domain = [0.5], range2 = [0, 1];
    function scale(x2) {
      if (x2 <= x2)
        return range2[bisectRight(domain, x2, 0, n)];
    }
    function rescale() {
      var i = -1;
      domain = new Array(n);
      while (++i < n)
        domain[i] = ((i + 1) * x12 - (i - n) * x02) / (n + 1);
      return scale;
    }
    scale.domain = function(_) {
      return arguments.length ? (x02 = +_[0], x12 = +_[1], rescale()) : [x02, x12];
    };
    scale.range = function(_) {
      return arguments.length ? (n = (range2 = slice$5.call(_)).length - 1, rescale()) : range2.slice();
    };
    scale.invertExtent = function(y2) {
      var i = range2.indexOf(y2);
      return i < 0 ? [NaN, NaN] : i < 1 ? [x02, domain[0]] : i >= n ? [domain[n - 1], x12] : [domain[i - 1], domain[i]];
    };
    scale.copy = function() {
      return quantize$1().domain([x02, x12]).range(range2);
    };
    return linearish(scale);
  }
  function threshold$1() {
    var domain = [0.5], range2 = [0, 1], n = 1;
    function scale(x2) {
      if (x2 <= x2)
        return range2[bisectRight(domain, x2, 0, n)];
    }
    scale.domain = function(_) {
      return arguments.length ? (domain = slice$5.call(_), n = Math.min(domain.length, range2.length - 1), scale) : domain.slice();
    };
    scale.range = function(_) {
      return arguments.length ? (range2 = slice$5.call(_), n = Math.min(domain.length, range2.length - 1), scale) : range2.slice();
    };
    scale.invertExtent = function(y2) {
      var i = range2.indexOf(y2);
      return [domain[i - 1], domain[i]];
    };
    scale.copy = function() {
      return threshold$1().domain(domain).range(range2);
    };
    return scale;
  }
  var t0$1 = /* @__PURE__ */ new Date();
  var t1$1 = /* @__PURE__ */ new Date();
  function newInterval(floori, offseti, count2, field) {
    function interval2(date2) {
      return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
    }
    interval2.floor = interval2;
    interval2.ceil = function(date2) {
      return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
    };
    interval2.round = function(date2) {
      var d0 = interval2(date2), d1 = interval2.ceil(date2);
      return date2 - d0 < d1 - date2 ? d0 : d1;
    };
    interval2.offset = function(date2, step2) {
      return offseti(date2 = /* @__PURE__ */ new Date(+date2), step2 == null ? 1 : Math.floor(step2)), date2;
    };
    interval2.range = function(start2, stop, step2) {
      var range2 = [], previous;
      start2 = interval2.ceil(start2);
      step2 = step2 == null ? 1 : Math.floor(step2);
      if (!(start2 < stop) || !(step2 > 0))
        return range2;
      do
        range2.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step2), floori(start2);
      while (previous < start2 && start2 < stop);
      return range2;
    };
    interval2.filter = function(test) {
      return newInterval(
        function(date2) {
          if (date2 >= date2)
            while (floori(date2), !test(date2))
              date2.setTime(date2 - 1);
        },
        function(date2, step2) {
          if (date2 >= date2) {
            if (step2 < 0)
              while (++step2 <= 0) {
                while (offseti(date2, -1), !test(date2)) {
                }
              }
            else
              while (--step2 >= 0) {
                while (offseti(date2, 1), !test(date2)) {
                }
              }
          }
        }
      );
    };
    if (count2) {
      interval2.count = function(start2, end2) {
        t0$1.setTime(+start2), t1$1.setTime(+end2);
        floori(t0$1), floori(t1$1);
        return Math.floor(count2(t0$1, t1$1));
      };
      interval2.every = function(step2) {
        step2 = Math.floor(step2);
        return !isFinite(step2) || !(step2 > 0) ? null : !(step2 > 1) ? interval2 : interval2.filter(
          field ? function(d) {
            return field(d) % step2 === 0;
          } : function(d) {
            return interval2.count(0, d) % step2 === 0;
          }
        );
      };
    }
    return interval2;
  }
  var millisecond = newInterval(
    function() {
    },
    function(date2, step2) {
      date2.setTime(+date2 + step2);
    },
    function(start2, end2) {
      return end2 - start2;
    }
  );
  millisecond.every = function(k2) {
    k2 = Math.floor(k2);
    if (!isFinite(k2) || !(k2 > 0))
      return null;
    if (!(k2 > 1))
      return millisecond;
    return newInterval(
      function(date2) {
        date2.setTime(Math.floor(date2 / k2) * k2);
      },
      function(date2, step2) {
        date2.setTime(+date2 + step2 * k2);
      },
      function(start2, end2) {
        return (end2 - start2) / k2;
      }
    );
  };
  var milliseconds = millisecond.range;
  var durationSecond$1 = 1e3;
  var durationMinute$1 = 6e4;
  var durationHour$1 = 36e5;
  var durationDay$1 = 864e5;
  var durationWeek$1 = 6048e5;
  var second = newInterval(
    function(date2) {
      date2.setTime(Math.floor(date2 / durationSecond$1) * durationSecond$1);
    },
    function(date2, step2) {
      date2.setTime(+date2 + step2 * durationSecond$1);
    },
    function(start2, end2) {
      return (end2 - start2) / durationSecond$1;
    },
    function(date2) {
      return date2.getUTCSeconds();
    }
  );
  var seconds = second.range;
  var minute = newInterval(
    function(date2) {
      date2.setTime(Math.floor(date2 / durationMinute$1) * durationMinute$1);
    },
    function(date2, step2) {
      date2.setTime(+date2 + step2 * durationMinute$1);
    },
    function(start2, end2) {
      return (end2 - start2) / durationMinute$1;
    },
    function(date2) {
      return date2.getMinutes();
    }
  );
  var minutes = minute.range;
  var hour = newInterval(
    function(date2) {
      var offset = date2.getTimezoneOffset() * durationMinute$1 % durationHour$1;
      if (offset < 0)
        offset += durationHour$1;
      date2.setTime(
        Math.floor((+date2 - offset) / durationHour$1) * durationHour$1 + offset
      );
    },
    function(date2, step2) {
      date2.setTime(+date2 + step2 * durationHour$1);
    },
    function(start2, end2) {
      return (end2 - start2) / durationHour$1;
    },
    function(date2) {
      return date2.getHours();
    }
  );
  var hours = hour.range;
  var day = newInterval(
    function(date2) {
      date2.setHours(0, 0, 0, 0);
    },
    function(date2, step2) {
      date2.setDate(date2.getDate() + step2);
    },
    function(start2, end2) {
      return (end2 - start2 - (end2.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute$1) / durationDay$1;
    },
    function(date2) {
      return date2.getDate() - 1;
    }
  );
  var days = day.range;
  function weekday(i) {
    return newInterval(
      function(date2) {
        date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
        date2.setHours(0, 0, 0, 0);
      },
      function(date2, step2) {
        date2.setDate(date2.getDate() + step2 * 7);
      },
      function(start2, end2) {
        return (end2 - start2 - (end2.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute$1) / durationWeek$1;
      }
    );
  }
  var sunday = weekday(0);
  var monday = weekday(1);
  var tuesday = weekday(2);
  var wednesday = weekday(3);
  var thursday = weekday(4);
  var friday = weekday(5);
  var saturday = weekday(6);
  var sundays = sunday.range;
  var mondays = monday.range;
  var tuesdays = tuesday.range;
  var wednesdays = wednesday.range;
  var thursdays = thursday.range;
  var fridays = friday.range;
  var saturdays = saturday.range;
  var month = newInterval(
    function(date2) {
      date2.setDate(1);
      date2.setHours(0, 0, 0, 0);
    },
    function(date2, step2) {
      date2.setMonth(date2.getMonth() + step2);
    },
    function(start2, end2) {
      return end2.getMonth() - start2.getMonth() + (end2.getFullYear() - start2.getFullYear()) * 12;
    },
    function(date2) {
      return date2.getMonth();
    }
  );
  var months = month.range;
  var year = newInterval(
    function(date2) {
      date2.setMonth(0, 1);
      date2.setHours(0, 0, 0, 0);
    },
    function(date2, step2) {
      date2.setFullYear(date2.getFullYear() + step2);
    },
    function(start2, end2) {
      return end2.getFullYear() - start2.getFullYear();
    },
    function(date2) {
      return date2.getFullYear();
    }
  );
  year.every = function(k2) {
    return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval(
      function(date2) {
        date2.setFullYear(Math.floor(date2.getFullYear() / k2) * k2);
        date2.setMonth(0, 1);
        date2.setHours(0, 0, 0, 0);
      },
      function(date2, step2) {
        date2.setFullYear(date2.getFullYear() + step2 * k2);
      }
    );
  };
  var years = year.range;
  var utcMinute = newInterval(
    function(date2) {
      date2.setUTCSeconds(0, 0);
    },
    function(date2, step2) {
      date2.setTime(+date2 + step2 * durationMinute$1);
    },
    function(start2, end2) {
      return (end2 - start2) / durationMinute$1;
    },
    function(date2) {
      return date2.getUTCMinutes();
    }
  );
  var utcMinutes = utcMinute.range;
  var utcHour = newInterval(
    function(date2) {
      date2.setUTCMinutes(0, 0, 0);
    },
    function(date2, step2) {
      date2.setTime(+date2 + step2 * durationHour$1);
    },
    function(start2, end2) {
      return (end2 - start2) / durationHour$1;
    },
    function(date2) {
      return date2.getUTCHours();
    }
  );
  var utcHours = utcHour.range;
  var utcDay = newInterval(
    function(date2) {
      date2.setUTCHours(0, 0, 0, 0);
    },
    function(date2, step2) {
      date2.setUTCDate(date2.getUTCDate() + step2);
    },
    function(start2, end2) {
      return (end2 - start2) / durationDay$1;
    },
    function(date2) {
      return date2.getUTCDate() - 1;
    }
  );
  var utcDays = utcDay.range;
  function utcWeekday(i) {
    return newInterval(
      function(date2) {
        date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
        date2.setUTCHours(0, 0, 0, 0);
      },
      function(date2, step2) {
        date2.setUTCDate(date2.getUTCDate() + step2 * 7);
      },
      function(start2, end2) {
        return (end2 - start2) / durationWeek$1;
      }
    );
  }
  var utcSunday = utcWeekday(0);
  var utcMonday = utcWeekday(1);
  var utcTuesday = utcWeekday(2);
  var utcWednesday = utcWeekday(3);
  var utcThursday = utcWeekday(4);
  var utcFriday = utcWeekday(5);
  var utcSaturday = utcWeekday(6);
  var utcSundays = utcSunday.range;
  var utcMondays = utcMonday.range;
  var utcTuesdays = utcTuesday.range;
  var utcWednesdays = utcWednesday.range;
  var utcThursdays = utcThursday.range;
  var utcFridays = utcFriday.range;
  var utcSaturdays = utcSaturday.range;
  var utcMonth = newInterval(
    function(date2) {
      date2.setUTCDate(1);
      date2.setUTCHours(0, 0, 0, 0);
    },
    function(date2, step2) {
      date2.setUTCMonth(date2.getUTCMonth() + step2);
    },
    function(start2, end2) {
      return end2.getUTCMonth() - start2.getUTCMonth() + (end2.getUTCFullYear() - start2.getUTCFullYear()) * 12;
    },
    function(date2) {
      return date2.getUTCMonth();
    }
  );
  var utcMonths = utcMonth.range;
  var utcYear = newInterval(
    function(date2) {
      date2.setUTCMonth(0, 1);
      date2.setUTCHours(0, 0, 0, 0);
    },
    function(date2, step2) {
      date2.setUTCFullYear(date2.getUTCFullYear() + step2);
    },
    function(start2, end2) {
      return end2.getUTCFullYear() - start2.getUTCFullYear();
    },
    function(date2) {
      return date2.getUTCFullYear();
    }
  );
  utcYear.every = function(k2) {
    return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval(
      function(date2) {
        date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k2) * k2);
        date2.setUTCMonth(0, 1);
        date2.setUTCHours(0, 0, 0, 0);
      },
      function(date2, step2) {
        date2.setUTCFullYear(date2.getUTCFullYear() + step2 * k2);
      }
    );
  };
  var utcYears = utcYear.range;
  function localDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
      date2.setFullYear(d.y);
      return date2;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
  }
  function utcDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
      date2.setUTCFullYear(d.y);
      return date2;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
  }
  function newYear(y2) {
    return { y: y2, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
  }
  function formatLocale$1(locale2) {
    var locale_dateTime = locale2.dateTime, locale_date = locale2.date, locale_time = locale2.time, locale_periods = locale2.periods, locale_weekdays = locale2.days, locale_shortWeekdays = locale2.shortDays, locale_months = locale2.months, locale_shortMonths = locale2.shortMonths;
    var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
    var formats = {
      a: formatShortWeekday,
      A: formatWeekday,
      b: formatShortMonth,
      B: formatMonth,
      c: null,
      d: formatDayOfMonth,
      e: formatDayOfMonth,
      f: formatMicroseconds,
      H: formatHour24,
      I: formatHour12,
      j: formatDayOfYear,
      L: formatMilliseconds,
      m: formatMonthNumber,
      M: formatMinutes,
      p: formatPeriod,
      Q: formatUnixTimestamp,
      s: formatUnixTimestampSeconds,
      S: formatSeconds,
      u: formatWeekdayNumberMonday,
      U: formatWeekNumberSunday,
      V: formatWeekNumberISO,
      w: formatWeekdayNumberSunday,
      W: formatWeekNumberMonday,
      x: null,
      X: null,
      y: formatYear,
      Y: formatFullYear,
      Z: formatZone,
      "%": formatLiteralPercent
    };
    var utcFormats = {
      a: formatUTCShortWeekday,
      A: formatUTCWeekday,
      b: formatUTCShortMonth,
      B: formatUTCMonth,
      c: null,
      d: formatUTCDayOfMonth,
      e: formatUTCDayOfMonth,
      f: formatUTCMicroseconds,
      H: formatUTCHour24,
      I: formatUTCHour12,
      j: formatUTCDayOfYear,
      L: formatUTCMilliseconds,
      m: formatUTCMonthNumber,
      M: formatUTCMinutes,
      p: formatUTCPeriod,
      Q: formatUnixTimestamp,
      s: formatUnixTimestampSeconds,
      S: formatUTCSeconds,
      u: formatUTCWeekdayNumberMonday,
      U: formatUTCWeekNumberSunday,
      V: formatUTCWeekNumberISO,
      w: formatUTCWeekdayNumberSunday,
      W: formatUTCWeekNumberMonday,
      x: null,
      X: null,
      y: formatUTCYear,
      Y: formatUTCFullYear,
      Z: formatUTCZone,
      "%": formatLiteralPercent
    };
    var parses = {
      a: parseShortWeekday,
      A: parseWeekday,
      b: parseShortMonth,
      B: parseMonth,
      c: parseLocaleDateTime,
      d: parseDayOfMonth,
      e: parseDayOfMonth,
      f: parseMicroseconds,
      H: parseHour24,
      I: parseHour24,
      j: parseDayOfYear,
      L: parseMilliseconds,
      m: parseMonthNumber,
      M: parseMinutes,
      p: parsePeriod,
      Q: parseUnixTimestamp,
      s: parseUnixTimestampSeconds,
      S: parseSeconds,
      u: parseWeekdayNumberMonday,
      U: parseWeekNumberSunday,
      V: parseWeekNumberISO,
      w: parseWeekdayNumberSunday,
      W: parseWeekNumberMonday,
      x: parseLocaleDate,
      X: parseLocaleTime,
      y: parseYear,
      Y: parseFullYear,
      Z: parseZone,
      "%": parseLiteralPercent
    };
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats2) {
      return function(date2) {
        var string = [], i = -1, j = 0, n = specifier.length, c2, pad2, format;
        if (!(date2 instanceof Date))
          date2 = /* @__PURE__ */ new Date(+date2);
        while (++i < n) {
          if (specifier.charCodeAt(i) === 37) {
            string.push(specifier.slice(j, i));
            if ((pad2 = pads[c2 = specifier.charAt(++i)]) != null)
              c2 = specifier.charAt(++i);
            else
              pad2 = c2 === "e" ? " " : "0";
            if (format = formats2[c2])
              c2 = format(date2, pad2);
            string.push(c2);
            j = i + 1;
          }
        }
        string.push(specifier.slice(j, i));
        return string.join("");
      };
    }
    function newParse(specifier, newDate) {
      return function(string) {
        var d = newYear(1900), i = parseSpecifier(d, specifier, string += "", 0), week, day$$1;
        if (i != string.length)
          return null;
        if ("Q" in d)
          return new Date(d.Q);
        if ("p" in d)
          d.H = d.H % 12 + d.p * 12;
        if ("V" in d) {
          if (d.V < 1 || d.V > 53)
            return null;
          if (!("w" in d))
            d.w = 1;
          if ("Z" in d) {
            week = utcDate(newYear(d.y)), day$$1 = week.getUTCDay();
            week = day$$1 > 4 || day$$1 === 0 ? utcMonday.ceil(week) : utcMonday(week);
            week = utcDay.offset(week, (d.V - 1) * 7);
            d.y = week.getUTCFullYear();
            d.m = week.getUTCMonth();
            d.d = week.getUTCDate() + (d.w + 6) % 7;
          } else {
            week = newDate(newYear(d.y)), day$$1 = week.getDay();
            week = day$$1 > 4 || day$$1 === 0 ? monday.ceil(week) : monday(week);
            week = day.offset(week, (d.V - 1) * 7);
            d.y = week.getFullYear();
            d.m = week.getMonth();
            d.d = week.getDate() + (d.w + 6) % 7;
          }
        } else if ("W" in d || "U" in d) {
          if (!("w" in d))
            d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
          day$$1 = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
          d.m = 0;
          d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$$1 + 5) % 7 : d.w + d.U * 7 - (day$$1 + 6) % 7;
        }
        if ("Z" in d) {
          d.H += d.Z / 100 | 0;
          d.M += d.Z % 100;
          return utcDate(d);
        }
        return newDate(d);
      };
    }
    function parseSpecifier(d, specifier, string, j) {
      var i = 0, n = specifier.length, m = string.length, c2, parse;
      while (i < n) {
        if (j >= m)
          return -1;
        c2 = specifier.charCodeAt(i++);
        if (c2 === 37) {
          c2 = specifier.charAt(i++);
          parse = parses[c2 in pads ? specifier.charAt(i++) : c2];
          if (!parse || (j = parse(d, string, j)) < 0)
            return -1;
        } else if (c2 != string.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    function parsePeriod(d, string, i) {
      var n = periodRe.exec(string.slice(i));
      return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string, i) {
      var n = shortWeekdayRe.exec(string.slice(i));
      return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseWeekday(d, string, i) {
      var n = weekdayRe.exec(string.slice(i));
      return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseShortMonth(d, string, i) {
      var n = shortMonthRe.exec(string.slice(i));
      return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseMonth(d, string, i) {
      var n = monthRe.exec(string.slice(i));
      return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string, i) {
      return parseSpecifier(d, locale_dateTime, string, i);
    }
    function parseLocaleDate(d, string, i) {
      return parseSpecifier(d, locale_date, string, i);
    }
    function parseLocaleTime(d, string, i) {
      return parseSpecifier(d, locale_time, string, i);
    }
    function formatShortWeekday(d) {
      return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
      return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
      return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
      return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
      return locale_periods[+(d.getHours() >= 12)];
    }
    function formatUTCShortWeekday(d) {
      return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
      return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
      return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
      return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
      return locale_periods[+(d.getUTCHours() >= 12)];
    }
    return {
      format: function(specifier) {
        var f = newFormat(specifier += "", formats);
        f.toString = function() {
          return specifier;
        };
        return f;
      },
      parse: function(specifier) {
        var p = newParse(specifier += "", localDate);
        p.toString = function() {
          return specifier;
        };
        return p;
      },
      utcFormat: function(specifier) {
        var f = newFormat(specifier += "", utcFormats);
        f.toString = function() {
          return specifier;
        };
        return f;
      },
      utcParse: function(specifier) {
        var p = newParse(specifier, utcDate);
        p.toString = function() {
          return specifier;
        };
        return p;
      }
    };
  }
  var pads = { "-": "", _: " ", 0: "0" };
  var numberRe = /^\s*\d+/;
  var percentRe = /^%/;
  var requoteRe = /[\\^$*+?|[\]().{}]/g;
  function pad(value, fill, width) {
    var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length2 = string.length;
    return sign2 + (length2 < width ? new Array(width - length2 + 1).join(fill) + string : string);
  }
  function requote(s2) {
    return s2.replace(requoteRe, "\\$&");
  }
  function formatRe(names) {
    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
  }
  function formatLookup(names) {
    var map2 = {}, i = -1, n = names.length;
    while (++i < n)
      map2[names[i].toLowerCase()] = i;
    return map2;
  }
  function parseWeekdayNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
  }
  function parseWeekdayNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberISO(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
  }
  function parseFullYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
  }
  function parseYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
  }
  function parseZone(d, string, i) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
  }
  function parseMonthNumber(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
  }
  function parseDayOfMonth(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
  }
  function parseDayOfYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
  }
  function parseHour24(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
  }
  function parseMinutes(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
  }
  function parseSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
  }
  function parseMilliseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
  }
  function parseMicroseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
  }
  function parseLiteralPercent(d, string, i) {
    var n = percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function parseUnixTimestamp(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
  }
  function parseUnixTimestampSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0] * 1e3, i + n[0].length) : -1;
  }
  function formatDayOfMonth(d, p) {
    return pad(d.getDate(), p, 2);
  }
  function formatHour24(d, p) {
    return pad(d.getHours(), p, 2);
  }
  function formatHour12(d, p) {
    return pad(d.getHours() % 12 || 12, p, 2);
  }
  function formatDayOfYear(d, p) {
    return pad(1 + day.count(year(d), d), p, 3);
  }
  function formatMilliseconds(d, p) {
    return pad(d.getMilliseconds(), p, 3);
  }
  function formatMicroseconds(d, p) {
    return formatMilliseconds(d, p) + "000";
  }
  function formatMonthNumber(d, p) {
    return pad(d.getMonth() + 1, p, 2);
  }
  function formatMinutes(d, p) {
    return pad(d.getMinutes(), p, 2);
  }
  function formatSeconds(d, p) {
    return pad(d.getSeconds(), p, 2);
  }
  function formatWeekdayNumberMonday(d) {
    var day$$1 = d.getDay();
    return day$$1 === 0 ? 7 : day$$1;
  }
  function formatWeekNumberSunday(d, p) {
    return pad(sunday.count(year(d), d), p, 2);
  }
  function formatWeekNumberISO(d, p) {
    var day$$1 = d.getDay();
    d = day$$1 >= 4 || day$$1 === 0 ? thursday(d) : thursday.ceil(d);
    return pad(thursday.count(year(d), d) + (year(d).getDay() === 4), p, 2);
  }
  function formatWeekdayNumberSunday(d) {
    return d.getDay();
  }
  function formatWeekNumberMonday(d, p) {
    return pad(monday.count(year(d), d), p, 2);
  }
  function formatYear(d, p) {
    return pad(d.getFullYear() % 100, p, 2);
  }
  function formatFullYear(d, p) {
    return pad(d.getFullYear() % 1e4, p, 4);
  }
  function formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
  }
  function formatUTCDayOfMonth(d, p) {
    return pad(d.getUTCDate(), p, 2);
  }
  function formatUTCHour24(d, p) {
    return pad(d.getUTCHours(), p, 2);
  }
  function formatUTCHour12(d, p) {
    return pad(d.getUTCHours() % 12 || 12, p, 2);
  }
  function formatUTCDayOfYear(d, p) {
    return pad(1 + utcDay.count(utcYear(d), d), p, 3);
  }
  function formatUTCMilliseconds(d, p) {
    return pad(d.getUTCMilliseconds(), p, 3);
  }
  function formatUTCMicroseconds(d, p) {
    return formatUTCMilliseconds(d, p) + "000";
  }
  function formatUTCMonthNumber(d, p) {
    return pad(d.getUTCMonth() + 1, p, 2);
  }
  function formatUTCMinutes(d, p) {
    return pad(d.getUTCMinutes(), p, 2);
  }
  function formatUTCSeconds(d, p) {
    return pad(d.getUTCSeconds(), p, 2);
  }
  function formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
  }
  function formatUTCWeekNumberSunday(d, p) {
    return pad(utcSunday.count(utcYear(d), d), p, 2);
  }
  function formatUTCWeekNumberISO(d, p) {
    var day$$1 = d.getUTCDay();
    d = day$$1 >= 4 || day$$1 === 0 ? utcThursday(d) : utcThursday.ceil(d);
    return pad(
      utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4),
      p,
      2
    );
  }
  function formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
  }
  function formatUTCWeekNumberMonday(d, p) {
    return pad(utcMonday.count(utcYear(d), d), p, 2);
  }
  function formatUTCYear(d, p) {
    return pad(d.getUTCFullYear() % 100, p, 2);
  }
  function formatUTCFullYear(d, p) {
    return pad(d.getUTCFullYear() % 1e4, p, 4);
  }
  function formatUTCZone() {
    return "+0000";
  }
  function formatLiteralPercent() {
    return "%";
  }
  function formatUnixTimestamp(d) {
    return +d;
  }
  function formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1e3);
  }
  var locale$1;
  defaultLocale$1({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  });
  function defaultLocale$1(definition) {
    locale$1 = formatLocale$1(definition);
    exports2.timeFormat = locale$1.format;
    exports2.timeParse = locale$1.parse;
    exports2.utcFormat = locale$1.utcFormat;
    exports2.utcParse = locale$1.utcParse;
    return locale$1;
  }
  var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
  function formatIsoNative(date2) {
    return date2.toISOString();
  }
  var formatIso = Date.prototype.toISOString ? formatIsoNative : exports2.utcFormat(isoSpecifier);
  function parseIsoNative(string) {
    var date2 = new Date(string);
    return isNaN(date2) ? null : date2;
  }
  var parseIso = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : exports2.utcParse(isoSpecifier);
  var durationSecond = 1e3;
  var durationMinute = durationSecond * 60;
  var durationHour = durationMinute * 60;
  var durationDay = durationHour * 24;
  var durationWeek = durationDay * 7;
  var durationMonth = durationDay * 30;
  var durationYear = durationDay * 365;
  function date$1(t) {
    return new Date(t);
  }
  function number$3(t) {
    return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
  }
  function calendar(year$$1, month$$1, week, day$$1, hour$$1, minute$$1, second$$1, millisecond$$1, format) {
    var scale = continuous(deinterpolateLinear, reinterpolate), invert = scale.invert, domain = scale.domain;
    var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear2 = format("%Y");
    var tickIntervals = [
      [second$$1, 1, durationSecond],
      [second$$1, 5, 5 * durationSecond],
      [second$$1, 15, 15 * durationSecond],
      [second$$1, 30, 30 * durationSecond],
      [minute$$1, 1, durationMinute],
      [minute$$1, 5, 5 * durationMinute],
      [minute$$1, 15, 15 * durationMinute],
      [minute$$1, 30, 30 * durationMinute],
      [hour$$1, 1, durationHour],
      [hour$$1, 3, 3 * durationHour],
      [hour$$1, 6, 6 * durationHour],
      [hour$$1, 12, 12 * durationHour],
      [day$$1, 1, durationDay],
      [day$$1, 2, 2 * durationDay],
      [week, 1, durationWeek],
      [month$$1, 1, durationMonth],
      [month$$1, 3, 3 * durationMonth],
      [year$$1, 1, durationYear]
    ];
    function tickFormat2(date2) {
      return (second$$1(date2) < date2 ? formatMillisecond : minute$$1(date2) < date2 ? formatSecond : hour$$1(date2) < date2 ? formatMinute : day$$1(date2) < date2 ? formatHour : month$$1(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year$$1(date2) < date2 ? formatMonth : formatYear2)(date2);
    }
    function tickInterval(interval2, start2, stop, step2) {
      if (interval2 == null)
        interval2 = 10;
      if (typeof interval2 === "number") {
        var target = Math.abs(stop - start2) / interval2, i = bisector(function(i2) {
          return i2[2];
        }).right(tickIntervals, target);
        if (i === tickIntervals.length) {
          step2 = tickStep(start2 / durationYear, stop / durationYear, interval2);
          interval2 = year$$1;
        } else if (i) {
          i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
          step2 = i[1];
          interval2 = i[0];
        } else {
          step2 = Math.max(tickStep(start2, stop, interval2), 1);
          interval2 = millisecond$$1;
        }
      }
      return step2 == null ? interval2 : interval2.every(step2);
    }
    scale.invert = function(y2) {
      return new Date(invert(y2));
    };
    scale.domain = function(_) {
      return arguments.length ? domain(map$3.call(_, number$3)) : domain().map(date$1);
    };
    scale.ticks = function(interval2, step2) {
      var d = domain(), t02 = d[0], t12 = d[d.length - 1], r = t12 < t02, t;
      if (r)
        t = t02, t02 = t12, t12 = t;
      t = tickInterval(interval2, t02, t12, step2);
      t = t ? t.range(t02, t12 + 1) : [];
      return r ? t.reverse() : t;
    };
    scale.tickFormat = function(count2, specifier) {
      return specifier == null ? tickFormat2 : format(specifier);
    };
    scale.nice = function(interval2, step2) {
      var d = domain();
      return (interval2 = tickInterval(interval2, d[0], d[d.length - 1], step2)) ? domain(nice(d, interval2)) : scale;
    };
    scale.copy = function() {
      return copy(
        scale,
        calendar(
          year$$1,
          month$$1,
          week,
          day$$1,
          hour$$1,
          minute$$1,
          second$$1,
          millisecond$$1,
          format
        )
      );
    };
    return scale;
  }
  var time = function() {
    return calendar(
      year,
      month,
      sunday,
      day,
      hour,
      minute,
      second,
      millisecond,
      exports2.timeFormat
    ).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]);
  };
  var utcTime = function() {
    return calendar(
      utcYear,
      utcMonth,
      utcSunday,
      utcDay,
      utcHour,
      utcMinute,
      second,
      millisecond,
      exports2.utcFormat
    ).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]);
  };
  var colors = function(s2) {
    return s2.match(/.{6}/g).map(function(x2) {
      return "#" + x2;
    });
  };
  var category10 = colors(
    "1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"
  );
  var category20b = colors(
    "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"
  );
  var category20c = colors(
    "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"
  );
  var category20 = colors(
    "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"
  );
  var cubehelix$3 = cubehelixLong(
    cubehelix(300, 0.5, 0),
    cubehelix(-240, 0.5, 1)
  );
  var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
  var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
  var rainbow = cubehelix();
  var rainbow$1 = function(t) {
    if (t < 0 || t > 1)
      t -= Math.floor(t);
    var ts = Math.abs(t - 0.5);
    rainbow.h = 360 * t - 100;
    rainbow.s = 1.5 - 1.5 * ts;
    rainbow.l = 0.8 - 0.9 * ts;
    return rainbow + "";
  };
  function ramp(range2) {
    var n = range2.length;
    return function(t) {
      return range2[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
  }
  var viridis = ramp(
    colors(
      "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
    )
  );
  var magma = ramp(
    colors(
      "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
    )
  );
  var inferno = ramp(
    colors(
      "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
    )
  );
  var plasma = ramp(
    colors(
      "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
    )
  );
  function sequential(interpolator) {
    var x02 = 0, x12 = 1, clamp = false;
    function scale(x2) {
      var t = (x2 - x02) / (x12 - x02);
      return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
    }
    scale.domain = function(_) {
      return arguments.length ? (x02 = +_[0], x12 = +_[1], scale) : [x02, x12];
    };
    scale.clamp = function(_) {
      return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
      return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    scale.copy = function() {
      return sequential(interpolator).domain([x02, x12]).clamp(clamp);
    };
    return linearish(scale);
  }
  var constant$10 = function(x2) {
    return function constant2() {
      return x2;
    };
  };
  var abs$1 = Math.abs;
  var atan2$1 = Math.atan2;
  var cos$2 = Math.cos;
  var max$2 = Math.max;
  var min$1 = Math.min;
  var sin$2 = Math.sin;
  var sqrt$2 = Math.sqrt;
  var epsilon$3 = 1e-12;
  var pi$4 = Math.PI;
  var halfPi$3 = pi$4 / 2;
  var tau$4 = 2 * pi$4;
  function acos$1(x2) {
    return x2 > 1 ? 0 : x2 < -1 ? pi$4 : Math.acos(x2);
  }
  function asin$1(x2) {
    return x2 >= 1 ? halfPi$3 : x2 <= -1 ? -halfPi$3 : Math.asin(x2);
  }
  function arcInnerRadius(d) {
    return d.innerRadius;
  }
  function arcOuterRadius(d) {
    return d.outerRadius;
  }
  function arcStartAngle(d) {
    return d.startAngle;
  }
  function arcEndAngle(d) {
    return d.endAngle;
  }
  function arcPadAngle(d) {
    return d && d.padAngle;
  }
  function intersect(x02, y02, x12, y12, x2, y2, x3, y3) {
    var x10 = x12 - x02, y10 = y12 - y02, x32 = x3 - x2, y32 = y3 - y2, t = (x32 * (y02 - y2) - y32 * (x02 - x2)) / (y32 * x10 - x32 * y10);
    return [x02 + t * x10, y02 + t * y10];
  }
  function cornerTangents(x02, y02, x12, y12, r1, rc, cw) {
    var x01 = x02 - x12, y01 = y02 - y12, lo = (cw ? rc : -rc) / sqrt$2(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x02 + ox, y11 = y02 + oy, x10 = x12 + ox, y10 = y12 + oy, x002 = (x11 + x10) / 2, y002 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D2 = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt$2(max$2(0, r * r * d2 - D2 * D2)), cx0 = (D2 * dy - dx * d) / d2, cy0 = (-D2 * dx - dy * d) / d2, cx1 = (D2 * dy + dx * d) / d2, cy1 = (-D2 * dx + dy * d) / d2, dx0 = cx0 - x002, dy0 = cy0 - y002, dx1 = cx1 - x002, dy1 = cy1 - y002;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
      cx0 = cx1, cy0 = cy1;
    return {
      cx: cx0,
      cy: cy0,
      x01: -ox,
      y01: -oy,
      x11: cx0 * (r1 / r - 1),
      y11: cy0 * (r1 / r - 1)
    };
  }
  var arc = function() {
    var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant$10(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null;
    function arc2() {
      var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi$3, a1 = endAngle.apply(this, arguments) - halfPi$3, da = abs$1(a1 - a0), cw = a1 > a0;
      if (!context)
        context = buffer = path();
      if (r1 < r0)
        r = r1, r1 = r0, r0 = r;
      if (!(r1 > epsilon$3))
        context.moveTo(0, 0);
      else if (da > tau$4 - epsilon$3) {
        context.moveTo(r1 * cos$2(a0), r1 * sin$2(a0));
        context.arc(0, 0, r1, a0, a1, !cw);
        if (r0 > epsilon$3) {
          context.moveTo(r0 * cos$2(a1), r0 * sin$2(a1));
          context.arc(0, 0, r0, a1, a0, cw);
        }
      } else {
        var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon$3 && (padRadius ? +padRadius.apply(this, arguments) : sqrt$2(r0 * r0 + r1 * r1)), rc = min$1(abs$1(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t02, t12;
        if (rp > epsilon$3) {
          var p02 = asin$1(rp / r0 * sin$2(ap)), p1 = asin$1(rp / r1 * sin$2(ap));
          if ((da0 -= p02 * 2) > epsilon$3)
            p02 *= cw ? 1 : -1, a00 += p02, a10 -= p02;
          else
            da0 = 0, a00 = a10 = (a0 + a1) / 2;
          if ((da1 -= p1 * 2) > epsilon$3)
            p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
          else
            da1 = 0, a01 = a11 = (a0 + a1) / 2;
        }
        var x01 = r1 * cos$2(a01), y01 = r1 * sin$2(a01), x10 = r0 * cos$2(a10), y10 = r0 * sin$2(a10);
        if (rc > epsilon$3) {
          var x11 = r1 * cos$2(a11), y11 = r1 * sin$2(a11), x002 = r0 * cos$2(a00), y002 = r0 * sin$2(a00);
          if (da < pi$4) {
            var oc = da0 > epsilon$3 ? intersect(x01, y01, x002, y002, x11, y11, x10, y10) : [x10, y10], ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin$2(
              acos$1(
                (ax * bx + ay * by) / (sqrt$2(ax * ax + ay * ay) * sqrt$2(bx * bx + by * by))
              ) / 2
            ), lc = sqrt$2(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = min$1(rc, (r0 - lc) / (kc - 1));
            rc1 = min$1(rc, (r1 - lc) / (kc + 1));
          }
        }
        if (!(da1 > epsilon$3))
          context.moveTo(x01, y01);
        else if (rc1 > epsilon$3) {
          t02 = cornerTangents(x002, y002, x01, y01, r1, rc1, cw);
          t12 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
          context.moveTo(t02.cx + t02.x01, t02.cy + t02.y01);
          if (rc1 < rc)
            context.arc(
              t02.cx,
              t02.cy,
              rc1,
              atan2$1(t02.y01, t02.x01),
              atan2$1(t12.y01, t12.x01),
              !cw
            );
          else {
            context.arc(
              t02.cx,
              t02.cy,
              rc1,
              atan2$1(t02.y01, t02.x01),
              atan2$1(t02.y11, t02.x11),
              !cw
            );
            context.arc(
              0,
              0,
              r1,
              atan2$1(t02.cy + t02.y11, t02.cx + t02.x11),
              atan2$1(t12.cy + t12.y11, t12.cx + t12.x11),
              !cw
            );
            context.arc(
              t12.cx,
              t12.cy,
              rc1,
              atan2$1(t12.y11, t12.x11),
              atan2$1(t12.y01, t12.x01),
              !cw
            );
          }
        } else
          context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
        if (!(r0 > epsilon$3) || !(da0 > epsilon$3))
          context.lineTo(x10, y10);
        else if (rc0 > epsilon$3) {
          t02 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
          t12 = cornerTangents(x01, y01, x002, y002, r0, -rc0, cw);
          context.lineTo(t02.cx + t02.x01, t02.cy + t02.y01);
          if (rc0 < rc)
            context.arc(
              t02.cx,
              t02.cy,
              rc0,
              atan2$1(t02.y01, t02.x01),
              atan2$1(t12.y01, t12.x01),
              !cw
            );
          else {
            context.arc(
              t02.cx,
              t02.cy,
              rc0,
              atan2$1(t02.y01, t02.x01),
              atan2$1(t02.y11, t02.x11),
              !cw
            );
            context.arc(
              0,
              0,
              r0,
              atan2$1(t02.cy + t02.y11, t02.cx + t02.x11),
              atan2$1(t12.cy + t12.y11, t12.cx + t12.x11),
              cw
            );
            context.arc(
              t12.cx,
              t12.cy,
              rc0,
              atan2$1(t12.y11, t12.x11),
              atan2$1(t12.y01, t12.x01),
              !cw
            );
          }
        } else
          context.arc(0, 0, r0, a10, a00, cw);
      }
      context.closePath();
      if (buffer)
        return context = null, buffer + "" || null;
    }
    arc2.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a2 = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$4 / 2;
      return [cos$2(a2) * r, sin$2(a2) * r];
    };
    arc2.innerRadius = function(_) {
      return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant$10(+_), arc2) : innerRadius;
    };
    arc2.outerRadius = function(_) {
      return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant$10(+_), arc2) : outerRadius;
    };
    arc2.cornerRadius = function(_) {
      return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant$10(+_), arc2) : cornerRadius;
    };
    arc2.padRadius = function(_) {
      return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant$10(+_), arc2) : padRadius;
    };
    arc2.startAngle = function(_) {
      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$10(+_), arc2) : startAngle;
    };
    arc2.endAngle = function(_) {
      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$10(+_), arc2) : endAngle;
    };
    arc2.padAngle = function(_) {
      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$10(+_), arc2) : padAngle;
    };
    arc2.context = function(_) {
      return arguments.length ? (context = _ == null ? null : _, arc2) : context;
    };
    return arc2;
  };
  function Linear(context) {
    this._context = context;
  }
  Linear.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(x2, y2);
          break;
      }
    }
  };
  var curveLinear = function(context) {
    return new Linear(context);
  };
  function x$3(p) {
    return p[0];
  }
  function y$3(p) {
    return p[1];
  }
  var line = function() {
    var x$$1 = x$3, y$$1 = y$3, defined = constant$10(true), context = null, curve = curveLinear, output = null;
    function line2(data) {
      var i, n = data.length, d, defined0 = false, buffer;
      if (context == null)
        output = curve(buffer = path());
      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0)
            output.lineStart();
          else
            output.lineEnd();
        }
        if (defined0)
          output.point(+x$$1(d, i, data), +y$$1(d, i, data));
      }
      if (buffer)
        return output = null, buffer + "" || null;
    }
    line2.x = function(_) {
      return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$10(+_), line2) : x$$1;
    };
    line2.y = function(_) {
      return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$10(+_), line2) : y$$1;
    };
    line2.defined = function(_) {
      return arguments.length ? (defined = typeof _ === "function" ? _ : constant$10(!!_), line2) : defined;
    };
    line2.curve = function(_) {
      return arguments.length ? (curve = _, context != null && (output = curve(context)), line2) : curve;
    };
    line2.context = function(_) {
      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line2) : context;
    };
    return line2;
  };
  var area$2 = function() {
    var x02 = x$3, x12 = null, y02 = constant$10(0), y12 = y$3, defined = constant$10(true), context = null, curve = curveLinear, output = null;
    function area2(data) {
      var i, j, k2, n = data.length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
      if (context == null)
        output = curve(buffer = path());
      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0) {
            j = i;
            output.areaStart();
            output.lineStart();
          } else {
            output.lineEnd();
            output.lineStart();
            for (k2 = i - 1; k2 >= j; --k2) {
              output.point(x0z[k2], y0z[k2]);
            }
            output.lineEnd();
            output.areaEnd();
          }
        }
        if (defined0) {
          x0z[i] = +x02(d, i, data), y0z[i] = +y02(d, i, data);
          output.point(
            x12 ? +x12(d, i, data) : x0z[i],
            y12 ? +y12(d, i, data) : y0z[i]
          );
        }
      }
      if (buffer)
        return output = null, buffer + "" || null;
    }
    function arealine() {
      return line().defined(defined).curve(curve).context(context);
    }
    area2.x = function(_) {
      return arguments.length ? (x02 = typeof _ === "function" ? _ : constant$10(+_), x12 = null, area2) : x02;
    };
    area2.x0 = function(_) {
      return arguments.length ? (x02 = typeof _ === "function" ? _ : constant$10(+_), area2) : x02;
    };
    area2.x1 = function(_) {
      return arguments.length ? (x12 = _ == null ? null : typeof _ === "function" ? _ : constant$10(+_), area2) : x12;
    };
    area2.y = function(_) {
      return arguments.length ? (y02 = typeof _ === "function" ? _ : constant$10(+_), y12 = null, area2) : y02;
    };
    area2.y0 = function(_) {
      return arguments.length ? (y02 = typeof _ === "function" ? _ : constant$10(+_), area2) : y02;
    };
    area2.y1 = function(_) {
      return arguments.length ? (y12 = _ == null ? null : typeof _ === "function" ? _ : constant$10(+_), area2) : y12;
    };
    area2.lineX0 = area2.lineY0 = function() {
      return arealine().x(x02).y(y02);
    };
    area2.lineY1 = function() {
      return arealine().x(x02).y(y12);
    };
    area2.lineX1 = function() {
      return arealine().x(x12).y(y02);
    };
    area2.defined = function(_) {
      return arguments.length ? (defined = typeof _ === "function" ? _ : constant$10(!!_), area2) : defined;
    };
    area2.curve = function(_) {
      return arguments.length ? (curve = _, context != null && (output = curve(context)), area2) : curve;
    };
    area2.context = function(_) {
      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area2) : context;
    };
    return area2;
  };
  var descending$1 = function(a2, b) {
    return b < a2 ? -1 : b > a2 ? 1 : b >= a2 ? 0 : NaN;
  };
  var identity$7 = function(d) {
    return d;
  };
  var pie = function() {
    var value = identity$7, sortValues = descending$1, sort = null, startAngle = constant$10(0), endAngle = constant$10(tau$4), padAngle = constant$10(0);
    function pie2(data) {
      var i, n = data.length, j, k2, sum2 = 0, index2 = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min(
        tau$4,
        Math.max(-tau$4, endAngle.apply(this, arguments) - a0)
      ), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
      for (i = 0; i < n; ++i) {
        if ((v = arcs[index2[i] = i] = +value(data[i], i, data)) > 0) {
          sum2 += v;
        }
      }
      if (sortValues != null)
        index2.sort(function(i2, j2) {
          return sortValues(arcs[i2], arcs[j2]);
        });
      else if (sort != null)
        index2.sort(function(i2, j2) {
          return sort(data[i2], data[j2]);
        });
      for (i = 0, k2 = sum2 ? (da - n * pa) / sum2 : 0; i < n; ++i, a0 = a1) {
        j = index2[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k2 : 0) + pa, arcs[j] = {
          data: data[j],
          index: i,
          value: v,
          startAngle: a0,
          endAngle: a1,
          padAngle: p
        };
      }
      return arcs;
    }
    pie2.value = function(_) {
      return arguments.length ? (value = typeof _ === "function" ? _ : constant$10(+_), pie2) : value;
    };
    pie2.sortValues = function(_) {
      return arguments.length ? (sortValues = _, sort = null, pie2) : sortValues;
    };
    pie2.sort = function(_) {
      return arguments.length ? (sort = _, sortValues = null, pie2) : sort;
    };
    pie2.startAngle = function(_) {
      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$10(+_), pie2) : startAngle;
    };
    pie2.endAngle = function(_) {
      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$10(+_), pie2) : endAngle;
    };
    pie2.padAngle = function(_) {
      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$10(+_), pie2) : padAngle;
    };
    return pie2;
  };
  var curveRadialLinear = curveRadial(curveLinear);
  function Radial(curve) {
    this._curve = curve;
  }
  Radial.prototype = {
    areaStart: function() {
      this._curve.areaStart();
    },
    areaEnd: function() {
      this._curve.areaEnd();
    },
    lineStart: function() {
      this._curve.lineStart();
    },
    lineEnd: function() {
      this._curve.lineEnd();
    },
    point: function(a2, r) {
      this._curve.point(r * Math.sin(a2), r * -Math.cos(a2));
    }
  };
  function curveRadial(curve) {
    function radial2(context) {
      return new Radial(curve(context));
    }
    radial2._curve = curve;
    return radial2;
  }
  function lineRadial(l) {
    var c2 = l.curve;
    l.angle = l.x, delete l.x;
    l.radius = l.y, delete l.y;
    l.curve = function(_) {
      return arguments.length ? c2(curveRadial(_)) : c2()._curve;
    };
    return l;
  }
  var lineRadial$1 = function() {
    return lineRadial(line().curve(curveRadialLinear));
  };
  var areaRadial = function() {
    var a2 = area$2().curve(curveRadialLinear), c2 = a2.curve, x02 = a2.lineX0, x12 = a2.lineX1, y02 = a2.lineY0, y12 = a2.lineY1;
    a2.angle = a2.x, delete a2.x;
    a2.startAngle = a2.x0, delete a2.x0;
    a2.endAngle = a2.x1, delete a2.x1;
    a2.radius = a2.y, delete a2.y;
    a2.innerRadius = a2.y0, delete a2.y0;
    a2.outerRadius = a2.y1, delete a2.y1;
    a2.lineStartAngle = function() {
      return lineRadial(x02());
    }, delete a2.lineX0;
    a2.lineEndAngle = function() {
      return lineRadial(x12());
    }, delete a2.lineX1;
    a2.lineInnerRadius = function() {
      return lineRadial(y02());
    }, delete a2.lineY0;
    a2.lineOuterRadius = function() {
      return lineRadial(y12());
    }, delete a2.lineY1;
    a2.curve = function(_) {
      return arguments.length ? c2(curveRadial(_)) : c2()._curve;
    };
    return a2;
  };
  var pointRadial = function(x2, y2) {
    return [(y2 = +y2) * Math.cos(x2 -= Math.PI / 2), y2 * Math.sin(x2)];
  };
  var slice$6 = Array.prototype.slice;
  function linkSource(d) {
    return d.source;
  }
  function linkTarget(d) {
    return d.target;
  }
  function link$2(curve) {
    var source = linkSource, target = linkTarget, x$$1 = x$3, y$$1 = y$3, context = null;
    function link2() {
      var buffer, argv = slice$6.call(arguments), s2 = source.apply(this, argv), t = target.apply(this, argv);
      if (!context)
        context = buffer = path();
      curve(
        context,
        +x$$1.apply(this, (argv[0] = s2, argv)),
        +y$$1.apply(this, argv),
        +x$$1.apply(this, (argv[0] = t, argv)),
        +y$$1.apply(this, argv)
      );
      if (buffer)
        return context = null, buffer + "" || null;
    }
    link2.source = function(_) {
      return arguments.length ? (source = _, link2) : source;
    };
    link2.target = function(_) {
      return arguments.length ? (target = _, link2) : target;
    };
    link2.x = function(_) {
      return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$10(+_), link2) : x$$1;
    };
    link2.y = function(_) {
      return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$10(+_), link2) : y$$1;
    };
    link2.context = function(_) {
      return arguments.length ? (context = _ == null ? null : _, link2) : context;
    };
    return link2;
  }
  function curveHorizontal(context, x02, y02, x12, y12) {
    context.moveTo(x02, y02);
    context.bezierCurveTo(x02 = (x02 + x12) / 2, y02, x02, y12, x12, y12);
  }
  function curveVertical(context, x02, y02, x12, y12) {
    context.moveTo(x02, y02);
    context.bezierCurveTo(x02, y02 = (y02 + y12) / 2, x12, y02, x12, y12);
  }
  function curveRadial$1(context, x02, y02, x12, y12) {
    var p02 = pointRadial(x02, y02), p1 = pointRadial(x02, y02 = (y02 + y12) / 2), p2 = pointRadial(x12, y02), p3 = pointRadial(x12, y12);
    context.moveTo(p02[0], p02[1]);
    context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
  }
  function linkHorizontal() {
    return link$2(curveHorizontal);
  }
  function linkVertical() {
    return link$2(curveVertical);
  }
  function linkRadial() {
    var l = link$2(curveRadial$1);
    l.angle = l.x, delete l.x;
    l.radius = l.y, delete l.y;
    return l;
  }
  var circle$2 = {
    draw: function(context, size) {
      var r = Math.sqrt(size / pi$4);
      context.moveTo(r, 0);
      context.arc(0, 0, r, 0, tau$4);
    }
  };
  var cross$2 = {
    draw: function(context, size) {
      var r = Math.sqrt(size / 5) / 2;
      context.moveTo(-3 * r, -r);
      context.lineTo(-r, -r);
      context.lineTo(-r, -3 * r);
      context.lineTo(r, -3 * r);
      context.lineTo(r, -r);
      context.lineTo(3 * r, -r);
      context.lineTo(3 * r, r);
      context.lineTo(r, r);
      context.lineTo(r, 3 * r);
      context.lineTo(-r, 3 * r);
      context.lineTo(-r, r);
      context.lineTo(-3 * r, r);
      context.closePath();
    }
  };
  var tan30 = Math.sqrt(1 / 3);
  var tan30_2 = tan30 * 2;
  var diamond = {
    draw: function(context, size) {
      var y2 = Math.sqrt(size / tan30_2), x2 = y2 * tan30;
      context.moveTo(0, -y2);
      context.lineTo(x2, 0);
      context.lineTo(0, y2);
      context.lineTo(-x2, 0);
      context.closePath();
    }
  };
  var ka = 0.8908130915292852;
  var kr = Math.sin(pi$4 / 10) / Math.sin(7 * pi$4 / 10);
  var kx = Math.sin(tau$4 / 10) * kr;
  var ky = -Math.cos(tau$4 / 10) * kr;
  var star = {
    draw: function(context, size) {
      var r = Math.sqrt(size * ka), x2 = kx * r, y2 = ky * r;
      context.moveTo(0, -r);
      context.lineTo(x2, y2);
      for (var i = 1; i < 5; ++i) {
        var a2 = tau$4 * i / 5, c2 = Math.cos(a2), s2 = Math.sin(a2);
        context.lineTo(s2 * r, -c2 * r);
        context.lineTo(c2 * x2 - s2 * y2, s2 * x2 + c2 * y2);
      }
      context.closePath();
    }
  };
  var square = {
    draw: function(context, size) {
      var w = Math.sqrt(size), x2 = -w / 2;
      context.rect(x2, x2, w, w);
    }
  };
  var sqrt3 = Math.sqrt(3);
  var triangle = {
    draw: function(context, size) {
      var y2 = -Math.sqrt(size / (sqrt3 * 3));
      context.moveTo(0, y2 * 2);
      context.lineTo(-sqrt3 * y2, -y2);
      context.lineTo(sqrt3 * y2, -y2);
      context.closePath();
    }
  };
  var c = -0.5;
  var s = Math.sqrt(3) / 2;
  var k = 1 / Math.sqrt(12);
  var a = (k / 2 + 1) * 3;
  var wye = {
    draw: function(context, size) {
      var r = Math.sqrt(size / a), x02 = r / 2, y02 = r * k, x12 = x02, y12 = r * k + r, x2 = -x12, y2 = y12;
      context.moveTo(x02, y02);
      context.lineTo(x12, y12);
      context.lineTo(x2, y2);
      context.lineTo(c * x02 - s * y02, s * x02 + c * y02);
      context.lineTo(c * x12 - s * y12, s * x12 + c * y12);
      context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
      context.lineTo(c * x02 + s * y02, c * y02 - s * x02);
      context.lineTo(c * x12 + s * y12, c * y12 - s * x12);
      context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
      context.closePath();
    }
  };
  var symbols = [circle$2, cross$2, diamond, square, star, triangle, wye];
  var symbol = function() {
    var type2 = constant$10(circle$2), size = constant$10(64), context = null;
    function symbol2() {
      var buffer;
      if (!context)
        context = buffer = path();
      type2.apply(this, arguments).draw(context, +size.apply(this, arguments));
      if (buffer)
        return context = null, buffer + "" || null;
    }
    symbol2.type = function(_) {
      return arguments.length ? (type2 = typeof _ === "function" ? _ : constant$10(_), symbol2) : type2;
    };
    symbol2.size = function(_) {
      return arguments.length ? (size = typeof _ === "function" ? _ : constant$10(+_), symbol2) : size;
    };
    symbol2.context = function(_) {
      return arguments.length ? (context = _ == null ? null : _, symbol2) : context;
    };
    return symbol2;
  };
  var noop$2 = function() {
  };
  function point$2(that, x2, y2) {
    that._context.bezierCurveTo(
      (2 * that._x0 + that._x1) / 3,
      (2 * that._y0 + that._y1) / 3,
      (that._x0 + 2 * that._x1) / 3,
      (that._y0 + 2 * that._y1) / 3,
      (that._x0 + 4 * that._x1 + x2) / 6,
      (that._y0 + 4 * that._y1 + y2) / 6
    );
  }
  function Basis(context) {
    this._context = context;
  }
  Basis.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 3:
          point$2(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6
          );
        default:
          point$2(this, x2, y2);
          break;
      }
      this._x0 = this._x1, this._x1 = x2;
      this._y0 = this._y1, this._y1 = y2;
    }
  };
  var basis$2 = function(context) {
    return new Basis(context);
  };
  function BasisClosed(context) {
    this._context = context;
  }
  BasisClosed.prototype = {
    areaStart: noop$2,
    areaEnd: noop$2,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x2, this._y2);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.moveTo(
            (this._x2 + 2 * this._x3) / 3,
            (this._y2 + 2 * this._y3) / 3
          );
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3
          );
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x2, this._y2);
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          break;
        }
      }
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x2 = x2, this._y2 = y2;
          break;
        case 1:
          this._point = 2;
          this._x3 = x2, this._y3 = y2;
          break;
        case 2:
          this._point = 3;
          this._x4 = x2, this._y4 = y2;
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + x2) / 6,
            (this._y0 + 4 * this._y1 + y2) / 6
          );
          break;
        default:
          point$2(this, x2, y2);
          break;
      }
      this._x0 = this._x1, this._x1 = x2;
      this._y0 = this._y1, this._y1 = y2;
    }
  };
  var basisClosed$1 = function(context) {
    return new BasisClosed(context);
  };
  function BasisOpen(context) {
    this._context = context;
  }
  BasisOpen.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 3)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var x02 = (this._x0 + 4 * this._x1 + x2) / 6, y02 = (this._y0 + 4 * this._y1 + y2) / 6;
          this._line ? this._context.lineTo(x02, y02) : this._context.moveTo(x02, y02);
          break;
        case 3:
          this._point = 4;
        default:
          point$2(this, x2, y2);
          break;
      }
      this._x0 = this._x1, this._x1 = x2;
      this._y0 = this._y1, this._y1 = y2;
    }
  };
  var basisOpen = function(context) {
    return new BasisOpen(context);
  };
  function Bundle(context, beta) {
    this._basis = new Basis(context);
    this._beta = beta;
  }
  Bundle.prototype = {
    lineStart: function() {
      this._x = [];
      this._y = [];
      this._basis.lineStart();
    },
    lineEnd: function() {
      var x2 = this._x, y2 = this._y, j = x2.length - 1;
      if (j > 0) {
        var x02 = x2[0], y02 = y2[0], dx = x2[j] - x02, dy = y2[j] - y02, i = -1, t;
        while (++i <= j) {
          t = i / j;
          this._basis.point(
            this._beta * x2[i] + (1 - this._beta) * (x02 + t * dx),
            this._beta * y2[i] + (1 - this._beta) * (y02 + t * dy)
          );
        }
      }
      this._x = this._y = null;
      this._basis.lineEnd();
    },
    point: function(x2, y2) {
      this._x.push(+x2);
      this._y.push(+y2);
    }
  };
  var bundle = function custom(beta) {
    function bundle2(context) {
      return beta === 1 ? new Basis(context) : new Bundle(context, beta);
    }
    bundle2.beta = function(beta2) {
      return custom(+beta2);
    };
    return bundle2;
  }(0.85);
  function point$3(that, x2, y2) {
    that._context.bezierCurveTo(
      that._x1 + that._k * (that._x2 - that._x0),
      that._y1 + that._k * (that._y2 - that._y0),
      that._x2 + that._k * (that._x1 - x2),
      that._y2 + that._k * (that._y1 - y2),
      that._x2,
      that._y2
    );
  }
  function Cardinal(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  Cardinal.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          point$3(this, this._x1, this._y1);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
          break;
        case 1:
          this._point = 2;
          this._x1 = x2, this._y1 = y2;
          break;
        case 2:
          this._point = 3;
        default:
          point$3(this, x2, y2);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
    }
  };
  var cardinal = function custom(tension) {
    function cardinal2(context) {
      return new Cardinal(context, tension);
    }
    cardinal2.tension = function(tension2) {
      return custom(+tension2);
    };
    return cardinal2;
  }(0);
  function CardinalClosed(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  CardinalClosed.prototype = {
    areaStart: noop$2,
    areaEnd: noop$2,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x3 = x2, this._y3 = y2;
          break;
        case 1:
          this._point = 2;
          this._context.moveTo(this._x4 = x2, this._y4 = y2);
          break;
        case 2:
          this._point = 3;
          this._x5 = x2, this._y5 = y2;
          break;
        default:
          point$3(this, x2, y2);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
    }
  };
  var cardinalClosed = function custom(tension) {
    function cardinal$$1(context) {
      return new CardinalClosed(context, tension);
    }
    cardinal$$1.tension = function(tension2) {
      return custom(+tension2);
    };
    return cardinal$$1;
  }(0);
  function CardinalOpen(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  CardinalOpen.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 3)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          point$3(this, x2, y2);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
    }
  };
  var cardinalOpen = function custom(tension) {
    function cardinal$$1(context) {
      return new CardinalOpen(context, tension);
    }
    cardinal$$1.tension = function(tension2) {
      return custom(+tension2);
    };
    return cardinal$$1;
  }(0);
  function point$4(that, x2, y2) {
    var x12 = that._x1, y12 = that._y1, x22 = that._x2, y22 = that._y2;
    if (that._l01_a > epsilon$3) {
      var a2 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
      x12 = (x12 * a2 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
      y12 = (y12 * a2 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
    }
    if (that._l23_a > epsilon$3) {
      var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
      x22 = (x22 * b + that._x1 * that._l23_2a - x2 * that._l12_2a) / m;
      y22 = (y22 * b + that._y1 * that._l23_2a - y2 * that._l12_2a) / m;
    }
    that._context.bezierCurveTo(x12, y12, x22, y22, that._x2, that._y2);
  }
  function CatmullRom(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  CatmullRom.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          this.point(this._x2, this._y2);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      if (this._point) {
        var x23 = this._x2 - x2, y23 = this._y2 - y2;
        this._l23_a = Math.sqrt(
          this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha)
        );
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        default:
          point$4(this, x2, y2);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
    }
  };
  var catmullRom = function custom(alpha) {
    function catmullRom2(context) {
      return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
    }
    catmullRom2.alpha = function(alpha2) {
      return custom(+alpha2);
    };
    return catmullRom2;
  }(0.5);
  function CatmullRomClosed(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  CatmullRomClosed.prototype = {
    areaStart: noop$2,
    areaEnd: noop$2,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      if (this._point) {
        var x23 = this._x2 - x2, y23 = this._y2 - y2;
        this._l23_a = Math.sqrt(
          this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha)
        );
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x3 = x2, this._y3 = y2;
          break;
        case 1:
          this._point = 2;
          this._context.moveTo(this._x4 = x2, this._y4 = y2);
          break;
        case 2:
          this._point = 3;
          this._x5 = x2, this._y5 = y2;
          break;
        default:
          point$4(this, x2, y2);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
    }
  };
  var catmullRomClosed = function custom(alpha) {
    function catmullRom$$1(context) {
      return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
    }
    catmullRom$$1.alpha = function(alpha2) {
      return custom(+alpha2);
    };
    return catmullRom$$1;
  }(0.5);
  function CatmullRomOpen(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  CatmullRomOpen.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 3)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      if (this._point) {
        var x23 = this._x2 - x2, y23 = this._y2 - y2;
        this._l23_a = Math.sqrt(
          this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha)
        );
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          point$4(this, x2, y2);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
    }
  };
  var catmullRomOpen = function custom(alpha) {
    function catmullRom$$1(context) {
      return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
    }
    catmullRom$$1.alpha = function(alpha2) {
      return custom(+alpha2);
    };
    return catmullRom$$1;
  }(0.5);
  function LinearClosed(context) {
    this._context = context;
  }
  LinearClosed.prototype = {
    areaStart: noop$2,
    areaEnd: noop$2,
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._point)
        this._context.closePath();
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      if (this._point)
        this._context.lineTo(x2, y2);
      else
        this._point = 1, this._context.moveTo(x2, y2);
    }
  };
  var linearClosed = function(context) {
    return new LinearClosed(context);
  };
  function sign$1(x2) {
    return x2 < 0 ? -1 : 1;
  }
  function slope3(that, x2, y2) {
    var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
    return (sign$1(s0) + sign$1(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
  }
  function slope2(that, t) {
    var h = that._x1 - that._x0;
    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
  }
  function point$5(that, t02, t12) {
    var x02 = that._x0, y02 = that._y0, x12 = that._x1, y12 = that._y1, dx = (x12 - x02) / 3;
    that._context.bezierCurveTo(
      x02 + dx,
      y02 + dx * t02,
      x12 - dx,
      y12 - dx * t12,
      x12,
      y12
    );
  }
  function MonotoneX(context) {
    this._context = context;
  }
  MonotoneX.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          point$5(this, this._t0, slope2(this, this._t0));
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      var t12 = NaN;
      x2 = +x2, y2 = +y2;
      if (x2 === this._x1 && y2 === this._y1)
        return;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          point$5(this, slope2(this, t12 = slope3(this, x2, y2)), t12);
          break;
        default:
          point$5(this, this._t0, t12 = slope3(this, x2, y2));
          break;
      }
      this._x0 = this._x1, this._x1 = x2;
      this._y0 = this._y1, this._y1 = y2;
      this._t0 = t12;
    }
  };
  function MonotoneY(context) {
    this._context = new ReflectContext(context);
  }
  (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
    MonotoneX.prototype.point.call(this, y2, x2);
  };
  function ReflectContext(context) {
    this._context = context;
  }
  ReflectContext.prototype = {
    moveTo: function(x2, y2) {
      this._context.moveTo(y2, x2);
    },
    closePath: function() {
      this._context.closePath();
    },
    lineTo: function(x2, y2) {
      this._context.lineTo(y2, x2);
    },
    bezierCurveTo: function(x12, y12, x2, y2, x3, y3) {
      this._context.bezierCurveTo(y12, x12, y2, x2, y3, x3);
    }
  };
  function monotoneX(context) {
    return new MonotoneX(context);
  }
  function monotoneY(context) {
    return new MonotoneY(context);
  }
  function Natural(context) {
    this._context = context;
  }
  Natural.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = [];
      this._y = [];
    },
    lineEnd: function() {
      var x2 = this._x, y2 = this._y, n = x2.length;
      if (n) {
        this._line ? this._context.lineTo(x2[0], y2[0]) : this._context.moveTo(x2[0], y2[0]);
        if (n === 2) {
          this._context.lineTo(x2[1], y2[1]);
        } else {
          var px = controlPoints(x2), py = controlPoints(y2);
          for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
            this._context.bezierCurveTo(
              px[0][i0],
              py[0][i0],
              px[1][i0],
              py[1][i0],
              x2[i1],
              y2[i1]
            );
          }
        }
      }
      if (this._line || this._line !== 0 && n === 1)
        this._context.closePath();
      this._line = 1 - this._line;
      this._x = this._y = null;
    },
    point: function(x2, y2) {
      this._x.push(+x2);
      this._y.push(+y2);
    }
  };
  function controlPoints(x2) {
    var i, n = x2.length - 1, m, a2 = new Array(n), b = new Array(n), r = new Array(n);
    a2[0] = 0, b[0] = 2, r[0] = x2[0] + 2 * x2[1];
    for (i = 1; i < n - 1; ++i)
      a2[i] = 1, b[i] = 4, r[i] = 4 * x2[i] + 2 * x2[i + 1];
    a2[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x2[n - 1] + x2[n];
    for (i = 1; i < n; ++i)
      m = a2[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
    a2[n - 1] = r[n - 1] / b[n - 1];
    for (i = n - 2; i >= 0; --i)
      a2[i] = (r[i] - a2[i + 1]) / b[i];
    b[n - 1] = (x2[n] + a2[n - 1]) / 2;
    for (i = 0; i < n - 1; ++i)
      b[i] = 2 * x2[i + 1] - a2[i + 1];
    return [a2, b];
  }
  var natural = function(context) {
    return new Natural(context);
  };
  function Step(context, t) {
    this._context = context;
    this._t = t;
  }
  Step.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = this._y = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (0 < this._t && this._t < 1 && this._point === 2)
        this._context.lineTo(this._x, this._y);
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      if (this._line >= 0)
        this._t = 1 - this._t, this._line = 1 - this._line;
    },
    point: function(x2, y2) {
      x2 = +x2, y2 = +y2;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
          break;
        case 1:
          this._point = 2;
        default: {
          if (this._t <= 0) {
            this._context.lineTo(this._x, y2);
            this._context.lineTo(x2, y2);
          } else {
            var x12 = this._x * (1 - this._t) + x2 * this._t;
            this._context.lineTo(x12, this._y);
            this._context.lineTo(x12, y2);
          }
          break;
        }
      }
      this._x = x2, this._y = y2;
    }
  };
  var step = function(context) {
    return new Step(context, 0.5);
  };
  function stepBefore(context) {
    return new Step(context, 0);
  }
  function stepAfter(context) {
    return new Step(context, 1);
  }
  var none$1 = function(series, order) {
    if (!((n = series.length) > 1))
      return;
    for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
      s0 = s1, s1 = series[order[i]];
      for (j = 0; j < m; ++j) {
        s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
      }
    }
  };
  var none$2 = function(series) {
    var n = series.length, o = new Array(n);
    while (--n >= 0)
      o[n] = n;
    return o;
  };
  function stackValue(d, key) {
    return d[key];
  }
  var stack = function() {
    var keys2 = constant$10([]), order = none$2, offset = none$1, value = stackValue;
    function stack2(data) {
      var kz = keys2.apply(this, arguments), i, m = data.length, n = kz.length, sz = new Array(n), oz;
      for (i = 0; i < n; ++i) {
        for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
          si[j] = sij = [0, +value(data[j], ki, j, data)];
          sij.data = data[j];
        }
        si.key = ki;
      }
      for (i = 0, oz = order(sz); i < n; ++i) {
        sz[oz[i]].index = i;
      }
      offset(sz, oz);
      return sz;
    }
    stack2.keys = function(_) {
      return arguments.length ? (keys2 = typeof _ === "function" ? _ : constant$10(slice$6.call(_)), stack2) : keys2;
    };
    stack2.value = function(_) {
      return arguments.length ? (value = typeof _ === "function" ? _ : constant$10(+_), stack2) : value;
    };
    stack2.order = function(_) {
      return arguments.length ? (order = _ == null ? none$2 : typeof _ === "function" ? _ : constant$10(slice$6.call(_)), stack2) : order;
    };
    stack2.offset = function(_) {
      return arguments.length ? (offset = _ == null ? none$1 : _, stack2) : offset;
    };
    return stack2;
  };
  var expand = function(series, order) {
    if (!((n = series.length) > 0))
      return;
    for (var i, n, j = 0, m = series[0].length, y2; j < m; ++j) {
      for (y2 = i = 0; i < n; ++i)
        y2 += series[i][j][1] || 0;
      if (y2)
        for (i = 0; i < n; ++i)
          series[i][j][1] /= y2;
    }
    none$1(series, order);
  };
  var diverging = function(series, order) {
    if (!((n = series.length) > 1))
      return;
    for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
      for (yp = yn = 0, i = 0; i < n; ++i) {
        if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
          d[0] = yp, d[1] = yp += dy;
        } else if (dy < 0) {
          d[1] = yn, d[0] = yn += dy;
        } else {
          d[0] = yp;
        }
      }
    }
  };
  var silhouette = function(series, order) {
    if (!((n = series.length) > 0))
      return;
    for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
      for (var i = 0, y2 = 0; i < n; ++i)
        y2 += series[i][j][1] || 0;
      s0[j][1] += s0[j][0] = -y2 / 2;
    }
    none$1(series, order);
  };
  var wiggle = function(series, order) {
    if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0))
      return;
    for (var y2 = 0, j = 1, s0, m, n; j < m; ++j) {
      for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
        var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2;
        for (var k2 = 0; k2 < i; ++k2) {
          var sk = series[order[k2]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
          s3 += skj0 - skj1;
        }
        s1 += sij0, s2 += s3 * sij0;
      }
      s0[j - 1][1] += s0[j - 1][0] = y2;
      if (s1)
        y2 -= s2 / s1;
    }
    s0[j - 1][1] += s0[j - 1][0] = y2;
    none$1(series, order);
  };
  var ascending$2 = function(series) {
    var sums = series.map(sum$2);
    return none$2(series).sort(function(a2, b) {
      return sums[a2] - sums[b];
    });
  };
  function sum$2(series) {
    var s2 = 0, i = -1, n = series.length, v;
    while (++i < n)
      if (v = +series[i][1])
        s2 += v;
    return s2;
  }
  var descending$2 = function(series) {
    return ascending$2(series).reverse();
  };
  var insideOut = function(series) {
    var n = series.length, i, j, sums = series.map(sum$2), order = none$2(series).sort(function(a2, b) {
      return sums[b] - sums[a2];
    }), top2 = 0, bottom2 = 0, tops = [], bottoms = [];
    for (i = 0; i < n; ++i) {
      j = order[i];
      if (top2 < bottom2) {
        top2 += sums[j];
        tops.push(j);
      } else {
        bottom2 += sums[j];
        bottoms.push(j);
      }
    }
    return bottoms.reverse().concat(tops);
  };
  var reverse = function(series) {
    return none$2(series).reverse();
  };
  var constant$11 = function(x2) {
    return function() {
      return x2;
    };
  };
  function x$4(d) {
    return d[0];
  }
  function y$4(d) {
    return d[1];
  }
  function RedBlackTree() {
    this._ = null;
  }
  function RedBlackNode(node) {
    node.U = // parent node
    node.C = // color - true for red, false for black
    node.L = // left node
    node.R = // right node
    node.P = // previous node
    node.N = null;
  }
  RedBlackTree.prototype = {
    constructor: RedBlackTree,
    insert: function(after, node) {
      var parent, grandpa, uncle;
      if (after) {
        node.P = after;
        node.N = after.N;
        if (after.N)
          after.N.P = node;
        after.N = node;
        if (after.R) {
          after = after.R;
          while (after.L)
            after = after.L;
          after.L = node;
        } else {
          after.R = node;
        }
        parent = after;
      } else if (this._) {
        after = RedBlackFirst(this._);
        node.P = null;
        node.N = after;
        after.P = after.L = node;
        parent = after;
      } else {
        node.P = node.N = null;
        this._ = node;
        parent = null;
      }
      node.L = node.R = null;
      node.U = parent;
      node.C = true;
      after = node;
      while (parent && parent.C) {
        grandpa = parent.U;
        if (parent === grandpa.L) {
          uncle = grandpa.R;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.R) {
              RedBlackRotateLeft(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            RedBlackRotateRight(this, grandpa);
          }
        } else {
          uncle = grandpa.L;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.L) {
              RedBlackRotateRight(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            RedBlackRotateLeft(this, grandpa);
          }
        }
        parent = after.U;
      }
      this._.C = false;
    },
    remove: function(node) {
      if (node.N)
        node.N.P = node.P;
      if (node.P)
        node.P.N = node.N;
      node.N = node.P = null;
      var parent = node.U, sibling, left2 = node.L, right2 = node.R, next, red;
      if (!left2)
        next = right2;
      else if (!right2)
        next = left2;
      else
        next = RedBlackFirst(right2);
      if (parent) {
        if (parent.L === node)
          parent.L = next;
        else
          parent.R = next;
      } else {
        this._ = next;
      }
      if (left2 && right2) {
        red = next.C;
        next.C = node.C;
        next.L = left2;
        left2.U = next;
        if (next !== right2) {
          parent = next.U;
          next.U = node.U;
          node = next.R;
          parent.L = node;
          next.R = right2;
          right2.U = next;
        } else {
          next.U = parent;
          parent = next;
          node = next.R;
        }
      } else {
        red = node.C;
        node = next;
      }
      if (node)
        node.U = parent;
      if (red)
        return;
      if (node && node.C) {
        node.C = false;
        return;
      }
      do {
        if (node === this._)
          break;
        if (node === parent.L) {
          sibling = parent.R;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            RedBlackRotateLeft(this, parent);
            sibling = parent.R;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.R || !sibling.R.C) {
              sibling.L.C = false;
              sibling.C = true;
              RedBlackRotateRight(this, sibling);
              sibling = parent.R;
            }
            sibling.C = parent.C;
            parent.C = sibling.R.C = false;
            RedBlackRotateLeft(this, parent);
            node = this._;
            break;
          }
        } else {
          sibling = parent.L;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            RedBlackRotateRight(this, parent);
            sibling = parent.L;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.L || !sibling.L.C) {
              sibling.R.C = false;
              sibling.C = true;
              RedBlackRotateLeft(this, sibling);
              sibling = parent.L;
            }
            sibling.C = parent.C;
            parent.C = sibling.L.C = false;
            RedBlackRotateRight(this, parent);
            node = this._;
            break;
          }
        }
        sibling.C = true;
        node = parent;
        parent = parent.U;
      } while (!node.C);
      if (node)
        node.C = false;
    }
  };
  function RedBlackRotateLeft(tree2, node) {
    var p = node, q = node.R, parent = p.U;
    if (parent) {
      if (parent.L === p)
        parent.L = q;
      else
        parent.R = q;
    } else {
      tree2._ = q;
    }
    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R)
      p.R.U = p;
    q.L = p;
  }
  function RedBlackRotateRight(tree2, node) {
    var p = node, q = node.L, parent = p.U;
    if (parent) {
      if (parent.L === p)
        parent.L = q;
      else
        parent.R = q;
    } else {
      tree2._ = q;
    }
    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L)
      p.L.U = p;
    q.R = p;
  }
  function RedBlackFirst(node) {
    while (node.L)
      node = node.L;
    return node;
  }
  function createEdge(left2, right2, v0, v1) {
    var edge = [null, null], index2 = edges.push(edge) - 1;
    edge.left = left2;
    edge.right = right2;
    if (v0)
      setEdgeEnd(edge, left2, right2, v0);
    if (v1)
      setEdgeEnd(edge, right2, left2, v1);
    cells[left2.index].halfedges.push(index2);
    cells[right2.index].halfedges.push(index2);
    return edge;
  }
  function createBorderEdge(left2, v0, v1) {
    var edge = [v0, v1];
    edge.left = left2;
    return edge;
  }
  function setEdgeEnd(edge, left2, right2, vertex) {
    if (!edge[0] && !edge[1]) {
      edge[0] = vertex;
      edge.left = left2;
      edge.right = right2;
    } else if (edge.left === right2) {
      edge[1] = vertex;
    } else {
      edge[0] = vertex;
    }
  }
  function clipEdge(edge, x02, y02, x12, y12) {
    var a2 = edge[0], b = edge[1], ax = a2[0], ay = a2[1], bx = b[0], by = b[1], t02 = 0, t12 = 1, dx = bx - ax, dy = by - ay, r;
    r = x02 - ax;
    if (!dx && r > 0)
      return;
    r /= dx;
    if (dx < 0) {
      if (r < t02)
        return;
      if (r < t12)
        t12 = r;
    } else if (dx > 0) {
      if (r > t12)
        return;
      if (r > t02)
        t02 = r;
    }
    r = x12 - ax;
    if (!dx && r < 0)
      return;
    r /= dx;
    if (dx < 0) {
      if (r > t12)
        return;
      if (r > t02)
        t02 = r;
    } else if (dx > 0) {
      if (r < t02)
        return;
      if (r < t12)
        t12 = r;
    }
    r = y02 - ay;
    if (!dy && r > 0)
      return;
    r /= dy;
    if (dy < 0) {
      if (r < t02)
        return;
      if (r < t12)
        t12 = r;
    } else if (dy > 0) {
      if (r > t12)
        return;
      if (r > t02)
        t02 = r;
    }
    r = y12 - ay;
    if (!dy && r < 0)
      return;
    r /= dy;
    if (dy < 0) {
      if (r > t12)
        return;
      if (r > t02)
        t02 = r;
    } else if (dy > 0) {
      if (r < t02)
        return;
      if (r < t12)
        t12 = r;
    }
    if (!(t02 > 0) && !(t12 < 1))
      return true;
    if (t02 > 0)
      edge[0] = [ax + t02 * dx, ay + t02 * dy];
    if (t12 < 1)
      edge[1] = [ax + t12 * dx, ay + t12 * dy];
    return true;
  }
  function connectEdge(edge, x02, y02, x12, y12) {
    var v1 = edge[1];
    if (v1)
      return true;
    var v0 = edge[0], left2 = edge.left, right2 = edge.right, lx = left2[0], ly = left2[1], rx = right2[0], ry = right2[1], fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
    if (ry === ly) {
      if (fx < x02 || fx >= x12)
        return;
      if (lx > rx) {
        if (!v0)
          v0 = [fx, y02];
        else if (v0[1] >= y12)
          return;
        v1 = [fx, y12];
      } else {
        if (!v0)
          v0 = [fx, y12];
        else if (v0[1] < y02)
          return;
        v1 = [fx, y02];
      }
    } else {
      fm = (lx - rx) / (ry - ly);
      fb = fy - fm * fx;
      if (fm < -1 || fm > 1) {
        if (lx > rx) {
          if (!v0)
            v0 = [(y02 - fb) / fm, y02];
          else if (v0[1] >= y12)
            return;
          v1 = [(y12 - fb) / fm, y12];
        } else {
          if (!v0)
            v0 = [(y12 - fb) / fm, y12];
          else if (v0[1] < y02)
            return;
          v1 = [(y02 - fb) / fm, y02];
        }
      } else {
        if (ly < ry) {
          if (!v0)
            v0 = [x02, fm * x02 + fb];
          else if (v0[0] >= x12)
            return;
          v1 = [x12, fm * x12 + fb];
        } else {
          if (!v0)
            v0 = [x12, fm * x12 + fb];
          else if (v0[0] < x02)
            return;
          v1 = [x02, fm * x02 + fb];
        }
      }
    }
    edge[0] = v0;
    edge[1] = v1;
    return true;
  }
  function clipEdges(x02, y02, x12, y12) {
    var i = edges.length, edge;
    while (i--) {
      if (!connectEdge(edge = edges[i], x02, y02, x12, y12) || !clipEdge(edge, x02, y02, x12, y12) || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon$4 || Math.abs(edge[0][1] - edge[1][1]) > epsilon$4)) {
        delete edges[i];
      }
    }
  }
  function createCell(site) {
    return cells[site.index] = {
      site,
      halfedges: []
    };
  }
  function cellHalfedgeAngle(cell, edge) {
    var site = cell.site, va = edge.left, vb = edge.right;
    if (site === vb)
      vb = va, va = site;
    if (vb)
      return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
    if (site === va)
      va = edge[1], vb = edge[0];
    else
      va = edge[0], vb = edge[1];
    return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
  }
  function cellHalfedgeStart(cell, edge) {
    return edge[+(edge.left !== cell.site)];
  }
  function cellHalfedgeEnd(cell, edge) {
    return edge[+(edge.left === cell.site)];
  }
  function sortCellHalfedges() {
    for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
      if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
        var index2 = new Array(m), array2 = new Array(m);
        for (j = 0; j < m; ++j)
          index2[j] = j, array2[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
        index2.sort(function(i2, j2) {
          return array2[j2] - array2[i2];
        });
        for (j = 0; j < m; ++j)
          array2[j] = halfedges[index2[j]];
        for (j = 0; j < m; ++j)
          halfedges[j] = array2[j];
      }
    }
  }
  function clipCells(x02, y02, x12, y12) {
    var nCells = cells.length, iCell, cell, site, iHalfedge, halfedges, nHalfedges, start2, startX, startY, end2, endX, endY, cover = true;
    for (iCell = 0; iCell < nCells; ++iCell) {
      if (cell = cells[iCell]) {
        site = cell.site;
        halfedges = cell.halfedges;
        iHalfedge = halfedges.length;
        while (iHalfedge--) {
          if (!edges[halfedges[iHalfedge]]) {
            halfedges.splice(iHalfedge, 1);
          }
        }
        iHalfedge = 0, nHalfedges = halfedges.length;
        while (iHalfedge < nHalfedges) {
          end2 = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end2[0], endY = end2[1];
          start2 = cellHalfedgeStart(
            cell,
            edges[halfedges[++iHalfedge % nHalfedges]]
          ), startX = start2[0], startY = start2[1];
          if (Math.abs(endX - startX) > epsilon$4 || Math.abs(endY - startY) > epsilon$4) {
            halfedges.splice(
              iHalfedge,
              0,
              edges.push(
                createBorderEdge(
                  site,
                  end2,
                  Math.abs(endX - x02) < epsilon$4 && y12 - endY > epsilon$4 ? [x02, Math.abs(startX - x02) < epsilon$4 ? startY : y12] : Math.abs(endY - y12) < epsilon$4 && x12 - endX > epsilon$4 ? [Math.abs(startY - y12) < epsilon$4 ? startX : x12, y12] : Math.abs(endX - x12) < epsilon$4 && endY - y02 > epsilon$4 ? [x12, Math.abs(startX - x12) < epsilon$4 ? startY : y02] : Math.abs(endY - y02) < epsilon$4 && endX - x02 > epsilon$4 ? [Math.abs(startY - y02) < epsilon$4 ? startX : x02, y02] : null
                )
              ) - 1
            );
            ++nHalfedges;
          }
        }
        if (nHalfedges)
          cover = false;
      }
    }
    if (cover) {
      var dx, dy, d2, dc = Infinity;
      for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
        if (cell = cells[iCell]) {
          site = cell.site;
          dx = site[0] - x02;
          dy = site[1] - y02;
          d2 = dx * dx + dy * dy;
          if (d2 < dc)
            dc = d2, cover = cell;
        }
      }
      if (cover) {
        var v00 = [x02, y02], v01 = [x02, y12], v11 = [x12, y12], v10 = [x12, y02];
        cover.halfedges.push(
          edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1,
          edges.push(createBorderEdge(site, v01, v11)) - 1,
          edges.push(createBorderEdge(site, v11, v10)) - 1,
          edges.push(createBorderEdge(site, v10, v00)) - 1
        );
      }
    }
    for (iCell = 0; iCell < nCells; ++iCell) {
      if (cell = cells[iCell]) {
        if (!cell.halfedges.length) {
          delete cells[iCell];
        }
      }
    }
  }
  var circlePool = [];
  var firstCircle;
  function Circle() {
    RedBlackNode(this);
    this.x = this.y = this.arc = this.site = this.cy = null;
  }
  function attachCircle(arc2) {
    var lArc = arc2.P, rArc = arc2.N;
    if (!lArc || !rArc)
      return;
    var lSite = lArc.site, cSite = arc2.site, rSite = rArc.site;
    if (lSite === rSite)
      return;
    var bx = cSite[0], by = cSite[1], ax = lSite[0] - bx, ay = lSite[1] - by, cx = rSite[0] - bx, cy = rSite[1] - by;
    var d = 2 * (ax * cy - ay * cx);
    if (d >= -epsilon2$2)
      return;
    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x2 = (cy * ha - ay * hc) / d, y2 = (ax * hc - cx * ha) / d;
    var circle2 = circlePool.pop() || new Circle();
    circle2.arc = arc2;
    circle2.site = cSite;
    circle2.x = x2 + bx;
    circle2.y = (circle2.cy = y2 + by) + Math.sqrt(x2 * x2 + y2 * y2);
    arc2.circle = circle2;
    var before = null, node = circles._;
    while (node) {
      if (circle2.y < node.y || circle2.y === node.y && circle2.x <= node.x) {
        if (node.L)
          node = node.L;
        else {
          before = node.P;
          break;
        }
      } else {
        if (node.R)
          node = node.R;
        else {
          before = node;
          break;
        }
      }
    }
    circles.insert(before, circle2);
    if (!before)
      firstCircle = circle2;
  }
  function detachCircle(arc2) {
    var circle2 = arc2.circle;
    if (circle2) {
      if (!circle2.P)
        firstCircle = circle2.N;
      circles.remove(circle2);
      circlePool.push(circle2);
      RedBlackNode(circle2);
      arc2.circle = null;
    }
  }
  var beachPool = [];
  function Beach() {
    RedBlackNode(this);
    this.edge = this.site = this.circle = null;
  }
  function createBeach(site) {
    var beach = beachPool.pop() || new Beach();
    beach.site = site;
    return beach;
  }
  function detachBeach(beach) {
    detachCircle(beach);
    beaches.remove(beach);
    beachPool.push(beach);
    RedBlackNode(beach);
  }
  function removeBeach(beach) {
    var circle2 = beach.circle, x2 = circle2.x, y2 = circle2.cy, vertex = [x2, y2], previous = beach.P, next = beach.N, disappearing = [beach];
    detachBeach(beach);
    var lArc = previous;
    while (lArc.circle && Math.abs(x2 - lArc.circle.x) < epsilon$4 && Math.abs(y2 - lArc.circle.cy) < epsilon$4) {
      previous = lArc.P;
      disappearing.unshift(lArc);
      detachBeach(lArc);
      lArc = previous;
    }
    disappearing.unshift(lArc);
    detachCircle(lArc);
    var rArc = next;
    while (rArc.circle && Math.abs(x2 - rArc.circle.x) < epsilon$4 && Math.abs(y2 - rArc.circle.cy) < epsilon$4) {
      next = rArc.N;
      disappearing.push(rArc);
      detachBeach(rArc);
      rArc = next;
    }
    disappearing.push(rArc);
    detachCircle(rArc);
    var nArcs = disappearing.length, iArc;
    for (iArc = 1; iArc < nArcs; ++iArc) {
      rArc = disappearing[iArc];
      lArc = disappearing[iArc - 1];
      setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
    }
    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);
    attachCircle(lArc);
    attachCircle(rArc);
  }
  function addBeach(site) {
    var x2 = site[0], directrix = site[1], lArc, rArc, dxl, dxr, node = beaches._;
    while (node) {
      dxl = leftBreakPoint(node, directrix) - x2;
      if (dxl > epsilon$4)
        node = node.L;
      else {
        dxr = x2 - rightBreakPoint(node, directrix);
        if (dxr > epsilon$4) {
          if (!node.R) {
            lArc = node;
            break;
          }
          node = node.R;
        } else {
          if (dxl > -epsilon$4) {
            lArc = node.P;
            rArc = node;
          } else if (dxr > -epsilon$4) {
            lArc = node;
            rArc = node.N;
          } else {
            lArc = rArc = node;
          }
          break;
        }
      }
    }
    createCell(site);
    var newArc = createBeach(site);
    beaches.insert(lArc, newArc);
    if (!lArc && !rArc)
      return;
    if (lArc === rArc) {
      detachCircle(lArc);
      rArc = createBeach(lArc.site);
      beaches.insert(newArc, rArc);
      newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
      attachCircle(lArc);
      attachCircle(rArc);
      return;
    }
    if (!rArc) {
      newArc.edge = createEdge(lArc.site, newArc.site);
      return;
    }
    detachCircle(lArc);
    detachCircle(rArc);
    var lSite = lArc.site, ax = lSite[0], ay = lSite[1], bx = site[0] - ax, by = site[1] - ay, rSite = rArc.site, cx = rSite[0] - ax, cy = rSite[1] - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];
    setEdgeEnd(rArc.edge, lSite, rSite, vertex);
    newArc.edge = createEdge(lSite, site, null, vertex);
    rArc.edge = createEdge(site, rSite, null, vertex);
    attachCircle(lArc);
    attachCircle(rArc);
  }
  function leftBreakPoint(arc2, directrix) {
    var site = arc2.site, rfocx = site[0], rfocy = site[1], pby2 = rfocy - directrix;
    if (!pby2)
      return rfocx;
    var lArc = arc2.P;
    if (!lArc)
      return -Infinity;
    site = lArc.site;
    var lfocx = site[0], lfocy = site[1], plby2 = lfocy - directrix;
    if (!plby2)
      return lfocx;
    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
    if (aby2)
      return (-b + Math.sqrt(
        b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2)
      )) / aby2 + rfocx;
    return (rfocx + lfocx) / 2;
  }
  function rightBreakPoint(arc2, directrix) {
    var rArc = arc2.N;
    if (rArc)
      return leftBreakPoint(rArc, directrix);
    var site = arc2.site;
    return site[1] === directrix ? site[0] : Infinity;
  }
  var epsilon$4 = 1e-6;
  var epsilon2$2 = 1e-12;
  var beaches;
  var cells;
  var circles;
  var edges;
  function triangleArea(a2, b, c2) {
    return (a2[0] - c2[0]) * (b[1] - a2[1]) - (a2[0] - b[0]) * (c2[1] - a2[1]);
  }
  function lexicographic(a2, b) {
    return b[1] - a2[1] || b[0] - a2[0];
  }
  function Diagram(sites, extent2) {
    var site = sites.sort(lexicographic).pop(), x2, y2, circle2;
    edges = [];
    cells = new Array(sites.length);
    beaches = new RedBlackTree();
    circles = new RedBlackTree();
    while (true) {
      circle2 = firstCircle;
      if (site && (!circle2 || site[1] < circle2.y || site[1] === circle2.y && site[0] < circle2.x)) {
        if (site[0] !== x2 || site[1] !== y2) {
          addBeach(site);
          x2 = site[0], y2 = site[1];
        }
        site = sites.pop();
      } else if (circle2) {
        removeBeach(circle2.arc);
      } else {
        break;
      }
    }
    sortCellHalfedges();
    if (extent2) {
      var x02 = +extent2[0][0], y02 = +extent2[0][1], x12 = +extent2[1][0], y12 = +extent2[1][1];
      clipEdges(x02, y02, x12, y12);
      clipCells(x02, y02, x12, y12);
    }
    this.edges = edges;
    this.cells = cells;
    beaches = circles = edges = cells = null;
  }
  Diagram.prototype = {
    constructor: Diagram,
    polygons: function() {
      var edges2 = this.edges;
      return this.cells.map(function(cell) {
        var polygon = cell.halfedges.map(function(i) {
          return cellHalfedgeStart(cell, edges2[i]);
        });
        polygon.data = cell.site.data;
        return polygon;
      });
    },
    triangles: function() {
      var triangles = [], edges2 = this.edges;
      this.cells.forEach(function(cell, i) {
        if (!(m = (halfedges = cell.halfedges).length))
          return;
        var site = cell.site, halfedges, j = -1, m, s0, e1 = edges2[halfedges[m - 1]], s1 = e1.left === site ? e1.right : e1.left;
        while (++j < m) {
          s0 = s1;
          e1 = edges2[halfedges[j]];
          s1 = e1.left === site ? e1.right : e1.left;
          if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
            triangles.push([site.data, s0.data, s1.data]);
          }
        }
      });
      return triangles;
    },
    links: function() {
      return this.edges.filter(function(edge) {
        return edge.right;
      }).map(function(edge) {
        return {
          source: edge.left.data,
          target: edge.right.data
        };
      });
    },
    find: function(x2, y2, radius) {
      var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;
      while (!(cell = that.cells[i1]))
        if (++i1 >= n)
          return null;
      var dx = x2 - cell.site[0], dy = y2 - cell.site[1], d2 = dx * dx + dy * dy;
      do {
        cell = that.cells[i0 = i1], i1 = null;
        cell.halfedges.forEach(function(e) {
          var edge = that.edges[e], v = edge.left;
          if ((v === cell.site || !v) && !(v = edge.right))
            return;
          var vx = x2 - v[0], vy = y2 - v[1], v2 = vx * vx + vy * vy;
          if (v2 < d2)
            d2 = v2, i1 = v.index;
        });
      } while (i1 !== null);
      that._found = i0;
      return radius == null || d2 <= radius * radius ? cell.site : null;
    }
  };
  var voronoi = function() {
    var x$$1 = x$4, y$$1 = y$4, extent2 = null;
    function voronoi2(data) {
      return new Diagram(
        data.map(function(d, i) {
          var s2 = [
            Math.round(x$$1(d, i, data) / epsilon$4) * epsilon$4,
            Math.round(y$$1(d, i, data) / epsilon$4) * epsilon$4
          ];
          s2.index = i;
          s2.data = d;
          return s2;
        }),
        extent2
      );
    }
    voronoi2.polygons = function(data) {
      return voronoi2(data).polygons();
    };
    voronoi2.links = function(data) {
      return voronoi2(data).links();
    };
    voronoi2.triangles = function(data) {
      return voronoi2(data).triangles();
    };
    voronoi2.x = function(_) {
      return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$11(+_), voronoi2) : x$$1;
    };
    voronoi2.y = function(_) {
      return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$11(+_), voronoi2) : y$$1;
    };
    voronoi2.extent = function(_) {
      return arguments.length ? (extent2 = _ == null ? null : [
        [+_[0][0], +_[0][1]],
        [+_[1][0], +_[1][1]]
      ], voronoi2) : extent2 && [
        [extent2[0][0], extent2[0][1]],
        [extent2[1][0], extent2[1][1]]
      ];
    };
    voronoi2.size = function(_) {
      return arguments.length ? (extent2 = _ == null ? null : [
        [0, 0],
        [+_[0], +_[1]]
      ], voronoi2) : extent2 && [extent2[1][0] - extent2[0][0], extent2[1][1] - extent2[0][1]];
    };
    return voronoi2;
  };
  var constant$12 = function(x2) {
    return function() {
      return x2;
    };
  };
  function ZoomEvent(target, type2, transform2) {
    this.target = target;
    this.type = type2;
    this.transform = transform2;
  }
  function Transform(k2, x2, y2) {
    this.k = k2;
    this.x = x2;
    this.y = y2;
  }
  Transform.prototype = {
    constructor: Transform,
    scale: function(k2) {
      return k2 === 1 ? this : new Transform(this.k * k2, this.x, this.y);
    },
    translate: function(x2, y2) {
      return x2 === 0 & y2 === 0 ? this : new Transform(this.k, this.x + this.k * x2, this.y + this.k * y2);
    },
    apply: function(point2) {
      return [point2[0] * this.k + this.x, point2[1] * this.k + this.y];
    },
    applyX: function(x2) {
      return x2 * this.k + this.x;
    },
    applyY: function(y2) {
      return y2 * this.k + this.y;
    },
    invert: function(location) {
      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
    },
    invertX: function(x2) {
      return (x2 - this.x) / this.k;
    },
    invertY: function(y2) {
      return (y2 - this.y) / this.k;
    },
    rescaleX: function(x2) {
      return x2.copy().domain(x2.range().map(this.invertX, this).map(x2.invert, x2));
    },
    rescaleY: function(y2) {
      return y2.copy().domain(y2.range().map(this.invertY, this).map(y2.invert, y2));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var identity$8 = new Transform(1, 0, 0);
  transform$1.prototype = Transform.prototype;
  function transform$1(node) {
    return node.__zoom || identity$8;
  }
  function nopropagation$2() {
    exports2.event.stopImmediatePropagation();
  }
  var noevent$2 = function() {
    exports2.event.preventDefault();
    exports2.event.stopImmediatePropagation();
  };
  function defaultFilter$2() {
    return !exports2.event.button;
  }
  function defaultExtent$1() {
    var e = this, w, h;
    if (e instanceof SVGElement) {
      e = e.ownerSVGElement || e;
      w = e.width.baseVal.value;
      h = e.height.baseVal.value;
    } else {
      w = e.clientWidth;
      h = e.clientHeight;
    }
    return [
      [0, 0],
      [w, h]
    ];
  }
  function defaultTransform() {
    return this.__zoom || identity$8;
  }
  function defaultWheelDelta() {
    return -exports2.event.deltaY * (exports2.event.deltaMode ? 120 : 1) / 500;
  }
  function defaultTouchable$1() {
    return "ontouchstart" in this;
  }
  function defaultConstrain(transform$$1, extent2, translateExtent) {
    var dx0 = transform$$1.invertX(extent2[0][0]) - translateExtent[0][0], dx1 = transform$$1.invertX(extent2[1][0]) - translateExtent[1][0], dy0 = transform$$1.invertY(extent2[0][1]) - translateExtent[0][1], dy1 = transform$$1.invertY(extent2[1][1]) - translateExtent[1][1];
    return transform$$1.translate(
      dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
      dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
    );
  }
  var zoom = function() {
    var filter = defaultFilter$2, extent2 = defaultExtent$1, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable$1, scaleExtent = [0, Infinity], translateExtent = [
      [-Infinity, -Infinity],
      [Infinity, Infinity]
    ], duration = 250, interpolate2 = interpolateZoom, gestures = [], listeners = dispatch("start", "zoom", "end"), touchstarting, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0;
    function zoom2(selection2) {
      selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom2.transform = function(collection, transform$$1) {
      var selection2 = collection.selection ? collection.selection() : collection;
      selection2.property("__zoom", defaultTransform);
      if (collection !== selection2) {
        schedule2(collection, transform$$1);
      } else {
        selection2.interrupt().each(function() {
          gesture(this, arguments).start().zoom(
            null,
            typeof transform$$1 === "function" ? transform$$1.apply(this, arguments) : transform$$1
          ).end();
        });
      }
    };
    zoom2.scaleBy = function(selection2, k2) {
      zoom2.scaleTo(selection2, function() {
        var k0 = this.__zoom.k, k1 = typeof k2 === "function" ? k2.apply(this, arguments) : k2;
        return k0 * k1;
      });
    };
    zoom2.scaleTo = function(selection2, k2) {
      zoom2.transform(selection2, function() {
        var e = extent2.apply(this, arguments), t02 = this.__zoom, p02 = centroid2(e), p1 = t02.invert(p02), k1 = typeof k2 === "function" ? k2.apply(this, arguments) : k2;
        return constrain(translate(scale(t02, k1), p02, p1), e, translateExtent);
      });
    };
    zoom2.translateBy = function(selection2, x2, y2) {
      zoom2.transform(selection2, function() {
        return constrain(
          this.__zoom.translate(
            typeof x2 === "function" ? x2.apply(this, arguments) : x2,
            typeof y2 === "function" ? y2.apply(this, arguments) : y2
          ),
          extent2.apply(this, arguments),
          translateExtent
        );
      });
    };
    zoom2.translateTo = function(selection2, x2, y2) {
      zoom2.transform(selection2, function() {
        var e = extent2.apply(this, arguments), t = this.__zoom, p = centroid2(e);
        return constrain(
          identity$8.translate(p[0], p[1]).scale(t.k).translate(
            typeof x2 === "function" ? -x2.apply(this, arguments) : -x2,
            typeof y2 === "function" ? -y2.apply(this, arguments) : -y2
          ),
          e,
          translateExtent
        );
      });
    };
    function scale(transform$$1, k2) {
      k2 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k2));
      return k2 === transform$$1.k ? transform$$1 : new Transform(k2, transform$$1.x, transform$$1.y);
    }
    function translate(transform$$1, p02, p1) {
      var x2 = p02[0] - p1[0] * transform$$1.k, y2 = p02[1] - p1[1] * transform$$1.k;
      return x2 === transform$$1.x && y2 === transform$$1.y ? transform$$1 : new Transform(transform$$1.k, x2, y2);
    }
    function centroid2(extent3) {
      return [
        (+extent3[0][0] + +extent3[1][0]) / 2,
        (+extent3[0][1] + +extent3[1][1]) / 2
      ];
    }
    function schedule2(transition2, transform$$1, center2) {
      transition2.on("start.zoom", function() {
        gesture(this, arguments).start();
      }).on("interrupt.zoom end.zoom", function() {
        gesture(this, arguments).end();
      }).tween("zoom", function() {
        var that = this, args = arguments, g = gesture(that, args), e = extent2.apply(that, args), p = center2 || centroid2(e), w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a2 = that.__zoom, b = typeof transform$$1 === "function" ? transform$$1.apply(that, args) : transform$$1, i = interpolate2(
          a2.invert(p).concat(w / a2.k),
          b.invert(p).concat(w / b.k)
        );
        return function(t) {
          if (t === 1)
            t = b;
          else {
            var l = i(t), k2 = w / l[2];
            t = new Transform(k2, p[0] - l[0] * k2, p[1] - l[1] * k2);
          }
          g.zoom(null, t);
        };
      });
    }
    function gesture(that, args) {
      for (var i = 0, n = gestures.length, g; i < n; ++i) {
        if ((g = gestures[i]).that === that) {
          return g;
        }
      }
      return new Gesture(that, args);
    }
    function Gesture(that, args) {
      this.that = that;
      this.args = args;
      this.index = -1;
      this.active = 0;
      this.extent = extent2.apply(that, args);
    }
    Gesture.prototype = {
      start: function() {
        if (++this.active === 1) {
          this.index = gestures.push(this) - 1;
          this.emit("start");
        }
        return this;
      },
      zoom: function(key, transform$$1) {
        if (this.mouse && key !== "mouse")
          this.mouse[1] = transform$$1.invert(this.mouse[0]);
        if (this.touch0 && key !== "touch")
          this.touch0[1] = transform$$1.invert(this.touch0[0]);
        if (this.touch1 && key !== "touch")
          this.touch1[1] = transform$$1.invert(this.touch1[0]);
        this.that.__zoom = transform$$1;
        this.emit("zoom");
        return this;
      },
      end: function() {
        if (--this.active === 0) {
          gestures.splice(this.index, 1);
          this.index = -1;
          this.emit("end");
        }
        return this;
      },
      emit: function(type2) {
        customEvent(
          new ZoomEvent(zoom2, type2, this.that.__zoom),
          listeners.apply,
          listeners,
          [type2, this.that, this.args]
        );
      }
    };
    function wheeled() {
      if (!filter.apply(this, arguments))
        return;
      var g = gesture(this, arguments), t = this.__zoom, k2 = Math.max(
        scaleExtent[0],
        Math.min(
          scaleExtent[1],
          t.k * Math.pow(2, wheelDelta.apply(this, arguments))
        )
      ), p = mouse(this);
      if (g.wheel) {
        if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
          g.mouse[1] = t.invert(g.mouse[0] = p);
        }
        clearTimeout(g.wheel);
      } else if (t.k === k2)
        return;
      else {
        g.mouse = [p, t.invert(p)];
        interrupt(this);
        g.start();
      }
      noevent$2();
      g.wheel = setTimeout(wheelidled, wheelDelay);
      g.zoom(
        "mouse",
        constrain(
          translate(scale(t, k2), g.mouse[0], g.mouse[1]),
          g.extent,
          translateExtent
        )
      );
      function wheelidled() {
        g.wheel = null;
        g.end();
      }
    }
    function mousedowned() {
      if (touchending || !filter.apply(this, arguments))
        return;
      var g = gesture(this, arguments), v = select(exports2.event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = mouse(this), x02 = exports2.event.clientX, y02 = exports2.event.clientY;
      dragDisable(exports2.event.view);
      nopropagation$2();
      g.mouse = [p, this.__zoom.invert(p)];
      interrupt(this);
      g.start();
      function mousemoved() {
        noevent$2();
        if (!g.moved) {
          var dx = exports2.event.clientX - x02, dy = exports2.event.clientY - y02;
          g.moved = dx * dx + dy * dy > clickDistance2;
        }
        g.zoom(
          "mouse",
          constrain(
            translate(g.that.__zoom, g.mouse[0] = mouse(g.that), g.mouse[1]),
            g.extent,
            translateExtent
          )
        );
      }
      function mouseupped() {
        v.on("mousemove.zoom mouseup.zoom", null);
        yesdrag(exports2.event.view, g.moved);
        noevent$2();
        g.end();
      }
    }
    function dblclicked() {
      if (!filter.apply(this, arguments))
        return;
      var t02 = this.__zoom, p02 = mouse(this), p1 = t02.invert(p02), k1 = t02.k * (exports2.event.shiftKey ? 0.5 : 2), t12 = constrain(
        translate(scale(t02, k1), p02, p1),
        extent2.apply(this, arguments),
        translateExtent
      );
      noevent$2();
      if (duration > 0)
        select(this).transition().duration(duration).call(schedule2, t12, p02);
      else
        select(this).call(zoom2.transform, t12);
    }
    function touchstarted() {
      if (!filter.apply(this, arguments))
        return;
      var g = gesture(this, arguments), touches2 = exports2.event.changedTouches, started, n = touches2.length, i, t, p;
      nopropagation$2();
      for (i = 0; i < n; ++i) {
        t = touches2[i], p = touch(this, touches2, t.identifier);
        p = [p, this.__zoom.invert(p), t.identifier];
        if (!g.touch0)
          g.touch0 = p, started = true;
        else if (!g.touch1)
          g.touch1 = p;
      }
      if (touchstarting) {
        touchstarting = clearTimeout(touchstarting);
        if (!g.touch1) {
          g.end();
          p = select(this).on("dblclick.zoom");
          if (p)
            p.apply(this, arguments);
          return;
        }
      }
      if (started) {
        touchstarting = setTimeout(function() {
          touchstarting = null;
        }, touchDelay);
        interrupt(this);
        g.start();
      }
    }
    function touchmoved() {
      var g = gesture(this, arguments), touches2 = exports2.event.changedTouches, n = touches2.length, i, t, p, l;
      noevent$2();
      if (touchstarting)
        touchstarting = clearTimeout(touchstarting);
      for (i = 0; i < n; ++i) {
        t = touches2[i], p = touch(this, touches2, t.identifier);
        if (g.touch0 && g.touch0[2] === t.identifier)
          g.touch0[0] = p;
        else if (g.touch1 && g.touch1[2] === t.identifier)
          g.touch1[0] = p;
      }
      t = g.that.__zoom;
      if (g.touch1) {
        var p02 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p02[0]) * dp + (dp = p1[1] - p02[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
        t = scale(t, Math.sqrt(dp / dl));
        p = [(p02[0] + p1[0]) / 2, (p02[1] + p1[1]) / 2];
        l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
      } else if (g.touch0)
        p = g.touch0[0], l = g.touch0[1];
      else
        return;
      g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended() {
      var g = gesture(this, arguments), touches2 = exports2.event.changedTouches, n = touches2.length, i, t;
      nopropagation$2();
      if (touchending)
        clearTimeout(touchending);
      touchending = setTimeout(function() {
        touchending = null;
      }, touchDelay);
      for (i = 0; i < n; ++i) {
        t = touches2[i];
        if (g.touch0 && g.touch0[2] === t.identifier)
          delete g.touch0;
        else if (g.touch1 && g.touch1[2] === t.identifier)
          delete g.touch1;
      }
      if (g.touch1 && !g.touch0)
        g.touch0 = g.touch1, delete g.touch1;
      if (g.touch0)
        g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else
        g.end();
    }
    zoom2.wheelDelta = function(_) {
      return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant$12(+_), zoom2) : wheelDelta;
    };
    zoom2.filter = function(_) {
      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$12(!!_), zoom2) : filter;
    };
    zoom2.touchable = function(_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$12(!!_), zoom2) : touchable;
    };
    zoom2.extent = function(_) {
      return arguments.length ? (extent2 = typeof _ === "function" ? _ : constant$12([
        [+_[0][0], +_[0][1]],
        [+_[1][0], +_[1][1]]
      ]), zoom2) : extent2;
    };
    zoom2.scaleExtent = function(_) {
      return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom2) : [scaleExtent[0], scaleExtent[1]];
    };
    zoom2.translateExtent = function(_) {
      return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom2) : [
        [translateExtent[0][0], translateExtent[0][1]],
        [translateExtent[1][0], translateExtent[1][1]]
      ];
    };
    zoom2.constrain = function(_) {
      return arguments.length ? (constrain = _, zoom2) : constrain;
    };
    zoom2.duration = function(_) {
      return arguments.length ? (duration = +_, zoom2) : duration;
    };
    zoom2.interpolate = function(_) {
      return arguments.length ? (interpolate2 = _, zoom2) : interpolate2;
    };
    zoom2.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? zoom2 : value;
    };
    zoom2.clickDistance = function(_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom2) : Math.sqrt(clickDistance2);
    };
    return zoom2;
  };
  exports2.version = version;
  exports2.bisect = bisectRight;
  exports2.bisectRight = bisectRight;
  exports2.bisectLeft = bisectLeft;
  exports2.ascending = ascending;
  exports2.bisector = bisector;
  exports2.cross = cross;
  exports2.descending = descending;
  exports2.deviation = deviation;
  exports2.extent = extent;
  exports2.histogram = histogram;
  exports2.thresholdFreedmanDiaconis = freedmanDiaconis;
  exports2.thresholdScott = scott;
  exports2.thresholdSturges = sturges;
  exports2.max = max;
  exports2.mean = mean;
  exports2.median = median;
  exports2.merge = merge;
  exports2.min = min;
  exports2.pairs = pairs;
  exports2.permute = permute;
  exports2.quantile = threshold;
  exports2.range = sequence;
  exports2.scan = scan;
  exports2.shuffle = shuffle;
  exports2.sum = sum;
  exports2.ticks = ticks;
  exports2.tickIncrement = tickIncrement;
  exports2.tickStep = tickStep;
  exports2.transpose = transpose;
  exports2.variance = variance;
  exports2.zip = zip;
  exports2.axisTop = axisTop;
  exports2.axisRight = axisRight;
  exports2.axisBottom = axisBottom;
  exports2.axisLeft = axisLeft;
  exports2.brush = brush;
  exports2.brushX = brushX;
  exports2.brushY = brushY;
  exports2.brushSelection = brushSelection;
  exports2.chord = chord;
  exports2.ribbon = ribbon;
  exports2.nest = nest;
  exports2.set = set$2;
  exports2.map = map$1;
  exports2.keys = keys;
  exports2.values = values;
  exports2.entries = entries;
  exports2.color = color;
  exports2.rgb = rgb;
  exports2.hsl = hsl;
  exports2.lab = lab;
  exports2.hcl = hcl;
  exports2.cubehelix = cubehelix;
  exports2.dispatch = dispatch;
  exports2.drag = drag;
  exports2.dragDisable = dragDisable;
  exports2.dragEnable = yesdrag;
  exports2.dsvFormat = dsv;
  exports2.csvParse = csvParse;
  exports2.csvParseRows = csvParseRows;
  exports2.csvFormat = csvFormat;
  exports2.csvFormatRows = csvFormatRows;
  exports2.tsvParse = tsvParse;
  exports2.tsvParseRows = tsvParseRows;
  exports2.tsvFormat = tsvFormat;
  exports2.tsvFormatRows = tsvFormatRows;
  exports2.easeLinear = linear$1;
  exports2.easeQuad = quadInOut;
  exports2.easeQuadIn = quadIn;
  exports2.easeQuadOut = quadOut;
  exports2.easeQuadInOut = quadInOut;
  exports2.easeCubic = cubicInOut;
  exports2.easeCubicIn = cubicIn;
  exports2.easeCubicOut = cubicOut;
  exports2.easeCubicInOut = cubicInOut;
  exports2.easePoly = polyInOut;
  exports2.easePolyIn = polyIn;
  exports2.easePolyOut = polyOut;
  exports2.easePolyInOut = polyInOut;
  exports2.easeSin = sinInOut;
  exports2.easeSinIn = sinIn;
  exports2.easeSinOut = sinOut;
  exports2.easeSinInOut = sinInOut;
  exports2.easeExp = expInOut;
  exports2.easeExpIn = expIn;
  exports2.easeExpOut = expOut;
  exports2.easeExpInOut = expInOut;
  exports2.easeCircle = circleInOut;
  exports2.easeCircleIn = circleIn;
  exports2.easeCircleOut = circleOut;
  exports2.easeCircleInOut = circleInOut;
  exports2.easeBounce = bounceOut;
  exports2.easeBounceIn = bounceIn;
  exports2.easeBounceOut = bounceOut;
  exports2.easeBounceInOut = bounceInOut;
  exports2.easeBack = backInOut;
  exports2.easeBackIn = backIn;
  exports2.easeBackOut = backOut;
  exports2.easeBackInOut = backInOut;
  exports2.easeElastic = elasticOut;
  exports2.easeElasticIn = elasticIn;
  exports2.easeElasticOut = elasticOut;
  exports2.easeElasticInOut = elasticInOut;
  exports2.forceCenter = center$1;
  exports2.forceCollide = collide;
  exports2.forceLink = link;
  exports2.forceManyBody = manyBody;
  exports2.forceRadial = radial;
  exports2.forceSimulation = simulation;
  exports2.forceX = x$2;
  exports2.forceY = y$2;
  exports2.formatDefaultLocale = defaultLocale;
  exports2.formatLocale = formatLocale;
  exports2.formatSpecifier = formatSpecifier;
  exports2.precisionFixed = precisionFixed;
  exports2.precisionPrefix = precisionPrefix;
  exports2.precisionRound = precisionRound;
  exports2.geoArea = area;
  exports2.geoBounds = bounds;
  exports2.geoCentroid = centroid;
  exports2.geoCircle = circle;
  exports2.geoClipAntimeridian = clipAntimeridian;
  exports2.geoClipCircle = clipCircle;
  exports2.geoClipExtent = extent$1;
  exports2.geoClipRectangle = clipRectangle;
  exports2.geoContains = contains;
  exports2.geoDistance = distance;
  exports2.geoGraticule = graticule;
  exports2.geoGraticule10 = graticule10;
  exports2.geoInterpolate = interpolate$1;
  exports2.geoLength = length$1;
  exports2.geoPath = index$1;
  exports2.geoAlbers = albers;
  exports2.geoAlbersUsa = albersUsa;
  exports2.geoAzimuthalEqualArea = azimuthalEqualArea;
  exports2.geoAzimuthalEqualAreaRaw = azimuthalEqualAreaRaw;
  exports2.geoAzimuthalEquidistant = azimuthalEquidistant;
  exports2.geoAzimuthalEquidistantRaw = azimuthalEquidistantRaw;
  exports2.geoConicConformal = conicConformal;
  exports2.geoConicConformalRaw = conicConformalRaw;
  exports2.geoConicEqualArea = conicEqualArea;
  exports2.geoConicEqualAreaRaw = conicEqualAreaRaw;
  exports2.geoConicEquidistant = conicEquidistant;
  exports2.geoConicEquidistantRaw = conicEquidistantRaw;
  exports2.geoEquirectangular = equirectangular;
  exports2.geoEquirectangularRaw = equirectangularRaw;
  exports2.geoGnomonic = gnomonic;
  exports2.geoGnomonicRaw = gnomonicRaw;
  exports2.geoIdentity = identity$5;
  exports2.geoProjection = projection;
  exports2.geoProjectionMutator = projectionMutator;
  exports2.geoMercator = mercator;
  exports2.geoMercatorRaw = mercatorRaw;
  exports2.geoNaturalEarth1 = naturalEarth1;
  exports2.geoNaturalEarth1Raw = naturalEarth1Raw;
  exports2.geoOrthographic = orthographic;
  exports2.geoOrthographicRaw = orthographicRaw;
  exports2.geoStereographic = stereographic;
  exports2.geoStereographicRaw = stereographicRaw;
  exports2.geoTransverseMercator = transverseMercator;
  exports2.geoTransverseMercatorRaw = transverseMercatorRaw;
  exports2.geoRotation = rotation;
  exports2.geoStream = geoStream;
  exports2.geoTransform = transform;
  exports2.cluster = cluster;
  exports2.hierarchy = hierarchy;
  exports2.pack = index$2;
  exports2.packSiblings = siblings;
  exports2.packEnclose = enclose;
  exports2.partition = partition;
  exports2.stratify = stratify;
  exports2.tree = tree;
  exports2.treemap = index$3;
  exports2.treemapBinary = binary;
  exports2.treemapDice = treemapDice;
  exports2.treemapSlice = treemapSlice;
  exports2.treemapSliceDice = sliceDice;
  exports2.treemapSquarify = squarify;
  exports2.treemapResquarify = resquarify;
  exports2.interpolate = interpolateValue;
  exports2.interpolateArray = array$1;
  exports2.interpolateBasis = basis$1;
  exports2.interpolateBasisClosed = basisClosed;
  exports2.interpolateDate = date;
  exports2.interpolateNumber = reinterpolate;
  exports2.interpolateObject = object;
  exports2.interpolateRound = interpolateRound;
  exports2.interpolateString = interpolateString;
  exports2.interpolateTransformCss = interpolateTransformCss;
  exports2.interpolateTransformSvg = interpolateTransformSvg;
  exports2.interpolateZoom = interpolateZoom;
  exports2.interpolateRgb = interpolateRgb;
  exports2.interpolateRgbBasis = rgbBasis;
  exports2.interpolateRgbBasisClosed = rgbBasisClosed;
  exports2.interpolateHsl = hsl$2;
  exports2.interpolateHslLong = hslLong;
  exports2.interpolateLab = lab$1;
  exports2.interpolateHcl = hcl$2;
  exports2.interpolateHclLong = hclLong;
  exports2.interpolateCubehelix = cubehelix$2;
  exports2.interpolateCubehelixLong = cubehelixLong;
  exports2.quantize = quantize;
  exports2.path = path;
  exports2.polygonArea = area$1;
  exports2.polygonCentroid = centroid$1;
  exports2.polygonHull = hull;
  exports2.polygonContains = contains$1;
  exports2.polygonLength = length$2;
  exports2.quadtree = quadtree;
  exports2.queue = queue;
  exports2.randomUniform = uniform;
  exports2.randomNormal = normal;
  exports2.randomLogNormal = logNormal;
  exports2.randomBates = bates;
  exports2.randomIrwinHall = irwinHall;
  exports2.randomExponential = exponential$1;
  exports2.request = request;
  exports2.html = html;
  exports2.json = json;
  exports2.text = text;
  exports2.xml = xml;
  exports2.csv = csv$1;
  exports2.tsv = tsv$1;
  exports2.scaleBand = band;
  exports2.scalePoint = point$1;
  exports2.scaleIdentity = identity$6;
  exports2.scaleLinear = linear$2;
  exports2.scaleLog = log$1;
  exports2.scaleOrdinal = ordinal;
  exports2.scaleImplicit = implicit;
  exports2.scalePow = pow$1;
  exports2.scaleSqrt = sqrt$1;
  exports2.scaleQuantile = quantile$$1;
  exports2.scaleQuantize = quantize$1;
  exports2.scaleThreshold = threshold$1;
  exports2.scaleTime = time;
  exports2.scaleUtc = utcTime;
  exports2.schemeCategory10 = category10;
  exports2.schemeCategory20b = category20b;
  exports2.schemeCategory20c = category20c;
  exports2.schemeCategory20 = category20;
  exports2.interpolateCubehelixDefault = cubehelix$3;
  exports2.interpolateRainbow = rainbow$1;
  exports2.interpolateWarm = warm;
  exports2.interpolateCool = cool;
  exports2.interpolateViridis = viridis;
  exports2.interpolateMagma = magma;
  exports2.interpolateInferno = inferno;
  exports2.interpolatePlasma = plasma;
  exports2.scaleSequential = sequential;
  exports2.creator = creator;
  exports2.local = local$1;
  exports2.matcher = matcher$1;
  exports2.mouse = mouse;
  exports2.namespace = namespace;
  exports2.namespaces = namespaces;
  exports2.clientPoint = point;
  exports2.select = select;
  exports2.selectAll = selectAll;
  exports2.selection = selection;
  exports2.selector = selector;
  exports2.selectorAll = selectorAll;
  exports2.style = styleValue;
  exports2.touch = touch;
  exports2.touches = touches;
  exports2.window = defaultView;
  exports2.customEvent = customEvent;
  exports2.arc = arc;
  exports2.area = area$2;
  exports2.line = line;
  exports2.pie = pie;
  exports2.areaRadial = areaRadial;
  exports2.radialArea = areaRadial;
  exports2.lineRadial = lineRadial$1;
  exports2.radialLine = lineRadial$1;
  exports2.pointRadial = pointRadial;
  exports2.linkHorizontal = linkHorizontal;
  exports2.linkVertical = linkVertical;
  exports2.linkRadial = linkRadial;
  exports2.symbol = symbol;
  exports2.symbols = symbols;
  exports2.symbolCircle = circle$2;
  exports2.symbolCross = cross$2;
  exports2.symbolDiamond = diamond;
  exports2.symbolSquare = square;
  exports2.symbolStar = star;
  exports2.symbolTriangle = triangle;
  exports2.symbolWye = wye;
  exports2.curveBasisClosed = basisClosed$1;
  exports2.curveBasisOpen = basisOpen;
  exports2.curveBasis = basis$2;
  exports2.curveBundle = bundle;
  exports2.curveCardinalClosed = cardinalClosed;
  exports2.curveCardinalOpen = cardinalOpen;
  exports2.curveCardinal = cardinal;
  exports2.curveCatmullRomClosed = catmullRomClosed;
  exports2.curveCatmullRomOpen = catmullRomOpen;
  exports2.curveCatmullRom = catmullRom;
  exports2.curveLinearClosed = linearClosed;
  exports2.curveLinear = curveLinear;
  exports2.curveMonotoneX = monotoneX;
  exports2.curveMonotoneY = monotoneY;
  exports2.curveNatural = natural;
  exports2.curveStep = step;
  exports2.curveStepAfter = stepAfter;
  exports2.curveStepBefore = stepBefore;
  exports2.stack = stack;
  exports2.stackOffsetExpand = expand;
  exports2.stackOffsetDiverging = diverging;
  exports2.stackOffsetNone = none$1;
  exports2.stackOffsetSilhouette = silhouette;
  exports2.stackOffsetWiggle = wiggle;
  exports2.stackOrderAscending = ascending$2;
  exports2.stackOrderDescending = descending$2;
  exports2.stackOrderInsideOut = insideOut;
  exports2.stackOrderNone = none$2;
  exports2.stackOrderReverse = reverse;
  exports2.timeInterval = newInterval;
  exports2.timeMillisecond = millisecond;
  exports2.timeMilliseconds = milliseconds;
  exports2.utcMillisecond = millisecond;
  exports2.utcMilliseconds = milliseconds;
  exports2.timeSecond = second;
  exports2.timeSeconds = seconds;
  exports2.utcSecond = second;
  exports2.utcSeconds = seconds;
  exports2.timeMinute = minute;
  exports2.timeMinutes = minutes;
  exports2.timeHour = hour;
  exports2.timeHours = hours;
  exports2.timeDay = day;
  exports2.timeDays = days;
  exports2.timeWeek = sunday;
  exports2.timeWeeks = sundays;
  exports2.timeSunday = sunday;
  exports2.timeSundays = sundays;
  exports2.timeMonday = monday;
  exports2.timeMondays = mondays;
  exports2.timeTuesday = tuesday;
  exports2.timeTuesdays = tuesdays;
  exports2.timeWednesday = wednesday;
  exports2.timeWednesdays = wednesdays;
  exports2.timeThursday = thursday;
  exports2.timeThursdays = thursdays;
  exports2.timeFriday = friday;
  exports2.timeFridays = fridays;
  exports2.timeSaturday = saturday;
  exports2.timeSaturdays = saturdays;
  exports2.timeMonth = month;
  exports2.timeMonths = months;
  exports2.timeYear = year;
  exports2.timeYears = years;
  exports2.utcMinute = utcMinute;
  exports2.utcMinutes = utcMinutes;
  exports2.utcHour = utcHour;
  exports2.utcHours = utcHours;
  exports2.utcDay = utcDay;
  exports2.utcDays = utcDays;
  exports2.utcWeek = utcSunday;
  exports2.utcWeeks = utcSundays;
  exports2.utcSunday = utcSunday;
  exports2.utcSundays = utcSundays;
  exports2.utcMonday = utcMonday;
  exports2.utcMondays = utcMondays;
  exports2.utcTuesday = utcTuesday;
  exports2.utcTuesdays = utcTuesdays;
  exports2.utcWednesday = utcWednesday;
  exports2.utcWednesdays = utcWednesdays;
  exports2.utcThursday = utcThursday;
  exports2.utcThursdays = utcThursdays;
  exports2.utcFriday = utcFriday;
  exports2.utcFridays = utcFridays;
  exports2.utcSaturday = utcSaturday;
  exports2.utcSaturdays = utcSaturdays;
  exports2.utcMonth = utcMonth;
  exports2.utcMonths = utcMonths;
  exports2.utcYear = utcYear;
  exports2.utcYears = utcYears;
  exports2.timeFormatDefaultLocale = defaultLocale$1;
  exports2.timeFormatLocale = formatLocale$1;
  exports2.isoFormat = formatIso;
  exports2.isoParse = parseIso;
  exports2.now = now;
  exports2.timer = timer;
  exports2.timerFlush = timerFlush;
  exports2.timeout = timeout$1;
  exports2.interval = interval$1;
  exports2.transition = transition;
  exports2.active = active;
  exports2.interrupt = interrupt;
  exports2.voronoi = voronoi;
  exports2.zoom = zoom;
  exports2.zoomTransform = transform$1;
  exports2.zoomIdentity = identity$8;
  Object.defineProperty(exports2, "__esModule", { value: true });
});
var jszip_minExports = requireJszip_min();
var JSZip = getDefaultExportFromCjs(jszip_minExports);
var _order = 1;
function t_xml(S) {
  const openBracket = "<";
  const openBracketCC = "<".charCodeAt(0);
  const closeBracket = ">";
  const closeBracketCC = ">".charCodeAt(0);
  const minusCC = "-".charCodeAt(0);
  const slashCC = "/".charCodeAt(0);
  const exclamationCC = "!".charCodeAt(0);
  const singleQuoteCC = "'".charCodeAt(0);
  const doubleQuoteCC = '"'.charCodeAt(0);
  const questionMarkCC = "?".charCodeAt(0);
  const nameSpacer = "\r\n	>/= ";
  let pos = 0;
  function parseChildren() {
    const children = [];
    while (S[pos]) {
      if (S.charCodeAt(pos) === openBracketCC) {
        if (S.charCodeAt(pos + 1) === slashCC) {
          pos = S.indexOf(closeBracket, pos);
          return children;
        } else if (S.charCodeAt(pos + 1) === exclamationCC) {
          if (S.charCodeAt(pos + 2) === minusCC) {
            while (!(S.charCodeAt(pos) === closeBracketCC && S.charCodeAt(pos - 1) === minusCC && S.charCodeAt(pos - 2) === minusCC && pos !== -1)) {
              pos = S.indexOf(closeBracket, pos + 1);
            }
            if (pos === -1) {
              pos = S.length;
            }
          } else {
            pos += 2;
            for (; S.charCodeAt(pos) !== closeBracketCC; pos++) {
            }
          }
          pos++;
          continue;
        } else if (S.charCodeAt(pos + 1) === questionMarkCC) {
          pos = S.indexOf(closeBracket, pos);
          pos++;
          continue;
        }
        pos++;
        let startNamePos = pos;
        for (; nameSpacer.indexOf(S[pos]) === -1; pos++) {
        }
        const nodeTagName = S.slice(startNamePos, pos);
        let attrFound = false;
        let nodeAttributes = {};
        for (; S.charCodeAt(pos) !== closeBracketCC; pos++) {
          const c = S.charCodeAt(pos);
          if (c > 64 && c < 91 || c > 96 && c < 123) {
            startNamePos = pos;
            for (; nameSpacer.indexOf(S[pos]) === -1; pos++) {
            }
            const name = S.slice(startNamePos, pos);
            let code = S.charCodeAt(pos);
            while (code !== singleQuoteCC && code !== doubleQuoteCC) {
              pos++;
              code = S.charCodeAt(pos);
            }
            const startChar = S[pos];
            const startStringPos = ++pos;
            pos = S.indexOf(startChar, startStringPos);
            const value = S.slice(startStringPos, pos);
            if (!attrFound) {
              nodeAttributes = {};
              attrFound = true;
            }
            nodeAttributes[name] = value;
          }
        }
        let nodeChildren;
        if (S.charCodeAt(pos - 1) !== slashCC) {
          pos++;
          nodeChildren = parseChildren();
        }
        children.push({
          children: nodeChildren,
          tagName: nodeTagName,
          attrs: nodeAttributes
        });
      } else {
        const startTextPos = pos;
        pos = S.indexOf(openBracket, pos) - 1;
        if (pos === -2) {
          pos = S.length;
        }
        const text = S.slice(startTextPos, pos + 1);
        if (text.trim().length > 0) {
          children.push(text);
        }
      }
      pos++;
    }
    return children;
  }
  _order = 1;
  return simplefy(parseChildren());
}
function simplefy(children) {
  const node = {};
  if (children === void 0) {
    return {};
  }
  if (children.length === 1 && (typeof children[0] === "string" || children[0] instanceof String)) {
    return new String(children[0]);
  }
  children.forEach(function(child) {
    if (typeof child !== "string") {
      if (!node[child.tagName]) {
        node[child.tagName] = [];
      }
    }
    if (typeof child === "object") {
      const kids = simplefy(child.children);
      if (child.attrs) {
        kids.attrs = child.attrs;
      }
      if (kids["attrs"] === void 0) {
        kids["attrs"] = { order: _order };
      } else {
        kids["attrs"]["order"] = _order;
      }
      _order++;
      node[child.tagName].push(kids);
    }
  });
  for (const i in node) {
    if (node[i].length === 1) {
      node[i] = node[i][0];
    }
  }
  return node;
}
function base64ArrayBuffer(arrayBuff) {
  const buff = new Uint8Array(arrayBuff);
  let text = "";
  for (let i = 0; i < buff.byteLength; i++) {
    text += String.fromCharCode(buff[i]);
  }
  return btoa(text);
}
function extractFileExtension(filename) {
  const dot = filename.lastIndexOf(".");
  if (dot === 0 || dot === -1)
    return "";
  return filename.substr(filename.lastIndexOf(".") + 1);
}
function processPptx(setOnMessage, postMessage2) {
  const charts = [];
  let chartID = 0;
  let themeContent = "";
  let slideLayoutClrOvride = "";
  const styleTable = {};
  let tableStyles;
  setOnMessage(async (e) => {
    switch (e.type) {
      case "processPPTX": {
        try {
          await processPPTX(e.data);
        } catch (e2) {
          console.error("AN ERROR HAPPENED DURING processPPTX", e2);
          postMessage2({
            type: "ERROR",
            data: e2.toString()
          });
        }
        break;
      }
    }
  });
  async function processPPTX(data) {
    var _a;
    const zip = await JSZip.loadAsync(data);
    const dateBefore = Date.now();
    if (zip.file("docProps/thumbnail.jpeg")) {
      const pptxThumbImg = await ((_a = zip.file("docProps/thumbnail.jpeg")) == null ? void 0 : _a.async("base64"));
      postMessage2({
        type: "pptx-thumb",
        data: pptxThumbImg
      });
    }
    const filesInfo = await getContentTypes(zip);
    const slideSize = await getSlideSize(zip);
    themeContent = await loadTheme(zip);
    tableStyles = await readXmlFile(zip, "ppt/tableStyles.xml");
    postMessage2({
      type: "slideSize",
      data: slideSize
    });
    const numOfSlides = filesInfo["slides"].length;
    for (let i = 0; i < numOfSlides; i++) {
      const filename = filesInfo["slides"][i];
      const slideHtml = await processSingleSlide(zip, filename, i, slideSize);
      postMessage2({
        type: "slide",
        data: slideHtml
      });
      postMessage2({
        type: "progress-update",
        data: (i + 1) * 100 / numOfSlides
      });
    }
    postMessage2({
      type: "globalCSS",
      data: genGlobalCSS()
    });
    const dateAfter = Date.now();
    postMessage2({
      type: "Done",
      data: {
        time: dateAfter - dateBefore,
        charts
      }
    });
  }
  async function readXmlFile(zip, filename) {
    var _a;
    return t_xml(await ((_a = zip.file(filename)) == null ? void 0 : _a.async("text")) || "");
  }
  async function getContentTypes(zip) {
    const ContentTypesJson = await readXmlFile(zip, "[Content_Types].xml");
    const subObj = ContentTypesJson["Types"]["Override"];
    const slidesLocArray = [];
    const slideLayoutsLocArray = [];
    for (let i = 0; i < subObj.length; i++) {
      switch (subObj[i]["attrs"]["ContentType"]) {
        case "application/vnd.openxmlformats-officedocument.presentationml.slide+xml":
          slidesLocArray.push(subObj[i]["attrs"]["PartName"].substr(1));
          break;
        case "application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml":
          slideLayoutsLocArray.push(subObj[i]["attrs"]["PartName"].substr(1));
          break;
      }
    }
    return {
      slides: slidesLocArray,
      slideLayouts: slideLayoutsLocArray
    };
  }
  async function getSlideSize(zip) {
    const content = await readXmlFile(zip, "ppt/presentation.xml");
    const sldSzAttrs = content["p:presentation"]["p:sldSz"]["attrs"];
    return {
      width: parseInt(sldSzAttrs["cx"]) * 96 / 914400,
      height: parseInt(sldSzAttrs["cy"]) * 96 / 914400
    };
  }
  async function loadTheme(zip) {
    const preResContent = await readXmlFile(
      zip,
      "ppt/_rels/presentation.xml.rels"
    );
    const relationshipArray = preResContent["Relationships"]["Relationship"];
    let themeURI;
    if (relationshipArray.constructor === Array) {
      for (let i = 0; i < relationshipArray.length; i++) {
        if (relationshipArray[i]["attrs"]["Type"] === "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme") {
          themeURI = relationshipArray[i]["attrs"]["Target"];
          break;
        }
      }
    } else if (relationshipArray["attrs"]["Type"] === "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme") {
      themeURI = relationshipArray["attrs"]["Target"];
    }
    if (themeURI === void 0) {
      throw Error("Can't open theme file.");
    }
    return readXmlFile(zip, "ppt/" + themeURI);
  }
  async function processSingleSlide(zip, sldFileName, index, slideSize) {
    postMessage2({
      type: "INFO",
      data: "Processing slide" + (index + 1)
    });
    const resName = sldFileName.replace("slides/slide", "slides/_rels/slide") + ".rels";
    const resContent = await readXmlFile(zip, resName);
    let RelationshipArray = resContent["Relationships"]["Relationship"];
    let layoutFilename = "";
    const slideResObj = {};
    if (RelationshipArray.constructor === Array) {
      for (let i = 0; i < RelationshipArray.length; i++) {
        switch (RelationshipArray[i]["attrs"]["Type"]) {
          case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout":
            layoutFilename = RelationshipArray[i]["attrs"]["Target"].replace(
              "../",
              "ppt/"
            );
            break;
          case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesSlide":
          case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image":
          case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart":
          case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink":
          default: {
            slideResObj[RelationshipArray[i]["attrs"]["Id"]] = {
              type: RelationshipArray[i]["attrs"]["Type"].replace(
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/",
                ""
              ),
              target: RelationshipArray[i]["attrs"]["Target"].replace(
                "../",
                "ppt/"
              )
            };
          }
        }
      }
    } else {
      layoutFilename = RelationshipArray["attrs"]["Target"].replace(
        "../",
        "ppt/"
      );
    }
    const slideLayoutContent = await readXmlFile(zip, layoutFilename);
    const slideLayoutTables = indexNodes(slideLayoutContent);
    const sldLayoutClrOvr = slideLayoutContent["p:sldLayout"]["p:clrMapOvr"]["a:overrideClrMapping"];
    if (sldLayoutClrOvr !== void 0) {
      slideLayoutClrOvride = sldLayoutClrOvr["attrs"];
    }
    const slideLayoutResFilename = layoutFilename.replace(
      "slideLayouts/slideLayout",
      "slideLayouts/_rels/slideLayout"
    ) + ".rels";
    const slideLayoutResContent = await readXmlFile(zip, slideLayoutResFilename);
    RelationshipArray = slideLayoutResContent["Relationships"]["Relationship"];
    let masterFilename = "";
    const layoutResObj = {};
    if (RelationshipArray.constructor === Array) {
      for (let i = 0; i < RelationshipArray.length; i++) {
        switch (RelationshipArray[i]["attrs"]["Type"]) {
          case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster":
            masterFilename = RelationshipArray[i]["attrs"]["Target"].replace(
              "../",
              "ppt/"
            );
            break;
          default:
            layoutResObj[RelationshipArray[i]["attrs"]["Id"]] = {
              type: RelationshipArray[i]["attrs"]["Type"].replace(
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/",
                ""
              ),
              target: RelationshipArray[i]["attrs"]["Target"].replace(
                "../",
                "ppt/"
              )
            };
        }
      }
    } else {
      masterFilename = RelationshipArray["attrs"]["Target"].replace(
        "../",
        "ppt/"
      );
    }
    const slideMasterContent = await readXmlFile(zip, masterFilename);
    const slideMasterTextStyles = getTextByPathList(slideMasterContent, [
      "p:sldMaster",
      "p:txStyles"
    ]);
    const slideMasterTables = indexNodes(slideMasterContent);
    const slideMasterResFilename = masterFilename.replace(
      "slideMasters/slideMaster",
      "slideMasters/_rels/slideMaster"
    ) + ".rels";
    const slideMasterResContent = await readXmlFile(zip, slideMasterResFilename);
    RelationshipArray = slideMasterResContent["Relationships"]["Relationship"];
    let themeFilename = "";
    const masterResObj = {};
    if (RelationshipArray.constructor === Array) {
      for (let i = 0; i < RelationshipArray.length; i++) {
        switch (RelationshipArray[i]["attrs"]["Type"]) {
          case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme":
            themeFilename = RelationshipArray[i]["attrs"]["Target"].replace(
              "../",
              "ppt/"
            );
            break;
          default:
            masterResObj[RelationshipArray[i]["attrs"]["Id"]] = {
              type: RelationshipArray[i]["attrs"]["Type"].replace(
                "http://schemas.openxmlformats.org/officeDocument/2006/relationships/",
                ""
              ),
              target: RelationshipArray[i]["attrs"]["Target"].replace(
                "../",
                "ppt/"
              )
            };
        }
      }
    } else {
      themeFilename = RelationshipArray["attrs"]["Target"].replace(
        "../",
        "ppt/"
      );
    }
    if (themeFilename !== void 0) {
      themeContent = await readXmlFile(zip, themeFilename);
    }
    const slideContent = await readXmlFile(zip, sldFileName);
    const nodes = slideContent["p:sld"]["p:cSld"]["p:spTree"];
    const warpObj = {
      zip,
      slideLayoutTables,
      slideMasterTables,
      slideResObj,
      slideMasterTextStyles,
      layoutResObj,
      masterResObj
    };
    const bgColor = await getSlideBackgroundFill(
      slideContent,
      slideLayoutContent,
      slideMasterContent,
      warpObj
    );
    const slideSizeWidth = Math.min(slideSize.width, document.body.clientWidth);
    const base = slideSize.width / slideSizeWidth;
    const slideSizeHeight = slideSize.height / base;
    let result = "<section style='width:" + slideSizeWidth + "px; height:" + slideSizeHeight + "px;" + bgColor + "'>";
    for (const nodeKey in nodes) {
      if (nodes[nodeKey].constructor === Array) {
        for (let i = 0; i < nodes[nodeKey].length; i++) {
          result += await processNodesInSlide(
            nodeKey,
            nodes[nodeKey][i],
            warpObj
          );
        }
      } else {
        result += await processNodesInSlide(nodeKey, nodes[nodeKey], warpObj);
      }
    }
    return result + "</section>";
  }
  function indexNodes(content) {
    const keys = Object.keys(content);
    const spTreeNode = content[keys[0]]["p:cSld"]["p:spTree"];
    const idTable = {};
    const idxTable = {};
    const typeTable = {};
    for (const key in spTreeNode) {
      if (key === "p:nvGrpSpPr" || key === "p:grpSpPr") {
        continue;
      }
      const targetNode = spTreeNode[key];
      if (targetNode.constructor === Array) {
        for (let i = 0; i < targetNode.length; i++) {
          const nvSpPrNode = targetNode[i]["p:nvSpPr"];
          const id = getTextByPathList(nvSpPrNode, [
            "p:cNvPr",
            "attrs",
            "id"
          ]);
          const idx = getTextByPathList(nvSpPrNode, [
            "p:nvPr",
            "p:ph",
            "attrs",
            "idx"
          ]);
          const type = getTextByPathList(nvSpPrNode, [
            "p:nvPr",
            "p:ph",
            "attrs",
            "type"
          ]);
          if (id !== void 0) {
            idTable[id] = targetNode[i];
          }
          if (idx !== void 0) {
            idxTable[idx] = targetNode[i];
          }
          if (type !== void 0) {
            typeTable[type] = targetNode[i];
          }
        }
      } else {
        const nvSpPrNode = targetNode["p:nvSpPr"];
        const id = getTextByPathList(nvSpPrNode, [
          "p:cNvPr",
          "attrs",
          "id"
        ]);
        const idx = getTextByPathList(nvSpPrNode, [
          "p:nvPr",
          "p:ph",
          "attrs",
          "idx"
        ]);
        const type = getTextByPathList(nvSpPrNode, [
          "p:nvPr",
          "p:ph",
          "attrs",
          "type"
        ]);
        if (id !== void 0) {
          idTable[id] = targetNode;
        }
        if (idx !== void 0) {
          idxTable[idx] = targetNode;
        }
        if (type !== void 0) {
          typeTable[type] = targetNode;
        }
      }
    }
    return { idTable, idxTable, typeTable };
  }
  async function processNodesInSlide(nodeKey, nodeValue, warpObj) {
    let result = "";
    switch (nodeKey) {
      case "p:sp":
        result = await processSpNode(nodeValue, warpObj);
        break;
      case "p:cxnSp":
        result = await processCxnSpNode(nodeValue, warpObj);
        break;
      case "p:pic":
        result = await processPicNode(nodeValue, warpObj);
        break;
      case "p:graphicFrame":
        result = await processGraphicFrameNode(nodeValue, warpObj);
        break;
      case "p:grpSp":
        result = await processGroupSpNode(nodeValue, warpObj);
        break;
    }
    return result;
  }
  async function processGroupSpNode(node, warpObj) {
    const factor = 96 / 914400;
    const xfrmNode = node["p:grpSpPr"]["a:xfrm"];
    const x = parseInt(xfrmNode["a:off"]["attrs"]["x"]) * factor;
    const y = parseInt(xfrmNode["a:off"]["attrs"]["y"]) * factor;
    const chx = parseInt(xfrmNode["a:chOff"]["attrs"]["x"]) * factor;
    const chy = parseInt(xfrmNode["a:chOff"]["attrs"]["y"]) * factor;
    const cx = parseInt(xfrmNode["a:ext"]["attrs"]["cx"]) * factor;
    const cy = parseInt(xfrmNode["a:ext"]["attrs"]["cy"]) * factor;
    const chcx = parseInt(xfrmNode["a:chExt"]["attrs"]["cx"]) * factor;
    const chcy = parseInt(xfrmNode["a:chExt"]["attrs"]["cy"]) * factor;
    const order = node["attrs"]["order"];
    let result = "<div class='block group' style='z-index: " + order + "; top: " + (y - chy) + "px; left: " + (x - chx) + "px; width: " + (cx - chcx) + "px; height: " + (cy - chcy) + "px;'>";
    for (const nodeKey in node) {
      if (node[nodeKey].constructor === Array) {
        for (let i = 0; i < node[nodeKey].length; i++) {
          result += await processNodesInSlide(
            nodeKey,
            node[nodeKey][i],
            warpObj
          );
        }
      } else {
        result += await processNodesInSlide(nodeKey, node[nodeKey], warpObj);
      }
    }
    result += "</div>";
    return result;
  }
  async function processSpNode(node, warpObj) {
    const id = node["p:nvSpPr"]["p:cNvPr"]["attrs"]["id"];
    const name = node["p:nvSpPr"]["p:cNvPr"]["attrs"]["name"];
    const idx = node["p:nvSpPr"]["p:nvPr"]["p:ph"] === void 0 ? void 0 : node["p:nvSpPr"]["p:nvPr"]["p:ph"]["attrs"]["idx"];
    let type = node["p:nvSpPr"]["p:nvPr"]["p:ph"] === void 0 ? void 0 : node["p:nvSpPr"]["p:nvPr"]["p:ph"]["attrs"]["type"];
    const order = node["attrs"]["order"];
    let slideLayoutSpNode;
    let slideMasterSpNode;
    if (type !== void 0) {
      if (idx !== void 0) {
        slideLayoutSpNode = warpObj["slideLayoutTables"]["typeTable"][type];
        slideMasterSpNode = warpObj["slideMasterTables"]["typeTable"][type];
      } else {
        slideLayoutSpNode = warpObj["slideLayoutTables"]["typeTable"][type];
        slideMasterSpNode = warpObj["slideMasterTables"]["typeTable"][type];
      }
    } else {
      if (idx !== void 0) {
        slideLayoutSpNode = warpObj["slideLayoutTables"]["idxTable"][idx];
        slideMasterSpNode = warpObj["slideMasterTables"]["idxTable"][idx];
      }
    }
    if (type === void 0) {
      type = getTextByPathList(slideLayoutSpNode, [
        "p:nvSpPr",
        "p:nvPr",
        "p:ph",
        "attrs",
        "type"
      ]);
      if (type === void 0) {
        type = getTextByPathList(slideMasterSpNode, [
          "p:nvSpPr",
          "p:nvPr",
          "p:ph",
          "attrs",
          "type"
        ]);
      }
    }
    return await genShape(
      node,
      slideLayoutSpNode,
      slideMasterSpNode,
      id,
      name,
      idx,
      type,
      order,
      warpObj
    );
  }
  async function processCxnSpNode(node, warpObj) {
    const id = node["p:nvCxnSpPr"]["p:cNvPr"]["attrs"]["id"];
    const name = node["p:nvCxnSpPr"]["p:cNvPr"]["attrs"]["name"];
    const order = node["attrs"]["order"];
    return await genShape(
      node,
      void 0,
      void 0,
      id,
      name,
      void 0,
      void 0,
      order,
      warpObj
    );
  }
  async function genShape(node, slideLayoutSpNode, slideMasterSpNode, id, name, idx, type, order, warpObj) {
    const xfrmList = ["p:spPr", "a:xfrm"];
    const slideXfrmNode = getTextByPathList(node, xfrmList);
    const slideLayoutXfrmNode = getTextByPathList(
      slideLayoutSpNode,
      xfrmList
    );
    const slideMasterXfrmNode = getTextByPathList(
      slideMasterSpNode,
      xfrmList
    );
    let result = "";
    const shpId = getTextByPathList(node, ["attrs", "order"]);
    const shapType = getTextByPathList(node, [
      "p:spPr",
      "a:prstGeom",
      "attrs",
      "prst"
    ]);
    const custShapType = getTextByPathList(node, [
      "p:spPr",
      "a:custGeom"
    ]);
    let isFlipV = false;
    if (getTextByPathList(slideXfrmNode, ["attrs", "flipV"]) === "1" || getTextByPathList(slideXfrmNode, ["attrs", "flipH"]) === "1") {
      isFlipV = true;
    }
    const rotate = angleToDegrees(
      getTextByPathList(slideXfrmNode, ["attrs", "rot"])
    );
    let w = 0;
    let h = 0;
    let border = {};
    let headEndNodeAttrs;
    let tailEndNodeAttrs;
    let fillColor;
    let grndFillFlg = false;
    let imgFillFlg = false;
    if (shapType !== void 0 || custShapType !== void 0) {
      const ext = getTextByPathList(slideXfrmNode, [
        "a:ext",
        "attrs"
      ]);
      w = parseInt(ext["cx"]) * 96 / 914400;
      h = parseInt(ext["cy"]) * 96 / 914400;
      result += "<svg class='drawing' _id='" + id + "' _idx='" + idx + "' _type='" + type + "' Name='" + name + "' style='" + getPosition(slideXfrmNode, void 0, void 0) + getSize(slideXfrmNode, void 0, void 0) + " z-index: " + order + ";transform: rotate(" + rotate + "deg);'>";
      result += "<defs>";
      fillColor = await getShapeFill(node, true, warpObj);
      const clrFillType = getFillType(
        getTextByPathList(node, ["p:spPr"])
      );
      if (clrFillType === "GRADIENT_FILL") {
        grndFillFlg = true;
        const colorArray = fillColor.color;
        const angl = fillColor.rot;
        const svgGrdnt = getSvgGradient(
          w.toString(),
          h.toString(),
          angl,
          colorArray,
          shpId
        );
        result += svgGrdnt;
      } else if (clrFillType === "PIC_FILL") {
        imgFillFlg = true;
        const svgBgImg = getSvgImagePattern(fillColor, shpId);
        result += svgBgImg;
      }
      border = getBorder(node, true);
      headEndNodeAttrs = getTextByPathList(node, [
        "p:spPr",
        "a:ln",
        "a:headEnd",
        "attrs"
      ]);
      tailEndNodeAttrs = getTextByPathList(node, [
        "p:spPr",
        "a:ln",
        "a:tailEnd",
        "attrs"
      ]);
      if (headEndNodeAttrs !== void 0 && (headEndNodeAttrs["type"] === "triangle" || headEndNodeAttrs["type"] === "arrow") || tailEndNodeAttrs !== void 0 && (tailEndNodeAttrs["type"] === "triangle" || tailEndNodeAttrs["type"] === "arrow")) {
        const triangleMarker = "<marker id='markerTriangle_" + shpId + "' viewBox='0 0 10 10' refX='1' refY='5' markerWidth='5' markerHeight='5' stroke='" + border.color + "' fill='" + border.color + "' orient='auto-start-reverse' markerUnits='strokeWidth'><path d='M 0 0 L 10 5 L 0 10 z' /></marker>";
        result += triangleMarker;
      }
      result += "</defs>";
    }
    if (shapType !== void 0 && custShapType === void 0) {
      switch (shapType) {
        case "accentBorderCallout1":
        case "accentBorderCallout2":
        case "accentBorderCallout3":
        case "accentCallout1":
        case "accentCallout2":
        case "accentCallout3":
        case "actionButtonBackPrevious":
        case "actionButtonBeginning":
        case "actionButtonBlank":
        case "actionButtonDocument":
        case "actionButtonEnd":
        case "actionButtonForwardNext":
        case "actionButtonHelp":
        case "actionButtonHome":
        case "actionButtonInformation":
        case "actionButtonMovie":
        case "actionButtonReturn":
        case "actionButtonSound":
        case "arc":
        case "bevel":
        case "blockArc":
        case "borderCallout1":
        case "borderCallout2":
        case "borderCallout3":
        case "bracePair":
        case "bracketPair":
        case "callout1":
        case "callout2":
        case "callout3":
        case "can":
        case "chartPlus":
        case "chartStar":
        case "chartX":
        case "chevron":
        case "chord":
        case "cloud":
        case "cloudCallout":
        case "corner":
        case "cornerTabs":
        case "cube":
        case "diagStripe":
        case "donut":
        case "doubleWave":
        case "downArrowCallout":
        case "ellipseRibbon":
        case "ellipseRibbon2":
        case "flowChartAlternateProcess":
        case "flowChartCollate":
        case "flowChartConnector":
        case "flowChartDecision":
        case "flowChartDelay":
        case "flowChartDisplay":
        case "flowChartDocument":
        case "flowChartExtract":
        case "flowChartInputOutput":
        case "flowChartInternalStorage":
        case "flowChartMagneticDisk":
        case "flowChartMagneticDrum":
        case "flowChartMagneticTape":
        case "flowChartManualInput":
        case "flowChartManualOperation":
        case "flowChartMerge":
        case "flowChartMultidocument":
        case "flowChartOfflineStorage":
        case "flowChartOffpageConnector":
        case "flowChartOnlineStorage":
        case "flowChartOr":
        case "flowChartPredefinedProcess":
        case "flowChartPreparation":
        case "flowChartProcess":
        case "flowChartPunchedCard":
        case "flowChartPunchedTape":
        case "flowChartSort":
        case "flowChartSummingJunction":
        case "flowChartTerminator":
        case "folderCorner":
        case "frame":
        case "funnel":
        case "gear6":
        case "gear9":
        case "halfFrame":
        case "heart":
        case "homePlate":
        case "horizontalScroll":
        case "irregularSeal1":
        case "irregularSeal2":
        case "leftArrowCallout":
        case "leftBrace":
        case "leftBracket":
        case "leftRightArrowCallout":
        case "leftRightRibbon":
        case "lightningBolt":
        case "lineInv":
        case "mathDivide":
        case "mathEqual":
        case "mathMinus":
        case "mathMultiply":
        case "mathNotEqual":
        case "mathPlus":
        case "moon":
        case "nonIsoscelesTrapezoid":
        case "noSmoking":
        case "pie":
        case "pieWedge":
        case "plaque":
        case "plaqueTabs":
        case "quadArrowCallout":
        case "rect":
        case "ribbon":
        case "ribbon2":
        case "rightArrowCallout":
        case "rightBrace":
        case "rightBracket":
        case "round1Rect":
        case "round2DiagRect":
        case "round2SameRect":
        case "smileyFace":
        case "snip1Rect":
        case "snip2DiagRect":
        case "snip2SameRect":
        case "snipRoundRect":
        case "squareTabs":
        case "star10":
        case "star12":
        case "star16":
        case "star24":
        case "star32":
        case "star4":
        case "star5":
        case "star6":
        case "star7":
        case "star8":
        case "sun":
        case "teardrop":
        case "upArrowCallout":
        case "upDownArrowCallout":
        case "verticalScroll":
        case "wave":
        case "wedgeEllipseCallout":
        case "wedgeRectCallout":
        case "wedgeRoundRectCallout": {
          result += "<rect x='0' y='0' width='" + w + "' height='" + h + "' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "ellipse": {
          result += "<ellipse cx='" + w / 2 + "' cy='" + h / 2 + "' rx='" + w / 2 + "' ry='" + h / 2 + "' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "roundRect": {
          result += "<rect x='0' y='0' width='" + w + "' height='" + h + "' rx='7' ry='7' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "bentConnector2": {
          let d;
          if (isFlipV) {
            d = "M 0 " + w + " L " + h + " " + w + " L " + h + " 0";
          } else {
            d = "M " + w + " 0 L " + w + " " + h + " L 0 " + h;
          }
          result += "<path d='" + d + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' fill='none' ";
          if (headEndNodeAttrs !== void 0 && (headEndNodeAttrs["type"] === "triangle" || headEndNodeAttrs["type"] === "arrow")) {
            result += "marker-start='url(#markerTriangle_" + shpId + ")' ";
          }
          if (tailEndNodeAttrs !== void 0 && (tailEndNodeAttrs["type"] === "triangle" || tailEndNodeAttrs["type"] === "arrow")) {
            result += "marker-end='url(#markerTriangle_" + shpId + ")' ";
          }
          result += "/>";
          break;
        }
        case "rtTriangle": {
          result += " <polygon points='0 0,0 " + h + "," + w + " " + h + "' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "triangle": {
          const shapAdjst = getTextByPathList(node, [
            "p:spPr",
            "a:prstGeom",
            "a:avLst",
            "a:gd",
            "attrs",
            "fmla"
          ]);
          let shapAdjstVal = 0.5;
          if (shapAdjst !== void 0) {
            shapAdjstVal = parseInt(shapAdjst.substr(4)) * 96 / 9144e3;
          }
          result += " <polygon points='" + w * shapAdjstVal + " 0,0 " + h + "," + w + " " + h + "' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "diamond": {
          result += " <polygon points='" + w / 2 + " 0,0 " + h / 2 + "," + w / 2 + " " + h + "," + w + " " + h / 2 + "' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "trapezoid": {
          const shapAdjst = getTextByPathList(node, [
            "p:spPr",
            "a:prstGeom",
            "a:avLst",
            "a:gd",
            "attrs",
            "fmla"
          ]);
          let adjstVal = 0.25;
          const maxAdjConst = 0.7407;
          if (shapAdjst !== void 0) {
            const adjst = parseInt(shapAdjst.substr(4)) * 96 / 9144e3;
            adjstVal = adjst * 0.5 / maxAdjConst;
          }
          result += " <polygon points='" + w * adjstVal + " 0,0 " + h + "," + w + " " + h + "," + (1 - adjstVal) * w + " 0' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "parallelogram": {
          const shapAdjst = getTextByPathList(node, [
            "p:spPr",
            "a:prstGeom",
            "a:avLst",
            "a:gd",
            "attrs",
            "fmla"
          ]);
          let adjstVal = 0.25;
          let maxAdjConst;
          if (w > h) {
            maxAdjConst = w / h;
          } else {
            maxAdjConst = h / w;
          }
          if (shapAdjst !== void 0) {
            const adjst = parseInt(shapAdjst.substr(4)) / 1e5;
            adjstVal = adjst / maxAdjConst;
          }
          result += " <polygon points='" + adjstVal * w + " 0,0 " + h + "," + (1 - adjstVal) * w + " " + h + "," + w + " 0' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "pentagon": {
          result += " <polygon points='" + 0.5 * w + " 0,0 " + 0.375 * h + "," + 0.15 * w + " " + h + "," + 0.85 * w + " " + h + "," + w + " " + 0.375 * h + "' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "hexagon": {
          const shapAdjstArray = getTextByPathList(node, [
            "p:spPr",
            "a:prstGeom",
            "a:avLst",
            "a:gd"
          ]) || [];
          let shapAdjst;
          for (let i = 0; i < shapAdjstArray.length; i++) {
            if (getTextByPathList(shapAdjstArray[i], ["attrs", "name"]) === "adj") {
              shapAdjst = getTextByPathList(shapAdjstArray[i], [
                "attrs",
                "fmla"
              ]);
            }
          }
          let adjstVal = 0.25;
          const maxAdjConst = 0.62211;
          if (shapAdjst !== void 0) {
            const adjst = parseInt(shapAdjst.substr(4)) * 96 / 9144e3;
            adjstVal = adjst * 0.5 / maxAdjConst;
          }
          result += " <polygon points='" + w * adjstVal + " 0,0 " + h / 2 + "," + w * adjstVal + " " + h + "," + (1 - adjstVal) * w + " " + h + "," + w + " " + h / 2 + "," + (1 - adjstVal) * w + " 0' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "heptagon": {
          result += " <polygon points='" + 0.5 * w + " 0," + w / 8 + " " + h / 4 + ",0 " + 5 / 8 * h + "," + w / 4 + " " + h + "," + 3 / 4 * w + " " + h + "," + w + " " + 5 / 8 * h + "," + 7 / 8 * w + " " + h / 4 + "' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "octagon": {
          const shapAdjst = getTextByPathList(node, [
            "p:spPr",
            "a:prstGeom",
            "a:avLst",
            "a:gd",
            "attrs",
            "fmla"
          ]);
          let adj1 = 0.25;
          if (shapAdjst !== void 0) {
            adj1 = parseInt(shapAdjst.substr(4)) / 1e5;
          }
          const adj2 = 1 - adj1;
          result += " <polygon points='" + adj1 * w + " 0,0 " + adj1 * h + ",0 " + adj2 * h + "," + adj1 * w + " " + h + "," + adj2 * w + " " + h + "," + w + " " + adj2 * h + "," + w + " " + adj1 * h + "," + adj2 * w + " 0' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "decagon": {
          result += " <polygon points='" + 3 / 8 * w + " 0," + w / 8 + " " + h / 8 + ",0 " + h / 2 + "," + w / 8 + " " + 7 / 8 * h + "," + 3 / 8 * w + " " + h + "," + 5 / 8 * w + " " + h + "," + 7 / 8 * w + " " + 7 / 8 * h + "," + w + " " + h / 2 + "," + 7 / 8 * w + " " + h / 8 + "," + 5 / 8 * w + " 0' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "dodecagon": {
          result += " <polygon points='" + 3 / 8 * w + " 0," + w / 8 + " " + h / 8 + ",0 " + 3 / 8 * h + ",0 " + 5 / 8 * h + "," + w / 8 + " " + 7 / 8 * h + "," + 3 / 8 * w + " " + h + "," + 5 / 8 * w + " " + h + "," + 7 / 8 * w + " " + 7 / 8 * h + "," + w + " " + 5 / 8 * h + "," + w + " " + 3 / 8 * h + "," + 7 / 8 * w + " " + h / 8 + "," + 5 / 8 * w + " 0' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "bentConnector3": {
          const shapAdjst = getTextByPathList(node, [
            "p:spPr",
            "a:prstGeom",
            "a:avLst",
            "a:gd",
            "attrs",
            "fmla"
          ]);
          let shapAdjstVal = 0.5;
          if (shapAdjst !== void 0) {
            shapAdjstVal = parseInt(shapAdjst.substr(4)) / 1e5;
            if (isFlipV) {
              result += " <polyline points='" + w + " 0," + (1 - shapAdjstVal) * w + " 0," + (1 - shapAdjstVal) * w + " " + h + ",0 " + h + "' fill='transparent'' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' ";
            } else {
              result += " <polyline points='0 0," + shapAdjstVal * w + " 0," + shapAdjstVal * w + " " + h + "," + w + " " + h + "' fill='transparent'' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' ";
            }
            if (headEndNodeAttrs !== void 0 && (headEndNodeAttrs["type"] === "triangle" || headEndNodeAttrs["type"] === "arrow")) {
              result += "marker-start='url(#markerTriangle_" + shpId + ")' ";
            }
            if (tailEndNodeAttrs !== void 0 && (tailEndNodeAttrs["type"] === "triangle" || tailEndNodeAttrs["type"] === "arrow")) {
              result += "marker-end='url(#markerTriangle_" + shpId + ")' ";
            }
            result += "/>";
          }
          break;
        }
        case "plus": {
          const shapAdjst = getTextByPathList(node, [
            "p:spPr",
            "a:prstGeom",
            "a:avLst",
            "a:gd",
            "attrs",
            "fmla"
          ]);
          let adj1 = 0.25;
          if (shapAdjst !== void 0) {
            adj1 = parseInt(shapAdjst.substr(4)) / 1e5;
          }
          const adj2 = 1 - adj1;
          result += " <polygon points='" + adj1 * w + " 0," + adj1 * w + " " + adj1 * h + ",0 " + adj1 * h + ",0 " + adj2 * h + "," + adj1 * w + " " + adj2 * h + "," + adj1 * w + " " + h + "," + adj2 * w + " " + h + "," + adj2 * w + " " + adj2 * h + "," + w + " " + adj2 * h + "," + +w + " " + adj1 * h + "," + adj2 * w + " " + adj1 * h + "," + adj2 * w + " 0' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "line":
        case "straightConnector1":
        case "bentConnector4":
        case "bentConnector5":
        case "curvedConnector2":
        case "curvedConnector3":
        case "curvedConnector4":
        case "curvedConnector5": {
          if (isFlipV) {
            result += "<line x1='" + w + "' y1='0' x2='0' y2='" + h + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' ";
          } else {
            result += "<line x1='0' y1='0' x2='" + w + "' y2='" + h + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' ";
          }
          if (headEndNodeAttrs !== void 0 && (headEndNodeAttrs["type"] === "triangle" || headEndNodeAttrs["type"] === "arrow")) {
            result += "marker-start='url(#markerTriangle_" + shpId + ")' ";
          }
          if (tailEndNodeAttrs !== void 0 && (tailEndNodeAttrs["type"] === "triangle" || tailEndNodeAttrs["type"] === "arrow")) {
            result += "marker-end='url(#markerTriangle_" + shpId + ")' ";
          }
          result += "/>";
          break;
        }
        case "rightArrow": {
          const shapAdjstArray = getTextByPathList(node, [
            "p:spPr",
            "a:prstGeom",
            "a:avLst",
            "a:gd"
          ]);
          let sAdj1 = "";
          let sAdj1Val = 0.5;
          let sAdj2;
          let sAdj2Val = 0.5;
          const maxSAdj2Const = w / h;
          if (shapAdjstArray !== void 0) {
            for (let i = 0; i < shapAdjstArray.length; i++) {
              const sAdjName = getTextByPathList(shapAdjstArray[i], [
                "attrs",
                "name"
              ]);
              if (sAdjName === "adj1") {
                sAdj1 = getTextByPathList(shapAdjstArray[i], [
                  "attrs",
                  "fmla"
                ]);
                sAdj1Val = 0.5 - parseInt(sAdj1.substr(4)) / 2e5;
              } else if (sAdjName === "adj2") {
                sAdj2 = getTextByPathList(shapAdjstArray[i], [
                  "attrs",
                  "fmla"
                ]);
                const sAdj2Val2 = parseInt(sAdj2.substr(4)) / 1e5;
                sAdj2Val = 1 - sAdj2Val2 / maxSAdj2Const;
              }
            }
          }
          result += " <polygon points='" + w + " " + h / 2 + "," + sAdj2Val * w + " 0," + sAdj2Val * w + " " + sAdj1Val * h + ",0 " + sAdj1Val * h + ",0 " + (1 - sAdj1Val) * h + "," + sAdj2Val * w + " " + (1 - sAdj1Val) * h + ", " + sAdj2Val * w + " " + h + "' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "leftArrow": {
          const shapAdjstArray = getTextByPathList(node, [
            "p:spPr",
            "a:prstGeom",
            "a:avLst",
            "a:gd"
          ]);
          let sAdj1;
          let sAdj1Val = 0.5;
          let sAdj2;
          let sAdj2Val = 0.5;
          const maxSAdj2Const = w / h;
          if (shapAdjstArray !== void 0) {
            for (let i = 0; i < shapAdjstArray.length; i++) {
              const sAdjName = getTextByPathList(shapAdjstArray[i], [
                "attrs",
                "name"
              ]);
              if (sAdjName === "adj1") {
                sAdj1 = getTextByPathList(shapAdjstArray[i], [
                  "attrs",
                  "fmla"
                ]);
                sAdj1Val = 0.5 - parseInt(sAdj1.substr(4)) / 2e5;
              } else if (sAdjName === "adj2") {
                sAdj2 = getTextByPathList(shapAdjstArray[i], [
                  "attrs",
                  "fmla"
                ]);
                const sAdj2Val2 = parseInt(sAdj2.substr(4)) / 1e5;
                sAdj2Val = sAdj2Val2 / maxSAdj2Const;
              }
            }
          }
          result += " <polygon points='0 " + h / 2 + "," + sAdj2Val * w + " " + h + "," + sAdj2Val * w + " " + (1 - sAdj1Val) * h + "," + w + " " + (1 - sAdj1Val) * h + "," + w + " " + sAdj1Val * h + "," + sAdj2Val * w + " " + sAdj1Val * h + ", " + sAdj2Val * w + " 0' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "downArrow": {
          const shapAdjstArray = getTextByPathList(node, [
            "p:spPr",
            "a:prstGeom",
            "a:avLst",
            "a:gd"
          ]);
          let sAdj1;
          let sAdj1Val = 0.5;
          let sAdj2;
          let sAdj2Val = 0.5;
          const maxSAdj2Const = h / w;
          if (shapAdjstArray !== void 0) {
            for (let i = 0; i < shapAdjstArray.length; i++) {
              const sAdjName = getTextByPathList(shapAdjstArray[i], [
                "attrs",
                "name"
              ]);
              if (sAdjName === "adj1") {
                sAdj1 = getTextByPathList(shapAdjstArray[i], [
                  "attrs",
                  "fmla"
                ]);
                sAdj1Val = parseInt(sAdj1.substr(4)) / 2e5;
              } else if (sAdjName === "adj2") {
                sAdj2 = getTextByPathList(shapAdjstArray[i], [
                  "attrs",
                  "fmla"
                ]);
                const sAdj2Val2 = parseInt(sAdj2.substr(4)) / 1e5;
                sAdj2Val = sAdj2Val2 / maxSAdj2Const;
              }
            }
          }
          result += " <polygon points='" + (0.5 - sAdj1Val) * w + " 0," + (0.5 - sAdj1Val) * w + " " + (1 - sAdj2Val) * h + ",0 " + (1 - sAdj2Val) * h + "," + w / 2 + " " + h + "," + w + " " + (1 - sAdj2Val) * h + "," + (0.5 + sAdj1Val) * w + " " + (1 - sAdj2Val) * h + ", " + (0.5 + sAdj1Val) * w + " 0' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "upArrow": {
          const shapAdjstArray = getTextByPathList(node, [
            "p:spPr",
            "a:prstGeom",
            "a:avLst",
            "a:gd"
          ]);
          let sAdj1;
          let sAdj1Val = 0.5;
          let sAdj2;
          let sAdj2Val = 0.5;
          const maxSAdj2Const = h / w;
          if (shapAdjstArray !== void 0) {
            for (let i = 0; i < shapAdjstArray.length; i++) {
              const sAdjName = getTextByPathList(shapAdjstArray[i], [
                "attrs",
                "name"
              ]);
              if (sAdjName === "adj1") {
                sAdj1 = getTextByPathList(shapAdjstArray[i], [
                  "attrs",
                  "fmla"
                ]);
                sAdj1Val = parseInt(sAdj1.substr(4)) / 2e5;
              } else if (sAdjName === "adj2") {
                sAdj2 = getTextByPathList(shapAdjstArray[i], [
                  "attrs",
                  "fmla"
                ]);
                const sAdj2Val2 = parseInt(sAdj2.substr(4)) / 1e5;
                sAdj2Val = sAdj2Val2 / maxSAdj2Const;
              }
            }
          }
          result += " <polygon points='" + w / 2 + " 0,0 " + sAdj2Val * h + "," + (0.5 - sAdj1Val) * w + " " + sAdj2Val * h + "," + (0.5 - sAdj1Val) * w + " " + h + "," + (0.5 + sAdj1Val) * w + " " + h + "," + (0.5 + sAdj1Val) * w + " " + sAdj2Val * h + ", " + w + " " + sAdj2Val * h + "' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "leftRightArrow": {
          const shapAdjstArray = getTextByPathList(node, [
            "p:spPr",
            "a:prstGeom",
            "a:avLst",
            "a:gd"
          ]);
          let sAdj1;
          let sAdj1Val = 0.5;
          let sAdj2;
          let sAdj2Val = 0.5;
          const maxSAdj2Const = w / h;
          if (shapAdjstArray !== void 0) {
            for (let i = 0; i < shapAdjstArray.length; i++) {
              const sAdjName = getTextByPathList(shapAdjstArray[i], [
                "attrs",
                "name"
              ]);
              if (sAdjName === "adj1") {
                sAdj1 = getTextByPathList(shapAdjstArray[i], [
                  "attrs",
                  "fmla"
                ]);
                sAdj1Val = 0.5 - parseInt(sAdj1.substr(4)) / 2e5;
              } else if (sAdjName === "adj2") {
                sAdj2 = getTextByPathList(shapAdjstArray[i], [
                  "attrs",
                  "fmla"
                ]);
                const sAdj2Val2 = parseInt(sAdj2.substr(4)) / 1e5;
                sAdj2Val = sAdj2Val2 / maxSAdj2Const;
              }
            }
          }
          result += " <polygon points='0 " + h / 2 + "," + sAdj2Val * w + " " + h + "," + sAdj2Val * w + " " + (1 - sAdj1Val) * h + "," + (1 - sAdj2Val) * w + " " + (1 - sAdj1Val) * h + "," + (1 - sAdj2Val) * w + " " + h + "," + w + " " + h / 2 + ", " + (1 - sAdj2Val) * w + " 0," + (1 - sAdj2Val) * w + " " + sAdj1Val * h + "," + sAdj2Val * w + " " + sAdj1Val * h + "," + sAdj2Val * w + " 0' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "upDownArrow": {
          const shapAdjstArray = getTextByPathList(node, [
            "p:spPr",
            "a:prstGeom",
            "a:avLst",
            "a:gd"
          ]);
          let sAdj1;
          let sAdj1Val = 0.5;
          let sAdj2;
          let sAdj2Val = 0.5;
          const maxSAdj2Const = h / w;
          if (shapAdjstArray !== void 0) {
            for (let i = 0; i < shapAdjstArray.length; i++) {
              const sAdjName = getTextByPathList(shapAdjstArray[i], [
                "attrs",
                "name"
              ]);
              if (sAdjName === "adj1") {
                sAdj1 = getTextByPathList(shapAdjstArray[i], [
                  "attrs",
                  "fmla"
                ]);
                sAdj1Val = 0.5 - parseInt(sAdj1.substr(4)) / 2e5;
              } else if (sAdjName === "adj2") {
                sAdj2 = getTextByPathList(shapAdjstArray[i], [
                  "attrs",
                  "fmla"
                ]);
                const sAdj2Val2 = parseInt(sAdj2.substr(4)) / 1e5;
                sAdj2Val = sAdj2Val2 / maxSAdj2Const;
              }
            }
          }
          result += " <polygon points='" + w / 2 + " 0,0 " + sAdj2Val * h + "," + sAdj1Val * w + " " + sAdj2Val * h + "," + sAdj1Val * w + " " + (1 - sAdj2Val) * h + ",0 " + (1 - sAdj2Val) * h + "," + w / 2 + " " + h + ", " + w + " " + (1 - sAdj2Val) * h + "," + (1 - sAdj1Val) * w + " " + (1 - sAdj2Val) * h + "," + (1 - sAdj1Val) * w + " " + sAdj2Val * h + "," + w + " " + sAdj2Val * h + "' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' />";
          break;
        }
        case "bentArrow":
        case "bentUpArrow":
        case "stripedRightArrow":
        case "quadArrow":
        case "circularArrow":
        case "swooshArrow":
        case "leftRightUpArrow":
        case "leftUpArrow":
        case "leftCircularArrow":
        case "notchedRightArrow":
        case "curvedDownArrow":
        case "curvedLeftArrow":
        case "curvedRightArrow":
        case "curvedUpArrow":
        case "uturnArrow":
        case "leftRightCircularArrow":
          break;
        case void 0:
        default:
          console.warn("Undefine shape type.");
      }
      result += "</svg>";
      result += "<div class='block content " + getVerticalAlign(node, slideLayoutSpNode, slideMasterSpNode) + "' _id='" + id + "' _idx='" + idx + "' _type='" + type + "' Name='" + name + "' style='" + getPosition(slideXfrmNode, slideLayoutXfrmNode, slideMasterXfrmNode) + getSize(slideXfrmNode, slideLayoutXfrmNode, slideMasterXfrmNode) + " z-index: " + order + ";transform: rotate(" + rotate + "deg);'>";
      if (node["p:txBody"] !== void 0) {
        result += await genTextBody(
          node["p:txBody"],
          slideLayoutSpNode,
          slideMasterSpNode,
          type,
          warpObj
        );
      }
      result += "</div>";
    } else if (custShapType !== void 0) {
      const pathLstNode = getTextByPathList(custShapType, [
        "a:pathLst"
      ]);
      const closeNode = getTextByPathList(pathLstNode, ["a:path", "a:close"]);
      const startPoint = getTextByPathList(pathLstNode, [
        "a:path",
        "a:moveTo",
        "a:pt",
        "attrs"
      ]) || { x: "0", y: "0" };
      const spX = parseInt(startPoint["x"]) * 96 / 914400;
      const spY = parseInt(startPoint["y"]) * 96 / 914400;
      let d = "M" + spX + "," + spY;
      const pathNodes = getTextByPathList(pathLstNode, ["a:path"]);
      const lnToNodes = pathNodes["a:lnTo"];
      const cubicBezToNodes = pathNodes["a:cubicBezTo"];
      const sortblAry = [];
      if (lnToNodes !== void 0) {
        Object.keys(lnToNodes).forEach(function(key) {
          const lnToPtNode = lnToNodes[key]["a:pt"];
          if (lnToPtNode !== void 0) {
            Object.keys(lnToPtNode).forEach(function(key2) {
              const ptObj = {};
              const lnToNoPt = lnToPtNode[key2];
              const ptX = lnToNoPt["x"];
              const ptY = lnToNoPt["y"];
              const ptOrdr = lnToNoPt["order"];
              ptObj.type = "lnto";
              ptObj.order = ptOrdr;
              ptObj.x = ptX;
              ptObj.y = ptY;
              sortblAry.push(ptObj);
            });
          }
        });
      }
      if (cubicBezToNodes !== void 0) {
        Object.keys(cubicBezToNodes).forEach(function(key) {
          const cubicBezToPtNodes = cubicBezToNodes[key]["a:pt"];
          if (cubicBezToPtNodes !== void 0) {
            Object.keys(cubicBezToPtNodes).forEach(function(key2) {
              const cubBzPts = cubicBezToPtNodes[key2];
              Object.keys(cubBzPts).forEach(function(key3) {
                const ptObj = {};
                const cubBzPt = cubBzPts[key3];
                const ptX = cubBzPt["x"];
                const ptY = cubBzPt["y"];
                const ptOrdr = cubBzPt["order"];
                ptObj.type = "cubicBezTo";
                ptObj.order = ptOrdr;
                ptObj.x = ptX;
                ptObj.y = ptY;
                sortblAry.push(ptObj);
              });
            });
          }
        });
      }
      const sortByOrder = sortblAry.slice(0);
      sortByOrder.sort(function(a, b) {
        return a.order - b.order;
      });
      let k = 0;
      while (k < sortByOrder.length) {
        if (sortByOrder[k].type === "lnto") {
          const Lx = parseInt(sortByOrder[k].x) * 96 / 914400;
          const Ly = parseInt(sortByOrder[k].y) * 96 / 914400;
          d += "L" + Lx + "," + Ly;
          k++;
        } else {
          const Cx1 = parseInt(sortByOrder[k].x) * 96 / 914400;
          const Cy1 = parseInt(sortByOrder[k].y) * 96 / 914400;
          const Cx2 = parseInt(sortByOrder[k + 1].x) * 96 / 914400;
          const Cy2 = parseInt(sortByOrder[k + 1].y) * 96 / 914400;
          const Cx3 = parseInt(sortByOrder[k + 2].x) * 96 / 914400;
          const Cy3 = parseInt(sortByOrder[k + 2].y) * 96 / 914400;
          d += "C" + Cx1 + "," + Cy1 + " " + Cx2 + "," + Cy2 + " " + Cx3 + "," + Cy3;
          k += 3;
        }
      }
      result += "<path d='" + d + "' fill='" + (!imgFillFlg ? grndFillFlg ? "url(#linGrd_" + shpId + ")" : fillColor : "url(#imgPtrn_" + shpId + ")") + "' stroke='" + border.color + "' stroke-width='" + border.width + "' stroke-dasharray='" + border.strokeDasharray + "' ";
      if (closeNode !== void 0) {
        result += "/>";
      } else {
        if (headEndNodeAttrs !== void 0 && (headEndNodeAttrs["type"] === "triangle" || headEndNodeAttrs["type"] === "arrow")) {
          result += "marker-start='url(#markerTriangle_" + shpId + ")' ";
        }
        if (tailEndNodeAttrs !== void 0 && (tailEndNodeAttrs["type"] === "triangle" || tailEndNodeAttrs["type"] === "arrow")) {
          result += "marker-end='url(#markerTriangle_" + shpId + ")' ";
        }
        result += "/>";
      }
      result += "</svg>";
      result += "<div class='block content " + getVerticalAlign(node, slideLayoutSpNode, slideMasterSpNode) + "' _id='" + id + "' _idx='" + idx + "' _type='" + type + "' Name='" + name + "' style='" + getPosition(slideXfrmNode, slideLayoutXfrmNode, slideMasterXfrmNode) + getSize(slideXfrmNode, slideLayoutXfrmNode, slideMasterXfrmNode) + " z-index: " + order + ";transform: rotate(" + rotate + "deg);'>";
      if (node["p:txBody"] !== void 0) {
        result += await genTextBody(
          node["p:txBody"],
          slideLayoutSpNode,
          slideMasterSpNode,
          type,
          warpObj
        );
      }
      result += "</div>";
    } else {
      result += "<div class='block content " + getVerticalAlign(node, slideLayoutSpNode, slideMasterSpNode) + "' _id='" + id + "' _idx='" + idx + "' _type='" + type + "' Name='" + name + "' style='" + getPosition(slideXfrmNode, slideLayoutXfrmNode, slideMasterXfrmNode) + getSize(slideXfrmNode, slideLayoutXfrmNode, slideMasterXfrmNode) + getBorder(node, false) + await getShapeFill(node, false, warpObj) + " z-index: " + order + ";transform: rotate(" + rotate + "deg);'>";
      if (node["p:txBody"] !== void 0) {
        result += await genTextBody(
          node["p:txBody"],
          slideLayoutSpNode,
          slideMasterSpNode,
          type = "",
          warpObj
        );
      }
      result += "</div>";
    }
    return result;
  }
  async function processPicNode(node, warpObj) {
    const order = node["attrs"]["order"];
    const rid = node["p:blipFill"]["a:blip"]["attrs"]["r:embed"];
    const imgName = warpObj["slideResObj"][rid]["target"];
    const imgFileExt = extractFileExtension(imgName).toLowerCase();
    const zip = warpObj["zip"];
    const imgArrayBuffer = await zip.file(imgName).async("arraybuffer");
    let mimeType = "";
    const xfrmNode = node["p:spPr"]["a:xfrm"];
    const rotate = angleToDegrees(node["p:spPr"]["a:xfrm"]["attrs"]["rot"]);
    mimeType = getImageMimeType(imgFileExt);
    return "<div class='block content' style='" + getPosition(xfrmNode, void 0, void 0) + getSize(xfrmNode, void 0, void 0) + " z-index: " + order + ";transform: rotate(" + rotate + "deg);'><img src='data:" + mimeType + ";base64," + base64ArrayBuffer(imgArrayBuffer) + "' style='width: 100%; height: 100%'/></div>";
  }
  async function processGraphicFrameNode(node, warpObj) {
    let result = "";
    const graphicTypeUri = getTextByPathList(node, [
      "a:graphic",
      "a:graphicData",
      "attrs",
      "uri"
    ]);
    switch (graphicTypeUri) {
      case "http://schemas.openxmlformats.org/drawingml/2006/table":
        result = await genTable(node, warpObj);
        break;
      case "http://schemas.openxmlformats.org/drawingml/2006/chart":
        result = await genChart(node, warpObj);
        break;
      case "http://schemas.openxmlformats.org/drawingml/2006/diagram":
        result = genDiagram(node);
        break;
    }
    return result;
  }
  async function genTextBody(textBodyNode, slideLayoutSpNode, slideMasterSpNode, type, warpObj) {
    let text = "";
    const slideMasterTextStyles = warpObj && warpObj["slideMasterTextStyles"];
    if (textBodyNode === void 0) {
      return text;
    }
    let pNode;
    let rNode;
    if (textBodyNode["a:p"].constructor === Array) {
      for (let i = 0; i < textBodyNode["a:p"].length; i++) {
        pNode = textBodyNode["a:p"][i];
        rNode = pNode["a:r"];
        text += "<div  class='" + getHorizontalAlign(
          pNode,
          slideLayoutSpNode || {},
          slideMasterSpNode || {},
          type,
          slideMasterTextStyles
        ) + "'>";
        text += await genBuChar(
          pNode,
          slideLayoutSpNode,
          slideMasterSpNode,
          type,
          warpObj || {}
        );
        if (rNode === void 0) {
          text += genSpanElement(
            pNode,
            slideLayoutSpNode,
            slideMasterSpNode,
            type,
            warpObj || {}
          );
        } else if (rNode.constructor === Array) {
          for (let j = 0; j < rNode.length; j++) {
            text += genSpanElement(
              rNode[j],
              slideLayoutSpNode,
              slideMasterSpNode,
              type,
              warpObj || {}
            );
            if (pNode["a:br"] !== void 0) {
              text += "<br>";
            }
          }
        } else {
          text += genSpanElement(
            rNode,
            slideLayoutSpNode,
            slideMasterSpNode,
            type,
            warpObj || {}
          );
        }
        text += "</div>";
      }
    } else {
      pNode = textBodyNode["a:p"];
      rNode = pNode["a:r"];
      text += "<div class='slide-prgrph " + getHorizontalAlign(
        pNode,
        slideLayoutSpNode || {},
        slideMasterSpNode || {},
        type,
        slideMasterTextStyles
      ) + "'>";
      text += await genBuChar(
        pNode,
        slideLayoutSpNode,
        slideMasterSpNode,
        type,
        warpObj
      );
      if (rNode === void 0) {
        text += genSpanElement(
          pNode,
          slideLayoutSpNode,
          slideMasterSpNode,
          type,
          warpObj || {}
        );
      } else if (rNode.constructor === Array) {
        for (let j = 0; j < rNode.length; j++) {
          text += genSpanElement(
            rNode[j],
            slideLayoutSpNode,
            slideMasterSpNode,
            type,
            warpObj || {}
          );
          if (pNode["a:br"] !== void 0) {
            text += "<br>";
          }
        }
      } else {
        text += genSpanElement(
          rNode,
          slideLayoutSpNode,
          slideMasterSpNode,
          type,
          warpObj || {}
        );
      }
      text += "</div>";
    }
    return text;
  }
  async function genBuChar(node, slideLayoutSpNode, slideMasterSpNode, type, warpObj) {
    const sldMstrTxtStyles = warpObj && warpObj["slideMasterTextStyles"];
    const rNode = node["a:r"];
    let dfltBultColor, dfltBultSize, bultColor, bultSize;
    if (rNode !== void 0) {
      dfltBultColor = getFontColor(rNode);
      dfltBultSize = getFontSize(
        rNode,
        slideLayoutSpNode,
        slideMasterSpNode,
        type,
        sldMstrTxtStyles
      );
    } else {
      dfltBultColor = getFontColor(node);
      dfltBultSize = getFontSize(
        node,
        slideLayoutSpNode,
        slideMasterSpNode,
        type,
        sldMstrTxtStyles
      );
    }
    let bullet = "";
    const pPrNode = node["a:pPr"];
    const getRtlVal = getTextByPathList(pPrNode, ["attrs", "rtl"]);
    let isRTL = false;
    if (getRtlVal !== void 0 && getRtlVal === "1") {
      isRTL = true;
    }
    let lvl = parseInt(getTextByPathList(pPrNode, ["attrs", "lvl"]));
    if (isNaN(lvl)) {
      lvl = 0;
    }
    const buChar = getTextByPathList(pPrNode, ["a:buChar", "attrs", "char"]);
    let buType = "TYPE_NONE";
    const buNum = getTextByPathList(pPrNode, ["a:buAutoNum", "attrs", "type"]);
    const buPic = getTextByPathList(pPrNode, ["a:buBlip"]);
    if (buChar !== void 0) {
      buType = "TYPE_BULLET";
    }
    if (buNum !== void 0) {
      buType = "TYPE_NUMERIC";
    }
    if (buPic !== void 0) {
      buType = "TYPE_BULPIC";
    }
    let buFontAttrs = {};
    if (buType !== "TYPE_NONE") {
      buFontAttrs = getTextByPathList(pPrNode, ["a:buFont", "attrs"]);
    }
    let defBultColor = "NoNe";
    if (pPrNode) {
      const buClrNode = pPrNode["a:buClr"];
      if (buClrNode !== void 0) {
        defBultColor = getSolidFill(buClrNode) || "";
      }
    }
    if (defBultColor === "NoNe") {
      bultColor = dfltBultColor;
    } else {
      bultColor = "#" + defBultColor;
    }
    let buFontSize;
    buFontSize = getTextByPathList(pPrNode, [
      "a:buSzPts",
      "attrs",
      "val"
    ]);
    if (buFontSize !== void 0) {
      bultSize = parseInt(buFontSize) / 100 + "pt";
    } else {
      buFontSize = getTextByPathList(pPrNode, [
        "a:buSzPct",
        "attrs",
        "val"
      ]);
      if (buFontSize !== void 0) {
        const prcnt = parseInt(buFontSize) / 1e5;
        const dfltBultSizeNoPt = dfltBultSize.substr(0, dfltBultSize.length - 2);
        bultSize = prcnt * parseInt(dfltBultSizeNoPt) + "pt";
      } else {
        bultSize = dfltBultSize;
      }
    }
    let marginLeft;
    let marginRight;
    if (buType === "TYPE_BULLET") {
      if (buFontAttrs !== void 0) {
        marginLeft = parseInt(getTextByPathList(pPrNode, ["attrs", "marL"])) * 96 / 914400;
        marginRight = parseInt(buFontAttrs["pitchFamily"]);
        if (isNaN(marginLeft)) {
          marginLeft = 328600 * 96 / 914400;
        }
        if (isNaN(marginRight)) {
          marginRight = 0;
        }
        const typeface = buFontAttrs["typeface"];
        bullet = "<span style='font-family: " + typeface + "; margin-left: " + marginLeft * lvl + "px; margin-right: " + marginRight + "px;color:" + bultColor + ";font-size:" + bultSize + ";";
        if (isRTL) {
          bullet += " float: right;  direction:rtl";
        }
        bullet += "'>" + buChar + "</span>";
      } else {
        marginLeft = 328600 * 96 / 914400 * lvl;
        bullet = "<span style='margin-left: " + marginLeft + "px;'>" + buChar + "</span>";
      }
    } else if (buType === "TYPE_NUMERIC") {
      if (buFontAttrs !== void 0) {
        marginLeft = parseInt(getTextByPathList(pPrNode, ["attrs", "marL"])) * 96 / 914400;
        marginRight = parseInt(buFontAttrs["pitchFamily"]);
        if (isNaN(marginLeft)) {
          marginLeft = 328600 * 96 / 914400;
        }
        if (isNaN(marginRight)) {
          marginRight = 0;
        }
        bullet = "<span style='margin-left: " + marginLeft * lvl + "px; margin-right: " + marginRight + "px;color:" + bultColor + ";font-size:" + bultSize + ";";
        if (isRTL) {
          bullet += " float: right; direction:rtl;";
        } else {
          bullet += " float: left; direction:ltr;";
        }
        bullet += "' data-bulltname = '" + buNum + "' data-bulltlvl = '" + lvl + "' class='numeric-bullet-style'></span>";
      } else {
        marginLeft = 328600 * 96 / 914400 * lvl;
        bullet = "<span style='margin-left: " + marginLeft + "px;";
        if (isRTL) {
          bullet += " float: right; direction:rtl;";
        } else {
          bullet += " float: left; direction:ltr;";
        }
        bullet += "' data-bulltname = '" + buNum + "' data-bulltlvl = '" + lvl + "' class='numeric-bullet-style'></span>";
      }
    } else if (buType === "TYPE_BULPIC") {
      marginLeft = parseInt(getTextByPathList(pPrNode, ["attrs", "marL"])) * 96 / 914400;
      marginRight = parseInt(getTextByPathList(pPrNode, ["attrs", "marR"])) * 96 / 914400;
      if (isNaN(marginRight)) {
        marginRight = 0;
      }
      if (isNaN(marginLeft)) {
        marginLeft = 328600 * 96 / 914400;
      } else {
        marginLeft = 0;
      }
      const buPicId = getTextByPathList(buPic, [
        "a:blip",
        "attrs",
        "r:embed"
      ]);
      let buImg;
      if (buPicId !== void 0) {
        const imgPath = warpObj && warpObj["slideResObj"][buPicId]["target"];
        const imgArrayBuffer = warpObj && await warpObj["zip"].file(imgPath).async("arraybuffer");
        const imgExt = imgPath.split(".").pop();
        const imgMimeType = getImageMimeType(imgExt);
        buImg = "<img src='data:" + imgMimeType + ";base64," + base64ArrayBuffer(imgArrayBuffer) + "' style='width: 100%; height: 100%'/>";
      }
      if (buPicId === void 0) {
        buImg = "&#8227;";
      }
      bullet = "<span style='margin-left: " + marginLeft * lvl + "px; margin-right: " + marginRight + "px;width:" + bultSize + ";display: inline-block; ";
      if (isRTL) {
        bullet += " float: right;direction:rtl";
      }
      bullet += "'>" + buImg + "  </span>";
    } else {
      bullet = "<span style='margin-left: " + 328600 * 96 / 914400 * lvl + "px; margin-right: 0px;'></span>";
    }
    return bullet;
  }
  function genSpanElement(node, slideLayoutSpNode, slideMasterSpNode, type, warpObj) {
    const slideMasterTextStyles = warpObj["slideMasterTextStyles"];
    let text = node["a:t"];
    if (typeof text !== "string" && !(text instanceof String)) {
      text = getTextByPathList(node, ["a:fld", "a:t"]);
      if (typeof text !== "string" && !(text instanceof String)) {
        text = "&nbsp;";
      }
    }
    let styleText = "color:" + getFontColor(node) + ";font-size:" + getFontSize(
      node,
      slideLayoutSpNode,
      slideMasterSpNode,
      type,
      slideMasterTextStyles
    ) + ";font-family:" + getFontType(node, type) + ";font-weight:" + getFontBold(node) + ";font-style:" + getFontItalic(node) + ";text-decoration:" + getFontDecoration(node) + ";text-align:" + getTextHorizontalAlign(node) + ";vertical-align:" + getTextVerticalAlign(node) + ";";
    const highlight = getTextByPathList(node, [
      "a:rPr",
      "a:highlight"
    ]);
    if (highlight !== void 0) {
      styleText += "background-color:#" + getSolidFill(highlight) + ";";
      styleText += "Opacity:" + getColorOpacity(highlight) + ";";
    }
    let cssName = "";
    if (styleText in styleTable) {
      cssName = styleTable[styleText]["name"];
    } else {
      cssName = "_css_" + (Object.keys(styleTable).length + 1);
      styleTable[styleText] = {
        name: cssName,
        text: styleText
      };
    }
    const linkID = getTextByPathList(node, [
      "a:rPr",
      "a:hlinkClick",
      "attrs",
      "r:id"
    ]);
    if (linkID !== void 0) {
      const linkURL = warpObj["slideResObj"][linkID]["target"];
      return "<span class='text-block " + cssName + "'><a href='" + linkURL + "' target='_blank'>" + text.replace(/\s/, "&nbsp;") + "</a></span>";
    } else {
      return "<span class='text-block " + cssName + "'>" + text.replace(/\s/, "&nbsp;") + "</span>";
    }
  }
  function genGlobalCSS() {
    let cssText = "";
    for (const key in styleTable) {
      cssText += "section ." + styleTable[key]["name"] + "{" + styleTable[key]["text"] + "}\n";
    }
    return cssText;
  }
  async function genTable(node, warpObj) {
    const order = node["attrs"]["order"];
    const tableNode = getTextByPathList(node, [
      "a:graphic",
      "a:graphicData",
      "a:tbl"
    ]);
    const xfrmNode = getTextByPathList(node, ["p:xfrm"]);
    const getTblPr = getTextByPathList(node, [
      "a:graphic",
      "a:graphicData",
      "a:tbl",
      "a:tblPr"
    ]);
    const getColsGrid = getTextByPathList(node, [
      "a:graphic",
      "a:graphicData",
      "a:tbl",
      "a:tblGrid",
      "a:gridCol"
    ]);
    let tblDir = "";
    if (getTblPr !== void 0) {
      const isRTL = getTblPr["attrs"]["rtl"];
      tblDir = isRTL === 1 ? "dir=rtl" : "dir=ltr";
    }
    const firstRowAttr = getTblPr["attrs"]["firstRow"];
    const bandRowAttr = getTblPr["attrs"]["bandRow"];
    let tableHtml = "<table " + tblDir + " style='border-collapse: collapse;" + getPosition(xfrmNode, void 0, void 0) + getSize(xfrmNode, void 0, void 0) + " z-index: " + order + ";'>";
    const trNodes = tableNode["a:tr"];
    if (trNodes.constructor === Array) {
      for (let i = 0; i < trNodes.length; i++) {
        const rowHeightParam = trNodes[i]["attrs"]["h"];
        let rowHeight = 0;
        let rowsStyl = "";
        if (rowHeightParam !== void 0) {
          rowHeight = parseInt(rowHeightParam) * 96 / 914400;
          rowsStyl += "height:" + rowHeight + "px;";
        }
        let thisTblStyle = {};
        const tbleStyleId = getTblPr["a:tableStyleId"];
        if (tbleStyleId !== void 0) {
          const tbleStylList = tableStyles["a:tblStyleLst"]["a:tblStyle"] || [];
          for (let k = 0; k < tbleStylList.length; k++) {
            if (tbleStylList[k]["attrs"]["styleId"] === tbleStyleId) {
              thisTblStyle = tbleStylList[k];
            }
          }
        }
        if (i === 0 && firstRowAttr !== void 0) {
          let fillColor = "fff";
          let colorOpacity = 1;
          if (thisTblStyle["a:firstRow"] !== void 0) {
            const bgFillschemeClr = getTextByPathList(thisTblStyle, [
              "a:firstRow",
              "a:tcStyle",
              "a:fill",
              "a:solidFill"
            ]);
            if (bgFillschemeClr !== void 0) {
              fillColor = getSolidFill(bgFillschemeClr);
              colorOpacity = getColorOpacity(bgFillschemeClr);
            }
            const borderStyl = getTextByPathList(thisTblStyle, [
              "a:firstRow",
              "a:tcStyle",
              "a:tcBdr"
            ]);
            if (borderStyl !== void 0) {
              const rowBorders = getTableBorders(borderStyl);
              rowsStyl += rowBorders;
            }
            getTextByPathList(thisTblStyle, [
              "a:firstRow",
              "a:tcTxStyle"
            ]);
          }
          rowsStyl += " background-color:#" + fillColor + "; opacity:" + colorOpacity + ";";
        } else if (i > 0 && bandRowAttr !== void 0) {
          let fillColor = "fff";
          let colorOpacity = 1;
          if (i % 2 === 0) {
            if (thisTblStyle["a:band2H"] !== void 0) {
              const bgFillschemeClr = getTextByPathList(thisTblStyle, [
                "a:band2H",
                "a:tcStyle",
                "a:fill",
                "a:solidFill"
              ]);
              if (bgFillschemeClr !== void 0) {
                fillColor = getSolidFill(bgFillschemeClr);
                colorOpacity = getColorOpacity(bgFillschemeClr);
              }
              const borderStyl = getTextByPathList(thisTblStyle, [
                "a:band2H",
                "a:tcStyle",
                "a:tcBdr"
              ]);
              if (borderStyl !== void 0) {
                const rowBorders = getTableBorders(borderStyl);
                rowsStyl += rowBorders;
              }
              getTextByPathList(thisTblStyle, [
                "a:band2H",
                "a:tcTxStyle"
              ]);
            }
          } else {
            if (thisTblStyle["a:band1H"] !== void 0) {
              const bgFillschemeClr = getTextByPathList(thisTblStyle, [
                "a:band1H",
                "a:tcStyle",
                "a:fill",
                "a:solidFill"
              ]);
              if (bgFillschemeClr !== void 0) {
                fillColor = getSolidFill(bgFillschemeClr);
                colorOpacity = getColorOpacity(bgFillschemeClr);
              }
              const borderStyl = getTextByPathList(thisTblStyle, [
                "a:band1H",
                "a:tcStyle",
                "a:tcBdr"
              ]);
              if (borderStyl !== void 0) {
                const rowBorders = getTableBorders(borderStyl);
                rowsStyl += rowBorders;
              }
              getTextByPathList(thisTblStyle, [
                "a:band1H",
                "a:tcTxStyle"
              ]);
            }
          }
          rowsStyl += " background-color:#" + fillColor + "; opacity:" + colorOpacity + ";";
        }
        tableHtml += "<tr style='" + rowsStyl + "'>";
        const tcNodes = trNodes[i]["a:tc"];
        if (tcNodes.constructor === Array) {
          for (let j = 0; j < tcNodes.length; j++) {
            const text = await genTextBody(
              tcNodes[j]["a:txBody"],
              void 0,
              void 0,
              void 0,
              warpObj
            );
            const rowSpan = getTextByPathList(tcNodes[j], [
              "attrs",
              "rowSpan"
            ]);
            const colSpan = getTextByPathList(tcNodes[j], [
              "attrs",
              "gridSpan"
            ]);
            const vMerge = getTextByPathList(tcNodes[j], ["attrs", "vMerge"]);
            const hMerge = getTextByPathList(tcNodes[j], ["attrs", "hMerge"]);
            const colWidthParam = getColsGrid[j]["attrs"]["w"];
            let colStyl = "";
            if (colWidthParam !== void 0) {
              const colWidth = parseInt(colWidthParam) * 96 / 914400;
              colStyl += "width:" + colWidth + "px;";
            }
            const getFill = tcNodes[j]["a:tcPr"]["a:solidFill"];
            let fillColor = "";
            let colorOpacity = 1;
            if (getFill !== void 0) {
              fillColor = getSolidFill(getFill);
              colorOpacity = getColorOpacity(getFill);
            } else {
              const tbleStyleId2 = getTblPr["a:tableStyleId"];
              if (tbleStyleId2 !== void 0) {
                const tbleStylList = tableStyles["a:tblStyleLst"]["a:tblStyle"] || [];
                for (let k = 0; k < tbleStylList.length; k++) {
                  if (tbleStylList[k]["attrs"]["styleId"] === tbleStyleId2)
                    ;
                }
              }
            }
            if (fillColor !== "") {
              colStyl += " background-color:#" + fillColor + ";";
              colStyl += " opacity" + colorOpacity + ";";
            }
            if (rowSpan !== void 0) {
              tableHtml += "<td rowspan='" + parseInt(rowSpan) + "' style='" + colStyl + "'>" + text + "</td>";
            } else if (colSpan !== void 0) {
              tableHtml += "<td colspan='" + parseInt(colSpan) + "' style='" + colStyl + "'>" + text + "</td>";
            } else if (vMerge === void 0 && hMerge === void 0) {
              tableHtml += "<td style='" + colStyl + "'>" + text + "</td>";
            }
          }
        } else {
          const text = await genTextBody(tcNodes["a:txBody"]);
          const colWidthParam = getColsGrid[0]["attrs"]["w"];
          let colStyl = "";
          if (colWidthParam !== void 0) {
            const colWidth = parseInt(colWidthParam) * 96 / 914400;
            colStyl += "width:" + colWidth + "px;";
          }
          const getFill = tcNodes["a:tcPr"]["a:solidFill"];
          let fillColor = "";
          let colorOpacity = 1;
          if (getFill !== void 0) {
            fillColor = getSolidFill(getFill);
            colorOpacity = getColorOpacity(getFill);
          }
          if (fillColor !== "") {
            colStyl += " background-color:#" + fillColor + ";";
            colStyl += " opacity" + colorOpacity + ";";
          }
          tableHtml += "<td style='" + colStyl + "'>" + text + "</td>";
        }
        tableHtml += "</tr>";
      }
    } else {
      const rowHeightParam = trNodes["attrs"]["h"];
      let rowHeight = 0;
      if (rowHeightParam !== void 0) {
        rowHeight = parseInt(rowHeightParam) * 96 / 914400;
        tableHtml += "<tr style='height:" + rowHeight + "px;'>";
      } else {
        tableHtml += "<tr>";
      }
      const tcNodes = trNodes["a:tc"];
      if (tcNodes.constructor === Array) {
        for (let j = 0; j < tcNodes.length; j++) {
          const text = await genTextBody(tcNodes[j]["a:txBody"]);
          const colWidthParam = getColsGrid[j]["attrs"]["w"];
          let colStyl = "";
          if (colWidthParam !== void 0) {
            const colWidth = parseInt(colWidthParam) * 96 / 914400;
            colStyl += "width:" + colWidth + "px;";
          }
          const getFill = tcNodes[j]["a:tcPr"]["a:solidFill"];
          let fillColor = "";
          let colorOpacity = 1;
          if (getFill !== void 0) {
            fillColor = getSolidFill(getFill);
            colorOpacity = getColorOpacity(getFill);
          }
          if (fillColor !== "") {
            colStyl += " background-color:#" + fillColor + ";";
            colStyl += " opacity" + colorOpacity + ";";
          }
          tableHtml += "<td style='" + colStyl + "'>" + text + "</td>";
        }
      } else {
        const text = await genTextBody(tcNodes["a:txBody"]);
        const colWidthParam = getColsGrid[0]["attrs"]["w"];
        let colStyl = "";
        if (colWidthParam !== void 0) {
          const colWidth = parseInt(colWidthParam) * 96 / 914400;
          colStyl += "width:" + colWidth + "px;";
        }
        const getFill = tcNodes["a:tcPr"]["a:solidFill"];
        let fillColor = "";
        let colorOpacity = 1;
        if (getFill !== void 0) {
          fillColor = getSolidFill(getFill);
          colorOpacity = getColorOpacity(getFill);
        }
        if (fillColor !== "") {
          colStyl += " background-color:#" + fillColor + ";";
          colStyl += " opacity" + colorOpacity + ";";
        }
        tableHtml += "<td style='" + colStyl + "'>" + text + "</td>";
      }
      tableHtml += "</tr>";
    }
    return tableHtml;
  }
  async function genChart(node, warpObj) {
    const order = node["attrs"]["order"];
    const xfrmNode = getTextByPathList(node, ["p:xfrm"]);
    const result = "<div id='chart" + chartID + "' class='block content' style='" + getPosition(xfrmNode, void 0, void 0) + getSize(xfrmNode, void 0, void 0) + " z-index: " + order + ";'></div>";
    const rid = node["a:graphic"]["a:graphicData"]["c:chart"]["attrs"]["r:id"];
    const refName = warpObj["slideResObj"][rid]["target"];
    const content = await readXmlFile(warpObj["zip"], refName);
    const plotArea = getTextByPathList(content, [
      "c:chartSpace",
      "c:chart",
      "c:plotArea"
    ]);
    let chartData = null;
    for (const key in plotArea) {
      switch (key) {
        case "c:lineChart":
          chartData = {
            type: "createChart",
            data: {
              chartID: "chart" + chartID,
              chartType: "lineChart",
              chartData: extractChartData(plotArea[key]["c:ser"])
            }
          };
          break;
        case "c:barChart":
          chartData = {
            type: "createChart",
            data: {
              chartID: "chart" + chartID,
              chartType: "barChart",
              chartData: extractChartData(plotArea[key]["c:ser"])
            }
          };
          break;
        case "c:pieChart":
          chartData = {
            type: "createChart",
            data: {
              chartID: "chart" + chartID,
              chartType: "pieChart",
              chartData: extractChartData(plotArea[key]["c:ser"])
            }
          };
          break;
        case "c:pie3DChart":
          chartData = {
            type: "createChart",
            data: {
              chartID: "chart" + chartID,
              chartType: "pie3DChart",
              chartData: extractChartData(plotArea[key]["c:ser"])
            }
          };
          break;
        case "c:areaChart":
          chartData = {
            type: "createChart",
            data: {
              chartID: "chart" + chartID,
              chartType: "areaChart",
              chartData: extractChartData(plotArea[key]["c:ser"])
            }
          };
          break;
        case "c:scatterChart":
          chartData = {
            type: "createChart",
            data: {
              chartID: "chart" + chartID,
              chartType: "scatterChart",
              chartData: extractChartData(plotArea[key]["c:ser"])
            }
          };
          break;
      }
    }
    if (chartData != null) {
      charts.push(chartData);
    }
    chartID++;
    return result;
  }
  function genDiagram(node) {
    const xfrmNode = getTextByPathList(node, ["p:xfrm"]);
    return "<div class='block content' style='border: 1px dotted;" + getPosition(xfrmNode, void 0, void 0) + getSize(xfrmNode, void 0, void 0) + "'>TODO: diagram</div>";
  }
  function getPosition(slideSpNode, slideLayoutSpNode, slideMasterSpNode) {
    let off;
    let x = -1;
    let y = -1;
    if (slideSpNode !== void 0) {
      off = slideSpNode["a:off"]["attrs"];
    } else if (slideLayoutSpNode !== void 0) {
      off = slideLayoutSpNode["a:off"]["attrs"];
    } else if (slideMasterSpNode !== void 0) {
      off = slideMasterSpNode["a:off"]["attrs"];
    }
    if (off === void 0) {
      return "";
    } else {
      x = parseInt(off["x"]) * 96 / 914400;
      y = parseInt(off["y"]) * 96 / 914400;
      return isNaN(x) || isNaN(y) ? "" : "top:" + y + "px; left:" + x + "px;";
    }
  }
  function getSize(slideSpNode, slideLayoutSpNode, slideMasterSpNode) {
    let ext;
    let w = -1;
    let h = -1;
    if (slideSpNode !== void 0) {
      ext = slideSpNode["a:ext"]["attrs"];
    } else if (slideLayoutSpNode !== void 0) {
      ext = slideLayoutSpNode["a:ext"]["attrs"];
    } else if (slideMasterSpNode !== void 0) {
      ext = slideMasterSpNode["a:ext"]["attrs"];
    }
    if (ext === void 0) {
      return "";
    } else {
      w = parseInt(ext["cx"]) * 96 / 914400;
      h = parseInt(ext["cy"]) * 96 / 914400;
      return isNaN(w) || isNaN(h) ? "" : "width:" + w + "px; height:" + h + "px;";
    }
  }
  function getHorizontalAlign(node, slideLayoutSpNode, slideMasterSpNode, type, slideMasterTextStyles) {
    let algn = getTextByPathList(node, ["a:pPr", "attrs", "algn"]);
    if (algn === void 0) {
      algn = getTextByPathList(slideLayoutSpNode, [
        "p:txBody",
        "a:p",
        "a:pPr",
        "attrs",
        "algn"
      ]);
      if (algn === void 0) {
        algn = getTextByPathList(slideMasterSpNode, [
          "p:txBody",
          "a:p",
          "a:pPr",
          "attrs",
          "algn"
        ]);
        if (algn === void 0) {
          switch (type) {
            case "title":
            case "subTitle":
            case "ctrTitle": {
              algn = getTextByPathList(slideMasterTextStyles, [
                "p:titleStyle",
                "a:lvl1pPr",
                "attrs",
                "alng"
              ]);
              break;
            }
            default: {
              algn = getTextByPathList(slideMasterTextStyles, [
                "p:otherStyle",
                "a:lvl1pPr",
                "attrs",
                "alng"
              ]);
            }
          }
        }
      }
    }
    if (algn === void 0) {
      if (type === "title" || type === "subTitle" || type === "ctrTitle") {
        return "h-mid";
      } else if (type === "sldNum") {
        return "h-right";
      }
    }
    return algn === "ctr" ? "h-mid" : algn === "r" ? "h-right" : "h-left";
  }
  function getVerticalAlign(node, slideLayoutSpNode, slideMasterSpNode, type, slideMasterTextStyles) {
    let anchor = getTextByPathList(node, [
      "p:txBody",
      "a:bodyPr",
      "attrs",
      "anchor"
    ]);
    if (anchor === void 0) {
      anchor = getTextByPathList(slideLayoutSpNode, [
        "p:txBody",
        "a:bodyPr",
        "attrs",
        "anchor"
      ]);
      if (anchor === void 0) {
        anchor = getTextByPathList(slideMasterSpNode, [
          "p:txBody",
          "a:bodyPr",
          "attrs",
          "anchor"
        ]);
      }
    }
    return anchor === "ctr" ? "v-mid" : anchor === "b" ? "v-down" : "v-up";
  }
  function getFontType(node, type, slideMasterTextStyles) {
    let typeface = getTextByPathList(node, [
      "a:rPr",
      "a:latin",
      "attrs",
      "typeface"
    ]);
    if (typeface === void 0) {
      const fontSchemeNode = getTextByPathList(
        themeContent,
        ["a:theme", "a:themeElements", "a:fontScheme"]
      );
      if (type === "title" || type === "subTitle" || type === "ctrTitle") {
        typeface = getTextByPathList(fontSchemeNode, [
          "a:majorFont",
          "a:latin",
          "attrs",
          "typeface"
        ]);
      } else if (type === "body") {
        typeface = getTextByPathList(fontSchemeNode, [
          "a:minorFont",
          "a:latin",
          "attrs",
          "typeface"
        ]);
      } else {
        typeface = getTextByPathList(fontSchemeNode, [
          "a:minorFont",
          "a:latin",
          "attrs",
          "typeface"
        ]);
      }
    }
    return typeface === void 0 ? "inherit" : typeface;
  }
  function getFontColor(node, type, slideMasterTextStyles) {
    const solidFillNode = getTextByPathStr(node, "a:rPr a:solidFill");
    const color = getSolidFill(solidFillNode);
    return color === void 0 || color === "FFF" ? "#000" : "#" + color;
  }
  function getFontSize(node, slideLayoutSpNode, slideMasterSpNode, type, slideMasterTextStyles) {
    let fontSize = 16;
    let sz = "";
    if (node["a:rPr"] !== void 0) {
      fontSize = parseInt(node["a:rPr"]["attrs"]["sz"]) / 100;
    }
    if (isNaN(fontSize) || fontSize === void 0) {
      sz = getTextByPathList(slideLayoutSpNode, [
        "p:txBody",
        "a:lstStyle",
        "a:lvl1pPr",
        "a:defRPr",
        "attrs",
        "sz"
      ]);
      fontSize = parseInt(sz) / 100;
    }
    if (isNaN(fontSize) || fontSize === void 0) {
      if (type === "title" || type === "subTitle" || type === "ctrTitle") {
        sz = getTextByPathList(slideMasterTextStyles, [
          "p:titleStyle",
          "a:lvl1pPr",
          "a:defRPr",
          "attrs",
          "sz"
        ]);
      } else if (type === "body") {
        sz = getTextByPathList(slideMasterTextStyles, [
          "p:bodyStyle",
          "a:lvl1pPr",
          "a:defRPr",
          "attrs",
          "sz"
        ]);
      } else if (type === "dt" || type === "sldNum") {
        sz = "1200";
      } else if (type === void 0) {
        sz = getTextByPathList(slideMasterTextStyles, [
          "p:otherStyle",
          "a:lvl1pPr",
          "a:defRPr",
          "attrs",
          "sz"
        ]);
      }
      fontSize = parseInt(sz) / 100;
    }
    const baseline = getTextByPathList(node, ["a:rPr", "attrs", "baseline"]);
    if (baseline !== void 0 && !isNaN(fontSize)) {
      fontSize -= 10;
    }
    return isNaN(fontSize) ? "inherit" : fontSize + "pt";
  }
  function getFontBold(node, type, slideMasterTextStyles) {
    return node["a:rPr"] !== void 0 && node["a:rPr"]["attrs"]["b"] === "1" ? "bold" : "initial";
  }
  function getFontItalic(node, type, slideMasterTextStyles) {
    return node["a:rPr"] !== void 0 && node["a:rPr"]["attrs"]["i"] === "1" ? "italic" : "normal";
  }
  function getFontDecoration(node, type, slideMasterTextStyles) {
    if (node["a:rPr"] !== void 0) {
      const underLine = node["a:rPr"]["attrs"]["u"] !== void 0 ? node["a:rPr"]["attrs"]["u"] : "none";
      const strikethrough = node["a:rPr"]["attrs"]["strike"] !== void 0 ? node["a:rPr"]["attrs"]["strike"] : "noStrike";
      if (underLine !== "none" && strikethrough === "noStrike") {
        return "underline";
      } else if (underLine === "none" && strikethrough !== "noStrike") {
        return "line-through";
      } else if (underLine !== "none" && strikethrough !== "noStrike") {
        return "underline line-through";
      } else {
        return "initial";
      }
    } else {
      return "initial";
    }
  }
  function getTextHorizontalAlign(node, type, slideMasterTextStyles) {
    const getAlgn = getTextByPathList(node, ["a:pPr", "attrs", "algn"]);
    let align = "initial";
    if (getAlgn !== void 0) {
      switch (getAlgn) {
        case "l": {
          align = "left";
          break;
        }
        case "r": {
          align = "right";
          break;
        }
        case "ctr": {
          align = "center";
          break;
        }
        case "just": {
          align = "justify";
          break;
        }
        case "dist": {
          align = "justify";
          break;
        }
        default:
          align = "initial";
      }
    }
    return align;
  }
  function getTextVerticalAlign(node, type, slideMasterTextStyles) {
    const baseline = getTextByPathList(node, [
      "a:rPr",
      "attrs",
      "baseline"
    ]);
    return baseline === void 0 ? "baseline" : parseInt(baseline) / 1e3 + "%";
  }
  function getTableBorders(node) {
    let borderStyle = "";
    let obj;
    let borders;
    if (node["a:bottom"] !== void 0) {
      obj = {
        "p:spPr": {
          "a:ln": node["a:bottom"]["a:ln"]
        }
      };
      borders = getBorder(obj, false);
      borderStyle += borders.replace("border", "border-bottom");
    }
    if (node["a:top"] !== void 0) {
      obj = {
        "p:spPr": {
          "a:ln": node["a:top"]["a:ln"]
        }
      };
      borders = getBorder(obj, false);
      borderStyle += borders.replace("border", "border-top");
    }
    if (node["a:right"] !== void 0) {
      obj = {
        "p:spPr": {
          "a:ln": node["a:right"]["a:ln"]
        }
      };
      borders = getBorder(obj, false);
      borderStyle += borders.replace("border", "border-right");
    }
    if (node["a:left"] !== void 0) {
      obj = {
        "p:spPr": {
          "a:ln": node["a:left"]["a:ln"]
        }
      };
      borders = getBorder(obj, false);
      borderStyle += borders.replace("border", "border-left");
    }
    return borderStyle;
  }
  function getBorder(node, isSvgMode) {
    let cssText = "border: ";
    const lineNode = node["p:spPr"]["a:ln"];
    const borderWidth = parseInt(getTextByPathList(lineNode, ["attrs", "w"])) / 12700;
    if (isNaN(borderWidth) || borderWidth < 1) {
      cssText += "1pt ";
    } else {
      cssText += borderWidth + "pt ";
    }
    const borderType = getTextByPathList(lineNode, [
      "a:prstDash",
      "attrs",
      "val"
    ]);
    let strokeDasharray = "0";
    switch (borderType) {
      case "solid": {
        cssText += "solid";
        strokeDasharray = "0";
        break;
      }
      case "dash": {
        cssText += "dashed";
        strokeDasharray = "5";
        break;
      }
      case "dashDot": {
        cssText += "dashed";
        strokeDasharray = "5, 5, 1, 5";
        break;
      }
      case "dot": {
        cssText += "dotted";
        strokeDasharray = "1, 5";
        break;
      }
      case "lgDash": {
        cssText += "dashed";
        strokeDasharray = "10, 5";
        break;
      }
      case "lgDashDotDot": {
        cssText += "dashed";
        strokeDasharray = "10, 5, 1, 5, 1, 5";
        break;
      }
      case "sysDash": {
        cssText += "dashed";
        strokeDasharray = "5, 2";
        break;
      }
      case "sysDashDot": {
        cssText += "dashed";
        strokeDasharray = "5, 2, 1, 5";
        break;
      }
      case "sysDashDotDot": {
        cssText += "dashed";
        strokeDasharray = "5, 2, 1, 5, 1, 5";
        break;
      }
      case "sysDot": {
        cssText += "dotted";
        strokeDasharray = "2, 5";
        break;
      }
      default: {
        cssText += "solid";
        strokeDasharray = "0";
      }
    }
    let borderColor = getTextByPathList(lineNode, [
      "a:solidFill",
      "a:srgbClr",
      "attrs",
      "val"
    ]);
    if (borderColor === void 0) {
      const schemeClrNode = getTextByPathList(lineNode, [
        "a:solidFill",
        "a:schemeClr"
      ]);
      if (schemeClrNode !== void 0) {
        const schemeClr = "a:" + getTextByPathList(schemeClrNode, ["attrs", "val"]);
        borderColor = getSchemeColorFromTheme(schemeClr, void 0);
      }
    }
    if (borderColor === void 0) {
      const schemeClrNode = getTextByPathList(node, [
        "p:style",
        "a:lnRef",
        "a:schemeClr"
      ]);
      if (schemeClrNode !== void 0) {
        const schemeClr = "a:" + getTextByPathList(schemeClrNode, ["attrs", "val"]);
        borderColor = getSchemeColorFromTheme(schemeClr, void 0);
      }
      if (borderColor !== void 0) {
        let shade = getTextByPathList(schemeClrNode, [
          "a:shade",
          "attrs",
          "val"
        ]);
        if (shade !== void 0) {
          shade = (parseInt(shade) / 1e5).toString();
          const color = new Color("#" + borderColor);
          color.setLum(Number(color.hsl.l) * Number(shade));
          borderColor = color.hex.replace("#", "");
        }
      }
    }
    if (borderColor === void 0) {
      if (isSvgMode) {
        borderColor = "none";
      } else {
        borderColor = "#000";
      }
    } else {
      borderColor = "#" + borderColor;
    }
    cssText += " " + borderColor + " ";
    if (isSvgMode) {
      return {
        color: borderColor,
        width: borderWidth,
        type: borderType,
        strokeDasharray
      };
    } else {
      return cssText + ";";
    }
  }
  async function getSlideBackgroundFill(slideContent, slideLayoutContent, slideMasterContent, warpObj) {
    let bgPr = getTextByPathList(slideContent, [
      "p:sld",
      "p:cSld",
      "p:bg",
      "p:bgPr"
    ]);
    let bgRef = getTextByPathList(slideContent, [
      "p:sld",
      "p:cSld",
      "p:bg",
      "p:bgRef"
    ]);
    let bgcolor;
    if (bgPr !== void 0) {
      const bgFillTyp = getFillType(bgPr);
      if (bgFillTyp === "SOLID_FILL") {
        const sldFill = bgPr["a:solidFill"];
        const bgColor = getSolidFill(sldFill);
        const sldTint = getColorOpacity(sldFill);
        bgcolor = "background: rgba(" + hexToRgbNew(bgColor) + "," + sldTint + ");";
      } else if (bgFillTyp === "GRADIENT_FILL") {
        const grdFill = bgPr["a:gradFill"];
        const gsLst = grdFill["a:gsLst"]["a:gs"];
        const colorArray = [];
        const tintArray = [];
        for (let i = 0; i < gsLst.length; i++) {
          let loTint = "";
          let loColor;
          if (gsLst[i]["a:srgbClr"] !== void 0) {
            loColor = getTextByPathList(gsLst[i], ["a:srgbClr", "attrs", "val"]);
            loTint = getTextByPathList(gsLst[i], [
              "a:srgbClr",
              "a:tint",
              "attrs",
              "val"
            ]);
          } else if (gsLst[i]["a:schemeClr"] !== void 0) {
            const schemeClr = getTextByPathList(gsLst[i], [
              "a:schemeClr",
              "attrs",
              "val"
            ]);
            loColor = getSchemeColorFromTheme(
              "a:" + schemeClr,
              slideMasterContent
            );
            loTint = getTextByPathList(gsLst[i], [
              "a:schemeClr",
              "a:tint",
              "attrs",
              "val"
            ]);
          }
          colorArray[i] = loColor;
          tintArray[i] = loTint !== void 0 ? parseInt(loTint) / 1e5 : 1;
        }
        const lin = grdFill["a:lin"];
        let rot = 90;
        if (lin !== void 0) {
          rot = angleToDegrees(lin["attrs"]["ang"]) + 90;
        }
        bgcolor = "background: linear-gradient(" + rot + "deg,";
        for (let i = 0; i < gsLst.length; i++) {
          if (i === gsLst.length - 1) {
            bgcolor += "rgba(" + hexToRgbNew(colorArray[i]) + "," + tintArray[i] + "));";
          } else {
            bgcolor += "rgba(" + hexToRgbNew(colorArray[i]) + "," + tintArray[i] + "), ";
          }
        }
      } else if (bgFillTyp === "PIC_FILL") {
        const picFillBase64 = await getPicFill(
          "slideBg",
          bgPr["a:blipFill"],
          warpObj
        );
        const ordr = bgPr["attrs"]["order"];
        bgcolor = "background-image: url(" + picFillBase64 + ");  z-index: " + ordr + ";";
      }
    } else if (bgRef !== void 0) {
      let phClr = "";
      if (bgRef["a:srgbClr"] !== void 0) {
        phClr = getTextByPathList(bgRef, [
          "a:srgbClr",
          "attrs",
          "val"
        ]);
      } else if (bgRef["a:schemeClr"] !== void 0) {
        const schemeClr = getTextByPathList(bgRef, [
          "a:schemeClr",
          "attrs",
          "val"
        ]);
        phClr = getSchemeColorFromTheme(
          "a:" + schemeClr,
          slideMasterContent
        );
      }
      const idx = Number(bgRef["attrs"]["idx"]);
      if (idx === 0 || idx === 1e3)
        ;
      else if (idx > 0 && idx < 1e3)
        ;
      else if (idx > 1e3) {
        const trueIdx = idx - 1e3;
        const bgFillLst = themeContent["a:theme"]["a:themeElements"]["a:fmtScheme"]["a:bgFillStyleLst"];
        const sortblAry = [];
        Object.keys(bgFillLst).forEach(function(key) {
          const bgFillLstTyp = bgFillLst[key];
          if (key !== "attrs") {
            if (bgFillLstTyp.constructor === Array) {
              for (let i = 0; i < bgFillLstTyp.length; i++) {
                const obj = {};
                obj[key] = bgFillLstTyp[i];
                obj["idex"] = bgFillLstTyp[i]["attrs"]["order"];
                sortblAry.push(obj);
              }
            } else {
              const obj = {};
              obj[key] = bgFillLstTyp;
              obj["idex"] = bgFillLstTyp["attrs"]["order"];
              sortblAry.push(obj);
            }
          }
        });
        const sortByOrder = sortblAry.slice(0);
        sortByOrder.sort(function(a, b) {
          return a.idex - b.idex;
        });
        const bgFillLstIdx = sortByOrder[trueIdx - 1];
        const bgFillTyp = getFillType(bgFillLstIdx);
        if (bgFillTyp === "SOLID_FILL") {
          const sldFill = bgFillLstIdx["a:solidFill"];
          const sldTint = getColorOpacity(sldFill);
          bgcolor = "background: rgba(" + hexToRgbNew(phClr) + "," + sldTint + ");";
        } else if (bgFillTyp === "GRADIENT_FILL") {
          const grdFill = bgFillLstIdx["a:gradFill"];
          const gsLst = grdFill["a:gsLst"]["a:gs"];
          const tintArray = [];
          for (let i = 0; i < gsLst.length; i++) {
            const loTint = getTextByPathList(gsLst[i], [
              "a:schemeClr",
              "a:tint",
              "attrs",
              "val"
            ]);
            tintArray[i] = loTint !== void 0 ? parseInt(loTint) / 1e5 : 1;
          }
          const lin = grdFill["a:lin"];
          let rot = 90;
          if (lin !== void 0) {
            rot = angleToDegrees(lin["attrs"]["ang"]) + 90;
          }
          bgcolor = "background: linear-gradient(" + rot + "deg,";
          for (let i = 0; i < gsLst.length; i++) {
            if (i === gsLst.length - 1) {
              bgcolor += "rgba(" + hexToRgbNew(phClr) + "," + tintArray[i] + "));";
            } else {
              bgcolor += "rgba(" + hexToRgbNew(phClr) + "," + tintArray[i] + "), ";
            }
          }
        }
      }
    } else {
      bgPr = getTextByPathList(slideLayoutContent, [
        "p:sldLayout",
        "p:cSld",
        "p:bg",
        "p:bgPr"
      ]);
      bgRef = getTextByPathList(slideLayoutContent, [
        "p:sldLayout",
        "p:cSld",
        "p:bg",
        "p:bgRef"
      ]);
      if (bgPr !== void 0) {
        const bgFillTyp = getFillType(bgPr);
        if (bgFillTyp === "SOLID_FILL") {
          const sldFill = bgPr["a:solidFill"];
          const bgColor = getSolidFill(sldFill);
          const sldTint = getColorOpacity(sldFill);
          bgcolor = "background: rgba(" + hexToRgbNew(bgColor) + "," + sldTint + ");";
        } else if (bgFillTyp === "GRADIENT_FILL") {
          const grdFill = bgPr["a:gradFill"];
          const gsLst = grdFill["a:gsLst"]["a:gs"];
          const colorArray = [];
          const tintArray = [];
          for (let i = 0; i < gsLst.length; i++) {
            let loTint = "";
            let loColor;
            if (gsLst[i]["a:srgbClr"] !== void 0) {
              loColor = getTextByPathList(gsLst[i], [
                "a:srgbClr",
                "attrs",
                "val"
              ]);
              loTint = getTextByPathList(gsLst[i], [
                "a:srgbClr",
                "a:tint",
                "attrs",
                "val"
              ]);
            } else if (gsLst[i]["a:schemeClr"] !== void 0) {
              const schemeClr = getTextByPathList(gsLst[i], [
                "a:schemeClr",
                "attrs",
                "val"
              ]);
              loColor = getSchemeColorFromTheme(
                "a:" + schemeClr,
                slideMasterContent
              );
              loTint = getTextByPathList(gsLst[i], [
                "a:schemeClr",
                "a:tint",
                "attrs",
                "val"
              ]);
            }
            colorArray[i] = loColor;
            tintArray[i] = loTint !== void 0 ? parseInt(loTint) / 1e5 : 1;
          }
          const lin = grdFill["a:lin"];
          let rot = 90;
          if (lin !== void 0) {
            rot = angleToDegrees(lin["attrs"]["ang"]) + 90;
          }
          bgcolor = "background: linear-gradient(" + rot + "deg,";
          for (let i = 0; i < gsLst.length; i++) {
            if (i === gsLst.length - 1) {
              bgcolor += "rgba(" + hexToRgbNew(colorArray[i]) + "," + tintArray[i] + "));";
            } else {
              bgcolor += "rgba(" + hexToRgbNew(colorArray[i]) + "," + tintArray[i] + "), ";
            }
          }
        } else if (bgFillTyp === "PIC_FILL") {
          const picFillBase64 = await getPicFill(
            "layoutBg",
            bgPr["a:blipFill"],
            warpObj
          );
          const ordr = bgPr["attrs"]["order"];
          bgcolor = "background-image: url(" + picFillBase64 + ");  z-index: " + ordr + ";";
        }
      } else if (bgRef !== void 0) {
        bgcolor = "background: red;";
      } else {
        bgPr = getTextByPathList(slideMasterContent, [
          "p:sldMaster",
          "p:cSld",
          "p:bg",
          "p:bgPr"
        ]);
        bgRef = getTextByPathList(slideMasterContent, [
          "p:sldMaster",
          "p:cSld",
          "p:bg",
          "p:bgRef"
        ]);
        if (bgPr !== void 0) {
          const bgFillTyp = getFillType(bgPr);
          if (bgFillTyp === "SOLID_FILL") {
            const sldFill = bgPr["a:solidFill"];
            const bgColor = getSolidFill(sldFill);
            const sldTint = getColorOpacity(sldFill);
            bgcolor = "background: rgba(" + hexToRgbNew(bgColor) + "," + sldTint + ");";
          } else if (bgFillTyp === "GRADIENT_FILL") {
            const grdFill = bgPr["a:gradFill"];
            const gsLst = grdFill["a:gsLst"]["a:gs"];
            const colorArray = [];
            const tintArray = [];
            for (let i = 0; i < gsLst.length; i++) {
              let loTint = "";
              let loColor;
              if (gsLst[i]["a:srgbClr"] !== void 0) {
                loColor = getTextByPathList(gsLst[i], [
                  "a:srgbClr",
                  "attrs",
                  "val"
                ]);
                loTint = getTextByPathList(gsLst[i], [
                  "a:srgbClr",
                  "a:tint",
                  "attrs",
                  "val"
                ]);
              } else if (gsLst[i]["a:schemeClr"] !== void 0) {
                const schemeClr = getTextByPathList(gsLst[i], [
                  "a:schemeClr",
                  "attrs",
                  "val"
                ]);
                loColor = getSchemeColorFromTheme(
                  "a:" + schemeClr,
                  slideMasterContent
                );
                loTint = getTextByPathList(gsLst[i], [
                  "a:schemeClr",
                  "a:tint",
                  "attrs",
                  "val"
                ]);
              }
              colorArray[i] = loColor;
              tintArray[i] = loTint !== void 0 ? parseInt(loTint) / 1e5 : 1;
            }
            const lin = grdFill["a:lin"];
            let rot = 90;
            if (lin !== void 0) {
              rot = angleToDegrees(lin["attrs"]["ang"]) + 90;
            }
            bgcolor = "background: linear-gradient(" + rot + "deg,";
            for (let i = 0; i < gsLst.length; i++) {
              if (i === gsLst.length - 1) {
                bgcolor += "rgba(" + hexToRgbNew(colorArray[i]) + "," + tintArray[i] + "));";
              } else {
                bgcolor += "rgba(" + hexToRgbNew(colorArray[i]) + "," + tintArray[i] + "), ";
              }
            }
          } else if (bgFillTyp === "PIC_FILL") {
            const picFillBase64 = await getPicFill(
              "masterBg",
              bgPr["a:blipFill"],
              warpObj
            );
            const ordr = bgPr["attrs"]["order"];
            bgcolor = "background-image: url(" + picFillBase64 + ");  z-index: " + ordr + ";";
          }
        } else if (bgRef !== void 0) {
          let phClr = "";
          if (bgRef["a:srgbClr"] !== void 0) {
            phClr = getTextByPathList(bgRef, [
              "a:srgbClr",
              "attrs",
              "val"
            ]);
          } else if (bgRef["a:schemeClr"] !== void 0) {
            const schemeClr = getTextByPathList(bgRef, [
              "a:schemeClr",
              "attrs",
              "val"
            ]);
            phClr = getSchemeColorFromTheme(
              "a:" + schemeClr,
              slideMasterContent
            );
          }
          const idx = Number(bgRef["attrs"]["idx"]);
          if (idx === 0 || idx === 1e3)
            ;
          else if (idx > 0 && idx < 1e3)
            ;
          else if (idx > 1e3) {
            const trueIdx = idx - 1e3;
            const bgFillLst = themeContent["a:theme"]["a:themeElements"]["a:fmtScheme"]["a:bgFillStyleLst"];
            const sortblAry = [];
            Object.keys(bgFillLst).forEach(function(key) {
              const bgFillLstTyp = bgFillLst[key];
              if (key !== "attrs") {
                if (bgFillLstTyp.constructor === Array) {
                  for (let i = 0; i < bgFillLstTyp.length; i++) {
                    const obj = {};
                    obj[key] = bgFillLstTyp[i];
                    obj["idex"] = bgFillLstTyp[i]["attrs"]["order"];
                    sortblAry.push(obj);
                  }
                } else {
                  const obj = {};
                  obj[key] = bgFillLstTyp;
                  obj["idex"] = bgFillLstTyp["attrs"]["order"];
                  sortblAry.push(obj);
                }
              }
            });
            const sortByOrder = sortblAry.slice(0);
            sortByOrder.sort(function(a, b) {
              return a.idex - b.idex;
            });
            const bgFillLstIdx = sortByOrder[trueIdx - 1];
            const bgFillTyp = getFillType(bgFillLstIdx);
            if (bgFillTyp === "SOLID_FILL") {
              const sldFill = bgFillLstIdx["a:solidFill"];
              const sldTint = getColorOpacity(sldFill);
              bgcolor = "background: rgba(" + hexToRgbNew(phClr) + "," + sldTint + ");";
            } else if (bgFillTyp === "GRADIENT_FILL") {
              const grdFill = bgFillLstIdx["a:gradFill"];
              const gsLst = grdFill["a:gsLst"]["a:gs"];
              const tintArray = [];
              for (let i = 0; i < gsLst.length; i++) {
                const loTint = getTextByPathList(gsLst[i], [
                  "a:schemeClr",
                  "a:tint",
                  "attrs",
                  "val"
                ]);
                tintArray[i] = loTint !== void 0 ? parseInt(loTint) / 1e5 : 1;
              }
              const lin = grdFill["a:lin"];
              let rot = 90;
              if (lin !== void 0) {
                rot = angleToDegrees(lin["attrs"]["ang"]) + 90;
              }
              bgcolor = "background: linear-gradient(" + rot + "deg,";
              for (let i = 0; i < gsLst.length; i++) {
                if (i === gsLst.length - 1) {
                  bgcolor += "rgba(" + hexToRgbNew(phClr) + "," + tintArray[i] + "));";
                } else {
                  bgcolor += "rgba(" + hexToRgbNew(phClr) + "," + tintArray[i] + "), ";
                }
              }
            } else
              ;
          }
        }
      }
    }
    return bgcolor;
  }
  function hexToRgbNew(hex = "FFFFFF") {
    const arrBuff = new ArrayBuffer(4);
    const vw = new DataView(arrBuff);
    vw.setUint32(0, parseInt(hex, 16), false);
    const arrByte = new Uint8Array(arrBuff);
    return arrByte[1] + "," + arrByte[2] + "," + arrByte[3];
  }
  async function getShapeFill(node, isSvgMode, warpObj) {
    const fillType = getFillType(
      getTextByPathList(node, ["p:spPr"])
    );
    let fillColor;
    if (fillType === "NO_FILL") {
      return isSvgMode ? "none" : "background-color: initial;";
    } else if (fillType === "SOLID_FILL") {
      const shpFill = node["p:spPr"]["a:solidFill"];
      fillColor = getSolidFill(shpFill);
    } else if (fillType === "GRADIENT_FILL") {
      const shpFill = node["p:spPr"]["a:gradFill"];
      fillColor = getGradientFill(shpFill);
    } else if (fillType === "PATTERN_FILL") {
      const shpFill = node["p:spPr"]["a:pattFill"];
      fillColor = getPatternFill(shpFill);
    } else if (fillType === "PIC_FILL") {
      const shpFill = node["p:spPr"]["a:blipFill"];
      fillColor = await getPicFill("slideBg", shpFill, warpObj);
    }
    if (fillColor === void 0) {
      const clrName = getTextByPathList(node, ["p:style", "a:fillRef"]);
      fillColor = getSolidFill(clrName);
    }
    if (fillColor !== void 0) {
      if (fillType === "GRADIENT_FILL") {
        if (isSvgMode) {
          return fillColor;
        } else {
          const colorAry = fillColor.color;
          const rot = fillColor.rot;
          let bgcolor = "background: linear-gradient(" + rot + "deg,";
          for (let i = 0; i < colorAry.length; i++) {
            if (i === colorAry.length - 1) {
              bgcolor += colorAry[i] + ");";
            } else {
              bgcolor += colorAry[i] + ", ";
            }
          }
          return bgcolor;
        }
      } else if (fillType === "PIC_FILL") {
        if (isSvgMode) {
          return fillColor;
        } else {
          return "background-image:url(" + fillColor + ");";
        }
      } else {
        if (isSvgMode) {
          const color = new Color(fillColor);
          fillColor = color.rgb.toString();
          return fillColor;
        } else {
          return "background-color: #" + fillColor + ";";
        }
      }
    } else {
      if (isSvgMode) {
        return "none";
      } else {
        return "background-color: initial;";
      }
    }
  }
  function getFillType(node) {
    let fillType = "";
    if (node["a:noFill"] !== void 0) {
      fillType = "NO_FILL";
    }
    if (node["a:solidFill"] !== void 0) {
      fillType = "SOLID_FILL";
    }
    if (node["a:gradFill"] !== void 0) {
      fillType = "GRADIENT_FILL";
    }
    if (node["a:pattFill"] !== void 0) {
      fillType = "PATTERN_FILL";
    }
    if (node["a:blipFill"] !== void 0) {
      fillType = "PIC_FILL";
    }
    return fillType;
  }
  function getGradientFill(node) {
    const gsLst = node["a:gsLst"]["a:gs"];
    const colorArray = [];
    for (let i = 0; i < gsLst.length; i++) {
      let loColor = getSolidFill(gsLst[i]);
      if (gsLst[i]["a:srgbClr"] !== void 0) {
        let lumMod = parseInt(
          getTextByPathList(node, [
            "a:srgbClr",
            "a:lumMod",
            "attrs",
            "val"
          ])
        ) / 1e5;
        let lumOff = parseInt(
          getTextByPathList(node, [
            "a:srgbClr",
            "a:lumOff",
            "attrs",
            "val"
          ])
        ) / 1e5;
        if (isNaN(lumMod)) {
          lumMod = 1;
        }
        if (isNaN(lumOff)) {
          lumOff = 0;
        }
        loColor = applyLumModify(loColor, lumMod, lumOff);
      } else if (gsLst[i]["a:schemeClr"] !== void 0) {
        let lumMod = parseInt(
          getTextByPathList(gsLst[i], [
            "a:schemeClr",
            "a:lumMod",
            "attrs",
            "val"
          ])
        ) / 1e5;
        let lumOff = parseInt(
          getTextByPathList(gsLst[i], [
            "a:schemeClr",
            "a:lumOff",
            "attrs",
            "val"
          ])
        ) / 1e5;
        if (isNaN(lumMod)) {
          lumMod = 1;
        }
        if (isNaN(lumOff)) {
          lumOff = 0;
        }
        loColor = applyLumModify(loColor, lumMod, lumOff);
      }
      colorArray[i] = loColor;
    }
    const lin = node["a:lin"];
    let rot = 0;
    if (lin !== void 0) {
      rot = angleToDegrees(lin["attrs"]["ang"]) + 90;
    }
    return {
      color: colorArray,
      rot
    };
  }
  async function getPicFill(type, node, warpObj) {
    const rId = node["a:blip"]["attrs"]["r:embed"];
    let imgPath;
    if (type === "slideBg") {
      imgPath = getTextByPathList(warpObj, ["slideResObj", rId, "target"]);
    } else if (type === "layoutBg") {
      imgPath = getTextByPathList(warpObj, ["layoutResObj", rId, "target"]);
    } else if (type === "masterBg") {
      imgPath = getTextByPathList(warpObj, ["masterResObj", rId, "target"]);
    }
    if (imgPath === void 0) {
      return void 0;
    }
    const imgExt = imgPath.split(".").pop();
    if (imgExt === "xml") {
      return void 0;
    }
    const imgArrayBuffer = await warpObj["zip"].file(imgPath).async("arraybuffer");
    const imgMimeType = getImageMimeType(imgExt);
    const img = "data:" + imgMimeType + ";base64," + base64ArrayBuffer(imgArrayBuffer);
    return img;
  }
  function getPatternFill(node) {
    const bgClr = node["a:bgClr"];
    return getSolidFill(bgClr);
  }
  function getSolidFill(node) {
    if (node === void 0) {
      return void 0;
    }
    let color = "FFF";
    if (node["a:srgbClr"] !== void 0) {
      color = getTextByPathList(node, ["a:srgbClr", "attrs", "val"]);
    } else if (node["a:schemeClr"] !== void 0) {
      const schemeClr = getTextByPathList(node, ["a:schemeClr", "attrs", "val"]);
      color = getSchemeColorFromTheme("a:" + schemeClr, void 0);
    } else if (node["a:scrgbClr"] !== void 0) {
      const defBultColorVals = node["a:scrgbClr"]["attrs"];
      const red = defBultColorVals["r"].indexOf("%") !== -1 ? defBultColorVals["r"].split("%").shift() : defBultColorVals["r"];
      const green = defBultColorVals["g"].indexOf("%") !== -1 ? defBultColorVals["g"].split("%").shift() : defBultColorVals["g"];
      const blue = defBultColorVals["b"].indexOf("%") !== -1 ? defBultColorVals["b"].split("%").shift() : defBultColorVals["b"];
      color = toHex(255 * (Number(red) / 100)) + toHex(255 * (Number(green) / 100)) + toHex(255 * (Number(blue) / 100));
    } else if (node["a:prstClr"] !== void 0) {
      const prstClr = node["a:prstClr"]["attrs"]["val"];
      color = getColorName2Hex(prstClr);
    } else if (node["a:hslClr"] !== void 0) {
      const defBultColorVals = node["a:hslClr"]["attrs"];
      const hue = Number(defBultColorVals["hue"]) / 1e5;
      const sat = Number(
        defBultColorVals["sat"].indexOf("%") !== -1 ? defBultColorVals["sat"].split("%").shift() : defBultColorVals["sat"]
      ) / 100;
      const lum = Number(
        defBultColorVals["lum"].indexOf("%") !== -1 ? defBultColorVals["lum"].split("%").shift() : defBultColorVals["lum"]
      ) / 100;
      const hsl2rgb = hslToRgb(hue, sat, lum);
      color = toHex(hsl2rgb.r) + toHex(hsl2rgb.g) + toHex(hsl2rgb.b);
    } else if (node["a:sysClr"] !== void 0) {
      const sysClr = getTextByPathList(node, ["a:sysClr", "attrs", "lastClr"]);
      if (sysClr !== void 0) {
        color = sysClr;
      }
    }
    return color;
  }
  function toHex(n) {
    let hex = n.toString(16);
    while (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  }
  function hslToRgb(hue, sat, light) {
    let t2;
    hue = hue / 60;
    if (light <= 0.5) {
      t2 = light * (sat + 1);
    } else {
      t2 = light + sat - light * sat;
    }
    const t1 = light * 2 - t2;
    const r = hueToRgb(t1, t2, hue + 2) * 255;
    const g = hueToRgb(t1, t2, hue) * 255;
    const b = hueToRgb(t1, t2, hue - 2) * 255;
    return { r, g, b };
  }
  function hueToRgb(t1, t2, hue) {
    if (hue < 0)
      hue += 6;
    if (hue >= 6)
      hue -= 6;
    if (hue < 1)
      return (t2 - t1) * hue + t1;
    else if (hue < 3)
      return t2;
    else if (hue < 4)
      return (t2 - t1) * (4 - hue) + t1;
    else
      return t1;
  }
  function getColorName2Hex(name) {
    let hex;
    const colorName = [
      "AliceBlue",
      "AntiqueWhite",
      "Aqua",
      "Aquamarine",
      "Azure",
      "Beige",
      "Bisque",
      "Black",
      "BlanchedAlmond",
      "Blue",
      "BlueViolet",
      "Brown",
      "BurlyWood",
      "CadetBlue",
      "Chartreuse",
      "Chocolate",
      "Coral",
      "CornflowerBlue",
      "Cornsilk",
      "Crimson",
      "Cyan",
      "DarkBlue",
      "DarkCyan",
      "DarkGoldenRod",
      "DarkGray",
      "DarkGrey",
      "DarkGreen",
      "DarkKhaki",
      "DarkMagenta",
      "DarkOliveGreen",
      "DarkOrange",
      "DarkOrchid",
      "DarkRed",
      "DarkSalmon",
      "DarkSeaGreen",
      "DarkSlateBlue",
      "DarkSlateGray",
      "DarkSlateGrey",
      "DarkTurquoise",
      "DarkViolet",
      "DeepPink",
      "DeepSkyBlue",
      "DimGray",
      "DimGrey",
      "DodgerBlue",
      "FireBrick",
      "FloralWhite",
      "ForestGreen",
      "Fuchsia",
      "Gainsboro",
      "GhostWhite",
      "Gold",
      "GoldenRod",
      "Gray",
      "Grey",
      "Green",
      "GreenYellow",
      "HoneyDew",
      "HotPink",
      "IndianRed",
      "Indigo",
      "Ivory",
      "Khaki",
      "Lavender",
      "LavenderBlush",
      "LawnGreen",
      "LemonChiffon",
      "LightBlue",
      "LightCoral",
      "LightCyan",
      "LightGoldenRodYellow",
      "LightGray",
      "LightGrey",
      "LightGreen",
      "LightPink",
      "LightSalmon",
      "LightSeaGreen",
      "LightSkyBlue",
      "LightSlateGray",
      "LightSlateGrey",
      "LightSteelBlue",
      "LightYellow",
      "Lime",
      "LimeGreen",
      "Linen",
      "Magenta",
      "Maroon",
      "MediumAquaMarine",
      "MediumBlue",
      "MediumOrchid",
      "MediumPurple",
      "MediumSeaGreen",
      "MediumSlateBlue",
      "MediumSpringGreen",
      "MediumTurquoise",
      "MediumVioletRed",
      "MidnightBlue",
      "MintCream",
      "MistyRose",
      "Moccasin",
      "NavajoWhite",
      "Navy",
      "OldLace",
      "Olive",
      "OliveDrab",
      "Orange",
      "OrangeRed",
      "Orchid",
      "PaleGoldenRod",
      "PaleGreen",
      "PaleTurquoise",
      "PaleVioletRed",
      "PapayaWhip",
      "PeachPuff",
      "Peru",
      "Pink",
      "Plum",
      "PowderBlue",
      "Purple",
      "RebeccaPurple",
      "Red",
      "RosyBrown",
      "RoyalBlue",
      "SaddleBrown",
      "Salmon",
      "SandyBrown",
      "SeaGreen",
      "SeaShell",
      "Sienna",
      "Silver",
      "SkyBlue",
      "SlateBlue",
      "SlateGray",
      "SlateGrey",
      "Snow",
      "SpringGreen",
      "SteelBlue",
      "Tan",
      "Teal",
      "Thistle",
      "Tomato",
      "Turquoise",
      "Violet",
      "Wheat",
      "White",
      "WhiteSmoke",
      "Yellow",
      "YellowGreen"
    ];
    const colorHex = [
      "f0f8ff",
      "faebd7",
      "00ffff",
      "7fffd4",
      "f0ffff",
      "f5f5dc",
      "ffe4c4",
      "000000",
      "ffebcd",
      "0000ff",
      "8a2be2",
      "a52a2a",
      "deb887",
      "5f9ea0",
      "7fff00",
      "d2691e",
      "ff7f50",
      "6495ed",
      "fff8dc",
      "dc143c",
      "00ffff",
      "00008b",
      "008b8b",
      "b8860b",
      "a9a9a9",
      "a9a9a9",
      "006400",
      "bdb76b",
      "8b008b",
      "556b2f",
      "ff8c00",
      "9932cc",
      "8b0000",
      "e9967a",
      "8fbc8f",
      "483d8b",
      "2f4f4f",
      "2f4f4f",
      "00ced1",
      "9400d3",
      "ff1493",
      "00bfff",
      "696969",
      "696969",
      "1e90ff",
      "b22222",
      "fffaf0",
      "228b22",
      "ff00ff",
      "dcdcdc",
      "f8f8ff",
      "ffd700",
      "daa520",
      "808080",
      "808080",
      "008000",
      "adff2f",
      "f0fff0",
      "ff69b4",
      "cd5c5c",
      "4b0082",
      "fffff0",
      "f0e68c",
      "e6e6fa",
      "fff0f5",
      "7cfc00",
      "fffacd",
      "add8e6",
      "f08080",
      "e0ffff",
      "fafad2",
      "d3d3d3",
      "d3d3d3",
      "90ee90",
      "ffb6c1",
      "ffa07a",
      "20b2aa",
      "87cefa",
      "778899",
      "778899",
      "b0c4de",
      "ffffe0",
      "00ff00",
      "32cd32",
      "faf0e6",
      "ff00ff",
      "800000",
      "66cdaa",
      "0000cd",
      "ba55d3",
      "9370db",
      "3cb371",
      "7b68ee",
      "00fa9a",
      "48d1cc",
      "c71585",
      "191970",
      "f5fffa",
      "ffe4e1",
      "ffe4b5",
      "ffdead",
      "000080",
      "fdf5e6",
      "808000",
      "6b8e23",
      "ffa500",
      "ff4500",
      "da70d6",
      "eee8aa",
      "98fb98",
      "afeeee",
      "db7093",
      "ffefd5",
      "ffdab9",
      "cd853f",
      "ffc0cb",
      "dda0dd",
      "b0e0e6",
      "800080",
      "663399",
      "ff0000",
      "bc8f8f",
      "4169e1",
      "8b4513",
      "fa8072",
      "f4a460",
      "2e8b57",
      "fff5ee",
      "a0522d",
      "c0c0c0",
      "87ceeb",
      "6a5acd",
      "708090",
      "708090",
      "fffafa",
      "00ff7f",
      "4682b4",
      "d2b48c",
      "008080",
      "d8bfd8",
      "ff6347",
      "40e0d0",
      "ee82ee",
      "f5deb3",
      "ffffff",
      "f5f5f5",
      "ffff00",
      "9acd32"
    ];
    const findIndx = colorName.indexOf(name);
    if (findIndx !== -1) {
      hex = colorHex[findIndx];
    }
    return hex;
  }
  function getColorOpacity(solidFill) {
    if (solidFill === void 0) {
      return void 0;
    }
    let opcity = 1;
    if (solidFill["a:srgbClr"] !== void 0) {
      const tint = getTextByPathList(solidFill, [
        "a:srgbClr",
        "a:tint",
        "attrs",
        "val"
      ]);
      if (tint !== void 0) {
        opcity = parseInt(tint) / 1e5;
      }
    } else if (solidFill["a:schemeClr"] !== void 0) {
      const tint = getTextByPathList(solidFill, [
        "a:schemeClr",
        "a:tint",
        "attrs",
        "val"
      ]);
      if (tint !== void 0) {
        opcity = parseInt(tint) / 1e5;
      }
    } else if (solidFill["a:scrgbClr"] !== void 0) {
      const tint = getTextByPathList(solidFill, [
        "a:scrgbClr",
        "a:tint",
        "attrs",
        "val"
      ]);
      if (tint !== void 0) {
        opcity = parseInt(tint) / 1e5;
      }
    } else if (solidFill["a:prstClr"] !== void 0) {
      const tint = getTextByPathList(solidFill, [
        "a:prstClr",
        "a:tint",
        "attrs",
        "val"
      ]);
      if (tint !== void 0) {
        opcity = parseInt(tint) / 1e5;
      }
    } else if (solidFill["a:hslClr"] !== void 0) {
      const tint = getTextByPathList(solidFill, [
        "a:hslClr",
        "a:tint",
        "attrs",
        "val"
      ]);
      if (tint !== void 0) {
        opcity = parseInt(tint) / 1e5;
      }
    } else if (solidFill["a:sysClr"] !== void 0) {
      const tint = getTextByPathList(solidFill, [
        "a:sysClr",
        "a:tint",
        "attrs",
        "val"
      ]);
      if (tint !== void 0) {
        opcity = parseInt(tint) / 1e5;
      }
    }
    return opcity;
  }
  function getSchemeColorFromTheme(schemeClr, sldMasterNode) {
    if (slideLayoutClrOvride === "" || slideLayoutClrOvride === void 0) {
      slideLayoutClrOvride = getTextByPathList(sldMasterNode, [
        "p:sldMaster",
        "p:clrMap",
        "attrs"
      ]) || {};
    }
    const schmClrName = schemeClr.substr(2);
    switch (schmClrName) {
      case "tx1":
      case "tx2":
      case "bg1":
      case "bg2": {
        schemeClr = "a:" + slideLayoutClrOvride[schmClrName.toString()];
        break;
      }
    }
    const refNode = getTextByPathList(themeContent, [
      "a:theme",
      "a:themeElements",
      "a:clrScheme",
      schemeClr
    ]);
    let color = getTextByPathList(refNode, ["a:srgbClr", "attrs", "val"]);
    if (color === void 0) {
      color = getTextByPathList(refNode, ["a:sysClr", "attrs", "lastClr"]);
    }
    return color;
  }
  function extractChartData(serNode) {
    const dataMat = [];
    if (serNode === void 0) {
      return dataMat;
    }
    if (serNode["c:xVal"] !== void 0) {
      let dataRow = [];
      eachElement(
        serNode["c:xVal"]["c:numRef"]["c:numCache"]["c:pt"],
        function(innerNode, index) {
          dataRow.push(parseFloat(innerNode["c:v"]));
          return "";
        }
      );
      dataMat.push(dataRow);
      dataRow = [];
      eachElement(
        serNode["c:yVal"]["c:numRef"]["c:numCache"]["c:pt"],
        function(innerNode, index) {
          dataRow.push(parseFloat(innerNode["c:v"]));
          return "";
        }
      );
      dataMat.push(dataRow);
    } else {
      eachElement(
        serNode,
        function(innerNode, index) {
          const dataRow = [];
          const colName = getTextByPathList(innerNode, [
            "c:tx",
            "c:strRef",
            "c:strCache",
            "c:pt",
            "c:v"
          ]) || index;
          const rowNames = {};
          if (getTextByPathList(innerNode, [
            "c:cat",
            "c:strRef",
            "c:strCache",
            "c:pt"
          ]) !== void 0) {
            eachElement(
              innerNode["c:cat"]["c:strRef"]["c:strCache"]["c:pt"],
              function(innerNode2, index2) {
                rowNames[innerNode2["attrs"]["idx"]] = innerNode2["c:v"];
                return "";
              }
            );
          } else if (getTextByPathList(innerNode, [
            "c:cat",
            "c:numRef",
            "c:numCache",
            "c:pt"
          ]) !== void 0) {
            eachElement(
              innerNode["c:cat"]["c:numRef"]["c:numCache"]["c:pt"],
              function(innerNode2, index2) {
                rowNames[innerNode2["attrs"]["idx"]] = innerNode2["c:v"];
                return "";
              }
            );
          }
          if (getTextByPathList(innerNode, [
            "c:val",
            "c:numRef",
            "c:numCache",
            "c:pt"
          ]) !== void 0) {
            eachElement(
              innerNode["c:val"]["c:numRef"]["c:numCache"]["c:pt"],
              function(innerNode2, index2) {
                dataRow.push({
                  x: innerNode2["attrs"]["idx"],
                  y: parseFloat(innerNode2["c:v"])
                });
                return "";
              }
            );
          }
          dataMat.push({ key: colName, values: dataRow, xlabels: rowNames });
          return "";
        }
      );
    }
    return dataMat;
  }
  function getTextByPathStr(node, pathStr) {
    return getTextByPathList(node, pathStr.trim().split(/\s+/));
  }
  function getTextByPathList(node, path) {
    if (path.constructor !== Array) {
      throw Error("Error of path type! path is not array.");
    }
    if (node === void 0) {
      return void 0;
    }
    const l = path.length;
    for (let i = 0; i < l; i++) {
      node = node[path[i]];
      if (node === void 0) {
        return void 0;
      }
    }
    return node;
  }
  function eachElement(node, doFunction) {
    if (node === void 0) {
      return;
    }
    let result = "";
    if (node.constructor === Array) {
      const l = node.length;
      for (let i = 0; i < l; i++) {
        result += doFunction(node[i], i);
      }
    } else {
      result += doFunction(node, 0);
    }
    return result;
  }
  function applyLumModify(rgbStr = "#FFFFFF", factor, offset) {
    const color = new Color(rgbStr);
    color.setLum(color.hsl.l * (1 + offset));
    return color.rgb.toString();
  }
  function angleToDegrees(angle) {
    if (angle === "" || angle == null) {
      return 0;
    }
    return Math.round(Number(angle) / 6e4);
  }
  function getImageMimeType(imgFileExt) {
    let mimeType = "";
    switch (imgFileExt.toLowerCase()) {
      case "jpg":
      case "jpeg": {
        mimeType = "image/jpeg";
        break;
      }
      case "png": {
        mimeType = "image/png";
        break;
      }
      case "gif": {
        mimeType = "image/gif";
        break;
      }
      case "emf": {
        mimeType = "image/x-emf";
        break;
      }
      case "wmf": {
        mimeType = "image/x-wmf";
        break;
      }
      case "svg": {
        mimeType = "image/svg+xml";
        break;
      }
      default: {
        mimeType = "image/*";
      }
    }
    return mimeType;
  }
  function getSvgGradient(w, h, angl, colorArray, shpId) {
    const stopsArray = getMiddleStops(colorArray.length - 2);
    const xyArray = SVGangle(angl, h, w);
    const x1 = xyArray[0];
    const y1 = xyArray[1];
    const x2 = xyArray[2];
    const y2 = xyArray[3];
    const sal = stopsArray.length;
    const sr = sal < 20 ? 100 : 1e3;
    const svgAngle = ' gradientUnits="userSpaceOnUse" x1="' + x1 + '%" y1="' + y1 + '%" x2="' + x2 + '%" y2="' + y2 + '%"';
    let svg = '<linearGradient id="linGrd_' + shpId + '"' + svgAngle + ">\n";
    for (let i = 0; i < sal; i++) {
      svg += '<stop offset="' + Math.round(parseFloat(stopsArray[i]) / 100 * sr) / sr + '" stop-color="' + colorArray[i] + '"';
      svg += "/>\n";
    }
    svg += "</linearGradient>\n";
    return svg;
  }
  function getMiddleStops(s) {
    const sArry = ["0%", "100%"];
    if (s === 0) {
      return true;
    } else {
      let i = s;
      while (i--) {
        const middleStop = 100 - 100 / (s + 1) * (i + 1);
        const middleStopString = middleStop + "%";
        sArry.splice(-1, 0, middleStopString);
      }
    }
    return sArry;
  }
  function SVGangle(deg, svgHeight, svgWidth) {
    const w = parseFloat(svgWidth);
    const h = parseFloat(svgHeight);
    const ang = parseFloat(deg);
    let o = 2;
    let n = 2;
    const wc = w / 2;
    const hc = h / 2;
    let tx1 = 2;
    let ty1 = 2;
    let tx2 = 2;
    let ty2 = 2;
    const k = (ang % 360 + 360) % 360;
    const j = (360 - k) * Math.PI / 180;
    const i = Math.tan(j);
    const l = hc - i * wc;
    if (k === 0) {
      tx1 = w;
      ty1 = hc;
      tx2 = 0;
      ty2 = hc;
    } else if (k < 90) {
      n = w;
      o = 0;
    } else if (k === 90) {
      tx1 = wc;
      ty1 = 0;
      tx2 = wc;
      ty2 = h;
    } else if (k < 180) {
      n = 0;
      o = 0;
    } else if (k === 180) {
      tx1 = 0;
      ty1 = hc;
      tx2 = w;
      ty2 = hc;
    } else if (k < 270) {
      n = 0;
      o = h;
    } else if (k === 270) {
      tx1 = wc;
      ty1 = h;
      tx2 = wc;
      ty2 = 0;
    } else {
      n = w;
      o = h;
    }
    const m = o + n / i;
    tx1 = tx1 === 2 ? i * (m - l) / (Math.pow(i, 2) + 1) : tx1;
    ty1 = ty1 === 2 ? i * tx1 + l : ty1;
    tx2 = tx2 === 2 ? w - tx1 : tx2;
    ty2 = ty2 === 2 ? h - ty1 : ty2;
    const x1 = Math.round(tx2 / w * 100 * 100) / 100;
    const y1 = Math.round(ty2 / h * 100 * 100) / 100;
    const x2 = Math.round(tx1 / w * 100 * 100) / 100;
    const y2 = Math.round(ty1 / h * 100 * 100) / 100;
    return [x1, y1, x2, y2];
  }
  function getSvgImagePattern(fillColor, shpId) {
    let ptrn = '<pattern id="imgPtrn_' + shpId + '"  patternContentUnits="objectBoundingBox"  width="1" height="1">';
    ptrn += '<image  xlink:href="' + fillColor + '" preserveAspectRatio="none" width="1" height="1"></image>';
    ptrn += "</pattern>";
    return ptrn;
  }
}
var dimple = {
  version: "2.2.0",
  plot: {},
  aggregateMethod: {}
};
dimple.axis = function(chart, position, categoryFields, measure, timeField, autoRotateLabel) {
  this.chart = chart;
  this.position = position;
  this.categoryFields = timeField === null || timeField === void 0 ? categoryFields : [].concat(timeField);
  this.measure = measure;
  this.timeField = timeField;
  this.floatingBarWidth = 5;
  this.hidden = false;
  this.showPercent = false;
  this.colors = null;
  this.overrideMin = null;
  this.overrideMax = null;
  this.shapes = null;
  this.showGridlines = null;
  this.gridlineShapes = null;
  this.titleShape = null;
  this.dateParseFormat = null;
  this.tickFormat = null;
  this.timePeriod = null;
  this.timeInterval = 1;
  this.useLog = false;
  this.logBase = 10;
  this.title = void 0;
  this.clamp = true;
  this.ticks = null;
  this.fontSize = "10px";
  this.fontFamily = "sans-serif";
  this.autoRotateLabel = autoRotateLabel === null || autoRotateLabel === void 0 ? true : autoRotateLabel;
  this._slaves = [];
  this._scale = null;
  this._min = 0;
  this._max = 0;
  this._previousOrigin = null;
  this._origin = null;
  this._orderRules = [];
  this._groupOrderRules = [];
  this._draw = null;
  this._getAxisData = function() {
    var i, series, returnData = [], addChartData = false;
    if (this.chart && this.chart.series) {
      for (i = 0; i < this.chart.series.length; i += 1) {
        series = this.chart.series[i];
        if (series[this.position] === this) {
          if (series.data && series.data.length > 0) {
            returnData = returnData.concat(series.data);
          } else {
            addChartData = true;
          }
        }
      }
      if (addChartData && this.chart.data) {
        returnData = returnData.concat(this.chart.data);
      }
    }
    return returnData;
  };
  this._getFontSize = function() {
    var fontSize;
    if (!this.fontSize || this.fontSize.toString().toLowerCase() === "auto") {
      fontSize = (this.chart._heightPixels() / 35 > 10 ? this.chart._heightPixels() / 35 : 10) + "px";
    } else if (!isNaN(this.fontSize)) {
      fontSize = this.fontSize + "px";
    } else {
      fontSize = this.fontSize;
    }
    return fontSize;
  };
  this._getFormat = function() {
    var returnFormat, max, min, len, chunks, suffix, dp;
    if (this.tickFormat !== null && this.tickFormat !== void 0) {
      if (this._hasTimeField()) {
        returnFormat = (void 0)(this.tickFormat);
      } else {
        returnFormat = (void 0)(this.tickFormat);
      }
    } else if (this.showPercent) {
      returnFormat = (void 0)(".0%");
    } else if (this.useLog && this.measure !== null) {
      returnFormat = function(n) {
        var l = Math.floor(Math.abs(n), 0).toString().length, c = Math.min(Math.floor((l - 1) / 3), 4), s = "kmBT".substring(c - 1, c), d = Math.round(n / Math.pow(1e3, c) * 10).toString().slice(-1) === "0" ? 0 : 1;
        return n === 0 ? 0 : (void 0)(",." + d + "f")(n / Math.pow(1e3, c)) + s;
      };
    } else if (this.measure !== null) {
      max = Math.floor(Math.abs(this._max), 0).toString();
      min = Math.floor(Math.abs(this._min), 0).toString();
      len = Math.max(min.length, max.length);
      if (len > 3) {
        chunks = Math.min(Math.floor((len - 1) / 3), 4);
        suffix = "kmBT".substring(chunks - 1, chunks);
        dp = len - chunks * 3 <= 1 ? 1 : 0;
        returnFormat = function(n) {
          return n === 0 ? 0 : (void 0)(",." + dp + "f")(n / Math.pow(1e3, chunks)) + suffix;
        };
      } else {
        dp = Math.max(
          -(this._tick_step ? Math.floor(Math.log(this._tick_step) / Math.LN10) : 0),
          0
        );
        returnFormat = (void 0)(",." + dp + "f");
      }
    } else {
      returnFormat = function(n) {
        return n;
      };
    }
    return returnFormat;
  };
  this._getTimePeriod = function() {
    var outPeriod = this.timePeriod, maxPeriods = 30, diff = this._max - this._min;
    if (this._hasTimeField() && !this.timePeriod) {
      if (diff / 1e3 <= maxPeriods) {
        outPeriod = void 0;
      } else if (diff / 6e4 <= maxPeriods) {
        outPeriod = void 0;
      } else if (diff / 36e5 <= maxPeriods) {
        outPeriod = void 0;
      } else if (diff / 864e5 <= maxPeriods) {
        outPeriod = void 0;
      } else if (diff / 6048e5 <= maxPeriods) {
        outPeriod = void 0;
      } else if (diff / 26298e5 <= maxPeriods) {
        outPeriod = void 0;
      } else {
        outPeriod = void 0;
      }
    }
    return outPeriod;
  };
  this._getTooltipText = function(rows, d) {
    if (this._hasTimeField()) {
      if (d[this.position + "Field"][0]) {
        rows.push(
          this.timeField + ": " + this._getFormat()(d[this.position + "Field"][0])
        );
      }
    } else if (this._hasCategories()) {
      this.categoryFields.forEach(function(c, i) {
        if (c !== null && c !== void 0 && d[this.position + "Field"][i]) {
          rows.push(
            c + (d[this.position + "Field"][i] !== c ? ": " + d[this.position + "Field"][i] : "")
          );
        }
      }, this);
    } else if (this._hasMeasure()) {
      switch (this.position) {
        case "x":
          rows.push(this.measure + ": " + this._getFormat()(d.width));
          break;
        case "y":
          rows.push(this.measure + ": " + this._getFormat()(d.height));
          break;
        case "p":
          rows.push(
            this.measure + ": " + this._getFormat()(d.angle) + " (" + (void 0)(".0%")(d.piePct) + ")"
          );
          break;
        default:
          rows.push(
            this.measure + ": " + this._getFormat()(d[this.position + "Value"])
          );
          break;
      }
    }
  };
  this._getTopMaster = function() {
    var topMaster = this;
    if (this.master !== null && this.master !== void 0) {
      topMaster = this.master._getTopMaster();
    }
    return topMaster;
  };
  this._hasCategories = function() {
    return this.categoryFields !== null && this.categoryFields !== void 0 && this.categoryFields.length > 0;
  };
  this._hasMeasure = function() {
    return this.measure !== null && this.measure !== void 0;
  };
  this._hasTimeField = function() {
    return this.timeField !== null && this.timeField !== void 0;
  };
  this._parseDate = function(inDate) {
    var outDate;
    if (this.dateParseFormat === null || this.dateParseFormat === void 0) {
      if (!isNaN(inDate)) {
        outDate = new Date(inDate);
      } else {
        outDate = Date.parse(inDate);
      }
    } else {
      outDate = (void 0)(this.dateParseFormat)(inDate);
    }
    return outDate;
  };
  this._update = function(refactor) {
    var distinctCats = [], ticks, step, remainder, origin, tickCount = this.ticks || 10, getOrderedCategories = function(self, axPos, oppPos) {
      var category = self.categoryFields[0], axisData = self._getAxisData(), sortBy = category, desc = false, isDate = true, currentValue = null, i, definitions;
      for (i = 0; i < axisData.length; i += 1) {
        currentValue = self._parseDate(axisData[i][category]);
        if (currentValue !== null && currentValue !== void 0 && isNaN(currentValue)) {
          isDate = false;
          break;
        }
      }
      if (!isDate) {
        self.chart.series.forEach(function(s) {
          if (s[axPos] === self && s[oppPos]._hasMeasure()) {
            sortBy = s[oppPos].measure;
            desc = true;
          }
        }, this);
      }
      definitions = self._orderRules.concat({ ordering: sortBy, desc });
      return dimple._getOrderedList(axisData, category, definitions);
    };
    this._min = this.showPercent && this._min < -1 ? -1 : this._min;
    this._max = this.showPercent && this._max > 1 ? 1 : this._max;
    this._min = this.overrideMin !== null ? this.overrideMin : this._min;
    this._max = this.overrideMax !== null ? this.overrideMax : this._max;
    if (this.position === "x" && (this._scale === null || refactor)) {
      if (this._hasTimeField()) {
        this._scale = (void 0)().range([
          this.chart._xPixels(),
          this.chart._xPixels() + this.chart._widthPixels()
        ]).domain([this._min, this._max]).clamp(this.clamp);
      } else if (this.useLog) {
        this._scale = (void 0)().range([
          this.chart._xPixels(),
          this.chart._xPixels() + this.chart._widthPixels()
        ]).domain([
          this._min === 0 ? Math.pow(this.logBase, -1) : this._min,
          this._max === 0 ? -1 * Math.pow(this.logBase, -1) : this._max
        ]).clamp(this.clamp).base(this.logBase).nice();
      } else if (this.measure === null || this.measure === void 0) {
        distinctCats = getOrderedCategories(this, "x", "y");
        if (this._slaves !== null && this._slaves !== void 0) {
          this._slaves.forEach(function(slave) {
            distinctCats = distinctCats.concat(
              getOrderedCategories(slave, "x", "y")
            );
          }, this);
        }
        this._scale = (void 0)().range([
          this.chart._xPixels(),
          this.chart._xPixels() + this.chart._widthPixels()
        ]).domain(distinctCats.concat([""]));
      } else {
        this._scale = (void 0)().range([
          this.chart._xPixels(),
          this.chart._xPixels() + this.chart._widthPixels()
        ]).domain([this._min, this._max]).clamp(this.clamp).nice();
      }
      if (!this.hidden) {
        switch (this.chart._axisIndex(this, "x")) {
          case 0:
            this._draw = (void 0)().scale(this._scale);
            if (this.ticks) {
              this._draw.ticks(tickCount);
            }
            break;
          case 1:
            this._draw = (void 0)().scale(this._scale);
            if (this.ticks) {
              this._draw.ticks(tickCount);
            }
            break;
        }
      }
    } else if (this.position === "y" && (this._scale === null || refactor)) {
      if (this._hasTimeField()) {
        this._scale = (void 0)().range([
          this.chart._yPixels() + this.chart._heightPixels(),
          this.chart._yPixels()
        ]).domain([this._min, this._max]).clamp(this.clamp);
      } else if (this.useLog) {
        this._scale = (void 0)().range([
          this.chart._yPixels() + this.chart._heightPixels(),
          this.chart._yPixels()
        ]).domain([
          this._min === 0 ? Math.pow(this.logBase, -1) : this._min,
          this._max === 0 ? -1 * Math.pow(this.logBase, -1) : this._max
        ]).clamp(this.clamp).base(this.logBase).nice();
      } else if (this.measure === null || this.measure === void 0) {
        distinctCats = getOrderedCategories(this, "y", "x");
        if (this._slaves !== null && this._slaves !== void 0) {
          this._slaves.forEach(function(slave) {
            distinctCats = distinctCats.concat(
              getOrderedCategories(slave, "y", "x")
            );
          }, this);
        }
        this._scale = (void 0)().range([
          this.chart._yPixels() + this.chart._heightPixels(),
          this.chart._yPixels()
        ]).domain(distinctCats.concat([""]));
      } else {
        this._scale = (void 0)().range([
          this.chart._yPixels() + this.chart._heightPixels(),
          this.chart._yPixels()
        ]).domain([this._min, this._max]).clamp(this.clamp).nice();
      }
      if (!this.hidden) {
        switch (this.chart._axisIndex(this, "y")) {
          case 0:
            this._draw = (void 0)().scale(this._scale);
            if (this.ticks) {
              this._draw.ticks(tickCount);
            }
            break;
          case 1:
            this._draw = (void 0)().scale(this._scale);
            if (this.ticks) {
              this._draw.ticks(tickCount);
            }
            break;
        }
      }
    } else if (this.position.length > 0 && this.position[0] === "z" && this._scale === null) {
      if (this.useLog) {
        this._scale = (void 0)().range([
          this.chart._heightPixels() / 300,
          this.chart._heightPixels() / 10
        ]).domain([
          this._min === 0 ? Math.pow(this.logBase, -1) : this._min,
          this._max === 0 ? -1 * Math.pow(this.logBase, -1) : this._max
        ]).clamp(this.clamp).base(this.logBase);
      } else {
        this._scale = (void 0)().range([1, this.chart._heightPixels() / 10]).domain([this._min, this._max]).clamp(this.clamp);
      }
    } else if (this.position.length > 0 && this.position[0] === "p" && this._scale === null) {
      if (this.useLog) {
        this._scale = (void 0)().range([0, 360]).domain([
          this._min === 0 ? Math.pow(this.logBase, -1) : this._min,
          this._max === 0 ? -1 * Math.pow(this.logBase, -1) : this._max
        ]).clamp(this.clamp).base(this.logBase);
      } else {
        this._scale = (void 0)().range([0, 360]).domain([this._min, this._max]).clamp(this.clamp);
      }
    } else if (this.position.length > 0 && this.position[0] === "c" && this._scale === null) {
      this._scale = (void 0)().range([
        0,
        this.colors === null || this.colors.length === 1 ? 1 : this.colors.length - 1
      ]).domain([this._min, this._max]).clamp(this.clamp);
    }
    if (this._slaves !== null && this._slaves !== void 0 && this._slaves.length > 0) {
      this._slaves.forEach(function(slave) {
        slave._scale = this._scale;
      }, this);
    }
    if ((refactor === null || refactor === void 0 || refactor === false) && !this._hasTimeField() && this._scale !== null && this._scale.ticks !== null && this._scale.ticks !== void 0 && this._scale.ticks(tickCount).length > 0 && (this.position === "x" || this.position === "y")) {
      ticks = this._scale.ticks(tickCount);
      step = ticks[1] - ticks[0];
      remainder = ((this._max - this._min) % step).toFixed(0);
      this._tick_step = step;
      if (remainder !== 0) {
        this._max = Math.ceil(this._max / step) * step;
        this._min = Math.floor(this._min / step) * step;
        this._update(true);
      }
    }
    if (distinctCats !== null && distinctCats !== void 0 && distinctCats.length > 0) {
      origin = this._scale.copy()(distinctCats[0]);
    } else if (this._min > 0) {
      origin = this._scale.copy()(this._min);
    } else if (this._max < 0) {
      origin = this._scale.copy()(this._max);
    } else {
      origin = this._scale.copy()(0);
    }
    if (this._origin !== origin) {
      this._previousOrigin = this._origin === null ? origin : this._origin;
      this._origin = origin;
    }
    return this;
  };
  this.addGroupOrderRule = function(ordering, desc) {
    this._groupOrderRules.push({ ordering, desc });
  };
  this.addOrderRule = function(ordering, desc) {
    this._orderRules.push({ ordering, desc });
  };
};
dimple.chart = function(svg, data) {
  this.svg = svg;
  this.x = "10%";
  this.y = "10%";
  this.width = "80%";
  this.height = "80%";
  this.data = data;
  this.noFormats = false;
  this.axes = [];
  this.series = [];
  this.legends = [];
  this.storyboard = null;
  this.titleShape = null;
  this.shapes = null;
  this.ease = void 0;
  this.staggerDraw = false;
  this.transition = {};
  this._group = svg.append("g");
  this._group.attr("class", "dimple-chart");
  this._gridlines_group = this._group.insert("g");
  this._gridlines_group.attr("class", "dimple-gridlines-group");
  this._axis_group = this._group.insert("g");
  this._axis_group.attr("class", "dimple-axis-group");
  this._tooltipGroup = null;
  this._assignedColors = {};
  this._assignedClasses = {};
  this._nextColor = 0;
  this._nextClass = 0;
  this._axisIndex = function(axis, orientation) {
    var i = 0, axisCount = 0, index = -1;
    for (i = 0; i < this.axes.length; i += 1) {
      if (this.axes[i] === axis) {
        index = axisCount;
        break;
      }
      if (orientation === null || orientation === void 0 || orientation[0] === this.axes[i].position[0]) {
        axisCount += 1;
      }
    }
    return index;
  };
  this._getAllData = function() {
    var returnData = [];
    if (this.data !== null && this.data !== void 0 && this.data.length > 0) {
      returnData = returnData.concat(this.data);
    }
    if (this.series !== null && this.series !== void 0 && this.series.length > 0) {
      this.series.forEach(function(s) {
        if (s.data !== null && s.data !== void 0 && s.data.length > 0) {
          returnData = returnData.concat(s.data);
        }
      });
    }
    return returnData;
  };
  this._getData = function(data2, cats, agg, order, stacked, x, y, z, p, c) {
    var returnData = [], getField = function(axis, row) {
      var returnField = [];
      if (axis !== null) {
        if (axis._hasTimeField()) {
          returnField.push(axis._parseDate(row[axis.timeField]));
        } else if (axis._hasCategories()) {
          axis.categoryFields.forEach(function(cat) {
            returnField.push(row[cat]);
          }, this);
        }
      }
      return returnField;
    }, useCount = { x: false, y: false, z: false, p: false, c: false }, secondaryElements = { x: [], y: [] }, totals = { x: [], y: [], z: [], p: [] }, colorBounds = { min: null, max: null }, tot, running = { x: [], y: [], z: [], p: [] }, addedCats = [], catTotals = {}, grandTotals = { x: 0, y: 0, z: 0, p: 0 }, key, storyCat = "", orderedStoryboardArray = [], seriesCat = [], orderedSeriesArray = [], xCat = "", xSortArray = [], yCat = "", ySortArray = [], pCat = "", pSortArray = [], rules = [], sortedData = data2, groupRules = [];
    if (this.storyboard && this.storyboard.categoryFields.length > 0) {
      storyCat = this.storyboard.categoryFields[0];
      orderedStoryboardArray = dimple._getOrderedList(
        sortedData,
        storyCat,
        this.storyboard._orderRules
      );
    }
    if (x && x._hasCategories() && x._hasMeasure()) {
      xCat = x.categoryFields[0];
      xSortArray = dimple._getOrderedList(
        sortedData,
        xCat,
        x._orderRules.concat([{ ordering: x.measure, desc: true }])
      );
    }
    if (y && y._hasCategories() && y._hasMeasure()) {
      yCat = y.categoryFields[0];
      ySortArray = dimple._getOrderedList(
        sortedData,
        yCat,
        y._orderRules.concat([{ ordering: y.measure, desc: true }])
      );
    }
    if (p && p._hasCategories() && p._hasMeasure()) {
      pCat = p.categoryFields[0];
      pSortArray = dimple._getOrderedList(
        sortedData,
        pCat,
        p._orderRules.concat([{ ordering: p.measure, desc: true }])
      );
    }
    if (sortedData.length > 0 && cats && cats.length > 0) {
      rules = [].concat(order);
      seriesCat = [];
      cats.forEach(function(cat) {
        if (sortedData[0][cat] !== void 0) {
          seriesCat.push(cat);
        }
      }, this);
      if (p && p._hasMeasure()) {
        rules.push({ ordering: p.measure, desc: true });
      } else if (c && c._hasMeasure()) {
        rules.push({ ordering: c.measure, desc: true });
      } else if (z && z._hasMeasure()) {
        rules.push({ ordering: z.measure, desc: true });
      } else if (x && x._hasMeasure()) {
        rules.push({ ordering: x.measure, desc: true });
      } else if (y && y._hasMeasure()) {
        rules.push({ ordering: y.measure, desc: true });
      }
      orderedSeriesArray = dimple._getOrderedList(sortedData, seriesCat, rules);
    }
    sortedData.sort(function(a, b) {
      var returnValue = 0, categories, comp, i, q, aMatch, bMatch;
      if (storyCat !== "") {
        returnValue = orderedStoryboardArray.indexOf(a[storyCat]) - orderedStoryboardArray.indexOf(b[storyCat]);
      }
      if (xCat !== "" && returnValue === 0) {
        returnValue = xSortArray.indexOf(a[xCat]) - xSortArray.indexOf(b[xCat]);
      }
      if (yCat !== "" && returnValue === 0) {
        returnValue = ySortArray.indexOf(a[yCat]) - ySortArray.indexOf(b[yCat]);
      }
      if (pCat !== "" && returnValue === 0) {
        returnValue = pSortArray.indexOf(a[pCat]) - ySortArray.indexOf(b[pCat]);
      }
      if (seriesCat && seriesCat.length > 0 && returnValue === 0) {
        categories = [].concat(seriesCat);
        returnValue = 0;
        for (i = 0; i < orderedSeriesArray.length; i += 1) {
          comp = [].concat(orderedSeriesArray[i]);
          aMatch = true;
          bMatch = true;
          for (q = 0; q < categories.length; q += 1) {
            aMatch = aMatch && a[categories[q]] === comp[q];
            bMatch = bMatch && b[categories[q]] === comp[q];
          }
          if (aMatch || bMatch) {
            if (aMatch && bMatch) {
              returnValue = 0;
            } else if (aMatch) {
              returnValue = -1;
            } else {
              returnValue = 1;
            }
            break;
          }
        }
      }
      return returnValue;
    });
    sortedData.forEach(function(d) {
      var foundIndex = -1, xField = getField(x, d), yField = getField(y, d), zField = getField(z, d), pField = getField(p, d), aggField = [], ky, k, i, newRow, updateData;
      if (!cats || cats.length === 0) {
        aggField = ["All"];
      } else {
        for (i = 0; i < cats.length; i += 1) {
          if (d[cats[i]] === void 0) {
            aggField.push(cats[i]);
          } else {
            aggField.push(d[cats[i]]);
          }
        }
      }
      ky = aggField.join("/") + "_" + xField.join("/") + "_" + yField.join("/") + "_" + pField.join("/") + "_" + zField.join("/");
      for (k = 0; k < returnData.length; k += 1) {
        if (returnData[k].key === ky) {
          foundIndex = k;
          break;
        }
      }
      if (foundIndex === -1) {
        newRow = {
          key: ky,
          aggField,
          xField,
          xValue: null,
          xCount: 0,
          yField,
          yValue: null,
          yCount: 0,
          pField,
          pValue: null,
          pCount: 0,
          zField,
          zValue: null,
          zCount: 0,
          cValue: 0,
          cCount: 0,
          x: 0,
          y: 0,
          xOffset: 0,
          yOffset: 0,
          width: 0,
          height: 0,
          cx: 0,
          cy: 0,
          xBound: 0,
          yBound: 0,
          xValueList: [],
          yValueList: [],
          zValueList: [],
          pValueList: [],
          cValueList: [],
          fill: {},
          stroke: {}
        };
        returnData.push(newRow);
        foundIndex = returnData.length - 1;
      }
      updateData = function(axis, storyboard) {
        var passStoryCheck = true, lhs = { value: 0, count: 1 }, rhs = { value: 0, count: 1 }, selectStoryValue, compare = "", retRow;
        if (storyboard !== null) {
          selectStoryValue = storyboard.getFrameValue();
          storyboard.categoryFields.forEach(function(cat, m) {
            if (m > 0) {
              compare += "/";
            }
            compare += d[cat];
            passStoryCheck = compare === selectStoryValue;
          }, this);
        }
        if (axis !== null && axis !== void 0) {
          if (passStoryCheck) {
            retRow = returnData[foundIndex];
            if (axis._hasMeasure() && d[axis.measure] !== null && d[axis.measure] !== void 0) {
              if (retRow[axis.position + "ValueList"].indexOf(d[axis.measure]) === -1) {
                retRow[axis.position + "ValueList"].push(d[axis.measure]);
              }
              if (isNaN(parseFloat(d[axis.measure]))) {
                useCount[axis.position] = true;
              }
              lhs.value = retRow[axis.position + "Value"];
              lhs.count = retRow[axis.position + "Count"];
              rhs.value = d[axis.measure];
              retRow[axis.position + "Value"] = agg(lhs, rhs);
              retRow[axis.position + "Count"] += 1;
            }
          }
        }
      };
      updateData(x, this.storyboard);
      updateData(y, this.storyboard);
      updateData(z, this.storyboard);
      updateData(p, this.storyboard);
      updateData(c, this.storyboard);
    }, this);
    if (x && x._hasCategories() && x.categoryFields.length > 1 && secondaryElements.x !== void 0) {
      groupRules = [];
      if (y._hasMeasure()) {
        groupRules.push({ ordering: y.measure, desc: true });
      }
      secondaryElements.x = dimple._getOrderedList(
        sortedData,
        x.categoryFields[1],
        x._groupOrderRules.concat(groupRules)
      );
    }
    if (y && y._hasCategories() && y.categoryFields.length > 1 && secondaryElements.y !== void 0) {
      groupRules = [];
      if (x._hasMeasure()) {
        groupRules.push({ ordering: x.measure, desc: true });
      }
      secondaryElements.y = dimple._getOrderedList(
        sortedData,
        y.categoryFields[1],
        y._groupOrderRules.concat(groupRules)
      );
      secondaryElements.y.reverse();
    }
    returnData.forEach(function(ret) {
      if (x !== null) {
        if (useCount.x === true) {
          ret.xValue = ret.xValueList.length;
        }
        if (x._hasMeasure() && x._hasCategories()) {
          tot = (totals.x[ret.xField.join("/")] || 0) + (x._hasMeasure() ? Math.abs(ret.xValue) : 0);
        } else {
          tot = (totals.x[ret.xField.join("/")] || 0) + (y._hasMeasure() ? Math.abs(ret.yValue) : 0);
        }
        totals.x[ret.xField.join("/")] = tot;
      }
      if (y !== null) {
        if (useCount.y === true) {
          ret.yValue = ret.yValueList.length;
        }
        if (y._hasMeasure() && y._hasCategories()) {
          tot = (totals.y[ret.yField.join("/")] || 0) + (y._hasMeasure() ? Math.abs(ret.yValue) : 0);
        } else {
          tot = (totals.y[ret.yField.join("/")] || 0) + (x._hasMeasure() ? Math.abs(ret.xValue) : 0);
        }
        totals.y[ret.yField.join("/")] = tot;
      }
      if (p !== null) {
        if (useCount.p === true) {
          ret.pValue = ret.pValueList.length;
        }
        tot = (totals.p[ret.pField.join("/")] || 0) + (p._hasMeasure() ? Math.abs(ret.pValue) : 0);
        totals.p[ret.pField.join("/")] = tot;
      }
      if (z !== null) {
        if (useCount.z === true) {
          ret.zValue = ret.zValueList.length;
        }
        tot = (totals.z[ret.zField.join("/")] || 0) + (z._hasMeasure() ? Math.abs(ret.zValue) : 0);
        totals.z[ret.zField.join("/")] = tot;
      }
      if (c !== null) {
        if (colorBounds.min === null || ret.cValue < colorBounds.min) {
          colorBounds.min = ret.cValue;
        }
        if (colorBounds.max === null || ret.cValue > colorBounds.max) {
          colorBounds.max = ret.cValue;
        }
      }
    }, this);
    for (key in totals.x) {
      if (Object.prototype.hasOwnProperty.call(totals.x, key)) {
        grandTotals.x += totals.x[key];
      }
    }
    for (key in totals.y) {
      if (Object.prototype.hasOwnProperty.call(totals.y, key)) {
        grandTotals.y += totals.y[key];
      }
    }
    for (key in totals.p) {
      if (Object.prototype.hasOwnProperty.call(totals.p, key)) {
        grandTotals.p += totals.p[key];
      }
    }
    for (key in totals.z) {
      if (Object.prototype.hasOwnProperty.call(totals.z, key)) {
        grandTotals.z += totals.z[key];
      }
    }
    returnData.forEach(function(ret) {
      var baseColor, targetColor, scale, colorVal, floatingPortion, getAxisData = function(axis, opp, size) {
        var totalField, value, selectValue, pos, cumValue;
        if (axis !== null && axis !== void 0) {
          pos = axis.position;
          if (!axis._hasCategories()) {
            value = axis.showPercent ? ret[pos + "Value"] / totals[opp][ret[opp + "Field"].join("/")] : ret[pos + "Value"];
            totalField = ret[opp + "Field"].join("/") + (ret[pos + "Value"] >= 0);
            cumValue = running[pos][totalField] = (running[pos][totalField] === null || running[pos][totalField] === void 0 || pos === "z" || pos === "p" ? 0 : running[pos][totalField]) + value;
            selectValue = ret[pos + "Bound"] = ret["c" + pos] = (pos === "x" || pos === "y") && stacked ? cumValue : value;
            ret[size] = value;
            ret[pos] = selectValue - (pos === "x" && value >= 0 || pos === "y" && value <= 0 ? value : 0);
          } else {
            if (axis._hasMeasure()) {
              totalField = ret[axis.position + "Field"].join("/");
              value = axis.showPercent ? totals[axis.position][totalField] / grandTotals[axis.position] : totals[axis.position][totalField];
              if (addedCats.indexOf(totalField) === -1) {
                catTotals[totalField] = value + (addedCats.length > 0 ? catTotals[addedCats[addedCats.length - 1]] : 0);
                addedCats.push(totalField);
              }
              selectValue = ret[pos + "Bound"] = ret["c" + pos] = (pos === "x" || pos === "y") && stacked ? catTotals[totalField] : value;
              ret[size] = value;
              ret[pos] = selectValue - (pos === "x" && value >= 0 || pos === "y" && value <= 0 ? value : 0);
            } else {
              ret[pos] = ret["c" + pos] = ret[pos + "Field"][0];
              ret[size] = 1;
              if (secondaryElements[pos] !== void 0 && secondaryElements[pos] !== null && secondaryElements[pos].length >= 2) {
                ret[pos + "Offset"] = secondaryElements[pos].indexOf(
                  ret[pos + "Field"][1]
                );
                ret[size] = 1 / secondaryElements[pos].length;
              }
            }
          }
        }
      };
      getAxisData(x, "y", "width");
      getAxisData(y, "x", "height");
      getAxisData(z, "z", "r");
      getAxisData(p, "p", "angle");
      if (c !== null && colorBounds.min !== null && colorBounds.max !== null) {
        if (colorBounds.min === colorBounds.max) {
          colorBounds.min -= 0.5;
          colorBounds.max += 0.5;
        }
        colorBounds.min = c.overrideMin || colorBounds.min;
        colorBounds.max = c.overrideMax || colorBounds.max;
        ret.cValue = ret.cValue > colorBounds.max ? colorBounds.max : ret.cValue < colorBounds.min ? colorBounds.min : ret.cValue;
        scale = (void 0)().range([
          0,
          c.colors === null || c.colors.length === 1 ? 1 : c.colors.length - 1
        ]).domain([colorBounds.min, colorBounds.max]);
        colorVal = scale(ret.cValue);
        floatingPortion = colorVal - Math.floor(colorVal);
        if (ret.cValue === colorBounds.max) {
          floatingPortion = 1;
        }
        if (c.colors && c.colors.length === 1) {
          baseColor = (void 0)(c.colors[0]);
          targetColor = (void 0)(this.getColor(ret.aggField.slice(-1)[0]).fill);
        } else if (c.colors && c.colors.length > 1) {
          baseColor = (void 0)(c.colors[Math.floor(colorVal)]);
          targetColor = (void 0)(c.colors[Math.ceil(colorVal)]);
        } else {
          baseColor = (void 0)("white");
          targetColor = (void 0)(this.getColor(ret.aggField.slice(-1)[0]).fill);
        }
        baseColor.r = Math.floor(
          baseColor.r + (targetColor.r - baseColor.r) * floatingPortion
        );
        baseColor.g = Math.floor(
          baseColor.g + (targetColor.g - baseColor.g) * floatingPortion
        );
        baseColor.b = Math.floor(
          baseColor.b + (targetColor.b - baseColor.b) * floatingPortion
        );
        ret.fill = baseColor.toString();
        ret.stroke = baseColor.darker(0.5).toString();
      }
    }, this);
    return returnData;
  };
  this._getDelay = function(duration, chart, series) {
    return function(d) {
      var returnValue = 0;
      if (series && chart.staggerDraw) {
        if (series.x._hasCategories()) {
          returnValue = dimple._helpers.cx(d, chart, series) / chart._widthPixels() * duration;
        } else if (series.y._hasCategories()) {
          returnValue = (1 - dimple._helpers.cy(d, chart, series) / chart._heightPixels()) * duration;
        }
      }
      return returnValue;
    };
  };
  this._getSeriesData = function() {
    if (this.series !== null && this.series !== void 0) {
      this.series.forEach(function(series) {
        var seriesData = series.data || this.data || [], cats = [].concat(series.categoryFields || "All"), returnData = this._getData(
          seriesData,
          cats,
          series.aggregate,
          series._orderRules,
          series._isStacked(),
          series.x,
          series.y,
          series.z,
          series.p,
          series.c
        ), higherLevelData = [], i, j, aCats, aCatString, bCats, bCatString, pieDictionary = {}, startAngle = series.startAngle * (Math.PI / 180) || 0, endAngle = (series.endAngle || 360) * (Math.PI / 180);
        if (startAngle > endAngle) {
          startAngle -= 2 * Math.PI;
        }
        if (series.p && cats.length > 0) {
          if (series.x && series.y) {
            cats.pop();
            higherLevelData = this._getData(
              seriesData,
              ["__dimple_placeholder__"].concat(cats),
              series.aggregate,
              series._orderRules,
              series._isStacked(),
              series.x,
              series.y,
              series.z,
              series.p,
              series.c
            );
            for (i = 0; i < returnData.length; i += 1) {
              aCats = ["__dimple_placeholder__"].concat(returnData[i].aggField);
              aCats.pop();
              if (series.x && series.x._hasCategories()) {
                aCats = aCats.concat(returnData[i].xField);
              }
              if (series.y && series.y._hasCategories()) {
                aCats = aCats.concat(returnData[i].yField);
              }
              aCatString = aCats.join("|");
              for (j = 0; j < higherLevelData.length; j += 1) {
                bCats = [].concat(higherLevelData[j].aggField);
                if (series.x && series.x._hasCategories()) {
                  bCats = bCats.concat(higherLevelData[j].xField);
                }
                if (series.y && series.y._hasCategories()) {
                  bCats = bCats.concat(higherLevelData[j].yField);
                }
                bCatString = bCats.join("|");
                if (aCatString === bCatString) {
                  returnData[i].xField = higherLevelData[j].xField;
                  returnData[i].xValue = higherLevelData[j].xValue;
                  returnData[i].xCount = higherLevelData[j].xCount;
                  returnData[i].yField = higherLevelData[j].yField;
                  returnData[i].yValue = higherLevelData[j].yValue;
                  returnData[i].yCount = higherLevelData[j].yCount;
                  returnData[i].zField = higherLevelData[j].zField;
                  returnData[i].zValue = higherLevelData[j].zValue;
                  returnData[i].zCount = higherLevelData[j].zCount;
                  returnData[i].x = higherLevelData[j].x;
                  returnData[i].y = higherLevelData[j].y;
                  returnData[i].r = higherLevelData[j].r;
                  returnData[i].xOffset = higherLevelData[j].xOffset;
                  returnData[i].yOffset = higherLevelData[j].yOffset;
                  returnData[i].width = higherLevelData[j].width;
                  returnData[i].height = higherLevelData[j].height;
                  returnData[i].cx = higherLevelData[j].cx;
                  returnData[i].cy = higherLevelData[j].cy;
                  returnData[i].xBound = higherLevelData[j].xBound;
                  returnData[i].yBound = higherLevelData[j].yBound;
                  returnData[i].xValueList = higherLevelData[j].xValueList;
                  returnData[i].yValueList = higherLevelData[j].yValueList;
                  returnData[i].zValueList = higherLevelData[j].zValueList;
                  returnData[i].cValueList = higherLevelData[j].cValueList;
                  returnData[i].pieKey = higherLevelData[j].key;
                  returnData[i].value = returnData.pValue;
                  if (!pieDictionary[higherLevelData[j].key]) {
                    pieDictionary[higherLevelData[j].key] = {
                      total: 0,
                      angle: startAngle
                    };
                  }
                  pieDictionary[higherLevelData[j].key].total += returnData[i].pValue;
                  break;
                }
              }
            }
          } else {
            for (i = 0; i < returnData.length; i += 1) {
              returnData[i].pieKey = "All";
              returnData[i].value = returnData.pValue;
              if (!pieDictionary[returnData[i].pieKey]) {
                pieDictionary[returnData[i].pieKey] = {
                  total: 0,
                  angle: startAngle
                };
              }
              pieDictionary[returnData[i].pieKey].total += returnData[i].pValue;
            }
          }
          for (i = 0; i < returnData.length; i += 1) {
            if (pieDictionary[returnData[i].pieKey].total === 0) {
              returnData[i].piePct = 0;
            } else {
              returnData[i].piePct = returnData[i].pValue / pieDictionary[returnData[i].pieKey].total;
            }
            returnData[i].startAngle = pieDictionary[returnData[i].pieKey].angle;
            returnData[i].endAngle = returnData[i].startAngle + returnData[i].piePct * (endAngle - startAngle);
            pieDictionary[returnData[i].pieKey].angle = returnData[i].endAngle;
          }
        }
        series._positionData = returnData;
      }, this);
    }
  };
  this._handleTransition = function(input, duration, chart, series) {
    var returnShape = null;
    if (duration === 0) {
      returnShape = input;
    } else {
      returnShape = input.transition().duration(duration).delay(chart._getDelay(duration, chart, series));
      dimple._ease(returnShape, chart.ease);
    }
    return returnShape;
  };
  this._heightPixels = function() {
    return dimple._parseYPosition(this.height, this.svg.node());
  };
  this._registerEventHandlers = function(series) {
    if (series._eventHandlers !== null && series._eventHandlers.length > 0) {
      series._eventHandlers.forEach(function(thisHandler) {
        var name, handler = function(d) {
          var e = new dimple.eventArgs();
          if (series.chart.storyboard !== null) {
            e.frameValue = series.chart.storyboard.getFrameValue();
          }
          e.seriesValue = d.aggField;
          e.xValue = d.x;
          e.yValue = d.y;
          e.zValue = d.z;
          e.pValue = d.p;
          e.colorValue = d.cValue;
          e.seriesShapes = series.shapes;
          e.selectedShape = (void 0)(this);
          thisHandler.handler(e);
        };
        if (thisHandler.handler !== null && typeof thisHandler.handler === "function") {
          if (series._markers !== null && series._markers !== void 0) {
            for (name in series._markers) {
              if (Object.prototype.hasOwnProperty.call(series._markers, name)) {
                series._markers[name].on(thisHandler.event, handler);
              }
            }
          } else {
            series.shapes.on(thisHandler.event, handler);
          }
        }
      }, this);
    }
  };
  this._widthPixels = function() {
    return dimple._parseXPosition(this.width, this.svg.node());
  };
  this._xPixels = function() {
    return dimple._parseXPosition(this.x, this.svg.node());
  };
  this._yPixels = function() {
    return dimple._parseYPosition(this.y, this.svg.node());
  };
  this.addAxis = function(position, categoryFields, measure, timeField) {
    var axis = null, master = null, err;
    if (categoryFields !== null && categoryFields !== void 0) {
      categoryFields = [].concat(categoryFields);
    }
    if (typeof position === "string" || position instanceof String) {
      axis = new dimple.axis(this, position, categoryFields, measure, timeField);
      this.axes.push(axis);
    } else {
      master = position;
      axis = new dimple.axis(
        this,
        master.position,
        categoryFields,
        measure,
        timeField
      );
      if (axis._hasMeasure() !== master._hasMeasure()) {
        err = "You have specified a composite axis where some but not all axes have a measure - this is not supported, all axes must be of the same type.";
      } else if (axis._hasTimeField() !== master._hasTimeField()) {
        err = "You have specified a composite axis where some but not all axes have a time field - this is not supported, all axes must be of the same type.";
      } else if ((axis.categoryFields === null || axis.categoryFields === void 0 ? 0 : axis.categoryFields.length) !== (master.categoryFields === null || master.categoryFields === void 0 ? 0 : master.categoryFields.length)) {
        err = "You have specified a composite axis where axes have differing numbers of category fields - this is not supported, all axes must be of the same type.";
      }
      if (err) {
        throw err;
      }
      master._slaves.push(axis);
    }
    return axis;
  };
  this.addCategoryAxis = function(position, categoryFields) {
    return this.addAxis(position, categoryFields, null);
  };
  this.addColorAxis = function(measure, colors) {
    var colorAxis = this.addAxis("c", null, measure);
    colorAxis.colors = colors === null || colors === void 0 ? null : [].concat(colors);
    return colorAxis;
  };
  this.addLegend = function(x, y, width, height, horizontalAlign, series) {
    series = series === null || series === void 0 ? this.series : [].concat(series);
    horizontalAlign = horizontalAlign === null || horizontalAlign === void 0 ? "left" : horizontalAlign;
    var legend = new dimple.legend(
      this,
      x,
      y,
      width,
      height,
      horizontalAlign,
      series
    );
    this.legends.push(legend);
    return legend;
  };
  this.addLogAxis = function(position, logField, logBase) {
    var axis = this.addAxis(position, null, logField, null);
    if (logBase !== null && logBase !== void 0) {
      axis.logBase = logBase;
    }
    axis.useLog = true;
    return axis;
  };
  this.addMeasureAxis = function(position, measure) {
    return this.addAxis(position, null, measure);
  };
  this.addPctAxis = function(position, measure, categories) {
    var pctAxis = null;
    if (categories !== null && categories !== void 0) {
      pctAxis = this.addAxis(position, categories, measure);
    } else {
      pctAxis = this.addMeasureAxis(position, measure);
    }
    pctAxis.showPercent = true;
    return pctAxis;
  };
  this.addSeries = function(categoryFields, plotFunction, axes) {
    if (axes === null || axes === void 0) {
      axes = this.axes;
    }
    if (plotFunction === null || plotFunction === void 0) {
      plotFunction = dimple.plot.bubble;
    }
    var xAxis = null, yAxis = null, zAxis = null, colorAxis = null, pieAxis = null, series;
    axes.forEach(function(axis) {
      if (axis !== null && plotFunction.supportedAxes.indexOf(axis.position) > -1) {
        if (xAxis === null && axis.position[0] === "x") {
          xAxis = axis;
        } else if (yAxis === null && axis.position[0] === "y") {
          yAxis = axis;
        } else if (zAxis === null && axis.position[0] === "z") {
          zAxis = axis;
        } else if (colorAxis === null && axis.position[0] === "c") {
          colorAxis = axis;
        } else if (colorAxis === null && axis.position[0] === "p") {
          pieAxis = axis;
        }
      }
    }, this);
    if (categoryFields) {
      categoryFields = [].concat(categoryFields);
    }
    series = new dimple.series(
      this,
      categoryFields,
      xAxis,
      yAxis,
      zAxis,
      colorAxis,
      pieAxis,
      plotFunction,
      dimple.aggregateMethod.sum,
      plotFunction.stacked
    );
    this.series.push(series);
    return series;
  };
  this.addTimeAxis = function(position, timeField, inputFormat, outputFormat) {
    var axis = this.addAxis(position, null, null, timeField);
    axis.tickFormat = outputFormat;
    axis.dateParseFormat = inputFormat;
    return axis;
  };
  this.assignClass = function(tag, css) {
    this._assignedClasses[tag] = css;
    return this._assignedClasses[tag];
  };
  this.assignColor = function(tag, fill, stroke, opacity) {
    this._assignedColors[tag] = new dimple.color(fill, stroke, opacity);
    return this._assignedColors[tag];
  };
  this.customClassList = {
    axisLine: "dimple-custom-axis-line",
    axisLabel: "dimple-custom-axis-label",
    axisTitle: "dimple-custom-axis-title",
    tooltipBox: "dimple-custom-tooltip-box",
    tooltipLabel: "dimple-custom-tooltip-label",
    tooltipDropLine: "dimple-custom-tooltip-dropline",
    lineMarker: "dimple-custom-line-marker",
    lineMarkerCircle: "dimple-custom-line-marker-circle",
    legendLabel: "dimple-custom-legend-label",
    legendKey: "dimple-custom-legend-key",
    areaSeries: "dimple-custom-series-area",
    barSeries: "dimple-custom-series-bar",
    bubbleSeries: "dimple-custom-series-bubble",
    lineSeries: "dimple-custom-series-line",
    pieSeries: "dimple-custom-series-pie",
    gridline: "dimple-custom-gridline",
    colorClasses: [
      "dimple-custom-format-1",
      "dimple-custom-format-2",
      "dimple-custom-format-3",
      "dimple-custom-format-4",
      "dimple-custom-format-5",
      "dimple-custom-format-6",
      "dimple-custom-format-7",
      "dimple-custom-format-8",
      "dimple-custom-format-9",
      "dimple-custom-format-10"
    ]
  };
  this.defaultColors = [
    new dimple.color("#80B1D3"),
    // Blue
    new dimple.color("#FB8072"),
    // Red
    new dimple.color("#FDB462"),
    // Orange
    new dimple.color("#B3DE69"),
    // Green
    new dimple.color("#FFED6F"),
    // Yellow
    new dimple.color("#BC80BD"),
    // Purple
    new dimple.color("#8DD3C7"),
    // Turquoise
    new dimple.color("#CCEBC5"),
    // Pale Blue
    new dimple.color("#FFFFB3"),
    // Pale Yellow
    new dimple.color("#BEBADA"),
    // Lavender
    new dimple.color("#FCCDE5"),
    // Pink
    new dimple.color("#D9D9D9")
    // Grey
  ];
  this.draw = function(duration, noDataChange) {
    duration = duration || 0;
    var firstX = null, firstY = null, distinctCats, xGridSet = false, yGridSet = false, chartX = this._xPixels(), chartY = this._yPixels(), chartWidth = this._widthPixels(), chartHeight = this._heightPixels(), linkedDimensions;
    if (noDataChange === void 0 || noDataChange === null || noDataChange === false) {
      this._getSeriesData();
    }
    this.axes.forEach(function(axis) {
      axis._scale = null;
    }, this);
    this.axes.forEach(function(axis) {
      axis._min = 0;
      axis._max = 0;
      linkedDimensions = [];
      if (axis._hasMeasure()) {
        var linked = false;
        this.series.forEach(function(series) {
          if (series._deepMatch(axis)) {
            var bounds = series._axisBounds(axis.position);
            if (axis._min > bounds.min) {
              axis._min = bounds.min;
            }
            if (axis._max < bounds.max) {
              axis._max = bounds.max;
            }
            linked = true;
          }
        }, this);
        if (!linked) {
          this._getAllData().forEach(function(d) {
            if (axis._min > d[axis.measure]) {
              axis._min = d[axis.measure];
            }
            if (axis._max < d[axis.measure]) {
              axis._max = d[axis.measure];
            }
          }, this);
        }
      } else if (axis._hasTimeField()) {
        axis._min = null;
        axis._max = null;
        this.series.forEach(function(series) {
          if (series._deepMatch(axis) && series[axis.position].timeField !== null && series[axis.position].timeField !== void 0 && linkedDimensions.indexOf(series[axis.position].timeField) === -1) {
            linkedDimensions.push(series[axis.position].timeField);
          }
        }, this);
        axis._getAxisData().forEach(function(d) {
          linkedDimensions.forEach(function(dimension) {
            var dt = axis._parseDate(d[dimension]);
            if (axis._min === null || dt < axis._min) {
              axis._min = dt;
            }
            if (axis._max === null || dt > axis._max) {
              axis._max = dt;
            }
          }, this);
        }, this);
      } else if (axis._hasCategories()) {
        axis._min = 0;
        distinctCats = [];
        this.series.forEach(function(series) {
          if (series._deepMatch(axis) && series[axis.position].categoryFields[0] !== null && series[axis.position].categoryFields[0] !== void 0 && linkedDimensions.indexOf(
            series[axis.position].categoryFields[0]
          ) === -1) {
            linkedDimensions.push(series[axis.position].categoryFields[0]);
          }
        }, this);
        axis._getAxisData().forEach(function(d) {
          linkedDimensions.forEach(function(dimension) {
            if (distinctCats.indexOf(d[dimension]) === -1) {
              distinctCats.push(d[dimension]);
            }
          }, this);
        }, this);
        axis._max = distinctCats.length;
      }
      if (axis._slaves !== null && axis._slaves !== void 0 && axis._slaves.length > 0) {
        axis._slaves.forEach(function(slave) {
          slave._min = axis._min;
          slave._max = axis._max;
        }, this);
      }
      axis._update();
      if (firstX === null && axis.position === "x") {
        firstX = axis;
      } else if (firstY === null && axis.position === "y") {
        firstY = axis;
      }
    }, this);
    this.axes.forEach(function(axis) {
      var firstDraw = false, transform = null, gridSize = 0, gridTransform = null, rotated = false, widest = 0, box = { l: null, t: null, r: null, b: null }, titleX = 0, titleY = 0, rotate = "", chart = this, handleTrans = function(ob) {
        var returnObj;
        if (transform === null || duration === 0 || firstDraw) {
          returnObj = ob;
        } else {
          returnObj = chart._handleTransition(ob, duration, chart);
        }
        return returnObj;
      }, transformLabels = function() {
        var t = (void 0)(this).selectAll("text");
        if (!axis.measure && axis._max > 0) {
          if (axis.position === "x") {
            t.attr("x", chartWidth / axis._max / 2);
          } else if (axis.position === "y") {
            t.attr("y", -1 * (chartHeight / axis._max) / 2);
          }
        }
        if (axis.categoryFields && axis.categoryFields.length > 0) {
          if (axis === firstX && (firstY.categoryFields === null || firstY.categoryFields.length === 0)) {
            t.attr("y", chartY + chartHeight - firstY._scale(0) + 9);
          }
          if (axis === firstY && (firstX.categoryFields === null || firstX.categoryFields.length === 0)) {
            t.attr("x", -1 * (firstX._scale(0) - chartX) - 9);
          }
        }
        return this;
      }, appendClass = function(css) {
        return function() {
          var currentCss = (void 0)(this).attr("class") || "";
          if (currentCss.indexOf(css) === -1) {
            currentCss += " " + css;
          }
          return currentCss.trim();
        };
      };
      if (axis.gridlineShapes === null) {
        if (axis.showGridlines || axis.showGridlines === null && !axis._hasCategories() && (!xGridSet && axis.position === "x" || !yGridSet && axis.position === "y")) {
          axis.gridlineShapes = this._gridlines_group.append("g").attr("class", "dimple-gridline");
          if (axis.position === "x") {
            xGridSet = true;
          } else {
            yGridSet = true;
          }
        }
      } else {
        if (axis.position === "x") {
          xGridSet = true;
        } else {
          yGridSet = true;
        }
      }
      if (axis.shapes === null) {
        axis.shapes = this._axis_group.append("g").attr("class", "dimple-axis dimple-axis-" + axis.position).each(function() {
          if (!chart.noFormats) {
            (void 0)(this).style("font-family", axis.fontFamily).style("font-size", axis._getFontSize());
          }
        });
        firstDraw = true;
      }
      if (axis === firstX && firstY !== null) {
        transform = "translate(0, " + (firstY.categoryFields === null || firstY.categoryFields.length === 0 ? firstY._scale(0) : chartY + chartHeight) + ")";
        gridTransform = "translate(0, " + (axis === firstX ? chartY + chartHeight : chartY) + ")";
        gridSize = -chartHeight;
      } else if (axis === firstY && firstX !== null) {
        transform = "translate(" + (firstX.categoryFields === null || firstX.categoryFields.length === 0 ? firstX._scale(0) : chartX) + ", 0)";
        gridTransform = "translate(" + (axis === firstY ? chartX : chartX + chartWidth) + ", 0)";
        gridSize = -chartWidth;
      } else if (axis.position === "x") {
        gridTransform = transform = "translate(0, " + (axis === firstX ? chartY + chartHeight : chartY) + ")";
        gridSize = -chartHeight;
      } else if (axis.position === "y") {
        gridTransform = transform = "translate(" + (axis === firstY ? chartX : chartX + chartWidth) + ", 0)";
        gridSize = -chartWidth;
      }
      if (transform !== null && axis._draw !== null) {
        if (axis._hasTimeField()) {
          handleTrans(axis.shapes).call(
            axis._draw.ticks(axis._getTimePeriod(), axis.timeInterval).tickFormat(axis._getFormat())
          ).attr("transform", transform).each(transformLabels);
        } else if (axis.useLog) {
          handleTrans(axis.shapes).call(axis._draw.ticks(4, axis._getFormat())).attr("transform", transform).each(transformLabels);
        } else {
          handleTrans(axis.shapes).call(axis._draw.tickFormat(axis._getFormat())).attr("transform", transform).each(transformLabels);
        }
        if (axis.gridlineShapes !== null) {
          handleTrans(axis.gridlineShapes).call(axis._draw.tickSize(gridSize, 0, 0).tickFormat("")).attr("transform", gridTransform);
        }
      }
      handleTrans(axis.shapes.selectAll("text")).attr("class", appendClass(chart.customClassList.axisLabel)).call(function(context) {
        if (!chart.noFormats) {
          context.style("font-family", axis.fontFamily).style("font-size", axis._getFontSize());
        }
      });
      handleTrans(axis.shapes.selectAll("path, line")).attr("class", appendClass(chart.customClassList.axisLine)).call(function(context) {
        if (!chart.noFormats) {
          context.style("fill", "none").style("stroke", "black").style("shape-rendering", "crispEdges");
        }
      });
      if (axis.gridlineShapes !== null) {
        axis.gridlineShapes.selectAll("path").remove();
        handleTrans(axis.gridlineShapes.selectAll("line")).attr("class", appendClass(chart.customClassList.gridline)).call(function(context) {
          if (!chart.noFormats) {
            context.style("fill", "none").style("stroke", "lightgray").style("opacity", 0.8);
          }
        });
      }
      if (axis.measure === null || axis.measure === void 0) {
        if (axis.autoRotateLabel) {
          if (axis === firstX) {
            widest = 0;
            axis.shapes.selectAll("text").each(function() {
              var w = this.getComputedTextLength();
              widest = w > widest ? w : widest;
            });
            if (widest > chartWidth / axis.shapes.selectAll("text").nodes().length) {
              rotated = true;
              axis.shapes.selectAll("text").style("text-anchor", "start").each(function() {
                var rec = this.getBBox();
                (void 0)(this).attr(
                  "transform",
                  "rotate(90," + rec.x + "," + (rec.y + rec.height / 2) + ") translate(-5, 0)"
                );
              });
            } else {
              rotated = false;
              axis.shapes.selectAll("text").style("text-anchor", "middle").attr("transform", "");
            }
          } else if (axis.position === "x") {
            widest = 0;
            axis.shapes.selectAll("text").each(function() {
              var w = this.getComputedTextLength();
              widest = w > widest ? w : widest;
            });
            if (widest > chartWidth / axis.shapes.selectAll("text").nodes().length) {
              rotated = true;
              axis.shapes.selectAll("text").style("text-anchor", "end").each(function() {
                var rec = this.getBBox();
                (void 0)(this).attr(
                  "transform",
                  "rotate(90," + (rec.x + rec.width) + "," + (rec.y + rec.height / 2) + ") translate(5, 0)"
                );
              });
            } else {
              rotated = false;
              axis.shapes.selectAll("text").style("text-anchor", "middle").attr("transform", "");
            }
          }
        } else {
          rotated = false;
          axis.shapes.selectAll("text").style("text-anchor", "middle").attr("transform", "");
        }
      }
      if (axis.titleShape !== null && axis.titleShape !== void 0) {
        axis.titleShape.remove();
      }
      axis.shapes.selectAll("text").each(function() {
        var rec = this.getBBox();
        if (box.l === null || -9 - rec.width < box.l) {
          box.l = -9 - rec.width;
        }
        if (box.r === null || rec.x + rec.width > box.r) {
          box.r = rec.x + rec.width;
        }
        if (rotated) {
          if (box.t === null || rec.y + rec.height - rec.width < box.t) {
            box.t = rec.y + rec.height - rec.width;
          }
          if (box.b === null || rec.height + rec.width > box.b) {
            box.b = rec.height + rec.width;
          }
        } else {
          if (box.t === null || rec.y < box.t) {
            box.t = rec.y;
          }
          if (box.b === null || 9 + rec.height > box.b) {
            box.b = 9 + rec.height;
          }
        }
      });
      if (axis.position === "x") {
        if (axis === firstX) {
          titleY = chartY + chartHeight + box.b + 5;
        } else {
          titleY = chartY + box.t - 10;
        }
        titleX = chartX + chartWidth / 2;
      } else if (axis.position === "y") {
        if (axis === firstY) {
          titleX = chartX + box.l - 10;
        } else {
          titleX = chartX + chartWidth + box.r + 20;
        }
        titleY = chartY + chartHeight / 2;
        rotate = "rotate(270, " + titleX + ", " + titleY + ")";
      }
      if (!axis.hidden && (axis.position === "x" || axis.position === "y") && axis.title !== null) {
        axis.titleShape = this._axis_group.append("text").attr(
          "class",
          "dimple-axis dimple-title " + chart.customClassList.axisTitle + " dimple-axis-" + axis.position
        );
        axis.titleShape.attr("x", titleX).attr("y", titleY).attr("text-anchor", "middle").attr("transform", rotate).text(
          axis.title !== void 0 ? axis.title : axis.categoryFields === null || axis.categoryFields === void 0 || axis.categoryFields.length === 0 ? axis.measure : axis.categoryFields.join("/")
        ).each(function() {
          if (!chart.noFormats) {
            (void 0)(this).style("font-family", axis.fontFamily).style("font-size", axis._getFontSize());
          }
        });
        if (axis === firstX) {
          axis.titleShape.each(function() {
            (void 0)(this).attr("y", titleY + this.getBBox().height / 1.65);
          });
        } else if (axis === firstY) {
          axis.titleShape.each(function() {
            (void 0)(this).attr("x", titleX + this.getBBox().height / 1.65);
          });
        }
      }
    }, this);
    this.series.forEach(function(series) {
      series.plot.draw(this, series, duration);
      this._registerEventHandlers(series);
    }, this);
    this.legends.forEach(function(legend) {
      legend._draw();
    }, this);
    if (this.storyboard) {
      this.storyboard._drawText();
      if (this.storyboard.autoplay) {
        this.storyboard.startAnimation();
      }
    }
    return this;
  };
  this.getClass = function(tag) {
    if (!this._assignedClasses[tag]) {
      this._assignedClasses[tag] = this.customClassList.colorClasses[this._nextClass];
      this._nextClass = (this._nextClass + 1) % this.customClassList.colorClasses.length;
    }
    return this._assignedClasses[tag];
  };
  this.getColor = function(tag) {
    if (this._assignedColors[tag] === null || this._assignedColors[tag] === void 0) {
      this._assignedColors[tag] = this.defaultColors[this._nextColor];
      this._nextColor = (this._nextColor + 1) % this.defaultColors.length;
    }
    return this._assignedColors[tag];
  };
  this.setBounds = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this._xPixels = function() {
      return dimple._parseXPosition(this.x, this.svg.node());
    };
    this.draw(0, true);
    this._yPixels = function() {
      return dimple._parseYPosition(this.y, this.svg.node());
    };
    this._widthPixels = function() {
      return dimple._parseXPosition(this.width, this.svg.node());
    };
    this._heightPixels = function() {
      return dimple._parseYPosition(this.height, this.svg.node());
    };
    return this;
  };
  this.setMargins = function(left, top, right, bottom) {
    this.x = left;
    this.y = top;
    this.width = 0;
    this.height = 0;
    this._xPixels = function() {
      return dimple._parseXPosition(this.x, this.svg.node());
    };
    this._yPixels = function() {
      return dimple._parseYPosition(this.y, this.svg.node());
    };
    this._widthPixels = function() {
      return dimple._parentWidth(this.svg.node()) - this._xPixels() - dimple._parseXPosition(right, this.svg.node());
    };
    this._heightPixels = function() {
      return dimple._parentHeight(this.svg.node()) - this._yPixels() - dimple._parseYPosition(bottom, this.svg.node());
    };
    return this;
  };
  this.setStoryboard = function(categoryFields, tickHandler) {
    this.storyboard = new dimple.storyboard(this, categoryFields);
    if (tickHandler !== null && tickHandler !== void 0) {
      this.storyboard.onTick = tickHandler;
    }
    return this.storyboard;
  };
};
dimple.color = function(fill, stroke, opacity) {
  this.fill = fill;
  this.stroke = stroke === null || stroke === void 0 ? (void 0)(fill).darker(0.5).toString() : stroke;
  this.opacity = opacity === null || opacity === void 0 ? 0.8 : opacity;
};
dimple.eventArgs = function() {
  this.seriesValue = null;
  this.xValue = null;
  this.yValue = null;
  this.zValue = null;
  this.pValue = null;
  this.colorValue = null;
  this.frameValue = null;
  this.seriesShapes = null;
  this.selectedShape = null;
};
dimple.legend = function(chart, x, y, width, height, horizontalAlign, series) {
  this.chart = chart;
  this.series = series;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.horizontalAlign = horizontalAlign;
  this.shapes = null;
  this.fontSize = "10px";
  this.fontFamily = "sans-serif";
  this._draw = function() {
    var legendArray = this._getEntries(), maxWidth = 0, maxHeight = 0, runningX = 0, runningY = 0, keyWidth = 15, keyHeight = 9, distanceBetweenKeyAndText = 5, self = this, theseShapes;
    if (this.shapes) {
      this.shapes.remove();
    }
    theseShapes = this.chart._group.selectAll(".dimple-dont-select-any").data(legendArray).enter().append("g").attr("class", function(d) {
      return "dimple-legend " + dimple._createClass(d.aggField);
    }).attr("opacity", 1);
    theseShapes.append("text").attr("class", function(d) {
      return "dimple-legend dimple-legend-text " + dimple._createClass(d.aggField) + " " + self.chart.customClassList.legendLabel;
    }).text(function(d) {
      return d.key;
    }).call(function(context) {
      if (!self.chart.noFormats) {
        context.style("font-family", self.fontFamily).style("font-size", self._getFontSize()).style("shape-rendering", "crispEdges");
      }
    }).each(function() {
      var b = this.getBBox();
      if (b.width > maxWidth) {
        maxWidth = b.width;
      }
      if (b.height > maxHeight) {
        maxHeight = b.height;
      }
    });
    theseShapes.append("rect").attr("class", function(d) {
      return "dimple-legend dimple-legend-key " + dimple._createClass(d.aggField);
    }).attr("height", keyHeight).attr("width", keyWidth);
    maxHeight = (maxHeight < keyHeight ? keyHeight : maxHeight) + self._getVerticalPadding();
    maxWidth += keyWidth + self._getHorizontalPadding();
    theseShapes.each(function(d) {
      if (runningX + maxWidth > self._widthPixels()) {
        runningX = 0;
        runningY += maxHeight;
      }
      if (runningY > self._heightPixels()) {
        (void 0)(this).remove();
      } else {
        (void 0)(this).select("text").attr(
          "x",
          self.horizontalAlign === "left" ? self._xPixels() + keyWidth + distanceBetweenKeyAndText + runningX : self._xPixels() + (self._widthPixels() - runningX - maxWidth) + keyWidth + distanceBetweenKeyAndText
        ).attr("y", function() {
          return self._yPixels() + runningY + this.getBBox().height / 1.65;
        }).attr("width", self._widthPixels()).attr("height", self._heightPixels());
        (void 0)(this).select("rect").attr("class", function(d2) {
          return "dimple-legend dimple-legend-key " + dimple._createClass(d2.aggField) + " " + self.chart.customClassList.legendKey + " " + d2.css;
        }).attr(
          "x",
          self.horizontalAlign === "left" ? self._xPixels() + runningX : self._xPixels() + (self._widthPixels() - runningX - maxWidth)
        ).attr("y", self._yPixels() + runningY).attr("height", keyHeight).attr("width", keyWidth).call(function(context) {
          if (!self.chart.noFormats) {
            context.style("fill", d.fill).style("stroke", d.stroke).style("opacity", d.opacity).style("shape-rendering", "crispEdges");
          }
        });
        runningX += maxWidth;
      }
    });
    this.shapes = theseShapes;
  };
  this._getEntries = function() {
    var entries = [];
    if (this.series) {
      this.series.forEach(function(series2) {
        var data = series2._positionData;
        data.forEach(function(row) {
          var index = -1, j, field = series2.plot.grouped && !series2.x._hasCategories() && !series2.y._hasCategories() && row.aggField.length < 2 ? "All" : row.aggField.slice(-1)[0];
          for (j = 0; j < entries.length; j += 1) {
            if (entries[j].key === field) {
              index = j;
              break;
            }
          }
          if (index === -1 && series2.chart._assignedColors[field]) {
            entries.push({
              key: field,
              fill: series2.chart._assignedColors[field].fill,
              stroke: series2.chart._assignedColors[field].stroke,
              opacity: series2.chart._assignedColors[field].opacity,
              css: series2.chart._assignedClasses[field],
              series: series2,
              aggField: row.aggField
            });
            index = entries.length - 1;
          }
        });
      }, this);
    }
    return entries;
  };
  this._getFontSize = function() {
    var fontSize;
    if (!this.fontSize || this.fontSize.toString().toLowerCase() === "auto") {
      fontSize = (this.chart._heightPixels() / 35 > 10 ? this.chart._heightPixels() / 35 : 10) + "px";
    } else if (!isNaN(this.fontSize)) {
      fontSize = this.fontSize + "px";
    } else {
      fontSize = this.fontSize;
    }
    return fontSize;
  };
  this._getHorizontalPadding = function() {
    var horizontalPadding;
    if (isNaN(this.horizontalPadding)) {
      horizontalPadding = 20;
    } else {
      horizontalPadding = this.horizontalPadding;
    }
    return horizontalPadding;
  };
  this._getVerticalPadding = function() {
    var verticalPadding;
    if (isNaN(this.verticalPadding)) {
      verticalPadding = 2;
    } else {
      verticalPadding = this.verticalPadding;
    }
    return verticalPadding;
  };
  this._heightPixels = function() {
    return dimple._parseYPosition(this.height, this.chart.svg.node());
  };
  this._widthPixels = function() {
    return dimple._parseXPosition(this.width, this.chart.svg.node());
  };
  this._xPixels = function() {
    return dimple._parseXPosition(this.x, this.chart.svg.node());
  };
  this._yPixels = function() {
    return dimple._parseYPosition(this.y, this.chart.svg.node());
  };
};
dimple.series = function(chart, categoryFields, xAxis, yAxis, zAxis, colorAxis, pieAxis, plotFunction, aggregateFunction, stacked) {
  this.chart = chart;
  this.x = xAxis;
  this.y = yAxis;
  this.z = zAxis;
  this.c = colorAxis;
  this.p = pieAxis;
  this.plot = plotFunction;
  this.categoryFields = categoryFields;
  this.aggregate = aggregateFunction;
  this.stacked = stacked;
  this.barGap = 0.2;
  this.clusterBarGap = 0.1;
  this.lineWeight = 2;
  this.lineMarkers = false;
  this.afterDraw = null;
  this.interpolation = "linear";
  this.tooltipFontSize = "10px";
  this.tooltipFontFamily = "sans-serif";
  this.radius = "auto";
  this._group = chart._group.append("g");
  this._group.attr("class", "dimple-series-group-" + chart.series.length);
  this._eventHandlers = [];
  this._positionData = [];
  this._orderRules = [];
  this._axisBounds = function(position) {
    var bounds = { min: 0, max: 0 }, primaryAxis = null, secondaryAxis = null, categoryTotals = [], measureName, fieldName, distinctCats, aggData = this._positionData;
    if (position === "x") {
      primaryAxis = this.x;
      secondaryAxis = this.y;
    } else if (position === "y") {
      primaryAxis = this.y;
      secondaryAxis = this.x;
    } else if (position === "z") {
      primaryAxis = this.z;
    } else if (position === "p") {
      primaryAxis = this.p;
    } else if (position === "c") {
      primaryAxis = this.c;
    }
    if (primaryAxis.showPercent) {
      aggData.forEach(function(d) {
        if (d[primaryAxis.position + "Bound"] < bounds.min) {
          bounds.min = d[primaryAxis.position + "Bound"];
        }
        if (d[primaryAxis.position + "Bound"] > bounds.max) {
          bounds.max = d[primaryAxis.position + "Bound"];
        }
      }, this);
    } else if (secondaryAxis === null || secondaryAxis.categoryFields === null || secondaryAxis.categoryFields.length === 0) {
      aggData.forEach(function(d) {
        if (this._isStacked() && (primaryAxis.position === "x" || primaryAxis.position === "y")) {
          if (d[primaryAxis.position + "Value"] < 0) {
            bounds.min = bounds.min + d[primaryAxis.position + "Value"];
          } else {
            bounds.max = bounds.max + d[primaryAxis.position + "Value"];
          }
        } else {
          if (d[primaryAxis.position + "Value"] < bounds.min) {
            bounds.min = d[primaryAxis.position + "Value"];
          }
          if (d[primaryAxis.position + "Value"] > bounds.max) {
            bounds.max = d[primaryAxis.position + "Value"];
          }
        }
      }, this);
    } else {
      measureName = primaryAxis.position + "Value";
      fieldName = secondaryAxis.position + "Field";
      distinctCats = [];
      aggData.forEach(function(d) {
        var field = d[fieldName].join("/"), index = distinctCats.indexOf(field);
        if (index === -1) {
          distinctCats.push(field);
          index = distinctCats.length - 1;
        }
        if (categoryTotals[index] === void 0) {
          categoryTotals[index] = { min: 0, max: 0 };
        }
        if (this.stacked) {
          if (d[measureName] < 0) {
            categoryTotals[index].min = categoryTotals[index].min + d[measureName];
          } else {
            categoryTotals[index].max = categoryTotals[index].max + d[measureName];
          }
        } else {
          if (d[measureName] < categoryTotals[index].min) {
            categoryTotals[index].min = d[measureName];
          }
          if (d[measureName] > categoryTotals[index].max) {
            categoryTotals[index].max = d[measureName];
          }
        }
      }, this);
      categoryTotals.forEach(function(catTot) {
        if (catTot !== void 0) {
          if (catTot.min < bounds.min) {
            bounds.min = catTot.min;
          }
          if (catTot.max > bounds.max) {
            bounds.max = catTot.max;
          }
        }
      }, this);
    }
    return bounds;
  };
  this._deepMatch = function(axis) {
    var match = false;
    if (this[axis.position] === axis) {
      match = true;
    } else if (axis._slaves !== void 0 && axis._slaves !== null && axis._slaves.length > 0) {
      axis._slaves.forEach(function(slave) {
        match = match || this._deepMatch(slave);
      }, this);
    }
    return match;
  };
  this._dropLineOrigin = function() {
    var xIndex = 0, yIndex = 0, coord = {
      // The x co-ordinate for a y-axis drop line
      x: null,
      // The y co-ordinate for an x-axis drop line
      y: null
    }, firstOrig = {
      x: null,
      y: null
    };
    this.chart.axes.forEach(function(axis) {
      if (axis.position === "x" && firstOrig.x === null) {
        if (axis._hasTimeField()) {
          firstOrig.x = this.chart._xPixels();
        } else {
          firstOrig.x = axis._origin;
        }
      } else if (axis.position === "y" && firstOrig.y === null) {
        if (axis._hasTimeField()) {
          firstOrig.y = this.chart._yPixels() + this.chart._heightPixels();
        } else {
          firstOrig.y = axis._origin;
        }
      }
    }, this);
    this.chart.axes.forEach(function(axis) {
      if (axis.position === "x" && !this.x.hidden) {
        if (this._deepMatch(axis)) {
          if (xIndex === 0) {
            coord.y = firstOrig.y;
          } else if (xIndex === 1) {
            coord.y = this.chart._yPixels();
          }
        }
        xIndex += 1;
      } else if (axis.position === "y" && !this.y.hidden) {
        if (this._deepMatch(axis)) {
          if (yIndex === 0) {
            coord.x = firstOrig.x;
          } else if (yIndex === 1) {
            coord.x = this.chart._xPixels() + this.chart._widthPixels();
          }
        }
        yIndex += 1;
      }
    }, this);
    return coord;
  };
  this._getTooltipFontSize = function() {
    var fontSize;
    if (!this.tooltipFontSize || this.tooltipFontSize.toString().toLowerCase() === "auto") {
      fontSize = (this.chart._heightPixels() / 35 > 10 ? this.chart._heightPixels() / 35 : 10) + "px";
    } else if (!isNaN(this.tooltipFontSize)) {
      fontSize = this.tooltipFontSize + "px";
    } else {
      fontSize = this.tooltipFontSize;
    }
    return fontSize;
  };
  this._isStacked = function() {
    return this.stacked && (this.x._hasCategories() || this.y._hasCategories());
  };
  this.addEventHandler = function(event, handler) {
    this._eventHandlers.push({ event, handler });
  };
  this.addOrderRule = function(ordering, desc) {
    this._orderRules.push({ ordering, desc });
  };
  this.getTooltipText = function(e) {
    var rows = [];
    if (this.categoryFields !== null && this.categoryFields !== void 0 && this.categoryFields.length > 0) {
      this.categoryFields.forEach(function(c, i) {
        if (c !== null && c !== void 0 && e.aggField[i] !== null && e.aggField[i] !== void 0) {
          rows.push(c + (e.aggField[i] !== c ? ": " + e.aggField[i] : ""));
        }
      }, this);
    }
    if (!this.p) {
      if (this.x) {
        this.x._getTooltipText(rows, e);
      }
      if (this.y) {
        this.y._getTooltipText(rows, e);
      }
      if (this.z) {
        this.z._getTooltipText(rows, e);
      }
    } else {
      if (this.x && this.x._hasCategories()) {
        this.x._getTooltipText(rows, e);
      }
      if (this.y && this.y._hasCategories()) {
        this.y._getTooltipText(rows, e);
      }
      if (this.z && this.z._hasCategories()) {
        this.z._getTooltipText(rows, e);
      }
      this.p._getTooltipText(rows, e);
    }
    if (this.c) {
      this.c._getTooltipText(rows, e);
    }
    return rows.filter(function(elem, pos) {
      return rows.indexOf(elem) === pos;
    });
  };
};
dimple.storyboard = function(chart, categoryFields) {
  if (categoryFields !== null && categoryFields !== void 0) {
    categoryFields = [].concat(categoryFields);
  }
  this.chart = chart;
  this.categoryFields = categoryFields;
  this.autoplay = true;
  this.frameDuration = 3e3;
  this.storyLabel = null;
  this.onTick = null;
  this.fontSize = "10px";
  this.fontFamily = "sans-serif";
  this._frame = 0;
  this._animationTimer = null;
  this._categories = [];
  this._cachedCategoryFields = [];
  this._orderRules = [];
  this._drawText = function() {
    var self = this, xCount = 0;
    if (!self.storyLabel) {
      self.chart.axes.forEach(function(a) {
        if (a.position === "x") {
          xCount += 1;
        }
      }, self);
      self.storyLabel = self.chart._group.append("text").attr("class", "dimple-storyboard-label").attr("opacity", 1).attr("x", self.chart._xPixels() + self.chart._widthPixels() * 0.01).attr(
        "y",
        self.chart._yPixels() + (self.chart._heightPixels() / 35 > 10 ? self.chart._heightPixels() / 35 : 10) * (xCount > 1 ? 1.25 : -1)
      ).call(function(context) {
        if (!chart.noFormats) {
          context.style("font-family", self.fontFamily).style("font-size", self._getFontSize());
        }
      });
    }
    self.storyLabel.text(
      self.categoryFields.join("\\") + ": " + self.getFrameValue()
    );
  };
  this._getCategories = function() {
    if (this._categoryFields !== this._cachedCategoryFields) {
      this._categories = [];
      this.chart._getAllData().forEach(function(d) {
        var index = -1, field = "";
        if (this.categoryFields !== null) {
          this.categoryFields.forEach(function(cat, i) {
            if (i > 0) {
              field += "/";
            }
            field += d[cat];
          }, this);
          index = this._categories.indexOf(field);
          if (index === -1) {
            this._categories.push(field);
            index = this._categories.length - 1;
          }
        }
      }, this);
      this._cachedCategoryFields = this._categoryFields;
    }
    return this._categories;
  };
  this._getFontSize = function() {
    var fontSize;
    if (!this.fontSize || this.fontSize.toString().toLowerCase() === "auto") {
      fontSize = (this.chart._heightPixels() / 35 > 10 ? this.chart._heightPixels() / 35 : 10) + "px";
    } else if (!isNaN(this.fontSize)) {
      fontSize = this.fontSize + "px";
    } else {
      fontSize = this.fontSize;
    }
    return fontSize;
  };
  this._goToFrameIndex = function(index) {
    this._frame = index % this._getCategories().length;
    this.chart.draw(this.frameDuration / 2);
  };
  this.addOrderRule = function(ordering, desc) {
    this._orderRules.push({ ordering, desc });
  };
  this.getFrameValue = function() {
    var returnValue = null;
    if (this._frame >= 0 && this._getCategories().length > this._frame) {
      returnValue = this._getCategories()[this._frame];
    }
    return returnValue;
  };
  this.goToFrame = function(frameText) {
    if (this._getCategories().length > 0) {
      var index = this._getCategories().indexOf(frameText);
      this._goToFrameIndex(index);
    }
  };
  this.pauseAnimation = function() {
    if (this._animationTimer !== null) {
      clearInterval(this._animationTimer);
      this._animationTimer = null;
    }
  };
  this.startAnimation = function() {
    if (this._animationTimer === null) {
      if (this.onTick !== null) {
        this.onTick(this.getFrameValue());
      }
      this._animationTimer = setInterval(
        function(storyboard) {
          return function() {
            storyboard._goToFrameIndex(storyboard._frame + 1);
            if (storyboard.onTick !== null) {
              storyboard.onTick(storyboard.getFrameValue());
            }
            storyboard._drawText(storyboard.frameDuration / 2);
          };
        }(this),
        this.frameDuration
      );
    }
  };
  this.stopAnimation = function() {
    if (this._animationTimer !== null) {
      clearInterval(this._animationTimer);
      this._animationTimer = null;
      this._frame = 0;
    }
  };
};
dimple.aggregateMethod.avg = function(lhs, rhs) {
  lhs.value = lhs.value === null || lhs.value === void 0 ? 0 : parseFloat(lhs.value);
  lhs.count = lhs.count === null || lhs.count === void 0 ? 1 : parseFloat(lhs.count);
  rhs.value = rhs.value === null || rhs.value === void 0 ? 0 : parseFloat(rhs.value);
  rhs.count = rhs.count === null || rhs.count === void 0 ? 1 : parseFloat(rhs.count);
  return (lhs.value * lhs.count + rhs.value * rhs.count) / (lhs.count + rhs.count);
};
dimple.aggregateMethod.count = function(lhs, rhs) {
  lhs.count = lhs.count === null || lhs.count === void 0 ? 0 : parseFloat(lhs.count);
  rhs.count = rhs.count === null || rhs.count === void 0 ? 0 : parseFloat(rhs.count);
  return lhs.count + rhs.count;
};
dimple.aggregateMethod.max = function(lhs, rhs) {
  lhs.value = lhs.value === null || lhs.value === void 0 ? 0 : parseFloat(lhs.value);
  rhs.value = rhs.value === null || rhs.value === void 0 ? 0 : parseFloat(rhs.value);
  return lhs.value > rhs.value ? lhs.value : rhs.value;
};
dimple.aggregateMethod.min = function(lhs, rhs) {
  return lhs.value === null ? parseFloat(rhs.value) : parseFloat(lhs.value) < parseFloat(rhs.value) ? parseFloat(lhs.value) : parseFloat(rhs.value);
};
dimple.aggregateMethod.sum = function(lhs, rhs) {
  lhs.value = lhs.value === null || lhs.value === void 0 ? 0 : parseFloat(lhs.value);
  rhs.value = rhs.value === null || rhs.value === void 0 ? 0 : parseFloat(rhs.value);
  return lhs.value + rhs.value;
};
dimple.plot.area = {
  // By default the values are stacked
  stacked: true,
  // This is a grouped plot meaning many points are treated as one series value
  grouped: true,
  // The axis positions affecting the area series
  supportedAxes: ["x", "y", "c"],
  // Draw the axis
  draw: function(chart, series, duration) {
    var data = series._positionData, areaData = [], theseShapes = null, className = "dimple-series-" + chart.series.indexOf(series), firstAgg = series.x._hasCategories() || series.y._hasCategories() ? 0 : 1, interpolation, graded = false, i, j, k, key, keyString, rowIndex, entered, updated, removed, orderedSeriesArray, catPoints = {}, allPoints = [], points, finalPointArray = [], basePoints, basePoint, cat, catVal, group, p, b, l, lIndex, lastAngle, catCoord, valCoord, onEnter = function() {
      return function(e, shape, chart2, series2) {
        (void 0)(shape).style("opacity", 1);
        dimple._showPointTooltip(e, shape, chart2, series2);
      };
    }, onLeave = function(lineData) {
      return function(e, shape, chart2, series2) {
        (void 0)(shape).style(
          "opacity",
          series2.lineMarkers || lineData.data.length < 2 ? dimple._helpers.opacity(e, chart2, series2) : 0
        );
        dimple._removeTooltip(e, shape, chart2, series2);
      };
    }, drawMarkers = function(d, context) {
      dimple._drawMarkers(
        d,
        chart,
        series,
        duration,
        className,
        graded,
        onEnter(),
        onLeave(d),
        context
      );
    }, coord = function(position, datum) {
      var val;
      if (series.interpolation === "step" && series[position]._hasCategories()) {
        val = dimple._helpers[position](datum, chart, series) + (position === "y" ? dimple._helpers.height(datum, chart, series) : 0);
        if (series[position].categoryFields.length < 2) {
          val += (position === "y" ? 1 : -1) * dimple._helpers[position + "Gap"](chart, series);
        }
      } else {
        val = dimple._helpers["c" + position](datum, chart, series);
      }
      return parseFloat(val);
    }, getArea = function(inter, originProperty) {
      var pt = (void 0)().x(function(d) {
        return series.x._hasCategories() || !originProperty ? d.x : series.x[originProperty];
      }).y(function(d) {
        return series.y._hasCategories() || !originProperty ? d.y : series.y[originProperty];
      });
      dimple._interpolate(pt, inter);
      return pt;
    }, sortByVal = function(a, b2) {
      return parseFloat(a) - parseFloat(b2);
    }, sortByX = function(a, b2) {
      return parseFloat(a.x) - parseFloat(b2.x);
    }, addNextPoint = function(source, target, startAngle) {
      var q, point = target[target.length - 1], thisAngle, bestAngleSoFar = 9999, returnPoint = point;
      for (q = 0; q < source.length; q += 1) {
        if (source[q].x !== point.x || source[q].y !== point.y) {
          thisAngle = 180 - Math.atan2(source[q].x - point.x, source[q].y - point.y) * (180 / Math.PI);
          if (thisAngle > startAngle && thisAngle < bestAngleSoFar) {
            returnPoint = source[q];
            bestAngleSoFar = thisAngle;
          }
        }
      }
      target.push(returnPoint);
      return bestAngleSoFar;
    };
    interpolation = series.interpolation === "step" ? "step-after" : series.interpolation;
    orderedSeriesArray = dimple._getSeriesOrder(
      series.data || chart.data,
      series
    );
    if (series.c && (series.x._hasCategories() && series.y._hasMeasure() || series.y._hasCategories() && series.x._hasMeasure())) {
      graded = true;
    }
    if (series.x._hasCategories()) {
      catCoord = "x";
      valCoord = "y";
    } else if (series.y._hasCategories()) {
      catCoord = "y";
      valCoord = "x";
    }
    for (i = 0; i < data.length; i += 1) {
      key = [];
      rowIndex = -1;
      for (k = firstAgg; k < data[i].aggField.length; k += 1) {
        key.push(data[i].aggField[k]);
      }
      keyString = dimple._createClass(key);
      for (k = 0; k < areaData.length; k += 1) {
        if (areaData[k].keyString === keyString) {
          rowIndex = k;
          break;
        }
      }
      if (rowIndex === -1) {
        rowIndex = areaData.length;
        areaData.push({
          key,
          keyString,
          color: "white",
          data: [],
          points: [],
          area: {},
          entry: {},
          exit: {},
          // Group refers to groupings along the category axis.  If there are groupings it will be recorded, otherwise all is used as a default
          group: catCoord && data[i][catCoord + "Field"] && data[i][catCoord + "Field"].length >= 2 ? data[i][catCoord + "Field"][0] : "All"
        });
      }
      areaData[rowIndex].data.push(data[i]);
    }
    if (orderedSeriesArray) {
      areaData.sort(function(a, b2) {
        return dimple._arrayIndexCompare(orderedSeriesArray, a.key, b2.key);
      });
    }
    for (i = 0; i < areaData.length; i += 1) {
      areaData[i].data.sort(
        dimple._getSeriesSortPredicate(chart, series, orderedSeriesArray)
      );
      for (j = 0; j < areaData[i].data.length; j += 1) {
        areaData[i].points.push({
          x: coord("x", areaData[i].data[j]),
          y: coord("y", areaData[i].data[j])
        });
        if (catCoord) {
          if (!catPoints[areaData[i].group]) {
            catPoints[areaData[i].group] = {};
          }
          catPoints[areaData[i].group][areaData[i].points[areaData[i].points.length - 1][catCoord]] = series[valCoord]._origin;
        }
      }
      points = areaData[i].points;
      if (series.interpolation === "step" && points.length > 1 && catCoord) {
        if (series.x._hasCategories()) {
          points.push({
            x: 2 * points[points.length - 1].x - points[points.length - 2].x,
            y: points[points.length - 1].y
          });
          catPoints[areaData[i].group][points[points.length - 1][catCoord]] = series[valCoord]._origin;
        } else if (series.y._hasCategories()) {
          points = [
            {
              x: points[0].x,
              y: 2 * points[0].y - points[1].y
            }
          ].concat(points);
          catPoints[areaData[i].group][points[0][catCoord]] = series[valCoord]._origin;
          areaData[i].points = points;
        }
      }
    }
    for (cat in catPoints) {
      if (Object.prototype.hasOwnProperty.call(catPoints, cat)) {
        allPoints[cat] = [];
        for (catVal in catPoints[cat]) {
          if (Object.prototype.hasOwnProperty.call(catPoints[cat], catVal)) {
            allPoints[cat].push(parseFloat(catVal));
          }
        }
        allPoints[cat].sort(sortByVal);
      }
    }
    for (i = 0; i < areaData.length; i += 1) {
      points = areaData[i].points;
      group = areaData[i].group;
      basePoints = [];
      finalPointArray = [];
      if (graded) {
        dimple._addGradient(
          areaData[i].key,
          "fill-area-gradient-" + areaData[i].keyString,
          series.x._hasCategories() ? series.x : series.y,
          data,
          chart,
          duration,
          "fill"
        );
      }
      if (allPoints[group] && allPoints[group].length > 0) {
        for (j = 0, k = 0; j < allPoints[group].length; j += 1) {
          if (allPoints[group][j] >= points[0][catCoord] && allPoints[group][j] <= points[points.length - 1][catCoord]) {
            basePoint = {};
            basePoint[catCoord] = allPoints[group][j];
            basePoint[valCoord] = catPoints[group][allPoints[group][j]];
            basePoints.push(basePoint);
            if (points[k][catCoord] > allPoints[group][j]) {
              finalPointArray.push(basePoint);
            } else {
              finalPointArray.push(points[k]);
              catPoints[areaData[i].group][allPoints[group][j]] = points[k][valCoord];
              k += 1;
            }
          }
        }
      } else {
        if (series._orderRules && series._orderRules.length > 0) {
          finalPointArray = points.concat(points[0]);
        } else {
          points = points.sort(sortByX);
          finalPointArray.push(points[0]);
          lastAngle = 0;
          do {
            lastAngle = addNextPoint(points, finalPointArray, lastAngle);
          } while (finalPointArray.length <= points.length && (finalPointArray[0].x !== finalPointArray[finalPointArray.length - 1].x || finalPointArray[0].y !== finalPointArray[finalPointArray.length - 1].y));
        }
      }
      basePoints = basePoints.reverse();
      p = getArea(interpolation, "_previousOrigin")(finalPointArray);
      b = getArea(
        interpolation === "step-after" ? "step-before" : interpolation === "step-before" ? "step-after" : interpolation,
        "_previousOrigin"
      )(basePoints);
      l = getArea("linear", "_previousOrigin")(finalPointArray);
      lIndex = l.indexOf("L") === -1 ? void 0 : l.indexOf("L");
      areaData[i].entry = p + (b && b.length > 0 ? "L" + b.substring(1) : "") + (l && l.length > 0 ? "L" + l.substring(1, lIndex) : 0);
      p = getArea(interpolation)(finalPointArray);
      b = getArea(
        interpolation === "step-after" ? "step-before" : interpolation === "step-before" ? "step-after" : interpolation
      )(basePoints);
      l = getArea("linear")(finalPointArray);
      lIndex = l.indexOf("L") === -1 ? void 0 : l.indexOf("L");
      areaData[i].update = p + (b && b.length > 0 ? "L" + b.substring(1) : "") + (l && l.length > 0 ? "L" + l.substring(1, lIndex) : 0);
      p = getArea(interpolation, "_origin")(finalPointArray);
      b = getArea(
        interpolation === "step-after" ? "step-before" : interpolation === "step-before" ? "step-after" : interpolation,
        "_origin"
      )(basePoints);
      l = getArea("linear", "_origin")(finalPointArray);
      lIndex = l.indexOf("L") === -1 ? void 0 : l.indexOf("L");
      areaData[i].exit = p + (b && b.length > 0 ? "L" + b.substring(1) : "") + (l && l.length > 0 ? "L" + l.substring(1, lIndex) : 0);
      areaData[i].color = chart.getColor(
        areaData[i].key.length > 0 ? areaData[i].key[areaData[i].key.length - 1] : "All"
      );
      areaData[i].css = chart.getClass(
        areaData[i].key.length > 0 ? areaData[i].key[areaData[i].key.length - 1] : "All"
      );
    }
    if (chart._tooltipGroup) {
      chart._tooltipGroup.remove();
    }
    if (!series.shapes) {
      theseShapes = series._group.selectAll("." + className).data(areaData, function(d) {
        return d.key;
      });
    } else {
      theseShapes = series.shapes.data(areaData, function(d) {
        return d.key;
      });
    }
    entered = theseShapes.enter().append("path").attr("id", function(d) {
      return dimple._createClass([d.key]);
    }).attr("class", function(d) {
      return className + " dimple-line " + d.keyString + " " + chart.customClassList.areaSeries + " " + d.css;
    }).attr("d", function(d) {
      return d.entry;
    }).call(function(context) {
      if (!chart.noFormats) {
        context.attr("opacity", function(d) {
          return graded ? 1 : d.color.opacity;
        }).style("fill", function(d) {
          return graded ? "url(#" + dimple._createClass(["fill-area-gradient-" + d.keyString]) + ")" : d.color.fill;
        }).style("stroke", function(d) {
          return graded ? "url(#" + dimple._createClass([
            "stroke-area-gradient-" + d.keyString
          ]) + ")" : d.color.stroke;
        }).style("stroke-width", series.lineWeight);
      }
    }).each(function(d) {
      d.markerData = d.data;
      drawMarkers(d, this);
    });
    updated = chart._handleTransition(theseShapes.merge(entered), duration, chart).attr("d", function(d) {
      return d.update;
    }).each(function(d) {
      d.markerData = d.data;
      drawMarkers(d, this);
    });
    removed = chart._handleTransition(theseShapes.exit(), duration, chart).attr("d", function(d) {
      return d.exit;
    }).each(function(d) {
      d.markerData = [];
      drawMarkers(d, this);
    });
    dimple._postDrawHandling(series, updated, removed, duration);
    series.shapes = series._group.selectAll("." + className);
  }
};
dimple.plot.bar = {
  // By default the bar series is stacked if there are series categories
  stacked: true,
  // This is not a grouped plot meaning that one point is treated as one series value
  grouped: false,
  // The axes which will affect the bar chart - not z
  supportedAxes: ["x", "y", "c"],
  // Draw the chart
  draw: function(chart, series, duration) {
    var chartData = series._positionData, theseShapes = null, classes = ["dimple-series-" + chart.series.indexOf(series), "dimple-bar"], entered, updated, removed, xFloat = !series._isStacked() && series.x._hasMeasure(), yFloat = !series._isStacked() && series.y._hasMeasure(), cat = "none";
    if (series.x._hasCategories() && series.y._hasCategories()) {
      cat = "both";
    } else if (series.x._hasCategories()) {
      cat = "x";
    } else if (series.y._hasCategories()) {
      cat = "y";
    }
    if (chart._tooltipGroup) {
      chart._tooltipGroup.remove();
    }
    if (!series.shapes) {
      theseShapes = series._group.selectAll("." + classes.join(".")).data(chartData, function(d) {
        return d.key;
      });
    } else {
      theseShapes = series.shapes.data(chartData, function(d) {
        return d.key;
      });
    }
    entered = theseShapes.enter().append("rect").attr("id", function(d) {
      return dimple._createClass([d.key]);
    }).attr("class", function(d) {
      var c = [];
      c = c.concat(d.aggField);
      c = c.concat(d.xField);
      c = c.concat(d.yField);
      return classes.join(" ") + " " + dimple._createClass(c) + " " + chart.customClassList.barSeries + " " + dimple._helpers.css(d, chart);
    }).attr("x", function(d) {
      var returnValue = series.x._previousOrigin;
      if (cat === "x") {
        returnValue = dimple._helpers.x(d, chart, series);
      } else if (cat === "both") {
        returnValue = dimple._helpers.cx(d, chart, series);
      }
      return returnValue;
    }).attr("y", function(d) {
      var returnValue = series.y._previousOrigin;
      if (cat === "y") {
        returnValue = dimple._helpers.y(d, chart, series);
      } else if (cat === "both") {
        returnValue = dimple._helpers.cy(d, chart, series);
      }
      return returnValue;
    }).attr("width", function(d) {
      return cat === "x" ? dimple._helpers.width(d, chart, series) : 0;
    }).attr("height", function(d) {
      return cat === "y" ? dimple._helpers.height(d, chart, series) : 0;
    }).on("mouseover", function(e) {
      dimple._showBarTooltip(e, this, chart, series);
    }).on("mouseleave", function(e) {
      dimple._removeTooltip(e, this, chart, series);
    }).call(function(context) {
      if (!chart.noFormats) {
        context.attr("opacity", function(d) {
          return dimple._helpers.opacity(d, chart, series);
        }).style("fill", function(d) {
          return dimple._helpers.fill(d, chart, series);
        }).style("stroke", function(d) {
          return dimple._helpers.stroke(d, chart, series);
        });
      }
    });
    updated = chart._handleTransition(theseShapes.merge(entered), duration, chart, series).attr("x", function(d) {
      return xFloat ? dimple._helpers.cx(d, chart, series) - series.x.floatingBarWidth / 2 : dimple._helpers.x(d, chart, series);
    }).attr("y", function(d) {
      return yFloat ? dimple._helpers.cy(d, chart, series) - series.y.floatingBarWidth / 2 : dimple._helpers.y(d, chart, series);
    }).attr("width", function(d) {
      return xFloat ? series.x.floatingBarWidth : dimple._helpers.width(d, chart, series);
    }).attr("height", function(d) {
      return yFloat ? series.y.floatingBarWidth : dimple._helpers.height(d, chart, series);
    }).call(function(context) {
      if (!chart.noFormats) {
        context.attr("fill", function(d) {
          return dimple._helpers.fill(d, chart, series);
        }).attr("stroke", function(d) {
          return dimple._helpers.stroke(d, chart, series);
        });
      }
    });
    removed = chart._handleTransition(theseShapes.exit(), duration, chart, series).attr("x", function(d) {
      var returnValue = series.x._origin;
      if (cat === "x") {
        returnValue = dimple._helpers.x(d, chart, series);
      } else if (cat === "both") {
        returnValue = dimple._helpers.cx(d, chart, series);
      }
      return returnValue;
    }).attr("y", function(d) {
      var returnValue = series.y._origin;
      if (cat === "y") {
        returnValue = dimple._helpers.y(d, chart, series);
      } else if (cat === "both") {
        returnValue = dimple._helpers.cy(d, chart, series);
      }
      return returnValue;
    }).attr("width", function(d) {
      return cat === "x" ? dimple._helpers.width(d, chart, series) : 0;
    }).attr("height", function(d) {
      return cat === "y" ? dimple._helpers.height(d, chart, series) : 0;
    });
    dimple._postDrawHandling(series, updated, removed, duration);
    series.shapes = series._group.selectAll("." + classes.join("."));
  }
};
dimple.plot.bubble = {
  // By default the bubble values are not stacked
  stacked: false,
  // This is not a grouped plot meaning that one point is treated as one series value
  grouped: false,
  // The axis positions affecting the bubble series
  supportedAxes: ["x", "y", "z", "c"],
  // Draw the axis
  draw: function(chart, series, duration) {
    var chartData = series._positionData, theseShapes = null, classes = [
      "dimple-series-" + chart.series.indexOf(series),
      "dimple-bubble"
    ], entered, updated, removed;
    if (chart._tooltipGroup) {
      chart._tooltipGroup.remove();
    }
    if (!series.shapes) {
      theseShapes = series._group.selectAll("." + classes.join(".")).data(chartData, function(d) {
        return d.key;
      });
    } else {
      theseShapes = series.shapes.data(chartData, function(d) {
        return d.key;
      });
    }
    entered = theseShapes.enter().append("circle").attr("id", function(d) {
      return dimple._createClass([d.key]);
    }).attr("class", function(d) {
      var c = [];
      c = c.concat(d.aggField);
      c = c.concat(d.xField);
      c = c.concat(d.yField);
      c = c.concat(d.zField);
      return classes.join(" ") + " " + dimple._createClass(c) + " " + chart.customClassList.bubbleSeries + " " + dimple._helpers.css(d, chart);
    }).attr("cx", function(d) {
      return series.x._hasCategories() ? dimple._helpers.cx(d, chart, series) : series.x._previousOrigin;
    }).attr("cy", function(d) {
      return series.y._hasCategories() ? dimple._helpers.cy(d, chart, series) : series.y._previousOrigin;
    }).attr("r", 0).on("mouseover", function(e) {
      dimple._showPointTooltip(e, this, chart, series);
    }).on("mouseleave", function(e) {
      dimple._removeTooltip(e, this, chart, series);
    }).call(function(context) {
      if (!chart.noFormats) {
        context.attr("opacity", function(d) {
          return dimple._helpers.opacity(d, chart, series);
        }).style("fill", function(d) {
          return dimple._helpers.fill(d, chart, series);
        }).style("stroke", function(d) {
          return dimple._helpers.stroke(d, chart, series);
        });
      }
    });
    updated = chart._handleTransition(theseShapes.merge(entered), duration, chart, series).attr("cx", function(d) {
      return dimple._helpers.cx(d, chart, series);
    }).attr("cy", function(d) {
      return dimple._helpers.cy(d, chart, series);
    }).attr("r", function(d) {
      return dimple._helpers.r(d, chart, series);
    }).call(function(context) {
      if (!chart.noFormats) {
        context.attr("fill", function(d) {
          return dimple._helpers.fill(d, chart, series);
        }).attr("stroke", function(d) {
          return dimple._helpers.stroke(d, chart, series);
        });
      }
    });
    removed = chart._handleTransition(theseShapes.exit(), duration, chart, series).attr("r", 0).attr("cx", function(d) {
      return series.x._hasCategories() ? dimple._helpers.cx(d, chart, series) : series.x._origin;
    }).attr("cy", function(d) {
      return series.y._hasCategories() ? dimple._helpers.cy(d, chart, series) : series.y._origin;
    });
    dimple._postDrawHandling(series, updated, removed, duration);
    series.shapes = series._group.selectAll("." + classes.join("."));
  }
};
dimple.plot.line = {
  // By default the values are not stacked
  stacked: false,
  // This is a grouped plot meaning many points are treated as one series value
  grouped: true,
  // The axis positions affecting the line series
  supportedAxes: ["x", "y", "c"],
  // Draw the axis
  draw: function(chart, series, duration) {
    var data = series._positionData, lineData = [], theseShapes = null, className = "dimple-series-" + chart.series.indexOf(series), firstAgg = series.x._hasCategories() || series.y._hasCategories() ? 0 : 1, interpolation, graded = false, i, j, k, key, keyString, rowIndex, entered, updated, removed, orderedSeriesArray, onEnter = function() {
      return function(e, shape, chart2, series2) {
        (void 0)(shape).style("opacity", 1);
        dimple._showPointTooltip(e, shape, chart2, series2);
      };
    }, onLeave = function(lineData2) {
      return function(e, shape, chart2, series2) {
        (void 0)(shape).style(
          "opacity",
          series2.lineMarkers || lineData2.data.length < 2 ? dimple._helpers.opacity(e, chart2, series2) : 0
        );
        dimple._removeTooltip(e, shape, chart2, series2);
      };
    }, drawMarkers = function(d, context) {
      dimple._drawMarkers(
        d,
        chart,
        series,
        duration,
        className,
        graded,
        onEnter(),
        onLeave(d),
        context
      );
    }, coord = function(position, datum) {
      var val;
      if (series.interpolation === "step" && series[position]._hasCategories()) {
        series.barGap = 0;
        series.clusterBarGap = 0;
        val = dimple._helpers[position](datum, chart, series) + (position === "y" ? dimple._helpers.height(datum, chart, series) : 0);
      } else {
        val = dimple._helpers["c" + position](datum, chart, series);
      }
      return parseFloat(val.toFixed(1));
    }, getLine = function(inter, originProperty) {
      var pt = (void 0)().x(function(d) {
        return series.x._hasCategories() || !originProperty ? d.x : series.x[originProperty];
      }).y(function(d) {
        return series.y._hasCategories() || !originProperty ? d.y : series.y[originProperty];
      });
      dimple._interpolate(pt, inter);
      return pt;
    };
    interpolation = series.interpolation === "step" ? "step-after" : series.interpolation;
    orderedSeriesArray = dimple._getSeriesOrder(
      series.data || chart.data,
      series
    );
    if (series.c && (series.x._hasCategories() && series.y._hasMeasure() || series.y._hasCategories() && series.x._hasMeasure())) {
      graded = true;
    }
    for (i = 0; i < data.length; i += 1) {
      key = [];
      rowIndex = -1;
      for (k = firstAgg; k < data[i].aggField.length; k += 1) {
        key.push(data[i].aggField[k]);
      }
      keyString = dimple._createClass(key);
      for (k = 0; k < lineData.length; k += 1) {
        if (lineData[k].keyString === keyString) {
          rowIndex = k;
          break;
        }
      }
      if (rowIndex === -1) {
        rowIndex = lineData.length;
        lineData.push({
          key,
          keyString,
          color: "white",
          data: [],
          markerData: [],
          points: [],
          line: {},
          entry: {},
          exit: {}
        });
      }
      lineData[rowIndex].data.push(data[i]);
    }
    if (orderedSeriesArray) {
      lineData.sort(function(a, b) {
        return dimple._arrayIndexCompare(orderedSeriesArray, a.key, b.key);
      });
    }
    for (i = 0; i < lineData.length; i += 1) {
      lineData[i].data.sort(
        dimple._getSeriesSortPredicate(chart, series, orderedSeriesArray)
      );
      if (graded) {
        dimple._addGradient(
          lineData[i].key,
          "fill-line-gradient-" + lineData[i].keyString,
          series.x._hasCategories() ? series.x : series.y,
          data,
          chart,
          duration,
          "fill"
        );
      }
      for (j = 0; j < lineData[i].data.length; j += 1) {
        lineData[i].points.push({
          x: coord("x", lineData[i].data[j]),
          y: coord("y", lineData[i].data[j])
        });
      }
      if (series.interpolation === "step" && lineData[i].points.length > 1) {
        if (series.x._hasCategories()) {
          lineData[i].points.push({
            x: 2 * lineData[i].points[lineData[i].points.length - 1].x - lineData[i].points[lineData[i].points.length - 2].x,
            y: lineData[i].points[lineData[i].points.length - 1].y
          });
        } else if (series.y._hasCategories()) {
          lineData[i].points = [
            {
              x: lineData[i].points[0].x,
              y: 2 * lineData[i].points[0].y - lineData[i].points[1].y
            }
          ].concat(lineData[i].points);
        }
      }
      if (lineData && lineData[i] && lineData[i].points && lineData[i].points.length === 1) {
        lineData[i].points.push({
          x: lineData[i].points[0].x,
          y: lineData[i].points[0].y
        });
      }
      lineData[i].entry = getLine(
        interpolation,
        "_previousOrigin"
      )(lineData[i].points);
      lineData[i].update = getLine(interpolation)(lineData[i].points);
      lineData[i].exit = getLine(interpolation, "_origin")(lineData[i].points);
      lineData[i].color = chart.getColor(
        lineData[i].key.length > 0 ? lineData[i].key[lineData[i].key.length - 1] : "All"
      );
      lineData[i].css = chart.getClass(
        lineData[i].key.length > 0 ? lineData[i].key[lineData[i].key.length - 1] : "All"
      );
    }
    if (chart._tooltipGroup) {
      chart._tooltipGroup.remove();
    }
    if (!series.shapes) {
      theseShapes = series._group.selectAll("." + className).data(lineData, function(d) {
        return d.key;
      });
    } else {
      theseShapes = series.shapes.data(lineData, function(d) {
        return d.key;
      });
    }
    entered = theseShapes.enter().append("path").attr("id", function(d) {
      return dimple._createClass([d.key]);
    }).attr("class", function(d) {
      return className + " dimple-line " + d.keyString + " " + chart.customClassList.lineSeries + " " + d.css;
    }).attr("d", function(d) {
      return d.entry;
    }).call(function(context) {
      if (!chart.noFormats) {
        context.attr("opacity", function(d) {
          return graded ? 1 : d.color.opacity;
        }).style("fill", "none").style("stroke", function(d) {
          return graded ? "url(#" + dimple._createClass(["fill-line-gradient-" + d.keyString]) + ")" : d.color.stroke;
        }).style("stroke-width", series.lineWeight);
      }
    }).each(function(d) {
      d.markerData = d.data;
      drawMarkers(d, this);
    });
    updated = chart._handleTransition(theseShapes.merge(entered), duration, chart).attr("d", function(d) {
      return d.update;
    }).each(function(d) {
      d.markerData = d.data;
      drawMarkers(d, this);
    });
    removed = chart._handleTransition(theseShapes.exit(), duration, chart).attr("d", function(d) {
      return d.exit;
    }).each(function(d) {
      d.markerData = [];
      drawMarkers(d, this);
    });
    dimple._postDrawHandling(series, updated, removed, duration);
    series.shapes = series._group.selectAll("." + className);
  }
};
dimple.plot.pie = {
  // By default the bar series is stacked if there are series categories
  stacked: false,
  // This is not a grouped plot meaning that one point is treated as one series value
  grouped: false,
  // The axes which will affect the bar chart - not z
  supportedAxes: ["x", "y", "c", "z", "p"],
  // Draw the chart
  draw: function(chart, series, duration) {
    var chartData = series._positionData, theseShapes = null, classes = ["dimple-series-" + chart.series.indexOf(series), "dimple-pie"], entered, updated, removed, getOuterBase = function(d) {
      var oR;
      if (series.x && series.y) {
        oR = dimple._helpers.r(d, chart, series);
      } else {
        oR = chart._widthPixels() < chart._heightPixels() ? chart._widthPixels() / 2 : chart._heightPixels() / 2;
      }
      return oR;
    }, getOuterRadius = function(d) {
      var oR = getOuterBase(d);
      if (series.outerRadius) {
        oR = dimple._parsePosition(series.outerRadius, oR);
      }
      return Math.max(oR, 0);
    }, getInnerRadius = function(d) {
      var iR = 0;
      if (series.innerRadius) {
        iR = dimple._parsePosition(series.innerRadius, getOuterBase(d));
      }
      return Math.max(iR, 0);
    }, getArc = function(d) {
      var arc;
      arc = (void 0)().innerRadius(getInnerRadius(d)).outerRadius(getOuterRadius(d));
      return arc(d);
    }, arcTween = function(a) {
      a.innerRadius = getInnerRadius(a);
      a.outerRadius = getOuterRadius(a);
      var i = (void 0)(this._current, a), arc;
      arc = (void 0)().innerRadius(function(d) {
        return d.innerRadius;
      }).outerRadius(function(d) {
        return d.outerRadius;
      });
      this._current = i(0);
      return function(t) {
        return arc(i(t));
      };
    }, getTransform = function(origin) {
      return function(d) {
        var xString, yString;
        if (series.x && series.y) {
          if (!origin || series.x._hasCategories()) {
            xString = dimple._helpers.cx(d, chart, series);
          } else {
            xString = series.x._previousOrigin;
          }
          if (!origin || series.y._hasCategories()) {
            yString = dimple._helpers.cy(d, chart, series);
          } else {
            yString = series.y._previousOrigin;
          }
        } else {
          xString = chart._xPixels() + chart._widthPixels() / 2;
          yString = chart._yPixels() + chart._heightPixels() / 2;
        }
        return "translate(" + xString + "," + yString + ")";
      };
    };
    if (chart._tooltipGroup) {
      chart._tooltipGroup.remove();
    }
    if (!series.shapes) {
      theseShapes = series._group.selectAll("." + classes.join(".")).data(chartData, function(d) {
        return d.key;
      });
    } else {
      theseShapes = series.shapes.data(chartData, function(d) {
        return d.key;
      });
    }
    entered = theseShapes.enter().append("path").attr("id", function(d) {
      return dimple._createClass([d.key]);
    }).attr("class", function(d) {
      var c = [];
      c = c.concat(d.aggField);
      c = c.concat(d.pField);
      return classes.join(" ") + " " + dimple._createClass(c) + " " + chart.customClassList.pieSeries + " " + dimple._helpers.css(d, chart);
    }).attr("d", getArc).on("mouseover", function(e) {
      dimple._showBarTooltip(e, this, chart, series);
    }).on("mouseleave", function(e) {
      dimple._removeTooltip(e, this, chart, series);
    }).call(function(context) {
      if (!chart.noFormats) {
        context.attr("opacity", function(d) {
          return dimple._helpers.opacity(d, chart, series);
        }).style("fill", function(d) {
          return dimple._helpers.fill(d, chart, series);
        }).style("stroke", function(d) {
          return dimple._helpers.stroke(d, chart, series);
        });
      }
    }).attr("transform", getTransform(true)).each(function(d) {
      this._current = d;
      d.innerRadius = getInnerRadius(d);
      d.outerRadius = getOuterRadius(d);
    });
    updated = chart._handleTransition(theseShapes.merge(entered), duration, chart, series).call(function(context) {
      if (duration && duration > 0) {
        context.attrTween("d", arcTween);
      } else {
        context.attr("d", getArc);
      }
      if (!chart.noFormats) {
        context.attr("fill", function(d) {
          return dimple._helpers.fill(d, chart, series);
        }).attr("stroke", function(d) {
          return dimple._helpers.stroke(d, chart, series);
        });
      }
    }).attr("transform", getTransform(false));
    removed = chart._handleTransition(theseShapes.exit(), duration, chart, series).attr("transform", getTransform(true)).attr("d", getArc);
    dimple._postDrawHandling(series, updated, removed, duration);
    series.shapes = series._group.selectAll("." + classes.join("."));
  }
};
dimple._addGradient = function(seriesValue, id, categoryAxis, data, chart, duration, colorProperty) {
  var sArray = [].concat(seriesValue), grad = chart.svg.select("#" + dimple._createClass([id])), cats = [], field = categoryAxis.position + "Field", transition = true, colors = [];
  data.forEach(function(d) {
    if (cats.indexOf(d[field]) === -1 && d.aggField.join("_") === sArray.join("_")) {
      cats.push(d[field]);
    }
  }, this);
  cats = cats.sort(function(a, b) {
    return categoryAxis._scale(a) - categoryAxis._scale(b);
  });
  if (grad.node() === null) {
    transition = false;
    grad = chart.svg.append("defs").append("linearGradient").attr("id", dimple._createClass([id])).attr("gradientUnits", "userSpaceOnUse").attr(
      "x1",
      categoryAxis.position === "x" ? categoryAxis._scale(cats[0]) + chart._widthPixels() / cats.length / 2 : 0
    ).attr(
      "y1",
      categoryAxis.position === "y" ? categoryAxis._scale(cats[0]) - chart._heightPixels() / cats.length / 2 : 0
    ).attr(
      "x2",
      categoryAxis.position === "x" ? categoryAxis._scale(cats[cats.length - 1]) + chart._widthPixels() / cats.length / 2 : 0
    ).attr(
      "y2",
      categoryAxis.position === "y" ? categoryAxis._scale(cats[cats.length - 1]) - chart._heightPixels() / cats.length / 2 : 0
    );
  }
  cats.forEach(function(cat, j) {
    var row = {}, k = 0;
    for (k = 0; k < data.length; k = k + 1) {
      if (data[k].aggField.join("_") === sArray.join("_") && data[k][field].join("_") === cat.join("_")) {
        row = data[k];
        break;
      }
    }
    colors.push({
      offset: Math.round(j / (cats.length - 1) * 100) + "%",
      color: row[colorProperty]
    });
  }, this);
  if (transition) {
    chart._handleTransition(grad.selectAll("stop").data(colors), duration, chart).attr("offset", function(d) {
      return d.offset;
    }).attr("stop-color", function(d) {
      return d.color;
    });
  } else {
    grad.selectAll("stop").data(colors).enter().append("stop").attr("offset", function(d) {
      return d.offset;
    }).attr("stop-color", function(d) {
      return d.color;
    });
  }
};
dimple._arrayIndexCompare = function(array, a, b) {
  var returnValue, p, q, aMatch, bMatch, rowArray;
  for (p = 0; p < array.length; p += 1) {
    aMatch = true;
    bMatch = true;
    rowArray = [].concat(array[p]);
    for (q = 0; q < a.length; q += 1) {
      aMatch = aMatch && a[q] === rowArray[q];
    }
    for (q = 0; q < b.length; q += 1) {
      bMatch = bMatch && b[q] === rowArray[q];
    }
    if (aMatch || bMatch) {
      if (aMatch && bMatch) {
        returnValue = 0;
      } else if (aMatch) {
        returnValue = -1;
      } else {
        returnValue = 1;
      }
      break;
    }
  }
  return returnValue;
};
dimple._createClass = function(stringArray) {
  var i, returnArray = [], replacer;
  replacer = function(s) {
    var c = s.charCodeAt(0), returnString = "-";
    if (c >= 65 && c <= 90) {
      returnString = s.toLowerCase();
    }
    return returnString;
  };
  if (stringArray.length > 0) {
    for (i = 0; i < stringArray.length; i += 1) {
      if (stringArray[i]) {
        returnArray.push(
          "dimple-" + stringArray[i].toString().replace(/[^a-z\d]/g, replacer)
        );
      }
    }
  } else {
    returnArray = ["dimple-all"];
  }
  return returnArray.join(" ");
};
dimple._drawMarkerBacks = function(lineDataRow, chart, series, duration, className, lineShape) {
  var markerBacks, markerBackClasses = [
    "dimple-marker-back",
    className,
    lineDataRow.keyString
  ], rem, shapes;
  if (series.lineMarkers) {
    if (series._markerBacks === null || series._markerBacks === void 0 || series._markerBacks[lineDataRow.keyString] === void 0) {
      markerBacks = series._group.selectAll("." + markerBackClasses.join(".")).data(lineDataRow.markerData);
    } else {
      markerBacks = series._markerBacks[lineDataRow.keyString].data(
        lineDataRow.markerData,
        function(d) {
          return d.key;
        }
      );
    }
    if (lineShape.nextSibling && lineShape.nextSibling.id) {
      shapes = markerBacks.enter().insert("circle", "#" + lineShape.nextSibling.id);
    } else {
      shapes = markerBacks.enter().append("circle");
    }
    shapes.attr("id", function(d) {
      return dimple._createClass([d.key + " Marker Back"]);
    }).attr("class", function(d) {
      var fields = [];
      if (series.x._hasCategories()) {
        fields = fields.concat(d.xField);
      }
      if (series.y._hasCategories()) {
        fields = fields.concat(d.yField);
      }
      return dimple._createClass(fields) + " " + markerBackClasses.join(" ");
    }).attr("cx", function(d) {
      return series.x._hasCategories() ? dimple._helpers.cx(d, chart, series) : series.x._previousOrigin;
    }).attr("cy", function(d) {
      return series.y._hasCategories() ? dimple._helpers.cy(d, chart, series) : series.y._previousOrigin;
    }).attr("r", 0).attr("fill", "white").attr("stroke", "none");
    chart._handleTransition(markerBacks.merge(shapes), duration, chart).attr("cx", function(d) {
      return dimple._helpers.cx(d, chart, series);
    }).attr("cy", function(d) {
      return dimple._helpers.cy(d, chart, series);
    }).attr("r", 2 + series.lineWeight);
    rem = chart._handleTransition(markerBacks.exit(), duration, chart).attr("cx", function(d) {
      return series.x._hasCategories() ? dimple._helpers.cx(d, chart, series) : series.x._origin;
    }).attr("cy", function(d) {
      return series.y._hasCategories() ? dimple._helpers.cy(d, chart, series) : series.y._origin;
    }).attr("r", 0);
    if (duration === 0) {
      rem.remove();
    } else {
      rem.each("end", function() {
        (void 0)(this).remove();
      });
    }
    if (series._markerBacks === void 0 || series._markerBacks === null) {
      series._markerBacks = {};
    }
    series._markerBacks[lineDataRow.keyString] = markerBacks;
  }
};
dimple._drawMarkers = function(lineDataRow, chart, series, duration, className, useGradient, enterEventHandler, leaveEventHandler, lineShape) {
  var markers, markerClasses = ["dimple-marker", className, lineDataRow.keyString], rem, shapes;
  if (series._markers === null || series._markers === void 0 || series._markers[lineDataRow.keyString] === void 0) {
    markers = series._group.selectAll("." + markerClasses.join(".")).data(lineDataRow.markerData);
  } else {
    markers = series._markers[lineDataRow.keyString].data(
      lineDataRow.markerData,
      function(d) {
        return d.key;
      }
    );
  }
  if (lineShape.nextSibling && lineShape.nextSibling.id) {
    shapes = markers.enter().insert("circle", "#" + lineShape.nextSibling.id);
  } else {
    shapes = markers.enter().append("circle");
  }
  shapes.attr("id", function(d) {
    return dimple._createClass([d.key + " Marker"]);
  }).attr("class", function(d) {
    var fields = [], css = chart.getClass(
      d.aggField.length > 0 ? d.aggField[d.aggField.length - 1] : "All"
    );
    if (series.x._hasCategories()) {
      fields = fields.concat(d.xField);
    }
    if (series.y._hasCategories()) {
      fields = fields.concat(d.yField);
    }
    return dimple._createClass(fields) + " " + markerClasses.join(" ") + " " + chart.customClassList.lineMarker + " " + css;
  }).on("mouseover", function(e) {
    enterEventHandler(e, this, chart, series);
  }).on("mouseleave", function(e) {
    leaveEventHandler(e, this, chart, series);
  }).attr("cx", function(d) {
    return series.x._hasCategories() ? dimple._helpers.cx(d, chart, series) : series.x._previousOrigin;
  }).attr("cy", function(d) {
    return series.y._hasCategories() ? dimple._helpers.cy(d, chart, series) : series.y._previousOrigin;
  }).attr("r", 0).attr(
    "opacity",
    series.lineMarkers || lineDataRow.data.length < 2 ? lineDataRow.color.opacity : 0
  ).call(function(context) {
    if (!chart.noFormats) {
      context.attr("fill", "white").style("stroke-width", series.lineWeight).attr("stroke", function(d) {
        return useGradient ? dimple._helpers.fill(d, chart, series) : lineDataRow.color.stroke;
      });
    }
  });
  chart._handleTransition(markers.merge(shapes), duration, chart).attr("cx", function(d) {
    return dimple._helpers.cx(d, chart, series);
  }).attr("cy", function(d) {
    return dimple._helpers.cy(d, chart, series);
  }).attr("r", 2 + series.lineWeight).attr(
    "opacity",
    series.lineMarkers || lineDataRow.data.length < 2 ? lineDataRow.color.opacity : 0
  ).call(function(context) {
    if (!chart.noFormats) {
      context.attr("fill", "white").style("stroke-width", series.lineWeight).attr("stroke", function(d) {
        return useGradient ? dimple._helpers.fill(d, chart, series) : lineDataRow.color.stroke;
      });
    }
  });
  rem = chart._handleTransition(markers.exit(), duration, chart).attr("cx", function(d) {
    return series.x._hasCategories() ? dimple._helpers.cx(d, chart, series) : series.x._origin;
  }).attr("cy", function(d) {
    return series.y._hasCategories() ? dimple._helpers.cy(d, chart, series) : series.y._origin;
  }).attr("r", 0);
  if (duration === 0) {
    rem.remove();
  } else {
    rem.each("end", function() {
      (void 0)(this).remove();
    });
  }
  if (series._markers === void 0 || series._markers === null) {
    series._markers = {};
  }
  series._markers[lineDataRow.keyString] = markers;
  dimple._drawMarkerBacks(
    lineDataRow,
    chart,
    series,
    duration,
    className,
    lineShape
  );
};
dimple._ease = function(shape, ease) {
  if (shape && ease) {
    if (Object.prototype.toString.call(ease) === "[object String]") {
      switch (ease) {
        case "linear":
          ease = void 0;
          break;
        case "poly":
          ease = void 0;
          break;
        case "quad":
          ease = void 0;
          break;
        case "cubic":
          ease = void 0;
          break;
        case "sin":
          ease = void 0;
          break;
        case "exp":
          ease = void 0;
          break;
        case "circle":
          ease = void 0;
          break;
        case "elastic":
          ease = void 0;
          break;
        case "back":
          ease = void 0;
          break;
        case "bounce":
          ease = void 0;
          break;
      }
      shape.ease(ease);
    }
  }
};
dimple._getOrderedList = function(data, mainField, levelDefinitions) {
  var rollupData, sortStack = [], finalArray = [], mainArray = [].concat(mainField), fields = [].concat(mainField), defs = [];
  if (levelDefinitions !== null && levelDefinitions !== void 0) {
    defs = defs.concat(levelDefinitions);
  }
  defs = defs.concat({ ordering: mainArray, desc: false });
  defs.forEach(function(def) {
    var field, values = [], tempFields = [];
    if (typeof def.ordering === "function") {
      if (data && data.length > 0) {
        for (field in data[0]) {
          if (Object.prototype.hasOwnProperty.call(data[0], field) && fields.indexOf(field) === -1) {
            fields.push(field);
          }
        }
      }
    } else if (!(def.ordering instanceof Array)) {
      fields.push(def.ordering);
    } else {
      for (field = 0; field < def.ordering.length; field += 1) {
        if (data && data.length > 0 && Object.prototype.hasOwnProperty.call(data[0], def.ordering[field])) {
          tempFields.push(def.ordering[field]);
        }
        values.push(def.ordering[field]);
      }
      if (tempFields.length > values.length / 2) {
        fields.concat(tempFields);
      } else {
        def.values = values;
      }
    }
  }, this);
  rollupData = dimple._rollUp(data, mainArray, fields);
  if (defs.length >= 1) {
    defs.forEach(function(def) {
      var desc = def.desc === null || def.desc === void 0 ? false : def.desc, ordering = def.ordering, orderArray = [], sum = function(array) {
        var total = 0, i;
        for (i = 0; i < array.length; i += 1) {
          if (!isNaN(array[i])) {
            total += parseFloat(array[i]);
          } else {
            total = void 0;
            break;
          }
        }
        return total;
      }, compare = function(a, b) {
        var result = 0, sumA = sum(a), sumB = sum(b);
        if (!isNaN(sumA) && !isNaN(sumB)) {
          result = parseFloat(sumA) - parseFloat(sumB);
        } else if (!isNaN(Date.parse(a[0])) && !isNaN(Date.parse(b[0]))) {
          result = Date.parse(a[0]) - Date.parse(b[0]);
        } else if (a[0] < b[0]) {
          result = -1;
        } else if (a[0] > b[0]) {
          result = 1;
        }
        return result;
      };
      if (typeof ordering === "function") {
        sortStack.push(function(a, b) {
          return (desc ? -1 : 1) * ordering(a, b);
        });
      } else if (def.values && def.values.length > 0) {
        def.values.forEach(function(d) {
          orderArray.push([].concat(d).join("|"));
        }, this);
        sortStack.push(function(a, b) {
          var aStr = "", bStr = "", aIx, bIx, i;
          for (i = 0; i < mainArray.length; i += 1) {
            if (i > 0) {
              aStr += "|";
              bStr += "|";
            }
            aStr += a[mainArray[i]];
            bStr += b[mainArray[i]];
          }
          aIx = orderArray.indexOf(aStr);
          bIx = orderArray.indexOf(bStr);
          aIx = aIx < 0 ? desc ? -1 : orderArray.length : aIx;
          bIx = bIx < 0 ? desc ? -1 : orderArray.length : bIx;
          return (desc ? -1 : 1) * (aIx - bIx);
        });
      } else {
        [].concat(def.ordering).forEach(function(field) {
          sortStack.push(function(a, b) {
            var result = 0;
            if (a[field] !== void 0 && b[field] !== void 0) {
              result = compare([].concat(a[field]), [].concat(b[field]));
            }
            return (desc ? -1 : 1) * result;
          });
        });
      }
    });
    rollupData.sort(function(a, b) {
      var compareIx = 0, result = 0;
      while (compareIx < sortStack.length && result === 0) {
        result = sortStack[compareIx](a, b);
        compareIx += 1;
      }
      return result;
    });
    rollupData.forEach(function(d) {
      var i, newRow = [];
      if (mainArray.length === 1) {
        finalArray.push(d[mainArray[0]]);
      } else {
        for (i = 0; i < mainArray.length; i += 1) {
          newRow.push(d[mainArray[i]]);
        }
        finalArray.push(newRow);
      }
    }, this);
  }
  return finalArray;
};
dimple._getSeriesOrder = function(data, series) {
  var rules = [].concat(series._orderRules), cats = series.categoryFields, returnValue = [];
  if (cats !== null && cats !== void 0 && cats.length > 0) {
    if (series.c !== null && series.c !== void 0 && series.c._hasMeasure()) {
      rules.push({ ordering: series.c.measure, desc: true });
    }
    if (series.x._hasMeasure()) {
      rules.push({ ordering: series.x.measure, desc: true });
    }
    if (series.y._hasMeasure()) {
      rules.push({ ordering: series.y.measure, desc: true });
    }
    returnValue = dimple._getOrderedList(data, cats, rules);
  }
  return returnValue;
};
dimple._getSeriesSortPredicate = function(chart, series, orderedArray) {
  return function(a, b) {
    var sortValue = 0;
    if (series.x._hasCategories()) {
      sortValue = dimple._helpers.cx(a, chart, series) - dimple._helpers.cx(b, chart, series);
    }
    if (sortValue === 0 && series.y._hasCategories()) {
      sortValue = dimple._helpers.cy(a, chart, series) - dimple._helpers.cy(b, chart, series);
    }
    if (sortValue === 0 && orderedArray) {
      sortValue = dimple._arrayIndexCompare(
        orderedArray,
        a.aggField,
        b.aggField
      );
    }
    return sortValue;
  };
};
dimple._helpers = {
  // Calculate the centre x position
  cx: function(d, chart, series) {
    var returnCx = 0;
    if (series.x.measure !== null && series.x.measure !== void 0) {
      returnCx = series.x._scale(d.cx);
    } else if (series.x._hasCategories() && series.x.categoryFields.length >= 2) {
      returnCx = series.x._scale(d.cx) + dimple._helpers.xGap(chart, series) + (d.xOffset + 0.5) * ((chart._widthPixels() / series.x._max - 2 * dimple._helpers.xGap(chart, series)) * d.width);
    } else {
      returnCx = series.x._scale(d.cx) + chart._widthPixels() / series.x._max / 2;
    }
    return returnCx;
  },
  // Calculate the centre y position
  cy: function(d, chart, series) {
    var returnCy = 0;
    if (series.y.measure !== null && series.y.measure !== void 0) {
      returnCy = series.y._scale(d.cy);
    } else if (series.y.categoryFields !== null && series.y.categoryFields !== void 0 && series.y.categoryFields.length >= 2) {
      returnCy = series.y._scale(d.cy) - chart._heightPixels() / series.y._max + dimple._helpers.yGap(chart, series) + (d.yOffset + 0.5) * ((chart._heightPixels() / series.y._max - 2 * dimple._helpers.yGap(chart, series)) * d.height);
    } else {
      returnCy = series.y._scale(d.cy) - chart._heightPixels() / series.y._max / 2;
    }
    return returnCy;
  },
  // Calculate the radius
  r: function(d, chart, series) {
    var returnR = 0, scaleFactor = 1;
    if (series.z === null || series.z === void 0) {
      returnR = !series.radius || series.radius === "auto" ? 5 : series.radius;
    } else {
      if (series.radius && series.radius !== "auto" && series.radius > 1) {
        scaleFactor = series.radius / series.z._scale(series.z._max);
      }
      if (series.z._hasMeasure()) {
        returnR = series.z._scale(d.r) * scaleFactor;
      } else {
        returnR = series.z._scale(chart._heightPixels() / 100) * scaleFactor;
      }
    }
    return returnR;
  },
  // Calculate the x gap for bar type charts
  xGap: function(chart, series) {
    var returnXGap = 0;
    if ((series.x.measure === null || series.x.measure === void 0) && series.barGap > 0) {
      returnXGap = chart._widthPixels() / series.x._max * (series.barGap > 0.99 ? 0.99 : series.barGap) / 2;
    }
    return returnXGap;
  },
  // Calculate the x gap for clusters within bar type charts
  xClusterGap: function(d, chart, series) {
    var returnXClusterGap = 0;
    if (series.x.categoryFields !== null && series.x.categoryFields !== void 0 && series.x.categoryFields.length >= 2 && series.clusterBarGap > 0 && !series.x._hasMeasure()) {
      returnXClusterGap = d.width * (chart._widthPixels() / series.x._max - dimple._helpers.xGap(chart, series) * 2) * (series.clusterBarGap > 0.99 ? 0.99 : series.clusterBarGap) / 2;
    }
    return returnXClusterGap;
  },
  // Calculate the y gap for bar type charts
  yGap: function(chart, series) {
    var returnYGap = 0;
    if ((series.y.measure === null || series.y.measure === void 0) && series.barGap > 0) {
      returnYGap = chart._heightPixels() / series.y._max * (series.barGap > 0.99 ? 0.99 : series.barGap) / 2;
    }
    return returnYGap;
  },
  // Calculate the y gap for clusters within bar type charts
  yClusterGap: function(d, chart, series) {
    var returnYClusterGap = 0;
    if (series.y.categoryFields !== null && series.y.categoryFields !== void 0 && series.y.categoryFields.length >= 2 && series.clusterBarGap > 0 && !series.y._hasMeasure()) {
      returnYClusterGap = d.height * (chart._heightPixels() / series.y._max - dimple._helpers.yGap(chart, series) * 2) * (series.clusterBarGap > 0.99 ? 0.99 : series.clusterBarGap) / 2;
    }
    return returnYClusterGap;
  },
  // Calculate the top left x position for bar type charts
  x: function(d, chart, series) {
    var returnX = 0;
    if (series.x._hasTimeField()) {
      returnX = series.x._scale(d.x) - dimple._helpers.width(d, chart, series) / 2;
    } else if (series.x.measure !== null && series.x.measure !== void 0) {
      returnX = series.x._scale(d.x);
    } else {
      returnX = series.x._scale(d.x) + dimple._helpers.xGap(chart, series) + d.xOffset * (dimple._helpers.width(d, chart, series) + 2 * dimple._helpers.xClusterGap(d, chart, series)) + dimple._helpers.xClusterGap(d, chart, series);
    }
    return returnX;
  },
  // Calculate the top left y position for bar type charts
  y: function(d, chart, series) {
    var returnY = 0;
    if (series.y._hasTimeField()) {
      returnY = series.y._scale(d.y) - dimple._helpers.height(d, chart, series) / 2;
    } else if (series.y.measure !== null && series.y.measure !== void 0) {
      returnY = series.y._scale(d.y);
    } else {
      returnY = series.y._scale(d.y) - chart._heightPixels() / series.y._max + dimple._helpers.yGap(chart, series) + d.yOffset * (dimple._helpers.height(d, chart, series) + 2 * dimple._helpers.yClusterGap(d, chart, series)) + dimple._helpers.yClusterGap(d, chart, series);
    }
    return returnY;
  },
  // Calculate the width for bar type charts
  width: function(d, chart, series) {
    var returnWidth = 0;
    if (series.x.measure !== null && series.x.measure !== void 0) {
      returnWidth = Math.abs(
        series.x._scale(d.x < 0 ? d.x - d.width : d.x + d.width) - series.x._scale(d.x)
      );
    } else if (series.x._hasTimeField()) {
      returnWidth = series.x.floatingBarWidth;
    } else {
      returnWidth = d.width * (chart._widthPixels() / series.x._max - dimple._helpers.xGap(chart, series) * 2) - dimple._helpers.xClusterGap(d, chart, series) * 2;
    }
    return returnWidth;
  },
  // Calculate the height for bar type charts
  height: function(d, chart, series) {
    var returnHeight = 0;
    if (series.y._hasTimeField()) {
      returnHeight = series.y.floatingBarWidth;
    } else if (series.y.measure !== null && series.y.measure !== void 0) {
      returnHeight = Math.abs(
        series.y._scale(d.y) - series.y._scale(d.y <= 0 ? d.y + d.height : d.y - d.height)
      );
    } else {
      returnHeight = d.height * (chart._heightPixels() / series.y._max - dimple._helpers.yGap(chart, series) * 2) - dimple._helpers.yClusterGap(d, chart, series) * 2;
    }
    return returnHeight;
  },
  // Calculate the opacity for series
  opacity: function(d, chart, series) {
    var returnOpacity = 0;
    if (series.c !== null && series.c !== void 0) {
      returnOpacity = d.opacity;
    } else {
      returnOpacity = chart.getColor(d.aggField.slice(-1)[0]).opacity;
    }
    return returnOpacity;
  },
  // Calculate the fill coloring for series
  fill: function(d, chart, series) {
    var returnFill = 0;
    if (series.c !== null && series.c !== void 0) {
      returnFill = d.fill;
    } else {
      returnFill = chart.getColor(d.aggField.slice(-1)[0]).fill;
    }
    return returnFill;
  },
  // Calculate the stroke coloring for series
  stroke: function(d, chart, series) {
    var stroke = 0;
    if (series.c !== null && series.c !== void 0) {
      stroke = d.stroke;
    } else {
      stroke = chart.getColor(d.aggField.slice(-1)[0]).stroke;
    }
    return stroke;
  },
  // Calculate the class for the series
  css: function(d, chart) {
    return chart.getClass(d.aggField.slice(-1)[0]);
  }
};
dimple._interpolate = function(point, interpolation) {
  if (point && interpolation) {
    if (Object.prototype.toString.call(interpolation) === "[object String]") {
      switch (interpolation) {
        case "linear":
          interpolation = void 0;
          break;
        case "linear-closed":
          interpolation = void 0;
          break;
        case "step":
          interpolation = void 0;
          break;
        case "step-before":
          interpolation = void 0;
          break;
        case "step-after":
          interpolation = void 0;
          break;
        case "basis":
          interpolation = void 0;
          break;
        case "basis-open":
          interpolation = void 0;
          break;
        case "basis-closed":
          interpolation = void 0;
          break;
        case "bundle":
          interpolation = void 0;
          break;
        case "cardinal":
          interpolation = void 0;
          break;
        case "cardinal-open":
          interpolation = void 0;
          break;
        case "cardinal-closed":
          interpolation = void 0;
          break;
        case "monotone":
          interpolation = void 0;
          break;
      }
    }
    point.curve(interpolation);
  }
};
dimple._parentHeight = function(parent) {
  var returnValue = parent.getBoundingClientRect().height;
  if (!returnValue || returnValue < 0) {
    returnValue = parent.clientHeight;
  }
  return returnValue;
};
dimple._parentWidth = function(parent) {
  var returnValue = parent.getBoundingClientRect().width;
  if (!returnValue || returnValue < 0) {
    returnValue = parent.clientWidth;
  }
  return returnValue;
};
dimple._parsePosition = function(value, maxValue) {
  var returnValue = 0, values;
  if (value) {
    values = value.toString().split(",");
    values.forEach(function(v) {
      if (v) {
        if (!isNaN(v)) {
          returnValue += parseFloat(v);
        } else if (v.slice(-1) === "%") {
          returnValue += maxValue * (parseFloat(v.slice(0, v.length - 1)) / 100);
        } else if (v.slice(-2) === "px") {
          returnValue += parseFloat(v.slice(0, v.length - 2));
        } else {
          returnValue = value;
        }
      }
    }, this);
  }
  if (returnValue < 0) {
    returnValue = maxValue + returnValue;
  }
  return returnValue;
};
dimple._parseXPosition = function(value, parent) {
  return dimple._parsePosition(value, dimple._parentWidth(parent));
};
dimple._parseYPosition = function(value, parent) {
  return dimple._parsePosition(value, dimple._parentHeight(parent));
};
dimple._postDrawHandling = function(series, updated, removed, duration) {
  if (duration === 0) {
    updated.each(function(d, i) {
      if (series.afterDraw) {
        series.afterDraw(this, d, i);
      }
    });
    removed.remove();
  } else {
    updated.on("end", function(d, i) {
      if (series.afterDraw) {
        series.afterDraw(this, d, i);
      }
    });
    removed.call(function() {
      if (series.shapes) {
        series.shapes.exit().remove();
      }
    });
  }
};
dimple._removeTooltip = function(e, shape, chart, series) {
  if (chart._tooltipGroup) {
    chart._tooltipGroup.remove();
  }
};
dimple._rollUp = function(data, fields, includeFields) {
  var returnList = [];
  if (fields !== null && fields !== void 0) {
    fields = [].concat(fields);
  } else {
    fields = [];
  }
  data.forEach(function(d) {
    var index = -1, newRow = {}, match = true;
    returnList.forEach(function(r, j) {
      if (index === -1) {
        match = true;
        fields.forEach(function(f) {
          match = match && d[f] === r[f];
        }, this);
        if (match) {
          index = j;
        }
      }
    }, this);
    if (index !== -1) {
      newRow = returnList[index];
    } else {
      fields.forEach(function(f) {
        newRow[f] = d[f];
      }, this);
      returnList.push(newRow);
      index = returnList.length - 1;
    }
    includeFields.forEach(function(field) {
      if (fields.indexOf(field) === -1) {
        if (newRow[field] === void 0) {
          newRow[field] = [];
        }
        newRow[field] = newRow[field].concat(d[field]);
      }
    }, this);
    returnList[index] = newRow;
  }, this);
  return returnList;
};
dimple._showBarTooltip = function(e, shape, chart, series) {
  var textMargin = 5, popupMargin = 10, animDuration = 750, selectedShape = (void 0)(shape), x = selectedShape.node().getBBox().x, y = selectedShape.node().getBBox().y, width = selectedShape.node().getBBox().width, height = selectedShape.node().getBBox().height, opacity = selectedShape.attr("opacity"), fill = selectedShape.attr("fill"), dropDest = series._dropLineOrigin(), popupStrokeColor = (void 0)(
    (void 0)(fill).r + 0.6 * (255 - (void 0)(fill).r),
    (void 0)(fill).g + 0.6 * (255 - (void 0)(fill).g),
    (void 0)(fill).b + 0.6 * (255 - (void 0)(fill).b)
  ), popupFillColor = (void 0)(
    (void 0)(fill).r + 0.8 * (255 - (void 0)(fill).r),
    (void 0)(fill).g + 0.8 * (255 - (void 0)(fill).g),
    (void 0)(fill).b + 0.8 * (255 - (void 0)(fill).b)
  ), t, box, tipText = series.getTooltipText(e), yRunning = 0, w = 0, h = 0, translateX, translateY, transformer, offset, transformPoint = function(x2, y2) {
    var matrix = selectedShape.node().getCTM(), position = chart.svg.node().createSVGPoint();
    position.x = x2 || 0;
    position.y = y2 || 0;
    return position.matrixTransform(matrix);
  };
  if (chart._tooltipGroup !== null && chart._tooltipGroup !== void 0) {
    chart._tooltipGroup.remove();
  }
  chart._tooltipGroup = chart.svg.append("g");
  if (!series.p) {
    offset = series._isStacked() ? 1 : width / 2;
    if (!series.x._hasCategories() && dropDest.y !== null) {
      chart._tooltipGroup.append("line").attr(
        "class",
        "dimple-tooltip-dropline " + chart.customClassList.tooltipDropLine
      ).attr("x1", x < series.x._origin ? x + offset : x + width - offset).attr("y1", y < dropDest.y ? y + height : y).attr("x2", x < series.x._origin ? x + offset : x + width - offset).attr("y2", y < dropDest.y ? y + height : y).call(function(context) {
        if (!chart.noFormats) {
          context.style("fill", "none").style("stroke", fill).style("stroke-width", 2).style("stroke-dasharray", "3, 3").style("opacity", opacity);
        }
      }).transition().delay(animDuration / 2).duration(animDuration / 2).ease(void 0).attr("y2", y < dropDest.y ? dropDest.y - 1 : dropDest.y + 1);
    }
    offset = series._isStacked() ? 1 : height / 2;
    if (!series.y._hasCategories() && dropDest.x !== null) {
      chart._tooltipGroup.append("line").attr(
        "class",
        "dimple-tooltip-dropline " + chart.customClassList.tooltipDropLine
      ).attr("x1", x < dropDest.x ? x + width : x).attr("y1", y < series.y._origin ? y + offset : y + height - offset).attr("x2", x < dropDest.x ? x + width : x).attr("y2", y < series.y._origin ? y + offset : y + height - offset).call(function(context) {
        if (!chart.noFormats) {
          context.style("fill", "none").style("stroke", fill).style("stroke-width", 2).style("stroke-dasharray", "3, 3").style("opacity", opacity);
        }
      }).transition().delay(animDuration / 2).duration(animDuration / 2).ease(void 0).attr("x2", x < dropDest.x ? dropDest.x - 1 : dropDest.x + 1);
    }
  }
  t = chart._tooltipGroup.append("g");
  box = t.append("rect").attr("class", "dimple-tooltip " + chart.customClassList.tooltipBox);
  t.selectAll(".dimple-dont-select-any").data(tipText).enter().append("text").attr("class", "dimple-tooltip " + chart.customClassList.tooltipLabel).text(function(d) {
    return d;
  }).call(function(context) {
    if (!chart.noFormats) {
      context.style("font-family", series.tooltipFontFamily).style("font-size", series._getTooltipFontSize());
    }
  });
  t.each(function() {
    w = this.getBBox().width > w ? this.getBBox().width : w;
    h = this.getBBox().width > h ? this.getBBox().height : h;
  });
  t.selectAll("text").attr("x", 0).attr("y", function() {
    yRunning += this.getBBox().height;
    return yRunning - this.getBBox().height / 2;
  });
  box.attr("x", -textMargin).attr("y", -textMargin).attr("height", Math.floor(yRunning + textMargin) - 0.5).attr("width", w + 2 * textMargin).attr("rx", 5).attr("ry", 5).call(function(context) {
    if (!chart.noFormats) {
      context.style("fill", popupFillColor).style("stroke", popupStrokeColor).style("stroke-width", 2).style("opacity", 0.95);
    }
  });
  if (transformPoint(x + width + textMargin + popupMargin + w).x < parseFloat(chart.svg.node().getBBox().width)) {
    translateX = x + width + textMargin + popupMargin;
    translateY = y + height / 2 - (yRunning - (h - textMargin)) / 2;
  } else if (transformPoint(x - (textMargin + popupMargin + w)).x > 0) {
    translateX = x - (textMargin + popupMargin + w);
    translateY = y + height / 2 - (yRunning - (h - textMargin)) / 2;
  } else if (transformPoint(0, y + height + yRunning + popupMargin + textMargin).y < parseFloat(chart.svg.node().getBBox().height)) {
    translateX = x + width / 2 - (2 * textMargin + w) / 2;
    translateX = translateX > 0 ? translateX : popupMargin;
    translateX = translateX + w < parseFloat(chart.svg.node().getBBox().width) ? translateX : parseFloat(chart.svg.node().getBBox().width) - w - popupMargin;
    translateY = y + height + 2 * textMargin;
  } else {
    translateX = x + width / 2 - (2 * textMargin + w) / 2;
    translateX = translateX > 0 ? translateX : popupMargin;
    translateX = translateX + w < parseFloat(chart.svg.node().getBBox().width) ? translateX : parseFloat(chart.svg.node().getBBox().width) - w - popupMargin;
    translateY = y - yRunning - (h - textMargin);
  }
  transformer = transformPoint(translateX, translateY);
  t.attr(
    "transform",
    "translate(" + transformer.x + " , " + transformer.y + ")"
  );
};
dimple._showPointTooltip = function(e, shape, chart, series) {
  var textMargin = 5, popupMargin = 10, animDuration = 750, selectedShape = (void 0)(shape), cx = parseFloat(selectedShape.attr("cx")), cy = parseFloat(selectedShape.attr("cy")), r = parseFloat(selectedShape.attr("r")), opacity = dimple._helpers.opacity(e, chart, series), fill = selectedShape.attr("stroke"), dropDest = series._dropLineOrigin(), popupStrokeColor = (void 0)(
    (void 0)(fill).r + 0.6 * (255 - (void 0)(fill).r),
    (void 0)(fill).g + 0.6 * (255 - (void 0)(fill).g),
    (void 0)(fill).b + 0.6 * (255 - (void 0)(fill).b)
  ), popupFillColor = (void 0)(
    (void 0)(fill).r + 0.8 * (255 - (void 0)(fill).r),
    (void 0)(fill).g + 0.8 * (255 - (void 0)(fill).g),
    (void 0)(fill).b + 0.8 * (255 - (void 0)(fill).b)
  ), y = 0, w = 0, h = 0, t, box, tipText = series.getTooltipText(e), translateX, translateY;
  if (chart._tooltipGroup !== null && chart._tooltipGroup !== void 0) {
    chart._tooltipGroup.remove();
  }
  chart._tooltipGroup = chart.svg.append("g");
  chart._tooltipGroup.append("circle").attr(
    "class",
    "dimple-line-marker-circle " + chart.customClassList.lineMarkerCircle
  ).attr("cx", cx).attr("cy", cy).attr("r", r).call(function(context) {
    if (!chart.noFormats) {
      context.attr("opacity", 0).style("fill", "none").style("stroke", fill).style("stroke-width", 1);
    }
  }).transition().duration(animDuration / 2).ease(void 0).attr("r", r + series.lineWeight + 2).call(function(context) {
    if (!chart.noFormats) {
      context.attr("opacity", 1).style("stroke-width", 2);
    }
  });
  if (dropDest.y !== null) {
    chart._tooltipGroup.append("line").attr(
      "class",
      "dimple-tooltip-dropline " + chart.customClassList.tooltipDropLine
    ).attr("x1", cx).attr(
      "y1",
      cy < dropDest.y ? cy + r + series.lineWeight + 2 : cy - r - series.lineWeight - 2
    ).attr("x2", cx).attr(
      "y2",
      cy < dropDest.y ? cy + r + series.lineWeight + 2 : cy - r - series.lineWeight - 2
    ).call(function(context) {
      if (!chart.noFormats) {
        context.style("fill", "none").style("stroke", fill).style("stroke-width", 2).style("stroke-dasharray", "3, 3").style("opacity", opacity);
      }
    }).transition().delay(animDuration / 2).duration(animDuration / 2).ease(void 0).attr("y2", cy < dropDest.y ? dropDest.y - 1 : dropDest.y + 1);
  }
  if (dropDest.x !== null) {
    chart._tooltipGroup.append("line").attr(
      "class",
      "dimple-tooltip-dropline " + chart.customClassList.tooltipDropLine
    ).attr(
      "x1",
      cx < dropDest.x ? cx + r + series.lineWeight + 2 : cx - r - series.lineWeight - 2
    ).attr("y1", cy).attr(
      "x2",
      cx < dropDest.x ? cx + r + series.lineWeight + 2 : cx - r - series.lineWeight - 2
    ).attr("y2", cy).call(function(context) {
      if (!chart.noFormats) {
        context.style("fill", "none").style("stroke", fill).style("stroke-width", 2).style("stroke-dasharray", "3, 3").style("opacity", opacity);
      }
    }).transition().delay(animDuration / 2).duration(animDuration / 2).ease(void 0).attr("x2", cx < dropDest.x ? dropDest.x - 1 : dropDest.x + 1);
  }
  t = chart._tooltipGroup.append("g");
  box = t.append("rect").attr("class", "dimple-tooltip " + chart.customClassList.tooltipBox);
  t.selectAll(".dont-select-any").data(tipText).enter().append("text").attr("class", "dimple-tooltip " + chart.customClassList.tooltipLabel).text(function(d) {
    return d;
  }).call(function(context) {
    if (!chart.noFormats) {
      context.style("font-family", series.tooltipFontFamily).style("font-size", series._getTooltipFontSize());
    }
  });
  t.each(function() {
    w = this.getBBox().width > w ? this.getBBox().width : w;
    h = this.getBBox().width > h ? this.getBBox().height : h;
  });
  t.selectAll("text").attr("x", 0).attr("y", function() {
    y += this.getBBox().height;
    return y - this.getBBox().height / 2;
  });
  box.attr("x", -textMargin).attr("y", -textMargin).attr("height", Math.floor(y + textMargin) - 0.5).attr("width", w + 2 * textMargin).attr("rx", 5).attr("ry", 5).call(function(context) {
    if (!chart.noFormats) {
      context.style("fill", popupFillColor).style("stroke", popupStrokeColor).style("stroke-width", 2).style("opacity", 0.95);
    }
  });
  if (cx + r + textMargin + popupMargin + w < parseFloat(chart.svg.node().getBBox().width)) {
    translateX = cx + r + textMargin + popupMargin;
    translateY = cy - (y - (h - textMargin)) / 2;
  } else if (cx - r - (textMargin + popupMargin + w) > 0) {
    translateX = cx - r - (textMargin + popupMargin + w);
    translateY = cy - (y - (h - textMargin)) / 2;
  } else if (cy + r + y + popupMargin + textMargin < parseFloat(chart.svg.node().getBBox().height)) {
    translateX = cx - (2 * textMargin + w) / 2;
    translateX = translateX > 0 ? translateX : popupMargin;
    translateX = translateX + w < parseFloat(chart.svg.node().getBBox().width) ? translateX : parseFloat(chart.svg.node().getBBox().width) - w - popupMargin;
    translateY = cy + r + 2 * textMargin;
  } else {
    translateX = cx - (2 * textMargin + w) / 2;
    translateX = translateX > 0 ? translateX : popupMargin;
    translateX = translateX + w < parseFloat(chart.svg.node().getBBox().width) ? translateX : parseFloat(chart.svg.node().getBBox().width) - w - popupMargin;
    translateY = cy - y - (h - textMargin);
  }
  t.attr("transform", "translate(" + translateX + " , " + translateY + ")");
};
dimple.filterData = function(data, field, filterValues) {
  var returnData = data;
  if (field !== null && filterValues !== null) {
    if (filterValues !== null && filterValues !== void 0) {
      filterValues = [].concat(filterValues);
    }
    returnData = [];
    data.forEach(function(d) {
      if (d[field] === null) {
        returnData.push(d);
      } else {
        if (filterValues.indexOf([].concat(d[field]).join("/")) > -1) {
          returnData.push(d);
        }
      }
    }, this);
  }
  return returnData;
};
dimple.getUniqueValues = function(data, fields) {
  var returnlist = [];
  if (fields !== null && fields !== void 0) {
    fields = [].concat(fields);
    data.forEach(function(d) {
      var field = "";
      fields.forEach(function(f, i) {
        if (i > 0) {
          field += "/";
        }
        field += d[f];
      }, this);
      if (returnlist.indexOf(field) === -1) {
        returnlist.push(field);
      }
    }, this);
  }
  return returnlist;
};
dimple.newSvg = function(parentSelector, width, height) {
  var selectedShape = null;
  if (parentSelector === null || parentSelector === void 0) {
    parentSelector = "body";
  }
  selectedShape = (void 0)(parentSelector);
  if (selectedShape.empty()) {
    throw "The '" + parentSelector + "' selector did not match any elements.  Please prefix with '#' to select by id or '.' to select by class";
  }
  return selectedShape.append("svg").attr("width", width).attr("height", height);
};
var newSvg = (parentSelector, width, height) => {
  if (parentSelector == null || parentSelector === void 0) {
    parentSelector = "body";
  }
  const selectedShape = (void 0)(parentSelector);
  if (selectedShape.empty()) {
    throw "The '" + parentSelector + "' selector did not match any elements.  Please prefix with '#' to select by id or '.' to select by class";
  }
  return selectedShape.append("svg").attr("width", width).attr("height", height);
};
var renderPptx = (options) => {
  if (typeof window !== "undefined") {
    const { pptx, resultElement, thumbElement } = options;
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "r-preview-pptx-main");
    resultElement.innerHTML = "";
    resultElement.appendChild(wrapper);
    let isDone = false;
    return new Promise((resolve, reject) => {
      const processMessage = (msg) => {
        if (isDone)
          return;
        const div = document.createElement("div");
        const style = document.createElement("style");
        switch (msg.type) {
          case "slide":
            div.innerHTML = msg.data;
            wrapper.appendChild(div);
            break;
          case "pptx-thumb":
            if (thumbElement)
              thumbElement == null ? void 0 : thumbElement.setAttribute(
                "src",
                `data:image/jpeg;base64,${msg.data}`
              );
            break;
          case "slideSize":
            break;
          case "globalCSS":
            style.innerHTML = msg.data;
            wrapper.appendChild(style);
            break;
          case "Done":
            isDone = true;
            processCharts(msg.data.charts);
            resolve(msg.data.time);
            break;
          case "WARN":
            console.warn("PPTX processing warning: ", msg.data);
            break;
          case "ERROR":
            isDone = true;
            console.error("PPTX processing error: ", msg.data);
            reject(new Error(msg.data));
            break;
        }
      };
      const worker = {
        postMessage
      };
      processPptx((func) => {
        worker.postMessage = func;
      }, processMessage);
      worker.postMessage({
        type: "processPPTX",
        data: pptx
      });
    }).then((time) => {
      const resize = () => {
        const slidesWidth = Math.max(
          ...Array.from(wrapper.children).filter((item) => item.nodeName === "section").map((s) => s.offsetWidth)
        );
        const wrapperWidth = wrapper.children[0].offsetWidth;
        wrapper.setAttribute(
          "style",
          `transform: scale(${wrapperWidth / slidesWidth}),transform-origin': 'top left'`
        );
      };
      resize();
      window.addEventListener("resize", resize);
      setNumericBullets(document.getElementsByClassName("block"));
      setNumericBullets(document.getElementsByTagName("td"));
      return time;
    });
  }
  function processCharts(queue) {
    for (let i = 0; i < queue.length; i++) {
      processSingleChart(queue[i].data);
    }
  }
  function convertChartData(chartData) {
    const data = [];
    const xLabels = [];
    const groupLabels = [];
    chartData.forEach((group, i) => {
      const groupName = group.key;
      groupLabels[i] = group.key;
      group.values.forEach((value, j) => {
        const labelName = group.xlabels[j];
        xLabels[j] = group.xlabels[j];
        data.push({ name: labelName, group: groupName, value: value.y });
      });
    });
    return { data, xLabels, groupLabels };
  }
  function processSingleChart(d) {
    const chartID = d.chartID;
    const chartType = d.chartType;
    const chartData = d.chartData;
    let data = [];
    switch (chartType) {
      case "lineChart": {
        const {
          data: data_,
          xLabels,
          groupLabels
        } = convertChartData(chartData);
        data = data_;
        const container = document.getElementById(chartID) || document.body;
        const svg = container && newSvg(`#${chartID}`, container.style.width, container.style.height);
        const myChart = new dimple.chart(svg, data);
        const xAxis = myChart.addCategoryAxis("x", "name");
        xAxis.addOrderRule(xLabels);
        xAxis.addGroupOrderRule(groupLabels);
        xAxis.title = null;
        const yAxis = myChart.addMeasureAxis("y", "value");
        yAxis.title = null;
        myChart.addSeries("group", dimple.plot.line);
        myChart.addLegend(60, 10, 500, 20, "right");
        myChart.draw();
        break;
      }
      case "barChart": {
        const {
          data: data_,
          xLabels,
          groupLabels
        } = convertChartData(chartData);
        data = data_;
        const container = document.getElementById(chartID) || document.body;
        const svg = newSvg(
          "#" + chartID,
          container.style.width,
          container.style.height
        );
        const myChart = new dimple.chart(svg, data);
        const xAxis = myChart.addCategoryAxis("x", ["name", "group"]);
        xAxis.addOrderRule(xLabels);
        xAxis.addGroupOrderRule(groupLabels);
        xAxis.title = null;
        const yAxis = myChart.addMeasureAxis("y", "value");
        yAxis.title = null;
        myChart.addSeries("group", dimple.plot.bar);
        myChart.addLegend(60, 10, 500, 20, "right");
        myChart.draw();
        break;
      }
      case "pieChart":
      case "pie3DChart": {
        const { data: data_, groupLabels } = convertChartData(chartData);
        data = data_;
        const container = document.getElementById(chartID) || document.body;
        const svg = newSvg(
          `#${chartID}`,
          container.style.width,
          container.style.height
        );
        const myChart = new dimple.chart(svg, data);
        const pieAxis = myChart.addMeasureAxis("p", "value");
        pieAxis.addOrderRule(groupLabels);
        myChart.addSeries("name", dimple.plot.pie);
        myChart.addLegend(50, 20, 400, 300, "left");
        myChart.draw();
        break;
      }
      case "areaChart": {
        const {
          data: data_,
          xLabels,
          groupLabels
        } = convertChartData(chartData);
        data = data_;
        const container = document.getElementById(chartID) || document.body;
        const svg = newSvg(
          "#" + chartID,
          container.style.width,
          container.style.height
        );
        const myChart = new dimple.chart(svg, data);
        const xAxis = myChart.addCategoryAxis("x", "name");
        xAxis.addOrderRule(xLabels);
        xAxis.addGroupOrderRule(groupLabels);
        xAxis.title = null;
        const yAxis = myChart.addMeasureAxis("y", "value");
        yAxis.title = null;
        myChart.addSeries("group", dimple.plot.area);
        myChart.addLegend(60, 10, 500, 20, "right");
        myChart.draw();
        break;
      }
      case "scatterChart": {
        for (let i = 0; i < chartData.length; i++) {
          const arr = [];
          for (let j = 0; j < chartData[i].length; j++) {
            arr.push({ x: j, y: chartData[i][j] });
          }
          data.push({ key: "data" + (i + 1), values: arr });
        }
        break;
      }
    }
  }
  function findElementClass(element, name) {
    const result = [];
    const dfs = (list) => {
      list.forEach((item) => {
        if (item.children.length > 0) {
          dfs(Array.from(item.children));
        }
        if (Array.from(item.classList).includes(name)) {
          result.push(item);
        }
      });
    };
    if (element.children.length > 0) {
      dfs(Array.from(element.children));
    }
    return result;
  }
  function setNumericBullets(elem) {
    const paragraphsArray = Array.from(elem);
    for (let i = 0; i < paragraphsArray.length; i++) {
      const buSpan = findElementClass(
        paragraphsArray[i],
        "numeric-bullet-style"
      );
      if (buSpan.length > 0) {
        let prevBultTyp = "";
        let prevBultLvl = "";
        let buletIndex = 0;
        const tmpArry = [];
        let tmpArryIndx = 0;
        const buletTypSrry = [];
        for (let j = 0; j < buSpan.length; j++) {
          const bulletType = buSpan[j].getAttribute(`data-bulltname`);
          const bulletLvl = buSpan[j].getAttribute("data-bulltlvl");
          if (buletIndex === 0) {
            prevBultTyp = bulletType;
            prevBultLvl = bulletLvl;
            tmpArry[tmpArryIndx] = buletIndex;
            buletTypSrry[tmpArryIndx] = bulletType;
            buletIndex++;
          } else {
            if (bulletType === prevBultTyp && bulletLvl === prevBultLvl) {
              prevBultTyp = bulletType;
              prevBultLvl = bulletLvl;
              buletIndex++;
              tmpArry[tmpArryIndx] = buletIndex;
              buletTypSrry[tmpArryIndx] = bulletType;
            } else if (bulletType !== prevBultTyp && bulletLvl === prevBultLvl) {
              prevBultTyp = bulletType;
              prevBultLvl = bulletLvl;
              tmpArryIndx++;
              tmpArry[tmpArryIndx] = buletIndex;
              buletTypSrry[tmpArryIndx] = bulletType;
              buletIndex = 1;
            } else if (bulletType !== prevBultTyp && Number(bulletLvl) > Number(prevBultLvl)) {
              prevBultTyp = bulletType;
              prevBultLvl = bulletLvl;
              tmpArryIndx++;
              tmpArry[tmpArryIndx] = buletIndex;
              buletTypSrry[tmpArryIndx] = bulletType;
              buletIndex = 1;
            } else if (bulletType !== prevBultTyp && Number(bulletLvl) < Number(prevBultLvl)) {
              prevBultTyp = bulletType;
              prevBultLvl = bulletLvl;
              tmpArryIndx--;
              buletIndex = tmpArry[tmpArryIndx] + 1;
            }
          }
          const numIdx = getNumTypeNum(buletTypSrry[tmpArryIndx], buletIndex);
          buSpan[j].innerHTML = numIdx.toString();
        }
      }
    }
  }
  function getNumTypeNum(numTyp, num) {
    let rtrnNum = "";
    switch (numTyp) {
      case "arabicPeriod":
        rtrnNum = num + ". ";
        break;
      case "arabicParenR":
        rtrnNum = num + ") ";
        break;
      case "alphaLcParenR":
        rtrnNum = alphaNumeric(num, "lowerCase") + ") ";
        break;
      case "alphaLcPeriod":
        rtrnNum = alphaNumeric(num, "lowerCase") + ". ";
        break;
      case "alphaUcParenR":
        rtrnNum = alphaNumeric(num, "upperCase") + ") ";
        break;
      case "alphaUcPeriod":
        rtrnNum = alphaNumeric(num, "upperCase") + ". ";
        break;
      case "romanUcPeriod":
        rtrnNum = romanize(num) + ". ";
        break;
      case "romanLcParenR":
        rtrnNum = romanize(num) + ") ";
        break;
      case "hebrew2Minus":
        rtrnNum = hebrew2Minus.format(Number(num)) + "-";
        break;
      default:
        rtrnNum = num;
    }
    return rtrnNum;
  }
  function romanize(num) {
    if (!+num)
      return false;
    const digits = String(+num).split("");
    const key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX"
    ];
    let roman = "";
    let i = 3;
    while (i--)
      roman = (key[+digits.pop() + i * 10] || "") + roman;
    return new Array(+digits.join("") + 1).join("M") + roman;
  }
  const hebrew2Minus = archaicNumbers([
    [1e3, ""],
    [400, "ת"],
    [300, "ש"],
    [200, "ר"],
    [100, "ק"],
    [90, "צ"],
    [80, "פ"],
    [70, "ע"],
    [60, "ס"],
    [50, "נ"],
    [40, "מ"],
    [30, "ל"],
    [20, "כ"],
    [10, "י"],
    [9, "ט"],
    [8, "ח"],
    [7, "ז"],
    [6, "ו"],
    [5, "ה"],
    [4, "ד"],
    [3, "ג"],
    [2, "ב"],
    [1, "א"],
    [/יה/, "ט״ו"],
    [/יו/, "ט״ז"],
    [/([א-ת])([א-ת])$/, "$1״$2"],
    [/^([א-ת])$/, "$1׳"]
  ]);
  function archaicNumbers(arr) {
    return {
      format: function(n) {
        let ret = "";
        arr.forEach((item) => {
          const num = item[0];
          if (parseInt(num.toString()) > 0) {
            for (; n >= Number(num); n -= Number(num))
              ret += item[1];
          } else {
            ret = ret.replace(num.toString(), item[1]);
          }
        });
        return ret;
      }
    };
  }
  function alphaNumeric(num, upperLower) {
    num = Number(num) - 1;
    let aNum = "";
    if (upperLower === "upperCase") {
      aNum = ((num / 26 >= 1 ? String.fromCharCode(num / 26 + 64) : "") + String.fromCharCode(num % 26 + 65)).toUpperCase();
    } else if (upperLower === "lowerCase") {
      aNum = ((num / 26 >= 1 ? String.fromCharCode(num / 26 + 64) : "") + String.fromCharCode(num % 26 + 65)).toLowerCase();
    }
    return aNum;
  }
};
export {
  renderPptx
};
//# sourceMappingURL=index-1ffff466-25TQ5QVK.js.map
