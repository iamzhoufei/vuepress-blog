---
title: TCP连接中的三次握手
---
## client-server

- client: 主动发起连接建立的应用进程

- server: 被动等待连接建立的应用进程

## 握手

- TCP建立连接的过程叫做握手，握手需要在客户端与服务器之间交换`三个TCP报文段`，这就是三报文握手。

- 采用三报文握手主要是为了防止已失效的连接请求报文段突然又传送到`server`，让`server`误判为这是一个新的请求建立连接的数据包。

- 如果不采用三报文握手的形式 —— `client` 与 `server` 只需要两次握手就可以建立连接的话。假设此时有一个已经失效的数据包传送到`server`，`server`回复之后，就会与`client`建立一个新的连接（此时`client`与`server`之间存在两个连接），第二个连接不会接收到任何后续的数据（因为这个连接本身就是失效的），就会导致`server`一直处于等待消息的状态，造成资源浪费。

## 详细过程

### 第一次握手

- `client` 和 `server` 都处于关闭状态，`client`将同步位`SYN`置为1，然后随机产生一个`seq=x`，并将该数据包发送给`server`。

- 随后`client`进入 `SYN-SENT`状态。

### 第二次握手

- `server`收到数据包之后，根据同步位`SYN=1`得知`client`要建立连接。此时`server`将同步位`SYN`和`ACK`都置为1，`ack-number`置为x+1，再随机产生一个`seq=y`，并将该数据包发送给`client`确认请求。（操作系统开始为该TCP连接分配缓存和变量）

- 随后`server`进入 `SYN-RCVD`状态。

### 第三次握手

- `client`收到`server`的确认消息之后，检查传递过来的`ack-number`是否等于x+1，`ACK`是否等于1，如果正确则将标志位`ACK`置为1，`ack-number`置为y+1，`seq-number`置为x+1，然后向`server`给出确认。同时通知其上层的应用进程：TCP连接已经建立。

- `server`收到`client`的确认之后，通知其上层的应用进程：TCP连接已经建立。

- 双端都进入`ESTABLISHED`状态。

![三次握手](https://epiphany-platform.oss-cn-hangzhou.aliyuncs.com/network/%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B.jpeg)