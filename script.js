const contentByMood = {
  emo: {
    hero: {
      title: 'SubMus',
      subtitle: 'Погрузитесь в яркий мир эмо и сцены.<br>Выражай свои эмоции через музыку',
      indicator: 'Emo/Scene настроение'
    },
    bands: {
      title: 'ЭМОЦИОНАЛЬНЫЕ',
      description: 'Откройте для себя группы, которые выражают чувства',
      data: [
        { name: 'My Chemical Romance', genre: 'emo', description: 'Легенды эмо-рока', year: 2001, members: 5, albums: ['Three Cheers for Sweet Revenge', 'The Black Parade', 'Danger Days'],  image: 'https://www.rollingstone.com/wp-content/uploads/2024/06/My-Chemical-Romance-throwback.jpg?w=1581&h=1054&crop=1'},
        { name: 'Fall Out Boy', genre: 'emo', description: 'Поп-панк с эмоциями', year: 2001, members: 4, albums: ['From Under the Cork Tree', 'Infinity on High', 'Folie à Deux'], image: 'https://static.wikia.nocookie.net/lessthanjake/images/7/7f/Fall_Out_Boy.jpg/revision/latest?cb=20090202072855' },
        { name: 'Panic! At The Disco', genre: 'emo', description: 'Театральный эмо-рок', year: 2004, members: 1, albums: ['A Fever You Can\'t Sweat Out', 'Pretty. Odd.', 'Vices & Virtues'], image: 'https://static.wikia.nocookie.net/singmovie/images/6/67/Panic_at_the_disco.jpg/revision/latest?cb=20190808222356' },
        { name: 'Paramore', genre: 'emo', description: 'Энергичный эмо-панк', year: 2004, members: 3, albums: ['Riot!', 'Brand New Eyes', 'Paramore'], image: 'https://i8.amplience.net/i/naras/paramore_MI0004238738-MN0000366681' },
        { name: 'Taking Back Sunday', genre: 'emo', description: 'Классический эмо-звук', year: 1999, members: 5, albums: ['Tell All Your Friends', 'Where You Want to Be', 'Louder Now'], image:'https://www.mm-group.org/wp-content/uploads/2016/08/TakingBackSunday_01.jpg' },
        { name: 'The Used', genre: 'emo', description: 'Сырой эмоциональный панк', year: 2001, members: 4, albums: ['The Used', 'In Love and Death', 'Lies for the Liars'], image:'https://upload.wikimedia.org/wikipedia/commons/7/72/The_Used_January_2021.jpg' }
      ]
    },
    gallery: {
      title: 'EMO/SCENE',
      description: 'Яркие цвета, челки и выразительность',
      data: [
        { title: 'Emo Fashion', category: 'emo', tags: ['#черный', '#полоски', '#скинни'], image:'https://vampirefreaks.com/cdn/shop/files/emo-clothing_7059d799-4eaf-48a4-bd53-5109b7d21f44.jpg?v=1719942829' },
        { title: 'Scene Kids', category: 'scene', tags: ['#яркиеволосы', '#банданы', '#кеды'], image:'https://pbs.twimg.com/profile_images/202303397/November_2005_029_400x400.jpg' },
        { title: 'Band Merch', category: 'merch', tags: ['#футболки', '#значки', '#патчи'], image:'https://i.etsystatic.com/54152254/r/il/ea65d9/6254154931/il_fullxfull.6254154931_k5i4.jpg' },
        { title: 'Hairstyles', category: 'hair', tags: ['#челка', '#слои', '#краска'], image:'https://i.redd.it/emo-hair-should-i-cut-it-myself-or-go-to-a-hair-stylist-v0-tmbbp4duoeqb1.jpg?width=500&format=pjpg&auto=webp&s=578dd91e8a79e6ff05339d2e3d58f9f77b36c658' },
        { title: 'Accessories', category: 'accessories', tags: ['#браслеты', '#ремни', '#цепи'], image:'https://i.pinimg.com/736x/bd/6c/96/bd6c968070482415d25fb0e652f34623.jpg' },
        { title: 'DIY Culture', category: 'diy', tags: ['#handmade', '#стикеры', '#кастомизация'], image:'https://tech.caltech.edu/img/2025/feb18/diy2.jpg' }
      ]
    },
    events: {
      title: 'EMO СОБЫТИЯ',
      description: 'Эмоциональные концерты и встречи сообщества',
      data: [
        { title: 'Emo Night', genre: 'emo', date: '20 марта 2025 г.', time: '20:00', venue: 'Club Neon, Алматы', price: '12000тг', status: 'available', bands: ['MCR Tribute', 'Fall Out Boy Cover'], image:'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-217538-_DSC5195__.jpg' },
        { title: 'Scene Revival Party', genre: 'scene', date: '25 марта 2025 г.', time: '19:00', venue: 'Underground Hall, Алматы', price: '10000тг', status: 'available', bands: ['Paramore Experience', 'Panic! Tribute'] , image:'https://i.ytimg.com/vi/KqeECJX7fJ8/maxresdefault.jpg'},
        { title: 'Pop-Punk Festival', genre: 'pop-punk', date: '6 и 7 июня 2025 г.', time: '18:00', venue: 'Arena Space, Астана', price: '18000тг', status: 'sold-out', bands: ['Taking Back Sunday Tribute', 'The Used Cover'] , image:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1042608713%2F504383820739%2F1%2Foriginal.20250530-193953?crop=focalpoint&fit=crop&w=600&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.005&fp-y=0.005&s=1706245116486cadfbde98961da7e780'},
        { title: 'Emo Karaoke Night', genre: 'emo', date: '12 апреля 2025 г.', time: '21:00', venue: 'Karaoke Club, Алматф', price: '8000тг', status: 'available', bands: ['Open Mic', 'DJ Set'], image:'https://www.brooklynbowl.com/assets/img/20250411_emoNightKaraoke_fbEvent_1920x1080-d8cc6d463a.png' }
      ]
    }
  },
  
  rock: {
    hero: {
      title: 'SubMus',
      subtitle: 'Погрузитесь в мир рока и альтернативных субкультур.<br>Энергия и свобода выражения',
      indicator: 'Rock настроение'
    },
    bands: {
      title: 'ЛЕГЕНДАРНЫЕ',
      description: 'Исследуйте музыку, которая определила рок-культуру',
      data: [
        { name: 'Nirvana', genre: 'grunge', description: 'Легендарная гранж-группа из Сиэтла', year: 1987, members: 3, albums: ['Bleach', 'Nevermind', 'In Utero'], image:'https://i.ytimg.com/vi/dDikRJt5nGM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLCszrFB2Qw_y7sHUpPJsUgEIiOR1w' },
        { name: 'Pearl Jam', genre: 'alternative', description: 'Одна из самых влиятельных альтернативных рок-групп 90-х', year: 1990, members: 5, albums: ['Ten', 'Vs.', 'Vitalogy'], image:'https://i.pinimg.com/originals/f5/c8/25/f5c825deacd4fe10388e5f12edddcc8e.jpg' },
        { name: 'Soundgarden', genre: 'grunge', description: 'Пионеры сиэтлского звука', year: 1984, members: 4, albums: ['Badmotorfinger', 'Superunknown'] , image:'https://avatars.mds.yandex.net/i?id=32fc16c9a4e95ae260d3c511e633bb19_l-10414807-images-thumbs&n=13'},
        { name: 'Alice in Chains', genre: 'grunge', description: 'Темная сторона гранжа', year: 1987, members: 4, albums: ['Facelift', 'Dirt'] , image:'https://avatars.mds.yandex.net/i?id=701a9129fb74389ba44cefe1c242c319_l-4162404-images-thumbs&n=13'},
        { name: 'Stone Temple Pilots', genre: 'alternative', description: 'Мелодичный альтернативный рок', year: 1989, members: 4, albums: ['Core', 'Purple'], image:'https://i.ytimg.com/vi/kd5XxJ3n3a0/maxresdefault.jpg' },
        { name: 'Rage Against the Machine', genre: 'metal', description: 'Революционная группа', year: 1991, members: 4, albums: ['Rage Against the Machine', 'Evil Empire'] , image:'https://cdn.mos.cms.futurecdn.net/zzTCVezFY9Dnr6e7KqtG3F.jpg'}
      ]
    },
    gallery: {
      title: 'ROCK КУЛЬТУРА',
      description: 'Классическая эстетика рок-субкультур',
      data: [
        { title: 'Гранж Эстетика', category: 'grunge', tags: ['#90s', '#фланель', '#рваныеджинсы'], image:'https://i.pinimg.com/736x/40/28/4c/40284ccc404292e9a1d1dbf18e238fe3.jpg' },
        { title: 'Панк Культура', category: 'punk', tags: ['#ирокез', '#кожа', '#шипы'], image:'https://i.pinimg.com/originals/52/08/d9/5208d9ac55f2fca9621dadc496affcb1.jpg' },
        { title: 'Альтернативная Мода', category: 'alternative', tags: ['#винтаж', '#кеды', '#футболки'], image:'https://i.pinimg.com/736x/17/4f/aa/174faa11fa4a27dd239807f000ca4fdc.jpg' },
        { title: 'Рок Концерты', category: 'live', tags: ['#стейджайвинг', '#мошпит', '#энергия'], image:'https://station.ru/uploads/82/17/a7228726f9e1677ed9da63d2812d.png' },
        { title: 'Band Patches', category: 'patches', tags: ['#нашивки', '#кожанки', '#diy'], image:'https://i.pinimg.com/736x/e5/b8/54/e5b85479f2880fb14cea350fb068960a.jpg' },
        { title: 'Vinyl Culture', category: 'vinyl', tags: ['#пластинки', '#коллекция', '#аналог'], image:'https://avatars.mds.yandex.net/i?id=45ecdff3a4e596249b2fd8bbed977b32_l-9230228-images-thumbs&n=13' }
      ]
    },
    events: {
      title: 'ROCK СОБЫТИЯ',
      description: 'Не пропустите лучшие рок-концерты и фестивали',
      data: [
        { title: 'Grunge Revival Night', genre: 'grunge', date: '15 февраля 2025 г.', time: '20:00', venue: 'Underground Club, Тараз', price: '15000тг', status: 'available', bands: ['Nirvana Tribute', 'Pearl Jam Cover'], image:'https://i.pinimg.com/originals/5d/20/12/5d20125011d2cc35b0b923a2d211959a.jpg' },
        { title: 'Alternative Rock Fest', genre: 'alternative', date: '22 февраля 2025 г.', time: '18:00', venue: 'Arena Hall, Алматы', price: '25000тг', status: 'available', bands: ['Soundgarden Tribute', 'Alice in Chains Cover'], image:'https://sun9-79.userapi.com/impf/3MVnak2F3DUJw8rGFMJpR5ZetbCUSk9GXf6lSQ/UXZ7iBFajnY.jpg?size=1024x768&quality=96&sign=c993742f9fef19d0a713a369da19cf90&c_uniq_tag=9NlGp0Q1qp8V_EZOh7OS4u7T7dSe1xKKaU9HMKL6D-g&type=album' },
        { title: 'Punk Rock Rebellion', genre: 'punk', date: '1 марта 2025 г.', time: '19:30', venue: 'Rebel Club, Астана', price: '12000тг', status: 'sold-out', bands: ['The Clash Tribute', 'Sex Pistols Cover'], image:'https://i.ytimg.com/vi/WqPJNkAT0_E/maxresdefault.jpg' },
        { title: 'Nu Metal Night', genre: 'nu-metal', date: '8 марта 2025 г.', time: '21:00', venue: 'Metal Bar, Алматы', price: '18000тг', status: 'available', bands: ['RATM Tribute', 'Korn Cover'], image:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F751398969%2F274966103040%2F1%2Foriginal.20240424-152021?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C14%2C1200%2C600&s=959dbd4d84941daee69bc270b2874380' }
      ]
    }
  },
  
  blackmetal: {
    hero: {
      title: 'SubMus',
      subtitle: 'Погрузитесь в мрачный мир блэк-метала.<br>Тьма, мощь и атмосфера',
      indicator: 'Black Metal настроение'
    },
    bands: {
      title: 'CULT BANDS',
      description: 'Легендарные группы блэк-метала',
      data: [
        { name: 'Mayhem', genre: 'black-metal', description: 'Пионеры норвежского блэк-метала', year: 1984, members: 4, albums: ['De Mysteriis Dom Sathanas', 'Grand Declaration of War', 'Esoteric Warfare'], image:'https://i.pinimg.com/736x/b6/86/e8/b686e8e698b1fd0e86a7ee75a57f2567.jpg' },
        { name: 'Darkthrone', genre: 'black-metal', description: 'Культовый андеграундный блэк', year: 1986, members: 2, albums: ['A Blaze in the Northern Sky', 'Transilvanian Hunger', 'Panzerfaust'], image:'https://avatars.mds.yandex.net/i?id=95dac32a51d891d34f4ab1cfaed01ed4_l-10354927-images-thumbs&n=13' },
        { name: 'Emperor', genre: 'black-metal', description: 'Симфонический блэк-метал', year: 1991, members: 4, albums: ['In the Nightside Eclipse', 'Anthems to the Welkin at Dusk', 'IX Equilibrium'], image:'https://i.pinimg.com/736x/ae/48/f4/ae48f4e6f4a1518cac97fb327c1a8d86.jpg' },
        { name: 'Burzum', genre: 'black-metal', description: 'Атмосферный блэк-метал', year: 1991, members: 1, albums: ['Hvis lyset tar oss', 'Filosofem', 'Burzum'], image:'https://i.pinimg.com/originals/28/9e/ec/289eec835841e2a8cc209a9a1935fdeb.png' },
        { name: 'Immortal', genre: 'black-metal', description: 'Блэк-метал из ледяного королевства', year: 1991, members: 3, albums: ['Pure Holocaust', 'At the Heart of Winter', 'Sons of Northern Darkness'], image:'https://images.steamusercontent.com/ugc/1459681099269399449/0C4813E2AC2D09E1716174CA17457F42E5FDAA4E/' },
        { name: 'Gorgoroth', genre: 'black-metal', description: 'Брутальный норвежский блэк', year: 1992, members: 4, albums: ['Pentagram', 'Antichrist', 'Ad Majorem Sathanas Gloriam'], image:'https://i.pinimg.com/736x/f1/95/ce/f195ce2d6619be7da513284834ba41f8.jpg' }
      ]
    },
    gallery: {
      title: 'BLACK METAL',
      description: 'Мрачная эстетика и символизм',
      data: [
        { title: 'Corpse Paint', category: 'makeup', tags: ['#корпспэинт', '#black&white', '#ритуал'], image:'https://avatars.mds.yandex.net/i?id=a4dca05889343b79c73a554b13f664a3_l-4723319-images-thumbs&n=13' },
        { title: 'Battle Vest', category: 'clothing', tags: ['#патчи', '#шипы', '#chains'], image:'https://i.pinimg.com/originals/c5/fe/89/c5fe89003021736b01a1927b5c80fb53.jpg' },
        { title: 'Logo Art', category: 'art', tags: ['#логотипы', '#симметрия', '#нечитаемость'], image:'https://i.pinimg.com/originals/6c/23/b6/6c23b65fa144914c97afbe416e1710d7.jpg' },
        { title: 'Forest Atmosphere', category: 'nature', tags: ['#лес', '#зима', '#туман'], image:'https://i.ytimg.com/vi/wrRNj9gJezA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFMgZSheMA8=&rs=AOn4CLD7ITffmcdakh3-SAlGX-alOSXnkA' },
        { title: 'Stage Performance', category: 'live', tags: ['#огонь', '#дым', '#ритуал'], image:'https://i.pinimg.com/originals/55/cb/79/55cb791c8a532862d4b1b1d1364fd7e7.jpg' },
        { title: 'Album Covers', category: 'artwork', tags: ['#мрачность', '#символизм', '#атмосфера'], image:'https://images.genius.com/029dd9852decaa7b5f18ca62c58a2726.1000x1000x1.jpg' }
      ]
    },
    events: {
      title: 'CULT EVENTS',
      description: 'Мрачные ритуалы и блэк-метал концерты',
      data: [
        { title: 'Black Mass Ritual', genre: 'black-metal', date: '6 апреля 2025 г.', time: '22:00', venue: 'Dark Temple, Талдык', price: '25000тг', status: 'available', bands: ['Mayhem Tribute', 'Emperor Experience'], image:'https://i.ytimg.com/vi/H5MRqKvIUGo/maxresdefault.jpg' },
        { title: 'Norwegian Black Metal Night', genre: 'black-metal', date: '13 апреля 2025 г.', time: '21:00', venue: 'Underground Crypt, астана', price: '22000тг', status: 'available', bands: ['Darkthrone Tribute', 'Immortal Cover'], image:'https://i.pinimg.com/originals/86/30/39/863039647a81703e6255a2c6e154d5a4.jpg' },
        { title: 'Atmospheric BM Fest', genre: 'atmospheric', date: '20 апреля 2025 г.', time: '20:00', venue: 'Forest Stage, Алматы', price: '28000тг', status: 'sold-out', bands: ['Burzum Tribute', 'Wolves in the Throne Room'], image:'https://i.ytimg.com/vi/BmKjaHXnFgI/maxresdefault.jpg' },
        { title: 'Underground BM Ritual', genre: 'black-metal', date: '27 апреля 2025 г.', time: '23:00', venue: 'Catacomb Club, Шымкент', price: '20000тг', status: 'available', bands: ['Gorgoroth Tribute', 'Marduk Cover'], image:'https://i.ytimg.com/vi/TPT7AnWTwqY/maxresdefault.jpg' }
      ]
    }
  }
};


const moodConfig = {
  emo: {
    accent: '#ff1493',
    secondary: '#ff69b4',
    glow: 'rgba(255,20,147,0.4)',
    bgOverlay: 'rgba(255,20,147,0.06)'
  },
  rock: {
    accent: '#ff5722',
    secondary: '#ff8a65',
    glow: 'rgba(255,87,34,0.35)',
    bgOverlay: 'rgba(255,87,34,0.05)'
  },
  blackmetal: {
    accent: '#8b00ff',
    secondary: '#a855f7',
    glow: 'rgba(139,0,255,0.4)',
    bgOverlay: 'rgba(139,0,255,0.06)'
  }
};


let currentMood = 'rock';
let currentBandsFilter = 'all';
let currentGalleryFilter = 'all';


const el = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

function updateHeroContent(mood) {
  const content = contentByMood[mood].hero;
  document.getElementById('heroTitle').textContent = content.title;
  document.getElementById('heroSubtitle').innerHTML = content.subtitle;
  
  const indicator = document.getElementById('moodIndicator');
  indicator.innerHTML = `
    <i class="${getMoodIcon(mood)}"></i>
    <span>${content.indicator}</span>
  `;
}

function updateSectionHeaders(mood) {
  const bands = contentByMood[mood].bands;
  const gallery = contentByMood[mood].gallery;
  const events = contentByMood[mood].events;
  
  document.getElementById('bandsSpan').textContent = bands.title;
  document.getElementById('bandsDesc').textContent = bands.description;
  
  document.getElementById('gallerySpan').textContent = gallery.title;
  document.getElementById('galleryDesc').textContent = gallery.description;
  
  document.getElementById('eventsSpan').textContent = events.title;
  document.getElementById('eventsDesc').textContent = events.description;
}

function getMoodIcon(mood) {
  const icons = {
    emo: 'ri-heart-line',
    rock: 'ri-flashlight-line',
    blackmetal: 'ri-skull-line'
  };
  return icons[mood] || 'ri-music-2-line';
}

function renderBands(filter = 'all') {
  const grid = document.getElementById('bandsGrid');
  const bandsData = contentByMood[currentMood].bands.data;
  const filtered = filter === 'all' ? bandsData : bandsData.filter(b => b.genre === filter);
  
  grid.replaceChildren(...filtered.map(band => el(`
    <article class="band-card reveal" data-genre="${band.genre}" tabindex="0" aria-label="${band.name}">
      <div class="band-image" style="background-image: url('${band.image}')">
        <div class="band-genre">${band.genre.charAt(0).toUpperCase() + band.genre.slice(1)}</div>
        <button class="play-btn" data-play="${band.name}" title="Микро-звук" aria-label="Воспроизвести звук">
          <i class="ri-play-fill"></i>
        </button>
      </div>
      <div class="band-info">
        <h3>${band.name}</h3>
        <p>${band.description}</p>
        <div class="band-stats">
          <div><i class="ri-calendar-line"></i><span>Основана: ${band.year}</span></div>
          <div><i class="ri-user-line"></i><span>Участники: ${band.members}</span></div>
          <div><i class="ri-disc-line"></i><span>Альбомы: ${band.albums.length}</span></div>
        </div>
        <div class="band-albums">
          <h4>Популярные альбомы:</h4>
          <div class="album-tags">${band.albums.map(a => `<span class="album-tag">${a}</span>`).join('')}</div>
        </div>
      </div>
    </article>
  `)));
  
  updateStats();
}

function renderGallery(filter = 'all') {
  const grid = document.getElementById('galleryGrid');
  const galleryData = contentByMood[currentMood].gallery.data;
  const filtered = filter === 'all' ? galleryData : galleryData.filter(g => g.category === filter);
  
  grid.replaceChildren(...filtered.map(item => el(`
    <figure class="gallery-item reveal" data-category="${item.category}">
      <div class="gallery-image" style="background-image: url('${item.image}')"></div>
      <figcaption class="gallery-info">
        <div>
          <div>
            <div style="font-family:'Metal Mania',cursive; font-size:1.1rem">${item.title}</div>
            <div class="gallery-tags">${item.tags.map(tag => `<span class="gallery-tag">${tag}</span>`).join('')}</div>
          </div>
          <i class="ri-arrow-right-up-line" aria-hidden="true"></i>
        </div>
      </figcaption>
      <div class="gallery-overlay" aria-hidden="true"></div>
    </figure>
  `)));
}

function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  const eventsData = contentByMood[currentMood].events.data;
  
  grid.replaceChildren(...eventsData.map(event => el(`
    <article class="event-card reveal">
       <div class="event-image" style="background-image: url('${event.image}')"></div>
        <div class="event-status ${event.status === 'sold-out' ? 'sold-out' : ''}">
          ${event.status === 'available' ? 'Доступны билеты' : 'Распродано'}
        </div>
        
      </div>
      <div class="event-info">
        <h3>${event.title}</h3>
        <div class="event-details">
          <div><i class="ri-calendar-line"></i><span>${event.date}</span></div>
          <div><i class="ri-time-line"></i><span>${event.time}</span></div>
          <div><i class="ri-map-pin-line"></i><span>${event.venue}</span></div>
          <div><i class="ri-price-tag-line"></i><span class="event-price">${event.price}</span></div>
        </div>
        <p style="color:var(--text-secondary); margin-bottom:.6rem; font-size:.95rem">${event.bands.join(' • ')}</p>
        <button class="btn" ${event.status === 'sold-out' ? 'disabled style="background:#666; cursor:not-allowed; opacity:.8"' : ''}>
          <i class="ri-ticket-line"></i> ${event.status === 'available' ? 'Купить билет' : 'Билеты распроданы'}
        </button>
      </div>
    </article>
  `)));
  
  updateStats();
}

function updateStats() {
  const bandsCount = contentByMood[currentMood].bands.data.length;
  const eventsCount = contentByMood[currentMood].events.data.length;
  
  const statBands = document.getElementById('statBands');
  const statEvents = document.getElementById('statEvents');
  
  if (statBands) statBands.textContent = bandsCount;
  if (statEvents) statEvents.textContent = eventsCount;
}

function wireFilters() {
  document.querySelectorAll('#bands .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#bands .filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentBandsFilter = btn.dataset.filter;
      renderBands(currentBandsFilter);
      revealScan();
    });
  });
  
  document.querySelectorAll('#gallery .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#gallery .filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentGalleryFilter = btn.dataset.filter;
      renderGallery(currentGalleryFilter);
      revealScan();
    });
  });
}

