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

## 3.文本超出部分以省略号形式出现

```css
.dom {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## 4.Grid 布局 和 Flex 布局

::: tip Grid 布局 和 Flex 布局

<br />

[Grid 布局语法教程](https://blog.csdn.net/pz1021/article/details/108863522/)

---

[Flex 布局语法教程](https://www.runoob.com/w3cnote/flex-grammar.html)
:::
