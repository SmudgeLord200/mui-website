import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import GirlIcon from '@mui/icons-material/Girl';
import AlbumIcon from '@mui/icons-material/Album';
import MovieIcon from '@mui/icons-material/Movie';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import LanguageIcon from '@mui/icons-material/Language';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Icon } from '@mui/material';

const navigations = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'About', path: '/about', icon: <InfoIcon /> },
    {
        name: 'Discography',
        type: 'parent',
        open: false,
        path: '',
        children: [
            { name: 'Music', path: '/music', icon: <AlbumIcon />, typeOf: 'Discography' },
            { name: 'Movies', path: '/movies', icon: <MovieIcon />, typeOf: 'Discography' },
            { name: 'Concerts', path: '/concerts', icon: <MicExternalOnIcon />, typeOf: 'Discography' },
            { name: 'Podcasts', path: '/podcasts', icon: <PodcastsIcon />, typeOf: 'Discography' },
        ],
        icon: <GirlIcon />
    },
    { name: 'Photo Gallery', path: '/photo-gallery', icon: <CollectionsIcon /> },
    {
        name: 'Language',
        type: 'parent',
        open: false,
        path: '',
        children: [
            { name: 'English', path: '', icon: <LanguageIcon />, typeOf: 'Language', value: 'enUS', },
            { name: 'Chinese (Hong Kong)', path: '', icon: <LanguageIcon />, typeOf: 'Language', value: 'zhHK',},
            { name: 'Chinese (Simplified)', path: '', icon: <LanguageIcon />, typeOf: 'Language', value: 'zhCN', },
        ],
        icon: <LanguageIcon />
    },
];

export default navigations;
