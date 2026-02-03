import { useEffect, useState } from 'react';
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario, setErro }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);

  useEffect(() => {
    setEstaCarregando(true);

    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Usuário não encontrado');
        }
        return res.json();
      })
      .then(resJson => {
        setRepos(resJson);
        setEstaCarregando(false);
      })
      .catch(() => {
        setErro('Usuário não encontrado 😢');
        setEstaCarregando(false);
        setRepos([]);
      });
  }, [nomeUsuario]);

  if (estaCarregando) {
    return <h2 style={{ textAlign: 'center' }}>Carregando...</h2>;
  }

  return (
    <ul className={styles.list}>
      {repos.map(({ id, name, language, html_url }) => (
        <li className={styles.listItem} key={id}>
          <div><b>Nome:</b> {name}</div>
          <div><b>Linguagem:</b> {language}</div>
          <a className={styles.itemLink} href={html_url} target="_blank">
            Visitar no GitHub
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ReposList;

