import SearchIcon from '../../iconComponents/SearchIcon';
import BanIcon from '../../iconComponents/BanIcon';
import NoteIcon from '../../iconComponents/NoteIcon';
import SettingsIcon from '../../iconComponents/SettingsIcon';


export const cards = [
    {
        title: 'Evidence',
        description: 'We provide date, reason, and proof of ban',
        icon: <NoteIcon/>
    },
    {
        title: 'Reports',
        description: 'Our staff are trained to carefully review ban reports',
        icon: <SearchIcon/>
    },
    {
        title: 'Flexibility',
        description: 'Our MCBE plugins and api provide many options to deal with banned players',
        icon: <SettingsIcon/>
    },
    {
        title: 'Ban Appeals',
        description: 'We give a chance for banned players to appeal their ban on our discord',
        icon: <BanIcon/>
    },
    {
        title: 'Automod',
        description: 'Berp plugin includes an option for filtering players and slow down hackers.',
        icon: <SettingsIcon/>
    },
    {
        title: 'IP Bans',
        description: 'IP bans will be a future feature for Berp and BDSX',
        icon: <SettingsIcon/>
    },
]