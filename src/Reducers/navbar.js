const initialState = {r:10,s:5,p:0}
const navReducer = (state =initialState ,action) =>{
    switch(action.type){

    case "R+": return state.r+1 ;
    case "R-": return state.r-1 ;

    case "S+": return state.s+1 ;
    case "S-": return state.s-1 ;

    case "P+": return state.p+1 ;
    case "P-": return state.p-1 ;

    default: return state
    }

}
export default navReducer