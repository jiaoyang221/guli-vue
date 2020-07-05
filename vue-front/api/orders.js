import request from '@/utils/request'

export default {
  createOrders(courseId) {
    return request({
      url: `/eduorder/order/createOrder/${courseId}`,
      method: 'post'
    })
  },
  getOrdersInfo(id) {
    return request({
      url: `/eduorder/order/getOrderInfo/${id}`,
      method: 'get'
    })
  },
  createNative(orderNo) {
    return request({
      url: `/eduorder/paylog/createNative/${orderNo}`,
      method: 'get'
    })
  },
  queryPayStatus(orderNo) {
    return request({
      url: `/eduorder/paylog/queryPayStatus/${orderNo}`,
      method: 'get'
    })
  }
}