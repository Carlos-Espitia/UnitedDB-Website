

var navButtons:Array<any> = [];

navButtons = [
    {
        title: 'Home',
        url: '/',
        target: "",
        scrollTo: false,
        id: ''
    },
    {
        title: 'Downloads',
        url: '/',
        target: "",
        scrollTo: false,
        id: ''
    },
    {
        title: 'Documentation',
        url: '/documentation/api',
        target: "",
        scrollTo: false,
        id: ''
    },
    {
        title: 'UnitedDB Discord',
        url: 'https://discord.gg/eF6nqPEyEZ',
        target: "_blank",
        scrollTo: false,
        id: ''
    },
]

if(window.location.pathname === "/") {
    for(var value of navButtons) {
        if(value.title === 'Home') {
            value.scrollTo = true
            value.id = 'home'
        }
        if(value.title === 'Downloads') {
            value.scrollTo = true
            value.id = 'downloads'
        }
    }
}

if(window.location.pathname === "/documentation/api") {
    for(var val of navButtons) {
        if(val.title === 'Documentation') {
            val.scrollTo = true
            val.id = 'documentation'
        }
    }
}

export { navButtons }