import Client from "./Client";
import Recipient from "./Recipient";
import Statuses from "./Statuses";

export default interface Transfert {
    amount:number ,
    client: Client ,
    recipient: Recipient,
    statuses : Statuses[],
}