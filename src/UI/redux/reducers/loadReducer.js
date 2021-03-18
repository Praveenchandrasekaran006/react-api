let initial_state = {
    
    available_amount: {},
    validate_output: {},
    customer_details: [],
    balance_amount: {},
    acc_balance: {},
    ministatement_details: [],
    sender_balance: {}
    
}

const loadReducer = (state= initial_state, action) =>{
    switch(action.type){
        case "SET_LoadCash" :
        state = {
                ...state,
                available_amount: action.payload
            }
            break;
        case "SET_Validation" :
        state = {
                ...state,
                validate_output: action.payload
            }
            break;   
        case "SET_CustomerDetails" :
        state = {
                ...state,
                customer_details: action.payload
            }
            break;
        case "SET_CashWithdrawal" :
        state = {
                ...state,
                balance_amount: action.payload
            }
            break;   
        case "SET_AccountBalance" :
        state = {
                ...state,
                acc_balance: action.payload
            }
            break;   
        case "SET_MiniStatement" :
        state = {
                ...state,
                ministatement_details: action.payload
            }
            break;   
        case "SET_TransferMoney" :
        state = {
                ...state,
                sender_balance: action.payload
            }
            break;        
    }
    return state;
}

export default loadReducer