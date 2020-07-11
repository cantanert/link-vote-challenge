import voteLinkStatics from '../statics/vote-link-statics'

export default function () {
    JSON.parse(localStorage.getItem(voteLinkStatics.localStorageName));
}