const copy = {
  bind(el, { value }) {
    el.$value = value;
    el.handler = () => {
      if (!el.$value) {
        alert("无复制内容");
        return;
      }
      const textarea = document.createElement("textarea");
      textarea.value = el.$value;
      document.body.appendChild(textarea);
      textarea.select();
      const result = document.execCommand("Copy");
      if (result) {
        alert("复制成功");
      }
      document.body.removeChild(textarea);
    };
    el.addEventListener("click", el.handler);
  },
  componentUpdated(el, { value }) {
    el.$value = value;
  },
  unbind(el) {
    el.removeEventListener("click", el.handler);
  },
};
export default copy;
