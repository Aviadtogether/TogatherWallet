import Activity1 from "./Images/Activity1.png";
import Activity2 from "./Images/Activity2.png";
import Activity3 from "./Images/Activity3.png";
import Task1 from "./Images/Task1.png";
import Event1 from "./Images/Event1.png";
import Event2 from "./Images/Event2.png";
import History1 from "./Images/History1.png";
import Group1 from "./Images/Group1.png";
import Group2 from "./Images/Group2.png";
import Activity1L from "./Images/Activity1L.png";

export const activitiesData = [
  {
    name: "Picnic in the park",
    title: "A picnic in the neighborhood park",
    description:
      "Description of the task in a few lines up to a certain number of characters to avoid digging. Description of the task in a few lines up to a certain number of characters.",
    image: Activity1,
    imageL: Activity1L,
    actionText: "View",
    hasAction: true,
    added: "Yesterday",
    date: "May 23, 2023",
    time: "16:30 - 18:00",
    credit: 1,
    id: 0,
  },
  {
    name: "Art activity with children",
    image: Activity2,
    actionText: "View",
    id: 1,
  },
  {
    name: "Samba dances",
    image: Activity3,
    actionText: "View",
    id: 2,
  },
];

export const tasksData = [
  {
    name: "Music Lessons",
    image: Task1,
    actionText: "View",
    id: 3,
  },
];

export const eventsData = [
  {
    name: "Watching falling meteors",
    image: Event1,
    actionText: "View",
    id: 4,
  },
  {
    name: "Tour at the Botanical Garden ",
    image: Event2,
    actionText: "View",
    id: 5,
  },
];
export const historiesData = [
  {
    name: "Falling stars - Mitzpe Ramon",
    image: History1,
    actionText: "View",
    id: 6,
  },
];
export const groupsData = [
  {
    name: "Women for Women",
    image: Activity2,
    actionText: "View",
    id: 7,
  },
  {
    name: "Animal Lovers",
    image: Activity3,
    actionText: "View",
    id: 8,
  },
];
export const giftCardsImages = [Task1, Task1, Event2, Event2];
