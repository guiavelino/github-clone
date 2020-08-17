import React from 'react'

import { Container, Breadcrump, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';
import { Link } from 'react-router-dom';

const Repo: React.FC = () => {
    return (
        <Container>
            <Breadcrump>
                <RepoIcon />
                <Link className={'username'} to={'/Guilherme1612'}>
                    Guilherme1612
                </Link>
                <span>/</span>
                <Link className={'reponame'} to={'/Guilherme1612/github-clone'}>
                    github-clone
                </Link>
            </Breadcrump>
            <p>Clone da interface do github utilizando a API para realizar a exibição de dados dos usuários.</p>
            <Stats>
                <li>
                    <StarIcon>
                        <b>9</b>
                        <span>stars</span>
                    </StarIcon>
                </li>
                <li>
                    <ForkIcon>
                        <b>0</b>
                        <span>forks</span>
                    </ForkIcon>
                </li>
            </Stats>
            <LinkButton href={'https://www.github.com/Guilherme1612/github-clone'}>
                <GithubIcon />
                <span>
                    View on Github
                </span>
            </LinkButton>
        </Container>
    )
}

export default Repo;
