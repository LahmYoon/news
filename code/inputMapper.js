module.exports.searchRestaurant= function(bindings, context) {
 return {
   "uri": "restaurantfindapp://search/thai",
   "packageName": "com.rae.restaurantfindapp",
   "action": "android.intent.action.SEARCH",
   "componentName": "com.rae.restaurantfindapp/com.rae.restaurantfindapp.MainActivity",
   "categories": [
    "android.intent.category.DEFAULT"
   ],
   "flags": 0x10000000, // Intent.FLAG_ACTIVITY_NEW_TASK 
   "type" : "text/plain",
   "extras": [
     {
       "key": "searchTerm",
       "type": "java.lang.String",
       "value": "thai food restaurant"
     }
   ]
 };
}