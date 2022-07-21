function calculandoTurno(){
    let nombreUsuario = prompt("Ingrese se nombre");
    let numeroTurno = parseInt(prompt("Ingrese su numero de turno"));
    let maxTurno = 10;

    if(nombreUsuario && numeroTurno){
    	if(numeroTurno < maxTurno){
			for (numeroTurno; numeroTurno <= maxTurno; numeroTurno++) {
				let resulTurno = maxTurno - numeroTurno;
				alert ('Estimado '+nombreUsuario+', su numero de turno es '+numeroTurno+', aún le quedan '+resulTurno+' turnos disponibles ');
			}
	    	alert ('Estimado '+nombreUsuario+', usted ha alcanzado el numero máximo de turnos ('+maxTurno+'), Muchas gracias.');
   	 	}else{
   	 		alert ('Estimado '+nombreUsuario+', su numero máximo de turnos es de '+maxTurno+'. No tiene turnos disponibles.');
   	 	}
    }else{
    	alert ('Debe completar todos los datos, recuerde que el turno tiene que ser un numero entero');
    }
 }

