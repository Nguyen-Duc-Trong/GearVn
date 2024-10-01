import { useState } from 'react';

const Count: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>bấm cmmd</button>
    </div>
  );
};
export default Count;
