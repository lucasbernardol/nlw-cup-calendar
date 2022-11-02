const DOMLayout = document.querySelector('[data-id="layout"]');

const _GAMES = [
  {
    flagPlayer: 'switzerland',
    flagVsPlayer: 'cameroon',
    hour: '07:00',
  },
  {
    flagPlayer: 'uruguay',
    flagVsPlayer: 'south korea',
    hour: '10:00',
  },
  {
    flagPlayer: 'portugal',
    flagVsPlayer: 'ghana',
    hour: '13:00',
  },
  {
    flagPlayer: 'brazil',
    flagVsPlayer: 'serbia',
    hour: '13:00',
  },
];

const renderCardListItem = ({ hour, flagPlayer, flagVsPlayer }) => {
  return `
    <li class="main__card-item">
      <img
        src="./assets/images/${flagPlayer}-bg.svg"
        alt="Bandeira ${flagPlayer}"
        title="Bandeira ${flagPlayer}"
        class="icon"
      />
      <strong>${hour}</strong>
      <img
        src="./assets/images/${flagVsPlayer}-bg.svg"
        alt="Bandeira - ${flagVsPlayer}"
        title="Bandeira - ${flagVsPlayer}"
        class="icon"
      />
    </li>     
  `;
};

const renderCadList = (games) => {
  const renderedGemes = games.map((game) => renderCardListItem(game));

  const list = renderedGemes.join('\n');

  return `
    <ul class="main__card-list">${list}</ul>
  `;
};

const renderCard = ({ date, weekday, games }) => {
  return `
  <h2 class="main__card_title" title="24/11 Quinta-feira">
    ${date}
    <span>${weekday}</span>
  </h2>
   
  <div class="main__card_group">
    ${renderCadList(games)}
  </div>
  `;
};

const template = () => {
  const template = `
    <header class="header">
      <img
        src="./assets/logo.svg"
        alt="Copa do Mundo 2022 logo da aplicação ou calendário"
      />
    </header>
    <main class="main">
      <!-- cards -->
      <div class="main__cards">
        <div class="main__card">
          ${renderCard({
            date: '24/11',
            weekday: 'quinta',
            games: _GAMES,
          })}
        </div>
      </div>
    </main>
  `;

  return template;
};

const main = () => {
  DOMLayout.innerHTML = template();
};

window.addEventListener('DOMContentLoaded', () => {
  // call "main" function
  return main();
});
