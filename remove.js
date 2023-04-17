// ==UserScript==
// @name         Remove AIPRM__conversation__response class from Chat OpenAI
// @version      1.0
// @description  Remove the AIPRM__conversation__response class from div elements with the markdown class on chat.openai.com
// @match        https://chat.openai.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 选择要观察变化的 DOM 元素
    const targetNode = document.querySelector('body');

    // 创建一个新的 MutationObserver 实例
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {

            // Select all div elements with the markdown class
            const markdownDivs = document.querySelectorAll('div.markdown');

            // Loop through each div element
            markdownDivs.forEach((div) => {
                // Check if the div element has the AIPRM__conversation__response class
                if (div.classList.contains('AIPRM__conversation__response')) {
                    // Remove the AIPRM__conversation__response class from the div element
                    div.classList.remove('AIPRM__conversation__response');
                }
            });
        });
    });

    // 配置 MutationObserver，指定要观察哪些 DOM 变化类型
    const config = { attributes: true, childList: true, subtree: true };

    // 启动 MutationObserver，开始观察 DOM 变化
    observer.observe(targetNode, config);










})();
