const tel1 = '+251 (11) 650 7058';
const tel2 = '+1 (424) 341-3346';
const officeNumber=Number('+251 (11) 650 7058'.slice(-4));
const mobileNumber=Number('+1 (424) 341-3346'.slice(-4));
const result=officeNumber/mobileNumber;
console.log(result); 
console.log(Number(result.toFixed(2))); //approximated to two decimal place
