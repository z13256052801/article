import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.853a6672.js";const h=JSON.parse('{"title":"其它","description":"","frontmatter":{},"headers":[],"relativePath":"src/other/qita.md","filePath":"src/other/qita.md","lastUpdated":1696639180000}'),p={name:"src/other/qita.md"},o=n(`<h1 id="其它" tabindex="-1">其它 <a class="header-anchor" href="#其它" aria-label="Permalink to &quot;其它&quot;">​</a></h1><h2 id="_1-计算分页" tabindex="-1">1.计算分页 <a class="header-anchor" href="#_1-计算分页" aria-label="Permalink to &quot;1.计算分页&quot;">​</a></h2><ul><li>丢弃小数部分,保留整数部分</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><br><ul><li>向上取整,有小数就整数部分加 1</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Math.</span><span style="color:#B392F0;">ceil</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Math.</span><span style="color:#6F42C1;">ceil</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><br><ul><li>四舍五入</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Math.</span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Math.</span><span style="color:#6F42C1;">round</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><br><ul><li>向下取整</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Math.</span><span style="color:#6F42C1;">floor</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><br><ul><li>分页的总页数算法 <ul><li>总记录数：<code>totalRecord</code></li><li>每页最大记录数：<code>maxResult</code></li><li>总页数：<code>totalPage</code></li></ul></li></ul><p>方法一:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">totalPage </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">  totalRecord </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> maxResult </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> totalRecord </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> maxResult</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">ceil</span><span style="color:#E1E4E8;">(totalRecord </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> maxResult);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">totalPage </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">  totalRecord </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> maxResult </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> totalRecord </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> maxResult</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">ceil</span><span style="color:#24292E;">(totalRecord </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> maxResult);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>方法二:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 其中 maxResult  - 1 就是 totalRecord / maxResult 的最大的余数</span></span>
<span class="line"><span style="color:#E1E4E8;">totalPage </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (totalRecord </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> maxResult </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> maxResult;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 其中 maxResult  - 1 就是 totalRecord / maxResult 的最大的余数</span></span>
<span class="line"><span style="color:#24292E;">totalPage </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (totalRecord </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> maxResult </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> maxResult;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,19),e=[o];function t(c,r,i,y,E,d){return a(),l("div",null,e)}const b=s(p,[["render",t]]);export{h as __pageData,b as default};