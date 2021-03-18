/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const PLUGIN_ID = kintone.$PLUGIN_ID;

const saveConfig = () => {
  const appCode = document.querySelector('#pc-app-code').value;

  if (!appCode) {
    alert('appCodeを入力してください。Please input appCode.');
    return;
  }

  const row = document.querySelectorAll('.tr-sheet');
  const sheets = [];

  for (const tr of row) {
    const id = tr.querySelector('.pc-sheet-id').value;
    const title = tr.querySelector('.pc-sheet-title').value;

    if (!id || !title) {
      alert('帳票IDと名前を入力してください。Please input sheet id and title.');
      return;
    }

    sheets.push({
      id: Number(id),
      title,
    });
  }

  const config = {
    appCode,
    sheets,
  };

  kintone.plugin.app.setConfig({ pconfig: JSON.stringify(config) });
};

const PluginConfig = (props) => {
  const appCode = props.pconfig.appCode;

  let psheet = [
    {
      id: '',
      title: '',
      key: Math.random().toString(32).substring(2),
    },
  ];
  if (props.pconfig.sheets) {
    psheet = props.pconfig.sheets.map(({ id, title }) => ({
      id,
      title,
      key: Math.random().toString(32).substring(2),
    }));
  }

  const [sheetList, setSheetList] = useState(psheet);

  const addRow = () => {
    const newSheetList = [
      ...sheetList,
      { id: '', title: '', key: Math.random().toString(32).substring(2) },
    ];
    setSheetList(newSheetList);
  };

  const deleteRow = (index) => {
    console.log(index);
    if (sheetList.length === 1) {
      return;
    }

    const newSheetList = sheetList.filter((n, i) => i !== index);
    console.log(newSheetList);
    setSheetList(newSheetList);
  };

  const trSheets = [];
  sheetList.forEach((sheet, index) => {
    trSheets.push(
      <tr className="tr-sheet" key={sheet.key}>
        <td>
          <div className="kintoneplugin-table-td-control">
            <div className="kintoneplugin-table-td-control-value">
              <div className="kintoneplugin-input-outer">
                <input
                  className="kintoneplugin-input-text pc-sheet-id"
                  type="text"
                  defaultValue={sheet.id}
                />
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="kintoneplugin-table-td-control">
            <div className="kintoneplugin-table-td-control-value">
              <div className="kintoneplugin-input-outer">
                <input
                  className="kintoneplugin-input-text pc-sheet-title"
                  type="text"
                  defaultValue={sheet.title}
                />
              </div>
            </div>
          </div>
        </td>
        <td className="kintoneplugin-table-td-operation">
          <button
            onClick={addRow}
            type="button"
            className="kintoneplugin-button-add-row-image"
            title="Add row"
          />
          <button
            onClick={() => deleteRow(index)}
            type="button"
            className="kintoneplugin-button-remove-row-image"
            title="Delete this row"
          />
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="config-row">
        <div className="kintoneplugin-title">
          appCode<span className="kintoneplugin-require">*</span>
        </div>
        <div className="kintoneplugin-input-outer">
          <input
            id="pc-app-code"
            className="kintoneplugin-input-text"
            type="text"
            size="50"
            defaultValue={appCode}
          />
        </div>
      </div>
      <div className="config-row">
        <table className="kintoneplugin-table">
          <thead>
            <tr>
              <th className="kintoneplugin-table-th">
                <span className="title">帳票ID</span>
              </th>
              <th className="kintoneplugin-table-th">
                <span className="title">帳票名</span>
              </th>
              <th className="kintoneplugin-table-th-blankspace" />
            </tr>
          </thead>
          <tbody>{trSheets}</tbody>
        </table>
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
  console.log(savedConfig);

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
