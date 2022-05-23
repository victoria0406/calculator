

/*functions */

 
export function calculator(new_formula){
    /*계산 식을 입력하면 답을 출력하는 함수*/
    //console.log(new_formula);
    var splice0 = new_formula.indexOf("(");
    if (splice0===-1){
        splice0=new_formula.length;
    }
    if(splice0===0){
        const barr = new_formula.lastIndexOf(")");
        if(barr===new_formula.length-1){
            return calculator(new_formula.slice(1,new_formula.length-1));
        }
        else if (barr===-1){
            return calculator(new_formula.slice(1,new_formula.length));
        }
        else{
            console.log(new_formula.slice(barr+2,new_formula.length)+new_formula[barr+1]+new_formula.slice(0,barr+1));
            return calculator(new_formula.slice(barr+2,new_formula.length)+new_formula[barr+1]+new_formula.slice(0,barr+1));
        }
    }
    const splice1 = Math.max(new_formula.lastIndexOf("+",splice0),new_formula.lastIndexOf("-",splice0));
    if (splice1===-1){
        const splice2 = Math.max(new_formula.lastIndexOf("x",splice0),new_formula.lastIndexOf("/",splice0));
        if(splice2===-1){
            return Number(new_formula);
        }
        else if (new_formula[splice2]==="x"){
            return calculator(new_formula.slice(0,splice2))*calculator(new_formula.slice(splice2+1));
        }
        else if (new_formula[splice2]==="/"){
            return calculator(new_formula.slice(0,splice2))/calculator(new_formula.slice(splice2+1));
        }
    }
    else if (new_formula[splice1]==='+'){
        return calculator(new_formula.slice(0,splice1))+calculator(new_formula.slice(splice1+1));
    }
    else if (new_formula[splice1]==='-'){
        return calculator(new_formula.slice(0,splice1))-calculator(new_formula.slice(splice1+1));
    }




    return 4;
}

/*init */
const init_state = {
    input_list :"",
    answer:0,
}

/*action*/
const ADD_INPUT = "ADD_INPUT";
const CALCULATE = "CALCULATE";
const SAVE= "SAVE";

export const add_input = ele =>({
    type:ADD_INPUT,
    ele
})

export const calculate =_=>({
    type:CALCULATE
})
export const save = _ =>({
    type:SAVE
})


export default function reducer(state=init_state, action){
    switch(action.type){
        case ADD_INPUT:
            if(["+","-","x","/"].includes(action.ele)){
                if(state.input_list.length===0 || ["+","-","x","/"].includes(state.input_list[state.input_list.length-1])){
                    return state
                }
            }
            return{
                ...state,
                input_list:state.input_list+action.ele
            
            }
        case CALCULATE:
            return{
                ...state,
                answer:calculator(state.input_list)
            }
        case SAVE:
            return{
                ...state,
                input_list:String(state.answer)
            }
        default:
            return state
    }

}