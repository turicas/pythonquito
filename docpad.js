module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Python Quito",
      description: "La Primera Semana Pythónica de Quito",
      date: "4-5 y 9-10 de Marzo 2016",
      // If your event is free, just comment this line
      price: "$0 (DjangoGirls), $10 (Charlas + Camiseta)",
      venue: "",
      address: "Edif. Brescia. Piso 9, Av. República del Salvador N34-107 y Suiza",
      city: "Quito",
      state: "Pichincha, Ecuador"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Regístrate Ahora!",
        link: ""
    },

    propuestasForm: "https://docs.google.com/forms/d/1LNArwMR0FMjaw0cHsutXpykuGtn5h2H49xJsNGJL7bE/viewform",

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://turicas.github.io/pythonquito/",
      googleanalytics: "UA-73316645-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'djangogirls',
      'charlas',
      'location',
      //'speakers',
      //'schedule',
      //'sponsors',
      'organizers'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Acerca de",
      djangogirls: "Django Girls",
      charlas: "Charlas Pythónicas",
      location: "Lugar",
      speakers: "Conferencistas",
      schedule: "Conferencias",
      sponsors: "Auspiciantes",
      organizers: "Organizadores",
      helpers: "Colaboradores",
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
      },
      {
        name: "Steve Jobs",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://github.com/stevie",
          text: "@stevie"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Mark Zuckerberg",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/zuck",
          text: "@zuck"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Why do I prefer Android over iPhone",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      /*{
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }*/
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
      }
    ],
    helpers: [
      {
        name: "Hackem Research Group",
        logo: "http://4.bp.blogspot.com/-7wsc7MXsZEQ/U8VsPifG5bI/AAAAAAAACvE/MTQbTmPIQzo/s1600/Hackem+Research+Group.png",
        url: "https://www.facebook.com/hackem.epn"
      },
      {
        name: "Python Ecuador",
        logo: "https://scontent-atl3-1.xx.fbcdn.net/hphotos-xal1/v/t1.0-9/12366281_1699898106914351_1269534832130236945_n.png?oh=0dddc0cb756347729373bbb17fcda882&oe=57261A99",
        url: "https://www.facebook.com/python.ecuador"
      },
      {
        name: "ThoughtWorks",
        logo: "https://www.thoughtworks.com/imgs/tw-logo.png",
        url: "https://www.thoughtworks.com/insights/quito"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
