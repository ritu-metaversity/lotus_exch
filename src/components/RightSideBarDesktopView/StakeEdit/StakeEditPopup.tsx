import { useEffect, useState } from "react";
import { useGetStakeButtonQuery, useSetStakeButtonMutation } from "../../../state/apis/main/apiSlice";
import "./StakeEditPopup.css"
const StakeEditPopup = ({ closePopup }: any) => {
    const [triger, { data: AccountStatementRespone }] = useSetStakeButtonMutation()
    const { data: GetAccountStatementRespone } = useGetStakeButtonQuery(undefined)
    console.log(AccountStatementRespone);

    const [buttonValue, setButtonValue] = useState<{ [x: string]: number }>({
        stack1: 0,
        stack2: 0,
        stack3: 0,
        stack4: 0,
        stack5: 0,
        stack6: 0,
        stack7: 0,
        stack8: 0,
        stack9: 0,
        stack10: 0,
    });
    useEffect(() => {
        setButtonValue(GetAccountStatementRespone?.data || {});
    }, [GetAccountStatementRespone?.data]);

    const handleChange = (e: any) => {
        const buttons = { ...buttonValue };
        if (e.target.value < 100000000)
            setButtonValue({ ...buttons, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        // setShowEditSave(true)
        triger(buttonValue)
    }
    const handleClose = () => {
        // setShowEditSave(true)
        closePopup(false)
    }
    return (<>
        <div
        
        className="eddit-stake-wrapper"></div>
        <div className="main_layout_for_desk_stake">
            <div className="inner_for_desk_stake">

                {Object.keys(buttonValue).slice(0, 6).map((item) => {
                    return (
                        <input className="main_imput_desk_stake"
                            name={item}
                            value={buttonValue[item]}
                            onChange={handleChange}

                        />

                    );
                })}

                <div className="stack_cancel_save">

                    <button className="Stack_edit_button_cancel" onClick={handleClose}> Cancel</button>
                    <button className="Stack_edit_button_save" onClick={handleSave}> Save</button>
                </div>
            </div>

        </div></>

    )
}

export default StakeEditPopup