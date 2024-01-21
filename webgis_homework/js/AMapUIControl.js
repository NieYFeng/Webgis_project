// ! 需要引入UI组件库
// 由于数据展示图层使用的另外一个脚本（LOCA数据可视化脚本）两者不兼容
// 需要重新定义图层管理器中开关图层的功能

// 设置两个指标对象进行存储图层是否可见
var optHeatmap = { opt: false }; // 初始默认关闭热力图，地图为黑色
var optPointsLayer = { opt: true }; // 初始默认开启分布点图层

function setMapLayers(id_name, opt_heatmap, opt_pointsLayer) {
    switch (id_name) {
        case "heatmap":
            // 开启、关闭热力图的展示
            if (opt_heatmap.opt) {
                map.setMapStyle('amap://styles/normal');
                hideHeatmap();
                opt_heatmap.opt = false;
            } else {
                map.setMapStyle('amap://styles/dark');
                showHeatmap();
                opt_heatmap.opt = true;
            }
            break;
        case "pointsLayer":
            // 开启、关闭分布点的展示
            if (opt_pointsLayer.opt) {
                hidePointsLayer();
                opt_pointsLayer.opt = false;
            } else {
                showPointsLayer();
                opt_pointsLayer.opt = true;
            }
            break;
        default:
            // console.log(id_name, opt_heatmap, opt_pointsLayer);          
    }
}

var layerCtrl;
AMapUI.loadUI(["control/BasicControl"], function (BasicControl) {
    // 缩放控件对象
    var zoomCtrl = new BasicControl.Zoom({
        theme: "light",
        position: {
            bottom: "30px",
            left: "30px"
        },
        showZoomNum: false // 不显示Zoom值
    });

    // 图层切换控件对象
    layerCtrl = new BasicControl.LayerSwitcher({
        theme: "light",
        position: {
            bottom: "230px",
            left: "30px"
        },
        // 基础图层(不提供基础图层的选择，避免影响数据展示)
        baseLayers: [
        ],
        // 可选的覆盖图层
        overlayLayers: [
            {
                enable: false,
                id: "heatmap",
                name: "全国GIS考研招生人数热力图",
                layer: heatmap,
            },
            {
                enable: true,
                id: "pointsLayer",
                name: "全国GIS考研院校分布点图",
                layer: pointsLayer,
            },
            {
                enable: false,
                id: "standard",
                name: "标准图",
                layer: new AMap.TileLayer(),
            },
            {
                id: "satellite",
                name: "卫星图",
                layer: new AMap.TileLayer.Satellite(),
            },
            {
                id: "traffic",
                name: "路况图",
                layer: new AMap.TileLayer.Traffic(),
            },
            {
                id: "roadNet",
                name: "路网图",
                layer: new AMap.TileLayer.RoadNet(),
            },
        ]
    });

    console.log(layerCtrl);

    // 将当前可用图层设置到地图中(会移除 map 原有图层)
    map.setLayers(layerCtrl.getEnabledLayers());

    // 重写图层开启关闭功能
    // ! 需要写到AMapUI.loadUI(...) 里面才能生效
    layerCtrl._eventHandlers["layerInputClick"] = function (e) {
        e.stopPropagation();
        var target = this;
        var layerId = target.getAttribute("data-layer-id");
        // console.log(target.getAttribute("data-layer-id"))
        if ("INPUT" === target.tagName) {
            layerCtrl.syncPropsFromUI();
            layerCtrl._refreshMapLayers();
        }
        // 专题数据图层控制
        setMapLayers(layerId, optHeatmap, optPointsLayer);
    }

    // 添加控件
    map.addControl(zoomCtrl);
    map.addControl(layerCtrl);
});
