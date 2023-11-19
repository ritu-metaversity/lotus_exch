import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material"
import "./HerderPage.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import slotbg from '../../../../public/assets/images/casinoGames/CaisnoNewImg/slotsBackground.png'
import slotMachine from '../../../../public/assets/images/casinoGames/CaisnoNewImg/slotMachine.png'


export const slotProviderList = [
    {
        name: "YUILD",
        logo: "https://wver.sprintstaticdata.com/v14/static/front/img/icons/1.png",
        filterType: "YGG",
    },
    {
        name: "1X2 GAMING",
        logo: "https://www.1x2gaming.com/img/logo@2x.png",
        filterType: "1x2",
    },
    {
        name: "AVATAR UX",
        logo: "https://avatarux.com/wp-content/uploads/2021/06/AUX-logo.svg",
        filterType: "AUX",
    },
    {
        name: "BIG TIME",
        logo: "https://images.squarespace-cdn.com/content/v1/60aedd95a74c4c4033f9d064/1623895434956-BV0PANOPBDWZ2FMFV53V/BTG_Logo_White.png?format=1500w",
        filterType: "BTG",
    },
    {
        name: "BLUE PRINT",
        logo: "https://blueprintgaming.com/wp-content/uploads/2017/07/web-logo.png",
        filterType: "BPG",
    },
    {
        name: "BOOONGO",
        logo: "https://bng.games/static/img/logo_full.svg",
        filterType: "BNG",
    },
    {
        name: "CQ9",
        logo: "https://www.cq9gaming.com/eng/html/img/layout/LOGO.png",
        filterType: "CQC",
    },
    {
        name: "DRAGOON SOFT",
        logo: "https://www.dragoonsoft.com/img/ds_header_logo.31834161.png",
        filterType: "DS",
    },
    {
        name: "ELK GAMING",
        logo: "https://www.elk-studios.com/app/themes/elkstudios/assets/img/logo-new.svg",
        filterType: "ELK",
    },
    {
        name: "EVOPLAY",
        logo: "https://evoplay.games/wp-content/themes/evoplay/assets/img/logo.svg",
        filterType: "EVP",
    },
    {
        name: "FANTASMA",
        logo: "https://www.fantasmagames.com/wp-content/uploads/2020/05/Fantasma_logo_Vector.png",
        filterType: "FNG",
    },
    {
        name: "FUGASO",
        logo: "https://fugaso.com/images/logo.svg",
        filterType: "FUG",
    },
    {
        name: "GAMEART",
        logo: "https://gameart.net/wp-content/uploads/2022/12/prikazna_YS_web.jpg",
        filterType: "GA",
    },
    {
        name: "GAME FISH",
        logo: "https://nuxgame.com/img/logo_Nuxgame_2023.webp",
        filterType: "GFG",
    },
    {
        logo: "https://www.yggdrasilgaming.com/w/files/2022/02/logo-header.svg",
        name: "YGGDRASIL",
        filterType: "YGG",
    },
    {
        logo: "https://www.woohoogames.com/themes/woohoo/images/logo.svg",
        name: "WOOHOO",
        filterType: "WOO",
    },
    {
        logo: "https://www.triple-pg.com/wp-content/uploads/2023/05/logo-wh.svg",
        name: "TRIPLE",
        filterType: "TPG",
    },
    {
        logo: "https://www.thunderkick.com/wp-content/uploads/2021/04/thunderkick-logo-horizontal-white.svg",
        name: "THUNDER",
        filterType: "TPG",
    },
    // {
    //   logo: "https://www.thunderkick.com/wp-content/uploads/2021/04/thunderkick-logo-horizontal-white.svg",
    //   name: "Splitrock Gaming",
    //   filterType: "TPG",
    // },
    // {
    //   logo: "https://wazdan.com/wp-content/themes/wazdan/assets/images/logo.svg",
    //   name: "WAZDAN",
    //   filterType: "WAZ",
    // },
    {
        logo: "https://www.gamblerspick.com/uploads/set_resources_3/84c1e40ea0e759e3f1505eb1788ddf3c_logo.png",
        name: "SPLITROCK",
        filterType: "SPR",
    },
    {
        logo: "https://spearheadstudios.com/wp-content/themes/spearheadstudios/assets/img/logo.svg?v=1",
        name: "SPEAR HEAD",
        filterType: "SHS",
    },
    {
        logo: "https://slotmill.com/wp-content/themes/slotmill-v2/assets/img/slotmill-logo-header.svg",
        name: "SLOT MILL",
        filterType: "SM",
    },
    {
        logo: "https://www.skywindgroup.com/assets/site/images/skywind_white.svg",
        name: "SKYWIND",
        filterType: "SWC",
    },
    {
        logo: "https://revolvergaming.com/wp-content/themes/RevolverGames/images/logo-middle.png",
        name: "REVOLVER",
        filterType: "RG",
    },
    {
        logo: "https://www.reloadedgaming.com/rel-230217/images/logo2.png",
        name: "RELOADED",
        filterType: "RLG",
    },
    {
        logo: "https://cf-cdn.relax-gaming.com/static/img/logo.svg",
        name: "RELAX",
        filterType: "RLX",
    },
    {
        logo: "https://uploads-ssl.webflow.com/5ad9ea8824e99a21e272dacd/5ae73184a9e2a25942fb74a1_Tiger.svg",
        name: "RED TIGER",
        filterType: "RED",
    },
    {
        logo: "https://rtgslots.com/wp-content/uploads/2020/09/RTG-SLOTS-logo.png",
        name: "RTG SLOT",
        filterType: "RTG",
    },
    {
        logo: "https://quickspin.com/wp-content/themes/quickspin/img/quickspin-logo.svg",
        name: "QUICK SPIN",
        filterType: "QS",
    },
    {
        logo: "https://www.pushgaming.com/i/logo-v2-light.png",
        name: "PUSH",
        filterType: "PUG",
    },
    {
        logo: "https://www.pragmaticplay.com/wp-content/themes/gp-theme-basic/libs/dist/images/PP-white-logo.svg",
        name: "PRAGMATIC",
        filterType: "PPC",
    },
];


