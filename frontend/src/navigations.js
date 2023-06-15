import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import GirlIcon from '@mui/icons-material/Girl';
import AlbumIcon from '@mui/icons-material/Album';
import MovieIcon from '@mui/icons-material/Movie';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Icon } from '@mui/material';

const navigations = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'About', path: '/about', icon: <InfoIcon /> },
    {
        name: 'Discography',
        type: 'parent',
        ref: 'discoRef',
        path: '',
        children: [
            { name: 'Music', path: '/music', icon: <AlbumIcon /> },
            { name: 'Movies', path: '/movies', icon: <MovieIcon /> },
            { name: 'Concerts', path: '/concerts', icon: <MicExternalOnIcon /> },
            { name: 'Podcasts', path: '/podcasts', icon: <PodcastsIcon /> },
        ],
        icon: <GirlIcon />
    },
    { name: 'Photo Gallery', path: '/photo-gallery', icon: <CollectionsIcon /> },
    {
        name: 'Language',
        type: 'parent',
        ref: 'langRef',
        path: '',
        children: ["English", "Chinese (Hong Kong)", "Chinese (Simplified)"],
        icon: 'Language'
    },
];

export default navigations;
