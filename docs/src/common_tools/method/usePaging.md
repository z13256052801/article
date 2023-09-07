# 封装列表(hooks) - usePaging()

封装列表 hooks，复用简单列表

## 1.代码实现

```ts
import { reactive, toRaw } from "vue";

// 分页钩子函数
interface Options {
  page?: number;
  size?: number;
  fetchFun: (_arg: any) => Promise<any>;
  params?: Record<any, any>;
  firstLoading?: boolean;
}

export function usePaging(options: Options) {
  const {
    page = 1,
    size = 10,
    fetchFun,
    params = {},
    firstLoading = false,
  } = options;
  // 记录分页初始参数
  const paramsInit: Record<any, any> = Object.assign({}, toRaw(params));
  // 分页数据
  const pager = reactive({
    page,
    size,
    loading: firstLoading,
    count: 0,
    lists: [] as any[],
    extend: [] as any[], //其它扩展数据列表
  });
  // 请求分页接口
  const getLists = () => {
    pager.loading = true;
    return fetchFun({
      page_no: pager.page,
      page_size: pager.size,
      ...params,
    })
      .then((res: any) => {
        pager.count = res?.count;
        pager.lists = res?.lists;
        pager.extend = res?.extend;
        return Promise.resolve(res);
      })
      .catch((err: any) => {
        return Promise.reject(err);
      })
      .finally(() => {
        pager.loading = false;
      });
  };
  // 重置为第一页
  const resetPage = () => {
    pager.page = 1;
    getLists();
  };
  // 重置参数
  const resetParams = () => {
    Object.keys(paramsInit).forEach((item) => {
      params[item] = paramsInit[item];
    });
    getLists();
  };
  return {
    pager,
    getLists,
    resetParams,
    resetPage,
  };
}
```

## 2.使用方法

```ts
import { api } from "@/api/test";

const { pager, getLists, resetParams, resetPage } = usePaging({
  fetchFun: api,
  params: {},
});
```

## 3.参数说明

| 参数           | 说明             | 必填 | 类型      | 默认值 |
| -------------- | ---------------- | ---- | --------- | ------ |
| params         | 请求参数         | 否   | `object`  | {}     |
| fetchFun       | API 接口方法     | 是   | `Promise` | 无     |
| page           | 当前页           | 否   | `number`  | 1      |
| size           | 每页条数         | 否   | `number`  | 10     |
| firstLoading   | 加载效果         | 否   | `boolean` | false  |
| 使用方法结构值 |
| pager          | 分页信息         | 否   |           |        |
| getLists       | 请求分页数据接口 | 是   |           |        |
| resetParams    | 重置参数         | 否   |           |        |
| resetPage      | 重置为第一页     | 否   |           |        |
