import React from 'react';
import TopMenu from './TopMenu';
import RoundActions from './RoundActions';
import NPCsWindow from './NPCsWindow';
import Log from './Log';

export default function Main() {
  return (
    <div>
      <Log />
      <TopMenu />
      <RoundActions />
      <NPCsWindow />
    </div>
  );
}
