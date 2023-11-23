
import axios from 'axios';
import { Box, Modal } from "@mui/material";


import { useEffect, useState } from 'react'
// import { Col, Container, Row } from 'react-bootstrap';



import toast from 'react-hot-toast';
import './WithDraw1.css'
import { Col, Container, Row } from 'react-bootstrap';
import { useWithdrawRequestClientQuery } from '../../../../../state/apis/main/apiSlice';

const WithDraw1 = () => {

    const erreeee = {
        Amountfieldrequired: "The Amount field is required",
        AmountfieldLow: "The Amount should be more than 99.",
        AmountNumberrequired: "The Account Number is required",
        AmountNamerequired: "The Account Name field is required",
        bankName: "The Bank Name field is required",
        infcRequired: "The IFSC field is required",
        mobilenorequired: "Mobile Number is required",
        upireq: "UPI ID is required",
        upivalid: "Enter Valid UPI ID",
    };

    const { data: PostwithdrawrequestclientData } = useWithdrawRequestClientQuery(undefined)
    console.log(PostwithdrawrequestclientData, "datasdfsdfsdfsd");

    const [symbolsArrMail] = useState(["e", "E", "+", "-", "."]);
    const [symbolsArrUpiId] = useState(["."]);

    // let REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const [withdrawData, setWithdrawData] = useState<any>();
    // const [active, setActive] = useState(0);

    const [show, setShow] = useState(false);
    const [withType, setwithType] = useState();
    const [withCoinValue, setwithCoinValue] = useState(0) as any;
    // const [userAmount, setUserAmount] = useState();
    const [accountNumber, setAccountNumber] = useState<any>();
    const [accountHolderName, setAccountHolderName] = useState("");
    const [ifsc, setIFSC] = useState<any>();
    const [bankName, setBankName] = useState<any>();
    const [AccountType, setAccountType] = useState("Saving");
    const [errorAlert, setErrorAlert] = useState(false);

    const [colorName, setColorName] = useState<any>();

    const [isLoading, setIsLoading] = useState(false);
    const [bankID, setBankId] = useState();
    const [stackValue, setStackValue] = useState<any>();
    const [openForm, setOpenForm] = useState(false);
    const [withdrawType, setWithdrawType] = useState("Normal");
    const [getAccountData, setGetAccountData] = useState<any>();
    const [userBalance, setuserBalance] = useState();
    const [savedBankdetailsName, setSavedBankdetailsName] = useState("")

    const handleClose = () => {
        setShow(false);
        // toast.success("Withdraw Request Submited Successfully");
        setErrorAlert(true);
        setIsLoading(false);
        setColorName("success");
        setAccountHolderName("");
        setAccountNumber("");
        setIFSC("");
        setBankName("");
        setwithCoinValue(0);
    };
    console.log(userBalance, "iuhjuhnij");
    // const handleCancel = () => {
    //     setshowWithdraw(false);
    //   };
    const handlePaymentDetails = (val: any) => {
        setwithType(val?.withdrawType);
        setBankId(val?.id);
        setOpenForm(true);
        setAccountHolderName("");
        setAccountNumber("");
        setIFSC("");
        setBankName("");
        setRadioButton(false)
        // setwithCoinValue(0);
        setSavedBankdetailsName(val?.withdrawType)
        console.log(val, "vervewvcew")

    };
    console.log(withdrawData, "sdfsdfsdcqcq");

    useEffect(() => {
        const TokenId = localStorage.getItem("token");
        axios
            .post(
                "https://api.247365.exchange/admin-new-apis/withtype-subadmin/get",
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
                    },
                }
            )
            .then((res) => {
                setWithdrawData(res?.data?.data);
            });
        axios
            .post(
                "https://api.247365.exchange/admin-new-apis/request-stack",
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
                    },
                }
            )
            .then((res) => {
                setStackValue(res?.data?.data);
                console.log(res?.data?.data);
            });
        axios
            .post(
                "https://api.247365.exchange/admin-new-apis/get/client-bank",
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
                    },
                }
            )
            .then((res) => {
                setGetAccountData(res?.data?.data);
            });
        axios
            .post(
                "https://api.247365.exchange/admin-new-apis/enduser/get-user-balance",
                {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
                    },
                }
            )
            .then((res) => {
                setuserBalance(res?.data?.data?.balance);

            });
        // const getWallet = async () => {
        // const { response } = userServices.wallet();
        // if (response) {
        //     console.log(response,"sbhdkjnfds")
        //     setuserBalance(response?.data?.data?.balance);
        // };
        // UserAPI.User_Balance().then((res)=>{
        //   setuserBalance(res?.data?.balance)
        // })
        // getWallet()
    }, []);
    // const handleStaticAmountInput = (e: any) => {
    //     let Inputvalue = e.target.value;
    //     setwithCoinValue(parseInt(Inputvalue));
    // };
    const handleSaveDetail = () => {
        setAccountHolderName("");
        setAccountNumber("");
        setIFSC("");
        setBankName("");
        setwithCoinValue(0);
        const data = {
            accountHolderName: accountHolderName,
            bankName: bankName,
            accountType: AccountType,
            amount: withCoinValue,
            ifsc: ifsc,
            accountNumber: accountNumber,
            withdrawType: bankID,
        };
        axios
            .post("https://api.247365.exchange/admin-new-apis/save/client-bank", data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                setShow(false);
                setErrorAlert(true);
                setIsLoading(false);
                setColorName("success");
                toast.success(res?.data?.message)
                const TokenId = localStorage.getItem("token");

                axios
                    .post(
                        "https://api.247365.exchange/admin-new-apis/get/client-bank",
                        {},
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${TokenId}`,
                            },
                        }
                    )
                    .then((res) => {
                        setGetAccountData(res?.data?.data);
                    });
                // setMessage(res?.data?.message);

            })
            .catch((error) => {
                setErrorAlert(true);
                setIsLoading(false);
                setColorName("danger");
                toast.error(error?.response?.data?.message)

                // setMessage(error?.response?.data?.message);
            });
    };
    const handleBtnValue = (val: any) => {
        setwithCoinValue(
            (withCoinValue: any) => (Number(withCoinValue) || 0) + Number(val)
        );
    };
    //console.log(alert(message))
    // const popupClose = (vl: any) => {
    //     setErrorAlert(vl);
    // };
    // const handleAccountName = (e: any) => {
    //     const result = e.target.value.replace(/[^a-z]/gi, "");
    //     setAccountHolderName(e.target.value.replace(/[^a-z]/gi, ""));
    // };

    const handleValidate = () => {
        console.log(userBalance, withCoinValue, "gfdsdfgh");
        if (Number(userBalance) < Number(withCoinValue)) {
            toast.error("insufficient balance");
            setErrorAlert(true);
            setColorName("danger");
            setIsLoading(false);
            return false;
        }
        if (withCoinValue < 100) {
            toast.error(erreeee?.AmountfieldLow)
            setIsLoading(false);
            return false;
        }

        if (withType === "BANK") {
            console.log("helooo");
            if (
                withCoinValue === "" ||
                withCoinValue === undefined ||
                withCoinValue === 0
            ) {
                //toast.error("Sorry no payment Methods Found")
                //apiWithErrorSnackbar(erreeee?.Amountfieldrequired)
                toast.error(erreeee?.Amountfieldrequired)


                setIsLoading(false);
                return false;
            } else if (accountNumber === "") {
                toast.error(erreeee?.AmountNumberrequired)
                setIsLoading(false);
                return false;
            } else if (accountNumber.match(/^[0-9]{8,18}$/) === null) {
                toast.error("Invalid account number")
                setIsLoading(false);

                setIsLoading(false);
                return false;
            } else if (accountHolderName === "") {
                toast.error(erreeee?.AmountNamerequired)
                setIsLoading(false);
                return false;
            } else if (bankName === "") {
                toast.error(erreeee?.bankName)
                setIsLoading(false);
                return false;
            } else if (ifsc === "") {
                toast.error(erreeee?.infcRequired)
                setIsLoading(false);
                return false;
            } else if (ifsc === "") {
                toast.error(erreeee?.infcRequired)
                setIsLoading(false);
                return false;
            }
            else if (ifsc.match(/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/) === null) {
                toast.error("Please enter a valid IFSC CODE")
                setIsLoading(false);
                return false;
            }
        } else if (withType === "PAYTM") {
            console.log("heloo");
            if (
                withCoinValue === "" ||
                withCoinValue === undefined ||
                withCoinValue === 0
            ) {
                toast.error(erreeee?.Amountfieldrequired)
                setIsLoading(false);
                return false;
            } else if (accountNumber === "") {
                toast.error(erreeee?.mobilenorequired)
                setIsLoading(false);
                return false;
            } else if (accountNumber.match(/^[0-9]{10}$/) === null) {
                toast.error("Invalid number")
                setIsLoading(false);

                return false;
            } else if (accountHolderName === "") {
                toast.error(erreeee?.AmountNamerequired)
                setIsLoading(false);
                return false;
            } else if (accountNumber.length !== 10) {
                toast.error("Enter Valid Mobile number");
                // setErrorAlert(true);
                // setColorName("danger");
                setIsLoading(false);
                return false;
            }
        } else if (withType === "UPI") {
            console.log("helo");
            if (
                withCoinValue === "" ||
                withCoinValue === undefined ||
                withCoinValue === 0
            ) {
                toast.error(erreeee?.Amountfieldrequired)

                setIsLoading(false);
                return false;
            } else if (accountNumber === "") {
                toast.error(erreeee?.upireq)
                setIsLoading(false);
                return false;
            } else if (accountHolderName === "") {
                toast.error(erreeee?.AmountNamerequired)
                // setErrorAlert(true);
                // setColorName("danger");
                setIsLoading(false);
                return false;
            } else if (
                accountNumber.match(/^[a-zA-Z0-9.-]{2,256}@[a-zA-Z][a-zA-Z]{2,64}$/) ===
                null
            ) {
                toast.error(erreeee?.upivalid)
                // setErrorAlert(true);
                // setColorName("danger");
                setIsLoading(false);
                return false;
            }
        }
        return true;

    };

    const handleClick = () => {


        setErrorAlert(false);
        setIsLoading(true);

        if (handleValidate()) {
            const data = {
                accountHolderName: accountHolderName,
                bankName: bankName ? bankName : "",
                accountType: withType === "BANK" ? AccountType : "",
                amount: withCoinValue,
                ifsc: ifsc ? ifsc.toUpperCase() : "",
                accountNumber: accountNumber,
                withdrawType: bankID,
                withdrawMode: withdrawType,
            };
            const TokenId = localStorage.getItem("token");
            axios
                .post("https://api.247365.exchange/admin-new-apis/self-withdraw-app", data, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TokenId}`,
                    },
                })
                .then((res) => {
                    // setWithdrawReq(res.data);
                    // setDataLength(res.data.length);
                    // console.log(res?.data?.data                        , "sdsadasd")
                    if (res?.data?.data?.bankExist === false) {
                        // console.log(res, "yutfdgchjiouytfgdxcvbhjkiuygfc")
                        setShow(true);
                        toast.success(res?.data?.message)

                    } else {
                        // setMessage(res?.data?.message
                        // );
                        console.log('hellooioiioioi')
                        setErrorAlert(true);
                        setColorName("success");
                        setIsLoading(false);
                        setAccountHolderName("");
                        setAccountNumber("");
                        setIFSC("");
                        setBankName("");
                        setwithCoinValue(0);
                        setAccountType("")
                        setRadioButton(false)
                        toast.success(res?.data?.message)

                    }

                })
                .catch((error) => {
                    // setErrorAlert(true);
                    setIsLoading(false);
                    // setColorName("danger");
                    toast.error(error?.response?.data?.message)
                    // setMessage(error?.response?.data?.message);
                });
        }
    };
    const [radioButton, setRadioButton] = useState(false)
    const handleWithdrawData = (
        accNumber: any,
        accHolderName: any,
        BankName: any,
        ifscNum: any,
        accType: any,
        withdrawType: any

    ) => {
        setAccountHolderName(accHolderName);
        setAccountNumber(accNumber);
        setBankName(BankName);
        setIFSC(ifscNum);
        setAccountType(accType);
        setwithType(withdrawType)
        setRadioButton(accNumber)
        // setWithdrawType(withdrawType)
    };

    // console.log(message, "dfsfsdfssfgdsdjijfv")
    //const handlepennding = () => setpendingmodal(true);
    //, setWithDrawId] = useState("")

    // const [pendingmodal, setpendingmodal] = useState(false)
    // const handleCloseFancyModal = () => setpendingmodal(false);

    //const handlependingg = (data) => {
    //  setpendingmodal(true)
    //setWithDrawId(data)
    //  }

    //  const handlependingsucesss = () => {
    //      let data = { id: withDrawId }
    //     dispatch(postpendingapppii(data))
    //     setpendingmodal(false)
    // }
    console.log(withdrawData, "kjhgtfdcvgyg")
    console.log(errorAlert, colorName, savedBankdetailsName);

    return (
        <>
            <div className="withdraw_page">

                <div className="withdrow_coin">
                    <div className="withdrow_title">
                        <p style={{ marginLeft: "-1px", marginBottom: "10px" }}>
                            Withdraw Coins
                        </p>
                        <input
                            placeholder="Withdraw Coins"
                            value={withCoinValue}
                            // onChange={handleStaticAmountInput}
                            onChange={(e) => e.target.value.match(/^[0-9]{0,10}$/) && setwithCoinValue(e.target.value)}

                            // onChange={()=>{  setwithCoinValue(parseInt(Inputvalue)}}
                            // type="number"
                            onKeyDown={(e) =>
                                symbolsArrMail.includes(e.key) && e.preventDefault()
                            }
                        />
                    </div>
                    <div>
                        <p
                            className="choose_val"
                            style={{ marginLeft: "0px", marginBottom: "10px" }}>
                            Choose From your Favourite transaction{" "}
                        </p>
                        <div className="coin_value" style={{ cursor: "pointer" }}>
                            {stackValue?.map((res: any) => {
                                return (
                                    <button onClick={() => handleBtnValue(res?.value)} style={{ cursor: "pointer" }}>
                                        {res?.key}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div
                    className="withdrow_type"
                    style={{ marginBottom: "12px", width: "100%" }}>
                    <select value={withdrawType} onChange={(e) => setWithdrawType(e.target.value)} style={{ width: "50%", cursor: "pointer" }} >
                        <option value="Normal" style={{ cursor: "pointer" }}>Normal</option>
                        <option value="Instant" style={{ cursor: "pointer" }}>Instant</option>
                    </select>
                </div>
                <div className="with_paymethod">
                    <Container>
                        <div className="bank-logo with_bank_logo">
                            <Row className='innerRow'>
                                {withdrawData?.map((res: any) => {
                                    return (
                                        <>
                                            {console.log(res, "asxqdsfsdfsdf")}
                                            <Col
                                                className="withdraw_image"
                                                onClick={() =>
                                                    handlePaymentDetails(
                                                        res
                                                    )}
                                                style={{ backgroundColor: (bankID === res?.id) ? "#7b7c7f" : "", cursor: "pointer" }}
                                            >

                                                <div className="css-1502y4u">
                                                    <img
                                                        src={res?.image}
                                                        className="css-37vfbv"
                                                        alt="Bank"
                                                    />
                                                    <p className="Typography-root ">
                                                        {res?.withdrawType}
                                                    </p>
                                                </div>
                                            </Col>
                                        </>
                                    );
                                })}
                            </Row>
                        </div>
                    </Container>
                    {
                        withType === "BANK" ? (
                            <div
                                className={`mainAccount main_withdrow ${openForm === true ? "" : "d-none"
                                    } accountWith`}>
                                <div className="mx-input-wrapper account-field">
                                    <label className="account-lable">Account Number</label>

                                    <input
                                        // type="number"
                                        className="account-input"
                                        value={accountNumber}
                                        onChange={(e) => {
                                            e.preventDefault()
                                            // alert(e.target.value + "e.target.value")
                                            console.log(e.target.value, "e.target.value");
                                            e.target.value.match(/^[0-9]{0,18}$/) && setAccountNumber(e.target.value)
                                        }}
                                        onKeyDown={(e) =>
                                            symbolsArrUpiId.includes(e.key) && e.preventDefault()
                                        }
                                    // onChange={(e) =>
                                    //     e.target.value.match(/^[0-9]*$/) &&
                                    //     setAccountNumber(Number(e.target.value))}
                                    // onKeyDown={(e) =>
                                    //     symbolsArrMail.includes(e.key) && e.preventDefault()
                                    // }
                                    />
                                </div>
                                <div className="mx-input-wrapper account-field">
                                    <label className="account-lable">Account Name</label>

                                    <input
                                        type="text"
                                        className="account-input"
                                        value={accountHolderName.trimStart()}
                                        onChange={(e) =>
                                            e.target.value.match(/^[a-zA-Z ]*$/) &&
                                            setAccountHolderName(
                                                e.target.value
                                            )
                                        }
                                        onKeyDown={(e) =>
                                            symbolsArrUpiId.includes(e.key) && e.preventDefault()
                                        }
                                    />
                                </div>
                                <div className="mx-input-wrapper account-field">
                                    <label className="account-lable">Bank Name</label>

                                    <input
                                        type="type"
                                        className="account-input"
                                        value={bankName}
                                        onChange={(e) =>
                                            e.target.value.match(/^[a-zA-Z ]*$/) &&
                                            setBankName(
                                                e.target.value
                                            )
                                        }
                                        onKeyDown={(e) =>
                                            symbolsArrUpiId.includes(e.key) && e.preventDefault()
                                        }
                                    />
                                </div>
                                <div className="mx-input-wrapper account-field">
                                    <label className="account-lable">IFSC</label>

                                    <input
                                        type="type"
                                        className="account-input"
                                        value={ifsc}
                                        onChange={(e) =>
                                            setIFSC(e.target.value.replace(/[^A-Z0-9a-z]+$/, "").toUpperCase())
                                        }
                                        onKeyDown={(e) =>
                                            symbolsArrUpiId.includes(e.key) && e.preventDefault()
                                        }
                                    />
                                </div>
                                <div className="mx-input-wrapper account-field">
                                    <label className="account-lable">Account Type</label>

                                    <select
                                        name="reportType"
                                        // style={{ width: "100%" }}
                                        value={AccountType}
                                        className="custom-select select-type accounttype"
                                        onChange={(e) => setAccountType(e.target.value)}>
                                        <option value="Saving">Saving</option>
                                        <option value="Current">Current</option>
                                    </select>
                                </div>
                            </div>
                        ) : (
                            <div className="mainAccount main_withdrow accountWith"
                                style={{ display: openForm === true ? "" : "none" }}
                            >
                                <div className="mx-input-wrapper account-field asdfghjkl">
                                    <label className="account-lable">
                                        {withType === "PAYTM" ? "Mobile No" : "UPI ID"}
                                    </label>

                                    {withType === "PAYTM" ? (
                                        <input
                                            // type="number"
                                            className="account-input"
                                            value={accountNumber}
                                            onChange={(e) => e.target.value.match(/^[0-9]{0,10}$/) && setAccountNumber(e.target.value)}
                                            // onKeyDown={(e) =>
                                            //     symbolsArrMail.includes(e.key) && e.preventDefault()
                                            // }
                                            onKeyDown={(e) =>
                                                symbolsArrMail.includes(e.key) && e.preventDefault()
                                            }
                                        />
                                    ) : (
                                        <input
                                            // type="text"
                                            className="account-input"
                                            value={accountNumber}
                                            onChange={(e) =>
                                                e.target.value.match(/^[a-zA-Z0-9@]*$/) &&
                                                setAccountNumber(e.target.value)}

                                            // onChange={(e) =>
                                            //     setAccountNumber(
                                            //         e.target.value.replace(
                                            //             /[^a-zA-Z0-9.-]{2, 256}@[^a-zA-Z][a-zA-Z]{2, 64}+$/, ""
                                            //         )
                                            //     )
                                            // }
                                            onKeyDown={(e) =>
                                                symbolsArrUpiId.includes(e.key) && e.preventDefault()
                                            }
                                        />
                                    )}
                                </div>
                                <div className="mx-input-wrapper account-field asdfghjkl">
                                    <label className="account-lable">
                                        {withType === "PAYTM" ? "Name" : "Account Name"}
                                    </label>

                                    <input
                                        type="text"
                                        className="account-input"
                                        value={accountHolderName.trimStart()}
                                        onChange={(e) =>
                                            e.target.value.match(/^[a-zA-Z ]*$/) &&
                                            setAccountHolderName(
                                                e.target.value
                                            )
                                        }
                                        onKeyDown={(e) =>
                                            symbolsArrUpiId.includes(e.key) && e.preventDefault()
                                        }
                                    />
                                </div>
                            </div>
                        )
                    }
                    <div className={openForm ? "" : "d-none"}>
                        <div className="row row5 mt-2">
                            <div className="col-12" style={{ overflow: "scroll" }}>
                                <div className="table-responsive withdrow-table" >
                                    <table
                                        role="table"
                                        aria-busy="false"
                                        aria-colcount={6}
                                        id="_BVID_104"

                                        className="table b-table table-bordered"
                                        style={{
                                            width: withType === "BANK" ? "900px !important" : "500px !important", margin: "auto", border: "1px solid"
                                        }}>

                                        <thead>
                                            <tr role="row" className="account-detail">
                                                <th
                                                    style={{
                                                        backgroundColor: "#1f8067",
                                                        height: "30px",
                                                        color: "white",
                                                        whiteSpace: "nowrap",
                                                        padding: "0px 15px"
                                                    }}
                                                    role="columnheader"
                                                    scope="col"

                                                    className="text-left ">
                                                    Account Number
                                                </th>
                                                <th
                                                    style={{
                                                        backgroundColor: "#1f8067",
                                                        height: "30px",
                                                        color: "white",
                                                        whiteSpace: "nowrap",
                                                        padding: "0px 15px"
                                                    }}
                                                    role="columnheader"
                                                    scope="col"

                                                    className="text-left ">
                                                    Account Name
                                                </th>
                                                <th
                                                    style={{
                                                        backgroundColor: "#1f8067",
                                                        height: "30px",
                                                        color: "white",
                                                        whiteSpace: "nowrap",
                                                        padding: "0px 15px"
                                                    }}
                                                    role="columnheader"
                                                    scope="col"

                                                    className={`text-left ${withType === "BANK" ? "" : "d-none"
                                                        }`}>
                                                    Bank Name
                                                </th>
                                                <th
                                                    style={{
                                                        backgroundColor: "#1f8067",
                                                        height: "30px",
                                                        color: "white",
                                                        whiteSpace: "nowrap",
                                                        padding: "0px 15px"
                                                    }}
                                                    role="columnheader"
                                                    scope="col"

                                                    className={`text-left ${withType === "BANK" ? "" : "d-none"
                                                        }`}>
                                                    IFSC Code
                                                </th>
                                                <th
                                                    style={{
                                                        backgroundColor: "#1f8067",
                                                        height: "30px",
                                                        color: "white",
                                                        whiteSpace: "nowrap",
                                                        padding: "0px 15px"
                                                    }}
                                                    role="columnheader"
                                                    scope="col"

                                                    className={`text-left ${withType === "BANK" ? "" : "d-none"
                                                        }`}>
                                                    Account Type
                                                </th>
                                                <th
                                                    style={{
                                                        backgroundColor: "#1f8067",
                                                        height: "30px",
                                                        color: "white",
                                                        whiteSpace: "nowrap",
                                                        padding: "0px 15px"
                                                    }}
                                                    role="columnheader"
                                                    scope="col"

                                                    className="text-left">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        {getAccountData?.map((item: any) => {
                                            if (item.withdrawType !== withType) return <></>;
                                            return (
                                                <tbody
                                                // className={dataLenth === 0 ? "d-none" : ""}
                                                >
                                                    <tr role="row">

                                                        <td

                                                            style={{

                                                                height: "30px",

                                                            }}
                                                            className="text-left withdraw-data">
                                                            {item.accountNumber}
                                                        </td>
                                                        <td

                                                            style={{

                                                                height: "30px",

                                                            }}
                                                            className="text-left withdraw-data">
                                                            {item.accountHolderName}
                                                        </td>
                                                        <td
                                                            style={{

                                                                height: "30px",

                                                            }}

                                                            className={`text-left withdraw-data ${withType === "BANK" ? "" : "d-none"
                                                                }`}>
                                                            {item?.bankName}
                                                        </td>
                                                        <td
                                                            style={{

                                                                height: "30px",

                                                            }}

                                                            className={`text-left withdraw-data ${withType === "BANK" ? "" : "d-none"
                                                                }`}>
                                                            {item?.ifsc}
                                                        </td>
                                                        <td
                                                            style={{

                                                                height: "30px",

                                                            }}

                                                            className={`text-left withdraw-data ${withType === "BANK" ? "" : "d-none"
                                                                }`}>
                                                            {item?.accountType}
                                                        </td>

                                                        <td
                                                            style={{
                                                                height: "30px",

                                                            }}


                                                            className="text-left">
                                                            <div className="custom-control custom-control-inline custom-radio">
                                                                <input
                                                                    onClick={() =>
                                                                        handleWithdrawData(
                                                                            item.accountNumber,
                                                                            item.accountHolderName,
                                                                            item?.bankName,
                                                                            item?.ifsc,
                                                                            item?.accountType,
                                                                            item?.withdrawType,

                                                                        )
                                                                    }
                                                                    style={{ cursor: "pointer" }} type="radio" checked={radioButton === item.accountNumber ? true : false} name="radio_btn"

                                                                />{" "}
                                                            </div>
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            );
                                        })}

                                    </table>
                                </div>
                            </div>

                            <div className="withdraw_coin_btn" >
                                {isLoading && (
                                    <p className="lodder depositLoading withloading withdraw_deposit">
                                        <i className="fa fa-spinner fa-spin"></i>
                                    </p>
                                )}
                                <button onClick={handleClick}
                                    //   disabled={!openForm}
                                    style={{ cursor: "pointer" }}
                                >
                                    Withdraw Coins
                                </button>
                            </div>
                        </div>
                    </div>

                </div >

                <div className="table-responsive withdrow-table"
                    style={{ overflow: "scroll", padding: "54px 0px" }}>


                    <table
                        role="table"
                        aria-busy="false"
                        aria-colcount={6}
                        className="table b-table table-bordered"
                        id="_BVID_104"
                        style={{ border: "1px solid" }}>


                        <div> </div>

                        <thead>
                            <tr role="row" className="account-detail">
                                <th
                                    role="columnheader"
                                    scope="col"

                                    className="text-left"
                                    style={{
                                        backgroundColor: "#1f8067",
                                        height: "30px",
                                        color: "white", whiteSpace: "nowrap",
                                        padding: "0px 15px"
                                    }}
                                >
                                    Account Number
                                </th>
                                <th
                                    role="columnheader"
                                    scope="col"

                                    className="text-left"
                                    style={{
                                        backgroundColor: "#1f8067",
                                        height: "30px",
                                        color: "white", whiteSpace: "nowrap",
                                        padding: "0px 15px"
                                    }}
                                >
                                    Account Name
                                </th>
                                <th
                                    role="columnheader"
                                    scope="col"

                                    className="text-right"
                                    style={{
                                        backgroundColor: "#1f8067",
                                        height: "30px",
                                        color: "white",
                                        whiteSpace: "nowrap",
                                        padding: "0px 15px"
                                    }}
                                >
                                    Amount
                                </th>
                                <th
                                    role="columnheader"
                                    scope="col"

                                    className="text-left"
                                    style={{
                                        backgroundColor: "#1f8067",
                                        height: "30px",
                                        color: "white",
                                        whiteSpace: "nowrap",
                                        padding: "0px 15px"
                                    }}
                                >
                                    Bank Name/ Address
                                </th>
                                <th
                                    role="columnheader"
                                    scope="col"

                                    className="text-left"
                                    style={{
                                        backgroundColor: "#1f8067",
                                        height: "30px",
                                        color: "white", whiteSpace: "nowrap",
                                        padding: "0px 15px"
                                    }}
                                >
                                    IFSC Code
                                </th>
                                <th
                                    role="columnheader"
                                    scope="col"

                                    className="text-left"
                                    style={{
                                        backgroundColor: "#1f8067",
                                        height: "30px",
                                        color: "white", whiteSpace: "nowrap",
                                        padding: "0px 15px"
                                    }}
                                >
                                    Account Type / Currency
                                </th>
                                <th
                                    role="columnheader"
                                    scope="col"

                                    className="text-left withdraw-data"
                                    style={{
                                        backgroundColor: "#1f8067",
                                        height: "30px",
                                        color: "white", whiteSpace: "nowrap",
                                        padding: "0px 15px"
                                    }}
                                >
                                    Date
                                </th>
                                <th
                                    role="columnheader"
                                    scope="col"

                                    className="text-left"
                                    style={{
                                        backgroundColor: "#1f8067",
                                        height: "30px",
                                        color: "white", whiteSpace: "nowrap",
                                        padding: "0px 15px"
                                    }}
                                >
                                    Remark
                                </th>
                                <th
                                    role="columnheader"
                                    scope="col"

                                    className="text-left"
                                    style={{
                                        backgroundColor: "#1f8067",
                                        height: "30px",
                                        color: "white", whiteSpace: "nowrap",
                                        padding: "0px 15px"
                                    }}
                                >
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {PostwithdrawrequestclientData &&
                                PostwithdrawrequestclientData?.data &&
                                PostwithdrawrequestclientData?.data.map((item: any) => (
                                    <tr role="row">
                                        <td

                                            className="text-left withdraw-data"
                                        >
                                            {item?.accountNumber}
                                        </td>
                                        <td

                                            className="text-left withdraw-data"
                                        >
                                            {item?.accountHolderName}
                                        </td>
                                        <td

                                            className="text-right withdraw-data "
                                        >
                                            {item?.amount}
                                        </td>
                                        <td

                                            className="text-left withdraw-data "
                                        >
                                            {item?.bankName}
                                        </td>
                                        <td

                                            className="text-left withdraw-data "
                                        >
                                            {item?.ifsc}
                                        </td>
                                        <td

                                            className="text-lift withdraw-data"
                                        >
                                            {item?.accountType}
                                        </td>
                                        <td className="text-lift">
                                            {/*  {moment(item?.time).format("MM DD YYYY - HH MM ")}*/}
                                            {item?.time}

                                        </td>

                                        <td

                                            className="text-lift withdraw-data"
                                        >
                                            {item?.remark}
                                        </td>
                                        {item.status === "Pending" ? (
                                            <td style={{ color: "#ffa726" }}>
                                                <div className="pendinggggg">
                                                    <div >

                                                        {item?.status}
                                                    </div>
                                                    <div
                                                    // onClick={() => handlependingg(item?.id)}
                                                    >
                                                        {item?.status === "Pending" ? <button
                                                            // onClick={() => handlependingg(item?.id)} 
                                                            className="handlepennfoifjfi" >
                                                            {/* <IoCloseCircleOutline size={25} color={"black"} /> */}
                                                        </button> : ""}
                                                    </div>
                                                </div>

                                            </td>
                                        ) : item.status === "Rejected" ? (
                                            <td style={{ color: "#f44336" }}>
                                                {item?.status}
                                            </td>
                                        ) : (
                                            <td

                                                style={{ color: "#66bb6a", fontSize: "10px" }}
                                            >
                                                {item?.status}
                                            </td>
                                        )}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

            </div >
            <>
                {/* <Modal
                    open={show}

                    className="custom_wothdraw_pending_popup"
                    // onHide={() => setpendingmodal(false)}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                // centered

                // style={{ width: "30%" }}
                >
                    <div style={{ height: "39px" }}>
                        <span id="contained-modal-title-vcenter">
                            Cancel Request
                            <button
                                //  onClick={handleCloseFancyModal}
                                className="closebtnonpnl" style={{ top: "6px" }}>

                            </button>
                        </span>
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "auto"
                    }}>
                        <div className="modalldatata">
                            <div>
                                Are you sure want to cancel this request ?
                            </div>
                            <div className="butonnnn">
                                <button className="withdraw-popup-btn"
                                // onClick={() => setpendingmodal(false)}
                                >Close</button>
                                <button className="withdraw-popup-btn"
                                // onClick={handlependingsucesss}
                                >Submit</button>
                            </div>
                        </div>
                    </div>
                </Modal> */}
                <Modal
                    open={show}
                    // onHide={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                    style={{ marginTop: "53px" }}
                >
                    <Box className="bet-boxxxxx">
                        <div className="main-count">
                            <div className="headdddd">
                                Do you want to save the Bank Details?
                            </div>
                            <div className="Bet-succccccc">

                                <button
                                    className='btnnn-modal'

                                    onClick={handleClose}>
                                    Cancel
                                </button>
                                <button
                                    className='btnnn-modal'

                                    // variant=""
                                    onClick={handleSaveDetail}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </>
        </>
    )
}

export default WithDraw1

