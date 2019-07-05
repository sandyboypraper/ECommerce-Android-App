const data = [
    {   
        "id" : 1,
        "title" : "kelashi pede wale",
        "tagLine" : "khush rho tandrusst rho",
        "Adress" : "main market near relians tower kirawali agra",
        "Image" : ""
    },
    {
        "id" : 2,
        "title" : "Agrwal clothing store",
        "tagLine":"apna sapna mony mony",
        "Adress" : "main market agra",
        "Image" : ""
    },
    {
        "id" : 3,
        "title" : "Panchi petha",
        "tagLine":"Beverage , cool lassy",
        "Adress" : "Agra",
        "Image" : ""
    },
    {
        "id" : 4,
        "title" : "rakesh Mobile shop",
        "tagLine" : "hey boy",
        "Adress" : "kirawali NH-55 Fatehpur sikri road",
        "Image" : ""
    }
]


var pdata = [
    {
        "id" : 1,
        "sellerid" : 1,
        "name" : "Khoya peda",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 2,
        "sellerid" : 1,
        "name" : "metha peda",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 3,
        "sellerid" : 1,
        "name" : "namkeen peda",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 4,
        "sellerid" : 2,
        "name" : "jeans",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 5,
        "sellerid" : 2,
        "name" : "Tshirts",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 6,
        "sellerid" : 2,
        "name" : "Denims",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 7,
        "sellerid" : 3,
        "name" : "Mashahur gulabi pentha",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 8,
        "sellerid" : 3,
        "name" : "akbari pentha",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 9,
        "sellerid" : 3,
        "name" : "ungali chat jaoge",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 10,
        "sellerid" : 4,
        "name" : "samsung",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 11,
        "sellerid" : 4,
        "name" : "Apple",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 12,
        "sellerid" : 4,
        "name" : "Motorola",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 13,
        "sellerid" : 4,
        "name" : "Nokia",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 14,
        "sellerid" : 4,
        "name" : "LG - TV",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 15,
        "sellerid" : 4,
        "name" : "Max china Ear Phone",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 16,
        "sellerid" : 4,
        "name" : "Samsun monile charger",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    },
    {
        "id" : 17,
        "sellerid" : 4,
        "name" : "Pata nahi",
        "Price" : 120,
        "Previous-Price" : "150/kg",
        "discount" : "30%" 
    }
]

export const fetchAllSellers = () => {
    return data;
}

export const fetchProductsBySellerId = (id) => {
   var t = [];
   for(var i = 0;i<pdata.length;i++)
   {
       if(pdata[i]["sellerid"] == id)
       {
           t.push(pdata[i]);
       }
   }
    return t;
}