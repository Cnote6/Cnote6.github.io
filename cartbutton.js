	$(document).ready(function() {
			$("#cartBtn").click(function() {
			  let quantity =  document.getElementById("quantity").value;
			let prices = document.getElementById("prices1");
			let priceNum = parseFloat(3.55); 
			let total =  quantity * priceNum;
		
			let product = $("name").val();
			 alert(` ${product}: $ ${total} added to cart`);
	});
			});