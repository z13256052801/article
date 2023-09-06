# ref 和 reactive

## 1.ref 和 reactive 的区别

在 Vue3 中`ref`和`reactive`是用于创建响应式数据的方法，两个 API 设计的的是为了提供更灵活的响应式数据处理方式，但它们有一些关键的区别。

#### 基本米型与对象类型

- <font size=4 color=#7379f4 ><b>ref</b></font>：主要用于基本类型(如`Number`，`string`，`Boolean`等)。当你传递一个对象给`ref`，它实际上在内部使用`reactive`。

- <font size=4 color=#7379f4 ><b>reactive</b></font>：用于对象或数组。它会将对象的每个属性都转换为响应式的。

#### 模板中的使用

- <font size=4 color=#7379f4 ><b>ref</b></font>：在模板中使用时，需要`.value`来访问其值。
- <font size=4 color=#7379f4 ><b>reactive</b></font>：在模板中可以直接访问其属性，无需`.value`。

#### 解构

- <font size=4 color=#7379f4 ><b>ref</b></font>：可以安全地解构，因为它是一个包装对象。
- <font size=4 color=#7379f4 ><b>reactive</b></font>：解构可能会导致失去响应性，除非使用 Vue 提供的`toRefs`或`shallowRefs`函数。

#### 返回类型

- <font size=4 color=#7379f4 ><b>ref</b></font>：返回一个响应式引用对象，具有一个`.value`属性指向原始值。
- <font size=4 color=#7379f4 ><b>reactive</b></font>：返回原始对象的响应式版本。

#### 内部实现

- <font size=4 color=#7379f4 ><b>ref</b></font>：是基于`reactive`的。当创建一个`ref`，实际上是在创建一个包含单一属性`.value`的`reactive`对象。

#### 转换为普通对象

- <font size=4 color=#7379f4 ><b>ref</b></font>：使用 toRaw 或直接`.value`可以获取其原始值。
- <font size=4 color=#7379f4 ><b>reactive</b></font>：使用`toRaw`可以获取其原始对象。

**示例**：

```js
import { ref, reactive } from 'vue';

//使用 ref
const count= ref(0);
console.log(count.value);   //0


//使用 reactive
const state = reactive({
    count: 0,
    message:'Hello'
})
console.log(state.count): // 0
console.log(state.message); // Hello
```

总之，选择`ref`还是`reactive`取决于具体的使用场景。对于基本类型，`ref`更为简单;而对于对象和数组，`reactive`提供了更直观的语法。

## 2.ref 和 reactive 的使用场景

**_`ref`场景_**：当你只需要一个响应式的基本类型 (如`Number`，`string`，`Boolean`) 时。

**示例**：

```js
const count= ref(0);
const message = ref( Hello Vue 3');
```

**优势**：

- 对于基本类型`ref`提供了一个简单的方式来使其成为响应式的。
- `ref`可以在任何地方使用，不仅仅是在`setup`函数中。
- 它可以安全地解构，因为上是一个包袭对象。

<br />

**_`reactive`场景_**：当一个对象，并希望该对象的所有属性都是响应式的。

**示例**：

```js
const state = reactive({
  count: 0,
  message: "Hello Vue 3",
  user: {
    name: "John",
    age: 30,
  },
});
```

**优势**：

- 对于对象，`reactive`提供了一个直观的方式来使其所有属性都成为响应式的，而无需为每个属性使用`ref`。
- 在模板和其他地方，你可以直接访问对象的属性，而不需要使用`.value`。
- 它提供了更深层次的响应性，即使对象的属性是另一个对象或数组，它们也会自动变为响应式的。
