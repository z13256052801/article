# 字符串大小写转换

字符串大小写转换

## 1.代码实现

```js
function changeCase(str, type) {
  type = type || 4;
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, (word) => {
        return (
          word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
        );
      });
    case 2:
      return str.replace(/\b\w+\b/g, (word) => {
        return (
          word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
        );
      });
    case 3:
      return str
        .split("")
        .map((word) => {
          if (/[a-z]/.test(word)) {
            return word.toUpperCase();
          } else {
            return word.toLowerCase();
          }
        })
        .join("");
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
}
```

## 2.使用方法

```js
changeCase(STR, TYPE);
```

## 3.参数说明

| 参数 | 说明                                                                                      | 必填 | 类型     | 默认值 |
| ---- | ----------------------------------------------------------------------------------------- | ---- | -------- | ------ |
| STR  | 需要转换的字符串                                                                          | 是   | `string` | 无     |
| TYPE | 1: 首字母大写 <br/> 2: 首页母小写 <br/> 3: 大小写转换 <br/> 4: 全部大写 <br/> 5: 全部小写 | 否   | `number` | 4      |
