/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    str=str.toUpperCase();
    if (str.includes('1XBET') || str.includes('XXX')) {return true;
    }
    else return false;
}


