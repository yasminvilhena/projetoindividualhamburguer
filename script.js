
fetch(" http://localhost:3000/Fornecedores")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				<td> <img src='${product.image}'> </td>
				<td>${product.name}</td>
				<td>${product.price}</td>
				<td>${product.Code}</td>
				<td>${product.setor}</td>
							</tr>
		`;
	}

	placeholder.innerHTML = out;
});

	fetch(' http://localhost:3000/Fornecedores').then(function(response){ console.log(response.data) })

	/* Fetch Get PRODUTOS*/
	fetch('  http://localhost:3000/produtos')
	.then(res=>{
		if (res.ok) {console.log("GET request successuful")}
		else  {console.log("GET request unsuccessuful")}
		return res})
		.then(res =>res.json())
		.then(res =>console.json(data))
		.catch(error =>console.log(error))

/* Fetch post PRODUTOS */ 
fetch('http://localhost:3000/produtos', {
	
method:"POST",
headers: { 	'content-type': 'products/json'
 },
   body: JSON.stringify(
	{
	
      "image": "product-images/x-tudo.jpg",
      "name": "x-tudo",
      "price": "4.00",
      "Code": "K122",
      "setor": "lanchonete"
 }
)
})

.then(res=>{
	if (res.ok) {console.log("POST request successuful")}
	else  {console.log("POST request unsuccessuful")}
	return res})
	.then(res =>res.json())
	.then(res =>console.json(data))
	.catch(error =>console.log(error))

/* Fetch PUT PRODUTOS */ 
fetch('http://localhost:3000/produtos', {
	
method:"PUT",
headers: { 	'content-type': 'products/json'
 },
   body: JSON.stringify(
	{
	
      "image": "product-images/x-tudo.jpg",
      "name": "x-tudo",
      "price": "4.00",
      "Code": "K122",
      "setor": "lanchonete"
 }
)
})

.then(res=>{
	if (res.ok) {console.log("PUT request successuful")}
	else  {console.log("PUT request unsuccessuful")}
	return res})
	.then(res =>res.json())
	.then(res =>console.json(data))
	.catch(error =>console.log(error))

	
/* Fetch delete PRODUTOS */ 
fetch('http://localhost:3000/produtos', {
	
method:"DELETE",
headers: { 	'content-type': 'Products/json'
 },
})
.then(res=>{
	if (res.ok) {console.log("DELETE request successuful")}
	else  {console.log("DELETE request unsuccessuful")}
	return res})
	.then(res =>res.json())
	.then(res =>console.json(data))
	.catch(error =>console.log(error))
