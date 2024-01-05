import Client from "./Client";
import Recipient from "./Recipient";
import Statuses from "./Statuses";

export default interface ListTransfert {
    recipientId : String,
    amount : number,
    feeType : String,
    notificationEnabled : boolean,
    reason: String,
}