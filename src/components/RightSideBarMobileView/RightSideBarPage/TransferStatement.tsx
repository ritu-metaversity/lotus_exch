import "./TransferStatement.css"

const TransferStatement = () => {
  return (
    <div>
      <div className="page-TransferStatement-wrapper">
        <h2 className="page-headerT-S">Transfer Statement</h2>
      </div>
      <div className="transfer-statement-page__content">
        <div className="transfer-statement-page__content-header">
          <span className="transfer-statement-page__content-row-date">Date</span>
          <span className="transfer-statement-page__content-row-description">
            Description
          </span>
          <span className="transfer-statement-page__content-row-amount">Amount</span>
        </div>
        <div className="transfer-statement-page__list-row">
          <div className="transfer-statement-page__content-row-header">
            6th September 2023
          </div>
          <div className="transfer-statement-page__content-group">
            <div className="transfer-statement-page__row">
              <span className="transfer-statement-page__content-row-date">17:39</span>
              <span className="transfer-statement-page__content-row-description">
                Deposit
              </span>
              <span className="transfer-statement-page__content-row-amount green">
                900
              </span>
            </div>
            <div className="transfer-statement-page__row">
              <span className="transfer-statement-page__content-row-date">15:48</span>
              <span className="transfer-statement-page__content-row-description">
                Deposit
              </span>
              <span className="transfer-statement-page__content-row-amount green">
                100
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TransferStatement