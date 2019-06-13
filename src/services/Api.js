import axios from 'axios'
import qs from 'qs'
import router from '@/router'

export const Api = {
   base_url: process.env.VUE_APP_API_URL,

   async request(method, url, data, headers = {}) {
      url = this.base_url+url;
      const response = await axios
         .request({
            method,
            url,
            data: data,
            params: method === 'get' ? data : {},
            headers: {
               'Content-Type': 'application/json',
               ...headers
            }
         })
         .then(response => Promise.resolve(response.data))
         .catch(function(error){
            if(error.response.status === 401 ){
               router.replace({
                  path: '/login'
               })
            }
         })

      return response;
   },
   async get(url, data = null) {
      return await this.request(
         'get',
         url + '?' + qs.stringify(data), {},
      )
   },
   async post(url, data, headers = {}) {
      return  await this.request('post', url, data, headers)
   },
   async put(url, data, headers = {}) {
      return await this.request('put', url, data, headers)
   },
   async delete(url, data = {}) {
      return await this.request('delete', url, data)
   },

}
