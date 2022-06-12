---
title: CSS优化方法
---

### 加载性能优化

- 压缩CSS：在构建时对CSS进行压缩，减少页面加载的CSS文件体积

- 在CSS中使用单一样式：例如在需要使用上、左方向的`margin`时，避免使用复合的CSS写法

  ```css
    .box {
        /**
            margin: 20px 0 0 30px;
         */
        margin-top: 20px;
        margin-left: 30px;
    }
  ```
