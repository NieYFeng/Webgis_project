// ! 由于使用 api 中的 url 引入数据会设计跨域的问题，在仅使用 js 而没有后端来控制解决这个问题，所以直接用 js 的对象在存放 geojson 数据
// 其实可以使用 liveserver 来解决的 ！！
var geojsonSrc= {
    "type": "FeatureCollection",
    "name": "university",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "x": 117.288227,
                "y": 31.848704,
                "name": "合肥工业大学",
                "number": 9.0,
                "province": "安徽省",
                "code": 34.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    117.288226628881006,
                    31.848703594257501
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 117.252568,
                "y": 31.865557,
                "name": "安徽师范大学",
                "number": 58.0,
                "province": "安徽省",
                "code": 34.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    117.252568488801003,
                    31.865557399516501
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 116.302163,
                "y": 39.994026,
                "name": "北京大学",
                "number": 3.0,
                "province": "北京市",
                "code": 11.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.302162852183002,
                    39.994025980292001
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 116.335228,
                "y": 40.001161,
                "name": "北京林业大学",
                "number": 15.0,
                "province": "北京市",
                "code": 11.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.335227661489,
                    40.001161373350598
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 116.358271,
                "y": 39.963278,
                "name": "北京师范大学",
                "number": 19.0,
                "province": "北京市",
                "code": 11.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.358271272920007,
                    39.963277547412403
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 116.317216,
                "y": 39.922945,
                "name": "首都师范大学",
                "number": 33.0,
                "province": "北京市",
                "code": 11.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.317215728945996,
                    39.922944886573099
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 116.342732,
                "y": 39.989992,
                "name": "中国地质大学(北京)",
                "number": 4.0,
                "province": "北京市",
                "code": 11.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.342731737340003,
                    39.989992284614303
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 116.420813,
                "y": 39.989488,
                "name": "北京联合大学",
                "number": 10.0,
                "province": "北京市",
                "code": 11.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.420812519391006,
                    39.989488005258799
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 116.373935,
                "y": 40.0022,
                "name": "中国科学院大学",
                "number": 6.0,
                "province": "北京市",
                "code": 11.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.373935443343996,
                    40.002199570926798
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 119.190229,
                "y": 26.060344,
                "name": "福州大学",
                "number": 34.0,
                "province": "福建省",
                "code": 35.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.190229382769999,
                    26.060343891402098
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 119.233526,
                "y": 26.085989,
                "name": "福建农林大学",
                "number": 5.0,
                "province": "福建省",
                "code": 35.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.233525657388995,
                    26.085988811241599
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 119.305711,
                "y": 26.040715,
                "name": "福建师范大学",
                "number": 15.0,
                "province": "福建省",
                "code": 35.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.305711037988999,
                    26.040714780178799
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 103.855301,
                "y": 36.046177,
                "name": "兰州大学",
                "number": 14.0,
                "province": "甘肃省",
                "code": 62.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.855301125550994,
                    36.046177125450797
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 103.733203,
                "y": 36.099451,
                "name": "西北师范大学",
                "number": 18.0,
                "province": "甘肃省",
                "code": 62.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    103.733203409146,
                    36.0994509044003
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 113.386355,
                "y": 22.533581,
                "name": "中山大学",
                "number": 26.0,
                "province": "广东省",
                "code": 44.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    113.386355130477,
                    22.5335811991188
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 113.512806,
                "y": 23.357213,
                "name": "华南师范大学",
                "number": 8.0,
                "province": "广东省",
                "code": 44.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    113.512806466965998,
                    23.357213272765101
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 113.365055,
                "y": 23.042471,
                "name": "广州大学",
                "number": 5.0,
                "province": "广东省",
                "code": 44.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    113.365055484254995,
                    23.0424709230813
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 108.342629,
                "y": 22.834728,
                "name": "南宁师范大学",
                "number": 16.0,
                "province": "广西壮族自治区",
                "code": 45.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    108.342628934180993,
                    22.834728138472801
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 106.628887,
                "y": 26.390415,
                "name": "贵州师范大学",
                "number": 23.0,
                "province": "贵州省",
                "code": 52.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    106.628887438217006,
                    26.3904154794627
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 110.340589,
                "y": 20.000152,
                "name": "海南师范大学",
                "number": 2.0,
                "province": "海南省",
                "code": 46.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    110.340588621945997,
                    20.0001522968846
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 114.511408,
                "y": 37.9934,
                "name": "河北师范大学",
                "number": 20.0,
                "province": "河北省",
                "code": 13.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.511407913528998,
                    37.9933998491246
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 113.668557,
                "y": 34.81236,
                "name": "华北水利水电大学",
                "number": 10.0,
                "province": "河南省",
                "code": 41.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    113.668556660354994,
                    34.812359888720103
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 113.527088,
                "y": 34.821649,
                "name": "郑州大学",
                "number": 13.0,
                "province": "河南省",
                "code": 41.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    113.527088390922003,
                    34.821649280760603
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 113.88453,
                "y": 34.793338,
                "name": "河南理工大学",
                "number": 8.0,
                "province": "河南省",
                "code": 41.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    113.884530473151997,
                    34.793338113601003
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 113.53584,
                "y": 34.79365,
                "name": "河南大学",
                "number": 103.0,
                "province": "河南省",
                "code": 41.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    113.535840125161002,
                    34.793649764202002
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 114.118498,
                "y": 32.164548,
                "name": "信阳师范学院",
                "number": 3.0,
                "province": "河南省",
                "code": 41.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.118497575991,
                    32.164548008089703
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 113.814033,
                "y": 34.783094,
                "name": "河南财经政法大学",
                "number": 3.0,
                "province": "河南省",
                "code": 41.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    113.814032568054998,
                    34.783093706115402
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 114.359719,
                "y": 30.540183,
                "name": "武汉大学",
                "number": 24.0,
                "province": "湖北省",
                "code": 42.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.359719010697006,
                    30.540182992442301
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 114.394523,
                "y": 30.531134,
                "name": "中国地质大学(武汉)",
                "number": 33.0,
                "province": "湖北省",
                "code": 42.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.394522747739998,
                    30.5311335375367
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 114.021164,
                "y": 22.540476,
                "name": "华中师范大学",
                "number": 29.0,
                "province": "湖北省",
                "code": 42.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.021163848607998,
                    22.540475567225201
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 114.326133,
                "y": 30.578938,
                "name": "湖北大学",
                "number": 33.0,
                "province": "湖北省",
                "code": 42.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.326132818605004,
                    30.578938087687501
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 114.357865,
                "y": 30.51913,
                "name": "湖北师范大学",
                "number": 7.0,
                "province": "湖北省",
                "code": 42.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.357864883697005,
                    30.519130407049602
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 112.949737,
                "y": 28.192215,
                "name": "湖南师范大学",
                "number": 12.0,
                "province": "湖南省",
                "code": 43.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    112.949737099199993,
                    28.1922148509673
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 112.675481,
                "y": 26.879254,
                "name": "衡阳师范学院",
                "number": 41.0,
                "province": "湖南省",
                "code": 43.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    112.675481078502003,
                    26.879254258642501
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 129.481372,
                "y": 42.909563,
                "name": "延边大学",
                "number": 25.0,
                "province": "吉林省",
                "code": 22.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    129.481371796844002,
                    42.909562935979501
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 125.326955,
                "y": 43.860314,
                "name": "东北师范大学",
                "number": 14.0,
                "province": "吉林省",
                "code": 22.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    125.326955063445993,
                    43.860313560470097
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 125.207527,
                "y": 43.777825,
                "name": "吉林师范大学",
                "number": 10.0,
                "province": "吉林省",
                "code": 22.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    125.207527091762003,
                    43.777824996782599
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 125.385911,
                "y": 43.907616,
                "name": "长春师范大学",
                "number": 16.0,
                "province": "吉林省",
                "code": 22.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    125.385910737014001,
                    43.907615783669101
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 118.956241,
                "y": 32.112166,
                "name": "南京大学",
                "number": 8.0,
                "province": "江苏省",
                "code": 32.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    118.956240812204001,
                    32.112165735466803
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 117.194275,
                "y": 34.222417,
                "name": "中国矿业大学",
                "number": 3.0,
                "province": "江苏省",
                "code": 32.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    117.194275021444994,
                    34.222416513466698
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 119.975543,
                "y": 31.820964,
                "name": "河海大学",
                "number": 11.0,
                "province": "江苏省",
                "code": 32.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.975543177015993,
                    31.820963574168701
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 118.907242,
                "y": 32.104857,
                "name": "南京师范大学",
                "number": 59.0,
                "province": "江苏省",
                "code": 32.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    118.907242328657006,
                    32.104856879007102
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 118.740935,
                "y": 32.021886,
                "name": "江苏师范大学",
                "number": 8.0,
                "province": "江苏省",
                "code": 32.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    118.740935383372005,
                    32.021885845754802
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 116.349687,
                "y": 28.005025,
                "name": "东华理工大学",
                "number": 55.0,
                "province": "江西省",
                "code": 36.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.349687155420995,
                    28.005025271904099
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 116.021935,
                "y": 28.684472,
                "name": "江西师范大学",
                "number": 16.0,
                "province": "江西省",
                "code": 36.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.021935316563003,
                    28.684472022387901
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 123.403376,
                "y": 41.906062,
                "name": "辽宁师范大学",
                "number": 23.0,
                "province": "辽宁省",
                "code": 21.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    123.403376131672999,
                    41.906062255398602
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 111.781482,
                "y": 40.490088,
                "name": "内蒙古师范大学",
                "number": 55.0,
                "province": "内蒙古自治区",
                "code": 15.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    111.781482210391999,
                    40.490087949309199
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 106.127762,
                "y": 38.502584,
                "name": "宁夏大学",
                "number": 30.0,
                "province": "宁夏回族自治区",
                "code": 64.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    106.127762476311005,
                    38.5025837793889
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 101.740901,
                "y": 36.639429,
                "name": "青海师范大学",
                "number": 42.0,
                "province": "青海省",
                "code": 63.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    101.740900592543994,
                    36.639428865529098
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 116.96697,
                "y": 36.677836,
                "name": "山东科技大学",
                "number": 17.0,
                "province": "山东省",
                "code": 37.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.966969839382003,
                    36.677836045394997
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 117.031475,
                "y": 36.650586,
                "name": "山东师范大学",
                "number": 13.0,
                "province": "山东省",
                "code": 37.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    117.031474590044994,
                    36.650585725920898
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 116.961496,
                "y": 35.595476,
                "name": "曲阜师范大学",
                "number": 26.0,
                "province": "山东省",
                "code": 37.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    116.961495725988001,
                    35.595475601071598
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 111.507301,
                "y": 36.080383,
                "name": "山西师范大学",
                "number": 5.0,
                "province": "山西省",
                "code": 14.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    111.507300768069996,
                    36.080383303687498
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 108.922795,
                "y": 34.250138,
                "name": "西北大学",
                "number": 30.0,
                "province": "陕西省",
                "code": 61.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    108.922794834602001,
                    34.250137727462501
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 108.950361,
                "y": 34.230532,
                "name": "长安大学",
                "number": 14.0,
                "province": "陕西省",
                "code": 61.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    108.950360677541994,
                    34.230532478047103
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 108.947878,
                "y": 34.206386,
                "name": "陕西师范大学",
                "number": 7.0,
                "province": "陕西省",
                "code": 61.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    108.947877834943995,
                    34.206385511341203
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 107.205958,
                "y": 34.348262,
                "name": "宝鸡文理学院",
                "number": 6.0,
                "province": "陕西省",
                "code": 61.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    107.205958154596004,
                    34.348261720211902
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 121.386275,
                "y": 31.23229,
                "name": "华东师范大学",
                "number": 7.0,
                "province": "上海市",
                "code": 31.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    121.386274714330995,
                    31.232289966579401
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 121.449114,
                "y": 31.033556,
                "name": "上海师范大学",
                "number": 14.0,
                "province": "上海市",
                "code": 31.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    121.449114045656003,
                    31.033555885221499
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 104.144755,
                "y": 30.677348,
                "name": "成都理工大学",
                "number": 37.0,
                "province": "四川省",
                "code": 51.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    104.144755100959003,
                    30.677347776703701
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 104.12176,
                "y": 30.609971,
                "name": "四川师范大学",
                "number": 7.0,
                "province": "四川省",
                "code": 51.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    104.121759667299003,
                    30.609970734388199
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 106.084646,
                "y": 30.799857,
                "name": "西华师范大学",
                "number": 27.0,
                "province": "四川省",
                "code": 51.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    106.084645691031994,
                    30.7998569430342
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 117.113975,
                "y": 39.055812,
                "name": "天津师范大学",
                "number": 8.0,
                "province": "天津市",
                "code": 12.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    117.113974608701994,
                    39.055812417423901
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 87.613313,
                "y": 43.763808,
                "name": "新疆大学",
                "number": 77.0,
                "province": "新疆维吾尔自治区",
                "code": 65.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    87.613312768569003,
                    43.763807789913002
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 86.068636,
                "y": 44.308198,
                "name": "石河子大学",
                "number": 9.0,
                "province": "新疆维吾尔自治区",
                "code": 65.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    86.068636198168306,
                    44.3081979309056
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 87.706134,
                "y": 43.803315,
                "name": "新疆师范大学",
                "number": 16.0,
                "province": "新疆维吾尔自治区",
                "code": 65.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    87.706134303281203,
                    43.803314992018798
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 102.69916,
                "y": 25.05594,
                "name": "云南大学",
                "number": 14.0,
                "province": "云南省",
                "code": 53.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    102.699160067123998,
                    25.0559403947072
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 102.694635,
                "y": 25.059068,
                "name": "云南师范大学",
                "number": 31.0,
                "province": "云南省",
                "code": 53.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    102.694635142970995,
                    25.059067508034399
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 120.134546,
                "y": 30.28471,
                "name": "浙江师范大学",
                "number": 11.0,
                "province": "浙江省",
                "code": 33.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    120.134545601446007,
                    30.284710018422
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 106.415063,
                "y": 29.822752,
                "name": "西南大学",
                "number": 16.0,
                "province": "重庆市",
                "code": 50.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    106.415062927633002,
                    29.822752144022299
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "x": 106.45147,
                "y": 29.560811,
                "name": "重庆师范大学",
                "number": 9.0,
                "province": "重庆市",
                "code": 50.0
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    106.451470308717006,
                    29.560811228470801
                ]
            }
        }
    ]
}