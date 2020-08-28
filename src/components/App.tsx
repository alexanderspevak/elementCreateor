import React, { useState } from 'react';
import { TabHolder, TabButton, ContentHolder } from './styled';
import InputConfig from './InputConfig';

export default () => {
  const [isConfigViewActive, toggleConfigView] = useState<boolean>(true);
  const [isResultViewActive, toggleResultView] = useState<boolean>(false);

  const activateInputView = (): void => {
    if (isConfigViewActive) return;
    toggleConfigView(true);
    toggleResultView(false);
  };

  const activateResultView = (): void => {
    if (isResultViewActive) return;
    toggleConfigView(false);
    toggleResultView(true);
  };

  const setupConfig = (config: string): void => {};

  return (
    <div>
      <TabHolder>
        <TabButton active={isConfigViewActive} onClick={activateInputView}>
          Config
        </TabButton>
        <TabButton active={isResultViewActive} onClick={activateResultView}>
          Result
        </TabButton>
      </TabHolder>
      <ContentHolder>
        <InputConfig setupConfig={setupConfig} />
      </ContentHolder>
    </div>
  );
};
