const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};
const EditalbleBlock = () => {
  return <div contentEditable="true" id={uid()}></div>;
};

export default EditalbleBlock;
