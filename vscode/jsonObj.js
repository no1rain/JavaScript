// JSON
// JavaScript Object Notation 

'use strict';

let data = { "PLT_CODE": [  {item_cd: "A1234567", item_name: "Moon IT'S fire!!!", qty: 20}, 
                            {item_cd: "A7654321", item_name: "Sole IT\'S Volt", qty: 371},
                            {item_cd: "A7654321", item_name: "Sole IT\\'S Volt", qty: 382},
                            {item_cd: "A7654321", item_name: "Sole IT\\\'S Volt", qty: 503},
                            {item_cd: "A7654321", item_name: "Sole IT\\\\'S Volt", qty: 594},
                            {item_cd: "A7654321", item_name: "Sole IT\\\\\'S Volt", qty: 725},
                            {item_cd: "A7654321", item_name: "Sole IT\\\\\\'S Volt", qty: 776},
                            {item_cd: "A7654321", item_name: "Sole IT\\\\\\\'S Volt", qty: 837},
                            {item_cd: "A7654321", item_name: "Sole IT\\\\\\\\'S Volt", qty: 848},
                            {item_cd: "A7654321", item_name: "Sole IT\\\\\\\\\'S Volt", qty: 899},
                            {item_cd: "A7654321", item_name: "Sole IT\\\\\\\\\\'S Volt", qty: 990}, ]};

let jsondata = JSON.stringify(data);

console.log("jsondata_org=====" + jsondata);

const reg = /\\{0,8}\'/g;

if(reg.test(jsondata)) {
    console.log("match");

    let result = jsondata.replace(reg, "\\'");
    
    console.log("jsondata_reg=====" + result);
}