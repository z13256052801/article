import {
  requireJszip_min
} from "./chunk-N4MDBA4Y.js";
import "./chunk-GRK5WT62.js";

// node_modules/ranui/dist/docx-5262a8f1.js
var docxPreview_min = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(requireJszip_min());
  }(globalThis, (e) => (() => {
    var t = { 438: (e2, t2, r2) => {
      r2.r(t2), r2.d(t2, { default: () => d });
      var a2 = r2(537), s = r2.n(a2), n = r2(645), l = r2.n(n), o = r2(806), i = r2.n(o), c = new URL(r2(583), r2.b), u = l()(s()), p = i()(c);
      u.push([e2.id, `@namespace "http://www.w3.org/1998/Math/MathML";math{display:inline-block;line-height:initial}mfrac{display:inline-block;vertical-align:-50%;text-align:center}mfrac>:first-child{border-bottom:solid thin currentColor}mfrac>*{display:block}msub>:nth-child(2){font-size:smaller;vertical-align:sub}msup>:nth-child(2){font-size:smaller;vertical-align:super}munder,mover,munderover{display:inline-flex;flex-flow:column nowrap;vertical-align:middle;text-align:center}munder>:not(:first-child),mover>:not(:first-child),munderover>:not(:first-child){font-size:smaller}munderover>:last-child{order:-1}mroot,msqrt{position:relative;display:inline-block;border-top:solid thin currentColor;margin-top:.5px;vertical-align:middle;margin-left:1ch}mroot:before,msqrt:before{content:"";display:inline-block;position:absolute;width:1ch;left:-1ch;top:-1px;bottom:0;background-image:url(${p})}`, "", { version: 3, sources: ["webpack://./src/mathml.scss"], names: [], mappings: "AAAA,+CAAA,CAEA,KACI,oBAAA,CACA,mBAAA,CAGJ,MACI,oBAAA,CACA,mBAAA,CACA,iBAAA,CAEA,mBACI,qCAAA,CAGJ,QACI,aAAA,CAKJ,mBACI,iBAAA,CACA,kBAAA,CAKJ,mBACI,iBAAA,CACA,oBAAA,CAIR,wBACI,mBAAA,CACA,uBAAA,CACA,qBAAA,CACA,iBAAA,CAEA,iFACI,iBAAA,CAKJ,uBAAA,QAAA,CAGJ,YACI,iBAAA,CACA,oBAAA,CACA,kCAAA,CACA,eAAA,CACA,qBAAA,CACA,eAAA,CAEA,0BACI,UAAA,CACA,oBAAA,CACA,iBAAA,CACA,SAAA,CACA,SAAA,CACA,QAAA,CACA,QAAA,CACA,wDAAA", sourcesContent: [`@namespace "http://www.w3.org/1998/Math/MathML";\r
\r
math {\r
    display: inline-block;\r
    line-height: initial;\r
}\r
\r
mfrac {\r
    display: inline-block;\r
    vertical-align: -50%;\r
    text-align: center;\r
\r
    &>:first-child {\r
        border-bottom: solid thin currentColor;\r
    }\r
\r
    &>* {\r
        display: block;\r
    }\r
}\r
\r
msub {\r
    &>:nth-child(2) {\r
        font-size: smaller;\r
        vertical-align: sub;\r
    }\r
}\r
\r
msup {\r
    &>:nth-child(2) {\r
        font-size: smaller;\r
        vertical-align: super;\r
    }\r
}\r
\r
munder, mover, munderover {\r
    display: inline-flex;\r
    flex-flow: column nowrap;\r
    vertical-align: middle;\r
    text-align: center;\r
\r
    &>:not(:first-child) {\r
        font-size: smaller;\r
    }\r
}\r
\r
munderover {\r
    &>:last-child { order: -1; }\r
}\r
\r
mroot, msqrt {\r
    position: relative;\r
    display: inline-block;\r
    border-top: solid thin currentColor;  \r
    margin-top: 0.5px;\r
    vertical-align: middle;  \r
    margin-left: 1ch; \r
\r
    &:before {\r
        content: "";\r
        display: inline-block;\r
        position: absolute;\r
        width: 1ch;\r
        left: -1ch;\r
        top: -1px;\r
        bottom: 0;\r
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 100' preserveAspectRatio='none'%3E%3Cpath d='m0,75 l5,0 l5,25 l10,-100' stroke='black' fill='none' vector-effect='non-scaling-stroke'/%3E%3C/svg%3E");\r
    }\r
}`], sourceRoot: "" }]);
      const d = u.toString();
    }, 645: (e2) => {
      e2.exports = function(e3) {
        var t2 = [];
        return t2.toString = function() {
          return this.map(function(t3) {
            var r2 = "", a2 = void 0 !== t3[5];
            return t3[4] && (r2 += "@supports (".concat(t3[4], ") {")), t3[2] && (r2 += "@media ".concat(t3[2], " {")), a2 && (r2 += "@layer".concat(t3[5].length > 0 ? " ".concat(t3[5]) : "", " {")), r2 += e3(t3), a2 && (r2 += "}"), t3[2] && (r2 += "}"), t3[4] && (r2 += "}"), r2;
          }).join("");
        }, t2.i = function(e4, r2, a2, s, n) {
          "string" == typeof e4 && (e4 = [[null, e4, void 0]]);
          var l = {};
          if (a2)
            for (var o = 0; o < this.length; o++) {
              var i = this[o][0];
              null != i && (l[i] = true);
            }
          for (var c = 0; c < e4.length; c++) {
            var u = [].concat(e4[c]);
            a2 && l[u[0]] || (void 0 !== n && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = n), r2 && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = r2) : u[2] = r2), s && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = s) : u[4] = "".concat(s)), t2.push(u));
          }
        }, t2;
      };
    }, 806: (e2) => {
      e2.exports = function(e3, t2) {
        return t2 || (t2 = {}), e3 ? (e3 = String(e3.__esModule ? e3.default : e3), /^['"].*['"]$/.test(e3) && (e3 = e3.slice(1, -1)), t2.hash && (e3 += t2.hash), /["'() \t\n]|(%20)/.test(e3) || t2.needQuotes ? '"'.concat(e3.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e3) : e3;
      };
    }, 537: (e2) => {
      e2.exports = function(e3) {
        var t2 = e3[1], r2 = e3[3];
        if (!r2)
          return t2;
        if ("function" == typeof btoa) {
          var a2 = btoa(unescape(encodeURIComponent(JSON.stringify(r2)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a2), n = "/*# ".concat(s, " */");
          return [t2].concat([n]).join("\n");
        }
        return [t2].join("\n");
      };
    }, 522: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.OpenXmlPackage = void 0;
      const a2 = r2(626), s = r2(472), n = r2(593), l = r2(461);
      class o {
        constructor(e3, t3) {
          this._zip = e3, this.options = t3, this.xmlParser = new s.XmlParser();
        }
        get(e3) {
          return this._zip.files[function(e4) {
            return e4.startsWith("/") ? e4.substr(1) : e4;
          }(e3)];
        }
        update(e3, t3) {
          this._zip.file(e3, t3);
        }
        static async load(e3, t3) {
          const r3 = await a2.loadAsync(e3);
          return new o(r3, t3);
        }
        save(e3 = "blob") {
          return this._zip.generateAsync({ type: e3 });
        }
        load(e3, t3 = "string") {
          var r3, a3;
          return null !== (a3 = null === (r3 = this.get(e3)) || void 0 === r3 ? void 0 : r3.async(t3)) && void 0 !== a3 ? a3 : Promise.resolve(null);
        }
        async loadRelationships(e3 = null) {
          let t3 = "_rels/.rels";
          if (null != e3) {
            const [r4, a3] = (0, n.splitPath)(e3);
            t3 = `${r4}_rels/${a3}.rels`;
          }
          const r3 = await this.load(t3);
          return r3 ? (0, l.parseRelationships)(this.parseXmlDocument(r3).firstElementChild, this.xmlParser) : null;
        }
        parseXmlDocument(e3) {
          return (0, s.parseXmlString)(e3, this.options.trimXmlDeclaration);
        }
      }
      t2.OpenXmlPackage = o;
    }, 530: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.Part = void 0;
      const a2 = r2(472);
      t2.Part = class {
        constructor(e3, t3) {
          this._package = e3, this.path = t3;
        }
        async load() {
          this.rels = await this._package.loadRelationships(this.path);
          const e3 = await this._package.load(this.path), t3 = this._package.parseXmlDocument(e3);
          this._package.options.keepOrigin && (this._xmlDocument = t3), this.parseXml(t3.firstElementChild);
        }
        save() {
          this._package.update(this.path, (0, a2.serializeXmlString)(this._xmlDocument));
        }
        parseXml(e3) {
        }
      };
    }, 461: (e2, t2) => {
      var r2;
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseRelationships = t2.RelationshipTypes = void 0, function(e3) {
        e3.OfficeDocument = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", e3.FontTable = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable", e3.Image = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", e3.Numbering = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering", e3.Styles = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", e3.StylesWithEffects = "http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects", e3.Theme = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", e3.Settings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings", e3.WebSettings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings", e3.Hyperlink = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", e3.Footnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes", e3.Endnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes", e3.Footer = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer", e3.Header = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header", e3.ExtendedProperties = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", e3.CoreProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", e3.CustomProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties";
      }(r2 || (t2.RelationshipTypes = r2 = {})), t2.parseRelationships = function(e3, t3) {
        return t3.elements(e3).map((e4) => ({ id: t3.attr(e4, "Id"), type: t3.attr(e4, "Type"), target: t3.attr(e4, "Target"), targetMode: t3.attr(e4, "TargetMode") }));
      };
    }, 168: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.DocumentParser = t2.autos = void 0;
      const a2 = r2(120), s = r2(109), n = r2(59), l = r2(472), o = r2(488), i = r2(172), c = r2(149), u = r2(320);
      t2.autos = { shd: "inherit", color: "black", borderColor: "black", highlight: "transparent" };
      const p = [], d = { oMath: a2.DomType.MmlMath, oMathPara: a2.DomType.MmlMathParagraph, f: a2.DomType.MmlFraction, num: a2.DomType.MmlNumerator, den: a2.DomType.MmlDenominator, rad: a2.DomType.MmlRadical, deg: a2.DomType.MmlDegree, e: a2.DomType.MmlBase, sSup: a2.DomType.MmlSuperscript, sSub: a2.DomType.MmlSubscript, sup: a2.DomType.MmlSuperArgument, sub: a2.DomType.MmlSubArgument, d: a2.DomType.MmlDelimiter, nary: a2.DomType.MmlNary };
      t2.DocumentParser = class {
        constructor(e3) {
          this.options = Object.assign({ ignoreWidth: false, debug: false }, e3);
        }
        parseNotes(e3, t3, r3) {
          var a3 = [];
          for (let s2 of l.default.elements(e3, t3)) {
            const e4 = new r3();
            e4.id = l.default.attr(s2, "id"), e4.noteType = l.default.attr(s2, "type"), e4.children = this.parseBodyElements(s2), a3.push(e4);
          }
          return a3;
        }
        parseDocumentFile(e3) {
          var t3 = l.default.element(e3, "body"), r3 = l.default.element(e3, "background"), s2 = l.default.element(t3, "sectPr");
          return { type: a2.DomType.Document, children: this.parseBodyElements(t3), props: s2 ? (0, n.parseSectionProperties)(s2, l.default) : {}, cssStyle: r3 ? this.parseBackground(r3) : {} };
        }
        parseBackground(e3) {
          var t3 = {}, r3 = m.colorAttr(e3, "color");
          return r3 && (t3["background-color"] = r3), t3;
        }
        parseBodyElements(e3) {
          var t3 = [];
          for (let r3 of l.default.elements(e3))
            switch (r3.localName) {
              case "p":
                t3.push(this.parseParagraph(r3));
                break;
              case "tbl":
                t3.push(this.parseTable(r3));
                break;
              case "sdt":
                t3.push(...this.parseSdt(r3, (e4) => this.parseBodyElements(e4)));
            }
          return t3;
        }
        parseStylesFile(e3) {
          var t3 = [];
          return m.foreach(e3, (e4) => {
            switch (e4.localName) {
              case "style":
                t3.push(this.parseStyle(e4));
                break;
              case "docDefaults":
                t3.push(this.parseDefaultStyles(e4));
            }
          }), t3;
        }
        parseDefaultStyles(e3) {
          var t3 = { id: null, name: null, target: null, basedOn: null, styles: [] };
          return m.foreach(e3, (e4) => {
            switch (e4.localName) {
              case "rPrDefault":
                var r3 = l.default.element(e4, "rPr");
                r3 && t3.styles.push({ target: "span", values: this.parseDefaultProperties(r3, {}) });
                break;
              case "pPrDefault":
                var a3 = l.default.element(e4, "pPr");
                a3 && t3.styles.push({ target: "p", values: this.parseDefaultProperties(a3, {}) });
            }
          }), t3;
        }
        parseStyle(e3) {
          var t3 = { id: l.default.attr(e3, "styleId"), isDefault: l.default.boolAttr(e3, "default"), name: null, target: null, basedOn: null, styles: [], linked: null };
          switch (l.default.attr(e3, "type")) {
            case "paragraph":
              t3.target = "p";
              break;
            case "table":
              t3.target = "table";
              break;
            case "character":
              t3.target = "span";
          }
          return m.foreach(e3, (e4) => {
            switch (e4.localName) {
              case "basedOn":
                t3.basedOn = l.default.attr(e4, "val");
                break;
              case "name":
                t3.name = l.default.attr(e4, "val");
                break;
              case "link":
                t3.linked = l.default.attr(e4, "val");
                break;
              case "next":
                t3.next = l.default.attr(e4, "val");
                break;
              case "aliases":
                t3.aliases = l.default.attr(e4, "val").split(",");
                break;
              case "pPr":
                t3.styles.push({ target: "p", values: this.parseDefaultProperties(e4, {}) }), t3.paragraphProps = (0, s.parseParagraphProperties)(e4, l.default);
                break;
              case "rPr":
                t3.styles.push({ target: "span", values: this.parseDefaultProperties(e4, {}) }), t3.runProps = (0, o.parseRunProperties)(e4, l.default);
                break;
              case "tblPr":
              case "tcPr":
                t3.styles.push({ target: "td", values: this.parseDefaultProperties(e4, {}) });
                break;
              case "tblStylePr":
                for (let r3 of this.parseTableStyle(e4))
                  t3.styles.push(r3);
                break;
              case "rsid":
              case "qFormat":
              case "hidden":
              case "semiHidden":
              case "unhideWhenUsed":
              case "autoRedefine":
              case "uiPriority":
                break;
              default:
                this.options.debug && console.warn(`DOCX: Unknown style element: ${e4.localName}`);
            }
          }), t3;
        }
        parseTableStyle(e3) {
          var t3 = [], r3 = l.default.attr(e3, "type"), a3 = "", s2 = "";
          switch (r3) {
            case "firstRow":
              s2 = ".first-row", a3 = "tr.first-row td";
              break;
            case "lastRow":
              s2 = ".last-row", a3 = "tr.last-row td";
              break;
            case "firstCol":
              s2 = ".first-col", a3 = "td.first-col";
              break;
            case "lastCol":
              s2 = ".last-col", a3 = "td.last-col";
              break;
            case "band1Vert":
              s2 = ":not(.no-vband)", a3 = "td.odd-col";
              break;
            case "band2Vert":
              s2 = ":not(.no-vband)", a3 = "td.even-col";
              break;
            case "band1Horz":
              s2 = ":not(.no-hband)", a3 = "tr.odd-row";
              break;
            case "band2Horz":
              s2 = ":not(.no-hband)", a3 = "tr.even-row";
              break;
            default:
              return [];
          }
          return m.foreach(e3, (e4) => {
            switch (e4.localName) {
              case "pPr":
                t3.push({ target: `${a3} p`, mod: s2, values: this.parseDefaultProperties(e4, {}) });
                break;
              case "rPr":
                t3.push({ target: `${a3} span`, mod: s2, values: this.parseDefaultProperties(e4, {}) });
                break;
              case "tblPr":
              case "tcPr":
                t3.push({ target: a3, mod: s2, values: this.parseDefaultProperties(e4, {}) });
            }
          }), t3;
        }
        parseNumberingFile(e3) {
          var t3 = [], r3 = {}, a3 = [];
          return m.foreach(e3, (e4) => {
            switch (e4.localName) {
              case "abstractNum":
                this.parseAbstractNumbering(e4, a3).forEach((e5) => t3.push(e5));
                break;
              case "numPicBullet":
                a3.push(this.parseNumberingPicBullet(e4));
                break;
              case "num":
                var s2 = l.default.attr(e4, "numId"), n2 = l.default.elementAttr(e4, "abstractNumId", "val");
                r3[n2] = s2;
            }
          }), t3.forEach((e4) => e4.id = r3[e4.id]), t3;
        }
        parseNumberingPicBullet(e3) {
          var t3 = l.default.element(e3, "pict"), r3 = t3 && l.default.element(t3, "shape"), a3 = r3 && l.default.element(r3, "imagedata");
          return a3 ? { id: l.default.intAttr(e3, "numPicBulletId"), src: l.default.attr(a3, "id"), style: l.default.attr(r3, "style") } : null;
        }
        parseAbstractNumbering(e3, t3) {
          var r3 = [], a3 = l.default.attr(e3, "abstractNumId");
          return m.foreach(e3, (e4) => {
            "lvl" === e4.localName && r3.push(this.parseNumberingLevel(a3, e4, t3));
          }), r3;
        }
        parseNumberingLevel(e3, t3, r3) {
          var a3 = { id: e3, level: l.default.intAttr(t3, "ilvl"), pStyleName: void 0, pStyle: {}, rStyle: {}, suff: "tab" };
          return m.foreach(t3, (e4) => {
            switch (e4.localName) {
              case "pPr":
                this.parseDefaultProperties(e4, a3.pStyle);
                break;
              case "rPr":
                this.parseDefaultProperties(e4, a3.rStyle);
                break;
              case "lvlPicBulletId":
                var t4 = l.default.intAttr(e4, "val");
                a3.bullet = r3.find((e5) => e5.id == t4);
                break;
              case "lvlText":
                a3.levelText = l.default.attr(e4, "val");
                break;
              case "pStyle":
                a3.pStyleName = l.default.attr(e4, "val");
                break;
              case "numFmt":
                a3.format = l.default.attr(e4, "val");
                break;
              case "suff":
                a3.suff = l.default.attr(e4, "val");
            }
          }), a3;
        }
        parseSdt(e3, t3) {
          const r3 = l.default.element(e3, "sdtContent");
          return r3 ? t3(r3) : [];
        }
        parseInserted(e3, t3) {
          var r3, s2;
          return { type: a2.DomType.Inserted, children: null !== (s2 = null === (r3 = t3(e3)) || void 0 === r3 ? void 0 : r3.children) && void 0 !== s2 ? s2 : [] };
        }
        parseDeleted(e3, t3) {
          var r3, s2;
          return { type: a2.DomType.Deleted, children: null !== (s2 = null === (r3 = t3(e3)) || void 0 === r3 ? void 0 : r3.children) && void 0 !== s2 ? s2 : [] };
        }
        parseParagraph(e3) {
          var t3 = { type: a2.DomType.Paragraph, children: [] };
          for (let r3 of l.default.elements(e3))
            switch (r3.localName) {
              case "pPr":
                this.parseParagraphProperties(r3, t3);
                break;
              case "r":
                t3.children.push(this.parseRun(r3, t3));
                break;
              case "hyperlink":
                t3.children.push(this.parseHyperlink(r3, t3));
                break;
              case "bookmarkStart":
                t3.children.push((0, i.parseBookmarkStart)(r3, l.default));
                break;
              case "bookmarkEnd":
                t3.children.push((0, i.parseBookmarkEnd)(r3, l.default));
                break;
              case "oMath":
              case "oMathPara":
                t3.children.push(this.parseMathElement(r3));
                break;
              case "sdt":
                t3.children.push(...this.parseSdt(r3, (e4) => this.parseParagraph(e4).children));
                break;
              case "ins":
                t3.children.push(this.parseInserted(r3, (e4) => this.parseParagraph(e4)));
                break;
              case "del":
                t3.children.push(this.parseDeleted(r3, (e4) => this.parseParagraph(e4)));
            }
          return t3;
        }
        parseParagraphProperties(e3, t3) {
          this.parseDefaultProperties(e3, t3.cssStyle = {}, null, (e4) => {
            if ((0, s.parseParagraphProperty)(e4, t3, l.default))
              return true;
            switch (e4.localName) {
              case "pStyle":
                t3.styleName = l.default.attr(e4, "val");
                break;
              case "cnfStyle":
                t3.className = f.classNameOfCnfStyle(e4);
                break;
              case "framePr":
                this.parseFrame(e4, t3);
                break;
              case "rPr":
                break;
              default:
                return false;
            }
            return true;
          });
        }
        parseFrame(e3, t3) {
          "drop" == l.default.attr(e3, "dropCap") && (t3.cssStyle.float = "left");
        }
        parseHyperlink(e3, t3) {
          var r3 = { type: a2.DomType.Hyperlink, parent: t3, children: [] }, s2 = l.default.attr(e3, "anchor"), n2 = l.default.attr(e3, "id");
          return s2 && (r3.href = "#" + s2), n2 && (r3.id = n2), m.foreach(e3, (e4) => {
            "r" === e4.localName && r3.children.push(this.parseRun(e4, r3));
          }), r3;
        }
        parseRun(e3, t3) {
          var r3 = { type: a2.DomType.Run, parent: t3, children: [] };
          return m.foreach(e3, (e4) => {
            switch ((e4 = this.checkAlternateContent(e4)).localName) {
              case "t":
                r3.children.push({ type: a2.DomType.Text, text: e4.textContent });
                break;
              case "delText":
                r3.children.push({ type: a2.DomType.DeletedText, text: e4.textContent });
                break;
              case "fldSimple":
                r3.children.push({ type: a2.DomType.SimpleField, instruction: l.default.attr(e4, "instr"), lock: l.default.boolAttr(e4, "lock", false), dirty: l.default.boolAttr(e4, "dirty", false) });
                break;
              case "instrText":
                r3.fieldRun = true, r3.children.push({ type: a2.DomType.Instruction, text: e4.textContent });
                break;
              case "fldChar":
                r3.fieldRun = true, r3.children.push({ type: a2.DomType.ComplexField, charType: l.default.attr(e4, "fldCharType"), lock: l.default.boolAttr(e4, "lock", false), dirty: l.default.boolAttr(e4, "dirty", false) });
                break;
              case "noBreakHyphen":
                r3.children.push({ type: a2.DomType.NoBreakHyphen });
                break;
              case "br":
                r3.children.push({ type: a2.DomType.Break, break: l.default.attr(e4, "type") || "textWrapping" });
                break;
              case "lastRenderedPageBreak":
                r3.children.push({ type: a2.DomType.Break, break: "lastRenderedPageBreak" });
                break;
              case "sym":
                r3.children.push({ type: a2.DomType.Symbol, font: l.default.attr(e4, "font"), char: l.default.attr(e4, "char") });
                break;
              case "tab":
                r3.children.push({ type: a2.DomType.Tab });
                break;
              case "footnoteReference":
                r3.children.push({ type: a2.DomType.FootnoteReference, id: l.default.attr(e4, "id") });
                break;
              case "endnoteReference":
                r3.children.push({ type: a2.DomType.EndnoteReference, id: l.default.attr(e4, "id") });
                break;
              case "drawing":
                let t4 = this.parseDrawing(e4);
                t4 && (r3.children = [t4]);
                break;
              case "pict":
                r3.children.push(this.parseVmlPicture(e4));
                break;
              case "rPr":
                this.parseRunProperties(e4, r3);
            }
          }), r3;
        }
        parseMathElement(e3) {
          const t3 = `${e3.localName}Pr`, r3 = { type: d[e3.localName], children: [] };
          for (const n2 of l.default.elements(e3))
            if (d[n2.localName])
              r3.children.push(this.parseMathElement(n2));
            else if ("r" == n2.localName) {
              var s2 = this.parseRun(n2);
              s2.type = a2.DomType.MmlRun, r3.children.push(s2);
            } else
              n2.localName == t3 && (r3.props = this.parseMathProperies(n2));
          return r3;
        }
        parseMathProperies(e3) {
          const t3 = {};
          for (const r3 of l.default.elements(e3))
            switch (r3.localName) {
              case "chr":
                t3.char = l.default.attr(r3, "val");
                break;
              case "degHide":
                t3.hideDegree = l.default.boolAttr(r3, "val");
                break;
              case "begChr":
                t3.beginChar = l.default.attr(r3, "val");
                break;
              case "endChr":
                t3.endChar = l.default.attr(r3, "val");
            }
          return t3;
        }
        parseRunProperties(e3, t3) {
          this.parseDefaultProperties(e3, t3.cssStyle = {}, null, (e4) => {
            switch (e4.localName) {
              case "rStyle":
                t3.styleName = l.default.attr(e4, "val");
                break;
              case "vertAlign":
                t3.verticalAlign = f.valueOfVertAlign(e4, true);
                break;
              default:
                return false;
            }
            return true;
          });
        }
        parseVmlPicture(e3) {
          const t3 = { type: a2.DomType.VmlPicture, children: [] };
          for (const r3 of l.default.elements(e3)) {
            const e4 = (0, u.parseVmlElement)(r3);
            e4 && t3.children.push(e4);
          }
          return t3;
        }
        checkAlternateContent(e3) {
          var t3;
          if ("AlternateContent" != e3.localName)
            return e3;
          var r3 = l.default.element(e3, "Choice");
          if (r3) {
            var a3 = l.default.attr(r3, "Requires"), s2 = e3.lookupNamespaceURI(a3);
            if (p.includes(s2))
              return r3.firstElementChild;
          }
          return null === (t3 = l.default.element(e3, "Fallback")) || void 0 === t3 ? void 0 : t3.firstElementChild;
        }
        parseDrawing(e3) {
          for (var t3 of l.default.elements(e3))
            switch (t3.localName) {
              case "inline":
              case "anchor":
                return this.parseDrawingWrapper(t3);
            }
        }
        parseDrawingWrapper(e3) {
          var t3, r3 = { type: a2.DomType.Drawing, children: [], cssStyle: {} }, s2 = "anchor" == e3.localName;
          let n2 = null, o2 = l.default.boolAttr(e3, "simplePos"), i2 = { relative: "page", align: "left", offset: "0" }, u2 = { relative: "page", align: "top", offset: "0" };
          for (var p2 of l.default.elements(e3))
            switch (p2.localName) {
              case "simplePos":
                o2 && (i2.offset = l.default.lengthAttr(p2, "x", c.LengthUsage.Emu), u2.offset = l.default.lengthAttr(p2, "y", c.LengthUsage.Emu));
                break;
              case "extent":
                r3.cssStyle.width = l.default.lengthAttr(p2, "cx", c.LengthUsage.Emu), r3.cssStyle.height = l.default.lengthAttr(p2, "cy", c.LengthUsage.Emu);
                break;
              case "positionH":
              case "positionV":
                if (!o2) {
                  let e4 = "positionH" == p2.localName ? i2 : u2;
                  var d2 = l.default.element(p2, "align"), h2 = l.default.element(p2, "posOffset");
                  e4.relative = null !== (t3 = l.default.attr(p2, "relativeFrom")) && void 0 !== t3 ? t3 : e4.relative, d2 && (e4.align = d2.textContent), h2 && (e4.offset = m.sizeValue(h2, c.LengthUsage.Emu));
                }
                break;
              case "wrapTopAndBottom":
                n2 = "wrapTopAndBottom";
                break;
              case "wrapNone":
                n2 = "wrapNone";
                break;
              case "graphic":
                var f2 = this.parseGraphic(p2);
                f2 && r3.children.push(f2);
            }
          return "wrapTopAndBottom" == n2 ? (r3.cssStyle.display = "block", i2.align && (r3.cssStyle["text-align"] = i2.align, r3.cssStyle.width = "100%")) : "wrapNone" == n2 ? (r3.cssStyle.display = "block", r3.cssStyle.position = "relative", r3.cssStyle.width = "0px", r3.cssStyle.height = "0px", i2.offset && (r3.cssStyle.left = i2.offset), u2.offset && (r3.cssStyle.top = u2.offset)) : !s2 || "left" != i2.align && "right" != i2.align || (r3.cssStyle.float = i2.align), r3;
        }
        parseGraphic(e3) {
          var t3 = l.default.element(e3, "graphicData");
          for (let e4 of l.default.elements(t3))
            if ("pic" === e4.localName)
              return this.parsePicture(e4);
          return null;
        }
        parsePicture(e3) {
          var t3 = { type: a2.DomType.Image, src: "", cssStyle: {} }, r3 = l.default.element(e3, "blipFill"), s2 = l.default.element(r3, "blip");
          t3.src = l.default.attr(s2, "embed");
          var n2 = l.default.element(e3, "spPr"), o2 = l.default.element(n2, "xfrm");
          for (var i2 of (t3.cssStyle.position = "relative", l.default.elements(o2)))
            switch (i2.localName) {
              case "ext":
                t3.cssStyle.width = l.default.lengthAttr(i2, "cx", c.LengthUsage.Emu), t3.cssStyle.height = l.default.lengthAttr(i2, "cy", c.LengthUsage.Emu);
                break;
              case "off":
                t3.cssStyle.left = l.default.lengthAttr(i2, "x", c.LengthUsage.Emu), t3.cssStyle.top = l.default.lengthAttr(i2, "y", c.LengthUsage.Emu);
            }
          return t3;
        }
        parseTable(e3) {
          var t3 = { type: a2.DomType.Table, children: [] };
          return m.foreach(e3, (e4) => {
            switch (e4.localName) {
              case "tr":
                t3.children.push(this.parseTableRow(e4));
                break;
              case "tblGrid":
                t3.columns = this.parseTableColumns(e4);
                break;
              case "tblPr":
                this.parseTableProperties(e4, t3);
            }
          }), t3;
        }
        parseTableColumns(e3) {
          var t3 = [];
          return m.foreach(e3, (e4) => {
            "gridCol" === e4.localName && t3.push({ width: l.default.lengthAttr(e4, "w") });
          }), t3;
        }
        parseTableProperties(e3, t3) {
          switch (t3.cssStyle = {}, t3.cellStyle = {}, this.parseDefaultProperties(e3, t3.cssStyle, t3.cellStyle, (e4) => {
            switch (e4.localName) {
              case "tblStyle":
                t3.styleName = l.default.attr(e4, "val");
                break;
              case "tblLook":
                t3.className = f.classNameOftblLook(e4);
                break;
              case "tblpPr":
                this.parseTablePosition(e4, t3);
                break;
              case "tblStyleColBandSize":
                t3.colBandSize = l.default.intAttr(e4, "val");
                break;
              case "tblStyleRowBandSize":
                t3.rowBandSize = l.default.intAttr(e4, "val");
                break;
              default:
                return false;
            }
            return true;
          }), t3.cssStyle["text-align"]) {
            case "center":
              delete t3.cssStyle["text-align"], t3.cssStyle["margin-left"] = "auto", t3.cssStyle["margin-right"] = "auto";
              break;
            case "right":
              delete t3.cssStyle["text-align"], t3.cssStyle["margin-left"] = "auto";
          }
        }
        parseTablePosition(e3, t3) {
          var r3 = l.default.lengthAttr(e3, "topFromText"), a3 = l.default.lengthAttr(e3, "bottomFromText"), s2 = l.default.lengthAttr(e3, "rightFromText"), n2 = l.default.lengthAttr(e3, "leftFromText");
          t3.cssStyle.float = "left", t3.cssStyle["margin-bottom"] = f.addSize(t3.cssStyle["margin-bottom"], a3), t3.cssStyle["margin-left"] = f.addSize(t3.cssStyle["margin-left"], n2), t3.cssStyle["margin-right"] = f.addSize(t3.cssStyle["margin-right"], s2), t3.cssStyle["margin-top"] = f.addSize(t3.cssStyle["margin-top"], r3);
        }
        parseTableRow(e3) {
          var t3 = { type: a2.DomType.Row, children: [] };
          return m.foreach(e3, (e4) => {
            switch (e4.localName) {
              case "tc":
                t3.children.push(this.parseTableCell(e4));
                break;
              case "trPr":
                this.parseTableRowProperties(e4, t3);
            }
          }), t3;
        }
        parseTableRowProperties(e3, t3) {
          t3.cssStyle = this.parseDefaultProperties(e3, {}, null, (e4) => {
            switch (e4.localName) {
              case "cnfStyle":
                t3.className = f.classNameOfCnfStyle(e4);
                break;
              case "tblHeader":
                t3.isHeader = l.default.boolAttr(e4, "val");
                break;
              default:
                return false;
            }
            return true;
          });
        }
        parseTableCell(e3) {
          var t3 = { type: a2.DomType.Cell, children: [] };
          return m.foreach(e3, (e4) => {
            switch (e4.localName) {
              case "tbl":
                t3.children.push(this.parseTable(e4));
                break;
              case "p":
                t3.children.push(this.parseParagraph(e4));
                break;
              case "tcPr":
                this.parseTableCellProperties(e4, t3);
            }
          }), t3;
        }
        parseTableCellProperties(e3, t3) {
          t3.cssStyle = this.parseDefaultProperties(e3, {}, null, (e4) => {
            var r3;
            switch (e4.localName) {
              case "gridSpan":
                t3.span = l.default.intAttr(e4, "val", null);
                break;
              case "vMerge":
                t3.verticalMerge = null !== (r3 = l.default.attr(e4, "val")) && void 0 !== r3 ? r3 : "continue";
                break;
              case "cnfStyle":
                t3.className = f.classNameOfCnfStyle(e4);
                break;
              default:
                return false;
            }
            return true;
          });
        }
        parseDefaultProperties(e3, r3 = null, a3 = null, s2 = null) {
          return r3 = r3 || {}, m.foreach(e3, (n2) => {
            if (!(null == s2 ? void 0 : s2(n2)))
              switch (n2.localName) {
                case "jc":
                  r3["text-align"] = f.valueOfJc(n2);
                  break;
                case "textAlignment":
                  r3["vertical-align"] = f.valueOfTextAlignment(n2);
                  break;
                case "color":
                  r3.color = m.colorAttr(n2, "val", null, t2.autos.color);
                  break;
                case "sz":
                  r3["font-size"] = r3["min-height"] = l.default.lengthAttr(n2, "val", c.LengthUsage.FontSize);
                  break;
                case "shd":
                  r3["background-color"] = m.colorAttr(n2, "fill", null, t2.autos.shd);
                  break;
                case "highlight":
                  r3["background-color"] = m.colorAttr(n2, "val", null, t2.autos.highlight);
                  break;
                case "vertAlign":
                  break;
                case "position":
                  r3.verticalAlign = l.default.lengthAttr(n2, "val", c.LengthUsage.FontSize);
                  break;
                case "tcW":
                  if (this.options.ignoreWidth)
                    break;
                case "tblW":
                  r3.width = f.valueOfSize(n2, "w");
                  break;
                case "trHeight":
                  this.parseTrHeight(n2, r3);
                  break;
                case "strike":
                  r3["text-decoration"] = l.default.boolAttr(n2, "val", true) ? "line-through" : "none";
                  break;
                case "b":
                  r3["font-weight"] = l.default.boolAttr(n2, "val", true) ? "bold" : "normal";
                  break;
                case "i":
                  r3["font-style"] = l.default.boolAttr(n2, "val", true) ? "italic" : "normal";
                  break;
                case "caps":
                  r3["text-transform"] = l.default.boolAttr(n2, "val", true) ? "uppercase" : "none";
                  break;
                case "smallCaps":
                  r3["text-transform"] = l.default.boolAttr(n2, "val", true) ? "lowercase" : "none";
                  break;
                case "u":
                  this.parseUnderline(n2, r3);
                  break;
                case "ind":
                case "tblInd":
                  this.parseIndentation(n2, r3);
                  break;
                case "rFonts":
                  this.parseFont(n2, r3);
                  break;
                case "tblBorders":
                  this.parseBorderProperties(n2, a3 || r3);
                  break;
                case "tblCellSpacing":
                  r3["border-spacing"] = f.valueOfMargin(n2), r3["border-collapse"] = "separate";
                  break;
                case "pBdr":
                  this.parseBorderProperties(n2, r3);
                  break;
                case "bdr":
                  r3.border = f.valueOfBorder(n2);
                  break;
                case "tcBorders":
                  this.parseBorderProperties(n2, r3);
                  break;
                case "vanish":
                  l.default.boolAttr(n2, "val", true) && (r3.display = "none");
                  break;
                case "kern":
                case "noWrap":
                  break;
                case "tblCellMar":
                case "tcMar":
                  this.parseMarginProperties(n2, a3 || r3);
                  break;
                case "tblLayout":
                  r3["table-layout"] = f.valueOfTblLayout(n2);
                  break;
                case "vAlign":
                  r3["vertical-align"] = f.valueOfTextAlignment(n2);
                  break;
                case "spacing":
                  "pPr" == e3.localName && this.parseSpacing(n2, r3);
                  break;
                case "wordWrap":
                  l.default.boolAttr(n2, "val") && (r3["overflow-wrap"] = "break-word");
                  break;
                case "bCs":
                case "iCs":
                case "szCs":
                case "tabs":
                case "outlineLvl":
                case "contextualSpacing":
                case "tblStyleColBandSize":
                case "tblStyleRowBandSize":
                case "webHidden":
                case "pageBreakBefore":
                case "suppressLineNumbers":
                case "keepLines":
                case "keepNext":
                case "lang":
                case "widowControl":
                case "bidi":
                case "rtl":
                case "noProof":
                  break;
                default:
                  this.options.debug && console.warn(`DOCX: Unknown document element: ${e3.localName}.${n2.localName}`);
              }
          }), r3;
        }
        parseUnderline(e3, t3) {
          var r3 = l.default.attr(e3, "val");
          if (null != r3) {
            switch (r3) {
              case "dash":
              case "dashDotDotHeavy":
              case "dashDotHeavy":
              case "dashedHeavy":
              case "dashLong":
              case "dashLongHeavy":
              case "dotDash":
              case "dotDotDash":
                t3["text-decoration-style"] = "dashed";
                break;
              case "dotted":
              case "dottedHeavy":
                t3["text-decoration-style"] = "dotted";
                break;
              case "double":
                t3["text-decoration-style"] = "double";
                break;
              case "single":
              case "thick":
              case "words":
                t3["text-decoration"] = "underline";
                break;
              case "wave":
              case "wavyDouble":
              case "wavyHeavy":
                t3["text-decoration-style"] = "wavy";
                break;
              case "none":
                t3["text-decoration"] = "none";
            }
            var a3 = m.colorAttr(e3, "color");
            a3 && (t3["text-decoration-color"] = a3);
          }
        }
        parseFont(e3, t3) {
          var r3 = [l.default.attr(e3, "ascii"), f.themeValue(e3, "asciiTheme")].filter((e4) => e4).join(", ");
          r3.length > 0 && (t3["font-family"] = r3);
        }
        parseIndentation(e3, t3) {
          var r3 = l.default.lengthAttr(e3, "firstLine"), a3 = l.default.lengthAttr(e3, "hanging"), s2 = l.default.lengthAttr(e3, "left"), n2 = l.default.lengthAttr(e3, "start"), o2 = l.default.lengthAttr(e3, "right"), i2 = l.default.lengthAttr(e3, "end");
          r3 && (t3["text-indent"] = r3), a3 && (t3["text-indent"] = `-${a3}`), (s2 || n2) && (t3["margin-left"] = s2 || n2), (o2 || i2) && (t3["margin-right"] = o2 || i2);
        }
        parseSpacing(e3, t3) {
          var r3 = l.default.lengthAttr(e3, "before"), a3 = l.default.lengthAttr(e3, "after"), s2 = l.default.intAttr(e3, "line", null), n2 = l.default.attr(e3, "lineRule");
          if (r3 && (t3["margin-top"] = r3), a3 && (t3["margin-bottom"] = a3), null !== s2)
            switch (n2) {
              case "auto":
                t3["line-height"] = `${(s2 / 240).toFixed(2)}`;
                break;
              case "atLeast":
                t3["line-height"] = `calc(100% + ${s2 / 20}pt)`;
                break;
              default:
                t3["line-height"] = t3["min-height"] = s2 / 20 + "pt";
            }
        }
        parseMarginProperties(e3, t3) {
          m.foreach(e3, (e4) => {
            switch (e4.localName) {
              case "left":
                t3["padding-left"] = f.valueOfMargin(e4);
                break;
              case "right":
                t3["padding-right"] = f.valueOfMargin(e4);
                break;
              case "top":
                t3["padding-top"] = f.valueOfMargin(e4);
                break;
              case "bottom":
                t3["padding-bottom"] = f.valueOfMargin(e4);
            }
          });
        }
        parseTrHeight(e3, t3) {
          l.default.attr(e3, "hRule"), t3.height = l.default.lengthAttr(e3, "val");
        }
        parseBorderProperties(e3, t3) {
          m.foreach(e3, (e4) => {
            switch (e4.localName) {
              case "start":
              case "left":
                t3["border-left"] = f.valueOfBorder(e4);
                break;
              case "end":
              case "right":
                t3["border-right"] = f.valueOfBorder(e4);
                break;
              case "top":
                t3["border-top"] = f.valueOfBorder(e4);
                break;
              case "bottom":
                t3["border-bottom"] = f.valueOfBorder(e4);
            }
          });
        }
      };
      const h = ["black", "blue", "cyan", "darkBlue", "darkCyan", "darkGray", "darkGreen", "darkMagenta", "darkRed", "darkYellow", "green", "lightGray", "magenta", "none", "red", "white", "yellow"];
      class m {
        static foreach(e3, t3) {
          for (var r3 = 0; r3 < e3.childNodes.length; r3++) {
            let a3 = e3.childNodes[r3];
            a3.nodeType == Node.ELEMENT_NODE && t3(a3);
          }
        }
        static colorAttr(e3, t3, r3 = null, a3 = "black") {
          var s2 = l.default.attr(e3, t3);
          if (s2)
            return "auto" == s2 ? a3 : h.includes(s2) ? s2 : `#${s2}`;
          var n2 = l.default.attr(e3, "themeColor");
          return n2 ? `var(--docx-${n2}-color)` : r3;
        }
        static sizeValue(e3, t3 = c.LengthUsage.Dxa) {
          return (0, c.convertLength)(e3.textContent, t3);
        }
      }
      class f {
        static themeValue(e3, t3) {
          var r3 = l.default.attr(e3, t3);
          return r3 ? `var(--docx-${r3}-font)` : null;
        }
        static valueOfSize(e3, t3) {
          var r3 = c.LengthUsage.Dxa;
          switch (l.default.attr(e3, "type")) {
            case "dxa":
              break;
            case "pct":
              r3 = c.LengthUsage.Percent;
              break;
            case "auto":
              return "auto";
          }
          return l.default.lengthAttr(e3, t3, r3);
        }
        static valueOfMargin(e3) {
          return l.default.lengthAttr(e3, "w");
        }
        static valueOfBorder(e3) {
          if ("nil" == l.default.attr(e3, "val"))
            return "none";
          var r3 = m.colorAttr(e3, "color");
          return `${l.default.lengthAttr(e3, "sz", c.LengthUsage.Border)} solid ${"auto" == r3 ? t2.autos.borderColor : r3}`;
        }
        static valueOfTblLayout(e3) {
          return "fixed" == l.default.attr(e3, "val") ? "fixed" : "auto";
        }
        static classNameOfCnfStyle(e3) {
          const t3 = l.default.attr(e3, "val");
          return ["first-row", "last-row", "first-col", "last-col", "odd-col", "even-col", "odd-row", "even-row", "ne-cell", "nw-cell", "se-cell", "sw-cell"].filter((e4, r3) => "1" == t3[r3]).join(" ");
        }
        static valueOfJc(e3) {
          var t3 = l.default.attr(e3, "val");
          switch (t3) {
            case "start":
            case "left":
              return "left";
            case "center":
              return "center";
            case "end":
            case "right":
              return "right";
            case "both":
              return "justify";
          }
          return t3;
        }
        static valueOfVertAlign(e3, t3 = false) {
          var r3 = l.default.attr(e3, "val");
          switch (r3) {
            case "subscript":
              return "sub";
            case "superscript":
              return t3 ? "sup" : "super";
          }
          return t3 ? null : r3;
        }
        static valueOfTextAlignment(e3) {
          var t3 = l.default.attr(e3, "val");
          switch (t3) {
            case "auto":
            case "baseline":
              return "baseline";
            case "top":
              return "top";
            case "center":
              return "middle";
            case "bottom":
              return "bottom";
          }
          return t3;
        }
        static addSize(e3, t3) {
          return null == e3 ? t3 : null == t3 ? e3 : `calc(${e3} + ${t3})`;
        }
        static classNameOftblLook(e3) {
          const t3 = l.default.hexAttr(e3, "val", 0);
          let r3 = "";
          return (l.default.boolAttr(e3, "firstRow") || 32 & t3) && (r3 += " first-row"), (l.default.boolAttr(e3, "lastRow") || 64 & t3) && (r3 += " last-row"), (l.default.boolAttr(e3, "firstColumn") || 128 & t3) && (r3 += " first-col"), (l.default.boolAttr(e3, "lastColumn") || 256 & t3) && (r3 += " last-col"), (l.default.boolAttr(e3, "noHBand") || 512 & t3) && (r3 += " no-hband"), (l.default.boolAttr(e3, "noVBand") || 1024 & t3) && (r3 += " no-vband"), r3.trim();
        }
      }
    }, 162: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.CorePropsPart = void 0;
      const a2 = r2(530), s = r2(614);
      class n extends a2.Part {
        parseXml(e3) {
          this.props = (0, s.parseCoreProps)(e3, this._package.xmlParser);
        }
      }
      t2.CorePropsPart = n;
    }, 614: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseCoreProps = void 0, t2.parseCoreProps = function(e3, t3) {
        const r2 = {};
        for (let a2 of t3.elements(e3))
          switch (a2.localName) {
            case "title":
              r2.title = a2.textContent;
              break;
            case "description":
              r2.description = a2.textContent;
              break;
            case "subject":
              r2.subject = a2.textContent;
              break;
            case "creator":
              r2.creator = a2.textContent;
              break;
            case "keywords":
              r2.keywords = a2.textContent;
              break;
            case "language":
              r2.language = a2.textContent;
              break;
            case "lastModifiedBy":
              r2.lastModifiedBy = a2.textContent;
              break;
            case "revision":
              a2.textContent && (r2.revision = parseInt(a2.textContent));
          }
        return r2;
      };
    }, 177: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.CustomPropsPart = void 0;
      const a2 = r2(530), s = r2(821);
      class n extends a2.Part {
        parseXml(e3) {
          this.props = (0, s.parseCustomProps)(e3, this._package.xmlParser);
        }
      }
      t2.CustomPropsPart = n;
    }, 821: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseCustomProps = void 0, t2.parseCustomProps = function(e3, t3) {
        return t3.elements(e3, "property").map((e4) => {
          const r2 = e4.firstChild;
          return { formatId: t3.attr(e4, "fmtid"), name: t3.attr(e4, "name"), type: r2.nodeName, value: r2.textContent };
        });
      };
    }, 665: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.ExtendedPropsPart = void 0;
      const a2 = r2(530), s = r2(668);
      class n extends a2.Part {
        parseXml(e3) {
          this.props = (0, s.parseExtendedProps)(e3, this._package.xmlParser);
        }
      }
      t2.ExtendedPropsPart = n;
    }, 668: (e2, t2) => {
      function r2(e3) {
        if (void 0 !== e3)
          return parseInt(e3);
      }
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseExtendedProps = void 0, t2.parseExtendedProps = function(e3, t3) {
        const a2 = {};
        for (let s of t3.elements(e3))
          switch (s.localName) {
            case "Template":
              a2.template = s.textContent;
              break;
            case "Pages":
              a2.pages = r2(s.textContent);
              break;
            case "Words":
              a2.words = r2(s.textContent);
              break;
            case "Characters":
              a2.characters = r2(s.textContent);
              break;
            case "Application":
              a2.application = s.textContent;
              break;
            case "Lines":
              a2.lines = r2(s.textContent);
              break;
            case "Paragraphs":
              a2.paragraphs = r2(s.textContent);
              break;
            case "Company":
              a2.company = s.textContent;
              break;
            case "AppVersion":
              a2.appVersion = s.textContent;
          }
        return a2;
      };
    }, 172: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseBookmarkEnd = t2.parseBookmarkStart = void 0;
      const a2 = r2(120);
      t2.parseBookmarkStart = function(e3, t3) {
        return { type: a2.DomType.BookmarkStart, id: t3.attr(e3, "id"), name: t3.attr(e3, "name"), colFirst: t3.intAttr(e3, "colFirst"), colLast: t3.intAttr(e3, "colLast") };
      }, t2.parseBookmarkEnd = function(e3, t3) {
        return { type: a2.DomType.BookmarkEnd, id: t3.attr(e3, "id") };
      };
    }, 191: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseBorders = t2.parseBorder = void 0;
      const a2 = r2(149);
      function s(e3, t3) {
        return { type: t3.attr(e3, "val"), color: t3.attr(e3, "color"), size: t3.lengthAttr(e3, "sz", a2.LengthUsage.Border), offset: t3.lengthAttr(e3, "space", a2.LengthUsage.Point), frame: t3.boolAttr(e3, "frame"), shadow: t3.boolAttr(e3, "shadow") };
      }
      t2.parseBorder = s, t2.parseBorders = function(e3, t3) {
        var r3 = {};
        for (let a3 of t3.elements(e3))
          switch (a3.localName) {
            case "left":
              r3.left = s(a3, t3);
              break;
            case "top":
              r3.top = s(a3, t3);
              break;
            case "right":
              r3.right = s(a3, t3);
              break;
            case "bottom":
              r3.bottom = s(a3, t3);
          }
        return r3;
      };
    }, 149: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseCommonProperty = t2.convertPercentage = t2.convertBoolean = t2.convertLength = t2.LengthUsage = t2.ns = void 0, t2.ns = { wordml: "http://schemas.openxmlformats.org/wordprocessingml/2006/main", drawingml: "http://schemas.openxmlformats.org/drawingml/2006/main", picture: "http://schemas.openxmlformats.org/drawingml/2006/picture", compatibility: "http://schemas.openxmlformats.org/markup-compatibility/2006", math: "http://schemas.openxmlformats.org/officeDocument/2006/math" }, t2.LengthUsage = { Dxa: { mul: 0.05, unit: "pt" }, Emu: { mul: 1 / 12700, unit: "pt" }, FontSize: { mul: 0.5, unit: "pt" }, Border: { mul: 0.125, unit: "pt" }, Point: { mul: 1, unit: "pt" }, Percent: { mul: 0.02, unit: "%" }, LineHeight: { mul: 1 / 240, unit: "" }, VmlEmu: { mul: 1 / 12700, unit: "" } }, t2.convertLength = function(e3, r2 = t2.LengthUsage.Dxa) {
        return null == e3 || /.+(p[xt]|[%])$/.test(e3) ? e3 : `${(parseInt(e3) * r2.mul).toFixed(2)}${r2.unit}`;
      }, t2.convertBoolean = function(e3, t3 = false) {
        switch (e3) {
          case "1":
          case "on":
          case "true":
            return true;
          case "0":
          case "off":
          case "false":
            return false;
          default:
            return t3;
        }
      }, t2.convertPercentage = function(e3) {
        return e3 ? parseInt(e3) / 100 : null;
      }, t2.parseCommonProperty = function(e3, r2, a2) {
        if (e3.namespaceURI != t2.ns.wordml)
          return false;
        switch (e3.localName) {
          case "color":
            r2.color = a2.attr(e3, "val");
            break;
          case "sz":
            r2.fontSize = a2.lengthAttr(e3, "val", t2.LengthUsage.FontSize);
            break;
          default:
            return false;
        }
        return true;
      };
    }, 448: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.DocumentPart = void 0;
      const a2 = r2(530);
      class s extends a2.Part {
        constructor(e3, t3, r3) {
          super(e3, t3), this._documentParser = r3;
        }
        parseXml(e3) {
          this.body = this._documentParser.parseDocumentFile(e3);
        }
      }
      t2.DocumentPart = s;
    }, 120: (e2, t2) => {
      var r2;
      Object.defineProperty(t2, "__esModule", { value: true }), t2.DomType = void 0, function(e3) {
        e3.Document = "document", e3.Paragraph = "paragraph", e3.Run = "run", e3.Break = "break", e3.NoBreakHyphen = "noBreakHyphen", e3.Table = "table", e3.Row = "row", e3.Cell = "cell", e3.Hyperlink = "hyperlink", e3.Drawing = "drawing", e3.Image = "image", e3.Text = "text", e3.Tab = "tab", e3.Symbol = "symbol", e3.BookmarkStart = "bookmarkStart", e3.BookmarkEnd = "bookmarkEnd", e3.Footer = "footer", e3.Header = "header", e3.FootnoteReference = "footnoteReference", e3.EndnoteReference = "endnoteReference", e3.Footnote = "footnote", e3.Endnote = "endnote", e3.SimpleField = "simpleField", e3.ComplexField = "complexField", e3.Instruction = "instruction", e3.VmlPicture = "vmlPicture", e3.MmlMath = "mmlMath", e3.MmlMathParagraph = "mmlMathParagraph", e3.MmlFraction = "mmlFraction", e3.MmlNumerator = "mmlNumerator", e3.MmlDenominator = "mmlDenominator", e3.MmlRadical = "mmlRadical", e3.MmlBase = "mmlBase", e3.MmlDegree = "mmlDegree", e3.MmlSuperscript = "mmlSuperscript", e3.MmlSubscript = "mmlSubscript", e3.MmlSubArgument = "mmlSubArgument", e3.MmlSuperArgument = "mmlSuperArgument", e3.MmlNary = "mmlNary", e3.MmlDelimiter = "mmlDelimiter", e3.MmlRun = "mmlRun", e3.VmlElement = "vmlElement", e3.Inserted = "inserted", e3.Deleted = "deleted", e3.DeletedText = "deletedText";
      }(r2 || (t2.DomType = r2 = {}));
    }, 931: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseLineSpacing = void 0, t2.parseLineSpacing = function(e3, t3) {
        return { before: t3.lengthAttr(e3, "before"), after: t3.lengthAttr(e3, "after"), line: t3.intAttr(e3, "line"), lineRule: t3.attr(e3, "lineRule") };
      };
    }, 109: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseNumbering = t2.parseTabs = t2.parseParagraphProperty = t2.parseParagraphProperties = void 0;
      const a2 = r2(149), s = r2(59), n = r2(931), l = r2(488);
      function o(e3, t3, r3) {
        if (e3.namespaceURI != a2.ns.wordml)
          return false;
        if ((0, a2.parseCommonProperty)(e3, t3, r3))
          return true;
        switch (e3.localName) {
          case "tabs":
            t3.tabs = i(e3, r3);
            break;
          case "sectPr":
            t3.sectionProps = (0, s.parseSectionProperties)(e3, r3);
            break;
          case "numPr":
            t3.numbering = c(e3, r3);
            break;
          case "spacing":
            return t3.lineSpacing = (0, n.parseLineSpacing)(e3, r3), false;
          case "textAlignment":
            return t3.textAlignment = r3.attr(e3, "val"), false;
          case "keepNext":
            t3.keepLines = r3.boolAttr(e3, "val", true);
            break;
          case "keepNext":
            t3.keepNext = r3.boolAttr(e3, "val", true);
            break;
          case "pageBreakBefore":
            t3.pageBreakBefore = r3.boolAttr(e3, "val", true);
            break;
          case "outlineLvl":
            t3.outlineLevel = r3.intAttr(e3, "val");
            break;
          case "pStyle":
            t3.styleName = r3.attr(e3, "val");
            break;
          case "rPr":
            t3.runProps = (0, l.parseRunProperties)(e3, r3);
            break;
          default:
            return false;
        }
        return true;
      }
      function i(e3, t3) {
        return t3.elements(e3, "tab").map((e4) => ({ position: t3.lengthAttr(e4, "pos"), leader: t3.attr(e4, "leader"), style: t3.attr(e4, "val") }));
      }
      function c(e3, t3) {
        var r3 = {};
        for (let a3 of t3.elements(e3))
          switch (a3.localName) {
            case "numId":
              r3.id = t3.attr(a3, "val");
              break;
            case "ilvl":
              r3.level = t3.intAttr(a3, "val");
          }
        return r3;
      }
      t2.parseParagraphProperties = function(e3, t3) {
        let r3 = {};
        for (let a3 of t3.elements(e3))
          o(a3, r3, t3);
        return r3;
      }, t2.parseParagraphProperty = o, t2.parseTabs = i, t2.parseNumbering = c;
    }, 488: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseRunProperty = t2.parseRunProperties = void 0;
      const a2 = r2(149);
      function s(e3, t3, r3) {
        return !!(0, a2.parseCommonProperty)(e3, t3, r3);
      }
      t2.parseRunProperties = function(e3, t3) {
        let r3 = {};
        for (let a3 of t3.elements(e3))
          s(a3, r3, t3);
        return r3;
      }, t2.parseRunProperty = s;
    }, 59: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseSectionProperties = t2.SectionType = void 0;
      const a2 = r2(472), s = r2(191);
      var n;
      function l(e3, t3) {
        return { numberOfColumns: t3.intAttr(e3, "num"), space: t3.lengthAttr(e3, "space"), separator: t3.boolAttr(e3, "sep"), equalWidth: t3.boolAttr(e3, "equalWidth", true), columns: t3.elements(e3, "col").map((e4) => ({ width: t3.lengthAttr(e4, "w"), space: t3.lengthAttr(e4, "space") })) };
      }
      function o(e3, t3) {
        return { chapSep: t3.attr(e3, "chapSep"), chapStyle: t3.attr(e3, "chapStyle"), format: t3.attr(e3, "fmt"), start: t3.intAttr(e3, "start") };
      }
      function i(e3, t3) {
        return { id: t3.attr(e3, "id"), type: t3.attr(e3, "type") };
      }
      !function(e3) {
        e3.Continuous = "continuous", e3.NextPage = "nextPage", e3.NextColumn = "nextColumn", e3.EvenPage = "evenPage", e3.OddPage = "oddPage";
      }(n || (t2.SectionType = n = {})), t2.parseSectionProperties = function(e3, t3 = a2.default) {
        var r3, n2, c = {};
        for (let a3 of t3.elements(e3))
          switch (a3.localName) {
            case "pgSz":
              c.pageSize = { width: t3.lengthAttr(a3, "w"), height: t3.lengthAttr(a3, "h"), orientation: t3.attr(a3, "orient") };
              break;
            case "type":
              c.type = t3.attr(a3, "val");
              break;
            case "pgMar":
              c.pageMargins = { left: t3.lengthAttr(a3, "left"), right: t3.lengthAttr(a3, "right"), top: t3.lengthAttr(a3, "top"), bottom: t3.lengthAttr(a3, "bottom"), header: t3.lengthAttr(a3, "header"), footer: t3.lengthAttr(a3, "footer"), gutter: t3.lengthAttr(a3, "gutter") };
              break;
            case "cols":
              c.columns = l(a3, t3);
              break;
            case "headerReference":
              (null !== (r3 = c.headerRefs) && void 0 !== r3 ? r3 : c.headerRefs = []).push(i(a3, t3));
              break;
            case "footerReference":
              (null !== (n2 = c.footerRefs) && void 0 !== n2 ? n2 : c.footerRefs = []).push(i(a3, t3));
              break;
            case "titlePg":
              c.titlePage = t3.boolAttr(a3, "val", true);
              break;
            case "pgBorders":
              c.pageBorders = (0, s.parseBorders)(a3, t3);
              break;
            case "pgNumType":
              c.pageNumber = o(a3, t3);
          }
        return c;
      };
    }, 667: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.renderAsync = t2.praseAsync = t2.defaultOptions = void 0;
      const a2 = r2(213), s = r2(168), n = r2(932);
      t2.defaultOptions = { ignoreHeight: false, ignoreWidth: false, ignoreFonts: false, breakPages: true, debug: false, experimental: false, className: "docx", inWrapper: true, trimXmlDeclaration: true, ignoreLastRenderedPageBreak: true, renderHeaders: true, renderFooters: true, renderFootnotes: true, renderEndnotes: true, useBase64URL: false, useMathMLPolyfill: false, renderChanges: false }, t2.praseAsync = function(e3, r3 = null) {
        const n2 = Object.assign(Object.assign({}, t2.defaultOptions), r3);
        return a2.WordDocument.load(e3, new s.DocumentParser(n2), n2);
      }, t2.renderAsync = async function(e3, r3, l = null, o = null) {
        const i = Object.assign(Object.assign({}, t2.defaultOptions), o), c = new n.HtmlRenderer(window.document), u = await a2.WordDocument.load(e3, new s.DocumentParser(i), i);
        return c.render(u, r3, l, i), u;
      };
    }, 380: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.FontTablePart = void 0;
      const a2 = r2(530), s = r2(512);
      class n extends a2.Part {
        parseXml(e3) {
          this.fonts = (0, s.parseFonts)(e3, this._package.xmlParser);
        }
      }
      t2.FontTablePart = n;
    }, 512: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseEmbedFontRef = t2.parseFont = t2.parseFonts = void 0;
      const r2 = { embedRegular: "regular", embedBold: "bold", embedItalic: "italic", embedBoldItalic: "boldItalic" };
      function a2(e3, t3) {
        let r3 = { name: t3.attr(e3, "name"), embedFontRefs: [] };
        for (let a3 of t3.elements(e3))
          switch (a3.localName) {
            case "family":
              r3.family = t3.attr(a3, "val");
              break;
            case "altName":
              r3.altName = t3.attr(a3, "val");
              break;
            case "embedRegular":
            case "embedBold":
            case "embedItalic":
            case "embedBoldItalic":
              r3.embedFontRefs.push(s(a3, t3));
          }
        return r3;
      }
      function s(e3, t3) {
        return { id: t3.attr(e3, "id"), key: t3.attr(e3, "fontKey"), type: r2[e3.localName] };
      }
      t2.parseFonts = function(e3, t3) {
        return t3.elements(e3).map((e4) => a2(e4, t3));
      }, t2.parseFont = a2, t2.parseEmbedFontRef = s;
    }, 984: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.WmlFooter = t2.WmlHeader = void 0;
      const a2 = r2(120);
      t2.WmlHeader = class {
        constructor() {
          this.type = a2.DomType.Header, this.children = [], this.cssStyle = {};
        }
      }, t2.WmlFooter = class {
        constructor() {
          this.type = a2.DomType.Footer, this.children = [], this.cssStyle = {};
        }
      };
    }, 985: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.FooterPart = t2.HeaderPart = t2.BaseHeaderFooterPart = void 0;
      const a2 = r2(530), s = r2(984);
      class n extends a2.Part {
        constructor(e3, t3, r3) {
          super(e3, t3), this._documentParser = r3;
        }
        parseXml(e3) {
          this.rootElement = this.createRootElement(), this.rootElement.children = this._documentParser.parseBodyElements(e3);
        }
      }
      t2.BaseHeaderFooterPart = n, t2.HeaderPart = class extends n {
        createRootElement() {
          return new s.WmlHeader();
        }
      }, t2.FooterPart = class extends n {
        createRootElement() {
          return new s.WmlFooter();
        }
      };
    }, 932: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.HtmlRenderer = void 0;
      const a2 = r2(120), s = r2(593), n = r2(630), l = r2(438), o = "http://www.w3.org/1998/Math/MathML";
      function i(e3, t3, r3) {
        return u(void 0, e3, t3, r3);
      }
      function c(e3, t3, r3) {
        return u("http://www.w3.org/2000/svg", e3, t3, r3);
      }
      function u(e3, t3, r3, a3) {
        var s2 = e3 ? document.createElementNS(e3, t3) : document.createElement(t3);
        return Object.assign(s2, r3), a3 && d(s2, a3), s2;
      }
      function p(e3) {
        e3.innerHTML = "";
      }
      function d(e3, t3) {
        t3.forEach((t4) => e3.appendChild((0, s.isString)(t4) ? document.createTextNode(t4) : t4));
      }
      function h(e3) {
        return i("style", { innerHTML: e3 });
      }
      function m(e3, t3) {
        e3.appendChild(document.createComment(t3));
      }
      t2.HtmlRenderer = class {
        constructor(e3) {
          this.htmlDocument = e3, this.className = "docx", this.styleMap = {}, this.currentPart = null, this.tableVerticalMerges = [], this.currentVerticalMerge = null, this.tableCellPositions = [], this.currentCellPosition = null, this.footnoteMap = {}, this.endnoteMap = {}, this.currentEndnoteIds = [], this.usedHederFooterParts = [], this.currentTabs = [], this.tabsTimeout = 0, this.createElement = i;
        }
        render(e3, t3, r3 = null, a3) {
          var n2;
          this.document = e3, this.options = a3, this.className = a3.className, this.rootSelector = a3.inWrapper ? `.${this.className}-wrapper` : ":root", this.styleMap = null, p(r3 = r3 || t3), p(t3), m(r3, "docxjs library predefined styles"), r3.appendChild(this.renderDefaultStyle()), !window.MathMLElement && a3.useMathMLPolyfill && (m(r3, "docxjs mathml polyfill styles"), r3.appendChild(h(l.default))), e3.themePart && (m(r3, "docxjs document theme values"), this.renderTheme(e3.themePart, r3)), null != e3.stylesPart && (this.styleMap = this.processStyles(e3.stylesPart.styles), m(r3, "docxjs document styles"), r3.appendChild(this.renderStyles(e3.stylesPart.styles))), e3.numberingPart && (this.prodessNumberings(e3.numberingPart.domNumberings), m(r3, "docxjs document numbering styles"), r3.appendChild(this.renderNumbering(e3.numberingPart.domNumberings, r3))), e3.footnotesPart && (this.footnoteMap = (0, s.keyBy)(e3.footnotesPart.notes, (e4) => e4.id)), e3.endnotesPart && (this.endnoteMap = (0, s.keyBy)(e3.endnotesPart.notes, (e4) => e4.id)), e3.settingsPart && (this.defaultTabSize = null === (n2 = e3.settingsPart.settings) || void 0 === n2 ? void 0 : n2.defaultTabStop), !a3.ignoreFonts && e3.fontTablePart && this.renderFontTable(e3.fontTablePart, r3);
          var o2 = this.renderSections(e3.documentPart.body);
          this.options.inWrapper ? t3.appendChild(this.renderWrapper(o2)) : d(t3, o2), this.refreshTabStops();
        }
        renderTheme(e3, t3) {
          var r3, a3;
          const s2 = {}, n2 = null === (r3 = e3.theme) || void 0 === r3 ? void 0 : r3.fontScheme;
          n2 && (n2.majorFont && (s2["--docx-majorHAnsi-font"] = n2.majorFont.latinTypeface), n2.minorFont && (s2["--docx-minorHAnsi-font"] = n2.minorFont.latinTypeface));
          const l2 = null === (a3 = e3.theme) || void 0 === a3 ? void 0 : a3.colorScheme;
          if (l2)
            for (let [e4, t4] of Object.entries(l2.colors))
              s2[`--docx-${e4}-color`] = `#${t4}`;
          const o2 = this.styleToString(`.${this.className}`, s2);
          t3.appendChild(h(o2));
        }
        renderFontTable(e3, t3) {
          for (let r3 of e3.fonts)
            for (let e4 of r3.embedFontRefs)
              this.document.loadFont(e4.id, e4.key).then((a3) => {
                const s2 = { "font-family": r3.name, src: `url(${a3})` };
                "bold" != e4.type && "boldItalic" != e4.type || (s2["font-weight"] = "bold"), "italic" != e4.type && "boldItalic" != e4.type || (s2["font-style"] = "italic"), m(t3, `docxjs ${r3.name} font`);
                const n2 = this.styleToString("@font-face", s2);
                t3.appendChild(h(n2)), this.refreshTabStops();
              });
        }
        processStyleName(e3) {
          return e3 ? `${this.className}_${(0, s.escapeClassName)(e3)}` : this.className;
        }
        processStyles(e3) {
          const t3 = (0, s.keyBy)(e3.filter((e4) => null != e4.id), (e4) => e4.id);
          for (const a3 of e3.filter((e4) => e4.basedOn)) {
            var r3 = t3[a3.basedOn];
            if (r3) {
              a3.paragraphProps = (0, s.mergeDeep)(a3.paragraphProps, r3.paragraphProps), a3.runProps = (0, s.mergeDeep)(a3.runProps, r3.runProps);
              for (const e4 of r3.styles) {
                const t4 = a3.styles.find((t5) => t5.target == e4.target);
                t4 ? this.copyStyleProperties(e4.values, t4.values) : a3.styles.push(Object.assign(Object.assign({}, e4), { values: Object.assign({}, e4.values) }));
              }
            } else
              this.options.debug && console.warn(`Can't find base style ${a3.basedOn}`);
          }
          for (let t4 of e3)
            t4.cssName = this.processStyleName(t4.id);
          return t3;
        }
        prodessNumberings(e3) {
          var t3;
          for (let r3 of e3.filter((e4) => e4.pStyleName)) {
            const e4 = this.findStyle(r3.pStyleName);
            (null === (t3 = null == e4 ? void 0 : e4.paragraphProps) || void 0 === t3 ? void 0 : t3.numbering) && (e4.paragraphProps.numbering.level = r3.level);
          }
        }
        processElement(e3) {
          if (e3.children)
            for (var t3 of e3.children)
              t3.parent = e3, t3.type == a2.DomType.Table ? this.processTable(t3) : this.processElement(t3);
        }
        processTable(e3) {
          for (var t3 of e3.children)
            for (var r3 of t3.children)
              r3.cssStyle = this.copyStyleProperties(e3.cellStyle, r3.cssStyle, ["border-left", "border-right", "border-top", "border-bottom", "padding-left", "padding-right", "padding-top", "padding-bottom"]), this.processElement(r3);
        }
        copyStyleProperties(e3, t3, r3 = null) {
          if (!e3)
            return t3;
          for (var a3 of (null == t3 && (t3 = {}), null == r3 && (r3 = Object.getOwnPropertyNames(e3)), r3))
            e3.hasOwnProperty(a3) && !t3.hasOwnProperty(a3) && (t3[a3] = e3[a3]);
          return t3;
        }
        createSection(e3, t3) {
          var r3 = this.createElement("section", { className: e3 });
          return t3 && (t3.pageMargins && (r3.style.paddingLeft = t3.pageMargins.left, r3.style.paddingRight = t3.pageMargins.right, r3.style.paddingTop = t3.pageMargins.top, r3.style.paddingBottom = t3.pageMargins.bottom), t3.pageSize && (this.options.ignoreWidth || (r3.style.width = t3.pageSize.width), this.options.ignoreHeight || (r3.style.minHeight = t3.pageSize.height)), t3.columns && t3.columns.numberOfColumns && (r3.style.columnCount = `${t3.columns.numberOfColumns}`, r3.style.columnGap = t3.columns.space, t3.columns.separator && (r3.style.columnRule = "1px solid black"))), r3;
        }
        renderSections(e3) {
          const t3 = [];
          this.processElement(e3);
          const r3 = this.splitBySection(e3.children);
          let a3 = null;
          for (let n2 = 0, l2 = r3.length; n2 < l2; n2++) {
            this.currentFootnoteIds = [];
            const o2 = r3[n2], i2 = o2.sectProps || e3.props, c2 = this.createSection(this.className, i2);
            this.renderStyleValues(e3.cssStyle, c2), this.options.renderHeaders && this.renderHeaderFooter(i2.headerRefs, i2, t3.length, a3 != i2, c2);
            var s2 = this.createElement("article");
            this.renderElements(o2.elements, s2), c2.appendChild(s2), this.options.renderFootnotes && this.renderNotes(this.currentFootnoteIds, this.footnoteMap, c2), this.options.renderEndnotes && n2 == l2 - 1 && this.renderNotes(this.currentEndnoteIds, this.endnoteMap, c2), this.options.renderFooters && this.renderHeaderFooter(i2.footerRefs, i2, t3.length, a3 != i2, c2), t3.push(c2), a3 = i2;
          }
          return t3;
        }
        renderHeaderFooter(e3, t3, r3, a3, s2) {
          var n2, l2;
          if (e3) {
            var o2 = null !== (l2 = null !== (n2 = t3.titlePage && a3 ? e3.find((e4) => "first" == e4.type) : null) && void 0 !== n2 ? n2 : r3 % 2 == 1 ? e3.find((e4) => "even" == e4.type) : null) && void 0 !== l2 ? l2 : e3.find((e4) => "default" == e4.type), i2 = o2 && this.document.findPartByRelId(o2.id, this.document.documentPart);
            i2 && (this.currentPart = i2, this.usedHederFooterParts.includes(i2.path) || (this.processElement(i2.rootElement), this.usedHederFooterParts.push(i2.path)), this.renderElements([i2.rootElement], s2), this.currentPart = null);
          }
        }
        isPageBreakElement(e3) {
          return e3.type == a2.DomType.Break && ("lastRenderedPageBreak" == e3.break ? !this.options.ignoreLastRenderedPageBreak : "page" == e3.break);
        }
        splitBySection(e3) {
          var t3, r3 = { sectProps: null, elements: [] }, s2 = [r3];
          for (let u3 of e3) {
            if (u3.type == a2.DomType.Paragraph) {
              const e4 = this.findStyle(u3.styleName);
              (null === (t3 = null == e4 ? void 0 : e4.paragraphProps) || void 0 === t3 ? void 0 : t3.pageBreakBefore) && (r3.sectProps = n2, r3 = { sectProps: null, elements: [] }, s2.push(r3));
            }
            if (r3.elements.push(u3), u3.type == a2.DomType.Paragraph) {
              const e4 = u3;
              var n2 = e4.sectionProps, l2 = -1, o2 = -1;
              if (this.options.breakPages && e4.children && (l2 = e4.children.findIndex((e5) => {
                var t4, r4;
                return -1 != (o2 = null !== (r4 = null === (t4 = e5.children) || void 0 === t4 ? void 0 : t4.findIndex(this.isPageBreakElement.bind(this))) && void 0 !== r4 ? r4 : -1);
              })), (n2 || -1 != l2) && (r3.sectProps = n2, r3 = { sectProps: null, elements: [] }, s2.push(r3)), -1 != l2) {
                let t4 = e4.children[l2], a3 = o2 < t4.children.length - 1;
                if (l2 < e4.children.length - 1 || a3) {
                  var i2 = u3.children, c2 = Object.assign(Object.assign({}, u3), { children: i2.slice(l2) });
                  if (u3.children = i2.slice(0, l2), r3.elements.push(c2), a3) {
                    let e5 = t4.children, r4 = Object.assign(Object.assign({}, t4), { children: e5.slice(0, o2) });
                    u3.children.push(r4), t4.children = e5.slice(o2);
                  }
                }
              }
            }
          }
          let u2 = null;
          for (let e4 = s2.length - 1; e4 >= 0; e4--)
            null == s2[e4].sectProps ? s2[e4].sectProps = u2 : u2 = s2[e4].sectProps;
          return s2;
        }
        renderWrapper(e3) {
          return this.createElement("div", { className: `${this.className}-wrapper` }, e3);
        }
        renderDefaultStyle() {
          var e3 = this.className;
          return h(`
.${e3}-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; } 
.${e3}-wrapper>section.${e3} { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; }
.${e3} { color: black; }
section.${e3} { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; }
section.${e3}>article { margin-bottom: auto; }
.${e3} table { border-collapse: collapse; }
.${e3} table td, .${e3} table th { vertical-align: top; }
.${e3} p { margin: 0pt; min-height: 1em; }
.${e3} span { white-space: pre-wrap; overflow-wrap: break-word; }
.${e3} a { color: inherit; text-decoration: inherit; }
`);
        }
        renderNumbering(e3, t3) {
          var r3 = "", a3 = [];
          for (var s2 of e3) {
            var n2 = `p.${this.numberingClass(s2.id, s2.level)}`, l2 = "none";
            if (s2.bullet) {
              let e4 = `--${this.className}-${s2.bullet.src}`.toLowerCase();
              r3 += this.styleToString(`${n2}:before`, { content: "' '", display: "inline-block", background: `var(${e4})` }, s2.bullet.style), this.document.loadNumberingImage(s2.bullet.src).then((r4) => {
                var a4 = `${this.rootSelector} { ${e4}: url(${r4}) }`;
                t3.appendChild(h(a4));
              });
            } else if (s2.levelText) {
              let e4 = this.numberingCounter(s2.id, s2.level);
              s2.level > 0 ? r3 += this.styleToString(`p.${this.numberingClass(s2.id, s2.level - 1)}`, { "counter-reset": e4 }) : a3.push(e4), r3 += this.styleToString(`${n2}:before`, Object.assign({ content: this.levelTextToContent(s2.levelText, s2.suff, s2.id, this.numFormatToCssValue(s2.format)), "counter-increment": e4 }, s2.rStyle));
            } else
              l2 = this.numFormatToCssValue(s2.format);
            r3 += this.styleToString(n2, Object.assign({ display: "list-item", "list-style-position": "inside", "list-style-type": l2 }, s2.pStyle));
          }
          return a3.length > 0 && (r3 += this.styleToString(this.rootSelector, { "counter-reset": a3.join(" ") })), h(r3);
        }
        renderStyles(e3) {
          var t3, r3 = "";
          const a3 = this.styleMap, n2 = (0, s.keyBy)(e3.filter((e4) => e4.isDefault), (e4) => e4.target);
          for (const s2 of e3) {
            var l2 = s2.styles;
            if (s2.linked) {
              var o2 = s2.linked && a3[s2.linked];
              o2 ? l2 = l2.concat(o2.styles) : this.options.debug && console.warn(`Can't find linked style ${s2.linked}`);
            }
            for (const e4 of l2) {
              var i2 = `${null !== (t3 = s2.target) && void 0 !== t3 ? t3 : ""}.${s2.cssName}`;
              s2.target != e4.target && (i2 += ` ${e4.target}`), n2[s2.target] == s2 && (i2 = `.${this.className} ${s2.target}, ` + i2), r3 += this.styleToString(i2, e4.values);
            }
          }
          return h(r3);
        }
        renderNotes(e3, t3, r3) {
          var a3 = e3.map((e4) => t3[e4]).filter((e4) => e4);
          if (a3.length > 0) {
            var s2 = this.createElement("ol", null, this.renderElements(a3));
            r3.appendChild(s2);
          }
        }
        renderElement(e3) {
          switch (e3.type) {
            case a2.DomType.Paragraph:
              return this.renderParagraph(e3);
            case a2.DomType.BookmarkStart:
              return this.renderBookmarkStart(e3);
            case a2.DomType.BookmarkEnd:
              return null;
            case a2.DomType.Run:
              return this.renderRun(e3);
            case a2.DomType.Table:
              return this.renderTable(e3);
            case a2.DomType.Row:
              return this.renderTableRow(e3);
            case a2.DomType.Cell:
              return this.renderTableCell(e3);
            case a2.DomType.Hyperlink:
              return this.renderHyperlink(e3);
            case a2.DomType.Drawing:
              return this.renderDrawing(e3);
            case a2.DomType.Image:
              return this.renderImage(e3);
            case a2.DomType.Text:
            case a2.DomType.Text:
              return this.renderText(e3);
            case a2.DomType.DeletedText:
              return this.renderDeletedText(e3);
            case a2.DomType.Tab:
              return this.renderTab(e3);
            case a2.DomType.Symbol:
              return this.renderSymbol(e3);
            case a2.DomType.Break:
              return this.renderBreak(e3);
            case a2.DomType.Footer:
              return this.renderContainer(e3, "footer");
            case a2.DomType.Header:
              return this.renderContainer(e3, "header");
            case a2.DomType.Footnote:
            case a2.DomType.Endnote:
              return this.renderContainer(e3, "li");
            case a2.DomType.FootnoteReference:
              return this.renderFootnoteReference(e3);
            case a2.DomType.EndnoteReference:
              return this.renderEndnoteReference(e3);
            case a2.DomType.NoBreakHyphen:
              return this.createElement("wbr");
            case a2.DomType.VmlPicture:
              return this.renderVmlPicture(e3);
            case a2.DomType.VmlElement:
              return this.renderVmlElement(e3);
            case a2.DomType.MmlMath:
              return this.renderContainerNS(e3, o, "math", { xmlns: o });
            case a2.DomType.MmlMathParagraph:
              return this.renderContainer(e3, "span");
            case a2.DomType.MmlFraction:
              return this.renderContainerNS(e3, o, "mfrac");
            case a2.DomType.MmlNumerator:
            case a2.DomType.MmlDenominator:
              return this.renderContainerNS(e3, o, "mrow");
            case a2.DomType.MmlRadical:
              return this.renderMmlRadical(e3);
            case a2.DomType.MmlDegree:
              return this.renderContainerNS(e3, o, "mn");
            case a2.DomType.MmlSuperscript:
              return this.renderContainerNS(e3, o, "msup");
            case a2.DomType.MmlSubscript:
              return this.renderContainerNS(e3, o, "msub");
            case a2.DomType.MmlBase:
              return this.renderContainerNS(e3, o, "mrow");
            case a2.DomType.MmlSuperArgument:
            case a2.DomType.MmlSubArgument:
              return this.renderContainerNS(e3, o, "mn");
            case a2.DomType.MmlDelimiter:
              return this.renderMmlDelimiter(e3);
            case a2.DomType.MmlRun:
              return this.renderMmlRun(e3);
            case a2.DomType.MmlNary:
              return this.renderMmlNary(e3);
            case a2.DomType.Inserted:
              return this.renderInserted(e3);
            case a2.DomType.Deleted:
              return this.renderDeleted(e3);
          }
          return null;
        }
        renderChildren(e3, t3) {
          return this.renderElements(e3.children, t3);
        }
        renderElements(e3, t3) {
          if (null == e3)
            return null;
          var r3 = e3.flatMap((e4) => this.renderElement(e4)).filter((e4) => null != e4);
          return t3 && d(t3, r3), r3;
        }
        renderContainer(e3, t3, r3) {
          return this.createElement(t3, r3, this.renderChildren(e3));
        }
        renderContainerNS(e3, t3, r3, a3) {
          return u(t3, r3, a3, this.renderChildren(e3));
        }
        renderParagraph(e3) {
          var t3, r3, a3, s2, n2 = this.createElement("p");
          const l2 = this.findStyle(e3.styleName);
          null !== (t3 = e3.tabs) && void 0 !== t3 || (e3.tabs = null === (r3 = null == l2 ? void 0 : l2.paragraphProps) || void 0 === r3 ? void 0 : r3.tabs), this.renderClass(e3, n2), this.renderChildren(e3, n2), this.renderStyleValues(e3.cssStyle, n2), this.renderCommonProperties(n2.style, e3);
          const o2 = null !== (a3 = e3.numbering) && void 0 !== a3 ? a3 : null === (s2 = null == l2 ? void 0 : l2.paragraphProps) || void 0 === s2 ? void 0 : s2.numbering;
          return o2 && n2.classList.add(this.numberingClass(o2.id, o2.level)), n2;
        }
        renderRunProperties(e3, t3) {
          this.renderCommonProperties(e3, t3);
        }
        renderCommonProperties(e3, t3) {
          null != t3 && (t3.color && (e3.color = t3.color), t3.fontSize && (e3["font-size"] = t3.fontSize));
        }
        renderHyperlink(e3) {
          var t3 = this.createElement("a");
          if (this.renderChildren(e3, t3), this.renderStyleValues(e3.cssStyle, t3), e3.href)
            t3.href = e3.href;
          else if (e3.id) {
            const r3 = this.document.documentPart.rels.find((t4) => t4.id == e3.id && "External" === t4.targetMode);
            t3.href = null == r3 ? void 0 : r3.target;
          }
          return t3;
        }
        renderDrawing(e3) {
          var t3 = this.createElement("div");
          return t3.style.display = "inline-block", t3.style.position = "relative", t3.style.textIndent = "0px", this.renderChildren(e3, t3), this.renderStyleValues(e3.cssStyle, t3), t3;
        }
        renderImage(e3) {
          let t3 = this.createElement("img");
          return this.renderStyleValues(e3.cssStyle, t3), this.document && this.document.loadDocumentImage(e3.src, this.currentPart).then((e4) => {
            t3.src = e4;
          }), t3;
        }
        renderText(e3) {
          return this.htmlDocument.createTextNode(e3.text);
        }
        renderDeletedText(e3) {
          return this.options.renderEndnotes ? this.htmlDocument.createTextNode(e3.text) : null;
        }
        renderBreak(e3) {
          return "textWrapping" == e3.break ? this.createElement("br") : null;
        }
        renderInserted(e3) {
          return this.options.renderChanges ? this.renderContainer(e3, "ins") : this.renderChildren(e3);
        }
        renderDeleted(e3) {
          return this.options.renderChanges ? this.renderContainer(e3, "del") : null;
        }
        renderSymbol(e3) {
          var t3 = this.createElement("span");
          return t3.style.fontFamily = e3.font, t3.innerHTML = `&#x${e3.char};`, t3;
        }
        renderFootnoteReference(e3) {
          var t3 = this.createElement("sup");
          return this.currentFootnoteIds.push(e3.id), t3.textContent = `${this.currentFootnoteIds.length}`, t3;
        }
        renderEndnoteReference(e3) {
          var t3 = this.createElement("sup");
          return this.currentEndnoteIds.push(e3.id), t3.textContent = `${this.currentEndnoteIds.length}`, t3;
        }
        renderTab(e3) {
          var t3, r3 = this.createElement("span");
          if (r3.innerHTML = "&emsp;", this.options.experimental) {
            r3.className = this.tabStopClass();
            var s2 = null === (t3 = function(e4, t4) {
              for (var r4 = e4.parent; null != r4 && r4.type != t4; )
                r4 = r4.parent;
              return r4;
            }(e3, a2.DomType.Paragraph)) || void 0 === t3 ? void 0 : t3.tabs;
            this.currentTabs.push({ stops: s2, span: r3 });
          }
          return r3;
        }
        renderBookmarkStart(e3) {
          var t3 = this.createElement("span");
          return t3.id = e3.name, t3;
        }
        renderRun(e3) {
          if (e3.fieldRun)
            return null;
          const t3 = this.createElement("span");
          if (e3.id && (t3.id = e3.id), this.renderClass(e3, t3), this.renderStyleValues(e3.cssStyle, t3), e3.verticalAlign) {
            const r3 = this.createElement(e3.verticalAlign);
            this.renderChildren(e3, r3), t3.appendChild(r3);
          } else
            this.renderChildren(e3, t3);
          return t3;
        }
        renderTable(e3) {
          let t3 = this.createElement("table");
          return this.tableCellPositions.push(this.currentCellPosition), this.tableVerticalMerges.push(this.currentVerticalMerge), this.currentVerticalMerge = {}, this.currentCellPosition = { col: 0, row: 0 }, e3.columns && t3.appendChild(this.renderTableColumns(e3.columns)), this.renderClass(e3, t3), this.renderChildren(e3, t3), this.renderStyleValues(e3.cssStyle, t3), this.currentVerticalMerge = this.tableVerticalMerges.pop(), this.currentCellPosition = this.tableCellPositions.pop(), t3;
        }
        renderTableColumns(e3) {
          let t3 = this.createElement("colgroup");
          for (let r3 of e3) {
            let e4 = this.createElement("col");
            r3.width && (e4.style.width = r3.width), t3.appendChild(e4);
          }
          return t3;
        }
        renderTableRow(e3) {
          let t3 = this.createElement("tr");
          return this.currentCellPosition.col = 0, this.renderClass(e3, t3), this.renderChildren(e3, t3), this.renderStyleValues(e3.cssStyle, t3), this.currentCellPosition.row++, t3;
        }
        renderTableCell(e3) {
          let t3 = this.createElement("td");
          const r3 = this.currentCellPosition.col;
          return e3.verticalMerge ? "restart" == e3.verticalMerge ? (this.currentVerticalMerge[r3] = t3, t3.rowSpan = 1) : this.currentVerticalMerge[r3] && (this.currentVerticalMerge[r3].rowSpan += 1, t3.style.display = "none") : this.currentVerticalMerge[r3] = null, this.renderClass(e3, t3), this.renderChildren(e3, t3), this.renderStyleValues(e3.cssStyle, t3), e3.span && (t3.colSpan = e3.span), this.currentCellPosition.col += t3.colSpan, t3;
        }
        renderVmlPicture(e3) {
          var t3 = i("div");
          return this.renderChildren(e3, t3), t3;
        }
        renderVmlElement(e3) {
          var t3, r3, a3 = c("svg");
          a3.setAttribute("style", e3.cssStyleText);
          const s2 = c(e3.tagName);
          return Object.entries(e3.attrs).forEach(([e4, t4]) => s2.setAttribute(e4, t4)), (null === (t3 = e3.imageHref) || void 0 === t3 ? void 0 : t3.id) && (null === (r3 = this.document) || void 0 === r3 || r3.loadDocumentImage(e3.imageHref.id, this.currentPart).then((e4) => s2.setAttribute("href", e4))), a3.appendChild(s2), requestAnimationFrame(() => {
            const e4 = a3.firstElementChild.getBBox();
            a3.setAttribute("width", `${Math.ceil(e4.x + e4.width)}`), a3.setAttribute("height", `${Math.ceil(e4.y + e4.height)}`);
          }), a3;
        }
        renderMmlRadical(e3) {
          var t3;
          const r3 = e3.children.find((e4) => e4.type == a2.DomType.MmlBase);
          if (null === (t3 = e3.props) || void 0 === t3 ? void 0 : t3.hideDegree)
            return u(o, "msqrt", null, this.renderElements([r3]));
          const s2 = e3.children.find((e4) => e4.type == a2.DomType.MmlDegree);
          return u(o, "mroot", null, this.renderElements([r3, s2]));
        }
        renderMmlDelimiter(e3) {
          var t3, r3;
          const a3 = [];
          return a3.push(u(o, "mo", null, [null !== (t3 = e3.props.beginChar) && void 0 !== t3 ? t3 : "("])), a3.push(...this.renderElements(e3.children)), a3.push(u(o, "mo", null, [null !== (r3 = e3.props.endChar) && void 0 !== r3 ? r3 : ")"])), u(o, "mrow", null, a3);
        }
        renderMmlNary(e3) {
          var t3;
          const r3 = [], n2 = (0, s.keyBy)(e3.children, (e4) => e4.type), l2 = n2[a2.DomType.MmlSuperArgument], i2 = n2[a2.DomType.MmlSubArgument], c2 = l2 ? u(o, "mo", null, (0, s.asArray)(this.renderElement(l2))) : null, p2 = i2 ? u(o, "mo", null, (0, s.asArray)(this.renderElement(i2))) : null;
          if (null === (t3 = e3.props) || void 0 === t3 ? void 0 : t3.char) {
            const t4 = u(o, "mo", null, [e3.props.char]);
            c2 || p2 ? r3.push(u(o, "munderover", null, [t4, p2, c2])) : c2 ? r3.push(u(o, "mover", null, [t4, c2])) : p2 ? r3.push(u(o, "munder", null, [t4, p2])) : r3.push(t4);
          }
          return r3.push(...this.renderElements(n2[a2.DomType.MmlBase].children)), u(o, "mrow", null, r3);
        }
        renderMmlRun(e3) {
          const t3 = u(o, "ms");
          return this.renderClass(e3, t3), this.renderStyleValues(e3.cssStyle, t3), this.renderChildren(e3, t3), t3;
        }
        renderStyleValues(e3, t3) {
          Object.assign(t3.style, e3);
        }
        renderClass(e3, t3) {
          e3.className && (t3.className = e3.className), e3.styleName && t3.classList.add(this.processStyleName(e3.styleName));
        }
        findStyle(e3) {
          var t3;
          return e3 && (null === (t3 = this.styleMap) || void 0 === t3 ? void 0 : t3[e3]);
        }
        numberingClass(e3, t3) {
          return `${this.className}-num-${e3}-${t3}`;
        }
        tabStopClass() {
          return `${this.className}-tab-stop`;
        }
        styleToString(e3, t3, r3 = null) {
          let a3 = `${e3} {\r
`;
          for (const e4 in t3)
            a3 += `  ${e4}: ${t3[e4]};\r
`;
          return r3 && (a3 += r3), a3 + "}\r\n";
        }
        numberingCounter(e3, t3) {
          return `${this.className}-num-${e3}-${t3}`;
        }
        levelTextToContent(e3, t3, r3, a3) {
          var s2;
          return `"${e3.replace(/%\d*/g, (e4) => {
            let t4 = parseInt(e4.substring(1), 10) - 1;
            return `"counter(${this.numberingCounter(r3, t4)}, ${a3})"`;
          })}${null !== (s2 = { tab: "\\9", space: "\\a0" }[t3]) && void 0 !== s2 ? s2 : ""}"`;
        }
        numFormatToCssValue(e3) {
          var t3;
          return null !== (t3 = { none: "none", bullet: "disc", decimal: "decimal", lowerLetter: "lower-alpha", upperLetter: "upper-alpha", lowerRoman: "lower-roman", upperRoman: "upper-roman", decimalZero: "decimal-leading-zero", aiueo: "katakana", aiueoFullWidth: "katakana", chineseCounting: "simp-chinese-informal", chineseCountingThousand: "simp-chinese-informal", chineseLegalSimplified: "simp-chinese-formal", chosung: "hangul-consonant", ideographDigital: "cjk-ideographic", ideographTraditional: "cjk-heavenly-stem", ideographLegalTraditional: "trad-chinese-formal", ideographZodiac: "cjk-earthly-branch", iroha: "katakana-iroha", irohaFullWidth: "katakana-iroha", japaneseCounting: "japanese-informal", japaneseDigitalTenThousand: "cjk-decimal", japaneseLegal: "japanese-formal", thaiNumbers: "thai", koreanCounting: "korean-hangul-formal", koreanDigital: "korean-hangul-formal", koreanDigital2: "korean-hanja-informal", hebrew1: "hebrew", hebrew2: "hebrew", hindiNumbers: "devanagari", ganada: "hangul", taiwaneseCounting: "cjk-ideographic", taiwaneseCountingThousand: "cjk-ideographic", taiwaneseDigital: "cjk-decimal" }[e3]) && void 0 !== t3 ? t3 : e3;
        }
        refreshTabStops() {
          this.options.experimental && (clearTimeout(this.tabsTimeout), this.tabsTimeout = setTimeout(() => {
            const e3 = (0, n.computePixelToPoint)();
            for (let t3 of this.currentTabs)
              (0, n.updateTabStop)(t3.span, t3.stops, this.defaultTabSize, e3);
          }, 500));
        }
      };
    }, 630: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.updateTabStop = t2.computePixelToPoint = void 0;
      const r2 = { pos: 0, leader: "none", style: "left" };
      function a2(e3) {
        return parseFloat(e3);
      }
      t2.computePixelToPoint = function(e3 = document.body) {
        const t3 = document.createElement("div");
        t3.style.width = "100pt", e3.appendChild(t3);
        const r3 = 100 / t3.offsetWidth;
        return e3.removeChild(t3), r3;
      }, t2.updateTabStop = function(e3, t3, s, n = 0.75) {
        const l = e3.closest("p"), o = e3.getBoundingClientRect(), i = l.getBoundingClientRect(), c = getComputedStyle(l), u = (null == t3 ? void 0 : t3.length) > 0 ? t3.map((e4) => ({ pos: a2(e4.position), leader: e4.leader, style: e4.style })).sort((e4, t4) => e4.pos - t4.pos) : [r2], p = u[u.length - 1], d = i.width * n, h = a2(s);
        let m = p.pos + h;
        if (m < d)
          for (; m < d && u.length < 50; m += h)
            u.push(Object.assign(Object.assign({}, r2), { pos: m }));
        const f = parseFloat(c.marginLeft), g = i.left + f, b = (o.left - g) * n, y = u.find((e4) => "clear" != e4.style && e4.pos > b);
        if (null == y)
          return;
        let v = 1;
        if ("right" == y.style || "center" == y.style) {
          const t4 = Array.from(l.querySelectorAll(`.${e3.className}`)), r3 = t4.indexOf(e3) + 1, a3 = document.createRange();
          a3.setStart(e3, 1), r3 < t4.length ? a3.setEndBefore(t4[r3]) : a3.setEndAfter(l);
          const s2 = "center" == y.style ? 0.5 : 1, o2 = a3.getBoundingClientRect(), c2 = o2.left + s2 * o2.width - (i.left - f);
          v = y.pos - c2 * n;
        } else
          v = y.pos - b;
        switch (e3.innerHTML = "&nbsp;", e3.style.textDecoration = "inherit", e3.style.wordSpacing = `${v.toFixed(0)}pt`, y.leader) {
          case "dot":
          case "middleDot":
            e3.style.textDecoration = "underline", e3.style.textDecorationStyle = "dotted";
            break;
          case "hyphen":
          case "heavy":
          case "underscore":
            e3.style.textDecoration = "underline";
        }
      };
    }, 881: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.WmlEndnote = t2.WmlFootnote = t2.WmlBaseNote = void 0;
      const a2 = r2(120);
      class s {
        constructor() {
          this.children = [], this.cssStyle = {};
        }
      }
      t2.WmlBaseNote = s, t2.WmlFootnote = class extends s {
        constructor() {
          super(...arguments), this.type = a2.DomType.Footnote;
        }
      }, t2.WmlEndnote = class extends s {
        constructor() {
          super(...arguments), this.type = a2.DomType.Endnote;
        }
      };
    }, 735: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.EndnotesPart = t2.FootnotesPart = t2.BaseNotePart = void 0;
      const a2 = r2(530), s = r2(881);
      class n extends a2.Part {
        constructor(e3, t3, r3) {
          super(e3, t3), this._documentParser = r3;
        }
      }
      t2.BaseNotePart = n, t2.FootnotesPart = class extends n {
        constructor(e3, t3, r3) {
          super(e3, t3, r3);
        }
        parseXml(e3) {
          this.notes = this._documentParser.parseNotes(e3, "footnote", s.WmlFootnote);
        }
      }, t2.EndnotesPart = class extends n {
        constructor(e3, t3, r3) {
          super(e3, t3, r3);
        }
        parseXml(e3) {
          this.notes = this._documentParser.parseNotes(e3, "endnote", s.WmlEndnote);
        }
      };
    }, 527: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.NumberingPart = void 0;
      const a2 = r2(530), s = r2(682);
      class n extends a2.Part {
        constructor(e3, t3, r3) {
          super(e3, t3), this._documentParser = r3;
        }
        parseXml(e3) {
          Object.assign(this, (0, s.parseNumberingPart)(e3, this._package.xmlParser)), this.domNumberings = this._documentParser.parseNumberingFile(e3);
        }
      }
      t2.NumberingPart = n;
    }, 682: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseNumberingBulletPicture = t2.parseNumberingLevelOverrride = t2.parseNumberingLevel = t2.parseAbstractNumbering = t2.parseNumbering = t2.parseNumberingPart = void 0;
      const a2 = r2(109), s = r2(488);
      function n(e3, t3) {
        let r3 = { id: t3.attr(e3, "numId"), overrides: [] };
        for (let a3 of t3.elements(e3))
          switch (a3.localName) {
            case "abstractNumId":
              r3.abstractId = t3.attr(a3, "val");
              break;
            case "lvlOverride":
              r3.overrides.push(i(a3, t3));
          }
        return r3;
      }
      function l(e3, t3) {
        let r3 = { id: t3.attr(e3, "abstractNumId"), levels: [] };
        for (let a3 of t3.elements(e3))
          switch (a3.localName) {
            case "name":
              r3.name = t3.attr(a3, "val");
              break;
            case "multiLevelType":
              r3.multiLevelType = t3.attr(a3, "val");
              break;
            case "numStyleLink":
              r3.numberingStyleLink = t3.attr(a3, "val");
              break;
            case "styleLink":
              r3.styleLink = t3.attr(a3, "val");
              break;
            case "lvl":
              r3.levels.push(o(a3, t3));
          }
        return r3;
      }
      function o(e3, t3) {
        let r3 = { level: t3.intAttr(e3, "ilvl") };
        for (let n2 of t3.elements(e3))
          switch (n2.localName) {
            case "start":
              r3.start = t3.attr(n2, "val");
              break;
            case "lvlRestart":
              r3.restart = t3.intAttr(n2, "val");
              break;
            case "numFmt":
              r3.format = t3.attr(n2, "val");
              break;
            case "lvlText":
              r3.text = t3.attr(n2, "val");
              break;
            case "lvlJc":
              r3.justification = t3.attr(n2, "val");
              break;
            case "lvlPicBulletId":
              r3.bulletPictureId = t3.attr(n2, "val");
              break;
            case "pStyle":
              r3.paragraphStyle = t3.attr(n2, "val");
              break;
            case "pPr":
              r3.paragraphProps = (0, a2.parseParagraphProperties)(n2, t3);
              break;
            case "rPr":
              r3.runProps = (0, s.parseRunProperties)(n2, t3);
          }
        return r3;
      }
      function i(e3, t3) {
        let r3 = { level: t3.intAttr(e3, "ilvl") };
        for (let a3 of t3.elements(e3))
          switch (a3.localName) {
            case "startOverride":
              r3.start = t3.intAttr(a3, "val");
              break;
            case "lvl":
              r3.numberingLevel = o(a3, t3);
          }
        return r3;
      }
      function c(e3, t3) {
        var r3 = t3.element(e3, "pict"), a3 = r3 && t3.element(r3, "shape"), s2 = a3 && t3.element(a3, "imagedata");
        return s2 ? { id: t3.attr(e3, "numPicBulletId"), referenceId: t3.attr(s2, "id"), style: t3.attr(a3, "style") } : null;
      }
      t2.parseNumberingPart = function(e3, t3) {
        let r3 = { numberings: [], abstractNumberings: [], bulletPictures: [] };
        for (let a3 of t3.elements(e3))
          switch (a3.localName) {
            case "num":
              r3.numberings.push(n(a3, t3));
              break;
            case "abstractNum":
              r3.abstractNumberings.push(l(a3, t3));
              break;
            case "numPicBullet":
              r3.bulletPictures.push(c(a3, t3));
          }
        return r3;
      }, t2.parseNumbering = n, t2.parseAbstractNumbering = l, t2.parseNumberingLevel = o, t2.parseNumberingLevelOverrride = i, t2.parseNumberingBulletPicture = c;
    }, 472: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.XmlParser = t2.serializeXmlString = t2.parseXmlString = void 0;
      const a2 = r2(149);
      t2.parseXmlString = function(e3, t3 = false) {
        var r3;
        t3 && (e3 = e3.replace(/<[?].*[?]>/, "")), e3 = 65279 === (r3 = e3).charCodeAt(0) ? r3.substring(1) : r3;
        const a3 = new DOMParser().parseFromString(e3, "application/xml"), s2 = null === (n2 = a3.getElementsByTagName("parsererror")[0]) || void 0 === n2 ? void 0 : n2.textContent;
        var n2;
        if (s2)
          throw new Error(s2);
        return a3;
      }, t2.serializeXmlString = function(e3) {
        return new XMLSerializer().serializeToString(e3);
      };
      class s {
        elements(e3, t3 = null) {
          const r3 = [];
          for (let a3 = 0, s2 = e3.childNodes.length; a3 < s2; a3++) {
            let s3 = e3.childNodes.item(a3);
            1 != s3.nodeType || null != t3 && s3.localName != t3 || r3.push(s3);
          }
          return r3;
        }
        element(e3, t3) {
          for (let r3 = 0, a3 = e3.childNodes.length; r3 < a3; r3++) {
            let a4 = e3.childNodes.item(r3);
            if (1 == a4.nodeType && a4.localName == t3)
              return a4;
          }
          return null;
        }
        elementAttr(e3, t3, r3) {
          var a3 = this.element(e3, t3);
          return a3 ? this.attr(a3, r3) : void 0;
        }
        attrs(e3) {
          return Array.from(e3.attributes);
        }
        attr(e3, t3) {
          for (let r3 = 0, a3 = e3.attributes.length; r3 < a3; r3++) {
            let a4 = e3.attributes.item(r3);
            if (a4.localName == t3)
              return a4.value;
          }
          return null;
        }
        intAttr(e3, t3, r3 = null) {
          var a3 = this.attr(e3, t3);
          return a3 ? parseInt(a3) : r3;
        }
        hexAttr(e3, t3, r3 = null) {
          var a3 = this.attr(e3, t3);
          return a3 ? parseInt(a3, 16) : r3;
        }
        floatAttr(e3, t3, r3 = null) {
          var a3 = this.attr(e3, t3);
          return a3 ? parseFloat(a3) : r3;
        }
        boolAttr(e3, t3, r3 = null) {
          return (0, a2.convertBoolean)(this.attr(e3, t3), r3);
        }
        lengthAttr(e3, t3, r3 = a2.LengthUsage.Dxa) {
          return (0, a2.convertLength)(this.attr(e3, t3), r3);
        }
      }
      t2.XmlParser = s;
      const n = new s();
      t2.default = n;
    }, 287: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.SettingsPart = void 0;
      const a2 = r2(530), s = r2(846);
      class n extends a2.Part {
        constructor(e3, t3) {
          super(e3, t3);
        }
        parseXml(e3) {
          this.settings = (0, s.parseSettings)(e3, this._package.xmlParser);
        }
      }
      t2.SettingsPart = n;
    }, 846: (e2, t2) => {
      function r2(e3, t3) {
        var r3 = { defaultNoteIds: [] };
        for (let a2 of t3.elements(e3))
          switch (a2.localName) {
            case "numFmt":
              r3.nummeringFormat = t3.attr(a2, "val");
              break;
            case "footnote":
            case "endnote":
              r3.defaultNoteIds.push(t3.attr(a2, "id"));
          }
        return r3;
      }
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseNoteProperties = t2.parseSettings = void 0, t2.parseSettings = function(e3, t3) {
        var a2 = {};
        for (let s of t3.elements(e3))
          switch (s.localName) {
            case "defaultTabStop":
              a2.defaultTabStop = t3.lengthAttr(s, "val");
              break;
            case "footnotePr":
              a2.footnoteProps = r2(s, t3);
              break;
            case "endnotePr":
              a2.endnoteProps = r2(s, t3);
              break;
            case "autoHyphenation":
              a2.autoHyphenation = t3.boolAttr(s, "val");
          }
        return a2;
      }, t2.parseNoteProperties = r2;
    }, 240: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.StylesPart = void 0;
      const a2 = r2(530);
      class s extends a2.Part {
        constructor(e3, t3, r3) {
          super(e3, t3), this._documentParser = r3;
        }
        parseXml(e3) {
          this.styles = this._documentParser.parseStylesFile(e3);
        }
      }
      t2.StylesPart = s;
    }, 893: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.ThemePart = void 0;
      const a2 = r2(530), s = r2(55);
      class n extends a2.Part {
        constructor(e3, t3) {
          super(e3, t3);
        }
        parseXml(e3) {
          this.theme = (0, s.parseTheme)(e3, this._package.xmlParser);
        }
      }
      t2.ThemePart = n;
    }, 55: (e2, t2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseFontInfo = t2.parseFontScheme = t2.parseColorScheme = t2.parseTheme = t2.DmlTheme = void 0;
      class r2 {
      }
      function a2(e3, t3) {
        var r3 = { name: t3.attr(e3, "name"), colors: {} };
        for (let n2 of t3.elements(e3)) {
          var a3 = t3.element(n2, "srgbClr"), s2 = t3.element(n2, "sysClr");
          a3 ? r3.colors[n2.localName] = t3.attr(a3, "val") : s2 && (r3.colors[n2.localName] = t3.attr(s2, "lastClr"));
        }
        return r3;
      }
      function s(e3, t3) {
        var r3 = { name: t3.attr(e3, "name") };
        for (let a3 of t3.elements(e3))
          switch (a3.localName) {
            case "majorFont":
              r3.majorFont = n(a3, t3);
              break;
            case "minorFont":
              r3.minorFont = n(a3, t3);
          }
        return r3;
      }
      function n(e3, t3) {
        return { latinTypeface: t3.elementAttr(e3, "latin", "typeface"), eaTypeface: t3.elementAttr(e3, "ea", "typeface"), csTypeface: t3.elementAttr(e3, "cs", "typeface") };
      }
      t2.DmlTheme = r2, t2.parseTheme = function(e3, t3) {
        var n2 = new r2(), l = t3.element(e3, "themeElements");
        for (let e4 of t3.elements(l))
          switch (e4.localName) {
            case "clrScheme":
              n2.colorScheme = a2(e4, t3);
              break;
            case "fontScheme":
              n2.fontScheme = s(e4, t3);
          }
        return n2;
      }, t2.parseColorScheme = a2, t2.parseFontScheme = s, t2.parseFontInfo = n;
    }, 593: (e2, t2) => {
      function r2(e3) {
        return e3 && "object" == typeof e3 && !Array.isArray(e3);
      }
      Object.defineProperty(t2, "__esModule", { value: true }), t2.asArray = t2.formatCssRules = t2.parseCssRules = t2.mergeDeep = t2.isString = t2.isObject = t2.blobToBase64 = t2.keyBy = t2.resolvePath = t2.splitPath = t2.escapeClassName = void 0, t2.escapeClassName = function(e3) {
        return null == e3 ? void 0 : e3.replace(/[ .]+/g, "-").replace(/[&]+/g, "and").toLowerCase();
      }, t2.splitPath = function(e3) {
        let t3 = e3.lastIndexOf("/") + 1;
        return [0 == t3 ? "" : e3.substring(0, t3), 0 == t3 ? e3 : e3.substring(t3)];
      }, t2.resolvePath = function(e3, t3) {
        try {
          const r3 = "http://docx/";
          return new URL(e3, r3 + t3).toString().substring(r3.length);
        } catch (r3) {
          return `${t3}${e3}`;
        }
      }, t2.keyBy = function(e3, t3) {
        return e3.reduce((e4, r3) => (e4[t3(r3)] = r3, e4), {});
      }, t2.blobToBase64 = function(e3) {
        return new Promise((t3, r3) => {
          const a2 = new FileReader();
          a2.onloadend = () => t3(a2.result), a2.onerror = () => r3(), a2.readAsDataURL(e3);
        });
      }, t2.isObject = r2, t2.isString = function(e3) {
        return e3 && "string" == typeof e3 || e3 instanceof String;
      }, t2.mergeDeep = function e3(t3, ...a2) {
        var s;
        if (!a2.length)
          return t3;
        const n = a2.shift();
        if (r2(t3) && r2(n))
          for (const a3 in n)
            r2(n[a3]) ? e3(null !== (s = t3[a3]) && void 0 !== s ? s : t3[a3] = {}, n[a3]) : t3[a3] = n[a3];
        return e3(t3, ...a2);
      }, t2.parseCssRules = function(e3) {
        const t3 = {};
        for (const r3 of e3.split(";")) {
          const [e4, a2] = r3.split(":");
          t3[e4] = a2;
        }
        return t3;
      }, t2.formatCssRules = function(e3) {
        return Object.entries(e3).map((e4, t3) => `${e4}: ${t3}`).join(";");
      }, t2.asArray = function(e3) {
        return Array.isArray(e3) ? e3 : [e3];
      };
    }, 320: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.parseVmlElement = t2.VmlElement = void 0;
      const a2 = r2(149), s = r2(120), n = r2(472);
      class l {
        constructor() {
          this.type = s.DomType.VmlElement, this.attrs = {}, this.chidren = [];
        }
      }
      function o(e3) {
        var t3;
        return { stroke: n.default.attr(e3, "color"), "stroke-width": null !== (t3 = n.default.lengthAttr(e3, "weight", a2.LengthUsage.Emu)) && void 0 !== t3 ? t3 : "1px" };
      }
      function i(e3) {
        return e3.split(",");
      }
      t2.VmlElement = l, t2.parseVmlElement = function e3(t3) {
        var r3 = new l();
        switch (t3.localName) {
          case "rect":
            r3.tagName = "rect", Object.assign(r3.attrs, { width: "100%", height: "100%" });
            break;
          case "oval":
            r3.tagName = "ellipse", Object.assign(r3.attrs, { cx: "50%", cy: "50%", rx: "50%", ry: "50%" });
            break;
          case "line":
            r3.tagName = "line";
            break;
          case "shape":
            r3.tagName = "g";
            break;
          default:
            return null;
        }
        for (const e4 of n.default.attrs(t3))
          switch (e4.localName) {
            case "style":
              r3.cssStyleText = e4.value;
              break;
            case "fillcolor":
              r3.attrs.fill = e4.value;
              break;
            case "from":
              const [t4, a3] = i(e4.value);
              Object.assign(r3.attrs, { x1: t4, y1: a3 });
              break;
            case "to":
              const [s2, n2] = i(e4.value);
              Object.assign(r3.attrs, { x2: s2, y2: n2 });
          }
        for (const a3 of n.default.elements(t3))
          switch (a3.localName) {
            case "stroke":
              Object.assign(r3.attrs, o(a3));
              break;
            case "fill":
              Object.assign(r3.attrs, {});
              break;
            case "imagedata":
              r3.tagName = "image", Object.assign(r3.attrs, { width: "100%", height: "100%" }), r3.imageHref = { id: n.default.attr(a3, "id"), title: n.default.attr(a3, "title") };
              break;
            default:
              const t4 = e3(a3);
              t4 && r3.chidren.push(t4);
          }
        return r3;
      };
    }, 213: (e2, t2, r2) => {
      Object.defineProperty(t2, "__esModule", { value: true }), t2.deobfuscate = t2.WordDocument = void 0;
      const a2 = r2(461), s = r2(380), n = r2(522), l = r2(448), o = r2(593), i = r2(527), c = r2(240), u = r2(985), p = r2(665), d = r2(162), h = r2(893), m = r2(735), f = r2(287), g = r2(177), b = [{ type: a2.RelationshipTypes.OfficeDocument, target: "word/document.xml" }, { type: a2.RelationshipTypes.ExtendedProperties, target: "docProps/app.xml" }, { type: a2.RelationshipTypes.CoreProperties, target: "docProps/core.xml" }, { type: a2.RelationshipTypes.CustomProperties, target: "docProps/custom.xml" }];
      class y {
        constructor() {
          this.parts = [], this.partsMap = {};
        }
        static async load(e3, t3, r3) {
          var a3 = new y();
          return a3._options = r3, a3._parser = t3, a3._package = await n.OpenXmlPackage.load(e3, r3), a3.rels = await a3._package.loadRelationships(), await Promise.all(b.map((e4) => {
            var t4;
            const r4 = null !== (t4 = a3.rels.find((t5) => t5.type === e4.type)) && void 0 !== t4 ? t4 : e4;
            return a3.loadRelationshipPart(r4.target, r4.type);
          })), a3;
        }
        save(e3 = "blob") {
          return this._package.save(e3);
        }
        async loadRelationshipPart(e3, t3) {
          var r3;
          if (this.partsMap[e3])
            return this.partsMap[e3];
          if (!this._package.get(e3))
            return null;
          let n2 = null;
          switch (t3) {
            case a2.RelationshipTypes.OfficeDocument:
              this.documentPart = n2 = new l.DocumentPart(this._package, e3, this._parser);
              break;
            case a2.RelationshipTypes.FontTable:
              this.fontTablePart = n2 = new s.FontTablePart(this._package, e3);
              break;
            case a2.RelationshipTypes.Numbering:
              this.numberingPart = n2 = new i.NumberingPart(this._package, e3, this._parser);
              break;
            case a2.RelationshipTypes.Styles:
              this.stylesPart = n2 = new c.StylesPart(this._package, e3, this._parser);
              break;
            case a2.RelationshipTypes.Theme:
              this.themePart = n2 = new h.ThemePart(this._package, e3);
              break;
            case a2.RelationshipTypes.Footnotes:
              this.footnotesPart = n2 = new m.FootnotesPart(this._package, e3, this._parser);
              break;
            case a2.RelationshipTypes.Endnotes:
              this.endnotesPart = n2 = new m.EndnotesPart(this._package, e3, this._parser);
              break;
            case a2.RelationshipTypes.Footer:
              n2 = new u.FooterPart(this._package, e3, this._parser);
              break;
            case a2.RelationshipTypes.Header:
              n2 = new u.HeaderPart(this._package, e3, this._parser);
              break;
            case a2.RelationshipTypes.CoreProperties:
              this.corePropsPart = n2 = new d.CorePropsPart(this._package, e3);
              break;
            case a2.RelationshipTypes.ExtendedProperties:
              this.extendedPropsPart = n2 = new p.ExtendedPropsPart(this._package, e3);
              break;
            case a2.RelationshipTypes.CustomProperties:
              n2 = new g.CustomPropsPart(this._package, e3);
              break;
            case a2.RelationshipTypes.Settings:
              this.settingsPart = n2 = new f.SettingsPart(this._package, e3);
          }
          if (null == n2)
            return Promise.resolve(null);
          if (this.partsMap[e3] = n2, this.parts.push(n2), await n2.load(), (null === (r3 = n2.rels) || void 0 === r3 ? void 0 : r3.length) > 0) {
            const [e4] = (0, o.splitPath)(n2.path);
            await Promise.all(n2.rels.map((t4) => this.loadRelationshipPart((0, o.resolvePath)(t4.target, e4), t4.type)));
          }
          return n2;
        }
        async loadDocumentImage(e3, t3) {
          const r3 = await this.loadResource(null != t3 ? t3 : this.documentPart, e3, "blob");
          return this.blobToURL(r3);
        }
        async loadNumberingImage(e3) {
          const t3 = await this.loadResource(this.numberingPart, e3, "blob");
          return this.blobToURL(t3);
        }
        async loadFont(e3, t3) {
          const r3 = await this.loadResource(this.fontTablePart, e3, "uint8array");
          return r3 ? this.blobToURL(new Blob([v(r3, t3)])) : r3;
        }
        blobToURL(e3) {
          return e3 ? this._options.useBase64URL ? (0, o.blobToBase64)(e3) : URL.createObjectURL(e3) : null;
        }
        findPartByRelId(e3, t3 = null) {
          var r3, a3 = (null !== (r3 = t3.rels) && void 0 !== r3 ? r3 : this.rels).find((t4) => t4.id == e3);
          const s2 = t3 ? (0, o.splitPath)(t3.path)[0] : "";
          return a3 ? this.partsMap[(0, o.resolvePath)(a3.target, s2)] : null;
        }
        getPathById(e3, t3) {
          const r3 = e3.rels.find((e4) => e4.id == t3), [a3] = (0, o.splitPath)(e3.path);
          return r3 ? (0, o.resolvePath)(r3.target, a3) : null;
        }
        loadResource(e3, t3, r3) {
          const a3 = this.getPathById(e3, t3);
          return a3 ? this._package.load(a3, r3) : Promise.resolve(null);
        }
      }
      function v(e3, t3) {
        const r3 = t3.replace(/{|}|-/g, ""), a3 = new Array(16);
        for (let e4 = 0; e4 < 16; e4++)
          a3[16 - e4 - 1] = parseInt(r3.substr(2 * e4, 2), 16);
        for (let t4 = 0; t4 < 32; t4++)
          e3[t4] = e3[t4] ^ a3[t4 % 16];
        return e3;
      }
      t2.WordDocument = y, t2.deobfuscate = v;
    }, 583: (e2) => {
      e2.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27m0,75 l5,0 l5,25 l10,-100%27 stroke=%27black%27 fill=%27none%27 vector-effect=%27non-scaling-stroke%27/%3E%3C/svg%3E";
    }, 626: (t2) => {
      t2.exports = e;
    } }, r = {};
    function a(e2) {
      var s = r[e2];
      if (void 0 !== s)
        return s.exports;
      var n = r[e2] = { id: e2, exports: {} };
      return t[e2](n, n.exports, a), n.exports;
    }
    return a.m = t, a.n = (e2) => {
      var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
      return a.d(t2, { a: t2 }), t2;
    }, a.d = (e2, t2) => {
      for (var r2 in t2)
        a.o(t2, r2) && !a.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
    }, a.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), a.r = (e2) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
    }, a.b = document.baseURI || self.location.href, a(667);
  })());
})(docxPreview_min);
var docxPreview_minExports = docxPreview_min.exports;
var renderDocx = (options) => {
  if (typeof window !== "undefined") {
    const { bodyContainer, styleContainer, buffer, docxOptions = {} } = options;
    const defaultOptions = {
      className: "docx"
      // ignoreLastRenderedPageBreak: false,
    };
    const configuration = Object.assign({}, defaultOptions, docxOptions);
    if (bodyContainer) {
      return docxPreview_minExports.renderAsync(buffer, bodyContainer, styleContainer, configuration);
    } else {
      const contain = document.createElement("div");
      document.body.appendChild(contain);
      return docxPreview_minExports.renderAsync(buffer, contain, styleContainer, configuration);
    }
  }
};
export {
  renderDocx
};
//# sourceMappingURL=docx-5262a8f1-YTIFOXHN.js.map
