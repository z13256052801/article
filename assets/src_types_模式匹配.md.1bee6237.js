import{_ as s,o as a,c as n,U as l}from"./chunks/framework.5b95dd12.js";const A=JSON.parse('{"title":"模式匹配","description":"","frontmatter":{},"headers":[],"relativePath":"src/types/模式匹配.md","lastUpdated":1693816335000}'),p={name:"src/types/模式匹配.md"},o=l('<h1 id="模式匹配" tabindex="-1">模式匹配 <a class="header-anchor" href="#模式匹配" aria-label="Permalink to &quot;模式匹配&quot;">​</a></h1><p>Typescript 的类型也同样可以做模式匹配。</p><p>比如这样一个 Promise 类型：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">p</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>我们想提取 value 的类型，可以这样做：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">GetPromiseValue</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;infer</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">value</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">value</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">never</span></span></code></pre></div><p>通过 extends 对传入的类型参数 P 做模式匹配，其中值的类型是需要提取的，通过 infer 声明一个局部变量 Value 来保存，如果匹配，就返回匹配到的 Value，否则就返回 never 代表没匹配到。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">result</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">GetPromiseValue</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// name</span></span></code></pre></div><h2 id="数组类型" tabindex="-1">数组类型 <a class="header-anchor" href="#数组类型" aria-label="Permalink to &quot;数组类型&quot;">​</a></h2><p>数组类型想提取第一个元素的类型怎么做呢？</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">arr</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">]</span></span></code></pre></div><p>用它来匹配一个模式类型，提取第一个元素的类型到通过 infer 声明的局部变量里返回。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">GetArrayFirstItem</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> [</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">infer</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">value</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">...</span><span style="color:#FFCB6B;">unknown</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#BABED8;">]</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">value</span></span>\n<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">never</span></span></code></pre></div><p>类型参数 Arr 通过 extends 约束为只能是数组类型，数组元素是 unknown 也就是可以是任何值。</p><blockquote><p>any 和 unknown 的区别： any 和 unknown 都代表任意类型，但是 unknown 只能接收任意类型的值，而 any 除了可以接收任意类型的值，也可以赋值给任意类型（除了 never）。类型体操中经常用 unknown 接受和匹配任何类型，而很少把任何类型赋值给某个类型变量。</p></blockquote><p>对 Arr 做模式匹配，把我们要提取的第一个元素的类型放到通过 infer 声明的 First 局部变量里，后面的元素可以是任何类型，用 unknown 接收，然后把局部变量 First 返回。</p><p>当类型参数 Arr 为 [1,2,3] 时：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">result</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">GetArrayFirstItem</span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span></code></pre></div><p>当类型参数 Arr 为 [] 时：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">result</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">GetArrayFirstItem</span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// never</span></span></code></pre></div><p>可以提取第一个元素，当然也可以提取最后一个元素，修改下模式类型就行：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">GetArrayLastItem</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#FFCB6B;">unknown</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">inter</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">L</span><span style="color:#BABED8;">] </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">L</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">never</span></span></code></pre></div><p>我们分别取了首尾元素，当然也可以取剩余的数组，比如取去掉了最后一个元素的数组：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Pop</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> [] </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> [] </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> [</span><span style="color:#89DDFF;">...infer</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Rest</span><span style="color:#89DDFF;">,</span><span style="color:#FFCB6B;">unknown</span><span style="color:#BABED8;">] </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Rest</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">never</span></span></code></pre></div><p>如果是空数组，就直接返回，否则匹配剩余的元素，放到 infer 声明的局部变量 Rest 里，返回 Rest。</p><p>当类型参数 Arr 为 [1,2,3] 时：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Result</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Pop</span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// [1,2]</span></span></code></pre></div><p>当类型参数 Arr 为 [] 时：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Result</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Pop</span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">// []</span></span></code></pre></div><p>同理可得 ShiftArr 的实现：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Shift</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> [] </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> [] </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> [</span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">,...infer</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Rest</span><span style="color:#BABED8;">] </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Rest</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">never</span></span></code></pre></div><p>字符串类型也同样可以做模式匹配，匹配一个模式字符串，把需要提取的部分放到 infer 声明的局部变量里。</p><p>判断字符串是否以某个前缀开头，也是通过模式匹配：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">StartWidth</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">S</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">P</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">S</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">`${</span><span style="color:#FFCB6B;">P</span><span style="color:#89DDFF;">}${</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}`</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">true</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">false</span></span></code></pre></div><p>需要声明字符串 Str、匹配的前缀 Prefix 两个类型参数，它们都是 string。</p><p>用 Str 去匹配一个模式类型，模式类型的前缀是 Prefix，后面是任意的 string，如果匹配返回 true，否则返回 false。</p><p>字符串可以匹配一个模式类型，提取想要的部分，自然也可以用这些再构成一个新的类型。</p><p>比如实现字符串替换：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Replace</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">S</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">F</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">S</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">`${</span><span style="color:#89DDFF;">infer</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">P</span><span style="color:#89DDFF;">}${</span><span style="color:#FFCB6B;">F</span><span style="color:#89DDFF;">}${</span><span style="color:#89DDFF;">infer</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">L</span><span style="color:#89DDFF;">}`</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">`${</span><span style="color:#FFCB6B;">P</span><span style="color:#89DDFF;">}${</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">}${</span><span style="color:#FFCB6B;">L</span><span style="color:#89DDFF;">}`</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">S</span></span></code></pre></div><p>声明要替换的字符串 Str、待替换的字符串 From、替换成的字符串 3 个类型参数，通过 extends 约束为都是 string 类型。</p><p>用 Str 去匹配模式串，模式串由 From 和之前之后的字符串构成，把之前之后的字符串放到通过 infer 声明的局部变量 Prefix、Suffix 里。</p><p>用 Prefix、Suffix 加上替换到的字符串 To 构造成新的字符串类型返回。</p><h3 id="trim" tabindex="-1">Trim <a class="header-anchor" href="#trim" aria-label="Permalink to &quot;Trim&quot;">​</a></h3><p>能够匹配和替换字符串，那也就能实现去掉空白字符的 Trim：</p><p>不过因为我们不知道有多少个空白字符，所以只能一个个匹配和去掉，需要递归。</p><p>先实现 TrimRight:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">TrimRight</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">S</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">S</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">`${</span><span style="color:#89DDFF;">infer</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Rest</span><span style="color:#89DDFF;">}${&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">\\t</span><span style="color:#89DDFF;">&#39;}`</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">TrimRight</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Rest</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">S</span></span></code></pre></div><p>类型参数 Str 是要 Trim 的字符串。</p><p>如果 Str 匹配字符串 + 空白字符 (空格、换行、制表符)，那就把字符串放到 infer 声明的局部变量 Rest 里。</p><p>把 Rest 作为类型参数递归 TrimRight，直到不匹配，这时的类型参数 Str 就是处理结果。</p><p>同理可得 TrimLeft：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">TrimLeft</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">S</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">S</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">`${&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">\\t</span><span style="color:#89DDFF;">&#39;}${</span><span style="color:#89DDFF;">infer</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Rest</span><span style="color:#89DDFF;">}`</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">TrimLeft</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Rest</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">S</span></span></code></pre></div><p>TrimRight 和 TrimLeft 结合就是 Trim：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Trim</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">S</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">TrimLeft</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TrimRight</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">S</span><span style="color:#89DDFF;">&gt;&gt;</span></span></code></pre></div><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><p>函数同样也可以做类型匹配，比如提取参数、返回值的类型。</p><h3 id="getparameters" tabindex="-1">GetParameters <a class="header-anchor" href="#getparameters" aria-label="Permalink to &quot;GetParameters&quot;">​</a></h3><p>函数类型可以通过模式匹配来提取参数的类型：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">GetParameters</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#BABED8;font-style:italic;">args</span><span style="color:#89DDFF;">:infer</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">A</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">unknown</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">A</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">never</span></span></code></pre></div><p>类型参数 Func 是要匹配的函数类型，通过 extends 约束为 Function。</p><p>Func 和模式类型做匹配，参数类型放到用 infer 声明的局部变量 Args 里，返回值可以是任何类型，用 unknown。</p><p>返回提取到的参数类型 Args。</p><h3 id="getreturntype" tabindex="-1">GetReturnType <a class="header-anchor" href="#getreturntype" aria-label="Permalink to &quot;GetReturnType&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">GetReturnType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#BABED8;font-style:italic;">args</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">unknown</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">infer</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">R</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">R</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">never</span></span></code></pre></div><p>Func 和模式类型做匹配，提取返回值到通过 infer 声明的局部变量 ReturnType 里返回。</p><p>参数类型可以是任意类型，也就是 any[]（注意，这里不能用 unknown，这里的解释涉及到参数的逆变性质，具体原因逆变那一节会解释）。</p><h3 id="getthisparametertype" tabindex="-1">GetThisParameterType <a class="header-anchor" href="#getthisparametertype" aria-label="Permalink to &quot;GetThisParameterType&quot;">​</a></h3><p>方法里可以调用 this，用对象.方法名的方式调用的时候，this 就指向那个对象。</p><p>但是方法也可以用 call 或者 apply 调用，call 调用的时候，this 就变了，但这里却没有被检查出来 this 指向的错误。</p><p>这里的 this 类型同样也可以通过模式匹配提取出来：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">GetThisParameterType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;font-style:italic;">this</span><span style="color:#89DDFF;">:infer</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">H</span><span style="color:#89DDFF;">,...</span><span style="color:#BABED8;font-style:italic;">args</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">unknown</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">H</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">unknown</span></span></code></pre></div><h3 id="构造器" tabindex="-1">构造器 <a class="header-anchor" href="#构造器" aria-label="Permalink to &quot;构造器&quot;">​</a></h3><p>构造器和函数的区别是，构造器是用于创建对象的，所以可以被 new。</p><p>同样，我们也可以通过模式匹配提取构造器的参数和返回值的类型：</p><h4 id="getinstancetype" tabindex="-1">GetInstanceType <a class="header-anchor" href="#getinstancetype" aria-label="Permalink to &quot;GetInstanceType&quot;">​</a></h4><p>构造器类型可以用 interface 声明，使用 new(): xx 的语法。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">PersonConstructor</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">new(</span><span style="color:#BABED8;font-style:italic;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>这里的 PersonConstructor 返回的是 Person 类型的实例对象，这个也可以通过模式匹配取出来。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">GetInstanceType</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">C</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#BABED8;font-style:italic;">args</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">unknown</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">C</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#BABED8;font-style:italic;">args</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">unknown</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">infer</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">?</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">unknown</span></span></code></pre></div>',79),e=[o];function t(r,c,B,y,F,D){return a(),n("div",null,e)}const E=s(p,[["render",t]]);export{A as __pageData,E as default};
