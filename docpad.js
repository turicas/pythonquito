module.exports = {

	prompts: false,

	// These are variables will be accessible via our templates
	templateData: {

		// Conference info
		conf: {
			name: "PythonQuito",
			description: "La Primera Semana Pythónica de Quito",
			date: "4-5 y 8-9 de Marzo 2016",
			// If your event is free, just comment this line
			price: "$0 (Django Girls), $10 (Charlas + Camiseta)",
			venue: "",
			address: "Ladrón de Guevara E11-253, Escuela Politécnica Nacional",
			address2: "Edif. de Administración, Hemiciclo Politécnico (Planta Baja),",
			googleMapsAddress: "Edificio de Administración EPN",
			city: "Quito",
			state: "Pichincha, Ecuador"
		},

		contact: {
			mail: "pythonquito@googlegroups.com"
		},

		// The Call To Action button at the header,
		// If you don't want this, just remove the callToAction property.
		callToAction: {
			text: "Regístrate Ahora!",
			link: "/inscripcion"
		},

		propuestasForm: "/propuestas",

		inscripcionesForm: "http://goo.gl/forms/WX5QOfe1kd",

		// Site info
		site: {
			theme: "yellow-swan",
			url: "http://pythonquito.tk/",
			googleanalytics: "UA-73316645-1"
		},

		// Active sections on the website
		// to deactivate comment out with '//'
		// you can also change order here and it will reflect on page
		sections: [
			'about',
			'speakers',
			'talks',
			'location',
			'organizers',
			'partners',
			'contact'
		],

		// Labels which you can translate to other languages
		labels: {
			about: "Acerca de",
			spakers: "Agenda",
			talks: "Django Girls & Charlas Pythónicas",
			location: "Lugar",
			organizers: "Organizadores",
			partners: "Auspiciantes y Colaboradores",
			contact: "Contacto"
		},

		// The entire schedule
		schedule: {
			firstDay: [
			{
				name: "─",
				bio: "─",
				presentation: {
					title: "Regístro y Acreditación",
					description: "─",
					time: "18:00"
				}
			},
			{
				name: "Álvaro Justen",
				bio: "─",
				presentation: {
					title: "Início",
					description: "─",
					time: "18:30"
				}
			},
			{
				name: "Cristian Salamea",
				company: "Ayni Consulting",
				bio: "Geek pythonista",
				//photo: "themes/yellow-swan/img/speaker.jpg",
				//link: {
				//  href: "http://github.com/billy95",
				//  text: "@billy95"
				//},
				presentation: {
					title: "Empezar con Python",
					description: "Conocer el ambito del lenguaje de programación para construcción de software en diferentes paradigmas.",
					time: "18:55"
				}
			},
			{
				name: "─",
				bio: "─",
				presentation: {
					title: "Cambio de presentadores",
					description: "─",
					time: "19:25"
				}
			},
			{
				name: "Álvaro Justen",
				company: "Onyo",
				bio: "Free software hacker",
				//photo: "themes/yellow-swan/img/speaker.jpg",
				//link: {
				//  href: "http://github.com/billy95",
				//  text: "@billy95"
				//},
				presentation: {
					title: "Capturando datos: la manera Pythónica",
					description: "Web scraping y parsing: la mejor manera de hacerlo con Python. Uso de librerías para peticiones HTTP, parsing de HTML y automación de browsers con las librerías requests, tapioca-wrapper, splinter y rows.",
					time: "19:30"
				}
			},
			{
				name: "─",
				bio: "─",
				presentation: {
					title: "Coffee break \\o/",
					description: "─",
					time: "20:00"
				}
			},
			{
				name: "Carlos De Smedt",
				company: "Fundación Naranja",
				bio: "Neo-Nerd -> Geek, Primero determinístico, luego probabilístico. Videografo, Creativo, Consumidor de artes en general y 3/5 Hippie. Co-Fundador Fundación Naranja. (Enriquecer de alegría, cultura, educación y magia a niños que padecen cáncer)",
				//photo: "themes/yellow-swan/img/speaker.jpg",
				//link: {
				//  href: "http://github.com/billy95",
				//  text: "@billy95"
				//},
				presentation: {
					title: "Ciencia de Datos con Python",
					description: "Ciencia de Datos, un nuevo perfil. Revisión de conceptos: Datos, Información y Conocimiento desde un enfoque sistémico. Scrapping como fuente de datos. Ya recopillé los datos, ¿ y ahora ? / Tratamiento de Datos. Inteligencia de datos, demostración. El valor de los datos, casos de éxito desde el Growth Hacking",
					time: "20:30"
				}
			},
			{
				name: "─",
				bio: "─",
				presentation: {
					title: "Cambio de presentadores",
					description: "─",
					time: "21:00"
				}
			},
			{
				name: "5 presenteadores",
				presentation: {
					title: "Charlas relámpagos (5 min)",
					description: "─",
					time: "21:05"
				}
			},
			{
				name: "Álvaro Justen",
				bio: "─",
				presentation: {
					title: "Finalización",
					description: "─",
					time: "21:35"
				}
			}
			],
			secondDay: [
			{
				name: "─",
				bio: "─",
				presentation: {
					title: "Regístro y Acreditación",
					description: "─",
					time: "18:00"
				}
			},
			{
				name: "Álvaro Justen",
				bio: "─",
				presentation: {
					title: "Início",
					description: "─",
					time: "18:30"
				}
			},
			{
				name: "Karina Mora",
				company: "ThoughtWorks",
				bio: "",
				//photo: "themes/yellow-swan/img/speaker.jpg",
				//link: {
				//  href: "http://github.com/billy95",
				//  text: "@billy95"
				//},
				presentation: {
					title: "¿Hablo Python?",
					description: "Similar a cuando aprendemos un nuevo idioma, podemos cometer errores comunes al expresarnos en ese idioma del mismo modo que lo hacemos en nuestro idioma natal. En Python, podemos utilizar estructuras que nos parecen naturales hasta que aprendemos a hablar Python y entendemos como aprovechar mejor lo que nos ofrece este lenguaje.",
					time: "18:55"
				}
			},
			{
				name: "─",
				bio: "─",
				presentation: {
					title: "Cambio de presentadores",
					description: "─",
					time: "19:25"
				}
			},
			{
				name: "David Oña",
				company: "",
				bio: "",
				//photo: "themes/yellow-swan/img/speaker.jpg",
				//link: {
				//  href: "http://github.com/billy95",
				//  text: "@billy95"
				//},
				presentation: {
					title: "De Cero a Producción en 15 min",
					description: "Se mostrara el manejo, ventajas, y herramientas de ansible automatización de aprovisionamiento de servidores remotos y seguridad anti-DDos",
					time: "19:30"
				}
			},
			{
				name: "─",
				bio: "─",
				presentation: {
					title: "Foto oficial :D",
					description: "─",
					time: "20:00"
				}
			},
			{
				name: "─",
				bio: "─",
				presentation: {
					title: "Coffee break \\o/",
					description: "─",
					time: "20:05"
				}
			},
			{
				name: "Quiliro Ordóñez",
				company: "Fundación de Software Libre América Latina",
				bio: "",
				//photo: "themes/yellow-swan/img/speaker.jpg",
				//link: {
				//  href: "http://github.com/billy95",
				//  text: "@billy95"
				//},
				presentation: {
					title: "¿Por qué es importante la libertad en el software?",
					description: "La charla resalta la importancia de usar software libre y cómo cualquier pieza de código no-libre puede afectar el balance de poder entre nosotros y los más inteligentes e influyentes.",
					time: "20:30"
				}
			},
			{
				name: "─",
				bio: "─",
				presentation: {
					title: "Cambio de presentadores",
					description: "─",
					time: "21:00"
				}
			},
			{
				name: "6 presenteadores",
				presentation: {
					title: "Charlas relámpagos (5 min)",
					description: "─",
					time: "21:05"
				}
			},
			{
				name: "Álvaro Justen",
				bio: "─",
				presentation: {
					title: "Finalización",
					description: "─",
					time: "21:40"
				}
			}
			]
		},

		// List of Partners
		organizers: [
		{
			name: "Álvaro Justen",
			logo: "https://avatars1.githubusercontent.com/u/186126?v=3&s=460",
			url: "https://github.com/turicas"
		},
		{
			name: "Galoget Latorre",
			logo: "https://4.bp.blogspot.com/-aCFSh2Evi1M/VsWtCqnXsgI/AAAAAAAAFXs/Z9iOhYFJr0E/s1600/Net%2BNeutrality%2BHackem.jpg",
			url: "http://galogetlatorre.blogspot.com"
		},
		{
			name: "Luiza Nunes",
			logo: "https://avatars3.githubusercontent.com/u/1926257?v=3&s=460",
			url: "https://github.com/luhhsnunes"
		},
		{
			name: "Tania Silva",
			logo: "https://avatars0.githubusercontent.com/u/1254745?v=3&s=460",
			url: "https://github.com/tdruiva"
		},
		{
			name: "Verónica Rodríguez",
			logo: "https://pbs.twimg.com/profile_images/667863177821102080/6wYGuxNX.jpg",
			url: "https://twitter.com/vrokida"
		}
		],
		sponsors: [
		{
			name: "ThoughtWorks Ecuador",
			logo: "img/logo-thoughtworks.png",
			url: "https://www.thoughtworks.com/insights/quito"
		},
		{
			name: "Ayni Consulting Cia. Ltda.",
			logo: "img/logo-ayni.png",
			url: "http://www.ayni.com.ec"
		},
		{
			name: "Microsoft Ecuador",
			logo: "img/logo-microsoft.png",
			url: "https://twitter.com/MicrosoftEc"
		}
		],
		partners: [
		{
			name: "Hackem Research Group",
			logo: "img/logo-hackem.png",
			url: "https://www.facebook.com/hackem.epn"
		}
		],

		// Theme path
		getTheme: function() {
			return "";
			//return "themes/" + this.site.theme;
		},

		// Site Path
		getUrl: function() {
			return this.site.url;
		}
	}
};
