import Api from '@/services/Api'

export default {
    read (){
        return Api().get('games')
    },
    create (game){
        return Api().post('games',game)
    },
    show (id){
        return Api().get('games/'+id)
    }

}