const root = document.documentElement;
const timeSelect = document.getElementById('timeSelect');

function autoTimeOfDay() {
  const h = new Date().getHours();
  if (h >= 5 && h < 11) return 'morning';
  if (h >= 11 && h < 17) return 'day';
  if (h >= 17 && h < 21) return 'evening';
  return 'night';
}

function setTimeOfDay(mode) {
  if (mode === 'auto') {
    root.setAttribute('data-time', autoTimeOfDay());
  } else {
    root.setAttribute('data-time', mode);
  }
  localStorage.setItem('submus-time', mode);
}

timeSelect.addEventListener('change', () => setTimeOfDay(timeSelect.value));

matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if ((localStorage.getItem('submus-time') ?? 'auto') === 'auto') {
    setTimeOfDay('auto');
  }
});

function setMood(mood) {
  currentMood = mood;

  document.querySelectorAll('.mood-btn').forEach(b => {
    const active = b.dataset.mood === mood;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });

  const conf = moodConfig[mood];
  root.style.setProperty('--mood-accent', conf.accent);
  root.style.setProperty('--mood-secondary', conf.secondary);
  root.style.setProperty('--mood-glow', conf.glow);
  root.style.setProperty('--mood-bg-overlay', conf.bgOverlay);
  root.setAttribute('data-mood', mood);

  
  updateHeroContent(mood);
  updateSectionHeaders(mood);
  renderBands(currentBandsFilter);
  renderGallery(currentGalleryFilter);
  renderEvents();

  
  applyMoodBackgrounds(mood);

 
  setTimeout(() => revealScan(), 100);

 
  localStorage.setItem('submus-mood', mood);

 
  playMoodSound(mood);

  announceMoodChange(mood);
}


