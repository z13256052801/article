# yarn 的安装和使用

## 1.简介

Yarn 是 facebook 发布的一款取代 npm 的包管理工具。

## 2.特点

- 速度快、安全、可靠
- Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。
- 在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。
- 使用详细、简洁的锁文件格式和明确的安装算法，Yarn 能够保证在不同系统上无差异的工作。

## 3.安装

安装

```shell
npm install -g yarn
```

查看版本

```shell
yarn --version
```

## 4.常用命令

```shell
#安装yarn
npm install -g yarn
#安装成功后，查看版本号：
yarn --version
#创建文件夹 yarn
md yarn
#进入yarn文件夹
cd yarn

#初始化项目
#同npm init，执行输入信息后，会生成package.json文件
yarn init
#yarn的配置项
#显示所有配置项
yarn config list
#显示某配置项
yarn config get <key>
#删除某配置项
yarn config delete <key>
#设置配置项
yarn config set <key> <value> [-g|--global]

#安装包
#安装package.json里所有包，并将包及它的所有依赖项保存进yarn.lock
yarn install
#安装一个包的单一版本
yarn install --flat
#强制重新下载所有包
yarn install --force
#只安装dependencies里的包
yarn install --production
#不读取或生成yarn.lock
yarn install --no-lockfile
#不生成yarn.lock
yarn install --pure-lockfile

#添加包（会更新package.json和yarn.lock）
#在当前的项目中添加一个依赖包，会自动更新到package.json和yarn.lock文件中
yarn add [package]
#安装指定版本，这里指的是主要版本，如果需要精确到小版本，使用-E参数
yarn add [package]@[version]
#安装某个tag（比如beta,next或者latest）
yarn add [package]@[tag]

#不指定依赖类型默认安装到dependencies里，你也可以指定依赖类型
#加到 devDependencies
yarn add --dev/-D
#加到 peerDependencies
yarn add --peer/-P
#加到 optionalDependencies
yarn add --optional/-O

#默认安装包的主要版本里的最新版本，下面两个命令可以指定版本
#安装包的精确版本。
#例如yarn add foo@1.2.3会接受1.9.1版，但是yarn add foo@1.2.3 --exact只会接受1.2.3版
yarn add --exact/-E
#安装包的次要版本里的最新版。例如yarn add foo@1.2.3 --tilde会接受1.2.9，但不接受1.3.0
yarn add --tilde/-T

#发布包
yarn publish
#移除一个包
#移除一个包，会自动更新package.json和yarn.lock
yarn remove <packageName>
#更新一个依赖
#用于更新包到基于规范范围的最新版本
yarn upgrade
#运行脚本
#yarn run 用来执行在 package.json 中 scripts 属性下定义的脚本
#显示某个包的信息
#可以用来查看某个模块的最新版本信息
yarn info <packageName>
#缓存
yarn cache
#列出已缓存的每个包
yarn cache list
#返回 全局缓存位置
yarn cache dir
#清除缓存
yarn cache clean
```

## 5.npm 与 yarn 命令比较

> 在你安装 A 的时候需要安装依赖 C 和 D，很多依赖不会指定版本号，默认会安装最新的版本，这样就会出现问题：比如今天安装模块的时候 C 和 D 是某一个版本，而当以后 C、D 更新的时候，再次安装模块就会安装 C 和 D 的最新版本，如果新的版本无法兼容你的项目，你的程序可能就会出 BUG，甚至无法运行。这就是 npm 的弊端，而 yarn 为了解决这个问题推出了 yarn.lock 的机制，这是作者项目中的 yarn.lock 文件。

注意：这个文件不要手动修改它，当你使用一些操作如 yarn add 时，yarn 会自动更新 yarn.lock。
