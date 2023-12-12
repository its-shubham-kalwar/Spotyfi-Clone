import React from 'react'
import './Sidebar.css'
import { ReactComponent as HomeIcon } from '../assets/HomeIcon.svg'
import { ReactComponent as SearchIcon } from '../assets/SearchIcon.svg'
import { ReactComponent as LibraryIcon } from '../assets/LibraryIcon.svg'


const myPlaylist = [
    {
        id: 1,
        name: 'Asish'
    },
    {
        id: 2,
        name: 'Hema'
    },
    {
        id: 3,
        name: 'Jubin'
    },
    {
        id: 4,
        name: 'Shubham'
    },
    {
        id: 5,
        name: 'Mohit'
    },
    {
        id: 6,
        name: 'Mahadev'
    },

    {
        id: 7,
        name: 'Prakhar'
    },
    {
        id: 8,
        name: 'Neha Kakkar'
    },
    {
        id: 9,
        name: 'Arijit Singh'
    },
    {
        id: 10,
        name: 'Elvish Yadav'
    },
]

export default function Sidebar (){
    return (
        <div className='side-bar-container'>

            <div className='side-bar-items'>
                <HomeIcon width={'18px'} strokeWidth={'2px'} /> Home
            </div>

            <div className='side-bar-items'>
                <SearchIcon width={'18px'} strokeWidth={'2px'} /> Search
            </div>

            <div className='side-bar-items'>
                <LibraryIcon width={'18px'} strokeWidth={'2px'} /> Your Library
            </div>

            <div className='side-options'>
                {
                    myPlaylist.map((item) => {
                        return (
                            <div className='side-bar-items' key={item.id}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}