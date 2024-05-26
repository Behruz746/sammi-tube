import {
  DeveloperMode,
  FaceRetouchingNatural,
  FitnessCenter,
  GraphicEq,
  LiveTv,
  MusicNote,
  School,
  SportsEsports,
  TheaterComedy,
  Checkroom,
  Home,
  Code,
  OndemandVideo,
} from "@mui/icons-material";

const logo = "/img/png/pngwing.com.png";

const category = [
  { name: "Developers", icon: <Code /> },
  { name: "Movie", icon: <OndemandVideo /> },
  { name: "Live", icon: <LiveTv /> },
  { name: "Gaming", icon: <SportsEsports /> },
  { name: "Education", icon: <School /> },
  { name: "Sport", icon: <FitnessCenter /> },
  { name: "Comedy", icon: <TheaterComedy /> },
  { name: "Podcast", icon: <GraphicEq /> },
  { name: "Fashion", icon: <Checkroom /> },
  { name: "Crypto", icon: <DeveloperMode /> },
  { name: "Gym", icon: <FitnessCenter /> },
  { name: "Beauty", icon: <FaceRetouchingNatural /> },
  { name: "Music", icon: <MusicNote /> },
];

export { logo, category };
