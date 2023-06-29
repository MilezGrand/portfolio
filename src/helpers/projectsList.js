import project01 from './../img/01.png';
import project02 from './../img/02.png';
import project03 from './../img/03.png';
import project04 from './../img/04.png';
import project05 from './../img/05.png';

const projects = [
  {
    title: 'Блог 📝',
    img: project01,
    text: 'Мой серьёзный домашний проект. Качественная работа, максимально приближённая к настоящим коммерческим приложениям',
    gitHubLink: 'https://github.com/MilezGrand/ts-blog',
    tags: ['Pet Project', 'ReactJS', 'NodeJS', 'PostgreSQL'],
  },
  {
		title: 'Нейросеть для определения эмоций 🧬',
    img: project02,
    text: 'Коммандная работа с хакатона, сделанная за 40 часов. После загрузки видео, нейросеть определяет людей и к каждому создаёт эмоциональный портрет',
		gitHubLink: 'https://github.com/MilezGrand/neural-project',
		tags: ['Hackathon', 'ReactJS', 'SCSS', 'Python', 'Go']
  },
  {
		title: 'Сервис для геймификации рабочего процесса для ВТБ 🪙',
    img: project03,
    text: 'Коммандная работа с хакатона, сделанная за 40 часов. Сотрудники выдают задания, за которые можно получить NFT-токены. Их можно потратить на различные товары в магазине',
		gitHubLink: 'https://github.com/MilezGrand/nft-gamification/tree/master',
		tags: ['Hackathon', 'ReactJS', 'SCSS', 'Go']
  },
  {
		title: 'Todo list ✔️',
    img: project04,
    text: 'Каждый веб-разработчик когда либо делал этот проект. Я не исключение :)',
		gitHubLink: 'https://github.com/MilezGrand/react-todo-list',
		tags: ['Pet Project', 'ReactJS', 'CSS']
  },
  {
		title: 'Интернет магазин 💵',
    img: project05,
    text: 'Простой прототип интернет-магазина для проектной работы в университете. Товары можно добавить в корзину, а также в избранное',
		gitHubLink: 'https://github.com/MilezGrand/react-sneakers',
		tags: ['Pet Project', 'ReactJS', 'SCSS', 'Mockapi.io']
  },
];

export { projects };