document.addEventListener('click', (e) => {
  const btn = e.target.closest('.mood-btn[data-mood]');
  if (!btn || !btn.dataset.mood) return;
  setMood(btn.dataset.mood);
});


const randomMoodBtn = document.getElementById('randomizeMood');
if (randomMoodBtn) {
  randomMoodBtn.addEventListener('click', () => {
    const moods = Object.keys(moodConfig);
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setMood(randomMood);
  });
}




const modalBackdrop = document.getElementById('bandModal');
const modalClose = document.getElementById('modalClose');
const bandModalTitle = document.getElementById('bandModalTitle');
const bandDesc = document.getElementById('bandDesc');
const bandYear = document.getElementById('bandYear');
const bandMembers = document.getElementById('bandMembers');
const bandGenre = document.getElementById('bandGenre');
const bandAlbums = document.getElementById('bandAlbums');

function openModal(band) {
  bandModalTitle.textContent = band.name;
  bandDesc.textContent = band.description;
  bandYear.textContent = band.year;
  bandMembers.textContent = band.members;
  bandGenre.textContent = band.genre;
  bandAlbums.innerHTML = band.albums.map(a => `<span class="album-tag">${a}</span>`).join('');
  
  modalBackdrop.style.display = 'grid';
  requestAnimationFrame(() => {
    modalBackdrop.querySelector('.modal').classList.add('open');
  });
  
  document.addEventListener('keydown', escCloseOnce, { once: true });
}

