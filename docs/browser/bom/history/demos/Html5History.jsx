import React, { useEffect } from 'react';
import { Button, Space } from 'antd';

function Html5History() {
  const popStateHandler = e => {
    console.log('e: ', e.state);
  };

  const handlePushState = () => {
    const url = '/browser/bom/window';

    const state = {
      back: url,
      current: '',
      forward: '',
      position: 0,
      replaced: false,
    };
    console.log(state);
    history.pushState(state, '', url);
  };

  useEffect(() => {
    window.addEventListener('popstate', popStateHandler, false);

    return () => {
      window.removeEventListener('popstate', popStateHandler, false);
    };
  }, []);

  return (
    <Space>
      <Button onClick={handlePushState}>pushState</Button>
    </Space>
  );
}

export default Html5History;
