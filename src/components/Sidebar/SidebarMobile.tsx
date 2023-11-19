import { Dispatch, SetStateAction} from 'react';
import List from '../common/List/Index';
import {  SidebarContainerMobile } from './Index.styled';
import { sideBarItems } from './SideBarDesktop';

interface SidebarProps {
    expanded: boolean;
    setSidebarExpanded: Dispatch<SetStateAction<boolean>>;
    // closeSideBarBar: boolean;
}

const user = JSON.parse(localStorage.getItem('user') as string);
console.log(user?.userId, "sdlfyghvbdjs");

const SidebarMobile = (props: SidebarProps) => {
    const { expanded, setSidebarExpanded } = props;

    return (
        <SidebarContainerMobile
            expanded={expanded}
        >
            <List hover items={sideBarItems} closeLefySideBar={setSidebarExpanded} />
        </SidebarContainerMobile>
    );
};

export default SidebarMobile;
