import React, { useState } from 'react';
import { TabHolder, TabButton, ContentHolder } from './styled';
import InputConfig from './Config';
import Items from './Items';
import { Config } from './constants';

export default () => {
  const [isConfigViewActive, toggleConfigView] = useState<boolean>(true);
  const [isResultViewActive, toggleResultView] = useState<boolean>(false);
  const [config, setConfig] = useState<Config>({ items: [] });
  const [textAreaValue, setTextAreaValue] = useState('');

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

  const setupConfig = (config: Config): void => {
    setConfig(config);
  };

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
        {isConfigViewActive && (
          <InputConfig
            setupConfig={setupConfig}
            setTextAreaValue={setTextAreaValue}
            textAreaValue={textAreaValue}
          />
        )}
        {isResultViewActive && (
          <Items
            config={config}
            setTextAreaValue={setTextAreaValue}
            setConfig={setupConfig}
          />
        )}
      </ContentHolder>
    </div>
  );
};
