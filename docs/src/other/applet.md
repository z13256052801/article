# 小程序 / uniapp

## 1.小程序-env(safe-area-inset-bottom)的使用

### 简介

`env(safe-area-inset-bottom)` 和 `env(safe-area-inset-top)`是 CSS 中的变量，用于获取设备底部和顶部安全区域的大小。
所谓的安全区域就是指在 iPhone X 及以上的设备中，为避免被屏幕的“刘海”和“Home Indicator”所遮挡或者覆盖的有效区域区域，以确保内容在安全区域内显示。

-   这个变量最好和 `padding` 或者 `height`（可结合 `calc` 一起）结合使用，会达到最好的效果。

### 应用

1. <b>和 `padding` 的结合</b>

```css
padding-bottom: env(safe-area-inset-bottom);
```

如果想让安全区域再靠上 20px，则结合 `calc` 使用如下：

```css
padding-bottom: calc(20px + env(safe-area-inset-bottom));
```

2. <b>和 `height` 的结合</b>

```css
height: calc(100vh - 144px - env(safe-area-inset-top) - env(safe-area-inset-bottom));
```

3. <b>机型兼容</b>

在某些机型上识别不出 `env(safe-area-inset-bottom)` 和 `env(safe-area-inset-top)` ，会导致高度等失效。可做如下兼容：

```css
/* 兼容普通机型，不识别变量的机型： */
height: calc(100vh - 144px);
/* 兼容苹果手机 */
height: calc(100vh - 144px - env(safe-area-inset-top) - env(safe-area-inset-bottom));
```

<i>如果识别这两个变量，则执行第二句，覆盖第一句；如果不识别这两个变量呢，则不识别第二句，执行第一句。这就是一个完美的兼容写法！</i>
