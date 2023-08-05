import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    bio: "Bio of Adarsh Balika",
    websiteUrl: "https://nitinmittal.netlify.app/",
    websiteName: "AdarshBalika.com",
    picUrl:"",
    coverUrl:""

  },
  {
    _id: uuid(),
    firstName: "Goli",
    lastName: "Kumar",
    username: "GoliKumar",
    password: "GoliKumar123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    bio: "I don't write bio, bio writes me.",
    websiteUrl: "https://nitinmittal.netlify.app/",
    websiteName: "onlyGoli.com",
    picUrl:"",
    coverUrl:""

  },
  {
    _id: uuid(),
    firstName: "Vaibhav",
    lastName: "Sharma",
    username: "VaibhavSharma",
    password: "VaibhavSharma123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    bio: "I'm the Sharma ji ka beta you were always looking for.",
    websiteUrl: "https://nitinmittal.netlify.app/",
    websiteName: "SharmaJiKaBeta.com",
    picUrl:"",
    coverUrl:""

  },
  {
    _id: uuid(),
    firstName: "Raman",
    lastName: "Kumar",
    username: "RamanKumar",
    password: "RamanKumar123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    bio: "😎Haryanvi | 😎Hr45 aala | 🙏Respect girls🙏 | 😄Maa babu ka ladla😄 | मौत का खौफ नहीं है बस अपनों से #बिछड़ने_से_डरता_हूं",
    websiteUrl: "https://nitinmittal.netlify.app/",
    websiteName: "DudhDahiKaKhana.com",
    picUrl:"",
    coverUrl:""

  },
  {
    _id: uuid(),
    firstName: "Lovish",
    lastName: "Kothari",
    username: "LovishLothari",
    password: "LovishLothari123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    bio: "# Lover _ boy 🎸 | # Cake_death_on_27th_June🎂 | Hookah lover😘",
    websiteUrl: "https://nitinmittal.netlify.app/",
    websiteName: "hinge.com",
    picUrl:"",
    coverUrl:""

  },
  {
    _id: uuid(),
    firstName: "Nitin",
    lastName: "Mittal",
    username: "NitinMittal",
    password: "NitinMittal123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    bio: "Top Engager",
    websiteUrl: "https://nitinmittal.netlify.app/",
    websiteName: "nitinmittal.com",
    picUrl:"",
    coverUrl:""

  },
];
