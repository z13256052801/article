# 截取 url 参数

截取地址栏中 url 问号后面的参数

## 1.代码实现

```js
function getUrlParam(name) {
  //构造一个含有目标参数的正则表达式对象
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  //匹配目标参数
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
```

## 2.使用方法

```js
getUrlParam(NAME);
```

## 3.参数说明

| 参数 | 说明           | 必填 | 类型     | 默认值 |
| ---- | -------------- | ---- | -------- | ------ |
| NAME | 要截取的参数名 | 是   | `string` | 无     |
