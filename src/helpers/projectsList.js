import project01 from "./../img/01.png";
import project02 from "./../img/02.png";
import project03 from "./../img/03.png";
import project04 from "./../img/04.png";
import project05 from "./../img/05.png";
import project06 from "./../img/06.png";

const projects = [
  {
    title: "Коллективный блог 📝",
    img: project01,
    text: "Крупный fullstack проект. Вдохновлённый Habr и DTF",
    gitHubLink: "https://github.com/MilezGrand/ts-blog",
    tags: ["React", "MUI", "FSD", "Redux Toolkit", "Express", "PostgreSQL"],
    demoLink: "https://milezgrand.site",
    disabled: false,
    linkText: "",
  },
  {
    title: "Сайт школы 🔔",
    img: project06,
    text: "Экспресс работа. Заказчик пожелал быстрый MVP сайт на React для удобства его дальнейшего масштабирования",
    gitHubLink: "https://github.com/MilezGrand/school-site",
    tags: ["React", "CSS"],
    demoLink: "https://milezgrand.github.io/school-site/",
    disabled: false,
    linkText: "",
  },
  {
    title: "Task Manager ✔️",
    img: project04,
    text: "Обновлённая версия моего старого проекта Todo List.",
    gitHubLink: "https://github.com/MilezGrand/task-manager",
    tags: ["React", "Redux", "Styled Components", "FSD"],
    demoLink: "https://milezgrand.github.io/task-manager/",
    disabled: false,
    linkText: "",
  },
  {
    title: "Каталог 💵",
    img: project05,
    text: "Имеется возможность сортировки товаров по типу. Товары можно добавить в корзину, а также в избранное",
    gitHubLink: "https://github.com/MilezGrand/react-sneakers",
    tags: ["React", "SCSS", "Mockapi.io"],
    demoLink: "https://milezgrand.github.io/react-shop/",
    disabled: false,
    linkText: "",
  },
  {
    title: "Нейросеть для определения эмоций 🧬",
    img: project02,
    text: "Командная работа с хакатона, сделанная за 40 часов. После загрузки видео, нейросеть определяет людей и каждому создаёт эмоциональный портрет",
    gitHubLink: "https://github.com/MilezGrand/neural-project",
    tags: ["React", "SCSS", "Python", "Go"],
    demoLink: "",
    disabled: true,
    linkText: "Сервер отключён организаторами хакатона",
  },
  {
    title: "Сервис для геймификации рабочего процесса для ВТБ 🪙",
    img: project03,
    text: "Командная работа с хакатона, сделанная за 40 часов. Сотрудники выдают задания, за которые можно получить NFT-токены. Их можно потратить на различные товары в магазине",
    gitHubLink: "https://github.com/MilezGrand/nft-gamification/tree/master",
    tags: ["React", "SCSS", "Go"],
    demoLink: "",
    disabled: true,
    linkText: "Сервер отключён организаторами хакатона",
  },
];

export { projects };
