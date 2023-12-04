import React, { ReactNode, useMemo, TouchEvent, useRef } from 'react';
import DefaultSportsIcon from '@mui/icons-material/SportsKabaddiOutlined';
import Section from '../../../components/Section/Index';
import SportsHeader from '../../../components/SportsHeader/Index';
// import MatchDataRow from '../../../components/MatchDataRow/Index';
import { useGetMatchesBySportsAllQuery, useGetMatchesBySportsQuery } from '../../../state/apis/betfair/apiSlice';
import Icon from '../../../components/common/Icon/Index';
import { InPlayContainer } from './Index.styled';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { MatchBody, MatchDataRowContainer, MatchName, MatchOddsGrid, MatchOddsGridContainer, MatchOddsWrapper, MatchTimeAndFavouriteContainer, MatchTiming } from '../../../components/MatchDataRow/Index.styled';
import FlexBetween from '../../../components/common/FlexBetween/Index';
import OddCell from '../../../components/OddCell/Index';
import dateTime from '../../../services/dateTime';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectHomeSwipe, setHomeSwipe } from '../../../state/features/client/clientSlice';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
type SportIds = {
  [keyof: string]: ReactNode;
};

const UpcommingEvents = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data } = useGetMatchesBySportsQuery(undefined, { pollingInterval: 3000 });
  const { data: UPcoming } = useGetMatchesBySportsAllQuery(undefined, { pollingInterval: 3000 });
  const isSwiped = useAppSelector(selectHomeSwipe);

  const sportsIds: SportIds = useMemo(() => {
    const sportsIds: SportIds = {};

    if (!data) return sportsIds;

    data.data.forEach(sports => {
      const cricketRegEx = /cricket/i;
      const footballRegEx = /football/i;
      const tennisRegEx = /tennis/i;

      const baseIconUrl = '/assets/icons';

      if (cricketRegEx.test(sports.name))
        sportsIds[sports.sportid] = (
          <Icon
            isSvgIcon
            src={`${baseIconUrl}/cricket-ball-upcoming.svg#cricket-ball`}
          />
        );
      if (footballRegEx.test(sports.name))
        sportsIds[sports.sportid] = (
          <Icon isSvgIcon src={`${baseIconUrl}/football-upcoming.svg#football`} />
        );
      if (tennisRegEx.test(sports.name))
        sportsIds[sports.sportid] = (
          <Icon isSvgIcon src={`${baseIconUrl}/tennis-upcoming.svg#tennis`} />
        );
    });

    return sportsIds;
  }, [data]);

  const retrieveTeamsForMatch = (matchName: string) => {
    const delimiterRegex = /\s+(?:vs|v[/\\]s|v[/\\]|v)\s+/i;
    const [team1, team2] = matchName.split(delimiterRegex);

    return {
      team1: team1.trim() || 'Team 1',
      team2: team2.trim() || 'Team 2',
    };
  };

  const navigateToMatchDetails = (matchId: any) => {
    navigate(`/match-details/${matchId}`)
  }


  const getIconBySportId = (sportId: number) => {
    return sportsIds[sportId] || <DefaultSportsIcon fontSize='inherit' />;
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const lastTouchXRef = useRef<number | null>(null);
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) =>
    (lastTouchXRef.current = e.touches[0].clientX);

  const handleTouchEnd = () => (lastTouchXRef.current = null);

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const shouldApplyAnimation = window.innerWidth < 1024;

    if (!shouldApplyAnimation) return;

    if (lastTouchXRef.current !== null) {
      const diffX = e.touches[0].clientX - lastTouchXRef.current;

      // Check if the swipe distance is greater than a threshold value
      const threshold = 70;
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) dispatch(setHomeSwipe({ isSwiped: false }));
        else dispatch(setHomeSwipe({ isSwiped: true }));
      }
    }
  };


  console.log(UPcoming, "njhgfytdresdxfc");

  const OddsData = (vl: any) => {
    console.log(vl);

    // dispatch(setSelectedSid(vl.SelectionIdForAll.selectionId))
    // dispatch(setBetData({ ...vl, }))

    // setMobileViewBettingData(vl)

  }



  return (
    <InPlayContainer>


      <Section
        heading='Upcoming Events'
        icon={<ReportGmailerrorredIcon style={{ fontSize: "27px" }} />}
      >
        {UPcoming?.data.map(
          sports =>
            sports.matchList.length !== 0 && (
              <React.Fragment key={sports.sportid}>
                <SportsHeader
                  icon={getIconBySportId(sports.sportid)}
                  name={sports.name}
                />
                {sports.matchList.map((match: any) => match.inPlay === false && (

                  <>

                    <MatchDataRowContainer className='match-data-row'>
                      <MatchTimeAndFavouriteContainer>
                        <MatchTiming className='match-data__time' style={{
                          color: '#d2704d'
                        }}>
                          < span > {dateTime.getDate(match?.openDate, true)}</span>
                          <span>{dateTime.getTimeIn12HourFormat(match?.openDate)}</span>
                        </MatchTiming>
                        <Icon width='2rem' isSvgIcon src='/assets/icons/star.svg#star' />
                      </MatchTimeAndFavouriteContainer >
                      <FlexBetween width='calc(100% - 77px)' flex={1}>
                        <MatchBody className='match__body'>
                          <MatchName className='match__name'
                            onClick={() => navigateToMatchDetails(match?.matchId)}
                          >
                            <span>{retrieveTeamsForMatch(match?.matchName as string).team1}</span>
                            <span>{retrieveTeamsForMatch(match?.matchName as string).team2}</span>
                          </MatchName>
                          {/* <Icon width='1.2rem' src='/assets/icons/tv.svg#tv' isSvgIcon /> */}
                        </MatchBody>

                        <MatchOddsWrapper
                          className='match-odds-wrapper'
                          ref={containerRef}
                          onTouchStart={handleTouchStart}
                          onTouchMove={handleTouchMove}
                          onTouchEnd={handleTouchEnd}
                        >
                          <MatchOddsGridContainer
                            isSwiped={isSwiped}
                            className='match-odds-grid-container'>
                            <MatchOddsGrid className='match-odds-grid'>
                              <OddCell odd={match?.runners[0]?.back1 || '-'} color='blue' type='team1back' allData={match} OddsData={OddsData} SelectionIdForAll={match?.runners[0]} />
                              <OddCell odd={match?.runners[0]?.lay1 || '-'} color='red' type='team1lay' allData={match} OddsData={OddsData} SelectionIdForAll={match?.runners[0]} />
                              <OddCell odd={match?.runners[2]?.back1 || '-'} color='blue' type='drawback' allData={match} OddsData={OddsData} SelectionIdForAll={match?.runners[2]} />
                              <OddCell odd={match?.runners[2]?.lay1 || '-'} color='red' type='drawlay' allData={match} OddsData={OddsData} SelectionIdForAll={match?.runners[2]} />
                              <OddCell odd={match?.runners[1]?.back1 || '-'} color='blue' type='team2back' allData={match} OddsData={OddsData} SelectionIdForAll={match?.runners[1]} />
                              <OddCell odd={match?.runners[1]?.lay1 || '-'} color='red' type='team2lay' allData={match} OddsData={OddsData} SelectionIdForAll={match?.runners[1]} />
                            </MatchOddsGrid>
                          </MatchOddsGridContainer>
                        </MatchOddsWrapper>
                      </FlexBetween>
                    </MatchDataRowContainer>
                  </>
                ))}
              </React.Fragment>
            )
        )}
      </Section >
    </InPlayContainer >
  );
};


export default UpcommingEvents