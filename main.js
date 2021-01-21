
/* import o datebr para seu arquivo principal


	exemplos:

  import datebr from '../Datebr'
  const datebr = require('../Datebr')

*/

//exemple de uso

var data_exemplo = '2021-01-19T18:03:44.381Z'


/*
	no primeiro parâmetros fica a string da data, caso colocarmos somente esse primeiro parametro
	somente sera retornado a data (ex: '19/01/2021').
	
	no segundo parâmetro sera retornado a data  e o horario (ex: '19/01/2021 - 18:03:44.38').
	
	
	no terceiro parâmetro somente será retornado o horario (ex: '18:03:44.38')
*/
datebr(data_exemplo, true, true)

