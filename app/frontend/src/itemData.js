import event1 from './img/42TPNFT.jpg';
import event2 from './img/hardcoreNFT.png';
import event3 from './img/house.webp';


const itemsData = [
  {
    imageSrc: event1,
    title: "Techno Party 42",
    organizer: "42",
    date: "24 July 2024",
    startdate: "Wed 24 Jul",
    enddate: "Thu 25 Jul",
    starttime: "23:00 PM",
    endtime: "7:00 AM",
    location: "School 42 Grand Arena",
    contract: true,
    imgIPFS : "Qmdnrj9a2ycAbdmKwTBwWGCUS5bkyRMYRV8pXtUy5SXhC7",
    metadataPath : {
      0 : "./TokenizeArt/42TPReg.json",
      1 : "./TokenizeArt/42TPVip.json",
    },
    metadataIPFS : {
      0 : "QmNxhTykKUYpxLxyZR11CP7LLwXamMXf2385F2HDKzqTMy",
      1 : "QmbhkmDsbXPC9tkFGCM6CtY8uPWg4Txzc7bg1fpLNy6BAn"
    },
  },
  {
    imageSrc: event2,
    title: "Defqon 42 Festival",
    organizer: "Q-dance",
    date: "30 December 2030",
    startdate: "Tue 30 Dec",
    enddate: "Thu 31 Dec",
    starttime: "23:30 PM",
    endtime: "11:00 AM",
    location: "Biddinghuizen",
    contract: false
  },
  {
    imageSrc: event3,
    title: "House music party",
    organizer: "Dadada",
    date: "22 July 2024",
    startdate: "Mon 22 Jul",
    enddate: "Mon 22 Jul",
    starttime: "17:30 PM",
    endtime: "23:30 PM",
    location: "Paris",
    contract: false
  },
  // Ajoutez plus d'items ici
];

export default itemsData;
