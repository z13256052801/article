# CSS - 开发技巧

## 1.定位居中

```css
.dom {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
```

## 2.禁止选中文本

```css
.dom {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}
```

## 3.文本超出部分以省略号形式出现 1

```css
.dom {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

## 4.文本超出部分以省略号形式出现 2

```css
.dom {
    -webkit-line-clamp: 2; /*值为数字，表示一共显示几行*/
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box; /*值必须为-webkit-box或者-webkit-inline-box*/
    -webkit-box-orient: vertical; /*值必须为vertical*/
}
```

## 5.不包括最后一个元素

```css
.dom:not(:last-child) {
    /* 样式... */
}
```

## 6.Grid 布局 和 Flex 布局

::: tip Grid 布局 和 Flex 布局

<br />

[Grid 布局语法教程](https://blog.csdn.net/pz1021/article/details/108863522/)

---

[Flex 布局语法教程](https://www.runoob.com/w3cnote/flex-grammar.html)
:::
