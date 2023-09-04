import{_ as n,o as l,c as o,U as a,x as s}from"./chunks/framework.5b95dd12.js";const p="/docs/assets/customElements.ed27d2e2.png",v=JSON.parse('{"title":"ranui","description":"","frontmatter":{},"headers":[],"relativePath":"src/ranui/index.md","lastUpdated":1693816335000}'),e={name:"src/ranui/index.md"},t=a(`<h1 id="ranui" tabindex="-1">ranui <a class="header-anchor" href="#ranui" aria-label="Permalink to &quot;ranui&quot;">​</a></h1><p>基于 <code>Web Components UI</code>组件库</p><h2 id="feature-特点" tabindex="-1">Feature 特点 <a class="header-anchor" href="#feature-特点" aria-label="Permalink to &quot;Feature 特点&quot;">​</a></h2><ol><li>基于<code>Web Components</code>开发，能做到跨框架复用，统一所有情况。</li><li>采用<code>Typescript</code>开发，有声明和类型文件。</li><li>纯原生手写，基础组件无依赖。</li><li><code>MIT</code>协议</li><li>文档基于<code>vitepress</code>搭建，所有组件实例均可交互。</li></ol><h2 id="situation-项目情况" tabindex="-1">Situation 项目情况 <a class="header-anchor" href="#situation-项目情况" aria-label="Permalink to &quot;Situation 项目情况&quot;">​</a></h2><p><a style="display:inline-block;margin-left:4px;" href="https://github.com/chaxus/ran"><img src="https://img.shields.io/github/actions/workflow/status/chaxus/ran/ci.yml" alt="Build Status"></a><a style="display:inline-block;margin-left:4px;" href="https://github.com/chaxus/ran"><img src="https://img.shields.io/npm/v/ranui.svg" alt="npm-v"></a><a style="display:inline-block;margin-left:4px;" href="https://github.com/chaxus/ran"><img src="https://img.shields.io/npm/dt/ranui.svg" alt="npm-d"></a><a style="display:inline-block;margin-left:4px;" href="https://github.com/chaxus/ran"><img src="https://img.badgesize.io/https:/unpkg.com/ranui/dist/umd/index.umd.cjs?label=brotli&amp;compression=brotli" alt="brotli"></a><a style="display:inline-block;margin-left:4px;" href="https://github.com/chaxus/ran"><img src="https://img.shields.io/badge/module%20formats-umd%2C%20esm-green.svg" alt="module formats: umd, esm"></a></p><ul><li><code>git</code>：<code>https://github.com/chaxus/ran/tree/main/packages/ranui</code></li><li><code>npm</code>：<code>https://www.npmjs.com/package/ranui</code></li></ul><h2 id="import-导入方式" tabindex="-1">Import 导入方式 <a class="header-anchor" href="#import-导入方式" aria-label="Permalink to &quot;Import 导入方式&quot;">​</a></h2><p>支持按需引入</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ranui/button</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>对于一些全局展示的组件，比如 <code>preview</code> 和 <code>message</code>，需要加载一些额外的样式</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ranui/preview</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ranui/style</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><p>也可以全局导入，更加方便，这样什么都不用考虑了，梭哈完事。</p><ul><li><code>ES module</code></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ranui</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><ul><li><code>UMD</code>, <code>IIFE</code>, <code>CJS</code></li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./ranui/dist/umd/index.umd.cjs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="usage-使用" tabindex="-1">Usage 使用 <a class="header-anchor" href="#usage-使用" aria-label="Permalink to &quot;Usage 使用&quot;">​</a></h2><p>大多数情况都可以像原生的 <code>div</code> 标签一样使用。</p><p>接下来是一些使用例子</p><ul><li><code>html</code></li><li><code>js</code></li><li><code>jsx</code></li><li><code>vue</code></li><li><code>tsx</code></li></ul><h3 id="html" tabindex="-1"><code>html</code> <a class="header-anchor" href="#html" aria-label="Permalink to &quot;\`html\`&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./ranui/dist/umd/index.umd.cjs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">r-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Button</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">r-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="js" tabindex="-1"><code>js</code> <a class="header-anchor" href="#js" aria-label="Permalink to &quot;\`js\`&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ranui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> Button </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r-button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">Button</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">this is button text</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#BABED8;">(Button)</span></span></code></pre></div><h3 id="jsx" tabindex="-1"><code>jsx</code> <a class="header-anchor" href="#jsx" aria-label="Permalink to &quot;\`jsx\`&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ranui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> App </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&lt;&gt;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">r-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Button</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">r-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&lt;/&gt;</span></span>
<span class="line"><span style="color:#F07178;">  )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="vue" tabindex="-1"><code>vue</code> <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;\`vue\`&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">r-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Button</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">r-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ranui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="tsx" tabindex="-1"><code>tsx</code> <a class="header-anchor" href="#tsx" aria-label="Permalink to &quot;\`tsx\`&quot;">​</a></h2><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// react 18 </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">SyntheticEvent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">useRef</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ranui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> FilePreview </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">useRef</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLDivElement</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">|</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">uploadFile</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">e</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">SyntheticEvent</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLDivElement</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">ref</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">current</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">uploadFile</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#BABED8;">uploadFile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#BABED8;">uploadFile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">click</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#BABED8;">uploadFile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onchange</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">files</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [] </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">uploadFile</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">files</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">files</span><span style="color:#89DDFF;">?.</span><span style="color:#BABED8;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ref</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">current</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#BABED8;">ref</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">current</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">file</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">files</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">url</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">URL</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createObjectURL</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">file</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#BABED8;">ref</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">current</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">url</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">r-preview</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">={</span><span style="color:#BABED8;">ref</span><span style="color:#89DDFF;">}&gt;&lt;/</span><span style="color:#FFCB6B;">r-preview</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">r-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={</span><span style="color:#BABED8;">uploadFile</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#BABED8;">choose file to preview</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">r-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><code>jsx</code>在<code>TypeScript</code>中定义了所有<code>html</code>原生组件的类型。<code>web component</code>类型不在<code>jsx</code>定义中。需要手动添加。否则会有类型问题，但它实际上是有效的。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// typings.d.ts</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">RButton</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">onClick</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">MouseEventHandler</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLDivElement</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">undefined</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">RPreview</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">src</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Blob</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ArrayBuffer</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">onClick</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">MouseEventHandler</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLDivElement</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">undefined</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">ref</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">MutableRefObject</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLDivElement</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">JSX</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">IntrinsicElements</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r-preview</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">DetailedHTMLProps</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">HTMLAttributes</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLDivElement</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">HTMLDivElement</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">RPreview</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r-button</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">DetailedHTMLProps</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">HTMLAttributes</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">HTMLDivElement</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">HTMLDivElement</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">RButton</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="component-overview" tabindex="-1">Component overview <a class="header-anchor" href="#component-overview" aria-label="Permalink to &quot;Component overview&quot;">​</a></h2><ul><li><code>Button</code></li></ul><div style="display:inline-block;margin-right:8px;margin-bottom:12px;"><r-button type="primary">主要按钮</r-button></div><div style="display:inline-block;margin-right:8px;margin-bottom:12px;"><r-button type="warning">警告按钮</r-button></div><div style="display:inline-block;margin-right:8px;margin-bottom:12px;"><r-button type="text">文本按钮</r-button></div><div style="display:inline-block;margin-right:8px;margin-bottom:12px;"><r-button>默认按钮</r-button></div><ul><li><code>Icon</code></li></ul>`,40),r=s("div",{style:{display:"flex"}},[s("r-icon",{name:"lock",size:"50"}),s("r-icon",{name:"user",size:"50"}),s("r-icon",{name:"loading",size:"50",color:"#1E90FF",spin:""})],-1),c=a('<ul><li><code>Skeleton</code></li></ul><div style="width:100px;margin-top:10px;"><r-skeleton></r-skeleton></div><div style="margin-top:10px;"><r-skeleton></r-skeleton></div><div style="margin-top:10px;"><r-skeleton></r-skeleton></div><div style="width:200px;margin-top:10px;margin-bottom:12px;"><r-skeleton></r-skeleton></div><ul><li><code>Input</code></li></ul><div style="display:block;margin-right:8px;margin-bottom:12px;"><r-input label="user"></r-input></div><div style="display:block;margin-right:8px;margin-bottom:12px;"><r-input icon="lock" type="password"></r-input></div><ul><li><code>message</code></li></ul>',9),F=s("r-button",{onclick:"message.info('这是一条提示')"},"信息提示",-1),i=s("r-button",{onclick:"message.warning('这是一条提示')"},"警告提示",-1),y=s("r-button",{onclick:"message.error('这是一条提示')"},"错误提示",-1),D=s("r-button",{onclick:"message.success('这是一条提示')"},"成功提示",-1),B=s("r-button",{onclick:"message.toast('这是一条提示')"},"toast 提示",-1),d=a('<ul><li><code>Tab</code></li></ul><div style="display:block;margin-right:8px;margin-bottom:12px;"><r-tabs><r-tab label="home" icon="home">tab1</r-tab><r-tab label="message" icon="message">tab2</r-tab><r-tab label="user" icon="user">tab3</r-tab></r-tabs></div><h2 id="compatibility-兼容性" tabindex="-1">Compatibility 兼容性 <a class="header-anchor" href="#compatibility-兼容性" aria-label="Permalink to &quot;Compatibility 兼容性&quot;">​</a></h2><ul><li>不支持 <code>IE</code>，其他均有较好支持 <img src="'+p+'" alt=""></li></ul><h2 id="相关资源" tabindex="-1">相关资源 <a class="header-anchor" href="#相关资源" aria-label="Permalink to &quot;相关资源&quot;">​</a></h2><ol><li><a href="https://www.checklist.design/" target="_blank" rel="noreferrer">优秀的组件设计</a></li><li><a href="https://webgradients.com/" target="_blank" rel="noreferrer">在线生成 CSS 渐变色</a></li><li><a href="https://webgradients.com/" target="_blank" rel="noreferrer">优秀设计作品，有 psd 和 sketch</a></li><li><a href="https://spline.design/" target="_blank" rel="noreferrer">3D UI 设计，类似于 3D 版的 figma</a></li><li><a href="https://lawsofux.com/" target="_blank" rel="noreferrer">设计规范</a></li><li><a href="https://dribbble.com/" target="_blank" rel="noreferrer">优秀设计作品</a></li><li><a href="https://element.eleme.cn/#/zh-CN" target="_blank" rel="noreferrer">element UI 中文网</a></li><li><a href="https://ant.design/index-cn" target="_blank" rel="noreferrer">Ant design 中文网</a></li><li><a href="https://animista.net/" target="_blank" rel="noreferrer">在线绘制 CSS 动画</a></li><li><a href="https://www.tailwindcss.cn/resources" target="_blank" rel="noreferrer">tailwindcss 组件库</a></li><li><a href="https://animate.style/" target="_blank" rel="noreferrer">animate css 非常优秀的 css 动画</a></li><li><a href="https://caniuse.com/" target="_blank" rel="noreferrer">can i use 检测兼容性 API 网站</a></li><li><a href="https://www.figma.com/" target="_blank" rel="noreferrer">figma</a></li></ol><h2 id="协议和标准" tabindex="-1">协议和标准 <a class="header-anchor" href="#协议和标准" aria-label="Permalink to &quot;协议和标准&quot;">​</a></h2><ol><li><a href="https://www.rfc-editor.org/" target="_blank" rel="noreferrer">RFCs</a></li><li><a href="https://www.ecma-international.org/" target="_blank" rel="noreferrer">ECMA</a></li><li><a href="https://www.w3.org/" target="_blank" rel="noreferrer">w3c</a></li></ol>',8),u=[t,r,c,F,i,y,D,B,d];function m(h,g,E,A,b,C){return l(),o("div",null,u)}const _=n(e,[["render",m]]);export{v as __pageData,_ as default};
