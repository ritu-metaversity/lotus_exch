import { Outlet, useLocation } from 'react-router-dom';
import {
    LayoutWrapper,
    LayoutOutletContainer,
    LayoutBetLipContainer,
    LayoutLeftSideContainer,
} from './Index.styled';
import RightSideBetPage from '../../components/RightSideBarDesktopView/RightSideBetPage';
import SidebaDeskTop from '../../components/Sidebar/SideBarDesktop';
import NavbarDesktop from '../../components/Navbar/Index';
// import { useGetJwtTokenQuery } from '../../state/apis/main/apiSlice';

const DesktopLayout = () => {
    const allowedUrls = ["/match-details/", "/gameDetail/", "home"]
    const { pathname } = useLocation()

    console.log(allowedUrls.some(i => pathname.includes(i)), pathname.includes("Slot-Games"), "dfwfrweedqsxs");

    return (
        <>
            <NavbarDesktop />
            <LayoutWrapper pathname={pathname}>
                {["/Card-Game", "/Slot-Games", "/live-casino", "/Internationl-casino","/Slot-Games-play"].includes(pathname) ?
                    "" :
                    <SidebaDeskTop />
                }
                <LayoutOutletContainer isFull={allowedUrls.some(i => pathname.includes(i))} >
                    {/* <StyledToolbar /> */}
                    <Outlet />
                </LayoutOutletContainer>

                {/* <RightSideBar expanded={rightSidebarExpanded} /> */}

                {allowedUrls.some(i => pathname.includes(i)) &&
                    <LayoutBetLipContainer>
                        <LayoutLeftSideContainer >
                            <RightSideBetPage />
                        </LayoutLeftSideContainer>
                    </LayoutBetLipContainer>
                }

            </LayoutWrapper>
            
        </>
    );
};

export default DesktopLayout;
