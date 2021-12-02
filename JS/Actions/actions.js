
import { INCREMENT_COUNTER } from "../Constants/actions-types";

export const incrementCounter = (payload) => ({
    type: INCREMENT_COUNTER,
    payload
});