'use strict'
addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed")
    /*---------- */
     /*Carga before onload */

     window.onload = function(){
        var contenedor = document.querySelector("#contenedor_carga");
        contenedor.style.visibility = 'hidden';
        contenedor.style.opacity = '0';

     }
     /*Scroll menu */
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function(){
    navbar.classList.toggle('active', window.scrollY >0)
    })

    /* Modal con barras de progreso */
    const openModal= document.querySelector('#btn-languages');
    const modal = document.querySelector('.modal_lenguages');
    const closeModal =document.querySelector('#modal-close-btn');

    openModal.addEventListener('click', () =>{
            modal.classList.add('show_modal');
    });

    closeModal.addEventListener('click', () =>{
        modal.classList.remove('show_modal');
    });


    //Scroll moving todos los elementos 

        
        let title1 = document.querySelector('#element1');
        let title2 = document.querySelector("#element2");
    
        const cargarElementos = (entradas, observador) => {
            
        
            entradas.forEach((entrada) => {
                 if(entrada.isIntersecting){
                    entrada.target.classList.add('visible');
                } 
            });
        }
        
        const observador = new IntersectionObserver(cargarElementos, {
            root: null,
            rootMargin: '0px 0px 0px 0px',
            threshold: 1.0
        });

        observador.observe(title1); 
        observador.observe(title2);
        


    /*Textos ocultos en el html con DOM */
        /*Portada */
    let h2_portada = document.querySelector("#h2_portada")
    h2_portada.innerHTML = "Desarrolladora WEB."

    let h3_portada = document.querySelector("#h3_portada")
    h3_portada.innerHTML = "Conóceme <span>>></span>"
        /*Presentacion */
    let h3_presentation = document.querySelector("#h3_presentation")
    h3_presentation.innerHTML = "Sobre mí!"

    let description_presentation = document.querySelector("#description_presentation")
    description_presentation.innerHTML = "Soy desarrolladora de paginas y apliaciones Web. Mis conocimientos front-end me permiten desarrollar proyectos con tiempos de respuesta rapidos, estéticos, dinámicos y responsivos en cualquier dispositivo.<br><br>He trabajado en proyectos de aplicacion Web usando APIs disponibles en la web, asi como creando APIs atraves de SpringBoot & JAVA. Me gusta trabajar con bases de datos relaciones como MYSQL pero tambien con bases de datos no relacionales como MongoDB."
        //Proyectos
    let h3_proyectos = document.querySelector("#h3_proyectos")
    h3_proyectos.innerHTML = "Mi trabajo"

    let intro_proyectos = document.querySelector("#intro_proyectos")
    intro_proyectos.innerHTML = "Estos son algunos de mis trabajos favoritos y mas recientes"
            /* project 1*/
    let project1_t1 = document.querySelector("#project1_t1")
    project1_t1.innerHTML = "Mi portafolio"

    let project1_description= document.querySelector("#project1_description")
    project1_description.innerHTML = "Este proyecto fue creado con html5, CSS3 y JavaScript"

            /* project 2*/  

    let project2_t1 = document.querySelector("#project2_t1")
    project2_t1.innerHTML = "Cookpad Recipes"
        
    let project2_description= document.querySelector("#project2_description")
    project2_description.innerHTML = "Aplicacion web para buscar recetas segun ingredientes y categorias <br> Este proyecto fue creado JavaScript, CSS-SASS-Bootstrap, hmtl y la API: https://www.themealdb.com/api.php"

            /* project 2*/  

    let project3_t1 = document.querySelector("#project3_t1")
    project3_t1.innerHTML = "Muy pronto."
                
    let project3_description= document.querySelector("#project3_description")
    project3_description.innerHTML = "Actualmente me encuentro terminando algunos proyectos que estarán disponibles aquí en breve."

        //Contacto

    let h3_contacto = document.querySelector("#h3_contacto")
    h3_contacto.innerHTML = "¿Te gustaría trabajar conmigo?"

    let contacto_intro = document.querySelector("#contacto_intro")
    contacto_intro.innerHTML = "Puedes enviarme un mensaje o contactarme a cualquiera de mis redes sociales. En mi CV encuentras tambien mi información personal. Click <a href='https://drive.google.com/file/d/12Q4X24-ODvn21Ptll2SLDcWpFhEX-7q-/view?usp=share_link' target='_blank'>Descargar CV</a>."



    /*------------ */
});


