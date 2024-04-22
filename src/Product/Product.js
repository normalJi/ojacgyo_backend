/**
 * @description 상품정보 관련
 * 작성자       날짜             수정 내용
 * --------------------------------------------------------------------------
 * jhr         2024.04.19       최초생성
 */

const dbMng = require('../../config/dbInfo');
const logger = require("../../logger/logger");
const common = require('../../common/common')
const CustomError = require('../../errors/CustomError');
const util = require('../../common/util');

const RequestData = require('../../common/RequestData');
const ResponseData = require('../../common/ResponseData');

const { RESPONSE_CODE, RESPONSE_FIELD } = require('../../common/ResponseConst');

/**
 * 광고주 상품 이미지 조회
 * @param {*} req 
 * @param {*} res 
 */
const getBannerImg = async ( req, res ) => {
  logger.debug(`${req.originalUrl} == START ==`);
  let requestData = new RequestData(req);
  let responseData = new ResponseData(requestData);
  try {
    let params = requestData.getBody();
    
    let files = await dbMng.select("ProductMapper", 'getBannerImg', params);

    responseData.setDataValue('files', files);
    
    logger.debug(`${req.originalUrl} == END ==`);    
    res.send(responseData);    

  } catch (e) {
    logger.debug(`${req.originalUrl} == ERROR == ${e.message}`);    
    responseData.setResponseCode(RESPONSE_CODE.CONTACT_ADMIN);
  }
}

/**
 * 상품 상세 기본정보
 * @param {*} req 
 * @param {*} res 
 */
const getDetailInfo = async ( req, res ) => {
  logger.debug(`${req.originalUrl} == START ==`);
  let requestData = new RequestData(req);
  let responseData = new ResponseData(requestData);
  try {
    let params = requestData.getBody();
    
    let detail = await dbMng.single("ProductMapper", 'getDetailInfo', params);

    responseData.setDataValue('detail', detail);
    logger.debug(`${req.originalUrl} == END ==`);    
    res.send(responseData);    

  } catch (e) {
    logger.debug(`${req.originalUrl} == ERROR == ${e.message}`);    
    responseData.setResponseCode(RESPONSE_CODE.CONTACT_ADMIN);
  }
}

/**
 * 상품 상세 이미지 정보 조회
 * @param {*} req 
 * @param {*} res 
 */
const getDetailImage = async ( req, res ) => {
  logger.debug(`${req.originalUrl} == START ==`);
  let requestData = new RequestData(req);
  let responseData = new ResponseData(requestData);
  try {
    let params = requestData.getBody();
    
    let images = await dbMng.select("ProductMapper", 'getDetailImage', params);

    responseData.setDataValue('images', images);
    logger.debug(`${req.originalUrl} == END ==`);    
    res.send(responseData);    

  } catch (e) {
    logger.debug(`${req.originalUrl} == ERROR == ${e.message}`);    
    responseData.setResponseCode(RESPONSE_CODE.CONTACT_ADMIN);
  }
}

/**
 * 상품 상세 기본정보 리스트 조회
 * @param {*} req 
 * @param {*} res 
 */
const getDetailList = async ( req, res ) => {
  logger.debug(`${req.originalUrl} == START ==`);
  let requestData = new RequestData(req);
  let responseData = new ResponseData(requestData);
  try {
    let params = requestData.getBody();
    
    let detailList = await dbMng.select("ProductMapper", 'getDetailList', params);

    responseData.setDataValue('detailList', detailList);
    logger.debug(`${req.originalUrl} == END ==`);    
    res.send(responseData);    

  } catch (e) {
    logger.debug(`${req.originalUrl} == ERROR == ${e.message}`);    
    responseData.setResponseCode(RESPONSE_CODE.CONTACT_ADMIN);
  }
}

module.exports = {    
  getBannerImg,
  getDetailInfo,
  getDetailImage,
  getDetailList,
}