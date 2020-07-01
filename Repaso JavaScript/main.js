var saludar = new Promise((resolve, reject) =>{
    
    setTimeout(() =>{

        let saludo = "Hola muy buenas a todos, aqui willyrex";
        saludo = false;
        if (saludo){
            resolve(saludo);
        }else{
            reject("No hay saludo disponible");

        }
    }, 2000);

});



saludar.then(resultado => {
    alert (resultado);
})
.catch(err =>{
    alert(err)    
});