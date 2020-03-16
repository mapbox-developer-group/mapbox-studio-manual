---
标题: 地图画布
描述: 你可以与地图进行交互，在单个点上查看所有图层，并且当选择数据面板打开时，你可以检查所选瓦片集中的各个要素来查看其属性。
prependJs:
- "import Browser from '@mapbox/dr-ui/browser';"
- "import Icon from '@mapbox/mr-ui/icon';"
- "import Note from '@mapbox/dr-ui/note';"
- "import Video from '@mapbox/dr-ui/video';"
- "import MapCanvas from '../../../../video/reference-styles-map-canvas.mp4';"
内容类型: 参考
---

## 地图画布

你可以与地图进行交互，在单个点上查看所有图层，并且当 **选择数据** 面板打开时，你可以检查所选瓦片集中的各个要素来查看其属性。

{{
  <Browser>
    <Video
      src={MapCanvas}
      title="Interact with the map canvas and click to open layer and component details."
    />
  </Browser>
}}

<h4 id='search-toolbar'>{{<Icon name='search' inline={true} />}} 地点搜索</h4>

通过 {{<Icon name='search' inline={true} />}} 放大镜图标，你可以搜索地图上的位置。 输入你要查找的内容并选择结果，搜索将带你到精确的位置上。
此搜索由 [Mapbox Geocoding API](https://docs.mapbox.com/api/search/#geocoding)进行技术支持。

虽然可以在样式编辑器中搜索和查看位置，但是不能在样式编辑器中创建新点。 请参考[Mapbox Studio数据集编辑器](/studio-manual/reference/datasets/)的下一部分，以了解如何搜索地点以及创建要素到地图上。

