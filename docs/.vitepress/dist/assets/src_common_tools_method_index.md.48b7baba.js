import{_ as s,o as a,c as n,U as l}from"./chunks/framework.5b95dd12.js";const h=JSON.parse('{"title":"截取 url 参数","description":"","frontmatter":{},"headers":[],"relativePath":"src/common_tools/method/index.md","lastUpdated":null}'),o={name:"src/common_tools/method/index.md"},p=l(`<h1 id="截取-url-参数" tabindex="-1">截取 url 参数 <a class="header-anchor" href="#截取-url-参数" aria-label="Permalink to &quot;截取 url 参数&quot;">​</a></h1><p>截取地址栏中 url 问号后面的参数</p><h2 id="_1-代码实现" tabindex="-1">1.代码实现 <a class="header-anchor" href="#_1-代码实现" aria-label="Permalink to &quot;1.代码实现&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">getUrlParam</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">name</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//构造一个含有目标参数的正则表达式对象</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">reg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">RegExp</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(^|&amp;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">=([^&amp;]*)(&amp;|$)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//匹配目标参数</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">r</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">location</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">search</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substr</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">reg</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">r</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">unescape</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">r</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="_2-使用方法" tabindex="-1">2.使用方法 <a class="header-anchor" href="#_2-使用方法" aria-label="Permalink to &quot;2.使用方法&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">getUrlParam</span><span style="color:#BABED8;">(NAME)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_3-参数说明" tabindex="-1">3.参数说明 <a class="header-anchor" href="#_3-参数说明" aria-label="Permalink to &quot;3.参数说明&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>必填</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>NAME</td><td>要截取的参数名</td><td>是</td><td><code>string</code></td><td>无</td></tr></tbody></table>`,8),t=[p];function e(r,c,F,y,D,i){return a(),n("div",null,t)}const u=s(o,[["render",e]]);export{h as __pageData,u as default};
