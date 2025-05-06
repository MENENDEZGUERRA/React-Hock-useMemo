import React, { useState, useMemo } from 'react';

export default function UserSearch() {
  // Estado de personajes 
const [users, setUsers] = useState([
    { name: 'Isaac',       description: 'El niño protagonista, que huye de los abusos de su madre dentro de su propia imaginación.' },                                                  
    { name: 'Magdalene',   description: 'Representa a Isaac con pelo largo rubio; simboliza las tendencias travestis y la gula.' },                                                     
    { name: 'Cain',        description: 'Isaac visto como un ladrón; solo dispara por su ojo derecho debido a un daño en el otro.' },  
    { name: 'Judas',       description: 'Versión de Isaac alejada de la gracia de Dios, simbolizando la traición.' },                                                    
    { name: '??? (Blue Baby)', description: 'El alma de Isaac asfixiada dentro de un cofre; es una forma fantasmal.' },                                                    
    { name: 'Eve',         description: 'Añadida en el Halloween Update; simboliza el pecado original como lo ve su madre.' },                                               
    { name: 'Samson',      description: 'Introducido en Wrath of the Lamb; personifica la fuerza de voluntad para vencer a sus demonios.' },                                 
    { name: 'Azazel',      description: 'Añadido en Rebirth; Isaac corrupto por el pecado, tiene vuelo y lágrimas de brimstone.' },     
    { name: 'Lazarus',     description: 'Referencia bíblica; posee una vida extra que recupera al cambiar de piso si muere.' },  
    { name: 'Eden',        description: 'Personificación del Jardín del Edén; inicia con objetos y estadísticas aleatorias.' },        
    { name: 'The Lost',    description: 'El espíritu de Isaac sin cuerpo; vuela y usa lágrimas espectrales pero muere con un solo golpe.' },                         
    { name: 'Lilith',      description: 'Afterbirth DLC; no dispara por sí misma, depende de su familiar Incubus para atacar.' },                      
    { name: 'The Keeper',  description: 'Afterbirth DLC; cadáver disecado de Isaac que solo se cura con monedas, dispara tres lágrimas a la vez.' }, 
    { name: 'Apollyon',    description: 'Afterbirth+; encarna la plaga del Apocalipsis, comienza con el objeto Void.' },               
    { name: 'The Forgotten', description: 'Afterbirth+; cuerpo en descomposición y su alma separada, puede atacar cuerpo a cuerpo y a distancia.' },
    { name: 'Bethany',     description: 'Repentance DLC; no puede recoger corazones especiales y usa Book of Virtues para invocar lágrimas.’' }, 
    { name: 'Jacob & Esau', description: 'Repentance DLC; juego dual con dos hermanos simultáneos; si uno muere, muere el otro.' }  
  ]);
  
  const [search, setSearch] = useState('');
  const [newUser, setNewUser] = useState({ name: '', description: '' });

  // Filtrado useMemo
  const filtered = useMemo(() => {
    console.log('Filtrando lista...');
    return users.filter(u =>
      u.name.includes(search) || u.description.includes(search)
    );
  }, [search, users]);

  // Handlers
  const handleAdd = () => {
    if (!newUser.name.trim()) return;
    setUsers(prev => [...prev, newUser]);
    setNewUser({ name: '', description: '' });
  };

  return (
    <div className="container">
      <h1>The Binding of Isaac: Lista de personajes</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar por personaje o descripción 🔍"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <hr></hr>

      <div className="add-user">
        <input
          type="text"
          placeholder="Nombre"
          value={newUser.name}
          onChange={e => setNewUser(n => ({ ...n, name: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newUser.description}
          onChange={e => setNewUser(n => ({ ...n, description: e.target.value }))}
        />
        <button onClick={handleAdd}>Add User</button>
      </div>

      <hr></hr>

      <ul className="user-list">
        {filtered.map((u, i) => (
          <li key={i} className="user-item">
            <strong>{u.name}</strong>: {u.description}
          </li>
        ))}
      </ul>
    </div>
  );
}