function closeModal() {
  const modal = modalBackdrop.querySelector('.modal');
  modal.classList.remove('open');
  setTimeout(() => {
    modalBackdrop.style.display = 'none';
  }, 180);
}

function escCloseOnce(ev) {
  if (ev.key === 'Escape') closeModal();
}

modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) closeModal();
});

modalClose.addEventListener('click', closeModal);

document.addEventListener('click', (e) => {
  const card = e.target.closest('.band-card');
  if (!card || e.target.closest('.play-btn')) return;
  
  const name = card.querySelector('h3')?.textContent;
  const bandsData = contentByMood[currentMood].bands.data;
  const band = bandsData.find(b => b.name === name);
  
  if (band) openModal(band);
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const group = tab.parentElement;
    group.querySelectorAll('.tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    
    const id = tab.dataset.tab;
    group.parentElement.querySelectorAll('.tab-panel').forEach(p => p.hidden = true);
    group.parentElement.querySelector(`#tab-${id}`).hidden = false;
  });
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

function revealScan() {
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('in');
    io.observe(el);
  });
}

const toggleRevealBtn = document.getElementById('toggleRevealDemo');
if (toggleRevealBtn) {
  toggleRevealBtn.addEventListener('click', () => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.remove('in'));
    setTimeout(revealScan, 60);
  });
}

