import Top from './components/top';
import Card from './components/card';
import Pagination from './components/bot';
import React, { useEffect, useState } from "react";
import './components/styles/App.css';
import Singmod from './components/singmod';
import Regmod from './components/regmod';
import MyModal from './components/MyModal';
import MyButton from './components/MyButton';

const arrayCards = [
  {
    id: 1, title: 'ЗЕВС', tags: 'Служба безпеки, монтаж технічних засобів безпеки', town: 'Одеса', site: 'zevs.ua', body: 'Агентство Безпеки «ЗЕВС» – пропонує арсенал практичних рішень щодо забезпечення технічного, пультового та фізичного захисту будь-яких об`єктів та приватних осіб з використанням сучасних технологій та обладнання. Кожне рішення  агентства, відповідає світовим стандартам захисту.',
    basesite: 'ohorona@zevs.com ', basephone: '+380 (48) 738 7777, +380 (67) 5555 911', img: '/compimg/zeus.png'
  },
  {
    id: 2, title: 'Венбест', tags: 'Служба безпеки, монтаж технічних засобів безпеки', town: 'Одеса, Київ, Харків, Миколаїв, Дніпро і тд..', site: 'venbest.ua', body: 'Венбест є найбільшою в Україні недержавною охоронною структурою, що надає повний спектр послуг безпеки.Охоронному сервісу ВЕНБЕСТ довіряють банки, мережеві магазини, АЗК, поштові сервіси та багато інших як великі, так і маленькі.', basesite: 'office_n@venbest.com.ua', basephone: '+380 800 218 251, +380 800 306 300', img: '/compimg/venbest.png'
  },
  { id: 3, title: 'Карабінер', tags: 'Служба безпеки, монтаж технічних засобів безпеки', town: 'Одеса', site: 'karabiner.ua', body: 'Охоронна служба “Карабинер” надає повний спектр послуг із захисту майна та життя, забезпечуючи високий рівень безпеки та конфіденційності.Компанія існує з 1996 року, завдяки чому ії багаторічний досвід роботи дозволяє безпомилково оцінювати обстановку на конкретному об’єкті та припиняти загрозу безпеці майна.', basesite: 'office@karabiner.ua', basephone: '+38048 785 59 30, +38067 488 26 06' },
  { id: 4, title: 'Шериф', tags: 'Служба безпеки, монтаж технічних засобів безпеки', town: 'Київ, Львів, Рівне, Чернівці', site: 'sheriff.com.ua', body: 'Холдинг "Шериф" надає комплекс послуг із забезпечення безпеки об`єктів різної складності та масштабу, супроводу вантажів, охорони інкасаторів, приватних осіб, масових заходів та інше.', basesite: 'pr@sheriff.com.ua', basephone: '+380 800 202 837' },
  { id: 5, title: 'Гепард', tags: 'Служба безпеки, монтаж технічних засобів безпеки', town: 'Одеса', site: 'gepard.od.ua', body: 'Гепард НДСО - ​це злагоджений та перевірений колектив професіоналів, що забезпечує кваліфіковану та багатопрофільну охорону в місті Одесі та області, а також надає на найвищому рівні юридичні та детективні послуги.', basesite: '', basephone: '+380-675-51-18-28, +380-637-62-88-40' },
  { id: 6, title: 'Легіон', tags: 'Служба безпеки, монтаж технічних засобів безпеки', town: 'Ужгород, Закарпаття', site: 'legion.com.ua', body: 'Компанія пропонує послуги, пов’язані з безпекою та охороною. При цьому до кожного клієнта підходить індивідуально. Нею користуються 1500 клієнтів.', basesite: '', basephone: '+38 050 732-29-00, +38 067 679-69-97' },
  { id: 7, title: 'Центр', tags: 'Служба безпеки, монтаж технічних засобів безпеки', town: 'Одеса, Київ, Миколаїв', site: 'centr.od.ua', body: 'Компанія працює 24 роки. Надає весь спектр охоронних послуг: від охоронно-пожежної сигналізації до особистої охорони ', basesite: 'info@centr.od.ua', basephone: '+380 800 21-911-0' },
  { id: 8, title: 'Грифон', tags: 'Служба безпеки, монтаж технічних засобів безпеки', town: 'Одеса', site: 'grifon.od.ua', body: 'Агентство безпеки «Грифон-СБ» пропонує Вам комплексну безпеку та надає пакет послуг, у якому є все, що необхідно для забезпечення безпеки фізичних осіб, а також суб`єктів підприємницької діяльності різних форм власності', basesite: 'grifon.sb@gmail.com', basephone: '+38 068 750 83 80, +38 048 787-64-76' },
  { id: 9, title: 'HR-SECURITY ', tags: 'Кадрова безпека', town: 'Київ', site: 'https://hr-security.ua/ua/about/', body: 'HR-SECURITY - перша спеціалізована компанія з виявлення брехні. З 2010 р. компанія проводить тестування на поліграфі. Спеціалізується на вирішенні питань знаймом і перевіркою працівників', basesite: 'info@hr-security.ua', basephone: '+38 (044) 351 16 00 ' },
  { id: 10, title: 'Ізумруд', tags: 'Кадрова безпека', town: 'Кривий Ріг', site: '', body: 'Компанія «Ізумруд» пропонує комплекс послуг з роботи з персоналом у Кривому Розі. Рекрутинг – підбір персоналу. Перевірка на детекторі брехні.', basesite: '', basephone: '+380 (67) 295-47-22' },
  { id: 11, title: 'Прєм`єр', tags: 'Інформаційна, промислова безпека', town: 'Київ', site: 'https://premier-alliance.biz/ua/', body: '«ПРЕМ`ЄР-АЛЬЯНС» - це група компаній безпеки, створена в 2006 році висококваліфікованими фахівцями в області розслідувань та інформаційної, технічної, військової, економічної безпеки', basesite: '', basephone: '+38 (068) 38 38 111' },
  { id: 12, title: 'АЛАДДИН', tags: 'Інформаційна, кібербезпека', town: 'Київ ', site: 'https://www.ealaddin.com.ua/', body: 'АЛАДДІН СЕК’ЮРІТІ СОЛЮШЕНС, ТОВ Ключі захисту програмного забезпечення / Системи комплексного забезпечення проактивної безпеки / Персональні засоби строгої аутентифікації та зберігання даних / Засоби антивірусного захисту', basesite: '', basephone: '+380443313223 ' },
  { id: 13, title: 'NIX', tags: 'Кібербезпека', town: 'Харків', site: 'https://www.nixsolutions.com/', body: 'Протягом довгого часу однією з основних сфер діяльності NIX була розробка ПЗ на замовлення. Пізніше акцент став зміщуватися у бік підтримки існуючого ПЗ, і нині ці два напрями приблизно однакові за обсягом', basesite: '', basephone: '+38 (067) 670-10-18' },
  { id: 14, title: 'SIDCON', tags: 'Промислова, інформаційна безпека, кібербезпека', town: 'Київ', site: 'https://sidcon.com.ua/ ', body: 'Вирішення інформаційно-аналітичних завдань будь-якого рівня складності і спрямованості: від перевірки реєстраційних даних контрагента до розробки концепції виходу компанії/ товарів на ринок ', basesite: '', basephone: '+38 (050)417-99-50' },
  { id: 15, title: 'Укрспецмонтаж', tags: 'Монтаж технічних засобів безпеки', town: '', site: 'https://www.usm1.com.ua/', body: 'Компанія «Укрспецмонтаж 1» – команда професіоналів, яка працює на ринку більше 30 років і надає майже весь спектр технічних засобів безпеки ', basesite: '', basephone: '+390502476688' },
  { id: 16, title: 'Mister007', tags: 'Продаж технічних засобів безпеки', town: 'Дніпро', site: 'https://mister007.com.ua/', body: 'Продаж та підбір обладнання для відеоспостереження та охоронних систем під завдання: приватних будинків, квартир, офісів, виробничих та складських приміщень. У команді працюють фахівці, які отримали технічну атестацію у сфері безпеки.', basesite: 'info@mister007.com.ua ', basephone: '+380501044788' },
  { id: 17, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 18, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 19, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 20, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 21, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 22, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 23, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 24, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 25, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 26, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 27, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 28, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 29, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 30, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 31, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 32, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 33, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 34, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 35, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 36, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 37, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 38, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 39, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 40, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 41, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 42, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
  { id: 43, title: 'Грифон', tags: '', town: '', site: '', body: '', basesite: '', basephone: '' },
]
function App() {
  const arr = arrayCards.filter(card => card.id <= 7)
  const [cards, setCards] = useState(arr)
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Top />
      <MyButton onClick={() => setModal(true)}>Увійти</MyButton>
      <MyModal visible={modal} setModal>
        <Singmod />
      </MyModal>
      {cards.map((card) =>
        <Card card={card} key={card.id} />
      )}
      <Pagination setCards={setCards} arrayCards={arrayCards} />
    
    </div>
  );
}

export default App;
