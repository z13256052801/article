import{_ as s,o as n,c as a,U as l}from"./chunks/framework.5b95dd12.js";const C=JSON.parse('{"title":"yarn 的安装和使用","description":"","frontmatter":{},"headers":[],"relativePath":"src/other/yarn.md","lastUpdated":null}'),p={name:"src/other/yarn.md"},o=l(`<h1 id="yarn-的安装和使用" tabindex="-1">yarn 的安装和使用 <a class="header-anchor" href="#yarn-的安装和使用" aria-label="Permalink to &quot;yarn 的安装和使用&quot;">​</a></h1><h2 id="_1-简介" tabindex="-1">1.简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1.简介&quot;">​</a></h2><p>Yarn 是 facebook 发布的一款取代 npm 的包管理工具。</p><h2 id="_2-特点" tabindex="-1">2.特点 <a class="header-anchor" href="#_2-特点" aria-label="Permalink to &quot;2.特点&quot;">​</a></h2><ul><li>速度快、安全、可靠</li><li>Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。</li><li>在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。</li><li>使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。</li></ul><h2 id="_3-安装" tabindex="-1">3.安装 <a class="header-anchor" href="#_3-安装" aria-label="Permalink to &quot;3.安装&quot;">​</a></h2><p>安装</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">yarn</span></span></code></pre></div><p>查看版本</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--version</span></span></code></pre></div><h2 id="_4-常用命令" tabindex="-1">4.常用命令 <a class="header-anchor" href="#_4-常用命令" aria-label="Permalink to &quot;4.常用命令&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#安装yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">yarn</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#安装成功后，查看版本号：</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#创建文件夹 yarn</span></span>
<span class="line"><span style="color:#FFCB6B;">md</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">yarn</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#进入yarn文件夹</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">yarn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#初始化项目</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#同npm init，执行输入信息后，会生成package.json文件</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#yarn的配置项</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#显示所有配置项</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#显示某配置项</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">get</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">ke</span><span style="color:#BABED8;">y</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#删除某配置项</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">delete</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">ke</span><span style="color:#BABED8;">y</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#设置配置项</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">set</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">ke</span><span style="color:#BABED8;">y</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">valu</span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> [-g</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">--global]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#安装包</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#安装package.json里所有包，并将包及它的所有依赖项保存进yarn.lock</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#安装一个包的单一版本</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--flat</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#强制重新下载所有包</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--force</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#只安装dependencies里的包</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--production</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#不读取或生成yarn.lock</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--no-lockfile</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#不生成yarn.lock</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--pure-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#添加包（会更新package.json和yarn.lock）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#在当前的项目中添加一个依赖包，会自动更新到package.json和yarn.lock文件中</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> [package]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#安装指定版本，这里指的是主要版本，如果需要精确到小版本，使用-E参数</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> [package]@</span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">version</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#安装某个tag（比如beta,next或者latest）</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> [package]@</span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">tag</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#不指定依赖类型默认安装到dependencies里，你也可以指定依赖类型</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#加到 devDependencies</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--dev/-D</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#加到 peerDependencies</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--peer/-P</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#加到 optionalDependencies</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--optional/-O</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#默认安装包的主要版本里的最新版本，下面两个命令可以指定版本</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#安装包的精确版本。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#例如yarn add foo@1.2.3会接受1.9.1版，但是yarn add foo@1.2.3 --exact只会接受1.2.3版</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--exact/-E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#安装包的次要版本里的最新版。例如yarn add foo@1.2.3 --tilde会接受1.2.9，但不接受1.3.0</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--tilde/-T</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#发布包</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">publish</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#移除一个包</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#移除一个包，会自动更新package.json和yarn.lock</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">packageNam</span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#更新一个依赖</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#用于更新包到基于规范范围的最新版本</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">upgrade</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#运行脚本</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#yarn run 用来执行在 package.json 中 scripts 属性下定义的脚本</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#显示某个包的信息</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#可以用来查看某个模块的最新版本信息</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">info</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">packageNam</span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#缓存</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">cache</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#列出已缓存的每个包</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">cache</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#返回 全局缓存位置</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">cache</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">dir</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#清除缓存</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">cache</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clean</span></span></code></pre></div><h2 id="_5-npm-与-yarn-命令比较" tabindex="-1">5.npm 与 yarn 命令比较 <a class="header-anchor" href="#_5-npm-与-yarn-命令比较" aria-label="Permalink to &quot;5.npm 与 yarn 命令比较&quot;">​</a></h2><blockquote><p>在你安装 A 的时候需要安装依赖 C 和 D，很多依赖不会指定版本号，默认会安装最新的版本，这样就会出现问题：比如今天安装模块的时候 C 和 D 是某一个版本，而当以后 C、D 更新的时候，再次安装模块就会安装 C 和 D 的最新版本，如果新的版本无法兼容你的项目，你的程序可能就会出 BUG，甚至无法运行。这就是 npm 的弊端，而 yarn 为了解决这个问题推出了 yarn.lock 的机制，这是作者项目中的 yarn.lock 文件。</p></blockquote><p>注意：这个文件不要手动修改它，当你使用一些操作如 yarn add 时，yarn 会自动更新 yarn.lock。</p>`,15),e=[o];function t(c,r,y,i,B,E){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{C as __pageData,F as default};
