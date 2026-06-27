import logo from "../assets/logo.jpeg";
import {
	BottomNav,
	EpisodeCard,
	EpisodeDate,
	EpisodeInfo,
	EpisodeList,
	EpisodeThumb,
	EpisodeTitle,
	Header,
	LogoImg,
	LogoText,
	NavIcon,
	NavItem,
	NavLabel,
	Pill,
	PillDot,
	Pills,
	ProgressBar,
	ProgressFill,
	Screen,
	SearchBar,
	SearchIcon,
	SearchInput,
} from "./PodcastScreen.styles.js";

const episodes = [
	{
		id: 1,
		title: '"Pressão contra bets na Copa..."',
		date: "25 de jun. • 16:12",
		emoji: "🎰",
		playing: true,
		progress: 68,
	},
	{
		id: 2,
		title: '"PF mira banco de Edir Macedo..."',
		date: "24 de jun. • 16:12",
		emoji: "👮",
	},
	{
		id: 3,
		title: '"Calote de R$ 100 mi nas bets..."',
		date: "23 de jun. • 16:12",
		emoji: "💸",
	},
	{
		id: 4,
		title: '"Hacker invade sistema da Defesa..."',
		date: "22 de jun. • 16:12",
		emoji: "💻",
	},
];

const channels = ["the news", "Tá Podendo Falar?", "SLOGAN"];
const activeChannel = "the news";

function PodcastScreen({ onNavigate }) {
	return (
		<Screen>
			<Header>
				<LogoImg src={logo} alt="the news" />
				<LogoText>the news</LogoText>
			</Header>

			<Pills>
				{channels.map((channel) => (
					<Pill key={channel} type="button" $active={activeChannel === channel}>
						{activeChannel === channel && <PillDot />}
						{channel}
					</Pill>
				))}
			</Pills>

			<SearchBar>
				<SearchIcon>🔍</SearchIcon>
				<SearchInput placeholder="Buscar episódio..." />
			</SearchBar>

			<EpisodeList>
				{episodes.map((episode) => (
					<EpisodeCard key={episode.id}>
						<EpisodeThumb>{episode.emoji}</EpisodeThumb>
						<EpisodeInfo>
							<EpisodeTitle>{episode.title}</EpisodeTitle>
							<EpisodeDate>{episode.date}</EpisodeDate>
							{episode.playing && (
								<ProgressBar>
									<ProgressFill $progress={episode.progress} />
								</ProgressBar>
							)}
						</EpisodeInfo>
					</EpisodeCard>
				))}
			</EpisodeList>
			<BottomNav>
				<NavItem type="button" onClick={() => onNavigate("home")}>
					<NavIcon>📰</NavIcon>
					<NavLabel>home</NavLabel>
				</NavItem>
			</BottomNav>
		</Screen>
	);
}

export default PodcastScreen;
