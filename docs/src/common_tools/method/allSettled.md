# 封装 Promise.allSettled()

Promise.allSettled()方法接受一个数组作为参数，数组的每个成员都是一个 Promise 对象，并返回一个新的 Promise 对象。只有等到参数数组的所有 Promise 对象都发生状态变更（不管是 fulfilled 还是 rejected），返回的 Promise 对象才会发生状态变更。

## 1.代码实现

```ts
export function useDictOptions<T = any>(options: Options) {
  const optionsData: any = reactive({});
  const optionsKey = Object.keys(options);
  const apiLists = optionsKey.map((key) => {
    const value = options[key];
    optionsData[key] = [];
    return () => value.api(toRaw(value.params) || {});
  });

  const refresh = async () => {
    const res = await Promise.allSettled<Promise<any>>(
      apiLists.map((api) => api())
    );
    res.forEach((item, index) => {
      const key = optionsKey[index];
      // 成员对象的 status属性的值只可能是字符串 fulfilled或字符串 rejected，用来区分异步操作是成功还是失败。
      // 如果是成功（fulfilled），对象会有 value属性。
      // 如果是失败（rejected），会有 reason属性，对应两种状态时前面异步操作的返回值。
      if (item.status == "fulfilled") {
        const { transformData } = options[key];
        const data = transformData ? transformData(item.value) : item.value;
        optionsData[key] = data;
      }
    });
  };
  refresh();
  return {
    optionsData: optionsData as T,
    refresh,
  };
}
```

## 2.使用方法

```ts
const { optionsData } = useDictOptions<{
  PARAM_1: any[];
  PARAM_2: any[];
  // ...
}>({
  PARAM_1: {
    api: API,
    params: PARAMS,
    transformData(data) {},
  },
  PARAM_2: {
    api: API,
    params: PARAMS,
    //回调函数，可为空
    transformData(data) {},
  },
  // ...
});
```

## 3.参数说明

| 参数             | 说明                           | 必填 | 类型      | 默认值 |
| ---------------- | ------------------------------ | ---- | --------- | ------ |
| PARAM_1、PARAM_2 | 声明变量，必须和下面的对应起来 | 是   | `array`   | 无     |
| API              | API 接口方法                   | 是   | `Promise` | 无     |
| PARAMS           | 需要传递的参数                 | 否   | `object`  | {}     |
