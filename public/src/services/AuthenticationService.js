import Api from '@/services/Api'

export default {
    register (credentials){
        console.log(Api())
        return Api().post('register',credentials)
    }
}

