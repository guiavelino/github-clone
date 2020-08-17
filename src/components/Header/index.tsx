import React, { useState } from 'react'

import { Container, GithubLogo, SearchForm } from './styles';
import { useNavigate } from 'react-router-dom';
import { ThemeName } from '../../styles/themes';

interface Props {
    themeName: ThemeName,
    setThemeName: (newName: ThemeName) => void
}


const Header: React.FC<Props> = ({themeName, setThemeName}) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        navigate('/' + search.toLocaleLowerCase().trim());
    }

    function toggleTheme() {
        setThemeName(themeName == 'light' ? 'dark' : 'light')
    }

    return (
       <Container>
           <GithubLogo onClick={toggleTheme} />
           <SearchForm onSubmit={handleSubmit}>
                <input 
                    style={{color: "#fff"}}
                    type="text" 
                    placeholder="Enter Username or Repo..."
                    value={search}
                    onChange={e => setSearch(e.currentTarget.value)}
                />
           </SearchForm>
       </Container>
    )
}

export default Header;
