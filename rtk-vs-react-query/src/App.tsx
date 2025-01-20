import { FetchExample } from "./views/FetchExample";
import { useState } from 'react';
import { ReactQueryExample } from "./views/ReactQueryExample";
import { RTKQueryExample } from "./views/RTKQueryExample";
import { Readme } from "./views/Readme";

export const App = () => {

  const [readme, setReadme] = useState<boolean>(true);
  const [fetch, setFetch] = useState<boolean>(false);
  const [reactQuery, setReactQuery] = useState<boolean>(false);
  const [rtkQuery, setRtkQuery] = useState<boolean>(false);

  const handleReadme = () => {
    setFetch(false);
    setReactQuery(false);
    setRtkQuery(false);
    setReadme(true);
  };

  const handleFetchExample = () => {
    setFetch(true);
    setReactQuery(false);
    setRtkQuery(false);
    setReadme(false);
  };

  const handleReactQueryExample = () => {
    setFetch(false);
    setReactQuery(true);
    setRtkQuery(false);
    setReadme(false);
  };

  const handleRTKQueryExample = () => {
    setFetch(false);
    setReactQuery(false);
    setRtkQuery(true);
    setReadme(false);
  };

  return (
    <>
      <div>
        <div style={{ position: "absolute", top: "20px" }}>
          <button onClick={handleFetchExample}>Fetch Example</button>
          <button onClick={handleReactQueryExample}>React Query Example</button>
          <button onClick={handleRTKQueryExample}>RTK Query (redux) Example</button>
          <button onClick={handleReadme}>Readme</button>
        </div>
        {readme && <Readme />}
        {fetch && <FetchExample />}
        {reactQuery && <ReactQueryExample />}
        {rtkQuery && <RTKQueryExample />}
      </div>
    </>
  );
};