function createParticles() {
  const container = document.getElementById('particles');
  const count = matchMedia('(min-width: 768px)').matches ? 28 : 16;
  container.innerHTML = '';
  
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = (Math.random() * 6) + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    container.appendChild(particle);
  }
}

const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileToggle.addEventListener('click', () => {
  const open = mobileMenu.hasAttribute('hidden');
  mobileMenu.toggleAttribute('hidden');
  mobileToggle.setAttribute('aria-expanded', String(open));
  mobileToggle.querySelector('i').className = open ? 'ri-close-line' : 'ri-menu-line';
});


mobileMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    mobileMenu.setAttribute('hidden', '');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.querySelector('i').className = 'ri-menu-line';
  }
});


const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

document.addEventListener('keydown', (e) => {

  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('band-card')) {
    e.preventDefault();
    e.target.click();
  }
});

function setSectionBackground(sectionId, imageUrl) {
  const section = document.getElementById(sectionId);
  if (section && imageUrl) {
    section.setAttribute('data-bg', 'true');
    section.style.setProperty('--section-bg-image', `url("${imageUrl}")`);
  }
}


function removeSectionBackground(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.removeAttribute('data-bg');
    section.style.removeProperty('--section-bg-image');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const timeSelect = document.getElementById('timeSelect');
  

  const savedMood = localStorage.getItem('submus-mood') || 'rock';
  const savedTime = localStorage.getItem('submus-time') || 'auto';
  
  if (timeSelect) {
   
    timeSelect.value = savedTime;
    setTimeOfDay(savedTime);
    
    timeSelect.addEventListener('change', () => setTimeOfDay(timeSelect.value));
  } else {
  
    setTimeOfDay(savedTime);
  }

 
  setMood(savedMood);
  
 
  wireFilters();
  
 
  createParticles();
  

  setTimeout(() => revealScan(), 100);
  
 
  document.querySelectorAll('.band-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
});

