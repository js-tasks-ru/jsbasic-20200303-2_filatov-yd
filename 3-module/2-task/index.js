/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
    let transformString = string.replace(/,/g, ' '); 
    let arr = transformString.split(' '); 
    let arrFilter = arr.filter(Number); 
  
    let arrOfNumbers = [];
    for (let i = 0; i < arrFilter.length; i++) {
      arrOfNumbers[i] = Number(arrFilter[i]);
    } 
  
  
    let min = Math.min.apply(0, arrOfNumbers);
    let max = Math.max.apply(0, arrOfNumbers);
  
    return result = {
      min: min,
      max: max,
    };}