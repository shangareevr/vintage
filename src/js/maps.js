import ymaps from 'ymaps';
ymaps.load('https://api-maps.yandex.ru/2.1/?&lang=ru_RU').then(maps => {
let map = new maps.Map('map', {
    center: [55.793880, 37.541018],
    zoom: 16,
  });
  let placemark = new maps.Placemark([55.793880, 37.541018], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'assets/map.svg',
		iconImageSize: [70, 78],
		iconImageOffset: [0, -100]
	});

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark);
});