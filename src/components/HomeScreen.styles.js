import styled from "styled-components";

export const Screen = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.white};
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Divider = styled.div`
    height: 2px;
    background-color: ${(props) => props.theme.colors.yellow};
    width: 100%;
`;

export const LogoImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 8px;
`;

export const LogoText = styled.span`
    font-size: 40px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.white};
`;

export const HeaderIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 20px;
`;

export const MainCard = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    margin-top: 20px;
`;

export const MainCardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const MainCardOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent, rgba(26, 26, 26, 0.85));
`;

export const MainCardTitle = styled.p`
    position: absolute;
    bottom: 16px;
    left: 16px;
    right: 16px;
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.white};
`;

export const SponsorLogo = styled.img`
    height: 18px;
    vertical-align: middle;
`;

export const SponsorRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.$main ? "space-between" : "flex-end")};
    padding: 8px 16px;
`;

export const SponsorText = styled.span`
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.gray};
`;

export const PoweredBy = styled.span`
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.gray};
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const CommentCTA = styled.span`
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.yellow};
    cursor: pointer;
`;

export const SecondaryCard = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    margin-top: 0;
`;

export const SecondaryCardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const SecondaryCardOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent, rgba(26, 26, 26, 0.85));
`;

export const SecondaryCardTitle = styled.p`
    position: absolute;
    bottom: 16px;
    left: 16px;
    right: 16px;
    font-size: 14px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.white};
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
    font-size: 10px;
    color: ${(props) => (props.$active ? props.theme.colors.yellow : props.theme.colors.gray)};
    background: none;
    border: none;
    cursor: pointer;
`;

export const NavIcon = styled.span`
    font-size: 20px;
`;

export const NavLabel = styled.span`
    font-size: 10px;
`;
