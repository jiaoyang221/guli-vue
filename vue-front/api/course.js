import request from '@/utils/request'

export default {
  getCourseList(page, limit, searchObj) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data:searchObj
    })
  },
  getAllSubject() {
    return request({
      url: `/eduservice/subject/getAllSubject`,
      method: 'get'
    })
  },
  getCourseInfo(id) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseInfo/${id}`,
      method: 'get'
    })
  }
}