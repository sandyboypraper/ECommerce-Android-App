const initialState = {
    cartItems : [
    ],
    total : 0,
    sellerid : 0,
    totalammount : 0,
}


export default (state = initialState , action) => {

    console.log(state);

    switch(action.type){
        case 'INCREMENT':
            var item = action.item;
            var id = item["id"];
            var cItems = state.cartItems;
            var booll = false;
            var cartlist = [];
            var totaleffextor = 0;
            var totalammount = state.totalammount;
            for(var i = 0;i<cItems.length;i++)
            {
                if(cItems[i]["id"] == id)
                {
                    booll = true;
                    cItems[i]["qty"] = cItems[i]["qty"] + 1;
                    totalammount += cItems[i]["Price"];
                }
                
                cartlist.push(cItems[i]);
            }
            if(!booll)
            {
                var temp = {};
                temp["id"] = item["id"];
                temp["sellerid"] = item["sellerid"];
                temp["qty"] = 1;
                temp["sellerName"] = item["sellerName"];
                temp["itemName"] = item["itemName"];
                temp["Price"] = item["Price"];
                temp["imagelink"] = item["imagelink"];
                totalammount += temp["Price"]
                totaleffextor = 1;
                cartlist.push(temp);
            }
            var t = state.total + totaleffextor
            var onlyOne = [];
            if(state.sellerid != item["sellerid"])
            {
                var tempcount = 0;
                for(var i = 0;i < cartlist.length; i++)
                {
                    if(cartlist[i]["sellerid"] == item["sellerid"])
                    {
                        onlyOne.push(cartlist[i]);
                        
                    }
                    else{
                        tempcount++;
                    }
                }

                t -= tempcount;
            }
            else
            {
                onlyOne = cartlist;
            }
            return {...state , total : t , cartItems : onlyOne , totalammount , sellerid : item.sellerid };
        case 'DECREMENT':
            var item = action.item;
            var id = item["id"];
            var cItems = state.cartItems;
            var totaleffextor = 0;
            var cartlist = []
            var totalammount = state.totalammount;
            for(var i = 0;i<cItems.length;i++)
            {
                if(cItems[i]["id"] == id)
                {
                    cItems[i]["qty"] = cItems[i]["qty"] - 1;
                    totalammount -= cItems[i]["Price"];
                }
                if(cItems[i]["qty"] > 0)
                 {
                     cartlist.push(cItems[i]);
                 }
            }

            totaleffextor = state.total - cartlist.length;

            return {...state , total : state.total - totaleffextor , cartItems : cartlist , totalammount};
        case 'REMOVEFROMCART':
            var id = action.id;
            var cItems = state.cartItems;
            var ccItems = [];
            var totalammount = state.totalammount;
            var ind = -1;
            for(var i = 0;i<cItems.length;i++)
            {
                if(cItems[i]["id"] != id)
                {
                    ccItems.push(cItems[i]);
                    
                }
                else{
                    ind = i;
                }
            }
            var decamount = cItems[ind]["Price"]*cItems[ind]["qty"];
            totalammount -= decamount;
            return {...state , total : state.total - 1 , cartItems : ccItems , totalammount};
        case 'EMPTYTHECART':
            return initialState;
        default:
            return state;
    }
}