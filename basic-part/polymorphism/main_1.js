/**
 * This programs demonstrates the polymorphism in Javascript
 * it is crucial to abstract the same part of program, which can avoid too many if-else in code
 * Created by linajiema on 2018/1/3.
 */
(() => {
    let renderMap = map => {
        map.show instanceof Function && map.show();
    }
    
    let googleMap = {
        show() {
            console.log('开始渲染谷歌地图');
        }
    }
    let baiduMap = {
        show() {
            console.log('开始渲染百度地图');
        }
    }
    
    renderMap(googleMap);
    renderMap(baiduMap);
})()