import { useState, useEffect } from 'react';

const minValue = 5;
const hasBook = true;
const needLiabilityOnly = true;

const useBooks = (mergedData, bets) => {
  const [books, setBooks] = useState([]);
  const [liability, setLiability] = useState(0);

  useEffect(() => {
    if (mergedData.length > 0) {
      const newBooks = mergedData?.map((item) => viewBook(item.ID));
      setBooks(newBooks);
    }
  }, [mergedData, bets]);

  const viewBook = (runnerId) => {
    const r = [];
    const data = bets?.filter((el) => el?.SelectionId.toString() === runnerId?.toString())?.sort((a, b) => (a.Odds > b.Odds ? 1 : -1));

    if (data.length === 0) {
      return { runnerId, r };
    }

    const min = Math.max(Math.min(...data.map((a) => a.Odds)) - minValue, 0);
    const max = Math.max(...data.map((a) => a.Odds)) + minValue;

    for (let i = min; i <= max; i++) {
      r.push({
        odds: i,
        value: 0,
      });
    }

    data.forEach((fancy) => {
      const stake = fancy.Stack;
      if (fancy.isBack === 0) {
        r.forEach((rs) => {
          if (rs.odds >= fancy.Odds) {
            rs.value += (stake * fancy.volume) / 100;
          } else {
            rs.value -= stake;
          }
        });
      } else {
        r.forEach((rs) => {
          if (rs.odds < fancy.Odds) {
            rs.value += stake;
          } else {
            rs.value -= (stake * fancy.volume) / 100;
          }
        });
      }
    });

    if (needLiabilityOnly) {
      const calculatedLiability = Math.min(...r.map((a) => a.value));
      setLiability(calculatedLiability);
      return { runnerId, liability: calculatedLiability < 0 ? calculatedLiability : 0 };
    } else {
      return { runnerId, liability:0 };
    }
  };

  return { books, liability };
};

export default useBooks;
