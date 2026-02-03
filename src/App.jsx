import { useState } from 'react';

import Perfil from './components/Perfil';
import ReposList from './components/ReposList';

function App() {
  const [inputUsuario, setInputUsuario] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [erro, setErro] = useState('');

  const buscarUsuario = () => {
    if (!inputUsuario.trim()) return;

    setErro('');
    setNomeUsuario(inputUsuario);
  };

  return (
    <main className="container">
      <section style={{ textAlign: 'center', margin: '40px 0' }}>
        <h2>Digite seu nome de usuário do GitHub</h2>

        <input
          type="text"
          value={inputUsuario}
          onChange={e => setInputUsuario(e.target.value)}
          placeholder="ex: karolinemunhoz"
          style={{ padding: '8px', marginTop: '16px', width: '250px' }}
        />

        <br />

        <button
          onClick={buscarUsuario}
          style={{
            marginTop: '12px',
            padding: '8px 16px',
            backgroundColor: 'var(--corPrincipal)',
            color: 'var(--corSecundaria)',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Buscar perfil
        </button>

        {erro && <p style={{ color: 'red', marginTop: '12px' }}>{erro}</p>}
      </section>

      {nomeUsuario && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} setErro={setErro} />
        </>
      )}
    </main>
  );
}

export default App;

