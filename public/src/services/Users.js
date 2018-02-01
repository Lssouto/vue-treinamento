import Api from '@/services/Api'

export default {
    login (data){
        return Api().post('login',data)
    },
    create (data){
        return Api().post('user',data)
    },
    update (data){
        return Api().put('user/'+data.id,data)
    },
    read (search){
        return Api().get('user',{
            params : {
                searchKey : search
            }
        })
    },
    del (data){
        return Api().delete('user/'+data)
    }
    
}

