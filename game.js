'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  };

  const getFigureComputer = lang => {
    const arr = [...lang];
    const num = getRandomIntInclusive(0, 2);
    const figure = arr[num];
    console.log('computer:', figure);
    return figure;
  };

  const getFigurePlayer = lang => {
    const arr = lang;
    const userR = arr === FIGURES_RUS ?
    prompt('камень, ножницы, бумага?', '') :
    prompt('rock, scissors, paper?', '');
    const user = typeof userR === 'string' ? userR.toLowerCase() : '';
    if (arr.includes(user) || user === '') {
      console.log('user:', user);
      return user;
    } else {
      return getFigurePlayer(lang);
    }
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' ||
    language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;
    return function start() {
      const array = [...lang];
      const computer = getFigureComputer(lang);
      const player = getFigurePlayer(lang);
      if (player === '' &&
      confirm('Вы действительно хотите выйти из игры?') === true) {
        alert(`Результат игры, количество очков:\nВы: ${result.player}.` +
        `\nКомпьютер: ${result.computer}.`);
        return;
      }
      if (computer === player) {
        alert(`Ничья!\nКомпьютер: ${computer}.\nВы: ${player}.`);
      }
      if (computer === array[0] && player === array[1] ||
          computer === array[1] && player === array[2] ||
          computer === array[2] && player === array[0]) {
        alert(`Компьютер победил!\nКомпьютер: ${computer}.\nВы: ${player}.`);
        result.computer++;
      }
      if (computer === array[1] && player === array[0] ||
         computer === array[2] && player === array[1] ||
         computer === array[0] && player === array[2]) {
        alert(`Вы победили!\nКомпьютер: ${computer}.\nВы: ${player}.`);
        result.player++;
      }
      start();
    };
  };
  window.RPS = game('EN');
})();
