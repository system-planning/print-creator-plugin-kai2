/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';

const PLUGIN_ID = kintone.$PLUGIN_ID;

const saveConfig = () => {
  const apiToken = document.querySelector('#pc-api-token').value;

  if (!apiToken) {
    alert('APIトークンを入力してください。Please input API Token.');
    return;
  }

  const useAutoSave = document.querySelector('#useAutoSave').checked;
  const indexShow = document.querySelector('#indexShow').checked;

  const config = {
    apiToken,
    useAutoSave,
    indexShow,
  };

  kintone.plugin.app.setConfig({ pconfig: JSON.stringify(config) });
};

const PluginConfig = (props) => {
  const apiToken = props.pconfig.apiToken;

  // 自動保存、一括出力対応
  let useAutoSave = true;
  let indexShow = true;
  if (Object.prototype.hasOwnProperty.call(props.pconfig, 'useAutoSave')) {
    useAutoSave = props.pconfig.useAutoSave;
  }

  if (Object.prototype.hasOwnProperty.call(props.pconfig, 'indexShow')) {
    indexShow = props.pconfig.indexShow;
  }

  return (
    <div>
      <div className="config-row">
        <div className="kintoneplugin-title">
          APIトークン<span className="kintoneplugin-require">*</span>
        </div>
        <div className="kintoneplugin-input-outer">
          <input
            id="pc-api-token"
            className="kintoneplugin-input-text"
            type="text"
            size="50"
            defaultValue={apiToken}
          />
        </div>
      </div>
      <div className="config-row">
        <div className="kintoneplugin-input-checkbox">
          <span className="kintoneplugin-input-checkbox-item">
            <input
              type="checkbox"
              name="useAutoSave"
              value="useAutoSave"
              id="useAutoSave"
              defaultChecked={useAutoSave}
            />
            <label htmlFor="useAutoSave">自動保存</label>
          </span>
        </div>
        <div className="kintoneplugin-input-checkbox">
          <span className="kintoneplugin-input-checkbox-item">
            <input
              type="checkbox"
              name="indexShow"
              value="indexShow"
              id="indexShow"
              defaultChecked={indexShow}
            />
            <label htmlFor="indexShow">一括出力</label>
          </span>
        </div>
      </div>
      <div className="config-row">
        <button className="kintoneplugin-button-dialog-ok" onClick={saveConfig}>
          保存する
        </button>
      </div>
    </div>
  );
};

const main = async () => {
  const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);

  let pconfig = {};
  if (Object.prototype.hasOwnProperty.call(savedConfig, 'pconfig')) {
    pconfig = JSON.parse(savedConfig.pconfig);
  }

  ReactDOM.render(
    <PluginConfig pconfig={pconfig} />,
    document.querySelector('#plugin-config')
  );
};

main();
