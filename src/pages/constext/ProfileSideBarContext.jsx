import { createContext, useContext, useEffect, useState } from "react";


const ProfileSideBarContext = createContext();

export const ProfileSideBarProvider = ({ children }) => {
    const [showSideBar, setShowSideBar] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [sideBarAble, setSideBarAble] = useState(false);
    const mdScreen = 768;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        setSideBarAble(windowWidth < mdScreen)
    }, [windowWidth])

    // const show (show) => {
    //     console.log(show)
    //     setShowSideBar(false)
    // }

    return (
        <ProfileSideBarContext.Provider value={{
            showSideBar,
            setShowSideBar,
            sideBarAble
        }}>
            {children}
        </ProfileSideBarContext.Provider>
    )
}

export const useSideBar = () => useContext(ProfileSideBarContext)