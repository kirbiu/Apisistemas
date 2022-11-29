const boton=document.getElementById('refrescar');
function restablecer(){
    location.reload();
}
boton.onclick=restablecer;
let cargarPeliculas= async() => {
let numero= Math.floor(Math.random()*5000)
	try
	{
        let pelicula= await fetch('https://api.themoviedb.org/3/movie/'+numero+'?api_key=53c9270db322320f13bc02bccd4ff51f&language=es-MX');
        while(pelicula.status===404)
        { 
            console.log (numero);
            numero= Math.floor(Math.random()*5000)
            console.log (numero);
            pelicula= await fetch('https://api.themoviedb.org/3/movie/'+numero+'?api_key=53c9270db322320f13bc02bccd4ff51f&language=es-MX');
        }
        const dato= await pelicula.json();

			let seleccion=`
			<div class="pelicula"><h3 class="titulo">${dato.title}</h3>
            <img class="poster" default="hola"src="https://image.tmdb.org/t/p/w500/${dato.poster_path}">
			</div>`;
            document.getElementById('contenedor').innerHTML= seleccion;
    }
    catch(error)
	{
		console.log(error);
	}
}


cargarPeliculas();