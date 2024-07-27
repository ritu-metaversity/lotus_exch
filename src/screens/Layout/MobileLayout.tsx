import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import RightSideBar from '../../components/RightSideBarMobileView/RightSideBar';
import {
    LayoutWrapper,
    LayoutOutletContainer,
} from './Index.styled';
import { StyledToolbar } from '../../components/Navbar/Index.styled';
import { Drawer } from '@mui/material';
import SidebarMobile from '../../components/Sidebar/SidebarMobile';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
const MobileLayout = () => {
    const [sidebarExpanded, setSidebarExpanded] = useState(false);
    const [rightSidebarExpanded, setRightSidebarExpanded] = useState(false);
    


    const closeRightMenu = (vl: any) => {
        setRightSidebarExpanded(vl)
    }
    let pathname = ""
    return (
        <>
            <LayoutWrapper pathname={pathname}>
                <Drawer
                    anchor={"left"}
                    ModalProps={{
                        slotProps: {
                            backdrop: {
                                sx: {
                                  
                                    backgroundColor: 'transparent'
                                },
                            },
                        },

                    }}
                    open={sidebarExpanded}
                    onClose={() => { setSidebarExpanded(false); console.log("asdflkj") }}
                    PaperProps={{ sx: { width: 260 } }}
                >
                    <SidebarMobile
                        expanded={sidebarExpanded}
                        setSidebarExpanded={setSidebarExpanded}
                    />
                </Drawer>
                <LayoutOutletContainer
                    aria-expanded={rightSidebarExpanded}
                >
                    <NavbarMobile
                        rightSidebarExpanded={rightSidebarExpanded}
                        setRightSideBarExpanded={setRightSidebarExpanded}
                        sidebarExpanded={sidebarExpanded}
                        setSidebarExpanded={setSidebarExpanded}
                    />
                    <StyledToolbar />

                    <Outlet />
                </LayoutOutletContainer>

                <RightSideBar expanded={rightSidebarExpanded} closeRightMenu={closeRightMenu} />

                {
                    window.location.pathname === "home" ?

                        <Box><Footer expanded={rightSidebarExpanded} /></Box>
                        :
                        ""
                }
            </LayoutWrapper>
        </>
    );
};

export default MobileLayout;
