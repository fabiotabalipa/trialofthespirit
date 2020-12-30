import React from 'react';
import {FlatList} from 'react-native-gesture-handler';

import {Card, Header} from '../../components';
import {
  COLOR_MEDIUM_GREY,
  COLOR_YELLOW,
  ICON_TYPE_DESIGNER,
  ICON_TYPE_DEVELOPER,
} from '../../globals/constants';
import {Brush, Code} from '../../icons';
import {Background, Text} from './style';

const creditsList = [
  {
    iconType: ICON_TYPE_DEVELOPER,
    name: 'Fábio Tabalipa',
    role: 'Author',
    url: 'https://github.com/fabiotabalipa/',
  },
  {
    iconType: ICON_TYPE_DEVELOPER,
    name: 'Nikolaj Hansen',
    role: 'SW Quotes API',
    url: 'http://swquotes.digitaljedi.dk/',
  },
  {
    iconType: ICON_TYPE_DESIGNER,
    name: 'Jory Raphael',
    role: 'Icons (Lea, Obi-Wan, Palpatine)',
    url: 'http://www.sensibleworld.com/',
  },
  {
    iconType: ICON_TYPE_DESIGNER,
    name: 'Freepik',
    role: 'Icon (Lightsabers)',
    url: 'https://www.flaticon.com/authors/freepik/',
  },
  {
    iconType: ICON_TYPE_DESIGNER,
    name: 'Ionic Framework team',
    role: 'Ionicons',
    url: 'https://ionicons.com/',
  },
  {
    iconType: ICON_TYPE_DESIGNER,
    name: 'Fonticons, Inc.',
    role: 'FontAwesome 5',
    url: 'https://fontawesome.com/',
  },
];

const DeveloperIcon: React.FC = () => (
  <Code color={COLOR_MEDIUM_GREY} size={36} />
);
const DesignerIcon: React.FC = () => (
  <Brush color={COLOR_MEDIUM_GREY} size={36} />
);

const Credits: React.FC = () => (
  <Background>
    <Header color={COLOR_YELLOW} title="Credits" />
    <FlatList
      data={creditsList}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <Card
          icon={
            item.iconType === ICON_TYPE_DESIGNER ? (
              <DesignerIcon />
            ) : (
              <DeveloperIcon />
            )
          }
          description={item.role}
          title={item.name}
          url={item.url}
        />
      )}
    />
    <Text>MIT License</Text>
  </Background>
);

export default Credits;