window.addEventListener('resize', debounce(() => {
  createParticles();
}, 250));


document.addEventListener('click', (e) => {
  const btn = e.target.closest('.play-btn');
  if (!btn) return;
  
  btn.classList.add('active');
  setTimeout(() => btn.classList.remove('active'), 150);
});

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function announceMoodChange(mood) {
  const moodNames = {
    emo: 'Emo/Scene',
    rock: 'Rock',
    blackmetal: 'Black Metal'
  };
  
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = `Настроение изменено на ${moodNames[mood]}`;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
}


const originalSetMood = setMood;
window.setMood = function(mood) {
  originalSetMood(mood);
  announceMoodChange(mood);
};

const backgroundPresets = {
  emo: {
    bands: 'img/emoband.jpg', 
    gallery: '',
    events: 'img/emoevent.jpg'
  },
  rock: {
    bands: 'https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9jayUyMG11c2ljfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
    gallery: '',
    events: 'https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9jayUyMG11c2ljfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000'
  },
  blackmetal: {
    bands: 'https://media.newyorker.com/photos/59096836c14b3c606c106c84/master/pass/111010_r21374_g2048.jpg',
    gallery: '',
    events: 'https://wallpapers.com/images/hd/black-metal-music-845-x-1200-wallpaper-1p49pemt5uqljmzg.jpg'
  }
};


function applyMoodBackgrounds(mood) {
  const presets = backgroundPresets[mood];
  if (presets) {
    if (presets.bands) setSectionBackground('bands', presets.bands);
    else removeSectionBackground('bands');
    
    if (presets.gallery) setSectionBackground('gallery', presets.gallery);
    else removeSectionBackground('gallery');
    
    if (presets.events) setSectionBackground('events', presets.events);
    else removeSectionBackground('events');
  }
}

const originalSetMoodFunc = setMood;
setMood = function(mood) {
  originalSetMoodFunc(mood);
  applyMoodBackgrounds(mood);
  announceMoodChange(mood);
};

const timeSelectMobile = document.getElementById('timeSelectMobile');
if (timeSelectMobile) {
  timeSelectMobile.value = localStorage.getItem('submus-time') || 'auto';
  timeSelectMobile.addEventListener('change', () => setTimeOfDay(timeSelectMobile.value));
}


