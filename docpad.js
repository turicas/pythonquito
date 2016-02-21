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
      price: "$0 (DjangoGirls), $10 (Charlas + Camiseta)",
      venue: "",
      address: "Ladrón de Guevera E11-253, Escuela Politécnica Nacional",
      address2: "Edif. de Administración, Hemiciclo Politécnico (Planta Baja)",
      googleMapsAddress: "Ladron de Guevera E11-253, Quito 170517",
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
      'talks',
      'location',
      'organizers',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Acerca de",
      talks: "DjangoGirls & Charlas Pythónicas",
      location: "Lugar",
      organizers: "Organizadores",
      partners: "Auspiciantes y Apoyadores",
      contact: "Contacto"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Breakfast",
        time: "9h00"
      },
      {
        name: "Linus Torvalds",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Linux Foundation",
        link: {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title: "Digging into a Linux Kernel",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "10h00"
        }
      },
      {
        name: "Bill Gates",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Microsoft",
        link: {
          href: "http://github.com/billy95",
          text: "@billy95"
        },
        presentation: {
          title: "Introducing Windows 12",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "11h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Chuck Norris",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Delta Command",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h00"
        }
      }
    ],

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
        name: "Veronica Rodriguez",
        logo: "https://pbs.twimg.com/profile_images/667863177821102080/6wYGuxNX.jpg",
        url: "https://twitter.com/vrokida"
      }
    ],
    sponsors: [
      {
        name: "ThoughtWorks Ecuador",
        logo: "img/logo-thoughtworks.png",
        url: "https://www.thoughtworks.com/insights/quito"
      }
    ],
    partners: [
      {
        name: "Hackem Research Group",
        logo: "http://4.bp.blogspot.com/-7wsc7MXsZEQ/U8VsPifG5bI/AAAAAAAACvE/MTQbTmPIQzo/s1600/Hackem+Research+Group.png",
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
