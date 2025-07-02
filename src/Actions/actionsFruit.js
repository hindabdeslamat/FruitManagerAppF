import * as type from './typeActions'

export  function addFruit(myFruit){

    return({
        type:type.ADD_FRUIT,
        payload:myFruit
    })}
export function supprimerFruit(monFruit){
    return(
        {type:type.REMOVE_FRUIT,
        payload:monFruit}
    )}
export function annuler(){
    return(
        {type:type.ANNULER_FRUIT}
)}

export  function viderFruit(){
    return({
        type:type.REMOVE_ALL_FRUITS
    })
}