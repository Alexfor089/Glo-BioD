'use strict';

import popupToogleCallForm from './modules/popupToogleCallForm';
import popupToogleCheckForm from './modules/popupToogleCheckForm';
import popupTooglePriceForm from './modules/popupTooglePriceForm';
import tabsCalc from './modules/tabsCalc';
import moreBtn from './modules/moreBtn';
import popupToogleConsulForm from './modules/popupToogleConsulForm';



//Модальное окно - звонок
popupToogleCallForm();
//Модальное окно - скидка 
popupToogleCheckForm();
//Модальное окно - цена со скидкой
popupTooglePriceForm();
//Аккардион - калькулятор
tabsCalc();
//Конпка больше
moreBtn();
//Моадльное окно - консультация 
popupToogleConsulForm();