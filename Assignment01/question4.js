

const item = {

	"name":"Biscuits",
  	"type" : "regular",
 	"category" : "food" ,
 	"price" : 2.0
}

const applyCoupon = category => disount => item => {
    item.price =  item.price - (item.price*disount);
    return item;
}


console.log(applyCoupon("food")(0.1)(item).price);