Java script

\1.   alert(‘ ’);弹出警告框

\2.   console.log(‘  ‘); 控制台输出

 

javascript两大数据类型

基本数据类型

\1.   数字类型 typeof 检测结果 number

a)    非0数字除以0结果的infinity

\2.   字符串类型 typeof 检测结果 string

a)    字符串属性 length 通过打点调用，输出字符串的长度

b)    字符串的方法，方法就是打点调用的函数

​                i.      ![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image002.jpg)

​               ii.      charArt()

​              iii.      substring()

​              iv.      substr

​               v.      slice()

​              vi.      toUpperCase

​              vii.      toLowerCase

​             viii.      indexof

\3.   布尔类型 typeof 检测结果 boolean

\4.   Undefined typeof 检测结果 undefined

\5.   Null typeof 检测结果 object

复杂数据类型

基本数据类型转换

\1.   Number() 转数字

parseInt 字符串转整数

parseFloat 字符串转浮点数

\2.   String（） .toString( ):使用该方法数字需要加括号

\3.   Boolean  数值中的非0数值转换为true，NaN转换结果为false，字符串的非空字符转换为true，undefined转换结果为false。Null的转换结果为false

可以使用prompt函数弹出输入框，用户输入的内容为字符串

可以使用document.write 输出页面显示

**表达式种类**

\1.   算术表达式

\+ - * / %(取余)

.To fixed(保留小数精度)，输出的是字符串，需转换为数值

Math.ceil（）向上取整

Math.floor（）向下取整

Math.pow（）幂  eg. Math.pow（2,3） 2^3

Math.sqrt（）开根号

\2.   关系表达式

==比较值是否相等，===比较值和类型是否相等

!=比较值是否不等，!==比较值和类型是否不等

两个不同类型的值会进行隐性转换后进行比较是否相等 eg.1==true 结果为true

Undefined 进行数字转换后为 NaN

Null 进行数字转换后结果为0

Undefined==null 结果为true

Undefined===null 结果为false

NaN不自等和不全等

isNaN()用于判断NaN用来检查变量是否为NaN，机理是变量传入的值进行Number()转化后进行检查,

\3.   逻辑表达式

非! !! 与&& 或||

计算顺序 非>与>或

短路计算

非输出结果为boolean值

\4.   赋值表达式

a++ 先用后加 ++a先加后用

快捷赋值  a +=5等价 a=a+5

\5.   综合表达式

综合运算顺序：非运算>数学运算>关系运算>逻辑运算

**流程控制语句**

\1.   If条件函数

If( ){

}else{{

}

If条件函数的嵌套

\2.   Switch函数

switch(变量值){

case””:

case””:

case””:

alert(‘’)

break

}

\3.    三元运算符

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image004.jpg)

\4.    循环语句

a)   For循环

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image006.jpg)

b)   While循环

c)    Do while循环

Do{

}while(  )

 

d)   随机数函数

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image008.jpg)

e)   Continue和Break

f)    While(true)

**数组**

\1.    定义数组的方法

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image010.jpg) 

Var arr=[ ]空数组，length为0；

数组的下标是从0开始计算的；

Console.log(arr[0]) 控制台输出数组下标；

数组的最后一项下标等于数组的长度-1；

数组项可以进行修改 ；

 

 

数组的遍历

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image012.jpg)

 

\2.    数组类型的检测

Array .isArray()来方法检测数组类型

 

\3.    数组的方法

a.    数组的头尾操作方法

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image014.jpg)

Push()没有返回值，数组直接被改变

被删除的项可以返回

 

b.   splice( )方法

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image016.jpg)

返回的项是被删除（替换）的项目

c.    slice( )方法

截取数组的子数组进行返回，机理和slice类似

d.   join( )方法和split( )方法 

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image018.jpg)

字符串可以用方括号里面加下标的形式访问某一个字符，等价与charAt( )

e.    concat( )方法

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image020.jpg)

不会改变原数组

f.    reverse( )方法

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image022.jpg)

​    e. indexOf( ) 和 includes( )方法

​         indexOf检索数组项的位置，includes 检索是否包含该数组项目。用===进行判断。

**冒泡排序**

​     N个数字需要比较n-1趟，比较次数为n（n-1）/2

 

**变量的作用域**

\1.    变量只在其定义时所在的function内部有意义

\2.    局部变量与全局变量   如果不将变量定义在任何函数的内部，此时函数就为全局变量，在任何函数的内部都能被访问和更改。

\3.    遮蔽效应

如果函数内也定义了和全局变量同名的变量，则函数内的变量会将全局变量遮蔽 

需要注意考虑变量声明提升的情况。

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image024.jpg)

