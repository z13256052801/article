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
