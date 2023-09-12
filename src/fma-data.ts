export type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
};

 export const dataCharacter: Character[] = [
  {
    name: "Alex Louis Armstrong",
    nickName: "Major Armstrong",
    skillset: ["Flawless Bodybuilding", "Stone Alchemy"],
    votes: 90,
    background:
      "Major Armstrong may look big and strong, but deep down he's the biggest sap in the entire show",
    imageUrl:
      "https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg",
  },
  {
    name: "Alfonse Elrich",
    nickName: null,
    skillset: ["Being Loveable, Alchemy"],
    votes: 110,
    background:
      "Alphonse is a walking suit of armor on a quest to find his real body",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d843633d-1147-4204-bf9c-9cb8088abd09/d57lmke-a45d2c9c-b789-494d-bd46-b21d12761a2e.png/v1/fill/w_526,h_662,strp/alphonse_elric_render_by_animesennin_d57lmke-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjYyIiwicGF0aCI6IlwvZlwvZDg0MzYzM2QtMTE0Ny00MjA0LWJmOWMtOWNiODA4OGFiZDA5XC9kNTdsbWtlLWE0NWQyYzljLWI3ODktNDk0ZC1iZDQ2LWIyMWQxMjc2MWEyZS5wbmciLCJ3aWR0aCI6Ijw9NTI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.mcY7YkXOaEYrgiPC2neRL8E_HuvLdFiDH7Sd6xjF1Nw",
  },
  {
    name: "Edward Elrich",
    nickName: "The Fullmetal Alchemist",
    skillset: ["Human Transmutation", "Alchemy", "Being Short"],
    votes: 109,
    background:
      "Edward is a master alchemist and our main character... just don't call him short",
    imageUrl:
      "https://www.pngkit.com/png/detail/952-9524083_edward-elric-photo-edwardelric7-full-body-edward-elric.png",
  },
  {
    name: "Greed",
    nickName: "Greed",
    votes: 45,
    skillset: ["Skin Hardening", "Homunculii"],
    imageUrl: "https://www.pngitem.com/pimgs/m/337-3378121_greed-fma-fullmetalalchemist-greed-fullmetal-alchemist-png-transparent.png",
    background:
      "Greed is one of the seven deadly sins Homunculii. He's the most 'on our side' of all of them.",
  },
  {
    name: "Nina Tucker",
    nickName: null,
    skillset: ["Being Adorable", "Combining..."],
    votes: 80,
    imageUrl:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/08/fullmetal-alchemist-nina-tucker.jpg",
    background:
      "Nina is an adorable little girl! If you've watched FMA you know...",
  },
  {
    name: "Riza Hawkeye",
    nickName: "Hawkeye",
    skillset: ["Loyal AF", "Sniper"],
    votes: 95,
    background:
      "Hawkeye is Colonel Mustang's loyal assistant, and one of the strongest non-alchemist characters in the show",
    imageUrl:
      "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c8fa5aca-26f8-4bbd-914c-c80734654531/width=450/07.jpeg",
  },
  {
    name: "Solf J. Kimblee",
    nickName: "The Crimson Alchemist",
    votes: -9000,
    skillset: ["Being a piece of sh*t", "Alchemy"],
    background: "Kimblee suckkkkkssss, seriously he's not very nice",
    imageUrl:
      "https://i.pinimg.com/originals/46/79/33/467933d362f6308936063e7b723751b0.png",
  },
  {
    name: "Tim Marcoh",
    nickName: "Dr. Marcoh",
    votes: 40,
    skillset: ["Healing Alchemy", "Making Philospher Stones"],
    background:
      "Dr. Marcoh did some F**ked up S**t in the war on ishval, but his redemption arc is strong",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYjljMjEzZmUtMjE2My00NWY1LTljMzAtYWNjOTI5Yzk5NmZjXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_.jpg",
  },
  {
    name: "Winrey Rockbell",
    nickName: null,
    votes: 93,
    skillset: ["Automail Expert", "Delivering Babies"],
    background:
      "Winrey is Edward and Al's best friend, and it's a good thing because her specialty is making the best automail out there",
    imageUrl:
      "https://s3.narvii.com/image/jnezlapm5woend3mw3eryycqc52qstfz_00.jpg",
  },
];
