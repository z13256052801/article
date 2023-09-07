# Vue2 生命周期

![image](../../../public/Vue2%E7%94%9F%E6%98%8E%E5%91%A8%E6%9C%9F.png)

**Vue2 拥有以下生命周期钩子函数：**

_<font size=4 color=darkorange >创建阶段（Initialization）</font>_

- <font size=4 color=#7379f4 ><b>beforeCreate</b></font>：在实例初始化之后，数据观测和事件配置之前被调用。
- <font size=4 color=#7379f4 ><b>created</b></font>：在实例创建完成后被调用。此阶段完成了数据观测、属性和方法的运算，但是尚未挂载到 DOM 上。

_<font size=4 color=darkorange >模板编译阶段（Template Compilation）</font>_

- <font size=4 color=#7379f4 ><b>beforeMount</b></font>：在挂载开始之前被调用。相关的 render 函数首次被调用。
- <font size=4 color=#7379f4 ><b>mounted</b></font>：在实例挂载到 DOM 之后被调用。此阶段实例已经完全可用，可以访问 DOM 元素。

_<font size=4 color=darkorange >更新阶段（Updating）</font>_

- <font size=4 color=#7379f4 ><b>beforeUpdate</b></font>：在响应式数据更新时调用，但是 DOM 尚未重新渲染。
- <font size=4 color=#7379f4 ><b>updated</b></font>：在数据更新完毕且 DOM 重新渲染后调用。

_<font size=4 color=darkorange >销毁阶段（Destruction）</font>_

- <font size=4 color=#7379f4 ><b>beforeDestroy</b></font>：在实例销毁之前调用。此阶段实例仍然完全可用。
- <font size=4 color=#7379f4 ><b>destroyed</b></font>：在实例销毁之后调用。此阶段实例已经解除所有绑定，所有子实例也都已经被销毁。

此外，还有一些其他的生命周期钩子函数，并不常用：

- <font size=4 color=#7379f4 ><b>activated</b></font>：在 keep-alive 组件激活时调用。
- <font size=4 color=#7379f4 ><b>deactivated</b></font>：在 keep-alive 组件停用时调用。
- <font size=4 color=#7379f4 ><b>errorCaptured</b></font>：捕获子孙组件错误。
