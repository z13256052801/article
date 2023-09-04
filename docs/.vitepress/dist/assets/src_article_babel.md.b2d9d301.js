import{_ as e,o as a,c as t,U as l}from"./chunks/framework.5b95dd12.js";const u=JSON.parse('{"title":"Babel","description":"","frontmatter":{},"headers":[],"relativePath":"src/article/babel.md","lastUpdated":null}'),r={name:"src/article/babel.md"},i=l('<h1 id="babel" tabindex="-1">Babel <a class="header-anchor" href="#babel" aria-label="Permalink to &quot;Babel&quot;">​</a></h1><p>babel 核心库主要是：</p><ul><li>@babel/parser 对源码进行 parse，可以通过 plugins、sourceType 等来指定 parse 语法，功能是把源码转成 AST。</li><li>@babel/traverse 通过 visitor 函数对遍历到的 ast 进行处理，分为 enter 和 exit 两个阶段，具体操作 AST 使用 path 的 api，还可以通过 state 来在遍历过程中传递一些数据</li><li>@babel/types 用于创建、判断 AST 节点，提供了 xxx、isXxx、assertXxx 的 api</li><li>@babel/template 当需要批量创建 AST 的时候可以使用 @babel/template 来简化 AST 创建逻辑。</li><li>@babel/code-frame 可以创建友好的报错信息</li><li>@babel/generator 打印 AST 成目标代码字符串，支持 comments、minified、sourceMaps 等选项。</li><li>@babel/core 基于上面的包来完成 babel 的编译流程，并应用 plugin 和 preset。</li></ul>',3),s=[i];function b(o,c,n,p,_,d){return a(),t("div",null,s)}const T=e(r,[["render",b]]);export{u as __pageData,T as default};
