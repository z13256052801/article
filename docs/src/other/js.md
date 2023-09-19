# JS - 开发技巧

## 1.截取字符串

```js
//截取字符串，并且返回一个新的字符串
//strJoin：要截取的字符串
var strSplit = strJoin.substring(0, strJoin.length - 1);
```

## 2.去除末尾最后一个逗号

```js
//截取字符串，并且返回一个新的字符串
//strJoin：要截取的字符串
var reg = /,$/gi;
console.log(str.replace(reg, ""));
```

## 3.桌面通知

```js
//桌面通知，只有chrome，firefox浏览器支持桌面API
Notification.requestPermission(function (status) {
  var n = new Notification("通知消息", { body: "文字文字文字" });
});
```

## 4.冒泡排序

```js
/*	
	实现思路：
		1、比较相邻的两个元素，如果前一个比后一个大，则交换位置。
		2、比较完第一轮的时候，最后一个元素是最大的元素。
		3、这时候最后一个元素是最大的，所以最后一个元素就不需要参与比较大小。
*/
function bSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      // 相邻元素两两对比，元素交换，大的元素交换到后面
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // 方法二 通过解构赋值交换变量的值
        // [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}
//使用函数
bSort([20, 18, 27, 19, 35]);
```

## 5.根据数组中某一项进行排序

```js
var arr = [
  { name: "LL", age: 5 },
  { name: "XX", age: 24 },
  { name: "YY", age: 16 },
  { name: "ZZ", age: 10 },
  { name: "AA", age: 26 },
];

function compare(value) {
  return function (a, b) {
    var aaa = a[value];
    var bbb = b[value];
    return aaa - bbb;
  };
}
console.log(arr.sort(compare("age")));
```

## 6.禁用 F12

```js
document.onkeydown = function () {
  if (window.event && window.event.keyCode == 123) {
    event.keyCode = 0;
    event.returnValue = false;
    return false;
  }
};
```

## 7.禁用鼠标右键

```js
document.oncontextmenu = new Function("event.returnValue=false");
document.onselectstart = new Function("event.returnValue=false");
```

## 8.if 判断逻辑优化

```js
//Longhand
if (x === "abc" || x === "def" || x === "ghi" || x === "jkl") {
  //logic
}

//Shorthand
if (["abc", "def", "ghi", "jkl"].includes(x)) {
  //logic
}
```

```js
//Longhand
if (test1) {
	callMethod();
}

//Shorthand
test1 && callMethod();//logic
}
```

## 9.switch 逻辑优化

```js
// Longhand
switch (data) {
  case1:
    test1();
  break;

  case2:
    test2();
  break;

  case3:
    test();
  break;
  // And so on...
}

// Shorthand
var data = {
  1: test1,
  2: test2,
  3: test
};

data[something] && data[something]();
```

## 10.数组合并 - 扩展运算符简写

```js
//longhand
// joining arrays using concat
const data = [1, 2, 3];
const test = [4, 5, 6].concat(data);

//shorthand
// joining arrays
const data = [1, 2, 3];
const test = [4, 5, 6, ...data];
console.log(test); // [ 4, 5, 6, 1, 2, 3]
```

## 11.根据数组对象属性查找特定对象

```js
const data = [
  {
    type: "test1",
    name: "abc",
  },
  {
    type: "test2",
    name: "cde",
  },
  {
    type: "test1",
    name: "fgh",
  },
];
const filteredData = data.find(
  (data) => data.type === "test1" && data.name === "fgh"
);
console.log(filteredData); // { type: 'test1', name: 'fgh' }
```

## 12.将对象转换为对象数组

```js
const data = { test1: "abc", test2: "cde", test3: "efg" };
const arr = Object.entries(data);
console.log(arr);
/** Output:
[ 
    [ 'test1', 'abc' ],
    [ 'test2', 'cde' ],
    [ 'test3', 'efg' ]
]
**/
```

## 13.在数组中查找最大值和最小值

```js
const arr = [1, 2, 3];
Math.max(…arr); // 3
Math.min(…arr); // 1
```

## 14.下载文件

```js
downloadFile("url", "name");

//下载文件
function downloadFile(url, fileName) {
  var x = new XMLHttpRequest();
  x.open("GET", url, true);
  x.responseType = "blob";
  x.onload = function (e) {
    var url = window.URL.createObjectURL(x.response);
    var a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
  };
  x.send();
}
```

## 15.下载文件.xlsx

```js
//添加ajax参数 responseType: 'arraybuffer',
//data: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet格式的文件
//fileName: 文件名
function downloadXlsx(data, fileName) {
  var blob = new Blob([data], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",
  });
  var link = document.createElement("a");
  link.style.display = "none";
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", fileName + ".xlsx");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
```

## 16.数据类型检测

```js
function checkType(target) {
  return Object.prototype.tostring.call(target);
}
```

## 17.数组去重

```js
function unique(arr) {
  return [...new Set(arr)];
}
```

## 18.字符串去重

```js
function uniq(str) {
    return str.replace(/(\w)\1+/g，'$1')
}
```

## 19.取消冒泡

取消冒泡的兼容代码

```js
function stopBubble(e) {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  } else {
    window.event.cancelBubble = true;
  }
}
```

## 19.获得滚动条的滚动距离

```js
function getScrolloffset() {
    if (window.pageX0ffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document,documentElement.scrollleft,
            y: document.body.scrollTop + document.documentElement. scrollTop
        }
    }
}
```

## 20.生成随机数范围

```js
function setRandom(min，max){
    if (arguments.length === 2) {
        return Math.floor(min + Math.random() * ((max + 1) - min))
    } else {
        return null
    }
}
```

## 21.单选、多选

```vue
<template>
  <div
    class="item"
    v-for="(item, index) in list.open_time"
    :key="index"
    @click="selectBox(item)"
    :class="{ 'item-active': selectIndexArr.includes(item.id) }"
  >
    {{ item.times }}
  </div>
</template>

<script>
data() {
    return {
        selectIndexArr: [],
        isMultipleSelect: true,
    }
},
methods: {
    selectBox(id) {
        if (this.isMultipleSelect) { //多选
            if (this.selectIndexArr.includes(id)) {
                this.selectIndexArr = this.selectIndexArr.filter(item => item !== id);
            } else {
                this.selectIndexArr.push(id);
            }
        } else { //单选
            this.selectIndexArr = [];
            this.selectIndexArr.push(id);
        }
        console.log(this.selectIndexArr)
    }
}
</script>
```

## 22.计算数组里面的数字是否连续

```js
function isConsecutive(arr) {
  arr.sort((a, b) => a - b); //排序
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== 1) {
      return false;
    }
  }
  return true;
}
```
