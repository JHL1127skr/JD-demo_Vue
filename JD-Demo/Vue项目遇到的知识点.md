## VUE项目demo中遇到的问题 

#### 一, 动态传图片:src

​	需要在data里面 require( ' 路径 ' )

#### 二,数组乱序

```js
arr.sort(()=>Math,random()-0.5)
```

#### 三,事件获取事件对象

```js
@click(xxxx,$event)
```

#### 四,export 与 import

```
export const xxx

impor {xxx} from './'
```

#### 五,如何修改v-html里面的标签样式   (scoped穿透)

```
1.原生css
.inner>>>img{ }

2.scss
.inner{
   ::v-deep img{ }
}
```

#### 六,判断元素是否滚动到底部  

```

element.scrollHeight - element.scrollTop === element.clientHeight

```

#### 七,whistle调试器的使用

##### 1.安装

```
 npm install  -g  whistle   //也可以使用tnpm
 
 w2 -h  //帮助信息
```

##### 2.启动

```
w2 start -p 8899 //不设置端口默认使用8899
```