const HeaderPage = ({ selectedGame }: any) => {


    const handleSelectGame = (vl: any) => {
        // console.log(vl, "wqregvcx");
        selectedGame(vl)


    }


    return (

        <Box className="Slot_game_page_header">
            <div className="slotheaderimg">
                <img src={slotbg} alt="" className="_posabs" />
            </div>
            <Box className="slotleft">
                <div className="buttonparent">
                    <div className="Slots-header__text-name">
                        SLOTS GAMES
                    </div>
                    <Box className="buttonholder">
                        {slotProviderList.map((sports: any) => (
                            <button className="sport_button" onClick={() => handleSelectGame(sports)}>
                                <img src={sports?.logo} style={{
                                    // width: "44%",
                                    height: "100%"
                                }} />
                                {/* <span>{sports?.name}</span> */}
                            </button>
                        ))}
                    </Box>

                    {/* <div className="roulettecontainer"></div> */}
                </div>
            </Box>
            <Box className="slotright">
                <form noValidate autoComplete="off" className="formmmmm">
                    <FormControl className="formcontrol" >
                        <OutlinedInput className="_input" startAdornment={
                            <InputAdornment position="start">
                                <SearchOutlinedIcon fontSize="large" sx={{ color: '#ffffff' }} />
                            </InputAdornment>
                        } placeholder="Please enter text" />
                    </FormControl>
                </form>
                <div className="Slots-header__text-name_mobuile">
                    SLOTS GAMES
                </div>
                <img src={slotMachine} alt="" className="_posabs" />
            </Box>
        </Box>

    )
}

export default HeaderPage