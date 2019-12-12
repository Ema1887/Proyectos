//Declaración de variables
const nombreUsuario = "Emanuel Medran";
var saldoCuenta = 70000;
var limiteExtraccion = 10000;
var servicios = ['Agua', 'Telefono', 'Luz', 'Internet'];
var precios =[680, 1260, 1090, 1350];
var cuentasAmigas = ['Cuenta amiga 1', 'Cuenta amiga 2'];
var numeroDeCuenta = [ 1234567, 7654321];
var pass = 2122;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();

}



//recibe un valor numerico y lo suma a saldoCuenta
function sumarDinero(mount){
    saldoCuenta += parseInt(mount);
}
function restarDinero(mount){
    saldoCuenta -= parseInt(mount);
}
//funciones para validar
//recibe un valor numerico y lo resta a saldoCuenta
function menorQueLimite(mount){
    if (mount <= limiteExtraccion){
        return true;
    }
    else{
        return false;
    }
}
//recibe un valor numerico y retorna true si es positivo
function esPositivo (mount) {
    if (mount > 0){
        return true;
    }
    else{
        return false;
    }
    
}
// recibe un valor numerico y retorna true si es menor que saldoCuenta
function menorQueSaldo(mount){
    if ( mount <= saldoCuenta) {
        return  true;
    }
    else{
        return false;
    }
} 
//recibe un valor numerico y retorna true si es multiplo de 100
function multiplo100(mount){
    if (mount % 100 === 0){
        return true;
    }
    else {
        return false;
    }
}
// Funciones que tenes que completar
//solicita el ingreso de un valor, valida el valor y modifica limiteExtraccion por el valor ingresado
function cambiarLimiteDeExtraccion() {
    var limiteNuevo = parseInt(prompt('Ingrese el nuevo limite de extraccion'))
    if (isNaN(limiteNuevo)||limiteNuevo === null){
        alert('Ingreso incorrecto')
    } else {
        limiteExtraccion = limiteNuevo;
        alert('Tu nuevo limite de extraccion es de: $' + limiteExtraccion);
    }
    actualizarLimiteEnPantalla()
}
// valida el ingreso (que sea numero, que no sea null, menor limiteExtraccion, mayor que cero, menor que saldoCuenta, multiplo de 100,), resta a saldoCuenta el valor ingresado
function extraerDinero() {
    var aux = true;
    var mount;
    while (aux===true){
        mount = parseInt(prompt ('Ingrese el monto a extraer'));
        var flag = true;
        if (isNaN(mount)){
            alert('Error en el ingreso, intente nuevamente');
            break;
        }
        else{
            aux = false;
        }
        
        if (menorQueLimite(mount)){
        }
        else {
            flag =flag && false; //flag &= true;
            alert('Supera su limite de extraccion \n');
        }
        if (esPositivo(mount) ){
        }
        else {
            alert('El monto a extraer es menor que 0 \n');
            flag = flag && false;
        }
        if(menorQueSaldo(mount)){
        }
        else {
            flag = flag && false;
            alert('El monto supera al saldo de su cuenta \n');
        }
        if (multiplo100(mount)) {
        }
        else {
            flag = flag && false;
            alert('El monto no es multiplo de 100 \n');
        }
        if (flag === true   ){
            var saldoAnterior = saldoCuenta;
            restarDinero(mount);
            actualizarSaldoEnPantalla();
            alert( 'Has extraido: $' + mount + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Saldo actual: $' + saldoCuenta);
        }
         
    }
    

}
function depositarDinero() {
    var mount = parseInt(prompt ('Ingrese el monto a depositar'));
    if (esPositivo(mount) ){
        var saldoAnterior = saldoCuenta;
        sumarDinero(mount);
        actualizarSaldoEnPantalla();
        alert('Has depositado: $' + mount + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Saldo actual: $' + saldoCuenta);
    } else if(isNaN(mount)){
        alert('El valor ingresado no es valido');
    }
    else {
        alert('Solo se puede depositar valores mayores que 0');
    }
}
//solicita el ingreso de un valor y lo valida, resta a saldoCuenta el valor del servicio a pagar
function pagarServicio() {
    var flag = true;
    while (flag === true){
        var option = parseInt(prompt('Ingrese:' + '\n' +'1 - Agua' + '\n' +'2 - Telefono' + '\n' + '3 - Luz'  + '\n' + '4 - Internet'   + '\n' + '5 - Salir' ));
        if (option === 5){
            alert('Operacion cancelada');
            flag = false;
            break;
        }
        if (precios[option-1] === undefined || option === NaN){
            alert('El valor ingresado no corresponde, intentelo nuevamente');
            flag = true;
        }
        else {
            flag = false;
            if(menorQueSaldo(precios[option -1])){
                var saldoAnterior = saldoCuenta;
                saldoCuenta -= precios [option - 1]
                alert('Has pagado el servicio de '+ servicios[option - 1] + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Dinero descontado: $' + precios [option - 1] + '\n' + 'Saldo actual: $' + saldoCuenta);  
                actualizarSaldoEnPantalla();
            }
            else {
                alert('No posee los fondos suficientes para pagar este servicio');
            }
            
        }
    }
    
}
// Solicita el ingreso de un valor a transferir, lo valida (medir que el saldo, NaN, Null, positivo, menor que saldo), resta a saldoCuenta el valor ingresado
function transferirDinero() {
    var mount = parseInt(prompt('Ingrese el monto a transferir'));
    if (isNaN(mount)|| mount === null){
        alert('El valor ingresado no es valido');
    }
    else if (!menorQueSaldo( mount)){
        alert('No se puede realizar la operacion, fondos insuficientes');
    }
    else if (!esPositivo(mount)){
        alert('Solo se puede transferir montos mayores a 0');
    }
    else{
        var cuenta =  parseInt(prompt('Ingrese la cuenta a transferir'));
        if(numeroDeCuenta.indexOf(cuenta) != -1){
            restarDinero(mount);
            alert('Se ha transferido: $' + mount + '\n' + 'Cuenta destino: ' + cuenta);               
        }
        else {
            alert('Solo puede transferirse a cuentas amigas, ingrese nuevamente la cuenta por favor');
        }
    }
    
    actualizarSaldoEnPantalla();

}


//valida contrasenia
function iniciarSesion() {
    var aux = parseInt(prompt('Ingrese la contrasenia'));
    if (aux === pass){
        alert('Bienvenido/a ' + nombreUsuario + ' ya puedes comenzar a realizar operaciones');
    }
    else {
        restarDinero(saldoCuenta);
        alert('El Codigo no es Correcto. Tu dinero ha sido retenido por cuestiones de seguridad');
    }

    actualizarSaldoEnPantalla();

}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}