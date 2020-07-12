import enums from '../statics/enums'

export default function () {
    JSON.parse(localStorage.getItem(enums.localStorageName));
}