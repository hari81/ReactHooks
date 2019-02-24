import React from 'react';

import { useHttp } from '../hooks/http';

import './CharPicker.css';


const CharPicker = props => {
  // const [characters, setCharacters] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const [isLoading,fetchData] = useHttp('https://swapi.co/api/people', []);
  
  const characters = fetchData 
    ? fetchData.results.slice(0,5).map((char,index) => ({
        name: char.name,
        id: index + 1
      }))
    : [];
  // useEffect(() => {
  //   console.log('useEffect runs')
  //   setIsLoading(true);
    // fetch('https://swapi.co/api/people')
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch.');
    //     }
    //     return response.json();
    //   })
    //   .then(charData => {
    //     const selectedCharacters = charData.results.slice(0, 5);
    //     setIsLoading(false);
    //     setCharacters(
    //       selectedCharacters.map((char, index) => ({
    //         name: char.name,
    //         id: index + 1
    //     })))
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // }, [])
  
  // componentDidMount() {
  //   this.setState({ isLoading: true });
  //   fetch('https://swapi.co/api/people')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch.');
  //       }
  //       return response.json();
  //     })
  //     .then(charData => {
  //       const selectedCharacters = charData.results.slice(0, 5);
  //       this.setState({
  //         characters: selectedCharacters.map((char, index) => ({
  //           name: char.name,
  //           id: index + 1
  //         })),
  //         isLoading: false
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //  }
  
  
  let content = <p>Loading characters...</p>;

  if (
    !isLoading &&
    characters &&
    characters.length > 0
  ) {
    content = (
      <select
        onChange={props.onCharSelect}
        value={props.selectedChar}
        className={props.side}
      >
        {characters.map(char => (
          <option key={char.id} value={char.id}>
            {char.name}
          </option>
        ))}
      </select>
    );
  } else if (
    !isLoading &&
    (!characters || characters.length === 0)
  ) {
    content = <p>Could not fetch any data.</p>;
  }
  return content;
  
}

export default CharPicker;
