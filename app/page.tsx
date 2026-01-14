## File: `app/page.tsx`

```tsx
'use client';

import React, { useState, useMemo } from 'react';
import { Search, Volume2, BookOpen, Brain, Home, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const vocabularyData = {
  "Basic Politeness & Social": [
    { en: "Please", uk: "Будь ласка", rom: "Bud' laska", ga: "Le do thoil" },
    { en: "Thank you", uk: "Дякую", rom: "Dyakuyu", ga: "Go raibh maith agat" },
    { en: "Sorry", uk: "Вибачте", rom: "Vybachte", ga: "Tá brón orm" },
    { en: "Excuse me", uk: "Пробачте", rom: "Probachte", ga: "Gabh mo leithscéal" },
    { en: "Hello", uk: "Привіт", rom: "Pryvit", ga: "Dia dhuit" },
    { en: "Hi", uk: "Здрастуйте", rom: "Zdrastuyte", ga: "Haigh" },
    { en: "Goodbye", uk: "До побачення", rom: "Do pobachennya", ga: "Slán" },
    { en: "Bye", uk: "Бувай", rom: "Buvay", ga: "Slán leat" },
    { en: "Yes", uk: "Так", rom: "Tak", ga: "Tá / Sea" },
    { en: "No", uk: "Ні", rom: "Ni", ga: "Níl / Ní hea" },
    { en: "Maybe", uk: "Можливо", rom: "Mozhlyvo", ga: "B'fhéidir" },
    { en: "Help", uk: "Допомога", rom: "Dopomoha", ga: "Cabhair" },
    { en: "Problem", uk: "Проблема", rom: "Problema", ga: "Fadhb" },
    { en: "Good", uk: "Добре", rom: "Dobre", ga: "Go maith" },
    { en: "Bad", uk: "Погано", rom: "Pohano", ga: "Go holc" },
    { en: "Okay", uk: "Гаразд", rom: "Harazd", ga: "Ceart go leor" },
    { en: "Fine", uk: "Добре", rom: "Dobre", ga: "Go breá" },
    { en: "Grand", uk: "Чудово", rom: "Chudovo", ga: "Go hiontach" },
    { en: "Cheers", uk: "Будьмо", rom: "Bud'mo", ga: "Sláinte" }
  ],
  "Question Words": [
    { en: "What", uk: "Що", rom: "Shcho", ga: "Cad" },
    { en: "Where", uk: "Де", rom: "De", ga: "Cá háit" },
    { en: "When", uk: "Коли", rom: "Koly", ga: "Cathain" },
    { en: "Why", uk: "Чому", rom: "Chomu", ga: "Cén fáth" },
    { en: "Who", uk: "Хто", rom: "Khto", ga: "Cé" },
    { en: "How", uk: "Як", rom: "Yak", ga: "Conas" },
    { en: "Which", uk: "Який", rom: "Yakyy", ga: "Cé acu" },
    { en: "Whose", uk: "Чий", rom: "Chyy", ga: "Cé leis" }
  ],
  "Numbers": [
    { en: "Zero", uk: "Нуль", rom: "Nul'", ga: "Náid" },
    { en: "One", uk: "Один", rom: "Odyn", ga: "Aon" },
    { en: "Two", uk: "Два", rom: "Dva", ga: "Dó" },
    { en: "Three", uk: "Три", rom: "Try", ga: "Trí" },
    { en: "Four", uk: "Чотири", rom: "Chotyry", ga: "Ceathair" },
    { en: "Five", uk: "П'ять", rom: "P'yat'", ga: "Cúig" },
    { en: "Six", uk: "Шість", rom: "Shist'", ga: "Sé" },
    { en: "Seven", uk: "Сім", rom: "Sim", ga: "Seacht" },
    { en: "Eight", uk: "Вісім", rom: "Visim", ga: "Ocht" },
    { en: "Nine", uk: "Дев'ять", rom: "Dev'yat'", ga: "Naoi" },
    { en: "Ten", uk: "Десять", rom: "Desyat'", ga: "Deich" },
    { en: "Eleven", uk: "Одинадцять", rom: "Odynadtsyat'", ga: "Aon déag" },
    { en: "Twelve", uk: "Дванадцять", rom: "Dvanadtsyat'", ga: "Dó dhéag" },
    { en: "Thirteen", uk: "Тринадцять", rom: "Trynadtsyat'", ga: "Trí déag" },
    { en: "Fourteen", uk: "Чотирнадцять", rom: "Chotyrnadtsyat'", ga: "Ceathair déag" },
    { en: "Fifteen", uk: "П'ятнадцять", rom: "P'yatnadtsyat'", ga: "Cúig déag" },
    { en: "Sixteen", uk: "Шістнадцять", rom: "Shistnadtsyat'", ga: "Sé déag" },
    { en: "Seventeen", uk: "Сімнадцять", rom: "Simnadtsyat'", ga: "Seacht déag" },
    { en: "Eighteen", uk: "Вісімнадцять", rom: "Visimnadtsyat'", ga: "Ocht déag" },
    { en: "Nineteen", uk: "Дев'ятнадцять", rom: "Dev'yatnadtsyat'", ga: "Naoi déag" },
    { en: "Twenty", uk: "Двадцять", rom: "Dvadtsyat'", ga: "Fiche" },
    { en: "Hundred", uk: "Сто", rom: "Sto", ga: "Céad" },
    { en: "Thousand", uk: "Тисяча", rom: "Tysyacha", ga: "Míle" }
  ],
  "Time & Days": [
    { en: "Today", uk: "Сьогодні", rom: "S'ohodni", ga: "Inniu" },
    { en: "Tomorrow", uk: "Завтра", rom: "Zavtra", ga: "Amárach" },
    { en: "Yesterday", uk: "Вчора", rom: "Vchora", ga: "Inné" },
    { en: "Morning", uk: "Ранок", rom: "Ranok", ga: "Maidin" },
    { en: "Afternoon", uk: "День", rom: "Den'", ga: "Tráthnóna" },
    { en: "Evening", uk: "Вечір", rom: "Vechir", ga: "Tráthnóna" },
    { en: "Night", uk: "Ніч", rom: "Nich", ga: "Oíche" },
    { en: "Monday", uk: "Понеділок", rom: "Ponedilok", ga: "Dé Luain" },
    { en: "Tuesday", uk: "Вівторок", rom: "Vivtorok", ga: "Dé Máirt" },
    { en: "Wednesday", uk: "Середа", rom: "Sereda", ga: "Dé Céadaoin" },
    { en: "Thursday", uk: "Четвер", rom: "Chetver", ga: "Déardaoin" },
    { en: "Friday", uk: "П'ятниця", rom: "P'yatnytsia", ga: "Dé hAoine" },
    { en: "Saturday", uk: "Субота", rom: "Subota", ga: "Dé Sathairn" },
    { en: "Sunday", uk: "Неділя", rom: "Nedilya", ga: "Dé Domhnaigh" }
  ],
  "Food & Drink": [
    { en: "Water", uk: "Вода", rom: "Voda", ga: "Uisce" },
    { en: "Tea", uk: "Чай", rom: "Chay", ga: "Tae" },
    { en: "Coffee", uk: "Кава", rom: "Kava", ga: "Caifé" },
    { en: "Beer", uk: "Пиво", rom: "Pyvo", ga: "Beoir" },
    { en: "Wine", uk: "Вино", rom: "Vyno", ga: "Fíon" },
    { en: "Bread", uk: "Хліб", rom: "Khlib", ga: "Arán" },
    { en: "Milk", uk: "Молоко", rom: "Moloko", ga: "Bainne" },
    { en: "Butter", uk: "Масло", rom: "Maslo", ga: "Im" },
    { en: "Cheese", uk: "Сир", rom: "Syr", ga: "Cáis" },
    { en: "Eggs", uk: "Яйця", rom: "Yaytsia", ga: "Uibheacha" },
    { en: "Meat", uk: "М'ясо", rom: "M'yaso", ga: "Feoil" },
    { en: "Chicken", uk: "Курка", rom: "Kurka", ga: "Sicín" },
    { en: "Fish", uk: "Риба", rom: "Ryba", ga: "Iasc" },
    { en: "Vegetables", uk: "Овочі", rom: "Ovochi", ga: "Glasraí" },
    { en: "Potato", uk: "Картопля", rom: "Kartoplya", ga: "Práta" },
    { en: "Chips (fries)", uk: "Картопля фрі", rom: "Kartoplya fri", ga: "Sceallóga" },
    { en: "Crisps", uk: "Чіпси", rom: "Chipsy", ga: "Brioscaí" },
    { en: "Breakfast", uk: "Сніданок", rom: "Snidanok", ga: "Bricfeasta" },
    { en: "Lunch", uk: "Обід", rom: "Obid", ga: "Lón" },
    { en: "Dinner", uk: "Вечеря", rom: "Vecherya", ga: "Dinnéar" },
    { en: "Restaurant", uk: "Ресторан", rom: "Restoran", ga: "Bialann" },
    { en: "Pub", uk: "Паб", rom: "Pab", ga: "Teach tábhairne" },
    { en: "Café", uk: "Кафе", rom: "Kafe", ga: "Caifé" },
    { en: "Menu", uk: "Меню", rom: "Menyu", ga: "Biachlár" },
    { en: "Bill", uk: "Рахунок", rom: "Rakhunok", ga: "Bille" },
    { en: "Eat", uk: "Їсти", rom: "Yisty", ga: "Ith" },
    { en: "Drink", uk: "Пити", rom: "Pyty", ga: "Ól" },
    { en: "Hot", uk: "Гарячий", rom: "Haryachyy", ga: "Te" },
    { en: "Cold", uk: "Холодний", rom: "Kholodnyy", ga: "Fuar" },
    { en: "Hungry", uk: "Голодний", rom: "Holodnyy", ga: "Ocras" },
    { en: "Thirsty", uk: "Спрагло", rom: "Sprahlo", ga: "Tart" },
    { en: "Delicious", uk: "Смачно", rom: "Smachno", ga: "Blasta" },
    { en: "Full", uk: "Ситий", rom: "Sytyy", ga: "Lán" }
  ],
  "Directions & Location": [
    { en: "Left", uk: "Ліворуч", rom: "Livoruch", ga: "Ar chlé" },
    { en: "Right", uk: "Праворуч", rom: "Pravoruch", ga: "Ar dheis" },
    { en: "Straight", uk: "Прямо", rom: "Pryamo", ga: "Díreach" },
    { en: "Up", uk: "Вгору", rom: "Vhoru", ga: "Suas" },
    { en: "Down", uk: "Вниз", rom: "Vnyz", ga: "Síos" },
    { en: "Here", uk: "Тут", rom: "Tut", ga: "Anseo" },
    { en: "There", uk: "Там", rom: "Tam", ga: "Ansin" },
    { en: "Near", uk: "Близько", rom: "Blyz'ko", ga: "Gar do" },
    { en: "Far", uk: "Далеко", rom: "Daleko", ga: "I bhfad" },
    { en: "Next to", uk: "Поруч з", rom: "Poruch z", ga: "In aice le" },
    { en: "Behind", uk: "Позаду", rom: "Pozadu", ga: "Taobh thiar de" },
    { en: "In front", uk: "Попереду", rom: "Poperedu", ga: "Os comhair" },
    { en: "Street", uk: "Вулиця", rom: "Vulytsya", ga: "Sráid" },
    { en: "Road", uk: "Дорога", rom: "Doroha", ga: "Bóthar" },
    { en: "Building", uk: "Будівля", rom: "Budivlya", ga: "Foirgneamh" },
    { en: "Map", uk: "Карта", rom: "Karta", ga: "Léarscáil" },
    { en: "Address", uk: "Адреса", rom: "Adresa", ga: "Seoladh" },
    { en: "North", uk: "Північ", rom: "Pivnich", ga: "Tuaisceart" },
    { en: "South", uk: "Південь", rom: "Pivden'", ga: "Deisceart" },
    { en: "East", uk: "Схід", rom: "Skhid", ga: "Oirthear" },
    { en: "West", uk: "Захід", rom: "Zakhid", ga: "Iarthar" },
    { en: "Corner", uk: "Кут", rom: "Kut", ga: "Cúinne" },
    { en: "Traffic lights", uk: "Світлофор", rom: "Svitlofor", ga: "Soilse tráchta" },
    { en: "Centre", uk: "Центр", rom: "Tsentr", ga: "Lár" },
    { en: "City centre", uk: "Центр міста", rom: "Tsentr mista", ga: "Lár na cathrach" }
  ],
  "Transportation": [
    { en: "Bus", uk: "Автобус", rom: "Avtobus", ga: "Bus" },
    { en: "Train", uk: "Поїзд", rom: "Poyizd", ga: "Traein" },
    { en: "Taxi", uk: "Таксі", rom: "Taksi", ga: "Tacsaí" },
    { en: "Car", uk: "Автомобіль", rom: "Avtomobil'", ga: "Carr" },
    { en: "Airport", uk: "Аеропорт", rom: "Aeroport", ga: "Aerfort" },
    { en: "Station", uk: "Станція", rom: "Stantsiya", ga: "Stáisiún" },
    { en: "Ticket", uk: "Квиток", rom: "Kvytok", ga: "Ticéad" },
    { en: "Seat", uk: "Місце", rom: "Mistse", ga: "Suíochán" },
    { en: "Driver", uk: "Водій", rom: "Vodiy", ga: "Tiománaí" },
    { en: "Passenger", uk: "Пасажир", rom: "Pasazhyr", ga: "Paisinéir" },
    { en: "Stop", uk: "Зупинка", rom: "Zupynka", ga: "Stad" },
    { en: "Go", uk: "Їхати", rom: "Yikhaty", ga: "Téigh" },
    { en: "Wait", uk: "Чекати", rom: "Chekaty", ga: "Fan" },
    { en: "Fast", uk: "Швидко", rom: "Shvydko", ga: "Tapaidh" },
    { en: "Slow", uk: "Повільно", rom: "Povil'no", ga: "Mall" },
    { en: "Return (ticket)", uk: "Зворотній", rom: "Zvorotniy", ga: "Ticéad fillte" }
  ],
  "Accommodation": [
    { en: "Hotel", uk: "Готель", rom: "Hotel'", ga: "Óstán" },
    { en: "Hostel", uk: "Хостел", rom: "Khostel", ga: "Brú" },
    { en: "Room", uk: "Кімната", rom: "Kimnata", ga: "Seomra" },
    { en: "Bed", uk: "Ліжко", rom: "Lizhko", ga: "Leaba" },
    { en: "Bathroom", uk: "Ванна кімната", rom: "Vanna kimnata", ga: "Seomra folctha" },
    { en: "Shower", uk: "Душ", rom: "Dush", ga: "Cithfholcadán" },
    { en: "Key", uk: "Ключ", rom: "Klyuch", ga: "Eochair" },
    { en: "Reception", uk: "Рецепція", rom: "Retseptsiya", ga: "Fáiltiú" },
    { en: "Check-in", uk: "Реєстрація", rom: "Reyestratsiya", ga: "Seiceáil isteach" },
    { en: "Check-out", uk: "Виїзд", rom: "Vyizd", ga: "Seiceáil amach" },
    { en: "Book", uk: "Бронювати", rom: "Bronyuvaty", ga: "Cuir in áirithe" },
    { en: "Reservation", uk: "Бронювання", rom: "Bronyuvannya", ga: "Áirithint" },
    { en: "Clean", uk: "Чистий", rom: "Chistyy", ga: "Glan" },
    { en: "Dirty", uk: "Брудний", rom: "Brudnyy", ga: "Salach" },
    { en: "Quiet", uk: "Тихий", rom: "Tykhyy", ga: "Ciúin" },
    { en: "Noisy", uk: "Шумний", rom: "Shumnyy", ga: "Callánach" }
  ],
  "Shopping & Money": [
    { en: "Shop", uk: "Магазин", rom: "Mahazyn", ga: "Siopa" },
    { en: "Store", uk: "Крамниця", rom: "Kramnytsia", ga: "Stór" },
    { en: "Buy", uk: "Купувати", rom: "Kupuvaty", ga: "Ceannaigh" },
    { en: "Sell", uk: "Продавати", rom: "Prodavaty", ga: "Díol" },
    { en: "Money", uk: "Гроші", rom: "Hroshi", ga: "Airgead" },
    { en: "Euro", uk: "Євро", rom: "Yevro", ga: "Euro" },
    { en: "Cent", uk: "Цент", rom: "Tsent", ga: "Cent" },
    { en: "Price", uk: "Ціна", rom: "Tsina", ga: "Praghas" },
    { en: "Cost", uk: "Коштувати", rom: "Koshtuvaty", ga: "Costas" },
    { en: "Cheap", uk: "Дешевий", rom: "Deshevyy", ga: "Saor" },
    { en: "Expensive", uk: "Дорогий", rom: "Dorohyy", ga: "Daor" },
    { en: "Pay", uk: "Платити", rom: "Platyty", ga: "Íoc" },
    { en: "Card", uk: "Картка", rom: "Kartka", ga: "Cárta" },
    { en: "Cash", uk: "Готівка", rom: "Hotivka", ga: "Airgead tirim" },
    { en: "Receipt", uk: "Чек", rom: "Chek", ga: "Admháil" },
    { en: "Change", uk: "Здача", rom: "Zdacha", ga: "Sóinseáil" },
    { en: "Open", uk: "Відкритий", rom: "Vidkrytyy", ga: "Oscailte" },
    { en: "Closed", uk: "Зачинений", rom: "Zachynenyy", ga: "Dúnta" },
    { en: "Supermarket", uk: "Супермаркет", rom: "Supermarket", ga: "Ollmhargadh" },
    { en: "Pharmacy", uk: "Аптека", rom: "Apteka", ga: "Poitigéir" },
    { en: "Size", uk: "Розмір", rom: "Rozmir", ga: "Méid" },
    { en: "Color", uk: "Колір", rom: "Kolir", ga: "Dath" },
    { en: "Bag", uk: "Сумка", rom: "Sumka", ga: "Mála" },
    { en: "Trolley (cart)", uk: "Візок", rom: "Vizok", ga: "Tralaí" }
  ],
  "Health & Emergency": [
    { en: "Doctor", uk: "Лікар", rom: "Likar", ga: "Dochtúir" },
    { en: "Hospital", uk: "Лікарня", rom: "Likarnya", ga: "Ospidéal" },
    { en: "Pharmacy", uk: "Аптека", rom: "Apteka", ga: "Poitigéir" },
    { en: "Sick", uk: "Хворий", rom: "Khvoryy", ga: "Tinn" },
    { en: "Pain", uk: "Біль", rom: "Bil'", ga: "Pian" },
    { en: "Hurt", uk: "Боліти", rom: "Bolity", ga: "Gortaigh" },
    { en: "Medicine", uk: "Ліки", rom: "Liky", ga: "Cógas" },
    { en: "Tablet", uk: "Таблетка", rom: "Tabletka", ga: "Piollaire" },
    { en: "Emergency", uk: "Надзвичайна ситуація", rom: "Nadzvychayna sytuatsiya", ga: "Éigeandáil" },
    { en: "Ambulance", uk: "Швидка допомога", rom: "Shvydka dopomoha", ga: "Otharcharr" },
    { en: "Police", uk: "Поліція", rom: "Politsiya", ga: "Gardaí" },
    { en: "Fire", uk: "Пожежа", rom: "Pozhezha", ga: "Dóiteán" },
    { en: "Danger", uk: "Небезпека", rom: "Nebezpeka", ga: "Contúirt" },
    { en: "Safe", uk: "Безпечний", rom: "Bezpechnyy", ga: "Sábháilte" },
    { en: "Dangerous", uk: "Небезпечний", rom: "Nebezpechnyy", ga: "Contúirteach" },
    { en: "Toilet", uk: "Туалет", rom: "Tualet", ga: "Leithreas" },
    { en: "Tissue", uk: "Серветка", rom: "Servetka", ga: "Ciarsúr páipéir" }
  ],
  "Essential Verbs": [
    { en: "Be", uk: "Бути", rom: "Buty", ga: "Bí" },
    { en: "Have", uk: "Мати", rom: "Maty", ga: "Bíonn" },
    { en: "Do", uk: "Робити", rom: "Robyty", ga: "Déan" },
    { en: "Make", uk: "Робити", rom: "Robyty", ga: "Déan" },
    { en: "Go", uk: "Йти", rom: "Yty", ga: "Téigh" },
    { en: "Come", uk: "Приходити", rom: "Prykodyty", ga: "Tar" },
    { en: "Stay", uk: "Залишатися", rom: "Zalyshiatysya", ga: "Fan" },
    { en: "Leave", uk: "Йти/Виїжджати", rom: "Yty/Vyyizhdzhaty", ga: "Fág" },
    { en: "Want", uk: "Хотіти", rom: "Khotiaty", ga: "Ba mhaith liom" },
    { en: "Need", uk: "Потребувати", rom: "Potrebuvaty", ga: "Teastaíonn" },
    { en: "Like", uk: "Подобатися", rom: "Podobatysya", ga: "Is maith liom" },
    { en: "Know", uk: "Знати", rom: "Znaty", ga: "A fhios agam" },
    { en: "See", uk: "Бачити", rom: "Bachyty", ga: "Feic" },
    { en: "Look", uk: "Дивитися", rom: "Dyvytysya", ga: "Breathnaigh" },
    { en: "Hear", uk: "Чути", rom: "Chuty", ga: "Clois" },
    { en: "Listen", uk: "Слухати", rom: "Slukhaty", ga: "Éist" },
    { en: "Speak", uk: "Говорити", rom: "Hovoryty", ga: "Labhair" },
    { en: "Say", uk: "Сказати", rom: "Skazaty", ga: "Abair" },
    { en: "Tell", uk: "Розповідати", rom: "Rozpovidaty", ga: "Inis" },
    { en: "Ask", uk: "Питати", rom: "Pytaty", ga: "Fiafraigh" },
    { en: "Give", uk: "Давати", rom: "Davaty", ga: "Tabhair" },
    { en: "Take", uk: "Брати", rom: "Braty", ga: "Tóg" },
    { en: "Get", uk: "Отримати", rom: "Otrymaty", ga: "Faigh" },
    { en: "Put", uk: "Класти", rom: "Klasty", ga: "Cuir" },
    { en: "Open", uk: "Відкривати", rom: "Vidkryvaty", ga: "Oscail" },
    { en: "Close", uk: "Закривати", rom: "Zakryvaty", ga: "Dún" },
    { en: "Start", uk: "Починати", rom: "Pochynaty", ga: "Tosaigh" },
    { en: "Stop", uk: "Зупинятися", rom: "Zupyniatysya", ga: "Stop" },
    { en: "Work", uk: "Працювати", rom: "Pratsyuvaty", ga: "Oibrigh" },
    { en: "Live", uk: "Жити", rom: "Zhyty", ga: "Cónaigh" },
    { en: "Sleep", uk: "Спати", rom: "Spaty", ga: "Codail" },
    { en: "Wake", uk: "Прокидатися", rom: "Prokydatysya", ga: "Dúisigh" }
  ],
  "Essential Nouns": [
    { en: "Person", uk: "Людина", rom: "Lyudyna", ga: "Duine" },
    { en: "People", uk: "Люди", rom: "Lyudy", ga: "Daoine" },
    { en: "Man", uk: "Чоловік", rom: "Cholovik", ga: "Fear" },
    { en: "Woman", uk: "Жінка", rom: "Zhinka", ga: "Bean" },
    { en: "Child", uk: "Дитина", rom: "Dytyna", ga: "Páiste" },
    { en: "Baby", uk: "Немовля", rom: "Nemovlya", ga: "Leanbh" },
    { en: "Family", uk: "Сім'я", rom: "Sim'ya", ga: "Teaghlach" },
    { en: "House", uk: "Будинок", rom: "Budynok", ga: "Teach" },
    { en: "Home", uk: "Дім", rom: "Dim", ga: "Baile" },
    { en: "Door", uk: "Двері", rom: "Dveri", ga: "Doras" },
    { en: "Window", uk: "Вікно", rom: "Vikno", ga: "Fuinneog" },
    { en: "Phone", uk: "Телефон", rom: "Telefon", ga: "Guthán" },
    { en: "Computer", uk: "Комп'ютер", rom: "Komp'yuter", ga: "Ríomhaire" },
    { en: "Internet", uk: "Інтернет", rom: "Internet", ga: "Idirlíon" },
    { en: "Book", uk: "Книга", rom: "Knyha", ga: "Leabhar" },
    { en: "Pen", uk: "Ручка", rom: "Ruchka", ga: "Peann" },
    { en: "Paper", uk: "Папір", rom: "Papir", ga: "Páipéar" },
    { en: "Bag", uk: "Сумка", rom: "Sumka", ga: "Mála" },
    { en: "Clothes", uk: "Одяг", rom: "Odyah", ga: "Éadaí" },
    { en: "Shoes", uk: "Взуття", rom: "Vzuttya", ga: "Bróga" },
    { en: "Weather", uk: "Погода", rom: "Pohoda", ga: "Aimsir" },
    { en: "Rain", uk: "Дощ", rom: "Doshch", ga: "Báisteach" },
    { en: "Sun", uk: "Сонце", rom: "Sontse", ga: "Grian" },
    { en: "Time", uk: "Час", rom: "Chas", ga: "Am" },
    { en: "Day", uk: "День", rom: "Den'", ga: "Lá" },
    { en: "Week", uk: "Тиждень", rom: "Tyzhden'", ga: "Seachtain" },
    { en: "Month", uk: "Місяць", rom: "Misyats'", ga: "Mí" },
    { en: "Year", uk: "Рік", rom: "Rik", ga: "Bliain" }
  ],
  "Descriptive Words": [
    { en: "Big", uk: "Великий", rom: "Velykyy", ga: "Mór" },
    { en: "Small", uk: "Малий", rom: "Malyy", ga: "Beag" },
    { en: "Long", uk: "Довгий", rom: "Dovhyy", ga: "Fada" },
    { en: "Short", uk: "Короткий", rom: "Korotkyy", ga: "Gearr" },
    { en: "New", uk: "Новий", rom: "Novyy", ga: "Nua" },
    { en: "Old", uk: "Старий", rom: "Staryy", ga: "Sean" },
    { en: "Young", uk: "Молодий", rom: "Molodyy", ga: "Óg" },
    { en: "Hot", uk: "Гарячий", rom: "Haryachyy", ga: "Te" },
    { en: "Cold", uk: "Холодний", rom: "Kholodnyy", ga: "Fuar" },
    { en: "Warm", uk: "Теплий", rom: "Teplyy", ga: "Te" },
    { en: "Cool", uk: "Прохолодний", rom: "Prokholodnyy", ga: "Fionnuar" },
    { en: "Easy", uk: "Легкий", rom: "Lehkyy", ga: "Éasca" },
    { en: "Difficult", uk: "Важкий", rom: "Vazhkyy", ga: "Deacair" },
    { en: "Important", uk: "Важливий", rom: "Vazhlyvyy", ga: "Tábhachtach" },
    { en: "Beautiful", uk: "Гарний", rom: "Harnyy", ga: "Álainn" },
    { en: "Ugly", uk: "Потворний", rom: "Potvornyy", ga: "Granna" },
    { en: "Happy", uk: "Щасливий", rom: "Shchaslyvyy", ga: "Sona" },
    { en: "Sad", uk: "Сумний", rom: "Sumnyy", ga: "Brónach" },
    { en: "Angry", uk: "Сердитий", rom: "Serdytyy", ga: "Feargach" },
    { en: "Tired", uk: "Втомлений", rom: "Vtomlennyy", ga: "Tuirseach" },
    { en: "Busy", uk: "Зайнятий", rom: "Zaynyatyy", ga: "Gnóthach" },
    { en: "Free", uk: "Вільний", rom: "Vil'nyy", ga: "Saor" }
  ],
  "Irish-Specific": [
    { en: "Craic (fun)", uk: "Веселощі", rom: "Veseloshchi", ga: "Craic" },
    { en: "Sláinte (cheers)", uk: "Будьмо", rom: "Bud'mo", ga: "Sláinte" },
    { en: "Fáilte (welcome)", uk: "Ласкаво просимо", rom: "Laskavo prosymo", ga: "Fáilte" },
    { en: "Garda (police)", uk: "Поліція", rom: "Politsiya", ga: "Garda" },
    { en: "Jacks (toilet)", uk: "Туалет", rom: "Tualet", ga: "An leithreas" },
    { en: "Your man/woman", uk: "Той чоловік/жінка", rom: "Toy cholovik/zhinka", ga: "An fear sin/bean sin" },
    { en: "Deadly (excellent)", uk: "Чудово", rom: "Chudovo", ga: "Ar dóigh" },
    { en: "Sound (good)", uk: "Класно", rom: "Klasno", ga: "Go maith" }
  ]
};

const phrases = [
  { en: "Where is...?", uk: "Де знаходиться...?", rom: "De znakhodyt'sya...?", ga: "Cá bhfuil...?" },
  { en: "How much?", uk: "Скільки коштує?", rom: "Skil'ky koshtuye?", ga: "Cé mhéad?" },
  { en: "I don't understand", uk: "Я не розумію", rom: "Ya ne rozumiyu", ga: "Ní thuigim" },
  { en: "Can you help me?", uk: "Ви можете мені допомогти?", rom: "Vy mozhete meni dopomohty?", ga: "An féidir cabhrú liom?" },
  { en: "I'm lost", uk: "Я заблукав/заблукала", rom: "Ya zablukav/zablukala", ga: "Tá mé ar strae" }
];

export default function IrishEnglishLearner() {
  const [mode, setMode] = useState('browse');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showUkrainian, setShowUkrainian] = useState(true);
  const [showRomanization, setShowRomanization] = useState(true);
  const [showIrish, setShowIrish] = useState(true);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState('');
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });
  const [learnedWords, setLearnedWords] = useState(new Set());

  const allWords = useMemo(() => {
    const words = [];
    Object.entries(vocabularyData).forEach(([category, items]) => {
      items.forEach(item => {
        words.push({ ...item, category });
      });
    });
    return words;
  }, []);

  const filteredWords = useMemo(() => {
    return allWords.filter(word => {
      const matchesSearch = searchTerm === '' || 
        word.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.uk.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.rom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.ga.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || word.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [allWords, searchTerm, selectedCategory]);

  const speak = (text: string, lang = 'en-IE') => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleLearned = (word: any) => {
    const newLearned = new Set(learnedWords);
    const key = `${word.en}-${word.uk}`;
    if (newLearned.has(key)) {
      newLearned.delete(key);
    } else {
      newLearned.add(key);
    }
    setLearnedWords(newLearned);
  };

  const renderBrowseMode = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="all">All Categories</option>
          {Object.keys(vocabularyData).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 flex-wrap">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showIrish}
            onChange={(e) => setShowIrish(e.target.checked)}
            className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
          />
          <span className="text-sm">Show Gaeilge 🇮🇪</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showUkrainian}
            onChange={(e) => setShowUkrainian(e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm">Show Українська 🇺🇦</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showRomanization}
            onChange={(e) => setShowRomanization(e.target.checked)}
            className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
          />
          <span className="text-sm">Show Romanization</span>
        </label>
      </div>

      <div className="grid gap-3">
        {filteredWords.map((word, idx) => {
          const key = `${word.en}-${word.uk}`;
          const isLearned = learnedWords.has(key);
          return (
            <div key={idx} className={`p-4 rounded-lg border-2 transition-all ${isLearned ? 'bg-green-50 border-green-300' : 'bg-white border-gray-200'}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-semibold text-gray-900">{word.en}</span>
                    <button
                      onClick={() => speak(word.en, 'en-IE')}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      aria-label="Pronounce English"
                    >
                      <Volume2 className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  {showIrish && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base text-green-700 font-medium">{word.ga}</span>
                      <button
                        onClick={() => speak(word.ga, 'ga-IE')}
                        className="p-1 hover:bg-green-50 rounded transition-colors"
                        aria-label="Pronounce Irish"
                      >
                        <Volume2 className="w-4 h-4 text-green-600" />
                      </button>
                    </div>
                  )}
                  {showUkrainian && (
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base text-blue-700">{word.uk}</span>
                      <button
                        onClick={() => speak(word.uk, 'uk-UA')}
                        className="p-1 hover:bg-blue-50 rounded transition-colors"
                        aria-label="Pronounce Ukrainian"
                      >
                        <Volume2 className="w-4 h-4 text-blue-600" />
                      </button>
                    </div>
                  )}
                  {showRomanization && (
                    <div className="text-sm text-gray-500 italic">{word.rom}</div>
                  )}
                  <div className="text-xs text-gray-400 mt-1">{word.category}</div>
                </div>
                <button
                  onClick={() => toggleLearned(word)}
                  className={`p-2 rounded-full transition-colors ${isLearned ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                  aria-label="Mark as learned"
                >
                  <Check className="w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredWords.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No words found. Try a different search or category.
        </div>
      )}
    </div>
  );

  const renderFlashcardMode = () => {
    const word = filteredWords[flashcardIndex];
    if (!word) return <div className="text-center py-12">No words available for flashcards.</div>;

    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6 text-sm text-gray-600">
          Card {flashcardIndex + 1} of {filteredWords.length}
        </div>
        <div 
          className="bg-white rounded-2xl shadow-xl p-12 min-h-80 flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl transition-shadow"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {!showAnswer ? (
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-4">{word.en}</div>
              <button
                onClick={(e) => { e.stopPropagation(); speak(word.en, 'en-IE'); }}
                className="p-3 bg-green-100 hover:bg-green-200 rounded-full transition-colors"
              >
                <Volume2 className="w-6 h-6 text-green-700" />
              </button>
              <div className="mt-8 text-gray-500">Click to reveal translations</div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              {showIrish && (
                <div>
                  <div className="text-2xl font-bold text-green-700 mb-2">🇮🇪 {word.ga}</div>
                  <button
                    onClick={(e) => { e.stopPropagation(); speak(word.ga, 'ga-IE'); }}
                    className="p-2 bg-green-100 hover:bg-green-200 rounded-full transition-colors"
                  >
                    <Volume2 className="w-5 h-5 text-green-700" />
                  </button>
                </div>
              )}
              {showUkrainian && (
                <div>
                  <div className="text-2xl font-bold text-blue-700 mb-1">🇺🇦 {word.uk}</div>
                  {showRomanization && <div className="text-lg text-gray-600 italic mb-2">{word.rom}</div>}
                  <button
                    onClick={(e) => { e.stopPropagation(); speak(word.uk, 'uk-UA'); }}
                    className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors"
                  >
                    <Volume2 className="w-5 h-5 text-blue-700" />
                  </button>
                </div>
              )}
              <div className="mt-4 text-sm text-gray-500">{word.category}</div>
            </div>
          )}
        </div>
        
        <div className="flex justify-between mt-8">
          <button
            onClick={() => {
              setFlashcardIndex(Math.max(0, flashcardIndex - 1));
              setShowAnswer(false);
            }}
            disabled={flashcardIndex === 0}
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <button
            onClick={() => {
              setFlashcardIndex(Math.min(filteredWords.length - 1, flashcardIndex + 1));
              setShowAnswer(false);
            }}
            disabled={flashcardIndex === filteredWords.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  };

  const renderQuizMode = () => {
    const word = filteredWords[quizIndex];
    if (!word) return <div className="text-center py-12">No words available for quiz.</div>;

    const checkAnswer = () => {
      const isCorrect = quizAnswer.toLowerCase().trim() === word.uk.toLowerCase().trim() ||
                        quizAnswer.toLowerCase().trim() === word.ga.toLowerCase().trim();
      setQuizScore({
        correct: quizScore.correct + (isCorrect ? 1 : 0),
        total: quizScore.total + 1
      });
      
      setTimeout(() => {
        if (quizIndex < filteredWords.length - 1) {
          setQuizIndex(quizIndex + 1);
          setQuizAnswer('');
        } else {
          alert(`Quiz complete! Score: ${quizScore.correct + (isCorrect ? 1 : 0)}/${quizScore.total + 1}`);
          setQuizIndex(0);
          setQuizScore({ correct: 0, total: 0 });
          setQuizAnswer('');
        }
      }, 1500);
    };

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-6">
            <div className="text-sm text-gray-600 mb-2">
              Question {quizIndex + 1} of {filteredWords.length}
            </div>
            <div className="text-lg font-semibold text-green-700">
              Score: {quizScore.correct} / {quizScore.total}
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="text-3xl font-bold text-gray-900 mb-4">{word.en}</div>
            <button
              onClick={() => speak(word.en, 'en-IE')}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <Volume2 className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              value={quizAnswer}
              onChange={(e) => setQuizAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
              placeholder="Type in Irish or Ukrainian..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
            />
            <button
              onClick={checkAnswer}
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold transition-colors"
            >
              Check Answer
            </button>
            <div className="text-sm text-center text-gray-500">
              Accepted: {word.ga} or {word.uk}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPhrasesSection = () => (
    <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-green-600" />
        Essential Phrases
      </h3>
      <div className="grid gap-3">
        {phrases.map((phrase, idx) => (
          <div key={idx} className="p-4 bg-white rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-gray-900">{phrase.en}</span>
              <button
                onClick={() => speak(phrase.en, 'en-IE')}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <Volume2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            {showIrish && (
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-700 font-medium">🇮🇪 {phrase.ga}</span>
                <button
                  onClick={() => speak(phrase.ga, 'ga-IE')}
                  className="p-1 hover:bg-green-50 rounded transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-green-600" />
                </button>
              </div>
            )}
            {showUkrainian && (
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-700">🇺🇦 {phrase.uk}</span>
                <button
                  onClick={() => speak(phrase.uk, 'uk-UA')}
                  className="p-1 hover:bg-blue-50 rounded transition-colors"
                >
                  <Volume2 className="w-4 h-4 text-blue-600" />
                </button>
              </div>
            )}
            {showRomanization && (
              <div className="text-sm text-gray-500 italic">{phrase.rom}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Learn English for Ireland 🇮🇪
          </h1>
          <p className="text-gray-600">English - Gaeilge - Українська</p>
          <p className="text-sm text-gray-500 mt-2">293 Essential Words for Daily Life</p>
        </header>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setMode('browse')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              mode === 'browse' 
                ? 'bg-green-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Home className="w-5 h-5" />
            Browse
          </button>
          <button
            onClick={() => { setMode('flashcard'); setFlashcardIndex(0); setShowAnswer(false); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              mode === 'flashcard' 
                ? 'bg-green-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Flashcards
          </button>
          <button
            onClick={() => { setMode('quiz'); setQuizIndex(0); setQuizAnswer(''); setQuizScore({ correct: 0, total: 0 }); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
              mode === 'quiz' 
                ? 'bg-green-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Brain className="w-5 h-5" />
            Quiz
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          {mode === 'browse' && renderBrowseMode()}
          {mode === 'flashcard' && renderFlashcardMode()}
          {mode === 'quiz' && renderQuizMode()}
        </div>

        {mode === 'browse' && renderPhrasesSection()}

        <footer className="text-center text-sm text-gray-600 mt-8 pb-8">
          <p>Practice daily for best results! 🌟</p>
          <p className="mt-2">Learned: {learnedWords.size} / {allWords.length} words</p>
          <p className="mt-2 text-xs text-gray-500">Three languages, one journey 🇮🇪 🇺🇦</p>
        </footer>
      </div>
    </div>
  );
}
