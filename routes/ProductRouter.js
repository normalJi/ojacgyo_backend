const express = require('express');
const router = express.Router();
//const { makeRouterHandler, registerPostHandler } = require('./RouterHandler');

const { registerPostHandler } = require('./RouterHandler');

const PostHandlers = [
  // 상품 메인 이미지 리스트 조회
  ['/api/v1/product/getBannerImg', require("../src/Product/Product").getBannerImg],
  // 상품 상세 기본정보
  ['/api/v1/product/getDetailInfo', require("../src/Product/Product").getDetailInfo],
  // 상품 상세 이미지정보
  ['/api/v1/product/getDetailImage', require("../src/Product/Product").getDetailImage],
  // 상품 상세 기본정보 리스트
  ['/api/v1/product/getDetailList', require("../src/Product/Product").getDetailList],
  
];

// 
// PostHandlers.push(
//   ['/api/v1/system/authority/getAuthorityList', require("../src/system/authority").getAuthorityList],
// )


// 항상 마지막 위치
//PostHandlers.forEach(handler => router.post(handler[0], makeRouterHandler(handler[1])));
registerPostHandler(router, PostHandlers);

module.exports = router;