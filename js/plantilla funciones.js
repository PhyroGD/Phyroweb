alert('La página ha cargado una vez')

function validar(formulario){
	if (formulario.conmbre.value) != "" ) {
		return true;
		
	}
	else {
		return false;
		
	}
}
// Sintaxis Básica//
function nombre(variable){
	instruciones;
}

// Ejemplos //

function conversor_pesetas(p){ // Convertir Pesetas a Euros 
	var e;
	e=p*0.00601012;
	return e;
}

function  conversor_centy(c){ // Convertir Centígrados a Farenheit 
	var f;
	f=(c*9/5)+32;
	return f;
}

function  area_cuadrado(l){ // Área del cuadradro 
	var a;
	a=l*l;
	return a;
}

function  area_rectangulo(b,h){ // Área del rectangulo 
	var a;
	a=b*h;
	return a;
}

function  area_triangulo(b,h){ // Área del triangulo
	var a;
	a=(b*h)/2;
	return a;
}

function  area_circlo(r){ // Área del triangulo 
	var a; π;
	π=3,1416;
	a=π*r^2;
	return a;
}

// Obtener fecha y hora// 

function fh(){ 
	var datetime = new Date() // Definimos variable//
	document.write("El fecha es:",datetime.getDate(),"/", datetime.getMonth(),"/", datetime.getFullYear(),"<br>","La hora es;", datetime.getHours(),":",datetime.getMinutes(),"<br>"); // document.write --> Instrucción para generar texto en una página nueva//
	document.write("El dia es:",datetime.getDate(),"<br>");
	document.write("El mes es:",datetime.getMonth()+1,"<br>"); // +1 porque los meses los cuenta de 0 a 11 porque patata (?)//
	document.write("El año es:",datetime.getFullYear(),"<br>");
	document.write("La hora es:",datetime.getHours(),"<br>");
	document.write("El minuto es:",datetime.getMinutes(),"<br>");
	document.write("El segundo es:",datetime.getSeconds(),"<br>");
	document.write("El milisegundo es:",datetime.getTime(),"<br>");
	document.write("El dia de la semana es:",datetime.getDay(),"<br>");
}
// Operador Condicional
var e1=13;
var e2=18;
var e3=35;
Resultado = (e1>=18) ? document.write("Mayor de edad <br>") : document.write("Menor de edad <br>");
Resultado = (e2>=18) ? document.write("Mayor de edad <br>") : document.write("Menor de edad <br>");
Resultado = (e3>=18) ? document.write("Mayor de edad <br>") : document.write("Menor de edad <br>");
	
		// Con función
			function edades(e)
			{
				Resultado = (e>=18) ? document.write("Mayor de edad <br>") : document.write("Menor de edad <br>");
			}
				edades(13);
				edades(18);
				edades(35);


// Suma WHILE
var p=0; // Valor inicial
var y=0;
while (p<200)
{
	p=p+2; // Suma de 2 en 2 hasta menos de 20
	y=p+y; // como Y vale 0, esta suma da el valor final de p + 2
}
document.write(y); 

//Suma FOR
var y=0;
for (var p=0;p<=200;p+=2)
{
	y=p+y; 
}
document.write(y);



