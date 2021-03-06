import {request} from './request'
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
//获取接口
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.lowPrice;
    this.discount = itemInfo.discountDesc;
    this.realPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.services = services;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;

  }
}

//尺码表
export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
    this.key1 = info.key;
    this.key2 = rule.key;
  }
}


