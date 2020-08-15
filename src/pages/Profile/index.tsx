import React from 'react'

import ProfileData from '../../components/ProfileData';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading } from './styles';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData 
                        username={"Guilherme1612"}
                        name={"Guilherme Avelino"}
                        avatarUrl={"https://avatars1.githubusercontent.com/u/58201367?s=460&u=32827adcba7f082a960a19d4f553a25523a58a70&v=4"}
                        followers={887}
                        following={7}
                        company={"Facebook"}
                        location={"São Paulo, Brasil"}
                        email={"guilherme.avelino@github.com"}
                        blog={undefined}
                    />
                </LeftSide>
                <RightSide>
                    <Repos>
                        <h2>Random repos</h2>
                        <div>
                            {[1, 2, 3, 4, 5, 6].map(n => (
                                <RepoCard 
                                    key={n}
                                    username={"Guilherme1612"}
                                    reponame={"github-clone"}
                                    description={" Clone da interface do github utilizando a API para realizar a exibição de dados dos usuários."}
                                    language={n % 3 == 0 ? "JavaScript" : "TypeScript"}
                                    stars={8}
                                    forks={4}
                                />
                            ))}
                        </div>
                    </Repos>
                    <CalendarHeading>
                        Random calendar (do not represent actual data)
                    </CalendarHeading>
                    
                    <RandomCalendar />
                </RightSide>
            </Main>
        </Container>
    )
}

export default Profile;
