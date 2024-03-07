<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
        <title>春联合成</title>
        <style>
            .title {
            text - align: center
        }

            #form1 {
            float: left;
            width: 30%;
        }

            #form2 {
            float: right;
            width: 70%;
        }
            body {
            background: rgb(50, 50, 50);
            color: #f2de9c;
            margin: 0px;
            user-select: none;
        }
            input {
            background: rgb(50, 50, 50);
            color: #f2de9c;
            margin: 0px;
            user-select: none;
        }
            #result {
            background: rgb(50, 50, 50);
            color: #f2de9c;
            margin: 0px;
            user-select: none;
        }
            .button{
            width: 220px;

            float: left;
            text-align: center;
            color: #f2de9c;
            background: rgb(50, 50, 50);
            border: 1px solid #f2de9c;
            display: block;
            border-radius: 5px;
        }
            .button:hover {
            color: #f2de9c;
            background: rgb(55, 40, 32);
            border: 1px solid #f2de9c;
        }

        </style>
</head>
<body>
<h2 className="title">三国杀春联2024</h2>
<h3 className="title">
    <a target="_blank"
       href="https://greasyfork.org/zh-CN/scripts/448004-%E4%B8%89%E5%9B%BD%E6%9D%80%E6%89%93%E5%B0%8F%E6%8A%84">三国杀打小抄自动记录中……</a>
</h3>


<form id="form1" name="form1">
    <span>横幅合成</span>
    <br/><br/>
    鼠 ：<input type="text" id="shu" value="0"/>
    <br/>
    牛 ：<input type="text" id="niu" value="0"/>
    <br/>
    虎 ：<input type="text" id="hu" value="0"/>
    <br/>
    兔 ：<input type="text" id="tu" value="0"/>
    <br/>
    龙 ：<input type="text" id="long" value="0"/>
    <br/>
    蛇 ：<input type="text" id="she" value="0"/>
    <br/>
    马 ：<input type="text" id="ma" value="0"/>
    <br/>
    羊 ：<input type="text" id="yang" value="0"/>
    <br/>
    猴 ：<input type="text" id="hou" value="0"/>
    <br/>
    鸡 ：<input type="text" id="ji" value="0"/>
    <br/>
    狗 ：<input type="text" id="gou" value="0"/>
    <br/>
    猪 ：<input type="text" id="zhu" value="0"/>
    <br/>
    <br/>

    <input type="button" className="button" value="计算" onClick="cal();">

        <br/>
        <br/>
        结果 ：<br/>
        <textarea id="result" rows="30" cols="30"></textarea>
</form>

<form id="form2" name="form2">
    <span>对联合成</span>
    <br/><br/>
    <span id='chunlian'></span>


</form>

