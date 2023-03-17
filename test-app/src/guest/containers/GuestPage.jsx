import { Button } from "../../shared/components/Button";
import { PageTitle } from "../../shared/components/PageTitle";

export function GuestPage(props) {
    return (
        <div>
            <PageTitle>Guest page</PageTitle>
            <Button onClick={props.onSignIn} value={props.value} />
        </div>
    )
}