import voteLinkStatics from "../statics/vote-link-statics";

export default function (payload) {
    localStorage.setItem(voteLinkStatics.localStorageName,JSON.stringify(payload));
}