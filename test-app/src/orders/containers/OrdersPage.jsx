import { PageTitle } from "../../shared/components/PageTitle";

export function OrdersPage(props) {
    return (
        <div>
            <PageTitle>Orders Page</PageTitle>
            <div>It's a Pizza!</div>
            <button onClick={props.onSignOut}>Sign Out</button>
        </div>
    )
}