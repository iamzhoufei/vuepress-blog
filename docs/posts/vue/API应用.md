---
title: API应用
---
### 1. vue组件之间的通信方式

- 按照组件关系解释不同方式的应用场景

```shell
# 父子组件之间：可以使用 props/$emit, $parent/ref, $attr
# 兄弟组件之间：可以使用 $parent, $root, vuex, piana
# 跨层级组件之间： 可以使用 vuex, piana, provide/inject
```

### 2. v-if 与 v-for的优先级

- 在实践中，v-for和v-if是不能放在一起的，无论是Vue2还是Vue3的文档中，都有明确的说明。

- 在Vue2和Vue3中，同一个循环判断的场景会因为同时使用v-for和v-if产生不同的结果

```html
<div :v-if="record.isActive" :v-for="record in records">{{record.name}}</div>
```

- 在Vue2中，由于v-for的优先级高于v-if `在Vue2的源码中，当二者同时存在时，v-if的判断是嵌套在v-for内部的`，所以每次遍历的时候，都会进行一次v-if的条件判断，所以即使最终只有一个record的isActive是真值，records中的每一项都需要进行遍历+判断，造成性能浪费。

- 在Vue3中，由于v-if的优先级高于v-for，所以当在v-if中使用遍历中才产生的值`record`时，会提示当前使用了一个未定义的变量并试图读取这个变量的属性，所以会报错。

### 3. vue的生命周期，以及每个阶段所做的事情

- 生命周期的概念：在vue中，每个组件从创建到销毁的过程中，会运行生命周期钩子函数，这些函数会在到达特定节点的时候被执行，开发者可以通过这些钩子函数，在特定阶段执行自己的业务代码。

- 一个8个阶段，包含了4个重要的周期节点：创建前后、载入前后、更新前后、销毁前后

| 生命周期v2    | 生命周期v3          | 描述                                     | 结合实践                                      |
| ------------- | ------------------- | --------------------------------------|----------------------------------------------|
| beforeCreate  | beforeCreate        | 组件实例被创建之初                       | 通常用于插件开发时执行一些初始化任务 |
| created       | created             | 组件实例已经完全创建                     | 组件初始化完毕，可以在此阶段请求接口、获取异步数据 |
| beforeMount   | beforeMount         | 组件挂载之前                             | - |
| mounted       | mounted             | 组件挂载到实例上去之后                   | dom已创建，可以在此阶段访问子组件或者dom元素 |
| beforeUpdate  | beforeUpdate        | 组件数据发生变化，更新之前               | 获取更新之前的组件状态 |
| updated       | updated             | 数据数据更新之后                         | 可以获取最新的状态 |
| beforeDestroy | **beforeUnmount**   | 组件实例销毁之前                         | 可以在此阶段执行取消订阅和定时器的操作 |
| destroyed     | **unmounted**       | 组件实例销毁之后                         | - |
| activated     | activated           | keep-alive 缓存的组件激活时              | - |
| deactivated   | deactivated         | keep-alive 缓存的组件停用时调用          | - |
| errorCaptured | errorCaptured       | 捕获一个来自子孙组件的错误时被调用       | - |
| -             | **renderTracked**   | 调试钩子，响应式依赖被收集时调用         | - |
| -             | **renderTriggered** | 调试钩子，响应式依赖被触发时调用         | - |
| -             | **serverPrefetch**  | ssr only，组件实例在服务器上被渲染前调用 | - |

- 生命周期的过程：
![Component lifecycle diagram](https://epiphany-platform.oss-cn-hangzhou.aliyuncs.com/vue/vue3%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png)

- 补充：根据生命周期的过程图，可以看到 `setup` 是在 `beforeCreate` 之前执行的。在 `beforeCreate` 之后，vue才会去初始化 `Options API`

- 在Vue3的官方文档中，关于vue2与vue3之间生命周期钩子的映射中有说明，可以使用 `setup()` 完全代替 `beforeCreate` 和 `created`。

### 4. 双向绑定的原理和使用场景

- 概念：双向绑定是vue中的一个指令 `v-model`，可以绑定一个响应式数据到视图，同时视图中可以修改这个值。

- 优点：`v-model` 是一个语法糖，它在默认情况下，相当于 `:value` 和 `@input`，使用 `v-model` 可以减少繁琐的事件处理代码，提高效率。

- 使用场景：通常在表单项中使用，也可以用在自定义组件上，用于控制某个值得输入和输出。

- 使用细节：对于常见的表单元素来说，在 `input` 标签中使用 `v-model="xxx"` 时，可以将`xxx`对应的值绑定到`input`的`value`属性上；对于`checkbox`标签来说，则可以设置`true-value`和`false-value`；对于`select`来说，可以通过其`option`的`value`来设置特定的值。另外在vue3中，`v-model`可以使用参数的形式指定多个绑定，例如：`v-bind:title` 和 `v-bind:content`，这样就代替了之前vue2中 `v-bind.sync` 的写法。

- 原理描述：`v-bind`本身是一个指令，它由vue的编译器转为渲染函数之后，本质还是对value属性和input事件的监听。事件的回调函数中会根据不同的组件类型进行不同的展开，去监听不同的属性和事件。
