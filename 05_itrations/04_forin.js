const languges = {
    js: "javascsipt",
    py: "python",
    rb: "ruby",
    
}


for (const key in languges) {
   //console.log(`${key} shortcut is for ${languges[key]}`);
}

const programming =["js","python","ruby","cpp","csharp"]

for (const key in programming) {
    console.table(programming[key])
   // console.log(programming[key]);
}
 /*  
 we cannot able to itrate over the map using fo in loop
const map = new Map()
map.set('In', "india")
map.set('In', "india")
map.set("Us", 'USA')
map.set('fi','France')

for (const key in map) {
    console.log(key);
}
*/
