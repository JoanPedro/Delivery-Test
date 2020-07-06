# Delivery Test
- DeliveryMuch
<p align="center">
    <a href="https://github.com/JoanPedro/Delivery-Test//tree/master"> 
      <img alt="Backend" src="https://img.shields.io/badge/Backend-Finalizado-success">
    </a>
</p>

## Como iniciar o projeto!

### - Clone do Repositório
```https://github.com/JoanPedro/Delivery-Test.git```
### - Instalar as dependências
```npm install```
## Testes
1. Geral: ```npm test```
2. CI: ```test:ci```
## Inicialização
1. ```npm start```
   ou
2. Possuir o Docker e Docker-compose instalado:
```docker-compose up -d```
# Endpoint da aplicação:
#### A API possui apenas um endpoint, que deve respeitar a seguinte chamada:

```http://localhost:5858/recipes/?i={ingrediente_1},{ingrediente_2},{ingrediente_3}```
###### OBS. A API deve receber como parâmetro um conjunto de ingredientes (máximo 3).
#### A resposta dessa requisição é do tipo:
```
{
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
}
```
