


 
 function validate() {
 
 let fName = document.getElementById('firstName');
 let lName = document.getElementById('lastName');
 let address = document.getElementById('address');
 let city = document.getElementById('city');
 let state = document.getElementById('state');
 let zip = document.getElementById('zip');
 
 let shipadd = document.getElementById('address1');
 let shipadd2 = document.getElementById('address2');
 let shipCity = document.getElementById('shippingCity');
 let shipZip = document.getElementById('shippingZip');
 
 let cardHolder = document.getElementById('cardHolder');
 let cardNum = document.getElementById('cardNumber');
 let expDate = document.getElementById('expDate');
 let ccv = document.getElementById('ccvNum');
 
 if( fName.value === "" || lName.value  === "" || address.value  === "" || city.value  === "" || state.value  === "" || 
 zip.value === "" || shipadd.value  === "" || shipadd2.value  === "" || shipCity.value  === "" || shipZip.value  === "") {
 
 alert("ERROR: please correct your information");
 }
 else{
 alert("SUCCESS: your information has been saved");
 }
  if(cardHolder.value === "" || cardNum.value === "" || cardNum.value === "" || expDate.value === "" || ccv.value === "") {
  	alert("ERROR: please review your payment information");
	}else{
	alert("SUCCESS: Your payment details have been saved");
	}
 };
 
 
 
 $(document).ready(function() {
  $('#checkBox').click(function() {
   $('.hide').toggle("slow");
  });
 });
 
 