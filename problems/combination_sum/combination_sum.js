/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    //candidiates = [1,2,3,4] target = [10]
    const combinationSet = []; 
    let current = 0; 
    //go through each number in the array
    for ( let i=0; i<candidates.length; i++){
        let combination = [];
        let current += i;
        combination.push[i];
        if(current < target){
            //do recursive function
            // for ( let i=0; i<candidates.length; i++){
                // current     
        }
        else if (current === target){
            combinationSet.push(combination)
            return;
        }
        else{
            return;
        }
        }
    }
    
    function recursive(){
        for ( let i=0; i<candidates.length; i++){
    }
        
};