/* While dongusu */
// let i = 0;
// while (i < 10) {
//    console.log(i);
//    i++; // i += 1
// }

// let i = 10;
// while (i > 0) {
//    console.log(i);
//    // i--; // i = i-1; i -= 1
//    i -= 2; // i = i-2
// }

/* Break ve Continue */
/* break donguyu qirir. dongu sonlanir */
// let i = 0;
// while (i < 10) {
//    console.log(i);
//    if(i==5) {
//       break;
//    }
//    i++; // i += 1
// }

/* Continue calisdiqdan sonra dongunun basina qayidir */
// let i = 0;
// while (i < 10) { //sonsuz dongu
//    if(i==3 || i==5) {
//       i++;
//       continue;
//    }
//    console.log(i);
//    i++; // i += 1
// }

/* Do while - en az bir defe calisir*/
// let i = 0;
// do{
//    console.log(i);
//    i++;
// } while(i < 10);

/* For dongusu */
// const langs = ["Python", "Js", "Java"];
// let index = 0;
// while (index < langs.length) {
//    console.log(langs[index]);
//    index++;
// }
// for(var index = 0; index < langs.length; index++) {
//    console.log(langs[index]);
// }
/* Foreach */
// langs.forEach(function(lang,index) {
//    console.log(lang, index);
// })

/* Map */
// const users = [
//    {name: "Aydan", age:25},
//    {name: "Zeyneb", age:40},
//    {name: "Ali", age:12}
// ];
// const names = users.map(function(user) {
//    return user.name;
// })
// const ages = users.map(function(user) {
//    return user.age
// })
// console.log(names);
// console.log(ages);

/* For in */
const user = {
   name: "Aydan",
   age: 20
};
for (let key in user) {
   console.log(key, user[key]);
}
