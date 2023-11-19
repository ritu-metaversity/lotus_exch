import { useEffect, useState } from "react"
import "./SettingsStack.css"
import { useGetStakeButtonQuery, useSetStakeButtonMutation } from "../../../state/apis/main/apiSlice";

const SettingsStack = () => {
  const [showEditSave, setShowEditSave] = useState(true)
  // const [stakeState, setStakeState] = useState({});
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



  const handleEdit = () => {
    setShowEditSave(false)
  }

  const handleSave = () => {
    setShowEditSave(true)
    triger(buttonValue)
  }

  return (
    <div className="Stack_edit_btn_value_main_Wroper_body">

      <h4>Settings</h4>
      <div className="Stack_edit_btn_value_wrapor">

        <div className="Stack_edit_Name">

          <span >Edit Stakes</span>

        </div>


        <div className="Stack_edit_btn_value_all_Data" >
          {Object.keys(buttonValue).slice(0, 6).map((item) => {
            return (
              <input disabled={showEditSave} className="Stack_edit_btn_value"
                name={item}
                value={buttonValue[item]}
                onChange={handleChange} />

            );
          })}
        </div>


        <div className="Stack_edit_button_wrap">
          {showEditSave === true
            ?

            <button className="Stack_edit_button_EDIT" onClick={handleEdit}> Edit</button> :
            <button className="Stack_edit_button_EDIT" onClick={handleSave}> Save</button>
          }
        </div>
      </div>
    </div>
  )
}

export default SettingsStack