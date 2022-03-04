import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  justify-content: space-between;
`;

export const Header = styled.View`
  width: 100%;
  flex: 4;
  justify-content: flex-end;
  align-items: center;
`;

export const Body = styled.View`
  flex: 5;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${({ theme }) =>
    theme.GENERAL_PATTERNS.BORDER_RADIUS};
  border-top-left-radius: ${({ theme }) =>
    theme.GENERAL_PATTERNS.BORDER_RADIUS};
`;

export const Logo = styled.ImageBackground`
  width: 180;
  height: 180;
  position: absolute;
  right: -10;
  bottom: -25px;
`;

export const Pokemon = styled.ImageBackground`
  width: 250;
  height: 250;
  bottom: -50px;
  z-index: 99;
`;

export const TitleView = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  padding-left: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${({ theme }) => theme.SIZES.FONT_TITLE};
  text-transform: uppercase;
  top: 35px;
`;

export const Id = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: rgba(255,255,255,.5);
  font-size: ${({ theme }) => theme.SIZES.FONT_SUBTITLE};
  text-transform: uppercase;
  top: 20px;
  right: 20px;
  position: absolute;
`;

export const DataView = styled.View`
  flex: 1;
  width: 90%;
  justify-content: center;
`;

export const DataField = styled.View`
  height: 30px;
  width: 100%;
  padding-left: 20px;
  flex-direction: row;
`;

export const DataLabel = styled.Text`
  flex: 4;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.PLAIN_TEXT};
  font-size: ${({ theme }) => theme.SIZES.TEXT};
  text-transform: capitalize;
`;
export const DataValue = styled.Text`
  flex: 1;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.BLACK_500};
  font-size: ${({ theme }) => theme.SIZES.TEXT};
  text-transform: uppercase;
  /* background-color: ${({ theme }) => theme.COLORS.PLAIN_TEXT}; */
`;

export const TypesContainer = styled.View`
  position: absolute;
  left: 0;
  top: 80px;
  padding-left: 20px;
`;

export const TypeView = styled.View`
  background-color: rgba(255,255,255,.4);
  padding: 6px;
  border-radius: 60px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
`;

export const TypeText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${({ theme }) => theme.SIZES.SMALL_TEXT};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  text-transform: capitalize;
`;
