# 时间格式化

时间格式化 <br/>`yyyy:mm:dd` 、 `yyyy:mm` 、 `yyyy 年 mm 月 dd 日` 、 `yyyy 年 mm 月 dd 日` 、 `hh 时 MM 分` 、 等

## 1.代码实现

```ts
/**
 * @description 时间格式化
 * @param dateTime { number } 时间戳
 * @param fmt { string } 时间格式
 * @return { string }
 */
export const timeFormat = (dateTime: number, fmt = "yyyy-mm-dd") => {
  // 如果为null,则格式化当前时间
  if (!dateTime) {
    dateTime = Number(new Date());
  }
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) {
    dateTime *= 1000;
  }
  const date = new Date(dateTime);
  let ret;
  const opt: any = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString(), // 秒
  };
  for (const k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
};
```

## 2.使用方法

```ts
timeFormat(DATETIME, FMT);
```

## 3.参数说明

| 参数     | 说明                                                                                                             | 必填 | 类型     | 默认值       |
| -------- | ---------------------------------------------------------------------------------------------------------------- | ---- | -------- | ------------ |
| DATETIME | 时间戳                                                                                                           | 否   | `date`   | 当前时间     |
| FMT      | 时间格式 <br/>`yyyy:mm:dd` 、 `yyyy:mm` 、 `yyyy 年 mm 月 dd 日` 、 `yyyy 年 mm 月 dd 日` 、 `hh 时 MM 分` 、 等 | 否   | `string` | `yyyy-mm-dd` |
