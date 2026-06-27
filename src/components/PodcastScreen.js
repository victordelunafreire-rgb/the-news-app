import styled from "styled-components";

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.white};
  padding-top: 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  margin-bottom: 8px;
`;

export const LogoImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 8px;
`;

export const LogoText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;

export const Pills = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 16px 12px;
  margin-bottom: 8px;
`;

export const Pill = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? props.theme.colors.yellow : "transparent")};
  color: ${(props) => (props.$active ? props.theme.colors.background : props.theme.colors.yellow)};
  border: ${(props) => (props.$active ? "none" : `1.5px solid ${props.theme.colors.yellow}`)};
`;

export const PillDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.white};
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 16px 12px;
  padding: 10px 16px;
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 20px;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray};
  width: 100%;
`;

export const SearchIcon = styled.span`
  font-size: 16px;
`;

export const EpisodeList = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0;
`;

export const EpisodeCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.card};
  overflow: visible;
  padding: 8px 16px 8px 0;
  border-radius: 8px;
  margin: 0 16px;
`;

export const EpisodeThumb = styled.div`
  width: 80px;
  height: 80px;
  min-width: 80px;
  background-color: ${(props) => props.theme.colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-left: -16px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.white};
`;

export const EpisodeInfo = styled.div`
  flex: 1;
  padding: 12px 16px;
`;

export const EpisodeTitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 4px;
  line-height: 1.4;
`;

export const EpisodeDate = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
`;

export const ProgressBar = styled.div`
  margin-top: 8px;
  height: 3px;
  background-color: ${(props) => props.theme.colors.darkGray};
  border-radius: 2px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: ${(props) => props.$progress}%;
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 2px;
`;

export const BottomNav = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  background-color: ${(props) => props.theme.colors.background};
  border-top: 1px solid ${(props) => props.theme.colors.card};
`;

export const NavItem = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
`;

export const NavIcon = styled.span`
    font-size: 20px;
`;

export const NavLabel = styled.span`
    font-size: 10px;
    color: ${(props) => props.theme.colors.gray};
`;
