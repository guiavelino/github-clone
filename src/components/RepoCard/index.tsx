import React from 'react'
import { Link } from 'react-router-dom';

import { Container, TopSide, BotSide, RepoIcon, StarIcon, ForkIcon } from './styles';

interface Props {
    username: string,
    reponame: string,
    description?: string,
    language?: string,
    stars: number,
    forks: number
}

const RepoCard: React.FC<Props> = ({
    username,
    reponame,
    description,
    language,
    stars,
    forks,
}) => {
    const languageClass = language ? language.toLocaleLowerCase() : 'other';
    return (
        <Container>
            <TopSide>
                <header>
                    <RepoIcon />
                    <Link to={`/${username}/${reponame}`}>{reponame}</Link>
                </header>
                <p>{description}</p>
            </TopSide>
            <BotSide>
                <ul>
                    <li>
                        <div className={`language ${languageClass}`} ></div>
                        <span>{language}</span>
                    </li>
                    <li>
                        <StarIcon />
                        <span>{stars}</span>
                    </li>
                    <li>
                        <ForkIcon />
                        <span>{forks}</span>
                    </li>
                </ul>
            </BotSide>
        </Container>
    )
}

export default RepoCard;
