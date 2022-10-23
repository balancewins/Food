<b>#Food</b>

Мой первый проект, разработанный с нуля.<br>
Для эмуляции запросов на сервер используется <i>fake REST API</i>.<br>

<b>$ npx json-server db.json</b>

Проект сделан на основе настраиваемых модулей.<br>
Собран с помощью <i>webpack</i>.

<b>js/modules/:</b>

1. <b>calc()</b>:<br>
Калькулятор калорий. Также записывает последние выбранные интерактивные элементы в localStorage.

2. <b>cards()</b>:<br>
Рендерит карточки товаров из заданных классов, обращаясь сперва к api https://cdn.cur.su/api/latest.json для получения актуального курса валют, а далее к массиву menu из db.json, используя самописную функцию getResourses на основе fetch из services/services.js

3. <b>forms(formSelector, timer)</b>:<br>
Можно задать необходимые селекторы форм, а также таймер, определяющий через сколько всплывёт модальное окно.<br>
В случае, если пользователь в течении заданного таймера самостоятельно воспользовался формой отправки данных, таймер сбрасывается.<br>
Форма постит данные в массив request db.json

4. <b>modalWindow(triggerSelector, modalSelector, timer)</b>:<br>
Через triggerSelector задаются кнопки, вызывающие появление modalSelector. timer работает аналогично forms.

5. <b>slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field})</b>:<br>
Слайдер реализован методом карусели.<br>
container - общий контейнер, где находится вся вёрстка карусели.<br>
slide - слайды с изображениями.<br>
nextArrow и prevArrow - кнопки следующего и предыдущего слайда.<br>
totalCounter и currentCounter - селекторы с номерами текущего слайда и общего количества слайдов.<br>
wrapper - подложка всех слайдов, скрывающая изображения вне фокуса.<br>
field - подложка для прокрутки слайдов.<br>

6. <b>tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass)</b>:<br>
tabsSelector - коллекция кнопок выбора отображаемого контента.<br>
tansContentSelector - коллекция элементов контента.<br>
tabsParentSelector - родительский селектор коллекции кнопок для делегирования события потомкам.<br>
activeClass - класс активности, применяемый к выбранному элементу.<br>

7. <b>timer(id, deadline)</b>:<br>
id - селектор таймера на странице.<br>
deadline - дата окончания таймера.<br>
