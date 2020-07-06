<h1> Delivery-Test </h1>
- DeliveryMuch 

<h1> Como iniciar o projeto </h1>

<h3> Clone do Repositório </h3>
`https://github.com/JoanPedro/Delivery-Test.git`

<h3> Instalar as dependências </h3>
`npm install`

<h2> Testes </h2>
1. Geral: `npm test`
2. CI: `test:ci`

<h2> Inicialização </h2>
1. `npm start`
   ou
2. Possuir o Docker e Docker-compose instalado
   1. `docker-compose up -d`

# Endpoint da aplicação:
A API possui apenas um endpoint, que deve respeitar a seguinte chamada:
`http://localhost:5858/recipes/?i={ingrediente_1},{ingrediente_2},{ingrediente_3}`
OBS. A API deve receber como parâmetro um conjunto de ingredientes (máximo 3).

A resposta dessa requisição é do tipo:
`{
	"keywords": ["onion", "tomato"],
	"recipes": [{
		"title": "Greek Omelet with Feta",
		"ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
		"link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
		"gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
	   },{
		"title": "Guacamole Dip Recipe",
		"ingredients": ["avocado", "onions", "tomato"],
		"link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
		"gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
	   }
	]
}`