<script type="text/javascript">
    var suipianArr = [

    ]
    ;


    function cal() {
    var shuCount = Number(document.getElementById("shu").value);
    var niuCount = Number(document.getElementById("niu").value);
    var huCount = Number(document.getElementById("hu").value);
    var tuCount = Number(document.getElementById("tu").value);
    var longCount = Number(document.getElementById("long").value);
    var sheCount = Number(document.getElementById("she").value);
    var maCount = Number(document.getElementById("ma").value);
    var yangCount = Number(document.getElementById("yang").value);
    var houCount = Number(document.getElementById("hou").value);
    var jiCount = Number(document.getElementById("ji").value);
    var gouCount = Number(document.getElementById("gou").value);
    var zhuCount = Number(document.getElementById("zhu").value);

    var countMap = new Map();
    countMap.set("鼠", shuCount);
    countMap.set("牛", niuCount);
    countMap.set("虎", huCount);
    countMap.set("兔", tuCount);
    countMap.set("龙", longCount);
    countMap.set("蛇", sheCount);
    countMap.set("马", maCount);
    countMap.set("羊", yangCount);
    countMap.set("猴", houCount);
    countMap.set("鸡", jiCount);
    countMap.set("狗", gouCount);
    countMap.set("猪", zhuCount);

    var resultMap = new Map();
    // 初始化resultMap
    for (var i = 0; i < suipianArr.length; i++) {
    resultMap.set(suipianArr[i], 0);
}


    while (true) {
    var maxKey = "";
    var maxVal = 0;
    for (var i = 0; i < suipianArr.length; i++) {
    var val = calVal(suipianArr[i], countMap);
    if (val > maxVal) {
    maxKey = suipianArr[i];
    maxVal = val;
}
}

    if (maxVal === 0) {
    break;
}

    var arr2 = maxKey.split('');
    countMap.set(arr2[0], countMap.get(arr2[0]) - 1);
    countMap.set(arr2[1], countMap.get(arr2[1]) - 1);
    countMap.set(arr2[2], countMap.get(arr2[2]) - 1);
    countMap.set(arr2[3], countMap.get(arr2[3]) - 1);

    resultMap.set(maxKey, resultMap.get(maxKey) + 1);
}


    if (resultMap.size === 0) {
    Toast("无可合成横幅");
} else {
    var result = "";
    var totalCount = 0;
    resultMap.forEach(function (value, key, map) {
    if (value !== 0) {
    totalCount += value;
    result += key + "*" + value + "\n";
}
});

    result += "\n共合成横幅：" + totalCount + "\n";

    result += "\n剩余生肖：\n";
    countMap.forEach(function (value, key, map) {
    if (value !== 0) {
    result += key + "*" + value + " ";
}
});

    document.getElementById("result").value = result;
}


}

    // 计算权值
    function calVal(suipian, countMap
) {
    var arr2 = suipian.split('');
    if (countMap.get(arr2[0]) !== 0 && countMap.get(arr2[1]) !== 0
    && countMap.get(arr2[2]) !== 0 && countMap.get(arr2[3]) !== 0) {
    return countMap.get(arr2[0]) + countMap.get(arr2[1]) + countMap.get(arr2[2]) + countMap.get(arr2[3]);
}

    return 0;
}


    //提示信息 封装
    function Toast(msg, duration
) {
    duration = isNaN(duration) ? 3000 : duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText = "font-size: .32rem;color: rgb(255, 255, 255);background-color: rgba(0, 0, 0, 0.6);padding: 10px 15px;margin: 0 0 0 -60px;border-radius: 4px;position: fixed;    top: 10%;left: 50%;width: 130px;text-align: center;";
    document.body.appendChild(m);
    setTimeout(function () {
    var d = 0.5;
    m.style.opacity = '0';
    setTimeout(function () {
    document.body.removeChild(m)
}, d * 1000);
}, duration);
}
    var chunlianRes = {}; const duilianArr = [];

    fetch('https://goka.top:8080/api/auth/getchunlian', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
}
})
    .
    then(response => response.json()
)
    .
    then(data => {
    for (const key in data) {
    if (data[key] === "横幅") {
    suipianArr.push(key.replace(/[\[\], ]/g, ''));
} else {
    // 遍历顺序数组，处理其他键
    const value = data[key].replace(/[\[\], ]/g, '');
    const order = ["金", "龙", "拱", "日", "万", "家", "春", "赤", "兔", "追", "风", "千", "里", "志"];
    const index = order.indexOf(value);
    if (index !== -1) {
    // 如果 duilianArr[index] 已经有值，将新值追加在后面，用换行符分隔
    if (duilianArr[index]) {
    duilianArr[index] += '\n' + key.replace(/[\[\], ]/g, '');
} else {
    duilianArr[index] = value + ': ' + key.replace(/[\[\], ]/g, '');
}
}
}
}
    console.log(suipianArr);
    console.log(duilianArr);
    duilianArr.forEach(duilian => {
    const span = document.createElement("span");
    span.textContent = duilian;
    form2.appendChild(span);

    // 添加换行符
    form2.appendChild(document.createElement("br"));
});

})
    .
    catch(error => console.error('Error:', error
))
;


</script>
</body>
</html>