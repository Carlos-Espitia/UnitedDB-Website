
console.log(window.location.pathname)

var navButtons:Array<any> = [];
if(window.location.pathname === "/") {
    navButtons = [
        {
            title: 'Home',
            url: '/',
            scrollTo: true,
            id: 'home'
        },
        {
            title: 'Downloads',
            url: '/',
            scrollTo: true,
            id: 'downloads'
        },
        {
            title: 'Documentation',
            url: '/documentation',
            scrollTo: false
        },
        {
            title: 'UnitedDB Discord',
            url: '/',
            scrollTo: false
        },
    ]
}

if(window.location.pathname === "/documentation") {
    navButtons = [
        {
            title: 'Home',
            url: '/',
            scrollTo: false,
        },
        {
            title: 'Downloads',
            url: '/',
            scrollTo: false,
        },
        {
            title: 'Documentation',
            url: '/documentation',
            scrollTo: true
        },
        {
            title: 'UnitedDB Discord',
            url: '/',
            scrollTo: false
        },
    ]
}

export { navButtons }