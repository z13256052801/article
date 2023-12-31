import{_ as n,o as s,c as e,Q as a}from"./chunks/framework.a0b90f99.js";const l="/article/assets/bundle.9ebe4911.png",m=JSON.parse('{"title":"Bundler","description":"","frontmatter":{},"headers":[],"relativePath":"src/common_tools/bundler/index.md","filePath":"src/common_tools/bundler/index.md","lastUpdated":1693816335000}'),p={name:"src/common_tools/bundler/index.md"},o=a(`<h1 id="bundler" tabindex="-1">Bundler <a class="header-anchor" href="#bundler" aria-label="Permalink to &quot;Bundler&quot;">​</a></h1><p><code>Bundler</code>的使用： 传入 options 参数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function build(options: Options):Promise&lt;Build&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const bundle = new Bundle({</span></span>
<span class="line"><span style="color:#e1e4e8;">    entry: options.input</span></span>
<span class="line"><span style="color:#e1e4e8;">  });</span></span>
<span class="line"><span style="color:#e1e4e8;">  return bundle.build().then(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      generate: () =&gt; bundle.render()</span></span>
<span class="line"><span style="color:#e1e4e8;">    };</span></span>
<span class="line"><span style="color:#e1e4e8;">  });</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function build(options: Options):Promise&lt;Build&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const bundle = new Bundle({</span></span>
<span class="line"><span style="color:#24292e;">    entry: options.input</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;">  return bundle.build().then(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      generate: () =&gt; bundle.render()</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>架构图</p><p><img src="`+l+'" alt=""></p>',5),t=[o];function c(r,i,d,u,_,y){return s(),e("div",null,t)}const h=n(p,[["render",c]]);export{m as __pageData,h as default};
