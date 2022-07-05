<template>
  <div
    id="OMap"
    class="tgosmap"
  ></div>
  
</template>

<script>
export default {
  name: "MapTgos",
  data () {
    return {
      imgUrl: "https://api.tgos.tw/TGOS_API/images/marker2.png"
    }
  },
  methods: {
    InitWnd() {
      /* eslint-disable */
      var pMap
      var markerPoint = new TGOS.TGPoint(303895, 2773227)
      var pOMap = document.getElementById("OMap");
      var mapOptiions = {
        scaleControl: false, //不顯示比例尺
        navigationControl: true, //顯示地圖縮放控制項
        navigationControlOptions: {
          //設定地圖縮放控制項
          controlPosition: TGOS.TGControlPosition.TOP_LEFT, //控制項位置
          navigationControlStyle: TGOS.TGNavigationControlStyle.SMALL, //控制項樣式
        },
        mapTypeControl: false, //不顯示地圖類型控制項
      };
      pMap = new TGOS.TGOnlineMap(pOMap, TGOS.TGCoordSys.EPSG3826, mapOptiions); //建立地圖,選擇TWD97坐標
      pMap.setZoom(11); //初始地圖縮放層級
      pMap.setCenter(markerPoint); //初始地圖中心點
      
      var markerImg = new TGOS.TGImage(this.imgUrl, new TGOS.TGSize(38, 33), new TGOS.TGPoint(0, 0), new TGOS.TGPoint(10, 33));	//設定標記點圖片及尺寸大小
			var pTGMarker = new TGOS.TGMarker(pMap, markerPoint,'', markerImg);
      TGOS.TGEvent.addListener(pTGMarker, 'click', this.clickpoint)
    },
    clickpoint () {
      console.log('aa')
    }
  },
  mounted() {
    this.InitWnd();
  },
};
</script>

<style lang="sass" scoped>
  .tgosmap
    position: absolute 
    width: 100%
    height: 100%
    top: 0
    left: 0
</style>