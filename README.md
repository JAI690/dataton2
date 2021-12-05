El presente desarrollo es un API impulsada con NodeJs y MongoDB que te permite buscar la informacion de un servidor público a partir de su CURP. 

Puedes utilizar la interfaz en la siguiente liga https://dataton.herokuapp.com/ la cual te va a permitir ingresar un CURP de tu interés o bien acceder
a una lista de servidores publicos para revisar su información dandole click en su nombre.

La informacion es un dashboard que desglosa lo siguiente:

  1. Iformación general del servidor.
  2. Relaciones / conexiones con otros servidores publicos.
  3. Sanciones por incumplimiento.
  4. Las declaraciones presentadas.
  
 Por otro lado, puedes consumir esta informacion a partir de la ruta https://dataton.herokuapp.com/data/servidor/"curp" cambiando por lo CURP  que te interese, o 
 bien mandando este dato con peticiones POST y enviando por body curp1: <curp> todo en mayusculas.
 
 
