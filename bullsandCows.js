/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let ret = ""
    
    let secretKey = {}
    for(let i = 0; i < secret.length; i++){
        if(secret[i] in secretKey){
            secretKey[secret[i]] += 1;
        }else{
            secretKey[secret[i]] = 1;
        }
    }
    
    let aNum = 0;
    let bNum = 0;
    for(let i=0; i < secret.length; i++){
        if(secret[i] === guess[i]){
            aNum += 1;
            if(secretKey[guess[i]] === 0){
                bNum -= 1;
                secretKey[guess[i]] += 1;
            }
            secretKey[guess[i]] -= 1;
        }else if(guess[i] in secretKey && secretKey[guess[i]] > 0){
            bNum += 1;
            secretKey[guess[i]] -= 1;
        }
    }
    
    return String(aNum) + 'A'+String(bNum)+'B';
};
