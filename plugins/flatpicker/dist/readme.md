flatpickr功能强大的日期时间选择器插件
flatpickr日期时间选择器支持移动手机，提供多种内置的主题效果，并且提供对中文的支持。它的特点还有：

使用SVG作为界面的图标。

兼容jQuery。

支持对各种日期格式的解析。

轻量级，高性能，压缩后的版本仅6K大小。

对手机原生日期格式的支持。

下图说明了使用jQuery UI、Bootstrap、packadate.js和flatpickr拉齐制作一个日期时间选择器时，所需要的文件尺寸大小：



使用方法：
在页面中引入flatpicker.css和flatpicker.js文件。

<link rel="stylesheet" type="text/css" href="/path/to/flatpickr.css">
<script src="/path/to/flatpickr.js"></script>
HTML示例：

<input id="myID">
初始化插件：

document.getElementsByClassName("myClass").flatpickr({..config});
document.getElementById("myID").flatpickr();    //  两种js初始化方法
$(".calendar").flatpickr(); // jQuery初始化方法
配置参数
在配置参数中，所有的类型为string或boolean的参数都可以通过data-属性在HTML标签中进行设置。例如：data-min-date、data-default-date、data-default-date等。

参数	类型	默认值	描述
altFormat	string	"F j, Y"	altInput的日期格式。
altInput	Boolean	false	是否使用某种用户友好的方式来显示日期时间。
altInputClass	String	""	添加到input上的自定义class类。例如bootstrap用户可能需要添加一个form-control class。
allowInput	boolean	false	是否允许用户直接在输入框中输入日期。
clickOpens	boolean	true	是否在点击输入框时打开日期时间选择界面。如果你想通过手动.open()方法来打开，该选项设置为false。
dateFormat	string	"Y-m-d"	设置日期显示格式。
defaultDate	String/Date Object	null	设置一个初始的日期。
disable	array	[]	被禁用的日期。
enableTime	boolean	false	是否启用时间选择。
enableSeconds	boolean	false	在时间选择器中是否可以选择秒。
noCalendar	boolean	false	是否隐藏日历。
hourIncrement	integer	1	小时输入框的步长。
minuteIncrement	integer	5	分钟输入框的步长。
inline	boolean	false	是否以内联的方式显示日历。
static	boolean	false	日期选择器位于包裹容器的位置。
wrap	boolean	false	包裹元素。
maxDate	String	null	用户可以选择的最大日期。
minDate	String	null	用户可以选择的最小日期。
onChange	function(dateObject, dateString)	null	每次日期被选择的时候都触发该函数。
onOpen	function(dateObject, dateString)	null	每次日历被打开时都会触发该函数。
onClose	function(dateObject, dateString)	null	每次日历被关闭时都会触发该函数。
parseDate	function	false	接收一个日期字符串并返回一个日期对象。
shorthandCurrentMonth	boolean	false	以简写方式显示月份
weekNumbers	boolean	false	是否在日历中显示星期数。
time_24hr	boolean	false	是否以24小时格式来显示时间。
utc	boolean	false	日期将会被解析、格式化和显示为UTC格式。
prevArrow	string	<	向前箭头图标。
nextArrow	string	>	向后箭头图标。
日期格式字符
字符	描述	示例
d	月份中的天数，如果不满2个数字的会前导0。	01 - 31
D	一个星期中某一天的简写文本表示	Mon - Sun
l(小写的L)	一个星期中某一天的文本表示	Sunday - Saturday
j	不带前导0的月份中的天数	1 - 31
J	带序号后缀，不带前导0的月份中的天数	1st, 2nd, to 31st
w	使用数字来代表星期中的某一天	0 (星期天) - 6 (星期六)
F	月份的完整文本表示	January - December
m	使用数字来表示月份，前导带0。	01 - 12
n	使用数字来表示月份，前导不带0。	1 - 12
M	月份的简写文本表示	Jan - Dec
U	时间戳	1413704993
y	两个数字代表的年	99 or 03
Y	4个数字代表的年	1999 or 2003
时间格式字符
字符	描述	示例
H	24小时制	00 to 23
h	12小时制	1 to 12
i	分钟	00 to 59
S	秒（不满2位数补0）	00 to 59
s	秒	0 - 59
K	AM/PM	AM or PM
