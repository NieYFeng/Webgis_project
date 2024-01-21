// ! 需要引入数据脚本
var detailInfo = document.getElementById("data-detail-info");
var lastTable = '';

// 设置信息窗口打开、关闭函数
function showdetailInfo(){
    detailInfo.style.display = "block";
}
function closedetailInfo(){
    detailInfo.style.display = "none";
}

// 创建表格的数据项
function creatTd(tr, text){
    var td = document.createElement("td");
    td.innerText = text;
    tr.appendChild(td);
}

// 设置表格并添加到页面中
function setDetailInfoData(name){
    console.log(name);
    // 打开列表窗口显示
    showdetailInfo();
    // 获取数据列表
    var list = detail[name]['list'];
    // 清除上一个数据，新增一个新的数据
    if (lastTable != ''){
        detailInfo.removeChild(lastTable);
    }
    var infoTable = document.createElement("table");
    infoTable.id = "data-detail-info-table";
    
    // 先添加表头
    var dataTitle = document.createElement("tr");
    creatTd(dataTitle, "院系所");
    creatTd(dataTitle, "专业");
    creatTd(dataTitle, "研究方向");
    creatTd(dataTitle, "科目1");
    creatTd(dataTitle, "科目2");
    creatTd(dataTitle, "科目3");
    creatTd(dataTitle, "科目4");
    infoTable.appendChild(dataTitle);
    for(var i=0;i<list.length;i+=1){
        // 循环添加数据行
        var tr = document.createElement("tr");
        tr.className = "data-detail-info-tr";
        // 添加数据子项
        creatTd(tr, list[i]["departments"]);
        creatTd(tr, list[i]["field"]);
        creatTd(tr, list[i]["speciality"]);
        creatTd(tr, list[i]["subject1"]);
        creatTd(tr, list[i]["subject2"]);
        creatTd(tr, list[i]["subject3"]);
        creatTd(tr, list[i]["subject4"]);
        infoTable.appendChild(tr);
    }
    detailInfo.appendChild(infoTable);
    lastTable = infoTable;
}

// 初始关闭信息窗口
closedetailInfo();

// 地图点击无标注处关闭信息窗口
map.on('click', function (e) {
    closedetailInfo();
});