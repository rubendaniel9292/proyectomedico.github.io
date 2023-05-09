/*funciones del menu proncipal*/
/*insertar y quitar la clases "icono cerrar" al boton menu*/

$(function () {
    $('#menu-nav .navbar-toggler').click(function () {
        $('.boton-menu').toggleClass('icono-cerrar');
    });
    /*al hacer click sobre el boton*/
    $('#menu-nav .navbar-nav a').click(function () {
        //quita la class iconno cerrar
        $('.boton-menu').removeClass('icono-cerrar');
        //contraer el menu
        $('#menu-nav .navbar-collapse').collapse('hide');
    });
    /*iniciando swiper*/
    var swiper = new Swiper('#animacion', {
        //bonotes de aminacion
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: 'true'
        },
        speed: 500,
        effect: 'coverflow',
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
    });

    /*iniciando veno box*/
    $('.venobox-video').venobox({
        autoplay: true,
        border: '10px',
        bgcolor: 'white',
        closeBackground: 'red',
        closeColor: 'white',
        overlayClose: 'true',
        spinner: 'cube-grid',
        spinColor: '#00ad75'
    });

    /*iniciando counterup*/
    $('.counter').counterUp({
        delay: 10,
        time: 300
    });

    /*iniciando datepicker*/
    $('.datepicker').pickadate({
        monthsFull: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ],
        monthsShort: [
            "ene",
            "feb",
            "mar",
            "abr",
            "may",
            "jun",
            "jul",
            "ago",
            "sep",
            "oct",
            "nov",
            "dic",
        ],
        weekdaysFull: [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
        ],
        weekdaysShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        today: "Hoy",
        clear: "Borrar",
        close: "Cerrar",
        labelMonthNext: 'Siguiente mes',
        labelMonthPrev: 'Mes anterior',
        labelMonthSelect: 'Selecione un mes',
        labelYearSelect: 'Selecione un año',
        firstDay: 1,
        format: "dddd d !de mmmm !de yyyy",
        formatSubmit: "yyyy/mm/dd",
        selectYears: true,
        selectMonths: true,
        formatSubmit: 'yyyy/mm/dd',
        min: true,
        max: 30,
        onStart: function () {
            var date = new Date();
            this.set('select', [date.getFullYear(), date.getMonth(), date.getDate()]);
        }
    });
    /*iniciado timepicker*/
    $('.timepicker').pickatime({
        clear: 'Borrar',
        interval: 60,
        min: [8, 00],
        max: [17, 0]
    });

    $('#form-contac').parsley({
        errorClass: 'is-invalid text-danger',
        successClass: 'is-valid',
        errorsWrapper: '<ul class="list-unstyled text-danger mb-0 pt-2"></ul>',
        errorTemplate: '<li></li>',
        trigger:'change',
        triggerAfterFailure: 'change'
    });

    /*iniciando stickit*/
    $('#menu-nav').stickit();



});
