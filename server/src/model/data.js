let _usuarios = [
        { id : 1, user: 'admin', password: 'admin'},
        { id : 2, user: 'lucas', password: '123'},
        { id : 3, user: 'diego', password: '123'},
        { id : 4, user: 'teste', password: '123'}
    ];
let _games = [
        {
            id: 1,
            title:'Fortnite', 
            ano:'2017', 
            imgUrl : "https://static-assets-prod.epicgames.com/fortnite/static/webpack/75c90057b203174b87f36e0013ac5634.jpg"},
        {
            id: 2, 
            title:'OW', 
            ano:'2016',
            imgUrl : "https://o.aolcdn.com/images/dims?quality=100&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Ffa9348f0c11bd395477e10dcef498fc5%2F205280051%2Foverwatch_oneyear-ed.jpg&client=cbc79c14efcebee57402&signature=c50ba8259a7194da0c25a29a65eb54a3319b60ea"
        },
        {
            id: 3, 
            title:'GOW 4 ', 
            ano:'2018',
            imgUrl: "https://www.meups4.com.br/wp-content/uploads/2017/12/God-of-War.jpg"
            
        }
    ];

module.exports = { 
    usuarios : _usuarios,
    games : _games
};