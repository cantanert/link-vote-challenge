import enums from "../statics/enums";

export default function (payload) {
    localStorage.setItem(enums.localStorageName,JSON.stringify(payload));
}