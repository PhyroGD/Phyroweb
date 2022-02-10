function validarFormulario()
		{
			if(	( validarNombre()==false || validarApellido()==false || validarEmail()==false || validarTextarea()==false || validarCheckbox()==false ) || ( validarEmpresa()==false || validarTelefono()==false || validarCPostal()==false || validarSelect()==false || validarCheckboxOp()==false) )
			{
				// alert("ERROR")
				document.getElementById("resultado").className='resultadoError';
				document.getElementById("resultado").innerHTML="	ERROR. Por favor, rellene los campos obligatorios &#10006;";
				return false;
			}
			else
			{
				// alert("Formulario enviado")
				document.getElementById("resultado").className='resultadoOK';
				document.getElementById("resultado").innerHTML="	Formulario Enviado &#10003;";
				return true;
			}
		}
		
		//Nombre
		
		var abecedario="abcdefghijklmnñopqrstuvwxyzáéíóú";
		function validarNombre() //funciona
		{
			name=document.getElementById("nombre").value;
			name=name.toLowerCase();			
			if((name==null) || (name.length==0)) // campo obligatorio
			{
				document.getElementById("nombre").className='textoError';
				return false;
			}
			else
			{
				if(!(/^[a-z ,.'-]+$/i.test(name)))
				{
					for(var i=0;i<name.length;i++)
					{
						if(abecedario.indexOf(name.charAt(i),0)==-1)
						{
							document.getElementById("nombre").className='textoError';
							return false;
						}
						else
						{
							// <!-- alert("Nombre: Es valido") -->
							// <!-- return true; -->
						}
					}
				}
			document.getElementById("nombre").className='textoOK';
			return true;
			}
		}		
		
		// Apellido
		
		function validarApellido() //funciona
		{
			name=document.getElementById("apellido").value;
			name=name.toLowerCase();			
			if((name==null) || (name.length==0)) // campo obligatorio
			{
				document.getElementById("apellido").className='textoError';
				return false;
			}
			else
			{
				if(!(/^[a-z ,.'-]+$/i.test(name)))
				{
					for(var i=0;i<name.length;i++)
					{
						if(abecedario.indexOf(name.charAt(i),0)==-1)
						{
							document.getElementById("apellido").className='textoError';
							return false;
						}
						else
						{
							// <!-- alert("Nombre: Es valido") -->
							// <!-- return true; -->
						}
					}
				}
			document.getElementById("apellido").className='textoOK';
			return true;
			}
		}
		
		// Email
		
		function validarEmail()
		{
		mail=document.getElementById("email").value;
		if(mail==null || mail.length==0)
			{
				document.getElementById("email").className='textoError';
				return false;
			}
			else
			{
				if(!(/^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,4}$/.test(mail)))
				{
					document.getElementById("email").className='textoError';
					return false;
				}
				else
				{
					document.getElementById("email").className='textoOK';
					return true;
				}
			}
		}
				
		// Empresa
		
		function validarEmpresa() //funciona
		{
			employ=document.getElementById("empresa").value;
			employ=employ.toLowerCase();			
			if((employ==null) || (employ.length==0))
			{
				document.getElementById("empresa").className='textoOK';
				return true;
			}
			else
			{
				if(!(/[^A-Za-z]/.test(employ)))
				{
					document.getElementById("empresa").className='textoError';
					// return false;
				}
				else
				{
					document.getElementById("empresa").className='textoOK';
					// return true;
				}
			}
		}
		
		// Telefono 
	
		function validarTelefono()
		{
			numero=document.getElementById("telefono").value;
			if(numero==null || numero.length==0)
			{
				document.getElementById("telefono").className='textoOK'
				return true;
			}
			else
			{
				if(!(/^\d{9}$/.test(numero)))
				{
					document.getElementById("telefono").className='textoError';
					return false;
				}
				else
				{
					document.getElementById("telefono").className='textoOK';
					return true;
				}
			}
		}		
		
		// Código Postal 
	
		function validarCPostal()
		{
			numero=document.getElementById("postal").value;
			if(numero==null || numero.length==0)
			{
				document.getElementById("postal").className='textoOK';
				return true;
			}
			else
			{
				if(!(/^\d{5}$/.test(numero)))
				{
					document.getElementById("postal").className='textoError';
					return false;
				}
				else
				{
					document.getElementById("postal").className='textoOK';
					return true;
				}
			}
		}
		
		//Solicitud
		
		function validarSelect()
		{
			opcion=document.getElementById("solicitud").value; // campo obligatorio
			if((opcion==null) || (opcion==0))
			{
				document.getElementById("solicitud").className='textoOKselect';
				return true;
			}
				document.getElementById("solicitud").className='textoOKselect';
				return true;
		}
		
		//Textarea
		
		function validarTextarea() //funciona
		{
			area=document.getElementById("textarea").value;
			area=area.toLowerCase();			
			if((area==null) || (area.length==0))
			{
				document.getElementById("textarea").className='textoErrortextarea';
				return false;
			}
			else
			{
				if(!(/^[A-Za-z0-9 ,.'-]+$/i.test(area)))
				{
					document.getElementById("textarea").className='textoErrortextarea';
					// return false;
				}
				else
				{
					document.getElementById("textarea").className='textoOKtextearea';
					// return true;
				}
			}
		}
		
		//Checkbox Obligatorio
		
		function validarCheckbox()
		{
					grupo=document.getElementsByName("checkob");
					var marcado=false;
					
					for(var i=0; i<grupo.length;i++)
					{
						
						if(grupo[i].checked)
						{
							marcado=true;
							break;
						}
					}
					
					if(!marcado)
					{	
						// alert("Checkbox: Debe aceptar la politica de privacidad");
						document.getElementById("mensaje_checkbox1").className='resultadoError';
						document.getElementById("mensaje_checkbox1").innerHTML="		Debe aceptar la politica de privacidad &#10006;"
						return false;
					}
					else
					{
						// alert("Correcto")
						document.getElementById("mensaje_checkbox1").className='resultadoOK';
						document.getElementById("mensaje_checkbox1").innerHTML="		&#10003;";
						return true;
					}
		}
		
		//Checkbox Opcional
		
		function validarCheckboxOp()
		{
					var grupo=document.getElementsByName("checkop");
					for(var i=0; i<grupo.length;i++)
					{
						if(grupo[i].checked)
						{
							document.getElementById("mensaje_checkbox2").className='resultadoOK';
							document.getElementById("mensaje_checkbox2").innerHTML="&#10003;";
							return true;
							break;
						}
						else
						{
							// document.getElementById("mensaje_checkbox2").className='resultadoOK';
							document.getElementById("mensaje_checkbox2").innerHTML="";
							return true;
							break;
						}
					}
		}