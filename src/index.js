"use strict";

import tabsCalc from "./modules/tabsCalc";
import moreBtn from "./modules/moreBtn";
import tabs from "./modules/tabs";
import popupsAll from "./modules/popupsAll";
import mySendFormCalc from "./modules/sendFormAll";

//Аккардион - калькулятор
tabsCalc();
//Конпка больше
moreBtn();
//Аккардион - внизу
tabs();
//Отправка форм
mySendFormCalc.start();
//Все попапы
popupsAll();