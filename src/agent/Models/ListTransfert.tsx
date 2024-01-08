import Client from "./Client";
import Recipient from "./Recipient";
import Statuses from "./Statuses";

export default interface ListTransfert {
    nomRecipient : String ,
    preRecipient : String,
    recipientId : String,
    amount : number,
    feeType : String,
    notificationEnabled : boolean,
    reason: String,
    feeAmount: number,
    notifAmount: number,
    total: number,
}
