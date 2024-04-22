const path = require('path');

module.exports = {
  // Mybatis Mapper 설정
  mapper_info: [
    // 사용자
    { mapperNm: "userMapper", path: path.resolve(__dirname, "../mapper/user/userMapper.xml") },
    // 상품정보
    { mapperNm: "ProductMapper", path: path.resolve(__dirname, "../mapper/Product/ProductMapper.xml") },

  ]
}