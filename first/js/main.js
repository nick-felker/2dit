
let titleText = 'На что рассчитывать при взыскании неустойки по ДДУ?' // title Text in Leftside wrapper got by request.
let subTitle = 'Когда застройщик нарушает сроки сдачи по ДДУ, вы как дольщик имеете право требовать неустойку за просрочку, а также компенсацию убытков, вызванных этой просрочкой.<br/><br/>Само собой, застройщику невыгодно добровольно выплачивать вам компенсацию. Когда дело доходит до суда, суд урезает сумму неустойки на основании ст. 333 ГК РФ. Это урезание практически неизбежно. <br/><br/>Основная наша задача состоит в том, чтобы взыскать неустойку по ДДУ в максимальном размере, т.е. избежать сильного ее урезания. Вот что вы можете требовать от застройщика';
// sub title in Leftside wrapper got by request.

const leftSideWrapper = document.getElementsByClassName('ExternalWrapper_LeftText')[0]; // wrapper which consist of title and sub title.
const leftSideWrapperTitle = document.getElementsByClassName('ExternalWrapper_LeftText_Title')[0]; // title in left text wrapper.
const leftSideWrapperSubTitle = document.getElementsByClassName('ExternalWrapper_LeftText_SubTitle')[0]; // sub title in left text wrapper.
const rightSideAccordeonWrapper = document.getElementsByClassName('ExternalWrapper_AccordeonRightBlock')[0]; // external accordeon block.


const accordeonObj = {
    'Выплата неустойки по ДДУ': 'Сверстать блок с аккордеоном. Использовать чистый js без адаптива.  Текст в блоке слева будет приходить из админ панели Wordpress, заполняемый пользователем  в редакторе текста без навык',
    'Компенсация морального вреда': 'Сверстать блок с аккордеоном. Использовать чистый js без адаптива.  Текст в блоке слева будет приходить из админ панели Wordpress, заполняемый пользователем  в редакторе текста без навык',
    'Штраф в размере 50%': 'Сверстать блок с аккордеоном. Использовать чистый js без адаптива.  Текст в блоке слева будет приходить из админ панели Wordpress, заполняемый пользователем  в редакторе текста без навык',
    'Компенсация расходов по аренде жилья': 'Сверстать блок с аккордеоном. Использовать чистый js без адаптива.  Текст в блоке слева будет приходить из админ панели Wordpress, заполняемый пользователем  в редакторе текста без навык',
    'Компенсация убытков по ипотеке': 'Сверстать блок с аккордеоном. Использовать чистый js без адаптива.  Текст в блоке слева будет приходить из админ панели Wordpress, заполняемый пользователем  в редакторе текста без навык',
    'Возмещение иных расходов': 'Сверстать блок с аккордеоном. Использовать чистый js без адаптива.  Текст в блоке слева будет приходить из админ панели Wordpress, заполняемый пользователем  в редакторе текста без навык',
}
// accordeon object got by request.


function hideShowAccordeonText(num) {

}


leftSideWrapperTitle.innerHTML = titleText;
leftSideWrapperSubTitle.innerHTML = subTitle;

+function initAccordeon() {
    for (let elem in accordeonObj) {
        let accordeonElem = document.createElement('div')
        accordeonElem.classList.add('ExternalWrapper_AccordeonRightBlock_Elem');
        let accordeonTitle = document.createElement('p');
        accordeonTitle.classList.add('ExternalWrapper_AccordeonRightBlock_Elem_Text');
        accordeonTitle.innerText = elem;
        let accordeonHidenText = document.createElement('p');
        accordeonHidenText.classList.add('ExternalWrapper_AccordeonRightBlock_Elem_HiddenText');
        accordeonHidenText.innerText = accordeonObj[elem];
        let accordeonArrow = document.createElement('img');
        accordeonArrow.setAttribute("src", "../public/images/Down.svg");
        accordeonArrow.classList.add('ExternalWrapper_AccordeonRightBlock_Elem_Arrow');
        let accordeonElemShowedDataWrapper = document.createElement('div');
        accordeonElemShowedDataWrapper.classList.add('ExternalWrapper_AccordeonRightBlock_Elem_ShowedDataWrapper');
        let accordeonElemHiddenDataWrapper = document.createElement('div');
        accordeonElemHiddenDataWrapper.classList.add('ExternalWrapper_AccordeonRightBlock_Elem_HiddenDataWrapper');
        accordeonElemShowedDataWrapper.append(accordeonTitle);
        accordeonElemShowedDataWrapper.append(accordeonArrow);
        accordeonElemHiddenDataWrapper.append(accordeonHidenText);
        accordeonElem.append(accordeonElemShowedDataWrapper);
        accordeonElem.append(accordeonElemHiddenDataWrapper);
        accordeonElem.addEventListener('click', () => {
            if (accordeonHidenText.classList.contains('ExternalWrapper_AccordeonRightBlock_Elem_HiddenText')) {
                accordeonHidenText.classList.remove('ExternalWrapper_AccordeonRightBlock_Elem_HiddenText');
                accordeonHidenText.classList.add('ExternalWrapper_AccordeonRightBlock_Elem_ShowedText');
            }
            else if (accordeonHidenText.classList.contains('ExternalWrapper_AccordeonRightBlock_Elem_ShowedText')) {
                accordeonHidenText.classList.remove('ExternalWrapper_AccordeonRightBlock_Elem_ShowedText');
                accordeonHidenText.classList.add('ExternalWrapper_AccordeonRightBlock_Elem_HiddenText');
            }
        });
        rightSideAccordeonWrapper.append(accordeonElem);

    }
}()
// put got both text variable in html file.


