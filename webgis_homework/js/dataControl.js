// ! 需要引入 LOCA 数据可视化脚本以及 geojsonSrc 对应的数据源脚本
// ! 需要使用服务器打开 index.html 文件，否则图标加载会出现跨域报错问题

// 新建 LOCA 数据可视化容器
var loca = new Loca.Container({
    map,
});
// 新建数据源对象
var geo = new Loca.GeoJSONSource({
    data: geojsonSrc
});
// 新建热力图图层对象
var heatmap = new Loca.HeatMapLayer({
    zIndex: 10,
    opacity: 1,
    visible: false, // 默认关闭显示
    zooms: [2, 22],
});
// 设置热力图数据源及展现样式
heatmap.setSource(geo, {
    radius: 250000,
    unit: 'meter',
    height: 400000,
    gradient: {
        0.1: '#2A85B8',
        0.2: '#16B0A9',
        0.3: '#29CF6F',
        0.4: '#5CE182',
        0.5: '#7DF675',
        0.6: '#FFF100',
        0.7: '#FAA53F',
        1: '#D04343',
    },
    value: function (index, feature) {
        return feature.properties.number;
    },
    heightBezier: [0, .53, .37, .98],
});
// 将图层添加到容器中
loca.add(heatmap);

// 设置热力图数据加载跳动动画
map.on('complete', function () {
    heatmap.addAnimate({
        key: 'height',  // 高度跳动
        value: [0, 1],
        duration: 2000,
        easing: 'BackOut',
        // yoyo: true, // 扁平化展示
        // repeat: 2,
    });
    heatmap.addAnimate({
        key: 'radius',  // 角度跳动
        value: [0, 1],
        duration: 2000,
        easing: 'BackOut',
        // 开启随机动画
        transform: 1000,
        random: true,
        delay: 5000,
    });
});

// 新建分布点标注图层
var pointsLayer = new Loca.LabelsLayer({
    zIndex: 15,
    opacity: 1,
    visible: true,
});
// 设置标注图层的数据
pointsLayer.setSource(geo);
// 设置标注图层的样式
pointsLayer.setStyle({
    icon: {
        type: 'image',
        image: "./resource/img/school.png",  // ! 需要使用服务器打开，否则会出现浏览器跨域问题
        size: [48, 75],
        anchor: 'center',
    },
    text: {
        // 每项配置都可使用回调函数来动态配置
        content: (index, university) => {
            return university.properties.name;
        },
        style: {
            fontSize: 12,
            fontWeight: 'normal',
            fillColor: '#5CDE8E',
            strokeColor: '#000',
            strokeWidth: 2,
        },
        direction: 'bottom',
    },
    extData: (index, university) => {
        return university.properties;
    },
});
// 将图层添加到容器中
loca.add(pointsLayer);

pointsLayer.on('complete', () => {
    // 建立普通的标注，用于展示文本
    var normalMarker = new AMap.Marker({
        offset: [70, -15],
    });
    var labelMarkers = pointsLayer.getLabelsLayer().getAllOverlays();
    for (let marker of labelMarkers) {
        marker.on("click", () => {
            // 点击缩放到该地点
            map.setZoomAndCenter(13.12, [marker.getExtData().x, marker.getExtData().y]);
            // 展示详情表格数据
            setDetailInfoData(marker.getExtData().name);
        });
        marker.on('mouseover', (e) => {
            // 展示简单的信息
            var position = e.data.data && e.data.data.position;
            if (position) {
                normalMarker.setContent(
                    '<div class="data-info"><div class="data-info-title">' + marker.getExtData().name + '</div>所在省份：' + marker.getExtData().province + '<br>拟招生人数：' + marker.getExtData().number + '人</div>',
                );
                normalMarker.setPosition(position);
                map.add(normalMarker);
            }
        });
        marker.on('mouseout', () => {
            map.remove(normalMarker);
        });
    }
});

// 关闭、开启热力图
function hideHeatmap() {
    heatmap.hide();
}
function showHeatmap() {
    heatmap.show();
}

// 关闭、开启分布点图层
function hidePointsLayer() {
    pointsLayer.hide();
}
function showPointsLayer() {
    pointsLayer.show();
}