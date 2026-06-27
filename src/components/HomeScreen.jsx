import brazilImg from "../assets/brazil.jpg";
import logo from "../assets/logo.jpeg";
import michelleImg from "../assets/Michelle.avif";
import revolutLogo from "../assets/revolut-Logo.svg";
import stoneLogo from "../assets/stone.svg";
import venezuelaImg from "../assets/Venezuela.avif";
import {
	BottomNav,
	CommentCTA,
	Divider,
	Header,
	HeaderIcons,
	HeaderLeft,
	LogoImg,
	LogoText,
	MainCard,
	MainCardImage,
	MainCardOverlay,
	MainCardTitle,
	NavIcon,
	NavItem,
	NavLabel,
	PoweredBy,
	Screen,
	SecondaryCard,
	SecondaryCardImage,
	SecondaryCardOverlay,
	SecondaryCardTitle,
	SponsorLogo,
	SponsorRow,
} from "./HomeScreen.styles.js";

const sponsors = [stoneLogo, revolutLogo];

const activeSponsor = sponsors[Math.floor(Math.random() * sponsors.length)];

const articles = [
	{
		id: 1,
		title:
			"Nossa cobertura um tanto quanto diferente do jogo do Brasil com a Escócia",
		image: brazilImg,
		main: true,
	},
	{
		id: 2,
		title: "Venezuela é atingida pelo maior terremoto do século",
		image: venezuelaImg,
		main: false,
	},
	{
		id: 3,
		title: "O vídeo de Michelle Bolsonaro que está Movimentando Brasília",
		image: michelleImg,
		main: false,
	},
];

function HomeScreen({ onNavigate }) {
	return (
		<Screen>
			<Header>
				<HeaderLeft>
					<LogoImg src={logo} alt="the_news" />
					<LogoText>the news</LogoText>
				</HeaderLeft>
				<HeaderIcons>
					<span>🔔</span>
					<span>👤</span>
					<span>⚙️</span>
				</HeaderIcons>
			</Header>
			<Divider />

			{articles.map((article) => (
				<div key={article.id}>
					{article.main ? (
						<MainCard>
							<MainCardImage src={article.image} alt={article.title} />
							<MainCardOverlay />
							<MainCardTitle>{article.title}</MainCardTitle>
						</MainCard>
					) : (
						<SecondaryCard>
							<SecondaryCardImage src={article.image} alt={article.title} />
							<SecondaryCardOverlay />
							<SecondaryCardTitle>{article.title}</SecondaryCardTitle>
						</SecondaryCard>
					)}
					<Divider />
					<SponsorRow $main={article.main}>
						{article.main && (
							<PoweredBy>
								powered by{" "}
								<SponsorLogo src={activeSponsor} alt="patrocinador" />
							</PoweredBy>
						)}
						<CommentCTA>💬 Seja o primeiro a comentar</CommentCTA>
					</SponsorRow>
				</div>
			))}
			<BottomNav>
				<NavItem type="button" onClick={() => onNavigate("podcast")}>
					<NavIcon>🎙️</NavIcon>
					<NavLabel>podcast</NavLabel>
				</NavItem>
			</BottomNav>
		</Screen>
	);
}

export default HomeScreen;
