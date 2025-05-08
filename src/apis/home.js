/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */
import  http  from '@/utils/http'
export function getBannerAPI (){
  return http({
    url:'home/banner'
  })
}
