function generateRandom(){
    const chars = "0123456789ABCDEFGHIJKLMNOPgdhsvbaeoirpwyrtfbnmv";
    let strLength = 7;
    let result = '';
    for(let i=0; i< strLength; i++){
        let randomnum = Math.floor(Math.random()*chars.length);
        result += chars.substring(randomnum, randomnum + 1);
    }
    document.getElementById('randomChar').innerHTML = result;
}