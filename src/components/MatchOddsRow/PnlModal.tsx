
import { useEffect } from "react";
import { useBetFancyBookMutation } from "../../state/apis/main/apiSlice";


const PnlModal = ({ fancyId, matchId, dadadada }: any) => {
    // const [pnlBook, setPnlBook] = useState<{ odds: number; pnl: any }[]>([]);

    const [triger, { data: FancyBookData }] = useBetFancyBookMutation();
    console.log(FancyBookData, dadadada, "dsfsdfs");


    useEffect(() => {
        // const getPnlBook = async () => {
        //   if (!fancyId) return;
        triger({ fancyId: fancyId, "matchId": matchId })
        // axios.post(
        //     "https://api.247365.exchange/admin-new-apis/enduser/user-fancy-book", (data),
        //     {
        //         headers: {
        //             "Content-Type": "multipart/form-data",
        //             Authorization: `Bearer ${localStorage.getItem("token")}`,
        //         },

        //     }
        // ).then((res) => {

        //     console.log(res?.data, "dcfwc3rwse");
        // })
        //   https://api.247365.exchange/admin-new-apis/enduser/user-fancy-book

        //   if (response?.data) {
        //     setPnlBook(response.data);
        //   }
        // };
        // getPnlBook();
        // return () => {
        //   setPnlBook([]);
        // };
    }, [fancyId, matchId]);
    return (
        <div className="main_for_pnl">
            {FancyBookData?.data?.length <= 0 ?
                <div style={{ height: "30vh" }}>
                    <div style={{ color: "red" }}>No bet found</div>
                </div>
                :
                <>

                    <div style={{ overflow: 'hidden', width: '100%' }}>
                        <table className="" style={{ width: "100% ", border: "1px solid", overflowY: 'scroll' }}>
                            <tbody>
                                <>

                                    <tr >

                                        <td className="headerrunname">
                                            Run
                                        </td>
                                        <td className="headerrunname">
                                            Amount
                                        </td>
                                    </tr>
                                    {FancyBookData?.data?.map((item: any) => {
                                        return (

                                            <tr>
                                                <td className="headerrunnamedata">
                                                    {item?.odds}
                                                </td>
                                                <td className="headerrunnamedata" >
                                                    <span style={{ color: item.pnl >= 0 ? "green" : "red" }}>
                                                        {item.pnl}
                                                    </span>
                                                </td>
                                            </tr>)
                                    })}

                                </>
                            </tbody>

                        </table>
                    </div>
                </>
            }

            {/* <StickyHeadTable
      title={"Run and Amount"}
      columns={[
        { id: "odds", label: "Run" },
        { id: "pnl", label: "Amount" },
      ]}
      rows={pnlBook.map((pnlBookItem) => {
        const newItem = { ...pnlBookItem };
        newItem.pnl = (
          <Typography
            color={pnlBookItem.pnl >= 0 ? "green" : "red"}
            fontSize={"0.8rem"}
            mr={0.5}
          >
            {Number(pnlBookItem.pnl?.toFixed(2))}
          </Typography>
        );
        return newItem;
      })}
    /> */}
        </div>
    )
}

export default PnlModal