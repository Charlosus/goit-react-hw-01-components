import css from "../css modules/TransactionHistory.module.css";

const TransactionHistory = (transactions) => {
    return (
        <div>
            <table className={css.transactionsHistory}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        <tr className={css.row} key={transaction.id}>
                            <td>{}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>

    );
};