interface compaignsType {
  image: string;
  title: string;
  raised: number;
  goal: number;
}

export const campaigns: compaignsType[] = [
  {
    image: "https://nasarna-react.wpocean.com/static/media/img-1.db23ba6d.png",
    title: "Ensure Education for every poor children",
    raised: 5000,
    goal: 9000,
  },
  {
    image: "https://nasarna-react.wpocean.com/static/media/img-2.7f30d201.png",
    title: "Supply drinking water for the people",
    raised: 4000,
    goal: 4800,
  },
  {
    image: "https://nasarna-react.wpocean.com/static/media/img-3.6d6b3c93.png",
    title: "Providing Healthy Food for the children",
    raised: 7600,
    goal: 9900,
  },
];
