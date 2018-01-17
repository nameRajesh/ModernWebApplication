

const item = {

	"name":"Biscuits",
  	"type" : "regular",
 	"category" : "food" ,
 	"price" : 2.0
}

const applyCoupon = category => discount => item => {
    item.price =  item.price - (item.price*discount);
    return item;
}


console.log(applyCoupon("food")(0.1)(item).price);