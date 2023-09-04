// node_modules/ranui/dist/colz-746223ab.js
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var round = Math.round;
var Rgb = class {
  constructor(col) {
    __publicField(this, "r");
    __publicField(this, "g");
    __publicField(this, "b");
    this.r = col[0];
    this.g = col[1];
    this.b = col[2];
  }
  toString() {
    return `rgb(${this.r},${this.g},${this.b})`;
  }
};
var Rgba = class extends Rgb {
  constructor(col) {
    super(col);
    __publicField(this, "a");
    this.a = col[3];
  }
  toString() {
    return `rgba(${this.r},${this.g},${this.b},${this.a})`;
  }
};
var Hsl = class {
  constructor(col) {
    __publicField(this, "h");
    __publicField(this, "s");
    __publicField(this, "l");
    this.h = col[0];
    this.s = col[1];
    this.l = col[2];
  }
  toString() {
    return `hsl(${this.h},${this.s}%,${this.l}%)`;
  }
};
var Hsla = class extends Hsl {
  constructor(col) {
    super(col);
    __publicField(this, "a");
    this.a = col[3];
  }
  toString() {
    return `hsla(${this.h},${this.s}%,${this.l}%,${this.a})`;
  }
};
var Color = class {
  constructor(r, g = 0, b = 0, a = 1) {
    __publicField(this, "r");
    __publicField(this, "g");
    __publicField(this, "b");
    __publicField(this, "a");
    __publicField(this, "rgb");
    __publicField(this, "rgba");
    __publicField(this, "hex");
    __publicField(this, "hsl");
    __publicField(this, "hsla");
    __publicField(this, "h");
    __publicField(this, "s");
    __publicField(this, "l");
    if (typeof r === "string") {
      let str = r;
      if (str.charAt(0) !== "#") {
        str = "#" + str;
      }
      if (str.length < 7) {
        str = "#" + str[1] + str[1] + str[2] + str[2] + str[3] + str[3];
      }
      [r, g, b] = hexToRgb(str);
    } else if (r instanceof Array) {
      a = r[3] || a;
      b = r[2];
      g = r[1];
      r = r[0];
    }
    this.r = Number(r);
    this.g = Number(g);
    this.b = Number(b);
    this.a = a;
    this.rgb = new Rgb([this.r, this.g, this.b]);
    this.rgba = new Rgba([this.r, this.g, this.b, this.a]);
    this.hex = rgbToHex(this.r, this.g, this.b);
    this.hsl = new Hsl(rgbToHsl(this.r, this.g, this.b));
    this.h = this.hsl.h;
    this.s = this.hsl.s;
    this.l = this.hsl.l;
    this.hsla = new Hsla([this.h, this.s, this.l, this.a]);
  }
  setHue(newHue) {
    this.h = newHue;
    this.hsl.h = newHue;
    this.hsla.h = newHue;
    this.updateFromHsl();
  }
  setSat(newSat) {
    this.s = newSat;
    this.hsl.s = newSat;
    this.hsla.s = newSat;
    this.updateFromHsl();
  }
  setLum(newLum) {
    this.l = newLum;
    this.hsl.l = newLum;
    this.hsla.l = newLum;
    this.updateFromHsl();
  }
  setAlpha(newAlpha) {
    this.a = newAlpha;
    this.hsla.a = newAlpha;
    this.rgba.a = newAlpha;
  }
  updateFromHsl() {
    this.rgb = new Rgb(hslToRgb(this.h, this.s, this.l));
    this.r = this.rgb.r;
    this.g = this.rgb.g;
    this.b = this.rgb.b;
    this.rgba.r = this.rgb.r;
    this.rgba.g = this.rgb.g;
    this.rgba.b = this.rgb.b;
    this.hex = rgbToHex([this.r, this.g, this.b]);
  }
};
var hexToRgb = function(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
};
var getDarkColor = (color, level) => {
  const rgbc = hexToRgb(color) || [];
  for (let i = 0; i < 3; i++)
    rgbc[i] = Math.floor(Number(rgbc[i]) * (1 - level));
  return rgbToHex(rgbc[0], rgbc[1], rgbc[2]);
};
function getLightColor(color, level) {
  const rgbc = hexToRgb(color) || [];
  for (let i = 0; i < 3; i++)
    rgbc[i] = Math.floor((255 - Number(rgbc[i])) * level + Number(rgbc[i]));
  return rgbToHex(rgbc[0], rgbc[1], rgbc[2]);
}
var componentToHex = function(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};
var rgbToHex = function(r, g = 0, b = 0) {
  if (r instanceof Array) {
    b = r[2];
    g = r[1];
    r = r[0];
  }
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
var rgbToHsl = function(r, g = 0, b = 0) {
  if (r instanceof Array) {
    b = r[2];
    g = r[1];
    r = r[0];
  }
  let s, l, d, h = 0;
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  h = round(h * 360);
  s = round(s * 100);
  l = round(l * 100);
  return [h, s, l];
};
var hue2rgb = function(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
};
var hslToRgb = function(h, s, l) {
  if (h instanceof Array) {
    l = h[2];
    s = h[1];
    h = h[0];
  }
  h = Number(h) / 360;
  s = Number(s) / 100;
  l = Number(l) / 100;
  let r, g, b, q, p;
  if (s === 0) {
    r = g = b = l;
  } else {
    q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [round(r * 255), round(g * 255), round(b * 255)];
};

export {
  Color,
  getDarkColor,
  getLightColor
};
//# sourceMappingURL=chunk-C6KU37IV.js.map
