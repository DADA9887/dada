// ==UserScript==
// @name         DADA666
// @version      0.1
// @description  WX:taiga888888
// @author       dada
// @match        *://*/*
// @grant        none
// ==/UserScript==
function modifyDateByLabel(labelText, newDate) { 
    let labels = document.querySelectorAll('.block-mypage-member-info-label'); 
    for (let label of labels) {
         if (label.innerText.trim() === labelText) {
             let ddElement = label.closest('dl').querySelector('.block-mypage-member-info-value'); 
            if (ddElement) {
                 ddElement.innerText = newDate;
                 return 'dadaNB'; } } } 
    return 'Not Find'; } 



// 修改 下面的日期 格式 "2025/05/05" 

modifyDateByLabel('生年月日', '2025/05/15');








