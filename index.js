function saturdayFun(act = "roller-skate"){

    return (`This Saturday, I want to ${act}!`);
}
saturdayFun();
saturdayFun("bathe the dog");

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(pray = "*"){

    const innerFunction = function(hope = "special"){
        return `You are ${pray}${hope}${pray}!`;
    };
        return innerFunction;
}

wrapAdjective("%")("a dedicated programmer");