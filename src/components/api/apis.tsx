
const DB_API = 'https://mcbe-playerbans.herokuapp.com'

//http://localhost:5000
export const apis = [
    {
        description: 'Get data of a database banned player.',
        note: '',
        method: 'GET',
        api: `${DB_API}/BannedPlayers/LookUp/:gamertagORxuid`,
        header: [],
        body: []
    },
    {
        description: 'Get data of all banned players.',
        note: 'Admin Account Required',
        method: 'GET',
        api: `${DB_API}/BannedPlayers`,
        header: ['authorization: Username:Password'],
        body: []
    },
    {
        description: 'Database ban player.',
        note: 'Admin or Staff Account Required',
        method: 'POST',
        api: `${DB_API}/BannedPlayers/Add/:gamertagORxuid`,
        header: ['authorization: Username:Password'],
        body: ['reason: String', 'proof: Valid URL']
    },
    {
        description: 'Database unban player.',
        note: 'Admin or Staff Account Required',
        method: 'DELETE',
        api: `${DB_API}/BannedPlayers/Remove/:gamertagORxuid`,
        header: ['authorization: Username:Password'],
        body: []
    },
]