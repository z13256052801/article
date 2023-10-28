# 其它

## 1.计算分页

-   丢弃小数部分,保留整数部分

```js
parseInt(7 / 2)
```

<br />

-   向上取整,有小数就整数部分加 1

```js
Math.ceil(7 / 2)
```

<br />

-   四舍五入

```js
Math.round(7 / 2)
```

<br />

-   向下取整

```js
Math.floor(7 / 2)
```

<br />

-   分页的总页数算法
    -   总记录数：`totalRecord`
    -   每页最大记录数：`maxResult`
    -   总页数：`totalPage`

方法一:

```js
totalPage =
    totalRecord % maxResult == 0 ? totalRecord / maxResult : Math.ceil(totalRecord / maxResult)
```

方法二:

```js
// 其中 maxResult  - 1 就是 totalRecord / maxResult 的最大的余数
totalPage = (totalRecord + maxResult - 1) / maxResult
```

## 2.基于 js 实现数组相邻元素上移下移

当上移时，则是当前元素与上一元素调换位置；当下移时，则是当前元素与下一元素调换位置。

```js
//点击上移
clickUp(index){
 this.swapArray(this.tableData, index-1, index);
}

//点击下移
clickDown(index){
 this.swapArray(this.tableData, index, index+1);
}

//数组元素互换位置
swapArray(arr, index1, index2) {
 arr[index1] = arr.splice(index2, 1, arr[index1])[0];
 return arr;
}
```
