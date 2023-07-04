import SivanImage from "../images/Mock/User/SivanImage.png";
import NaamaImage from "../images/Mock/User/NaamaImage.jpeg";
import panda from "../images/Mock/User/panda.png";
import crosswalk from "../images/Mock/User/crosswalk.png";
import WhiteQRCode from "../images/Mock/User/WhiteQRCode.png";
import BlackQRCode from "../images/Mock/User/BlackQRCode.png";

export default [
  {
    properties: {
      name: "Sivan Schwarzmann",
      image: SivanImage,
      city: "Tel Aviv City",
      vouchers: 2,
      credits: 5,
      points: 1,
      id: 0,
    },
    rewards: [
      {
        title: "Together Ecosystem",
        credit: "1",
        rewardId: "6745.8293.6521",
        sideName: "Ort",
        image: panda,
        textColor: "white",
        id: 1,
        qrCode: WhiteQRCode,
        status: "pending",
      },
      {
        title: "Together Ecosystem",
        credit: "1",
        rewardId: "6745.8293.6521",
        sideName: "Dobnov",
        image: panda,
        textColor: "white",
        id: 2,
        qrCode: WhiteQRCode,
        status: "received",
      },
      {
        title: "Together Ecosystem",
        credit: "1",
        rewardId: "6745.8293.6521",
        sideName: "Tel Aviv",
        image: crosswalk,
        textColor: "black",
        id: 3,
        qrCode: BlackQRCode,
        status: "received",
      },
    ],
    friends: [
      {
        name: "Naama Goldstein",
        image: NaamaImage,
        id: 1,
      },
    ],
  },
  {
    properties: {
      name: "Naama Goldstein",
      image: NaamaImage,
      city: "Tel Aviv City",
      vouchers: 2,
      credits: 5,
      points: 1,
      id: 0,
    },
    friends: [],
    rewards: [],
  },
];