\4.    形参也是局部变量

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image026.jpg)

 

 

\5.    局部函数

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image028.jpg)

\6.    作用域链。变量会从内到外逐层寻找它的定义。

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image030.jpg)

\7.    不加var将定义全局变量  初次给变量赋值的时候，如果没有加var，则定义全局变量

 

**IFFE****的作用**

\1.    为变量赋 

\2.    让全局变量转化为局部变量

 

对象

\1.    内建对象 

\2.    宿主对象

\3.    自建对象

创建新对象  var obj = new Object( )

对象中保存的值叫做属性，向对象中添加属性 语法 对象.属性名 = 属性值；读取对象中的属性 语法 对象.属性名 对象的属性语法 对象.属性名 = 属性值  删除对象的属性 语法 del 对象.属性名

 

检查对象中是否含有某属性  方法 “属性名” in 对象名

 

Var obj={属性:属性值；属性;属性值}

 

节点的nodeType 属性可以显示这个节点的具体类型

元素节点 1，文字节点 2，注释节点 8, document节点 9， DTD节点 10

 

 

**Document**

​    对元素节点进行访问

Document的方法

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image032.jpg)

document.getElementById( ),如果html文件中有多个ID名字相同，则获取第一个ID。

通常JS代码要写在HTML节点的后面，否则JS无法找到相应的HTML节点。

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image034.jpg)

Window.onload = function（）{ }

 

Queryselector( )   queryselectorAll( )

 

节点之间的关系

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image036.jpg)

获取到的元素生成数组

 

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image038.jpg)

 

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image040.jpg)

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image042.jpg)

 

更加节点内部的元素

Innerhtml  innertext

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image044.jpg)

更改节点的样式

b.style.fontSize = '32px';

设置html属性

非标准的w3c属性  设置属性 .setattribute(‘属性名“，’属性值‘)   获取属性 .getattribute（”属性名“）

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image046.jpg)

 

**节点的创建**

Step 1： Document.createElement（‘’）

Step 2：方法一  appendChild（）   ![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image048.jpg)

​       方法二  insertBefore（）   ![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image050.jpg)    

 

**节点的移动**

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image052.jpg)

**节点的删除**

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image054.jpg)

**克隆节点**

克隆出来的节点是孤儿节点

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image056.jpg) ![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image058.jpg)

参数如果为true，则进行深度克隆（该节点后的子节点也将会被克隆）

 

**事件**

用户与网页的交互动作

常见鼠标事件监听

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image060.jpg)

Onmusewheel 鼠标滚轮事件

常见的键盘事件监听

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image062.jpg)

常见表单事件监听

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image064.jpg)

 

0级事件监听：只能监听冒泡阶段

​           oBox.onclick = function( ){  }

2级事件监听：

​           oBox.addEventListener（‘click’, function( ){  }, true）;

​           true表示监听捕获阶段，false表示监听冒泡阶段

 

最内层元素不区分先冒泡还是先捕获，根据书写顺序来执行。

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image066.jpg)

 

鼠标位置 属性

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image068.jpg)鼠标向上滚动**e.deltaY**为正数，反之为负数

 

e.charCode 字符码 通常用于onkeypress

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image070.jpg)

 

e.keycode 键码 通常用于onkeydown，onkeyup

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image072.jpg)

 

e.preventDefault( ); 阻止浏览器的默认行为。

 

e.stopPropagation( );阻止事件传播；

 

定时器 

SetInterval(function( ){   }, 时间)  第一个参数可以传入具名函数

清除定时器

ClearInterval（  ）

延时器

SetTimeout(function( ) {  }, 时间)  

清除延时器

ClearTimeout（ ）

 

添加类名的三种方法

// 第一种办法 如果有多个class用空格 隔开 缺点是会覆盖本身的class 

​      oName.setAttribute('class', 'red_border')

​      // 第二种 和第一种一样

​      oName.className = 'red_border'

​      // 第三种 不会影响本身的class

​      oName.classList.add('red_border')

删除类名的三种方法

 // 删除类名 三选一

​    // 第一种办法 如果有多个class用空格 隔开 缺点是会覆盖本身的class 

​    oName.setAttribute('class', '')

​    // 第二种 和第一种一样

​    oName.className = ''

​    // 第三种 不会影响本身的class

​    oName.classList.remove('red_border')

 

 

 

# BOM

**window对象** 是当前js脚本所运行的窗口，window.document属性就是document对象。

一个浏览器窗口就有一个window对象。

全局变量是window对象的属性。

内置函数是window对象的方法。 如alert ；setInterval；

 

**窗口尺寸的相关属性（window对象的属性）**

