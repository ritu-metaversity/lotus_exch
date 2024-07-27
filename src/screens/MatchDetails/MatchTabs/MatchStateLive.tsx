import { useState } from 'react'
import "./MatchStateLive.css"
import { useParams, useSearchParams } from 'react-router-dom';

const MatchTabs = () => {
    const [selectData, setSelectData] = useState("MATCHSTATS")
    const { matchId } = useParams();
    const [searchParams] = useSearchParams();


    const sportsid = searchParams.get("sportid");



    const handleActive = (vl: any) => {
        setSelectData(vl)
    }
    return (

        <div className="toolbar__tabs__barNew_Main" >
            {selectData === "WATCHLIVE" ?

                <div className='toolbar_tabs_for_iframe'>
                    <iframe
                        src={`https://100tun.online/web/${matchId}.html`}
                        // src={`https://internal-consumer-apis.jmk888.com/go-score/template/${gameIframeId}/${id}`}
                        width="100%"
                        height="100%"

                        // className="score-card desk_score_card"
                        title="scorecord"
                        allowFullScreen={true}></iframe>
                </div>
                :
                <div className='toolbar_tabs_for_iframe'>
                    <iframe
                        // src={`http://15.207.182.173:3050/event/${matchId}?theme=crazy-diamond`}
                        src={`https://score.247idhub.com/go-score/template/${sportsid}/${matchId}`}
                        width="100%"
                        height="100%"
                        // className="score-card desk_score_card"
                        title="scorecord"
                        allowFullScreen={true}></iframe>
                </div>

            }

            <div className='toolbar__tabs__barNew'>

                <div className={`toolbar__tabs__bar__tabNew ${selectData === "MATCHSTATS" ? "activeeeeeeeeeeee" : ""}`} onClick={() => handleActive("MATCHSTATS")}>MATCH STATS</div>
                <div className={`toolbar__tabs__bar__tabNew ${selectData === "WATCHLIVE" ? "activeeeeeeeeeeee" : ""}`} onClick={() => handleActive("WATCHLIVE")}> WATCH LIVE</div >
            </div>

        </div>
    )
}

export default MatchTabs