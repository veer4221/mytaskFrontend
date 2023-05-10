import { decryptOBJ, encryptOBJ } from "../CriptoJS";
import { LoginAPI, TransactionAPI } from "../networkManger/api";
import { TransactionPayloadAPI, loginPayloadAPI } from "../networkManger/payloadType";
import { toast } from "react-toastify";

export { submitLoginFunction, submitTransactionFunction };
async function submitLoginFunction(values: loginPayloadAPI) {
  try {
    const res = await LoginAPI(values);

    if (res?.data && res?.status === 200) {
      localStorage?.setItem("token", res?.data?.access_token);
      toast.success("login success");
      return true;
    }
    if (res?.data) toast.error(res?.data?.message);
    console.log("res:>", res);
    return false;
  } catch (error: any) {
    console.log(" API Call come execption ... ", error);
    toast.error(error?.response?.data?.message || error?.message);
    return false;
  }
}
async function submitTransactionFunction(values: TransactionPayloadAPI) {
  try {
    console.log("vlaue:>", values);
    console.log("vlaue:>", await encryptOBJ(JSON.stringify(values)));
    const data = await encryptOBJ(JSON.stringify(values));
    console.log("vlaue2:>", await decryptOBJ(data));
    let payload = {
      data: await encryptOBJ(JSON.stringify(values)),
    };

    const res = await TransactionAPI(payload);
    const decryptData = await decryptOBJ(res?.data?.data);
    console.log("result", decryptData);
    toast.success("Transaction success");
    toast.success(JSON.stringify(decryptData));
    return true;
  } catch (error: any) {
    console.log(" API Call come execption ... ", error);
    toast.error(error?.response?.data?.message || error?.message);
    return false;
  }
}
