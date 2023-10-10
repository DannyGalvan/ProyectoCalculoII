import { useState } from 'react';

const Test = () => {
    const [count, setCount] = useState(0)

    return (
      <>
        <div className='flex justify-center'>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src="/react.svg" className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 10)}>
            count is {count}
          </button>
          <p>
            Prueba de deploy gh-pages
          </p>
        </div>      
      </>
    )
}

export default Test
