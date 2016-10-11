var custumLibrary = {};

// Equivalent to pluck of underscore bu can extract more than one key
// collectionArray - collection from which keys to be extracted.
// keysArray - keys to be extract
custumLibrary.pluckKeys = function(collectionArray, keysArray) {
	var result = [];
	if(!!collectionArray && collectionArray.length >1 && !!keysArray && keysArray.length>1) {
		for(var collectionIterator=0; collectionIterator<collectionArray.length; collectionIterator++) {
			var tempObject = {};
			for(var keysIterartor=0; keysIterartor<keysArray.length; keysIterartor++) {
				tempObject[keysArray[keysIterartor]] = collectionArray[collectionIterator][keysArray[keysIterartor]];
			}
			result.push(tempObject);
		}
		return result;
	} else {
		return {"error": "please pass all the arguement needed"};
	}
}

// Sum all keys of a particular collection if all the value of key is number
// collectionArray - collection from which keys to be added.
// keysArray - keys to be added
custumLibrary.sumKeys = function(collectionArray, keysArray) {
	var result = {};
	if(!!collectionArray && collectionArray.length >1 && !!keysArray && keysArray.length>1) {
		for(var keysIterartor=0; keysIterartor<keysArray.length; keysIterartor++) {
			var sum = 0;
			for(var collectionIterator=0; collectionIterator<collectionArray.length; collectionIterator++) {
				if(!!collectionArray[collectionIterator][keysArray[keysIterartor]]) {
					sum = sum + collectionArray[collectionIterator][keysArray[keysIterartor]];
				}
			}
			result[keysArray[keysIterartor]] = sum;
		}
		return result;
	} else {
		return {"error": "please pass all the arguement needed"};
	}
}

// Change all the keys value of a given collection
// collectionArray - collection from which keys to be change.
// object object to be changed
custumLibrary.changeKeys = function(collectionArray, object) {
	if(!!collectionArray && collectionArray.length >1 && !!keysArray && keysArray.length>1) {
		console.log(collectionArray,object);
		var keysArray = Object.keys(object);
		console.log("keys array are ",keysArray);
		if(!!collectionArray && collectionArray.length >1 && !!object) {
			for(var collectionIterator=0; collectionIterator<collectionArray.length; collectionIterator++) {
				for(var keysIterartor=0; keysIterartor<keysArray.length; keysIterartor++) {
					console.log(collectionArray[collectionIterator][keysArray[keysIterartor]]);
					if(!!collectionArray[collectionIterator][keysArray[keysIterartor]]) {
						collectionArray[collectionIterator][keysArray[keysIterartor]] = object[keysArray[keysIterartor]];
					}
				}
			}
		}
		return collectionArray;
	} else {
		return {"error": "please pass all the arguement needed"};
	}
}

module.exports = custumLibrary;



// var collectionArray = [{
// 	a:1,
// 	b:2,
// 	c:3,
// 	d:4,
// }, {
// 	a:10,
// 	b:20,
//   c:30,
// 	d:40,
// },{
// 	a:11,
// 	b:21,
// 	c:31,
// 	d:41,
// }]

// console.log(custumLibrary.sumKeys({a:20,b:"sushil"}));
