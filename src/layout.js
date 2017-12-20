import constants from './constants';
const { category } = constants;

export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const { layout } = category;
  const { blocks } = config;
  const addBlock = (name = '', attr = {}) => (blocks.indexOf(name) >= 0) ? bm.add(name, attr) : null;

  // Container
  addBlock('container', {
    label: 'Container',
    category: layout,
    content: `
      <div class="container" data-gjs-custom-name="Container"></div>
    `
  })

  // Columns 2
  addBlock('columns-2', {
    label: '2 Columns',
    category: layout,
    content: `
      <div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
        <div class="cell col-md-6" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
        <div class="cell col-md-6" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
      </div>
    `
  })

  // Columns 3
  addBlock('columns-3', {
    label: '3 Columns',
    category: layout,
    content: `
      <div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
        <div class="cell col-md-4" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
        <div class="cell col-md-4" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
        <div class="cell col-md-4" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
      </div>
    `
  })

  // Columns 4
  addBlock('columns-4', {
    label: '4 Columns',
    category: layout,
    content: `
      <div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
        <div class="cell col-md-3" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
        <div class="cell col-md-3" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
        <div class="cell col-md-3" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
        <div class="cell col-md-3" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
      </div>
    `
  })

  // Columns 4/8
  addBlock("columns-4-8", {
    label: "2 Columns 4/8",
    category: layout,
    content: `
      <div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
        <div class="cell col-md-4" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
        <div class="cell col-md-8" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
      </div>
    `
  });

  // Columns 8/4
  addBlock("columns-8-4", {
    label: "2 Columns 8/4",
    category: layout,
    content: `
      <div class="row" data-gjs-droppable=".cell" data-gjs-custom-name="Row">
        <div class="cell col-md-8" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
        <div class="cell col-md-4" data-gjs-draggable=".row" data-gjs-custom-name="Cell"></div>
      </div>
    `
  });

  // Well
  addBlock('well', {
    label: 'Well',
    category: layout,
    content: `
      <div class="well"></div>
    `
  })
}
