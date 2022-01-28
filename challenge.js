const tel1 = document.evaluate('//*[@id="comp-kktfmgn8"]/p/span', document,null, XPathResult.ANY_TYPE,null).iterateNext().textContent;
const tel2 = document.evaluate('//*[@id="comp-ks7htvty"]/p/span', document,null, XPathResult.ANY_TYPE,null).iterateNext().textContent;
const officeNumber=Number('+251 (11) 650 7058'.slice(-4));
const mobileNumber=Number('+1 (424) 341-3346'.slice(-4));
const result=officeNumber/mobileNumber;
console.log(result); 
console.log(Number(result.toFixed(2))); //approximated to two decimal place
