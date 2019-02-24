import React, { useEffect } from 'react';

import { useHttp } from '../hooks/http';

import Summary from './Summary';

const Character = props => {
  const [isLoading, fetchData] = useHttp('https://swapi.co/api/people/' + props.selectedChar, [props.selectedChar])
  let loadedCharacter = null;
  if (fetchData) {
  loadedCharacter = {
    id: props.selectedChar,
    name: fetchData.name,
    height: fetchData.height,
    colors: {
      hair: fetchData.hair_color,
      skin: fetchData.skin_color
    },
    gender: fetchData.gender,
    movieCount: fetchData.films.length
  };
} 
   
  // const [loadedCharacter, setLoadedCharacter] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // state = { loadedCharacter: {}, isLoading: false };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate');
  //   return (
  //     nextProps.selectedChar !== this.props.selectedChar ||
  //     nextState.loadedCharacter.id !== this.state.loadedCharacter.id ||
  //     nextState.isLoading !== this.state.isLoading
  //   );
  // }
  
  // componentDidUpdate(prevProps) {
  //   console.log('Component did update');
  //   if (prevProps.selectedChar !== this.props.selectedChar) {
  //     this.fetchData();
  //   }
  // }
  // const fetchData = () => {
  //   console.log(
  //     'Sending Http request for new character with id ' +
  //       props.selectedChar
  //   );
  //   setIsLoading(true);
  //   fetch('https://swapi.co/api/people/' + props.selectedChar)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Could not fetch person!');
  //       }
  //       return response.json();
  //     })
  //     .then(charData => {
  //       const loadedCharacter = {
  //         id: props.selectedChar,
  //         name: charData.name,
  //         height: charData.height,
  //         colors: {
  //           hair: charData.hair_color,
  //           skin: charData.skin_color
  //         },
  //         gender: charData.gender,
  //         movieCount: charData.films.length
  //       };
  //       setLoadedCharacter(loadedCharacter);
  //       setIsLoading(false);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  //   return () => {
  //     console.log('Cleaning UP ...')
  //   }
  // }, [props.selectedChar])
  useEffect(() => {
    return () => {
      console.log('Component didUnmount ...')
    }
  }, [])
  // componentDidMount() {
  //   this.fetchData();
  // }

  
  // componentWillUnmount() {
  //   console.log('Too soon...');
  // }

 
  let content = <p>Loading Character...</p>;

  if (!isLoading && loadedCharacter) {
    content = (
      <Summary
        name={loadedCharacter.name}
        gender={loadedCharacter.gender}
        height={loadedCharacter.height}
        hairColor={loadedCharacter.colors.hair}
        skinColor={loadedCharacter.colors.skin}
        movieCount={loadedCharacter.movieCount}
      />
    );
  } else if (!isLoading && !loadedCharacter) {
    content = <p>Failed to fetch character.</p>;
  }
  return content;
}


export default React.memo(Character);
