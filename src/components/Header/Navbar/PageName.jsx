import React from 'react'
import { useLocation } from 'react-router-dom';

const urlLists = [
    // home
    { name: 'HELLO NATSUKI', link: "/home" },
    { name: 'SUBLINK-1', link: "/home/link1/sublink1" },
    { name: 'SUBLINK-2', link: "/home/link1/sublink2" },
    { name: 'SUBLINK-3', link: "/home/link1/sublink3" },
    { name: 'SUBLINK-4', link: "/home/link1/sublink4" },
    { name: 'SUBLINK-5', link: "/home/link1/sublink5" },
    { name: 'SUBLINK-6', link: "/home/link1/sublink6" },
    // blog
    { name: 'SUBLINK-1', link: "/blog/link1/sublink1" },
    { name: 'SUBLINK-2', link: "/blog/link1/sublink2" },
    { name: 'SUBLINK-3', link: "/blog/link1/sublink3" },
    { name: 'SUBLINK-1', link: "/blog/link2/sublink1" },
    { name: 'SUBLINK-2', link: "/blog/link2/sublink2" },
    // about
    { name: 'SUBLINK-1', link: "/about/link1/sublink1" },
    { name: 'SUBLINK-2', link: "/about/link1/sublink2" },
    { name: 'SUBLINK-3', link: "/about/link1/sublink3" },
    { name: 'SUBLINK-1', link: "/about/link2/sublink1" },
    { name: 'SUBLINK-2', link: "/about/link2/sublink2" },
    { name: 'SUBLINK-1', link: "/about/link3/sublink1" },
    { name: 'SUBLINK-1', link: "/about/link4/sublink1" },
    { name: 'SUBLINK-2', link: "/about/link4/sublink2" },
    { name: 'SUBLINK-1', link: "/about/link5/sublink1" },
    { name: 'SUBLINK-2', link: "/about/link5/sublink2" },
    { name: 'SUBLINK-3', link: "/about/link5/sublink3" },
    // about
    { name: 'SUBLINK-1', link: "/help/link1/sublink1" }
]

export default function PageName() {
    const location = useLocation();
    const result = urlLists.find(url => url.link === location.pathname);

    return <>{result ? (result.name || 'Page Not Found') : 'Page Not Found'}</>;
}

