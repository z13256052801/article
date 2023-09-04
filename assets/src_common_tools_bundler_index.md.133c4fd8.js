import{_ as n,o as s,c as e,U as a}from"./chunks/framework.ffd6f941.js";const l="/assets/bundle.9ebe4911.png",h=JSON.parse('{"title":"Bundler","description":"","frontmatter":{},"headers":[],"relativePath":"src/common_tools/bundler/index.md","lastUpdated":1693816335000}'),t={name:"src/common_tools/bundler/index.md"},o=a(`<h1 id="bundler" tabindex="-1">Bundler <a class="header-anchor" href="#bundler" aria-label="Permalink to &quot;Bundler&quot;">​</a></h1><p><code>Bundler</code>的使用： 传入 options 参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">function build(options: Options):Promise&lt;Build&gt; {</span></span>
<span class="line"><span style="color:#babed8;">  const bundle = new Bundle({</span></span>
<span class="line"><span style="color:#babed8;">    entry: options.input</span></span>
<span class="line"><span style="color:#babed8;">  });</span></span>
<span class="line"><span style="color:#babed8;">  return bundle.build().then(() =&gt; {</span></span>
<span class="line"><span style="color:#babed8;">    return {</span></span>
<span class="line"><span style="color:#babed8;">      generate: () =&gt; bundle.render()</span></span>
<span class="line"><span style="color:#babed8;">    };</span></span>
<span class="line"><span style="color:#babed8;">  });</span></span>
<span class="line"><span style="color:#babed8;">}</span></span></code></pre></div><p>架构图</p><p><img src="`+l+'" alt=""></p>',5),p=[o];function c(r,d,i,b,_,u){return s(),e("div",null,p)}const y=n(t,[["render",c]]);export{h as __pageData,y as default};
