
var currentDoc: string
if(window.location.pathname === "/documentation/api") currentDoc = 'UnitedDB API'
if(window.location.pathname === "/documentation/berp") currentDoc = 'Berp'
if(window.location.pathname === "/documentation/bdsx") currentDoc = 'BDSX'



const docSections: Array<any> = [
    {
        title: 'UnitedDB API',
        url: '/documentation/api',
    },
    {
        title: 'Berp',
        url: '/documentation/berp',
    },
    {
        title: 'BDSX',
        url: '/documentation/bdsx',
    },
]

export { currentDoc, docSections }