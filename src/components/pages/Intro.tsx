import Button from '../uis/Button';
import {IC_MASK} from '../../utils/Icons';
import IntroView from '../uis/IntroTemp';
import React from 'react';
import {RootStackNavigationProps} from '../navigations/RootStackNavigator';
import {User} from '../../types';
import {View} from 'react-native';
import {getString} from '../../../STRINGS';
import styled from '@emotion/native';
import {useAppContext} from '../../providers/AppProvider';
import {useTheme} from '../../providers/ThemeProvider';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({theme}) => theme.background};

  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const TestComponent = styled.View`
  height: 50px;
  width: 50px;
  background-color: red;
  border-radius: 10px;
`;

interface Props {
  navigation: RootStackNavigationProps<'Intro'>;
}

function Intro(props: Props): React.ReactElement {
  const {setUser} = useAppContext();

  return (
    <Container>
      <TestComponent
        style={{
          borderRadius: 30,
        }}
      />
    </Container>
  );
}

export default Intro;
