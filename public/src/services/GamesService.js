import Api from '@/services/Api'

export default {
    read (search){
        return Api().get('games',{
            params : {
                searchKey : search
            }
        })
    },
    create (game){
        return Api().post('games',game)
    },
    show (id){
        return Api().get('games/'+id)
    }

}

