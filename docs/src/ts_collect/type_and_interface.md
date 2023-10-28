# type 与 interface 的区别

在 TypeScript 中，`type` 和 `interface` 这两个概念比较容易混淆，它们都可以用来表示 接口，但是在实际使用上会存在一些差异。本文主要对二者的区别进行简述，希望能够帮助大家更好地区分与使用它们。

## 1.基本概念

### type（类型别名）

用来给一个类型起新名字，使用 type 创建类型别名。类型别名不仅可以用来表示基本类型，还可以用来表示对象类型、联合类型、元组和交集。

```ts
type userName = string; // 基本类型
type userMsg = string | number; // 联合类型

// 对象类型
type Person = {
  name: userName;
  age: number;
};

// 使用Person类型
let user: Person = {
  name: "leo",
  age: 18,
};
```

### interface（接口）

接口是命名数据结构（例如对象）的另一种方式；与 type 不同，interface 仅限于描述对象类型。接口的声明语法也不同于类型别名的声明语法。如将上面的类型别名 Person 重写为接口声明如下所示。

```ts
interface Person {
  name: userName;
  age: number;
}
```

## 2.相同之处

### 都可以用来定义对象和函数

**type（类型别名）**

```ts
type Position = {
  x: number;
  y: number;
};

type SetPosition = (x: number, y: number) => void;
```

**interface（接口）**

```ts
interface Position {
  x: number;
  y: number;
}

interface SetPosition {
  (x: number, y: number): void;
}
```

### 都可以实现继承

type 和 interface 并不互斥。type 可以继承 interface，反之亦然。只是在实现形式上，稍微有些区别。

**type（类型别名）**

```ts
// type 继承 type
type Person {
    name: string
}

type Student = Person & { stuId: number }

// type 继承 interface
interface Person {
    name: string
}

type Student = Person & { stuId: number
```

**interface（接口）**

```ts
// interface 继承 interface
interface Person {
    name: string
}

interface Student extends Person { stuId: number }

// interface 继承 type
type Person {
    name: string
}

interface Student extends Person { stuId: number }
```

小结：对于 `interface` 来说，继承是通过 `extends` 实现的；而 `type` 是通过 `&` 来实现的，也可以叫做交叉类型。

## 3.不同之处

### type 可以做到而 interface 不能做到

type 可以声明**基本类型**。

```ts
type userName = string;
```

type 可以声明**联合类型**。

```ts
type userMsg = string | number;
```

type 可以声明**元组类型**。

```ts
type Data = [number, string];
```

`type` 可以通过 `typeof` 操作符来声明

```ts
type myType = typeof someObj;
```

### interface 可以做到而 type 不能做到

interface 可以**声明合并**。

```ts
interface test {
  name: string;
}
interface test {
  age: number;
}

/*
    test实际为 {
        name: string
        age: number
    }
*/
```

如果是 type 的话，就会报**重复定义**的警告，因此是无法实现**声明合并**的。

## 4.使用建议

- 官方推荐使用 `interface`，其他无法满足需求的情况下用 type。但是因为**联合类型**和**交叉类型**是比较常用的，所以避免不了大量使用 `type` 的场景，一些复杂类型也需要通过组装后形成类型别名来使用。

- 如果想保持代码统一，还是可选择使用 `type`。通过上面的对比，`type` 其实可涵盖 `interface` 的大部分场景。

- 对于 React 组件中 `props` 及 `state`，推荐使用 `type`，这样能够保证使用组件的地方不能随意在上面添加属性。如果有自定义需求，可通过 HOC（高阶组件）二次封装。

- 编写三方库时使推荐使用 `interface`，其更加灵活自动的类型合并可应对未知的复杂使用场景。
