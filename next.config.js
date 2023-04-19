module.exports = {
    async redirects() {
        return [
            {
                source: '/contactoestudiodegrabacion.html',
                destination: '/contacto-estudio',
                permanent: true,
            },
            {
                source: '/discografica.html',
                destination: '/grabado-en-nuestro-estudio',
                permanent: true,
            },
            {
                source: '/estudiodegrabacion.html',
                destination: '/nuestro-estudio-de-grabacion',
                permanent: true,
            },
            {
                source: '/produccionmusical.html',
                destination: '/produccion-musical-para-cantantes',
                permanent: true,
            },
            {
                source: '/cantautor.html',
                destination: '/produccion-musical-para-cantantes',
                permanent: true,
            },
            {
                source: '/estudio-grabacion-grupos.html',
                destination: '/grabaciones-para-grupos',
                permanent: true,
            },
            {
                source: '/locuciones.html',
                destination: '/otros-servicios-de-grabacion',
                permanent: true,
            },
            {
                source: '/otrosservicios.html',
                destination: '/otros-servicios-de-grabacion',
                permanent: true,
            },

            // add more objects for other redirects
        ];
    },
};
