const locators = {
LOGIN: {
    USER: '[data-test=email]',
    PASSWORD: '[data-test=passwd]',
    BTN_LOGIN: '.btn'
},

MESSAGE: '.toast-message',

MENU: {
    SETTINGS: '[data-test=menu-settings]',
    CONTAS: '[href="/contas"]',
    RESET: '[href="/reset"]'
},

CONTAS:{
    NOME:'[data-test=nome]',
    BTN_SALVAR: '.btn',
    XP_BTN_ALTERAR: "//table//td[contains(.,'conta teste')]/..//i[@class='far fa-edit']"
}



}

export default locators;