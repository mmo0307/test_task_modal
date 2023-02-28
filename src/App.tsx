import React, {useEffect, useState} from 'react';
import './App.css';
import {Modal} from "./Modal/Modal";

export interface IData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function App() {
  const [active, setActive] = useState<boolean>(false);
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limits=200')
            .then(response => response.json())
            .then(json => setData(json));
  },  []);

  return (
      <>
          <button
              className="shadow"
              onClick={() => setActive(true)}
          >
              Click me!
          </button>

        <Modal active={active} setActive={setActive}>
            {data && data.map(item => <p key={item.id}>{item.title}</p>)}
        </Modal>
      </>
  );
}

export default App;
