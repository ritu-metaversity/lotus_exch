import { useEffect, useState } from "react";

import { Modal } from '@mui/material';


import "./Deposit.css";
import PayManually from "./PayManually";
import { useNavigate } from "react-router";
import { useDepositeRequestClientMutation } from "../../../../../state/apis/main/apiSlice";
const Deposit = () => {
  // const dispatch = useDispatch();


  // console.log(
  //   PostselfdepositappDataLoading, "PostselfdepositappDataLoadingPostselfdepositappDataLoadingPostselfdepositappDataLoading"
  // );
  const [triger, { data: DepositeRequestClien }] = useDepositeRequestClientMutation()
  const userTypeInfo = localStorage.getItem("userTypeInfo");
  let navigate = useNavigate();
  console.log(DepositeRequestClien, "DepositeRequestClien");

  useEffect(() => {
    if (userTypeInfo === "2") {
      navigate("./home");

    }
  }, [userTypeInfo])
  const [trueee, setTrueee] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const handleCloseModal = () => {
    setTrueee(false)
  }
  // const token = localStorage.getItem("token");
  // console.log(trueee,"imgUrlimgUrl")
  // const increment = () => {
  //   setBitValue(Bitvalue + 10);
  // };
  // const decrement = () => {
  //   setBitValue(Bitvalue - 10);
  // };

  //  console.log(PostpaymnetdetailappDataData,"line 24")

  // const handleStaticAmount = (vl: any) => {
  //   setBitValue(Bitvalue + vl);
  // };
  const UpdateList = (vl: any) => {
    if (vl === true) {
      // console.log(vl, "hgfds");
      triger({})
      // dispatch(Postdepsositrequestclient());
    }
  };

  useEffect(() => {
    // const token = localStorage.getItem("TokenId");

    // if (token) {
    triger({})

    // dispatch(Postdepsositrequestclient());
    // dispatch(Postpaymnetdetailapp());
    // }
  }, []);
  // console.log(PostdepsositrequestclientData,"line 18")
  const handleModal = (e: any, url: any) => {
    e.preventDefault();
    setImgUrl(url);
    setTrueee(true);
    // console.log(url)
  };

  // useEffect(() => {
  //   if (PostselfdepositappData?.status) {
  //     triger({})

  // // dispatch(Postdepsositrequestclient());
  //   }
  // }, [PostselfdepositappData?.status]);
  // console.log(trueee)
  return (

    <>
      <PayManually UpdateList={UpdateList} />


      <div className="row row5 mt-2" style={{ padding: "29px 0px" }}>
        <div className="col-12">
          <div className="table-responsive">
            <table
              style={{ backgroundColor: "#b0a5a557", border: "1px solid" }}
              role="table"
              aria-busy="false"
              aria-colcount={6}
              className="table b-table table-bordered deposit-table"
              id="__BVID__104"
            >
              <thead>
                <tr className="previous-deposite">
                  <th colSpan={4} style={{
                    fontSize: "15px",
                    padding: "5px",
                    backgroundColor: "#1f8067",
                    // border: "1px solid black"
                  }}>Previous Deposit</th>
                </tr>
                <tr role="row" className="deposit-list" >
                  <th
                    role="columnheader"
                    scope="col"
                    aria-colindex={1}
                    className="text-left"
                    style={{
                      backgroundColor: "#1f8067",
                      border: "1px solid black"
                    }}
                  >
                    Amount
                  </th>
                  <th
                    role="columnheader"
                    scope="col"
                    aria-colindex={2}
                    className="text-center"
                    style={{
                      backgroundColor: "#1f8067",
                      border: "1px solid black"
                    }}
                  >
                    Image
                  </th>
                  <th
                    role="columnheader"
                    scope="col"
                    aria-colindex={3}
                    className="text-center"
                    style={{
                      backgroundColor: "#1f8067",
                      border: "1px solid black"
                    }}
                  >
                    Date
                  </th>
                  <th
                    role="columnheader"
                    scope="col"
                    aria-colindex={4}
                    className="text-center"
                    style={{
                      backgroundColor: "#1f8067", border: "1px solid black"
                    }}
                  >
                    Status
                  </th>
                </tr>
              </thead>


              {DepositeRequestClien &&
                DepositeRequestClien?.data &&
                DepositeRequestClien?.data.map((item: any) => (
                  <tbody>
                    <tr role="row" style={{ fontWeight: "700" }}>
                      <td aria-colindex={1} className="text-left" style={{ padding: "5px" }}>
                        {item?.amount}
                      </td>
                      <td
                        aria-colindex={2}
                        className="text-center"
                        onClick={(e) => handleModal(e, item?.image)}
                      >
                        <img
                          alt=""
                          className="fkjsdfsdkfjsd"
                          src={item?.image}
                        />
                      </td>

                      <td aria-colindex={3} className="">
                        {item?.time}
                      </td>
                      {item.status === "Pending" ? (
                        <td aria-colindex={4} style={{ color: "#ffa726" }}>
                          {item?.status}
                        </td>
                      ) : item.status === "Rejected" ? (
                        <td aria-colindex={4} style={{ color: "#f44336" }}>
                          {item?.status}
                        </td>
                      ) : (
                        <td
                          aria-colindex={4}
                          style={{ color: "#66bb6a", fontSize: "10px" }}
                        >
                          {item?.status}
                        </td>
                      )}
                    </tr>
                  </tbody>
                ))}
            </table>

          </div>
        </div>
      </div >
      <Modal
        open={trueee}
        // onHide={() => setTrueee(false)}
        // size="lg"
        className="popupewefefwe"
        onClose={handleCloseModal}
      // centered
      >


        <img src={imgUrl} alt="" className="imgggggggg" />

      </Modal>
    </>

  );
};
export default Deposit;
