function rowTemplate({ number, name, score, code }) {
  const rowsContainer = document.querySelector('#rows-container');
  const rowTemplate = document.querySelector('#row-template');

  const clone = rowTemplate.content.cloneNode(true);
  clone.querySelector('div.table-row div.number').textContent = number;
  clone.querySelector('div.table-row div.name').textContent = name;
  clone.querySelector('div.table-row div.score').textContent = score;
  clone.querySelector('div.table-row div.code').textContent = code;

  rowsContainer.appendChild(clone);
}

export default rowTemplate;