innerHeight 浏览器窗口的内容区域的高度（不包含滚动条）

innerWidth（不包含滚动条）

outerHeight 浏览器窗口外部的高度

outerWidth 浏览器窗口的外部宽度

 获得不包含滚动条的窗口宽度，要用

document.documentElement.clientWidth 。

 

**resize事件**

onresize用来监听窗口改变尺寸的事件

 

 

**已卷动的高度**

window.scrollY属性表示在垂直方向已滚动的像素值

document.documentElement.scrollTop 也表示窗口的卷动高度

区别是第一个是只读，第二个不是

 

**scroll事件**

window.onscroll 或者 window.addEventListener（‘scroll’）来监听

 

**Navigator 对象**

window.navigator可以检测navigator对象

 

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image074.jpg)

 

**History对象**

history可以模拟浏览器的回退按钮

history.back（）

history.go（-1）

 

**location对象**

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image076.jpg)

最好加上window

 

重新加载

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image078.jpg)

window.location.reload（true）

 

 

 

 

**面向对象**

​    属性名字不符合JS命名规范，需要用obj[ ] 来进行访问

 

对象的属性是一个函数的话，此时它被称为函数的方法。 

 

 

**上下文**

 

同一个函数，用不同的形式去调用，其上下文不同。

函数只有被调用的时候，上下文才会被确定。

 

上下文规则：

\1.   对象打点调用这个函数，则这个函数的上下文为打点的对象

\2.   圆括号直接调用函数，则函数的上下文是window对象

\3.   数字（类数组对象）列举出函数进行调用，上下文就是这个数组（类数组对象）  数组[下标]（）。

\4.   IIFE中的函数，上下文是window对象。

\5.   使用定时器和延时器来调用函数，上下文是window对象。

\6.   事件处理函数的上下文是绑定事件的DOM元素。

\7.    

\8. function setBoxToRed (){

\9.   var self = this

\10.   setTimeout(function (){

\11.     self.classList.add('color')

\12.   },2000)

\13.   

\14. }

当函数有一个内层函数，要注意。看是否需要备份上下文

 

 

**call****和apply能指定函数的上下文**

函数.call（上下文），函数.apply（上下文）

sum.call（上下文，逗号罗列额外参数）

sum.apply（上下文，参数写在数组中）

 

 

**用new操作符来调用函数**

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image080.jpg)

**构造函数**

用new调用的函数被称为构造函数，构造函数的函数名首字母要大写

 

类和实例

类只会描述对象会有哪些属性和方法，并不指明具体的值。

实例是具体的对象。

类创造成实例的过程是实例化。

 

**prototype**

**prototype****是函数的原型**

构造函数的prototype属性是实例的原型。

实例可以打点调用prototype上的属性和方法。

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image082.jpg)

 

hasOwnProperty  检查对象是否拥有自己属性或者方法。

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image084.jpg)

in运算符只能检查某个属性或者方法是否可以被对象访问，

不能检查是否是自己的属性或者方法。

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image086.jpg)

方法写在函数的prototype上，使内存的开销更小。

 

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image088.jpg)

函数的原型也有自己的原型，其原型是Object.prototype

继承。实例会沿着原型链去寻找方法或者属性。

数组的原型链

数组可以看做是Array构造函数new出来的实例

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image090.jpg)

 

**继承**

实现子类的继承关键在于：子类必须拥有父类的全部属性和方法，子类还能定义自己特有的属性和方法。

 

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image092.jpg)

子类可以重写父类的方法。

包装类

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image094.jpg)

Math对象

Math.round 四舍五入

 

**Date** **日期对象**

**创建方法** ：

\1.   new Date ( )获取的是当前的日期和时间。

\2.   new Date (年,月,日) 获取的是指定的日期，月份是按0开始算的。不算时区

\3.   new Date (“年-月-日”) 获取的是指定的日期，月份是按1开始计算的。算时区

**Date****对象的方法**

 ![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image096.jpg)

**时间戳**

通过getTime（）或者Date.parse（）函数可以把日期变为时间戳。

getTime（）精确到毫秒，Date.parse（）精确到秒。

通过new.Date（时间戳），可以把时间戳转换为日期。

 

**正则表达式的创建**

1./内容/  2. new RegExp(‘内容’)  3.typeof 运算符检测正则表达式结果为object

**元字符**

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image098.jpg)

**方括号表示法**

使用方括号，可以创造一个字符几何，表示匹配方括号中的任意字符。

**正则表达式量词**

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image100.jpg)

 

**字符串的相关方法:**

![img](file:///C:/Users/LILINF~1/AppData/Local/Temp/msohtmlclip1/01/clip_image102.jpg)

 